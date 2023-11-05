import { AuthContext } from '@/Context/AuthContext';
import Inbox from '@/components/Inbox';
import axios from 'axios';

import React, { useContext, useEffect, useState } from 'react';

const Chat = () => {

  const {userDetails} = useContext(AuthContext)
  const [chat,setChat] = useState([])
  
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


            setChat(
              chatDocs
            )
            setMessages(docs)
          })
        }
      },[])
    return (
        <div className='mt-12'>
            <div className='text-center font-bold text-3xl'>
                <h1>MESSAGE-BOX</h1>
                
            </div>
            <div className='flex justify-center mr-28   mb-4   '>
        <div className="w-28  mx-2 h-0 border border-[#6979f8] "></div>
        </div>
            <div className='w-3/4 mx-auto border-2 p-4 rounded-lg  my-12 grid lg:grid-cols-3 bg-white  gap-8'>
              {
                // chat && chat.map((doc) => (
                //   <div>
                    
                //   </div>
                // ))
              }
            {
                messages.length ? messages.map((message) => {
                    return (
                        
                        <Inbox key={message.id} messages={message}></Inbox>
                    )
                }) : (<h1 className='text-black p-4'>No messages</h1>)
            }
            </div>
        </div>
    );
}

export default Chat;
