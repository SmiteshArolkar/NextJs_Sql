import React, { useContext, useState } from "react";
import Loader from "./Loader";
import Error from "./Error";
import { AuthContext, SignIn, SignInWithPass, SignUp } from "@/Context/AuthContext";
import { useRouter } from "next/router";
import axios from "axios";
import Success from "./Success";
const LoginForm = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [Role, setRole] = useState("");
  const [Login, setLogin] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isSuccess,setSuccess] = useState("")
  const router = useRouter();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // const RegisterUser = async () => {
  //   const data = {
  //     email : "smitesharolkar99@gmail.com",
  //     phone: "9763056939",
  //     city: "mapusa",
  //     state:"goa",
  //     address:"adsd dsa sada s",
  //     role:"supplier",
  //     name : "smitesh arolkar",
  //   }
  //   axios.post("/api/registerUser",data).then((Response) => {
  //     console.log(Response)

  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // }

  const handleLogin = async () => {
    setLoading(true);
    const email = document.getElementById("email").value
    if(activeTab == "user")
    {
      console.log(email);
    const result = await SignIn(email);
    if (result) setError(result);
    else 
    setSuccess("Email Sent Successfully")
    }
    else
     {
      const password = document.getElementById("password").value
      const result = await SignInWithPass(email,password)
      if(result) setError(result)
      else  setSuccess("Login Successfully Return to home")
     }
    
    setLoading(false)
  };

  const handleRegister = async () => {
    setLoading(true);
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const address = document.getElementById("address").value;
    const password = document.getElementById("password").value

    console.log(email,name,phone,city,state,address,password)
    setLoading(true)
    if (email && name && phone && city && state && address && password) {
      
      const data = {
        email: email,
        phone: phone,
        city: city,
        state: state,
        address: address,
        role: activeTab,
        name: name,
      };
      console.log(data)
      
       SignUp(email,password).then((result) => {
        console.log(result)
        
        axios.post("/api/registerUser",data).then((response) => {
          console.log(response)
          if(response.data.status === "success"){
            
            setLoading(false)
            setSuccess("User Registered Successfully")
            router.reload()
          }
          else
          {
            setError(response.data.message.sqlMessage)
          }
        })
        .catch((error) => {
          console.log(error)
          setError(error.message)
        })
      
      }).catch((e) => {
        setError(e.message)
      })

      
      
    } else setError("incomplete field");
  

    setLoading(false)
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (Login)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md p-4">
          <div className="flex mb-4 ">
            <button
              className={`flex-1 p-2 text-center ${
                activeTab === "user" ? "bg-red-700 text-white" : "bg-gray-300"
              }`}
              onClick={() => handleTabChange("user")}
            >
              Log in with Email Link
            </button>
            <button
              className={`flex-1 p-2 text-center ${
                activeTab === "admin" ? "bg-red-700 text-white" : "bg-gray-300"
              }`}
              onClick={() => handleTabChange("admin")}
            >
              Login with Password
            </button>
          </div>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {/* Add your login/register form fields here */}
            <div className="mb-4">
              <div className="text-center font-extrabold my-4">
                <h1>LOGIN</h1>
              </div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="text"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="example@exp.com"
                id="email"
              />
              {
                activeTab == "admin" ? <div>
                   <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="*******"
                id="password"
              />
                </div> : <></>
              }
            </div>
            <div className="flex items-center  justify-between">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button" 
                onClick={handleLogin}
              >
                {activeTab === "user" ? "Send Email Link" : "Login"} 
              </button>
              {isLoading && <Loader></Loader>}
              <div>
              </div>
            </div>
          </form>
          {error && <Error message={error}></Error>}
          {isSuccess && <Success message={isSuccess}></Success>}
          <button
            className="m-2 "
            onClick={() => {
              setLogin(!Login);
            }}
          >
            Don't have a Account ? Register here
          </button>
        </div>
      </div>
    );
  else
    return (
      <div>
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-1/2 p-4">
            <div className="flex mb-4">
              <button
                className={`flex-1 p-2 text-center ${
                  activeTab === "user"
                    ? "bg-green-900 text-white"
                    : "bg-gray-300"
                }`}
                onClick={() => handleTabChange("user")}
              >
                User Registration
              </button>
              <button
                className={`flex-1 p-2 text-center ${
                  activeTab === "supplier"
                    ? "bg-green-900 text-white"
                    : "bg-gray-300"
                }`}
                onClick={() => handleTabChange("supplier")}
              >
                Supplier Registration
              </button>
            </div>
            <form className="bg-white grid grid-cols-2 gap-4 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="appearance-none border-gray-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                  id="email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="appearance-none border  border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="*********"
                  id="password"
                />
              </div>
              

              <div className="mb-4">
                <label className="block text-gray-700  border-gray-400 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="name"
                  className="appearance-none border rounded w-full  border-gray-400 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="name"
                  id="name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="appearance-none border rounded w-full  border-gray-400 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Phone Number"
                  id="phone"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  City
                </label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full border-gray-400 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="city"
                  id="city"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  State
                </label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full border-gray-400 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="state"
                  id="state"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Address
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-2 border-gray-400 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Address"
                  rows="3"
                  id="address"
                />
              </div>
              <div className="flex items-center gap-20 ">
                <button
                  className="bg-green-900 hover:bg-green-700 text-white border-gray-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleRegister}
                >
                  {activeTab === "user"
                    ? "Register as User"
                    : "Register as Supplier"}
                </button>
                {isLoading && <Loader></Loader>}
              </div>
              <div className="m-2 font-semibold">
               
              </div>
            </form>
            {error && <Error message={error}></Error>}
            {isSuccess && <Success message={isSuccess}></Success>}
            <button
              className="m-2 "
              onClick={() => {
                setLogin(!Login);
              }}
            >
              Already have a Account ? Click here
            </button>
          </div>
        </div>
      </div>
    );
};

export default LoginForm;
