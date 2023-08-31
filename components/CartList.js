import { AuthContext } from "@/Context/AuthContext";
import { data } from "autoprefixer";
import axios from "axios";
import { Router, useRouter } from "next/router";

import React, { useContext, useEffect, useState } from "react";

const CartList = () => {
  const [activeTab, setActiveTab] = useState("approved");
  const [filteredItems, setFilteredItems] = useState([]);
  const [dataDocs,setData] = useState([])
  const {userDetails,currentRole ,userEmail} = useContext(AuthContext)
  const [acceptedDocs,setAcceptedDocs] = useState([])
  const [approvedDocs,setApprovedDocs] = useState([])
  const router = useRouter()

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDelete = async (requestId) => {
    console.log(requestId);
    const data = {
      requestId:requestId
    }

    const res = await axios.post("/api/deleteRequest",data).then((response) => {
      console.log(response)
      router.reload()
      
    })
    .catch((e) => {
      console.log(e)
    })
    
  }

  useEffect(()=>{
    if(activeTab === "accepted" && userDetails)
    {
      const data = {
        email : userDetails.email
      }
      console.log(data)
      setData([])
      axios.post("api/getAcceptedRequests",data).then((response) => {
        const docs = []
        console.log(response)
        response.data.data.forEach((doc) => {
          docs.push(doc)
        })
        setAcceptedDocs(docs)
      }).catch((e) => {
        console.log(e)
      })
    }
  },[activeTab])

  useEffect(()=>{
    if(activeTab === "approved" && userDetails)
    {
      const data = {
        email : userDetails.email
      }
      console.log(data)
      setData([])
      axios.post("api/getApprovedRequests",data).then((response) => {
        const docs = []
        console.log(response)
        response.data.data.forEach((doc) => {
          docs.push(doc)
        })
        setApprovedDocs(docs)
      }).catch((e) => {
        console.log(e)
      })
    }
  },[activeTab])

 useEffect(() => {
  if(currentRole === "supplier" && userDetails)
  {
    const data = {email:userDetails.email}
    axios.post("api/getAcceptedRequest",data).then((response) => {
      console.log(response.data.data)
      console.log(typeof(dataDocs))
      const docs = []
      response.data.data.forEach((doc) => {
        docs.push(doc)
      })
      setData(docs)
      setFilteredItems([]);
      if (activeTab === "pending") {
        setFilteredItems(dataDocs.filter((item) => item.status === "pending"));
      } else if (activeTab === "approved") {
        setFilteredItems(dataDocs.filter((item) => item.status === "approved"));
      }
      else if (activeTab === "accepted") {
        setFilteredItems(dataDocs.filter((item) => item.status === "accepted"));
      }
    })
    .catch((e) => {
      console.log(e)
    })
  }
 },[currentRole,userDetails])

  useEffect(  () => {
    if(userDetails && activeTab === "pending")
    {
      const data = {email:userDetails.email}
      const res =   axios.post("/api/getRequests",data).then((response) => {
        console.log(response.data.data)
        console.log(typeof(dataDocs))
        const docs = []
        response.data.data.forEach((doc) => {
          docs.push(doc)
        })
        setData(docs)
        setFilteredItems([]);
        if (activeTab === "pending") {
          setFilteredItems(dataDocs.filter((item) => item.status === "pending"));
        } else if (activeTab === "approved") {
          setFilteredItems(dataDocs.filter((item) => item.status === "approved"));
        }
        else if (activeTab === "accepted") {
          setFilteredItems(dataDocs.filter((item) => item.status === "accepted"));
        }
      })
      .catch((e) => {
        console.log(e)
      })
    }
   

  }, [activeTab]);

  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      quantity: 3,
      status: "pending",
    },
    {
      id: 2,
      name: "Product 2",
      quantity: 1,
      status: "approved",
    },
    {
      id: 3,
      name: "Product 3",
      quantity: 3,
      status: "pending",
    },
    {
      id: 4,
      name: "Product 4",
      quantity: 1,
      status: "approved",
    },
    {
      id: 5,
      name: "Product 5",
      quantity: 3,
      status: "pending",
    },
    {
      id: 6,
      name: "Product 6",
      quantity: 1,
      status: "approved",
    },
    {
      id: 7,
      name: "Product 6",
      quantity: 1,
      status: "accepted",
    },
    // Add more items
  ];

  const handleSendMessage = (doc) => {

  }

  return (
    <div className="p-4">
      <div className="mb-4 flex">
        <button
          className={`mr-4 ${
            activeTab === "pending"
              ? "text-blue-300 font-bold "
              : "text-gray-500"
          }`}
          onClick={() => {
            setFilteredItems([]);
            handleTabChange("pending");
          }}
        >
          Pending Request
        </button>
        <div className="border-r border-gray-300 mr-3"></div>
        <button
          className={`mr-4 ${
            activeTab === "approved"
              ? "text-green-500 font-bold "
              : "text-gray-500"
          }`}
          onClick={() => {
            setFilteredItems([]);
            handleTabChange("approved");
          }}
        >
          Approved Request
        </button>
        <div className="border-r border-gray-300 mr-3"></div>
        <button
          className={`mr-4 ${
            activeTab === "accepted"
              ? "text-red-300 font-bold "
              : "text-gray-500"
          }`}
          onClick={() => {
            setFilteredItems([]);
            handleTabChange("accepted");
          }}
        >
          Accepted Requests
        </button>
      </div>
      <div className="border-t border-gray-300 mb-8"></div>

      <div className="grid grid-cols-1 gap-4 ">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-blue-200 border-2 rounded-lg shadow-xl p-4 grid grid-cols-2 cursor-pointer"
          >
            <div>
              <h3 className="text-gray-800 font-semibold">{item.eventid}</h3>

              <p className="text-gray-600">date : {item.startdate.slice(0,10) + " to " + item.enddate.slice(0,10)}</p>
              <p className="text-gray-600">Address: {item.address}</p>
              <p className="text-gray-600">email: {item.email}</p>
              
              <p className="text-gray-600">Status: {item.status}</p>
            </div>
            <div className="grid hover:scale-125 duration-300">
              {item.status === "pending" ? (
                <div className="flex gap-2">
                  
                  <button className="border-2 px-2 w-1/4  my-4 mx-auto py-1 m-1 bg-red-300 rounded-lg shadow-lg w-max" name={item.requestid}
                  onClick={(e) =>{
                    handleDelete(e.target.name)
                  }}
                  >
                    Cancel Request
                  </button>
                </div>
              ) :
              item.status === "approved" ? 
              (
                <>
                  <div className="border-2 rounded-xl p-2 bg-yellow-200 shadow flex gap-2 justify-between">
                    Supplier Details
                    <div>
                      <input
                        placeholder="message"
                        type="text"
                        className="p-2 border-2 border-blue-300 rounded-lg  hover:scale-150 w-10/12 hover:-translate-x-12 duration-300"
                      ></input>
                      <button className="border-2 p-2 rounded-lg bg-green-500  text-white hover:bg-blue-400 duration-300 ">
                        Send message
                      </button>
                    </div>
                  </div>
                </>
              ):
              (
                <>
                  <div className="border-2 rounded-xl p-2 bg-yellow-200 shadow flex gap-2 justify-between">
                    User Details
                    <div>
                      <input
                        placeholder="message"
                        type="text"
                        className="p-2 border-2 border-blue-300 rounded-lg  hover:scale-150 w-10/12 hover:-translate-x-12 duration-300"
                      ></input>
                      <button className="border-2 p-2 rounded-lg bg-green-500  text-white hover:bg-blue-400 duration-300 ">
                        Send Message
                      </button>
                    </div>
                  </div>
                </>
              )
              }

              {
                activeTab === "accepted" && <div>
                  {
                    acceptedDocs && <div>docs</div>
                  }
                  ACCEPTED 
                </div>
              }
             
            </div>
          </div>
        ))}
        {
          activeTab === "accepted" && (
            <div>
              {
                acceptedDocs && acceptedDocs.map((doc) => (<div>
                   <>
                  <div className="border-2 rounded-xl p-2 bg-yellow-200 shadow flex gap-2 justify-between">
                 
                    <div className="grid grid-cols-2">
                      <div>
                      <div className="border-2 border-black p-3 rounded-lg m-2">
                        Client Email  :  {doc.user}
            
                      </div>
                      <div className="border-2 border-black p-3 rounded-lg m-2 ">
                        Client Phone  :  {doc.phone}
            
                      </div>
                      </div>
                     
                      <div className="border-2 border-black p-3 rounded-lg m-4  overflow-x-auto" >
                        Supplier :  {doc.supplier}
                      </div>
                      <div className="mx-4 flex gap-4">
                      <input
                        placeholder="message"
                        type="text"
                        className="px-2 border-2 border-blue-300 rounded-lg  hover:scale-150 w-1/2 hover:-translate-x-12 duration-300"
                      ></input>
                      <button className="border-2 p-2 rounded-lg bg-green-500  text-white hover:bg-blue-400 duration-300 "
                      onClick={handleSendMessage}
                      >
                        Send message
                      </button>
                      </div>
                      
                    </div>
                    
                  </div>
                </>
                </div>))
              }
              
            </div>
          )
        }
           {
          activeTab === "approved" && (
            <div>
              {
                approvedDocs && approvedDocs.map((doc) => (<div>
                   <>
                  <div className="border-2 rounded-xl p-2 bg-yellow-200 shadow flex gap-2 justify-between">
                 
                    <div className="grid grid-cols-2">
                      <div>
                      <div className="border-2 border-black p-3 rounded-lg m-2">
                        Client Email  :  {doc.user}
            
                      </div>
                      <div className="border-2 border-black p-3 rounded-lg m-2 ">
                        Client Phone  :  {doc.phone}
            
                      </div>
                      </div>
                     
                      <div className="border-2 border-black p-3 rounded-lg m-4  overflow-x-auto" >
                        Supplier :  {doc.supplier}
                      </div>
                      <div className="mx-4 flex gap-4">
                      <input
                        placeholder="message"
                        type="text"
                        className="px-2 border-2 border-blue-300 rounded-lg  hover:scale-150 w-1/2 hover:-translate-x-12 duration-300"
                      ></input>
                      <button className="border-2 p-2 rounded-lg bg-green-500  text-white hover:bg-blue-400 duration-300 "
                      onClick={handleSendMessage}
                      >
                        Send message
                      </button>
                      </div>
                      
                    </div>
                    
                  </div>
                </>
                </div>))
              }
              
            </div>
          )
        }
      </div>
    </div>
  );
};

export default CartList;
