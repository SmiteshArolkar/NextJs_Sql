import { AuthContext } from "@/Context/AuthContext";
import Gallery from "@/components/Events";
import ImageCarousel from "@/components/LandingPage/ImageCarasouel";


import React from "react";
import { useEffect } from "react";
import { useContext } from "react";

const Index = () => {
  const { currentUser,currentRole,setRole } = useContext(AuthContext);


  
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
    
    
   
  }, [currentUser]);
  return (
    <div>
      
      <div className="container mx-auto py-8">
      
        <h1 className="text-3xl font-semibold mb-4 text-left my-10 ">
          EVENT SERVICES
         
        </h1>
        <ImageCarousel images={["/birthday.jpg","/bg.jpg","/birthday.jpg"]}></ImageCarousel>
        <Gallery items={galleryItems} />
        
      </div>
    </div>
  );
};

export default Index;
