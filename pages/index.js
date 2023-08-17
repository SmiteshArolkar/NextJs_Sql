import { AuthContext } from "@/Context/AuthContext";
import Gallery from "@/components/Events";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";

const Index = () => {
  const { currentUser} = useContext(AuthContext);


  
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
        <h1 className="text-3xl font-semibold mb-4 text-center my-10 ">
          EVENT SERVICES
          {currentUser && currentUser.email}
          <div className="border-t border-gray-400 my-3"></div>
        </h1>
        
        <Gallery items={galleryItems} />
        
      </div>
    </div>
  );
};

export default Index;
