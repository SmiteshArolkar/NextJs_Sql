import axios from "axios";
import React, { useEffect, useState } from "react";

const EditEvent = ({}) => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    axios
      .get("/api/getEvents")
      .then((res) => {
        console.log(res.data.data);
        setEvents(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" my-10">
      <h1 className=" font-bold text-2xl my-2 mx-4">
        Edit Active Events
        <div className="w-16  mx-2 h-0 border border-[#6979f8]"></div>
      </h1>{" "}
      <div className="grid grid-cols-2 w-full gap-10 my-4  ">
        {events &&
          events.map((doc, index) => (
            <div
              className="border grid grid-cols-2   shadow-md rounded-md  mx-auto p-2"
              key={index}
            >
              <div className=" p-4 w-full mx-auto">
                <div
                  className="bg-cover w-72 h-72 rounded-md "
                  style={{
                    backgroundImage: `url('${doc.imageUrl}')`,
                  }}
                ></div>

<div className=" p-4">
  <div className="bg-[#6979f9] text-white w-max  p-2 rounded-t-lg py-0">
  Image
  </div>
  <input type="file" className="border rounded-b-lg p-2 w-full" >
   
  </input>
</div>
              
              </div>
<div>
<div className=" p-4">
  <div className="bg-[#6979f9] text-white w-max  p-2 rounded-t-lg py-0">
    Title 
  </div>
  <input className="border rounded-b-lg p-2 w-full" placeholder= {doc.title} >
   
  </input>
</div>
<div className=" p-4">
  <div className="bg-[#6979f9] text-white w-max  p-2 rounded-t-lg py-0">
    Description 
  </div>
  <textarea className="border rounded-b-lg p-2 w-full" placeholder= {doc.description} >
   
  </textarea>
</div>
<div className=" p-4">
  <div className="bg-[#6979f9] text-white w-max  p-2 rounded-t-lg py-0">
    Content
  </div>
  <textarea className="border rounded-b-lg p-2 w-full" placeholder= {doc.content} rows={3} >
   
  </textarea>
</div>

<button className="p-2 bg-[#6979f8] text-white m-4 text-center w-4/6 rounded-lg mx-10 ">
  Submit
</button>

</div>



            </div>
          ))}
      </div>
    </div>
  );
};

export default EditEvent;
