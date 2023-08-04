import React, { useState } from 'react';
import Loader from './Loader';

const LoginForm = () => {
  const [activeTab, setActiveTab] = useState('user');
  const [Role,setRole] = useState('')
  const [Login,setLogin] = useState(true)

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  
  if(Login)
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-4">

        <div className="flex mb-4">
          <button
            className={`flex-1 p-2 text-center ${
              activeTab === 'user' ? 'bg-red-700 text-white' : 'bg-gray-300'
            }`}
            onClick={() => handleTabChange('user')}
          >
            Login as User
          </button>
          <button
            className={`flex-1 p-2 text-center ${
              activeTab === 'admin' ? 'bg-red-700 text-white' : 'bg-gray-300'
            }`}
            onClick={() => handleTabChange('admin')}
          >
            Login as Supplier
          </button>
        </div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Add your login/register form fields here */}
          <div className="mb-4">
            <div className='text-center font-extrabold my-4'>
                <h1>LOGIN</h1>
            </div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="example@exp.com"
            />
          </div>
          {/* Add other form fields here */}
          <div className="flex items-center  justify-between">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              {activeTab === 'user' ? '' : ''} Login
            </button>
            <Loader></Loader>
          </div>

          <div className='border-2 border-red-700 rounded px-10 my-3 p-2 font-bold  bg-red-300 m'>
                <div className=''>
                    Error : {}
                </div>
            </div>

        </form>
        <button className='m-2 ' onClick={() => {setLogin(!Login)}}>
        Don't have a Account ? Register here
        </button>
        
      </div>
    </div>
  );

  else
  return(
    <div>
         
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-4">
        <div className="flex mb-4">
          <button
            className={`flex-1 p-2 text-center ${
              activeTab === 'user' ? 'bg-green-900 text-white' : 'bg-gray-300'
            }`}
            onClick={() => handleTabChange('user')}
          >
            User Registration
          </button>
          <button
            className={`flex-1 p-2 text-center ${
              activeTab === 'supplier' ? 'bg-green-900 text-white' : 'bg-gray-300'
            }`}
            onClick={() => handleTabChange('supplier')}
          >
            Supplier Registration
          </button>
        </div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
            />
          </div>

          

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Phone Number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              City
            </label>
            <input
              type="text"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="city"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              State
            </label>
            <input
              type="text"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="state"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Address"
              rows="3"
            />
          </div>
          <div className="flex items-center gap-20 ">
            <button
              className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              {activeTab === 'user' ? 'Register as User' : 'Register as Supplier'}
            </button>
            <Loader></Loader>
            
          </div>
          
          <div className='border-2 border-red-700 rounded px-10 m-1 p-2 font-bold  bg-red-300'>
                <div className=''>
                    Error : {}
                </div>
            </div>
           
        </form>
        <button className='m-2 ' onClick={() => {setLogin(!Login)}}>
        Already have a Account ? Click here
        </button>
      </div>
    </div>
    
    </div>
  )
};

export default LoginForm;
