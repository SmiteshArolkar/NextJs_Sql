import supabase from "../lib/supabase";

const { createContext, useState, useEffect } = require("react");

export const AuthContext = createContext();

export  function AuthProvider({ children })
{
    const [currentUser,setCurrentUser] = useState(null)
    const [currentRole,setRole] = useState("")
    const [loading,setLoading] = useState(null)

    useEffect(()=>{
      supabase.auth.onAuthStateChange((event,session) =>{
        setCurrentUser(session?.user || null)
      })

      return (()=>{

      })
    },[])

    return (
        <AuthContext.Provider value={{  currentUser  }}>
          {children}
        </AuthContext.Provider>
      );
}

export const SignIn = async (email,password) => {
    const {data , error} = await supabase.auth.signInWithPassword({email:email,password:password})
    if(error)
    {
        console.log(" Auth Error : " , error.message)
    }
}

export const SignOut = async () => {
    await supabase.auth.signOut();
}

export const SignUp = async (email,password) => {
    const {error} = await supabase.auth.signUp({email:email,password:password})
}