import React from 'react';

const ContactDetailsStep = () => {
  return (
    <div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-semibold mb-2">Email</label>
        <input
          type="email"
          className="appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your email address"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-semibold mb-2">Phone</label>
        <input
          type="tel"
          className="appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );
};

export default ContactDetailsStep;
