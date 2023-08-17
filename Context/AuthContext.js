import { createContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { db } from "../lib/firebase";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentRole, setRole] = useState("");
  const [loading, setLoading] = useState(null);
  const [userEmail,setUserEmail] = useState('')
  const [userDetails,setUserDetails] = useState(null)



  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoading(true);
      if(user)
      {
          setCurrentUser(user);
          setUserEmail(user.email)
      }
    
      else setCurrentUser(null)
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (userEmail) {
      const data = {
        email: userEmail,
      }
      axios
        .post('/api/getUserRole',data)
        .then((response) => {
          console.log(response)
          setRole(response.data.data[0].role);
          console.log(response.data.data[0])
          setUserDetails(response.data.data[0])
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },[userEmail])

  useEffect(() => {
    console.log(userDetails);
  }, [userDetails]);

  return (
    <AuthContext.Provider
      value={{ currentUser,userDetails,userEmail,currentRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const signInWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    const user = userCredential.user;
    //console.log(user.email)
  } catch (e) {
    return e.message
    console.log(e.message, e.code);
  }
};

export const signUp = async (email,password) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email,password)
  } catch (e) {
    console.log(e.message);
    return e.message
   
  }
};



export const SignOut = async () => {
  try {
    await auth.signOut()
    setCurrentUser(null);
    return 1;
  } catch (e) {
    console.log("failed to logout");
    return 0;
  }
};
