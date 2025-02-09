import React from 'react';

const PersonalInfoStep = () => {
  return (
    <div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-semibold mb-2 ">First Name</label>
        <input
          type="text"
          className="appearance-none border  w-full py-3 px-4 rounded-lg text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your first name"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-semibold mb-2  rounded-lg">Last Name</label>
        <input
          type="text"
          className="appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your last name"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-semibold mb-2  rounded-lg">Mobile Number</label>
        <input
          type="number"
          className="appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Mobile Number"
        />
      </div>
    </div>
  );
};

export default PersonalInfoStep;
