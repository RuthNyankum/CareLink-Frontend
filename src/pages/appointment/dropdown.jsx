import React, { useState, useEffect } from 'react';

const Dropdown = ({ options, selectedValue, onChange, onCheckboxChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  const handleCheckboxChange = (doctorId) => (e) => {
    onCheckboxChange(doctorId, e.target.checked);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-full p-2 border border-gray-300 text-black bg-white text-left h-14 rounded-lg"
      >
        {selectedValue
          ? options.find((option) => option.id === selectedValue).name
          : 'Select a doctor'}
      </button>
      {isOpen && (
        <div className="absolute left-0 w-full mt-2 border border-gray-300 bg-white text-black z-10">
          {options.map((option) => (
            <div
              key={option.id}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option.id)}
            >
              <img
                src={option.image}
                alt={option.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{option.name}</h3>
                <p className="text-gray-600">{option.specialty}</p>
              </div>
              <input
                type="checkbox"
                checked={option.id === selectedValue}
                onChange={handleCheckboxChange(option.id)}
                className="ml-2"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
