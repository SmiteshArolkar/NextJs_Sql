import React from "react";

const ChangePhoto = ({photo}) => {
  return (
    <div className="flex">
    <div className=" p-4">
    {
        !photo ? (
            <svg
    className="border-2 p-4 rounded-full"
        xmlns="http://www.w3.org/2000/svg"
        height="4em"
        viewBox="0 0 448 512"
        fill="#6979f8"
      >
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
      </svg>
        ) : (
            <div >
              
                <div className=" h-24 rounded-full bg-cover w-24" style={{
                    backgroundImage : `url('${photo}')`
                }}>

                </div>
            </div>
        )
    }
    </div>
    
    </div>
  );
};

export default ChangePhoto;
