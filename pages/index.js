import { AuthContext } from "@/Context/AuthContext";
import Gallery from "@/components/Events";
import ImageCarousel from "@/components/LandingPage/ImageCarasouel";
import TextCarousel from "@/components/LandingPage/TextCarasouel";
import LandingPage from "@/components/LandingPage/main";
import axios from "axios";
import '@/components/LandingPage/Scroll'



import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Map from "@/components/EventFormSteps/Map";
import Mapp from "@/components/EventFormSteps/Mapps";
import OpenLayersMap from "@/components/EventFormSteps/Mapps";

const Index = () => {


  const { currentUser,currentRole,setRole } = useContext(AuthContext);
  const [events,setEvents] = useState([])

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
    
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      });
    });
    
  },[])
  
  
  const latitude = 15.5890;
  const longitude = 73.8099;

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
  const carouselTexts = [
    'Welcome to our website!',
    'Discover amazing content.',

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
    <div className=" scroll-smooth">
      
      <div className=" mx-auto  w-full">
      
      <div className=" mx-auto p-10 py-44  video-container relative text-white text-center    bg-gradient-to-b  from-indigo-700 via-blue-500 " 
      >

        <h1 className=" my-10  text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-5s  duration-200">
          Discover Amazing Events
        </h1>
        <p className="text-lg text-center w-full mx-auto  md:text-xl text-center max-w-md mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Find, attend, and create memorable events with EvenSync.
        </p>
        <a
          href="#home"
          className="bg-white text-indigo-700 hover:bg-indigo-800 hover:text-white py-2 px-6 rounded-full text-lg md:text-xl transition duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-3s"
        >
          Explore Events
        </a>
      </div>
      <div>
         {/* Features Section */}
      <div className="bg-white py-16 mx-auto w-full">
        <div className=" w-3/4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
            Why Choose Us?
          </h2>
          <div className="flex flex-wrap  justify-center   border p-4 rounded">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-indigo-700 rounded-full h-16 w-16 flex items-center justify-center text-white text-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="white"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
              <p className="text-gray-600">
                Discover the latest events happening near you.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-indigo-700 rounded-full h-16 w-16 flex items-center justify-center text-white text-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="white"><path d="M225.9 32C103.3 32 0 130.5 0 252.1 0 256 .1 480 .1 480l225.8-.2c122.7 0 222.1-102.3 222.1-223.9C448 134.3 348.6 32 225.9 32zM224 384c-19.4 0-37.9-4.3-54.4-12.1L88.5 392l22.9-75c-9.8-18.1-15.4-38.9-15.4-61 0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128z"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Connect with like-minded individuals and create a community.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-indigo-700 rounded-full h-16 w-16 flex items-center justify-center text-white text-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="white"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">
                Book your tickets hassle-free .
              </p>
            </div>
          </div>
        </div>
      </div>

      </div>
   <div className=" lg:grid-cols-2 grid  bg-gradient-to-b from-white via-blue-500 to-blue-500 my-10 mb-32">
    <div>
    <ImageCarousel images={["/birthday.jpg","/bg.jpg","/birthday.jpg"]}></ImageCarousel>
    </div>
<div className="   my-32  mx-20  text-4xl ">
<TextCarousel texts={carouselTexts}  interval={3000}></TextCarousel>

</div>
        </div>

     
        <h1 className="text-3xl grid  font-semibold mb-4 text-left my-10 flex justify-center items-center scroll-smooth " id="home">
      
          Our Services
          <div className="w-16  mx-2 h-0 border border-[#6979f8]"></div>
          <div className="w-16  mx-2 h-0 border border-[#6979f8]" id=""></div>
</h1>
        <Gallery items={events} />
        
      </div>
      {/* <div>
      <h1>OpenLayers Map Example</h1>
      <OpenLayersMap latitude={latitude} longitude={longitude} />
    </div> */}
    </div>
  );
};

export default Index;
