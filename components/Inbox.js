import React, { useState } from 'react';

const Inbox = ({messages}) => {


  
  return (
    <div className=" border-2 border-black rounded-lg bg-blue-300 hover:scale-125 duration-300 gap-6">
      
        <div className='flex'>
          <div className='bg-green-300 w-1/6 p-4 rounded-l-lg text-xl grid'>
            <div className='bg-white rounded-lg text-center'>{messages.sender}</div>
            <br></br>
            <p>Event : {messages.event}</p>
            Request ID : {messages.requestid}
          </div>
          <div className='text-center text-xl my-auto h-full w-11/12'>
            {messages.message}
          </div>
          <div>
            Date : {messages.send_date.slice(0,10)}
          </div>
    
        
      </div>
    </div>
  );
};

export default Inbox;
