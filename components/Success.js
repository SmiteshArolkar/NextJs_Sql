import React from "react";

const Success = ({ message }) => {
  return (
    <div>
      <div>
        <div className="border-2 border-green-700 rounded px-10 my-3 p-2 font-bold  bg-green-300 m">
          <div className="">Success : {message}</div>
        </div>
      </div>
    </div>
  );
};

export default Success;
