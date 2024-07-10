import React, { useState } from "react";

function Weather({ weatherData }) {
  const [selectedDistrict, setSelectedDistrict] = useState("Maseru");

  const handleChange = (event) => {
    setSelectedDistrict(event.target.value);
  };
  return (
    <div className="container mx-auto px-4 py-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Weather</h1>
      <label
        htmlFor="districts"
        className="block text-lg font-medium text-gray-700 mb-2"
      >
        Choose your Location
      </label>
      <select
        name="districts"
        value={selectedDistrict}
        onChange={handleChange}
        className="block w-full p-2 border border-gray-300 rounded-md"
      >
        {Object.keys(weatherData).map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>
      <div
        id="weatherDisplay"
        className="mt-4 text-lg font-medium text-gray-800"
      >
        Weather in {selectedDistrict}: {weatherData[selectedDistrict]}
      </div>
    </div>
  );
}

export default Weather;
