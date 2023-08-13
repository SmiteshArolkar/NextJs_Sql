import React, { useState } from 'react';

const RangeTimePicker = ({ onTimeRangeChange }) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleTimeChange = (event, isStart) => {
    const newTime = event.target.value;
    if (isStart) {
      setStartTime(newTime);
    } else {
      setEndTime(newTime);
    }
    onTimeRangeChange({ startTime: newTime, endTime: endTime });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-2">Select Time </h1>
      <div className="flex items-center space-x-4">
        <input
          type="time"
          value={startTime}
          onChange={(event) => handleTimeChange(event, true)}
          className="border border-gray-300 rounded p-2"
        />
        <span>-</span>
        <input
          type="time"
          value={endTime}
          onChange={(event) => handleTimeChange(event, false)}
          className="border border-gray-300 rounded p-2"
        />
      </div>
    </div>
  );
};

export default RangeTimePicker;
