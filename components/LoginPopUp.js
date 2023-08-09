import React, { useState } from 'react';

const Popup = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`${
        isOpen ? 'fixed' : 'hidden'
      } inset-0 flex items-center justify-center z-50`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-4 rounded-md shadow-md z-10">
        <button
          onClick={onClose}
          className="  text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
