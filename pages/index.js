import { AuthContext } from "@/Context/AuthContext";
import Gallery from "@/components/Events";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";

const Index = () => {
  const { currentUser } = useContext(AuthContext);

  
  const galleryItems = [
    {
      title: "Item 1",
      description: "Description for Item 1",
      image: "/Landscape-Color.jpg",
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
    if (currentUser) {
      console.log(currentUser);
    } else {
      console.log("No Current User");
    }
  }, []);
  return (
    <div>
      
      <div className="container mx-auto py-8">
      {currentUser ? <div>Hello {currentUser.email}</div> : <></>}
        <h1 className="text-3xl font-semibold mb-4 text-center my-10 ">
          EVENT SERVICES
          <div className="border-t border-gray-400 my-3"></div>
        </h1>
        
        <Gallery items={galleryItems} />
        
      </div>
    </div>
  );
};

export default Index;
