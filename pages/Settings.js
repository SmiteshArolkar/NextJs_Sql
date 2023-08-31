import { AuthContext, ResetPassword, SignOut } from "@/Context/AuthContext";
import Error from "@/components/Error";
import Loader from "@/components/Loader";
import Popup from "@/components/LoginPopUp";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

const Settings = () => {
  const [name, setName] = useState("John Doe");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [email, setEmail] = useState("johndoe@example.com");
  const [address, setAddress] = useState("123 Main St");
  const [city, setCity] = useState("City");
  const [state, setState] = useState("State");
  const { currentRole,userDetails } = useContext(AuthContext);
  const [changeModeOpen, setChangeMode] = useState(false);
  const [isLoading,setLoading] = useState(false)
  const [resetPss,setResetPss] = useState(false)
  const [m_error,setMError] = useState("")
  const router = useRouter()


  const ToggleChangeMode = () => {
    setChangeMode(!changeModeOpen);
  };

  useEffect(() => {
    if (userDetails) {
      setName(userDetails.name);
      setPhoneNumber(userDetails.phone);
      setEmail(userDetails.email);
      setAddress(userDetails.address);
      setCity(userDetails.city);
      setState(userDetails.state);
    }
  }, []);

  const handleChangeMode = async () => {
    setLoading(true)
    const data = {
      email: userDetails.email,
      role: "supplier"
    }
    const result = await axios.post("/api/ChangeUserMode",data).then((response) => {
      console.log(response)
      if(response.data.status === "success"){
        
        setLoading(false)
        router.reload()
      }
      else
      {
        setLoading(false)
       
      }
    })
    .catch((error) => {
      setLoading(false)
      console.log(error)
     
    })
  
  }

  const handlePasswordReset = () => {
    setLoading(true)
    const pss = document.getElementById("pss-reset-ip").value 
    if(!pss)
    {
      setMError("Incomplete field")
    }
    else
    {
      setMError("")
      const result = ResetPassword(pss).then(() => {
        SignOut().then(() => {
          router.replace("/")
        })
      }).catch((e) => {
        setMError(e)
      })
    }
    setLoading(false)
  }
  const handleResPssToggle = () => {
    setResetPss(!resetPss)
  }

  const handleSave = () => {
    // Perform actions to save the updated settings
    // This can include making API calls or updating a database

    console.log("Settings saved:", {
      name,
      phoneNumber,
      email,
      address,
      city,
      state,
    });
  };

  return (
    <div className="mt-10">
      <div className="text-3xl text-center font-extrabold">SETTINGS</div>
      <div className=" border-2 border-yellow-300 bg-white mt-10 rounded-lg p-3 w-3/4 mx-auto h-3/4  ">
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-4  ">Edit Details</h1>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div>
              <label className="block font-semibold mb-2">Name</label>
              <input
                type="text"
                className="border border-blue-300 rounded p-2 w-full bg-blue-100 active:scale-125  duration-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-semibold mb-2 ">Phone Number</label>
              <input
                type="text"
                className="border rounded p-2 w-full border-yellow-300 bg-yellow-100 active:scale-125  duration-700"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                className="border rounded p-2 w-full border-red-300 bg-red-100 active:scale-125  duration-700 "
                disabled="true"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Address</label>
              <input
                type="text"
                className="border rounded p-2 w-full border-blue-300 bg-blue-100 active:scale-125  duration-700"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-semibold mb-2 ">City</label>
              <input
                type="text"
                className="border rounded p-2 w-full border-green-300 bg-green-100 active:scale-125  duration-700"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">State</label>
              <input
                type="text"
                className="border rounded p-2 w-full border-slate-700 active:scale-125  duration-700"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
          <div className=" justify-between flex">
          <button
            className="mt-4 bg-green-900 text-white px-4 py-2 rounded hover:bg-blue-600 active:scale-125  duration-700"
            onClick={handleSave}
          >
            Update Details
          </button>

          
          </div>
          
        </div>
        
      </div>

      <div className="w-3/4 mx-auto m-4 p-4">
     {
      !resetPss && (
        <button
        className="p-4 m-4 font-bold rounded hover:opacity-40 hover:scale-110 duration-500 bg-red-700 text-white"
        onClick={() => {
          setResetPss(!resetPss)
        }}
      >
        Reset Password
      </button>
      )
     }
          {
            resetPss && (
<Popup isOpen={handleResPssToggle} onClose={handleResPssToggle} className=""> 
<h1 className="text-center font-extrabold">RESET PASSWORD</h1>
<p className="text-center text-red-800">Min 6 characters</p>
<div className="grid p-10 gap-4">
  <input id="pss-reset-ip" className=" border-2 border-teal-700 rounded-md p-1 font-bold text-center"></input>
  <button className="bg-blue-400 p-3 rounded-lg hover:scale-125 duration-300" onClick={handlePasswordReset}>Reset Password</button>
  {
            isLoading && (<Loader></Loader>)
            
  }
  {
    m_error && (<Error message={m_error}></Error>)
  }
</div>
</Popup>
             
            )
          }
        
      </div>
      {currentRole && currentRole === "user" && (
        <div className=" border-2 border-yellow-300 bg-white text-center mt-10 rounded-lg p-3 w-3/4 mx-auto h-3/4  ">
          <button
            className="p-4 m-4 font-bold rounded hover:opacity-40 hover:scale-110 duration-500 bg-red-700 text-white"
            onClick={ToggleChangeMode}
          >
            Change To Supplier
          </button>



          {
            changeModeOpen && (
              <Popup isOpen={ToggleChangeMode} onClose={ToggleChangeMode}>
                <h1 className="font-bold ">Are you Sure You Want to Change to Supplier ? </h1>
                <button className="p-2 px-10 hover:scale-105 duration-100 m-2 border bg-red-700 text-white rounded"
                onClick={handleChangeMode}
                >Yes</button>
             { isLoading && <Loader></Loader>}
              </Popup>
            )
          }
         
          
        </div>
      )}
    </div>
  );
};

export default Settings;
