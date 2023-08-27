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
    <div className="p-4 w-3/4 mx-auto">
        <div className='text-center my-10 '>
        <h1 className="text-3xl font-bold mb-4">OPEN REQUEST</h1>
        </div>
     
      <div className="space-y-8 bg-white p-4 rounded-lg shadow-xl text-slate-900">
        {accordionItems.map((item, index) => (
          <div key={item.id} className="border-2 p-2 border-black bg-yellow-400 hover:scale-110 duration-500  rounded-xl">
            <button
              className="w-full text-left p-3"
              onClick={() => toggleAccordion(index)}
            >
              <div className=''>
              <span className="font-semibold">{item.eventid} <span className='mr-2'></span> | </span>
              <span className="font-semibold ml-3">date : {item.startdate.slice(0,10)}</span>
              <span className="float-right">
                {activeIndex === index ? '-' : '+'}
              </span>
              </div>
              
              
            </button>
            {activeIndex === index && (
              <div className="p-3 grid grid-cols-1">
                <div>
                Contact : {item.email}
                </div>

                <div className='text-center bg-green-500 border rounded-lg w-2/4 hover:bg-blue-300 mx-auto py-2 m-2 text-white'>
                    <button className='text-center w-full' onClick={()=>{
                      handleApproveRequest(item.requestid)
                    }}>ACCEPT REQUEST</button>
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
