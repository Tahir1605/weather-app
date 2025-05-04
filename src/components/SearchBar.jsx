// src/components/SearchBar.jsx
import React, { useState } from 'react';

const cities = ['New York', 'Los Angeles', 'Tokyo', 'London', 'Paris'];

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  return (
    <div className="mb-4">
      <div className="flex justify-center gap-2">
        <input
          type="text"
          placeholder="Enter city"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="rounded-full px-4 py-2 w-64"
        />
        <button
          onClick={() => onSearch(input)}
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          Search
        </button>
      </div>
      <div className="flex justify-center mt-4 gap-2 flex-wrap">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => onSearch(city)}
            className="bg-white text-gray-700 px-3 py-1 rounded-full shadow"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
