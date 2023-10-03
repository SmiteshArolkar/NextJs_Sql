import { AuthContext } from '@/Context/AuthContext';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

const AccordionList = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const {currentUser,userEmail,userDetails} = useContext(AuthContext)
  const [isLoading,setLoading] = useState(false)
  const router = useRouter()


  const handleApproveRequest = (requestid) => {
    console.log(requestid)
    console.log("Approve Request")
    const data = {
      requestid : requestid,
      supplier : userDetails.email,
      supplier_phone: userDetails.phone
    }
    axios.post("api/ApproveRequest",data).then((response) => {
      console.log(response)
      if(response.data.status === "Success")
      {
        alert("Request Approved")
        router.reload()
        
      } else {
        alert("Failed to Approve Request")
      }
    }).catch((e) => {
      console.log(e)
    })
  }
 

  const [accordionItems,setAccordionItems] = useState([])

  useEffect(() => {
    if(accordionItems.length === 0)
    {
      const data = {
        email:currentUser ? currentUser.email : ""
      }
      axios.post("/api/getPendingRequests",data).then((response) => {
        console.log(response)
        console.log(response.data)
        const docs = []
        response.data.data.forEach((doc) => {
          docs.push(doc)
        })
        setAccordionItems(docs)
      }).catch((error) => {
      })
    }
      
  },[currentUser])

  



  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="p-4 lg:w-3/4 w-full mx-auto">
        <div className='text-center my-10 '>
        <h1 className="text-3xl font-bold mb-4">OPEN REQUEST
        </h1>
        <div className='flex justify-center mr-28   -my-2  '>
        <div className="w-28  mx-2 h-0 border border-[#6979f8] "></div>
        </div>
        
        </div>
     
      <div className="space-y-8 bg-white p-4 rounded-lg grid duration-500 shadow-xl text-slate-900">
        {accordionItems.map((item, index) => (
          <div key={item.id} className=" text-white border-2 p-2  bg-[#6979f8] lg:hover:scale-110 duration-500  rounded-xl">
            <button
              className="w-full text-left p-3"
              onClick={() => toggleAccordion(index)}
            >
              <div className=''>
              <span className="font-semibold">{item.eventid} <span className='mr-2'></span> | </span>
              <span className="font-semibold ml-3">Location : {item.address}</span>
              <span className="float-right">
                {activeIndex === index ? '-' : '+'}
              </span>
              
              </div>
              
              
              
            </button>
            {activeIndex === index && (
              <div className="p-3 grid grid-cols-1  text-white">
                <div>
                Contact : {item.email}<br></br>
                <div className="text-white my-2 flex gap-2">
             <input type="date"  disabled className=" rounded-md   flex  text-black  " value={item.startdate.slice(0,10)}></input>
             <p className="my-2">-</p>
             <input type="date"  disabled className=" rounded-md   flex  text-black  " value={item.enddate.slice(0,10)}></input>
                </div>
                </div>

             
              </div>
            )}
          </div>
        ))}
        {
          accordionItems.length === 0 ? <div className='text-center text-2xl font-bold'>No Open Requests</div> : ""
        }
      </div>
    </div>
  );
};

export default AccordionList;
