import React, { useState } from 'react';
import Map from './Map/GoogleMap';

const Test = ({handleAddressChange,setLat}) => {
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [latLong,SetLatLong] = useState([])

  const handleInputChange = async (event) => {
    const inputValue = event.target.value;
    setLocation(inputValue);

    // Check if the input is empty
    if (inputValue === '') {
      setSuggestions([]);
      return;
    }

    const apiKey = '39fd510a894e4f0fbd63e4ececebab60';
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&apiKey=${apiKey}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSuggestions(data.features);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion.properties.formatted);
    console.log(suggestion.geometry.coordinates)
    SetLatLong(suggestion.geometry.coordinates)

    setSuggestions([]);
    setSelectedLocation(suggestion.properties.formatted);
    handleAddressChange(suggestion.properties.formatted)
    console.log('Selected Location:', suggestion.properties.formatted);
  };

  return (
    <div className={`w-full grid  ${latLong[1] ? "grid-col-2" : "grid-cols-1"}my-2 mx-auto`}>
      <div>
      {
      latLong[0] && latLong[1] && (
        <div className='p-4'>
             <Map apiKey={"AIzaSyDMRTjPWNEUp8J81tzfAw5lhcJQK50oKr0"} latitude={latLong[1]} longitude={latLong[0]}></Map>
        </div>
     
      )
     }
      </div>
      <div className="relative">
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleInputChange}
          className="block w-full px-4 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {location !== '' && suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.properties.osm_id}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {suggestion.properties.formatted}
              </li>
            ))}
          </ul>
        )}
      </div>


    </div>
  );
};


export default Test;