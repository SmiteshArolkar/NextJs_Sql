import { AuthContext } from '@/Context/AuthContext';
import Inbox from '@/components/Inbox';
import axios from 'axios';

import React, { useContext, useEffect, useState } from 'react';

const Chat = () => {

  const {userDetails} = useContext(AuthContext)
  const [chat,setChat] = useState([])
  const [messageMap,setMessageMap] = useState([])
  
    const [messages, setMessages] = useState([]);

      useEffect(() => {
        if(messages.length === 0 && userDetails)
        {
          const data = {
            email:userDetails.email
          }
          axios.post("api/getMessages",data).then((response) => {
            console.log(response)
            const docs = []
            response.data.data.forEach((doc)=>{
              docs.push(doc)
            })
            const chatDocs = []
            docs.forEach((doc) => {
              if(!chatDocs.includes(doc.sender)){
                chatDocs.push(doc.sender)
              }
            })

       

      
            console.log(docs)
            setChat(
              chatDocs
            )
            setMessages(docs)

          })
        }
      },[])

      const filterMessage = (sender,messages) => {
        const docs = messages.map((message) => {
        if(message.sender === sender)
        return message
        })
     
        setMessageMap(docs)
      }
    return (
        <div className='mt-12'>
            <div className='text-center font-bold text-3xl'>
                <h1>MESSAGE-BOX</h1>
               
            </div>
            <div className='flex justify-center mr-28   mb-4   '>
        <div className="w-28  mx-2 h-0 border border-[#6979f8] "></div>
        </div>
          
            <div className='grid grid-cols-4 w-3/4 mx-auto'>

             <div className=' col-span-1  my-10'>
              {
                chat ? chat.map((doc) => (
                  <button className='bg-[#6979f8] border-2 rounded-md w-full   border-white  text-white p-2  hover:scale-110 duration-500    ' onClick={() => {
                    filterMessage(doc,messages)
                  }}>
                    {doc}
                  </button>
                )) : <div>No messages</div>
              }
             </div>
            <div className=' col-span-3 grid gap-4 max-h-3/4 w-full  p-20  py-10  overflow-y-scroll'>
            {
              messageMap.length != 0 && messageMap.map((doc) => (
                <div>
                   {
               doc && (
                <Inbox key={doc.id} messages={doc}></Inbox>
               )
                   }
                </div>
              ))
             }
             {
              !messageMap && (<div>No messages</div>)
             }
            </div>
            </div>
        </div>
    );
}

export default Chat;
