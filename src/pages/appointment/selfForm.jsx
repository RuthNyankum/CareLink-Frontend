import React from 'react';
import DepartmentDoctor from './departmentDoctor';

const SelfForm = ({ resetForm }) => (
  <div className="max-w-4xl mx-auto">
    <button onClick={resetForm} className="mb-4 text-secondary underline">
      ← Go back
    </button>
    <DepartmentDoctor />
    <div className="flex flex-col md:flex-row gap-5 mt-2 ml-4 mr-4">
      <label htmlFor="reason" className="block w-full text-lg">
        Reason for appointment
        <textarea
          name="reason"
          id="reason"
          placeholder="Briefly describe the reason for your appointment"
          className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
        />
      </label>
    </div>
    <div className="flex flex-col md:flex-row gap-5 mt-6 ml-4 mr-4">
      <label htmlFor="date" className="block w-full text-lg">
        Expected appointment date
        <input
          type="date"
          name="date"
          id="date"
          className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
          style={{ WebkitAppearance: 'none' }}
        />
      </label>
      <label htmlFor="time" className="block w-full text-lg">
        Expected appointment time
        <input
          type="time"
          name="time"
          id="time"
          className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
          style={{
            color: '#000',
            WebkitTextFillColor: '#000',
            WebkitAppearance: 'none',
          }}
        />
      </label>
    </div>
  </div>
);

export default SelfForm;
