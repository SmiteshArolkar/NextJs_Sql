import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-700 to-blue-500 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-700">Eventify</a>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-indigo-700">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-700">Events</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-700">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-700">Contact</a></li>
          </ul>
        </div>
      </nav>

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

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8 text-center">
            Why Choose Eventify?
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-indigo-700 rounded-full h-16 w-16 flex items-center justify-center text-white text-2xl mb-4">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
              <p className="text-gray-600">
                Discover the latest events happening near you.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-indigo-700 rounded-full h-16 w-16 flex items-center justify-center text-white text-2xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Connect with like-minded individuals and create a community.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-indigo-700 rounded-full h-16 w-16 flex items-center justify-center text-white text-2xl mb-4">
                <i className="fas fa-ticket-alt"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">
                Book your tickets hassle-free with Eventify.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-700 py-6 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Eventify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
