import React, { useState } from 'react';

const PriceRangePicker = ({ onPriceRangeChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const handlePriceChange = () => {
    onPriceRangeChange({ minPrice, maxPrice });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-2">Select Price Range</h1>
      <input
        type="range"
        min="0"
        max="100000"
        step="1"
        value={minPrice}
        onChange={(event) => setMinPrice(event.target.value)}
        className="w-full"
        style={{
          background: `linear-gradient(to right, #e53e3e 0%, #e53e3e ${minPrice}%, #ddd ${minPrice}%, #ddd 100%)`,
        }}
        onInput={handlePriceChange}
      />
      <div className="flex justify-between">
        <span>${minPrice}</span>
        <span>${maxPrice}</span>
      </div>
    </div>
  );
};

export default PriceRangePicker;
