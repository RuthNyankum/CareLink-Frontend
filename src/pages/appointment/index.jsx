import React from 'react';
import AppointmentForm from './appointmentForm';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';
import backgroundImage from '../../assets/images/abs2.jpg';

const Appointment = () => {
  return (
    <>
      <Navbar />
      <div
        className="relative min-h-screen p-6 md:p-12 lg:p-16 mt-7 font-poppins-regular bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <header className="relative z-10 text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            CareLink
          </h1>
          <p className="text-lg md:text-xl text-white/75">
            Your gateway to convenient healthcare appointments
          </p>
        </header>

        <main className="relative z-10 max-w-4xl mx-auto">
          <section className="bg-white bg-opacity-10 backdrop-blur-lg p-6 md:p-12 lg:p-16 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-center text-white">
              Book an Appointment
            </h2>
            <AppointmentForm />
          </section>
        </main>

        <footer className="relative z-10 text-center mt-12 p-6 bg-gray-800 text-white">
          <p>&copy; 2024 CareLink. All rights reserved.</p>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default Appointment;

// import React from 'react';
// import AppointmentForm from './appointmentForm';
// import abstract from '../../assets/images/abs.jpeg';
// import Navbar from '../../component/navbar';
// import Footer from '../../component/footer';

// const Appointment = () => {
//   return (
//     <>
//       <div className="min-h-screen p-6 md:p-12 lg:p-16 mt-7 font-poppins-regular">
//         <Navbar />
//         <header className="text-center mb-12">
//           <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
//             CareLink
//           </h1>
//           <p className="text-lg md:text-xl text-black/55">
//             Your gateway to convenient healthcare appointments
//           </p>
//         </header>

//         <main className="relative max-w-4xl mx-auto">
//           <section className="bg-cover bg-center text-white p-6 md:p-12 lg:p-16 rounded-xl shadow-lg">
//             <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-center">
//               Book an Appointment
//             </h2>
//             <AppointmentForm />
//           </section>
//         </main>

//         <footer className="text-center mt-12 p-6 bg-gray-800 text-white">
//           <p>&copy; 2024 CareLink. All rights reserved.</p>
//         </footer>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Appointment;

// import React from 'react';
// import AppointmentForm from './appointmentForm';
// import Navbar from '../../component/navbar';

// const Appointment = () => {
//   return (
//     <div className="min-h-screen p-6 md:p-12 lg:p-16 mt-7 font-poppins-regular bg-black">
//       <Navbar />
//       <header className="text-center mb-12">
//         <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
//           CareLink
//         </h1>
//         <p className="text-lg md:text-xl text-black/55">
//           Your gateway to convenient healthcare appointments
//         </p>
//       </header>

//       <main className="relative max-w-4xl mx-auto">
//         <section className="bg-white bg-opacity-30 backdrop-blur-lg text-white p-6 md:p-12 lg:p-16 rounded-xl shadow-lg">
//           <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-center">
//             Book an Appointment
//           </h2>
//           <AppointmentForm />
//         </section>
//       </main>

//       <footer className="text-center mt-12 p-6 bg-gray-800 text-white">
//         <p>&copy; 2024 CareLink. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Appointment;
