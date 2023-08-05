
import React from 'react';

const Gallery = ({ items }) => {
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
      {items.map((item, index) => (
        <div className='bg-white rounded-xl m-4 py-5 px-2 border-2 hover:scale-110 duration-300 ' 
        onClick={() => {
           router.push(`Events/${item.title}`)
        }}
        >
        <div key={index} className=" bg-yellow-500 rounded-lg shadow-md  cursor-pointer mx-2 hover:scale-100 duration-300">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover mb-2 rounded-md" />
          
        </div>
        <div className='rounded-lg   cursor-pointer mx-2 '>
        <h3 className="text-gray-800 font-semibold text-xl sm:text-base p-2">{item.title}</h3>
          <p className="text-gray-600 text-xs sm:text-sm py-3">{item.description}</p>
        </div>
        </div>
     
      ))}
    </div>
  );
};

export default Gallery;
