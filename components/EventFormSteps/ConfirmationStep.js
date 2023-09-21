import React from 'react';

const ConfirmationStep = () => {
  return (
    <div className='grid'>
      <p className="text-gray-700">
        Please review your information before submitting:
        <br />
        First Name: John
        <br />
        Last Name: Doe
        <br />
        Email: johndoe@example.com
        <br />
        Phone: (123) 456-7890
      </p>
    </div>
  );
};

export default ConfirmationStep;
