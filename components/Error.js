import React from "react";

const Error = ({message}) => {
  return (
    <div>
      <div className="border-2 border-red-700 rounded px-10 my-3 p-2 font-bold  bg-red-300 m">
        <div className="">Error : {message}</div>
      </div>
    </div>
  );
};

export default Error;
