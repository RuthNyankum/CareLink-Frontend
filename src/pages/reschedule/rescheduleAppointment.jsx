// import { XIcon } from 'lucide-react';
import React from 'react';
import abstract from '../../assets/images/abstract.jpg';
import { XMarkIcon } from '@heroicons/react/24/outline';

const RescheduleAppointment = ({ currentAppointment, onClose }) => {
  const appointmentDetails = currentAppointment || {
    date: 'Not available',
    time: 'Not available',
    doctor: 'Not available',
    department: 'Not available',
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-16 mt-4">
      <div
        className="relative bg-cover bg-center bg-no-repeat p-6 md:p-12 lg:p-16 rounded-xl shadow-lg w-full max-w-4xl"
        /* Updated to max-w-4xl */
        style={{ backgroundImage: `url(${abstract})`, opacity: 0.8 }}
      >
        {/* Optional background overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>

        <div className="relative z-10 p-6 md:p-12 lg:p-16">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-white"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <h1 className="text-2xl md:text-4xl font-semibold text-center mb-4 text-white mt-0">
            Reschedule Appointment
          </h1>
          <p className="text-center mb-8 text-white">
            Please select a new date and time for your appointment.
          </p>

          <div className="mb-6">
            <h2 className="font-semibold mb-2 text-white">
              Current Appointment Details:
            </h2>
            <p className="text-white">
              <strong>Date:</strong> {appointmentDetails.date}
            </p>
            <p className="text-white">
              <strong>Time:</strong> {appointmentDetails.time}
            </p>
            <p className="text-white">
              <strong>Doctor:</strong> {appointmentDetails.doctor}
            </p>
            <p className="text-white">
              <strong>Department:</strong> {appointmentDetails.department}
            </p>
          </div>

          <form>
            <div className="mb-6">
              <label
                htmlFor="newDate"
                className="block mb-2 font-semibold text-white"
              >
                New Appointment Date
              </label>
              <input
                type="date"
                id="newDate"
                name="newDate"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:border-primary"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="newTime"
                className="block mb-2 font-semibold text-white"
              >
                New Appointment Time
              </label>
              <input
                type="time"
                id="newTime"
                name="newTime"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:border-primary"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="reason"
                className="block mb-2 font-semibold text-white"
              >
                Reason for Rescheduling
              </label>
              <textarea
                id="reason"
                name="reason"
                placeholder="Please provide a reason for rescheduling"
                className="w-full h-32 p-4 border border-gray-300 rounded-lg bg-white text-gray-900 resize-none focus:outline-none focus:border-primary"
              ></textarea>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-gray-400 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none"
              >
                Reschedule Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RescheduleAppointment;
