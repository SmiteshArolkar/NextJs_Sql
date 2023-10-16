import React, { useState } from "react";

const Inbox = ({ messages }) => {
  return (
    <div className=" border-2 p-4 rounded-lg shadow-xl bg-[#6979f8]  lg:hover:scale-125 duration-300 gap-">
      <div className="">
        <div className=" w-full mx-auto text-center   text-xl grid">
          <div className=" rounded-lg text-left font-bold  mx-2 my-2  ">
            { "> " + messages.sender}
          </div>
          <p className="text-left text-white mx-2">Event : {messages.event}<br></br>
          Event ID : {messages.requestid}
          </p>
        </div>
        <div className="text-center text-xl p-4 rounded-xl m-3  bg-white my-5 h-full w-11/12">
          {messages.message}
        </div>
        <div className="font-bold">Date : {messages.send_date.slice(0, 10)}</div>
        <div className="font-bold tracking-widest">time : {messages.send_date.slice(11)}</div>
      </div>
    </div>
  );
};

export default Inbox;
