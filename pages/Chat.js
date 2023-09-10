import { AuthContext } from '@/Context/AuthContext';
import Inbox from '@/components/Inbox';
import axios from 'axios';

import React, { useContext, useEffect, useState } from 'react';

const Chat = () => {

  const {userDetails} = useContext(AuthContext)
  
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
            setMessages(docs)
          })
        }
      },[])
    return (
        <div className='mt-12'>
            <div className='text-center font-bold text-3xl'>
                <h1>MESSAGE-BOX</h1>
                
            </div>
            <div className='w-3/4 mx-auto border-2 rounded-lg  my-12 grid grid-cols-2 bg-white p-4 gap-8'>
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
