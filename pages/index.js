import { AuthContext } from "@/Context/AuthContext";
import Gallery from "@/components/Events";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";

const Index = () => {
  const { currentUser,currentRole,setRole } = useContext(AuthContext);


  
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
    
    
   
  }, [currentUser]);
  return (
    <div>
      
      <div className="container mx-auto py-8">
        {currentRole ? <div>hello {currentRole}</div>:<div>No Role</div>}
      {currentUser ? <div>Hello {currentUser.email}</div> : <>No Login</>}
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
