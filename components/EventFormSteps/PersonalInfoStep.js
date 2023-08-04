import React from 'react';

const PersonalInfoStep = () => {
  return (
    <div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-semibold mb-2">First Name</label>
        <input
          type="text"
          className="appearance-none border rounded w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your first name"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-semibold mb-2">Last Name</label>
        <input
          type="text"
          className="appearance-none border rounded w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your last name"
        />
      </div>
    </div>
  );
};

export default PersonalInfoStep;
