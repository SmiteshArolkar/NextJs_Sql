import React, { useState } from 'react';
import PersonalInfoStep from './EventFormSteps/PersonalInfoStep';
import ContactDetailsStep from './EventFormSteps/ContactDetailsStep';
import ConfirmationStep from './EventFormSteps/ConfirmationStep';

const steps = [
  { id: 1, label: 'Personal Info', component: PersonalInfoStep },
  { id: 2, label: 'Contact Details', component: ContactDetailsStep },
  { id: 3, label: 'Confirmation', component: ConfirmationStep },
];

const EventRegistrationForm = ({EventID}) => {
  const [activeStep, setActiveStep] = useState(0);
  const StepComponent = steps[activeStep].component;

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className=" flex items-center justify-center">
        
      <div className="w-full max-w-3xl ">
      <div className='text-center text-3xl font-extrabold  m-3 pb-24'>
      EVENT REQUEST FORM 
      </div>
      <div className='border-2 p-8 rounded-xl  border-r-green-900 border-b-red-900   shadow-xl bg-blue-200'>
        <div className="mb-6 ">
        <div className='text-center font-bold text-2xl mb-10'>
          {EventID} Request Registration
        </div>
          <h2 className="text-2xl font-semibold mb-2">{steps[activeStep].label}</h2>
          <div className="relative w-full">
            <div className="h-1 bg-red-500 rounded-full"></div>
            <div className="absolute top-0 left-0 h-1 bg-green-300 rounded-full" style={{ width: `${(activeStep + 1) * (100 / steps.length)}%` }}></div>
          </div>
        </div>
        
        <StepComponent />
        <div className="mt-6">
          <div className="flex justify-between">
            {activeStep > 0 && (
              <button
                onClick={handleBack}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Back
              </button>
            )}
            {activeStep < steps.length - 1 ? (
              <button
                onClick={handleNext}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Next
              </button>
            ) : (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => alert('Registration Complete')}
              >
                Submit
              </button>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EventRegistrationForm;
