import axios from "axios";
import React, { useEffect, useState } from "react";
import Index from "..";

const EditEvent = ({}) => {
  const [events, setEvents] = useState(null);
  const [e_m, setEm] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [success,setSuccess] = useState(false)
  const [active_index,setIndex] = useState(0)

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

  const handleSubmit = (doc,id) => {
    setIndex(id)
    const title = document.getElementById("title-"+id)
      ? document.getElementById("title-"+id).value
      : "";
    const description = document.getElementById("desc-"+id)
      ? document.getElementById("desc-"+id).value
      : "";
    const content = document.getElementById("cont-"+id)
      ? document.getElementById("cont-"+id).value
      : "";
    const image = document.getElementById("img-"+id)
      ? document.getElementById("img-"+id)
      : "";
    let url = "";

    if (title && description && content && image) {
        setLoading(true);
      const upload = image.files[0];
      const storage_ref = storage.ref("/uploads/" + upload.name);

      const task = storage_ref.put(upload);
      task.on(
        "state_changed",
        function (snapshot) {
          //in progress
        },
        function (error) {
          //error
          setEm("Image Upload Failed : " + error);
          setIndex(id)
          setTimeout(() => {
            setEm("")
            setIndex(0)
          },3000)
          setLoading(false);
        },
        function () {
          //complete
          task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log("File available at", downloadURL);
            url = downloadURL;
            const data = {
              id:doc.title,
              adminid: userDetails ? userDetails.email : "admin",
              title: title,
              description: description,
              content: content,
              imageUrl: url,
            };

            axios.post("/api/updateEvent", data).then((response) => {
              console.log(response);
              setLoading(false);
              if (response.data.status === "success") {
                setSuccess("Event Added Successfully");
                setIndex(id)
                console.log(response);
                setTimeout(() => {
                  setSuccess("");
                  setIndex(0)
                }, 2000);
              } else {
                setEm("Error Occured");
                console.log(response);
                setTimeout(() => {
                  setEm("");
                }, 2000);
              }
            });
          });
        }
      );
    } else {
      setEm("Invalid Fields");
      setTimeout(() => {
        setEm("");
      }, 2000);
    }
  

  }

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
  <input type="file" className="border rounded-b-lg p-2 w-full" id={`img-${index}`} >
   
  </input>
</div>
              
              </div>
<div>
<div className=" p-4">
  <div className="bg-[#6979f9] text-white w-max  p-2 rounded-t-lg py-0">
    Title 
  </div>
  <input className="border rounded-b-lg p-2 w-full" placeholder= {doc.title} id={`title-${index}`} >
   
  </input>
</div>
<div className=" p-4">
  <div className="bg-[#6979f9] text-white w-max  p-2 rounded-t-lg py-0">
    Description 
  </div>
  <textarea className="border rounded-b-lg p-2 w-full" placeholder= {doc.description} id={ `desc-${index}`} >
   
  </textarea>
</div>
<div className=" p-4">
  <div className="bg-[#6979f9] text-white w-max  p-2 rounded-t-lg py-0">
    Content
  </div>
  <textarea className="border rounded-b-lg p-2 w-full" placeholder= {doc.content} rows={3}  id={ `cont-${index}`} >
   
  </textarea>
</div>

<button className="p-2 bg-[#6979f8] text-white m-4 text-center w-4/6 rounded-lg mx-10 " onClick={() => {
  
}}>
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
