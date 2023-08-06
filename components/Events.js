import { useRouter } from "next/router";
import React from "react";

const Gallery = ({ items }) => {
  const router = useRouter();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {items.map((item, index) => (
          <div>
            <div className="bg-white rounded-xl m-4 py-5 px-2 border-2 hover:scale-110 duration-300 ">
              <div
                onClick={() => {
                  router.push(`Events/${item.title}`);
                }}
              >
                <div
                  key={index}
                  className=" bg-yellow-500 rounded-lg shadow-md  cursor-pointer mx-2 hover:scale-100 duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover mb-2 rounded-md"
                  />
                </div>
                <div className="rounded-lg   cursor-pointer mx-2 ">
                  <h3 className="text-gray-800 font-semibold text-xl sm:text-base p-2">
                    {item.title}
                  </h3>
                  <p className="text-black text-xs sm:text-sm py-3">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="text-center text-yellow-600 hover:text-blue hover:text-blue-500 hover:scale-105  duration-150"
              onMouseOver={() => {
               
                document.getElementById("card-"+item.title).classList.remove("hidden")
           
              }}
              onMouseOut={() => {
              document.getElementById("card-"+item.title).classList.add("hidden")
              }}
              >
                View Details
                <div id={"card-"+item.title} className="hidden">
                <div className="absolute m-3 p-4 mt-2 bg-white border duration-500 rounded-md p-2 transform scale-95 origin-top transition duration-300 ease-in-out group-hover:scale-100">
                    {/* Dropdown content */}
                    <h1>
                    Classes below enable you to display the accordion without the default background color, borders and rounded corners. It also makes it stretch full width of their parent container. It comes useful when you want to embed the accordion in a different component i.e. inside of a Card or
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
