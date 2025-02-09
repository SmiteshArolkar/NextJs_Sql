import React, { useContext, useEffect, useState } from "react";
import PersonalInfoStep from "./EventFormSteps/PersonalInfoStep";
import ContactDetailsStep from "./EventFormSteps/ContactDetailsStep";
import ConfirmationStep from "./EventFormSteps/ConfirmationStep";
import Error from "./Error";
import DateValidationDisablePast from "./Date/DatePicker";
import RangeDatePicker from "./Date/DatePicker";
import RangeTimePicker from "./Date/TimePicker";
import PriceRangePicker from "./PriceRangePicker";
import LocationInput from "./inputLocation";
import { AuthContext } from "@/Context/AuthContext";
import { useRouter } from "next/router";
import axios from "axios";
import Loader from "./Loader";
import Test from "./EventFormSteps/Test";

const steps = [
  { id: 1, label: "Event Info", component: PersonalInfoStep },
  { id: 2, label: "Contact Details", component: ContactDetailsStep },
  { id: 3, label: "Confirmation", component: ConfirmationStep },
];
const EventRegistrationForm = ({ EventID }) => {
  const [activeStep, setActiveStep] = useState(0);
  const StepComponent = steps[activeStep].component;
  const router = useRouter()
  
  const [error,setError_M] = useState("")
  
const [days,setDays] = useState(0)
const [email,setEmail] = useState("")
const [phone,setPhone] = useState("")
const [latLong,setLatLong] = useState([])

const handleAddressChange = (address,latlong) => {
  setAddress(address)
  setLatLong(latlong)
  console.log(address)
}

const {userDetails} = useContext(AuthContext)


useEffect(() => {
  if(userDetails)
  {
    setEmail(userDetails.email)
    setPhone(userDetails.phone)
  }
})

const [startDate,setStartDate] = useState(null)
const [endDate,setEndDate] = useState(null)
const [address,setAddress] = useState("")
const [isLoading,setLoading] = useState(false)

  const handleDateRangeChange = (dates) => {
    setStartDate(dates[0])
    setEndDate(dates[1])
  };

  const handlePriceRangeChange = (priceRange) => {
    console.log('Selected Price Range:', priceRange);
  };


  useEffect((
    ) => {
      if(startDate && endDate)
      {
        const diffTime = Math.abs(endDate - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        setDays(diffDays + 1)
        if(diffDays < 0)
        {
          setError_M("End Date cannot be before Start Date")
        }
        else
        {
          
        }
      }
      else setDays(0)
    },[startDate,endDate])
    


  const handleNext = () => {
    if(activeStep === 0)
    {
      //check date
      let f = false
      setError_M("")
      if(days === 0) {setError_M("Date Not Selected");f=true }
      if(address === "") {setError_M("fill in Address"); f=true}
      if(!f) setActiveStep(activeStep+1)
    }
    if(activeStep === 1)
    {
      setActiveStep(activeStep+1)
    }
   
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onLocationChange = (location) => {
    console.log('Selected Location:', location);
  };

  const handleTimeRangeChange = (timeRange) => {
    
    console.log('Selected Time Range:', timeRange);
  };

  const handleSubmit = async ()  => {
    setLoading(true)
    const data = {
      event:EventID,
      startDate:startDate,
      endDate:endDate,
      address:address,
      email:email,
      phone:phone,
      status:"pending",
      lat:latLong[1],
      long:latLong[0]
    }

    const res = await axios.post("/api/sendRequest",data).then((response) => {
     
      console.log(response)
      if(response.data.status === "success"){
        
        setLoading(false)
        router.replace("/")
      }
      else
      {
        setError_M(response.data.message)
        setLoading(false)
      }
    })
    .catch((error) => {
      setLoading(false)
      console.log(error)
     
    })
    
  }

  return (
    <div className=" flex items-center justify-center  ">
      <div className="w-full  mx-3 border shadow ">
        <div className="text-center text-3xl font-extrabold m-3  my-10">
          EVENT REQUEST FORM
        </div>
        <div className="border-2 p-8 rounded-xl  border-r-green-900 border-b-red-900   shadow-xl bg-[#e0e3f8] lg:hover:scale-105 duration-300 lg:w-3/4 lg:mx-auto mx-4">
          <div className="mb-6 ">
            <div className="text-center font-bold text-2xl mb-10">
              {EventID} Request Registration
            </div>
            <h2 className="text-2xl font-semibold mb-2">
              {steps[activeStep].label}
            </h2>
            <div className="relative w-full">
              <div className="h-1 bg-white rounded-full"></div>
              <div
                className="absolute top-0 left-0 h-1 bg-green-300 rounded-full"
                style={{ width: `${(activeStep + 1) * (100 / steps.length)}%` }}
              ></div>
            </div>
          </div>

          {activeStep === 0 && (
            <div className="grid lg:grid-cols-2">
              <div>
              <RangeDatePicker onDateRangeChange={handleDateRangeChange}></RangeDatePicker>
              </div>
            
             <div className="mb-6">
                <RangeTimePicker onTimeRangeChange={handleTimeRangeChange}></RangeTimePicker>
                <div className="grid grid-cols-1 gap-4">
               
                <div>
                <label className="block text-gray-700 text-lg font-semibold mb-2">
                  days
                </label>
                <input
                  type="email"
                  disabled
                  value={days}
                  className="appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
                </div>

                <div>
                <label className="block text-gray-700 text-lg font-semibold mb-2">
                  Address
                </label>
                <Test handleAddressChange={handleAddressChange}></Test>
              
                </div>

                </div>
                <div>
               
                </div>
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email address"
                  value={email}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-semibold mb-2">
                  Phone
                </label>
                <input
                value={phone}
                  type="tel"
                  className="appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          )}
          {
            activeStep === 2 && (
              <div className="grid">
              <div className="text-gray-700 font-bold grid lg:grid-cols-2 gap-4">
              <div>  Please review your information before submitting:
                <br />
                Name: {userDetails ? userDetails.name : ""}
                <br />
                email : {email}
                <br />
                Phone: {phone}
                </div>
                <div className=" lg:border-l-2 pl-7 border-black">
                Event : {EventID}
                <br/>
                Date : {startDate.toString().slice(0,10)} - {endDate.toString().slice(0,15)}
                <br/>
                Address : {address}
              </div>
              </div>
             
            </div>
            )
          }
          <div className="mt-6">
             {error && <Error message={error}></Error>}
             {isLoading && <Loader></Loader>}
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
                  onClick={handleSubmit}
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
