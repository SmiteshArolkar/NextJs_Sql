import { AuthContext } from "@/Context/AuthContext";

import axios from "axios";
import { Router, useRouter } from "next/router";


import React, { useContext, useEffect, useState } from "react";
import Loader from "./Loader";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CartList = () => {
  const [activeTab, setActiveTab] = useState("approved");
  const [filteredItems, setFilteredItems] = useState([]);
  const [dataDocs,setData] = useState([])
  const {userDetails,currentRole ,userEmail} = useContext(AuthContext)
  const [acceptedDocs,setAcceptedDocs] = useState([])
  const [approvedDocs,setApprovedDocs] = useState([])
  const [isLoading,setLoading] = useState(false)
  const router = useRouter()

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSendMessage = (doc) => {
    if(userDetails)
    {
      setLoading(true)
    const event = doc.eventid
    const message = document.getElementById("message") ? document.getElementById("message").value : null
    const receiver = activeTab == "approved" ? doc.supplier : doc.user
    const requestid = doc.requestid
    const sender = userDetails.email
    const sendDate = new Date().toISOString()
    const data = {
      event : event,
      message : message,
      receiver : receiver,
      requestid : requestid,
      sender : sender,
      sendDate : sendDate,
    }

    axios.post("api/sendMessage",data).then((response) => {
      console.log(response)
    })
    console.log(sendDate)
    console.log(data)
    }
    setLoading(false)
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

  useEffect(() => {
    if( activeTab === "pending" && userDetails)
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
          setFilteredItems(docs.filter((item) => item.status === "pending"));
        }
        console.log(filteredItems)
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
          Pending Event
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
          Approved Event
        </button>
        <div className="border-r border-gray-300 mr-3"></div>
       {
        currentRole == "supplier" && (
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
          Accepted Event
        </button>
        )
       }
      </div>
      <div className="border-t border-gray-300 mb-8"></div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-[] border-2  bg-[#6979f8] rounded-lg shadow-xl p-4 grid lg:grid-cols-1 cursor-pointer"
          >
            <div>
              <h3 className="text-white font-semibold">{item.eventid}</h3>

              <div className="text-white my-2 flex gap-2">
             <input type="date"  disabled className=" rounded-md   flex  text-black  " value={item.startdate.slice(0,10)}></input>
             <p className="my-2">-</p>
             <input type="date"  disabled className=" rounded-md   flex  text-black  " value={item.enddate.slice(0,10)}></input>
                </div>
              <p className="text-white">Address: {item.address}</p>
              <p className="text-white">email: {item.email}</p>
              <p className="text-white">Event ID : {item.requestid}</p>
              <p className="text-white">Status: {item.status}</p>
            </div>
            <div className="grid hover:scale-125 duration-300">
              {item.status === "pending" ? (
                <div className="flex gap-2">
                  
                  <button className="border-2 px-2 w-1/4  my-4 mx-auto py-1 m-1 bg-white text-black rounded-lg shadow-lg w-max" name={item.requestid}
                  onClick={(e) =>{
                    handleDelete(e.target.name)
                  }}
                  >
                    Cancel Event
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
                      <button className="border-2 p-2 rounded-lg   text-white hover:bg-blue-400 duration-300 ">
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
                      id="message"
                        placeholder="message"
                        type="text"
                        className="p-2 border-2 border-blue-300 rounded-lg  hover:scale-150 w-10/12 hover:-translate-x-12 duration-300"
                      ></input>
                      <button className="border-2 p-2 rounded-lg   text-white hover:bg-blue-400 duration-300 "
                      
                      >
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
          activeTab === "accepted"  &&  (
            <div>
              {
                acceptedDocs && acceptedDocs.map((doc,index) => (<div
                key={index}
                >
                   <>
                  <div className="border-2 rounded-xl p-2 bg-[#4e4e4e]  shadow-xl flex gap-2 justify-between text-white">
                 
                    <div className="grid lg:grid-cols-1 p-3">
                      <div>
                      <h3 className="text-white font-semibold">{doc.eventid}</h3>
                      <div className="text-white my-2 flex gap-2">
             <input type="date"  disabled className=" rounded-md   flex  text-black  " value={doc.startdate.slice(0,10)}></input>
             <p className="my-2">-</p>
             <input type="date"  disabled className=" rounded-md   flex  text-black  " value={doc.enddate.slice(0,10)}></input>
                </div>
                      <div className=" p-1 rounded-lg m-1 ">
                        Client Email  :  {doc.user}
            
                      </div>
                      <div className="p-1 rounded-lg m-1 ">
                        Client Phone  :  {doc.phone}
            
                      </div>
                      <div className="p-1 rounded-lg m-1 ">
                       Event Id  :  {doc.requestid}
            
                      </div>
                      </div>
                     
                      <div className=" p-1 rounded-lg m-1  overflow-x-auto " >
                        Supplier :  {doc.supplier}
                      </div>
                      <div className="mx-4 flex flex-col gap-4">
                      <textarea
                        id="message"
                        placeholder="message"
                        type="text"
                        className="px-2 text-black w-full border-2 border-blue-300 rounded-lg  lg:hover:scale-150 w-1/2 hover:-translate-x-12 duration-300"
                      ></textarea>
                      <button className="border-2 mb-2 p-2 rounded-lg bg-white text-black  hover:text-white hover:bg-blue-400 duration-300 "
                      onClick={(e) => {
                       
                        handleSendMessage(doc)
                      }}
                      >
                        Send message
                      </button>
                      </div>
                   {isLoading && <div className=" m-2 "><Loader></Loader></div>}
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
                  <div className="border-2 rounded-xl p-2 bg-[#6979f8] shadow-xl text-white shadow flex gap-2 justify-between">
                 
                    <div className="grid lg:grid-cols-1 p-3">
                    <h3 className="text-white font-semibold">{doc.eventid}</h3>
                      <div>
                      <div className="text-white my-2 flex gap-2">
             <input type="date"  disabled className=" rounded-md   flex  text-black  " value={doc.startdate.slice(0,10)}></input>
             <p className="my-2">-</p>
             <input type="date"  disabled className=" rounded-md   flex  text-black  " value={doc.enddate.slice(0,10)}></input>
                </div>
                      <div className=" p-1 rounded-lg m-">
                       Event Id  :  {doc.requestid}
            
                      </div>
                      </div>
                    
                      <div className=" p-1 rounded-lg m- overflow-x-auto" >
                        Supplier :  {doc.supplier}
                      </div>
                      <div className=" p-1 rounded-lg m- overflow-x-auto" >
                        Phone :  {doc.supplier_phone}
                      </div>
                      <div className="mx-4 flex flex-col gap-4 m-3">
                      <textarea
                      id="message"
                        placeholder="message"
                        type="text"
                        className="px-2 border-2 text-black border-blue-300 w-full rounded-lg  lg:hover:scale-150 w-1/2 hover:-translate-x-12 duration-300"
                      ></textarea>
                      <button className="border-2 p-2 rounded-lg bg-white text-black  hover:bg-[#272c4d] hover:text-white duration-300 "
                     onClick={(e) => {
                      handleSendMessage(doc)
                    }}
                      >
                        Send message
                      </button>

                      {
                        isLoading && (<Loader></Loader>)
                      }

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
