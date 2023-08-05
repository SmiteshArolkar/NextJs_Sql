import axios from "axios";
import supabase from "../lib/supabase";

const { createContext, useState, useEffect } = require("react");

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentRole, setRole] = useState("");
  const [loading, setLoading] = useState(null);
  const [userEmail,setUserEmail] = useState('')

  useEffect(() => {
    

    supabase.auth.onAuthStateChange((event, session) => {
      setCurrentUser(session?.user || null);
     console.log(session.user.email)
      setUserEmail(session.user.email)
      
    //  if (session.user) {
    //   console.log("starting use effect")
    //   const data = {
    //     email: session.user.email,
    //   };
    //   console.log(data.email)
    //   axios
    //     .get("/api/getUserRole",data)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // }
    });
    console.log("starting use effect")
    
    return () => {};
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
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },[userEmail])

  return (
    <AuthContext.Provider value={{ currentUser, currentRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export const SignIn = async (email) => {
  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      shouldCreateUser: false,
    },
  });
  if (error) {
    console.log(" Auth Error : ", error.message);
    return error.message;
  }
};
export const SignOut = async () => {
  await supabase.auth.signOut();
};

export const SignUp = async (email) => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email,
  });
  if (error) {
    console.log(error.message);
    throw error;
  }
};
