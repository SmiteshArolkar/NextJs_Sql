import Inbox from '@/components/Inbox';
import React, { useState } from 'react';

const Chat = () => {
  
    const [messages, setMessages] = useState([
        {
          id: 1,
          sender: 'John',
          subject: 'Hello',
          content: 'Hey there, how are you?',
          request_id:3,
          date:"11 Aug 2003 18:20"
        },
        {
          id: 2,
          sender: 'Alice',
          subject: 'Meeting',
          content: 'Let\'s meet tomorrow at 3 PM.',
          request_id:3
        },
        {
            id: 1,
            sender: 'John',
            subject: 'Hello',
            content: 'Hey there, how are you?',
            request_id:3,
            date:"11 Aug 2003 18:20"
          },
          {
            id: 2,
            sender: 'Alice',
            subject: 'Meeting',
            content: 'Let\'s meet tomorrow at 3 PM.',
            request_id:3
          },
          {
            id: 1,
            sender: 'John',
            subject: 'Hello',
            content: 'Hey there, how are you?',
            request_id:3,
            date:"11 Aug 2003 18:20"
          },
          {
            id: 2,
            sender: 'Alice',
            subject: 'Meeting',
            content: 'Let\'s meet tomorrow at 3 PM.',
            request_id:3
          },
        // Add more messages
      ]);

    return (
        <div className='mt-12'>
            <div className='text-center font-bold text-3xl'>
                <h1>MESSAGE-BOX</h1>
                
            </div>
            <div className='w-3/4 mx-auto border-2 rounded-lg border-red-300 my-12 grid grid-cols-2 bg-white p-4 gap-8'>
            {
                messages && messages.map((message) => {
                    return (
                        
                        <Inbox key={message.id} messages={message}></Inbox>
                    )
                })
            }
            </div>
        </div>
    );
}

export default Chat;
