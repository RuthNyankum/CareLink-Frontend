import React from 'react';
import AppointmentForm from './appointmentForm';
import abstract from '../../assets/images/abstract.jpg';

const Appointment = () => {
  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-16 mt-7">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
          CareLink
        </h1>
        <p className="text-lg md:text-xl text-black/55">
          Your gateway to convenient healthcare appointments
        </p>
      </header>

      <main className="relative max-w-4xl mx-auto">
        <section
          className="bg-cover bg-center text-white p-6 md:p-12 lg:p-16 rounded-xl shadow-lg"
          style={{ backgroundImage: `url(${abstract})`, opacity: 0.8 }}
        >
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-center">
            Book an Appointment
          </h2>
          <AppointmentForm />
        </section>
      </main>

      <footer className="text-center mt-12 p-6 bg-gray-800 text-white">
        <p>&copy; 2024 CareLink. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Appointment;
