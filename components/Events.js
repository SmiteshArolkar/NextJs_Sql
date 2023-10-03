import { AuthContext } from "@/Context/AuthContext";
import { useRouter } from "next/router";
import React, { Suspense } from "react";
import { useState } from "react";
import { useContext } from "react";
import Popup from "./LoginPopUp";
import Loader from "./Loader";

const Gallery = ({ items }) => {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 ">
        <Popup isOpen={isPopupOpen} onClose={closePopup}>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-center">Login Required</h2>
          </div>
          <div className="m-4 ">
            <span>Continue to </span>{" "}
            <button
              className="text-white bg-red-600 m-1 p-2 rounded hover:scale-110  duration-100"
              onClick={() => {
                if (!currentUser) {
                  router.push("/Login");
                }
              }}
            >
              Login
            </button>
          </div>
        </Popup>
        {items.map((item, index) => (
          <div key={index}>
            <div className="bg-[#6979f8] text-white rounded-xl m-4 py-5 px-2 border-2 shadow shadow-[black] hover:scale-110 duration-300 ">
              <div
                onClick={() => {
                  if (currentUser) {
                    router.push(`Events/${item.title}`);
                  } else {
                    openPopup();
                  }
                }}
              >
                <div
                  key={index}
                  className=" bg-yellow-500 rounded-lg shadow-md  cursor-pointer mx-2 hover:scale-100 duration-300"
                >
                <Suspense  fallback={<div>...isLoading</div>}>
                <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover mb-2 rounded-md"
                  />
                </Suspense>
                </div>
                <div className="rounded-lg   cursor-pointer mx-2 ">
                  <h3 className="text-white font-semibold text-xl sm:text-base p-2">
                    {item.title}
                  </h3>
                  <p className="text-white text-xs sm:text-sm py-3">
                    {item.description}
                  </p>
                </div>
              </div>
              <div
                className="text-center text-white hover:text-blue hover:text-black hover:scale-105  duration-150"
                onMouseOver={() => {
                  document
                    .getElementById("card-" + item.title)
                    .classList.remove("hidden");
                }}
                onMouseOut={() => {
                  document
                    .getElementById("card-" + item.title)
                    .classList.add("hidden");
                }}
              >
                View Details
                <div id={"card-" + item.title} className="hidden  ">
                  <div className="absolute m-3 p-4 mt-2 bg-yellow-300 text-black border duration-700 rounded-md  transform scale-95 origin-top transition  ease-in-out group-hover:scale-100">
                    {/* Dropdown content */}
                    <h1>
                    {
                      item.content
                    }
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
