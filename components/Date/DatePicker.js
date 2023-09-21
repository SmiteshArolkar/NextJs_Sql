import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const RangeDatePicker = ({ onDateRangeChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    console.log(dates)
    setStartDate(dates[0]);
    setEndDate(dates[1]);
    onDateRangeChange(dates)
  };

  const isDateValid = (date) => {
    const today = new Date();
    const threeDaysLater = new Date();
    threeDaysLater.setDate(today.getDate() + 5);
    return date >= today;
  };

  return (
    <div className="p-4">
      <h1>{startDate && startDate.toString().slice(0,10)} </h1>
      <h1 className="text-xl font-semibold mb-2 ">Select Event Date (Max 5 days)</h1>
      <DatePicker
      className='rounded-xl bg-[#6979f8]'
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        filterDate={isDateValid}
      />
    </div>
  );
};

export default RangeDatePicker;
