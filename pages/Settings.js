import React, { useState } from 'react';

const Settings = () => {
  const [name, setName] = useState('John Doe');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [email, setEmail] = useState('johndoe@example.com');
  const [address, setAddress] = useState('123 Main St');
  const [city, setCity] = useState('City');
  const [state, setState] = useState('State');
  const Userdata = {
    name:"Name",
    phoneNumber:"Phone Number",
    email:"Email",
    address:"Address",
    city:"City",
    state:"State"
  }

  const handleSave = () => {
    // Perform actions to save the updated settings
    // This can include making API calls or updating a database

    console.log('Settings saved:', { name, phoneNumber, email, address, city, state });
  };

  return (

    <div className='mt-10'>
        <div className='text-3xl text-center font-extrabold'>
            SETTINGS
            
        </div>
    <div className=' border-2 border-yellow-300 bg-white mt-10 rounded-lg p-3 w-3/4 mx-auto h-3/4  '>
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4  ">Edit Details</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
        <div>
          <label className="block font-semibold mb-2">Name</label>
          <input
            type="text"
            className="border border-blue-300 rounded p-2 w-full bg-blue-100 active:scale-125  duration-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-2 ">Phone Number</label>
          <input
            type="text"
            className="border rounded p-2 w-full border-yellow-300 bg-yellow-100 active:scale-125  duration-700"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            className="border rounded p-2 w-full border-red-300 bg-red-100 active:scale-125  duration-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Address</label>
          <input
            type="text"
            className="border rounded p-2 w-full border-blue-300 bg-blue-100 active:scale-125  duration-700"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-2 ">City</label>
          <input
            type="text"
            className="border rounded p-2 w-full border-green-300 bg-green-100 active:scale-125  duration-700"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">State</label>
          <input
            type="text"
            className="border rounded p-2 w-full border-slate-700 active:scale-125  duration-700"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
      </div>
      <button
        className="mt-4 bg-green-900 text-white px-4 py-2 rounded hover:bg-blue-600 active:scale-125  duration-700"
        onClick={handleSave}
      >
        Save Details
      </button>
    </div>
    </div>
    </div>
  );
};

export default Settings;
