import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#6979f8] to-white min-h-screen">
      {/* Navigation Bar */}
    

      {/* Hero Section */}
      <div className="container mx-auto p-10 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Discover Amazing Events Near You
        </h1>
        <p className="text-lg md:text-xl text-center max-w-md mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Find, attend, and create memorable events with Eventify.
        </p>
        <a
          href="#"
          className="bg-white text-indigo-700 hover:bg-indigo-800 hover:text-white py-2 px-6 rounded-full text-lg md:text-xl transition duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-3s"
        >
          Explore Events
        </a>
      </div>

     
      {/* Footer */}
      
    </div>
  );
};

export default LandingPage;
