import { XMarkIcon } from '@heroicons/react/24/outline';
import abstract from '../../assets/images/abstract.jpg';
import React from 'react';

const CancelAppointment = ({ currentAppointment, onClose }) => {
  const appointmentDetails = currentAppointment || {
    date: 'Not available',
    time: 'Not available',
    doctor: 'Not available',
    department: 'Not available',
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-16">
      <div
        className="relative bg-black/85 text-gray-900 p-6 md:p-12 lg:p-16 rounded-xl shadow-lg w-full max-w-2xl"
        style={{ backgroundImage: `url(${abstract})`, opacity: 0.8 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <XMarkIcon className="h-6 w-6 text-white" />
        </button>

        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-4 text-white">
          Cancel Appointment
        </h1>

        <div className="mb-6 text-white">
          <h2 className="font-semibold mb-2">Current Appointment Details:</h2>
          <p>
            <strong>Date:</strong> {appointmentDetails.date}
          </p>
          <p>
            <strong>Time:</strong> {appointmentDetails.time}
          </p>
          <p>
            <strong>Doctor:</strong> {appointmentDetails.doctor}
          </p>
          <p>
            <strong>Department:</strong> {appointmentDetails.department}
          </p>
        </div>

        <p className="text-center mb-8 text-white">
          Are you sure you want to cancel your appointment?
        </p>

        <form>
          <label
            htmlFor="reason"
            className="block mb-2 font-semibold text-white"
          >
            Reason for Cancellation
          </label>
          <textarea
            id="reason"
            name="reason"
            placeholder="Urgent meeting came up"
            className="w-full h-32 p-4 mb-6 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-primary text-black"
          ></textarea>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Go Back
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Cancel Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CancelAppointment;
