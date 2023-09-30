import { AuthContext } from "@/Context/AuthContext";
import AdminUserList from "@/components/AdminUserList";
import Error from "@/components/Error";
import Loader from "@/components/Loader";
import Success from "@/components/Success";
import { storage } from "@/lib/firebase";
import axios from "axios";
import React, { useContext, useState } from "react";

const Index = () => {
  const [e_m, setEm] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { userDetails } = useContext(AuthContext);
  const [success,setSuccess] = useState(false)

  const handleSubmit = () => {

    const title = document.getElementById("title")
      ? document.getElementById("title").value
      : "";
    const description = document.getElementById("description")
      ? document.getElementById("description").value
      : "";
    const content = document.getElementById("content")
      ? document.getElementById("content").value
      : "";
    const image = document.getElementById("image")
      ? document.getElementById("image")
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
          setLoading(false);
        },
        function () {
          //complete
          task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log("File available at", downloadURL);
            url = downloadURL;
            const data = {
              adminid: userDetails ? userDetails.email : "admin",
              title: title,
              description: description,
              content: content,
              imageUrl: url,
            };

            axios.post("/api/addEvent", data).then((response) => {
              console.log(response);
              setLoading(false);
              if (response.data.status === "success") {
                setSuccess("Event Added Successfully");
                console.log(response);
                setTimeout(() => {
                  setSuccess("");
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
  };

  return (
    <div className="text-black pt-10 grid lg:grid-cols-2 w-3/4 mx-auto">
      <div className=" grid gap-4 ">
        <h1 className=" font-bold text-2xl ">
          Add an Event
          <div className="w-16  mx-2 h-0 border border-[#6979f8]"></div>
        </h1>

        <div className=" grid  gap-2">
          <label className=" font-semibold ">
            Title<span className="text-red-500 text-2xl">*</span> :{" "}
          </label>
          <input
            id="title"
            type="text"
            className=" h-3/4 py-2 border-0 text-center bg-[#E1E7EC]  rounded p-2 "
          ></input>
        </div>
        <div className=" grid  gap-2">
          <label className=" font-semibold">
            Description<span className="text-red-500 text-2xl">*</span> :{" "}
          </label>
          <textarea
            id="description"
            type="text"
            className="  border-0  bg-[#E1E7EC]  rounded p-2 "
          ></textarea>
        </div>

        <div className=" grid  gap-2">
          <label className=" font-semibold">
            Content<span className="text-red-500 text-2xl">*</span> :{" "}
          </label>
          <textarea
            type="text"
            id="content"
            className=" pb-10 border-0  bg-[#E1E7EC]  rounded p-2 "
          ></textarea>
        </div>

        <div className=" grid  gap-2">
          <label className=" font-semibold">
            image<span className="text-red-500 text-2xl">*</span> :{" "}
          </label>
          <input
            id="image"
            type="file"
            className=" border-0 text-center bg-[#E1E7EC]  rounded p-2 file:rounded-xl  "
          ></input>
        </div>

        <div className=" grid  gap-2">
          <button
            onClick={handleSubmit}
            className="mt-10 bg-[#6979f8] p-3 font-semibold rounded text-white hover:opacity-60 duration-500"
          >
            Submit
          </button>
        </div>

        <div>
          {e_m && <Error message={e_m}></Error>}
          {isLoading && <Loader></Loader>}
          {success && <Success message={success}></Success>}
        </div>
        {}
      </div>

      {/* user List*/}
      <div className=" grid gap-4 lg:mx-10">
        <div>
          <h1 className="text-2xl font-bold  mt-5 ">Active Users</h1>
          <div className="w-16  mx-2 h-0 border border-[#6979f8]"></div>
        </div>
        <div className="grid ">
          <AdminUserList></AdminUserList>
        </div>
      </div>
    </div>
  );
};

export default Index;
