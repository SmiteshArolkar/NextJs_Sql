import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const LocationInput = ({ onLocationChange }) => {
  const handleSelect = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);

      onLocationChange({
        address: results[0].formatted_address,
        latLng: latLng,
      });
    } catch (error) {
      console.error("Error selecting location:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-2">Enter Location</h1>
      <PlacesAutocomplete
      
        onSelect={handleSelect}
        searchOptions={{ types: ["(cities)"] }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Enter a location...",
                className: "w-full p-2 border border-gray-300 rounded",
              })}
            />
            <div>
              {loading ? <div>Loading...</div> : null}

              {suggestions.map((suggestion, index) => {
                const style = {
                  backgroundColor: suggestion.active ? "#f2f2f2" : "white",
                  cursor: "pointer",
                };

                return (
                  <div
                    key={index}
                    {...getSuggestionItemProps(suggestion, { style })}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default LocationInput;
