import React, { useState } from 'react';
import SelfForm from './selfForm';
import OtherForm from './otherForm';

const AppointmentForm = () => {
  const [appointmentFor, setAppointmentFor] = useState(null);

  const handleAppointmentForChange = (e) => {
    setAppointmentFor(e.target.value);
  };

  const resetForm = () => {
    setAppointmentFor(null);
  };

  return (
    <div className="bg-gray-800 p-6 md:p-12 lg:p-16 xl:p-24 rounded-tl-3xl rounded-bl-3xl mt-14 text-white max-w-4xl mx-auto">
      <div className="text-2xl md:text-4xl mb-8 md:mb-16 text-center">LOGO</div>

      <div className="mb-10 md:mb-16 text-center">
        <h1 className="text-xl md:text-2xl ">Hi there👋</h1>
        <p className="text-sm md:text-lg">
          Request a new appointment in 10 seconds
        </p>
      </div>

      <form>
        {appointmentFor === null ? (
          <div className="mb-6">
            <label className="block mb-2 text-center">
              Who is the appointment for?
            </label>
            <div className="flex justify-center gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="self"
                  checked={appointmentFor === 'self'}
                  onChange={handleAppointmentForChange}
                  className="mr-2"
                />
                Myself
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="other"
                  checked={appointmentFor === 'other'}
                  onChange={handleAppointmentForChange}
                  className="mr-2"
                />
                Someone Else
              </label>
            </div>
          </div>
        ) : appointmentFor === 'self' ? (
          <SelfForm resetForm={resetForm} />
        ) : (
          <OtherForm resetForm={resetForm} />
        )}

        <div className="ml-4 mr-4">
          <button
            type="submit"
            className="w-full h-14 px-4 py-2 mt-8 bg-primary text-black rounded-lg hover:bg-primary-dark "
          >
            Get Started
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
