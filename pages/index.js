import { AuthContext } from "@/Context/AuthContext";
import Gallery from "@/components/Events";
import ImageCarousel from "@/components/LandingPage/ImageCarasouel";
import axios from "axios";


import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

const Index = () => {
  const { currentUser,currentRole,setRole } = useContext(AuthContext);
  const [events,setEvents] = useState([])


  
  const galleryItems = [
    {
      title: "BirthDay",
      description: "Request A Service to organize Birthdays for your loved ones",
      image: "/birthday.jpg",
    },
    {
      title: "Item 2",
      description: "Description for Item 2",
      image: "/Landscape-Color.jpg",
    },
    {
      title: "Item 3",
      description: "Description for Item 3",
      image: "/Landscape-Color.jpg",
    },
    // Add more items as needed
  ];

  useEffect(() => {
    
    if(events.length === 0)
    {
      axios.get("api/getEvents").then((response) => {
        console.log(response)
        const docs = []
        response.data.data.forEach((doc) => {
          docs.push(doc)
        })
        setEvents(docs)
      })
      .catch((e) => {
        console.log(e)
      })
    }

  }, []);
  return (
    <div>
      
      <div className="container mx-auto py-8">
      
       
        <div className="  lg:-mx-44 mx-3">
        <ImageCarousel images={["/birthday.jpg","/bg.jpg","/birthday.jpg"]}></ImageCarousel>
        </div>
        <h1 className="text-3xl grid  font-semibold mb-4 text-left my-10 flex justify-center items-center ">
      
          Our Services
          <div className="w-16  mx-2 h-0 border border-[#6979f8]"></div>
</h1>
        <Gallery items={events} />
        
      </div>
    </div>
  );
};

export default Index;
