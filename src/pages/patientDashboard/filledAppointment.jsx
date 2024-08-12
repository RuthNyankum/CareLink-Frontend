import React from 'react';
import K from '../../constant/sidebarConstant';

const FilledAppointment = () => (
  <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-6">Appointment Details</h2>
    {K.APPOINTMENTDETAILS.map((appointment, index) => (
      <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
        <p className="mb-2">
          <strong>Department:</strong> {appointment.department}
        </p>
        <p className="mb-2">
          <strong>Doctor:</strong> {appointment.doctor}
        </p>
        <p className="mb-2">
          <strong>Reason for Appointment:</strong> {appointment.reason}
        </p>
        <p className="mb-2">
          <strong>Date:</strong> {appointment.date}
        </p>
        <p className="mb-2">
          <strong>Time:</strong> {appointment.time}
        </p>
      </div>
    ))}
  </div>
);

export default FilledAppointment;
