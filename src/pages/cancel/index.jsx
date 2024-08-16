// import React, { useState } from 'react';
// import CancelAppointment from './cancelAppointment';
// import Navbar from '../../component/navbar';
// import Footer from '../../component/footer';
// // import CancelAppointment from './CancelAppointment';

// const CAncel = () => {
//   const [showCancelForm, setShowCancelForm] = useState(false);

//   const handleCancelClick = () => {
//     setShowCancelForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowCancelForm(false);
//   };

//   const currentAppointment = {
//     date: '2024-08-10',
//     time: '10:00 AM',
//     doctor: 'Dr. John Doe',
//     department: 'Cardiology',
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-gray-900 p-6 md:p-12 lg:p-16 flex items-center justify-center font-poppins-regular text-lg">
//         <Navbar />
//         {!showCancelForm ? (
//           <div className="text-center text-black">
//             <h1 className="text-3xl md:text-5xl font-bold mb-8">
//               Manage Your Appointment
//             </h1>
//             <div className="mb-6">
//               <h2 className="text-xl md:text-2xl font-semibold mb-2">
//                 Appointment Details:
//               </h2>
//               <p>
//                 <strong>Date:</strong> {currentAppointment.date}
//               </p>
//               <p>
//                 <strong>Time:</strong> {currentAppointment.time}
//               </p>
//               <p>
//                 <strong>Doctor:</strong> {currentAppointment.doctor}
//               </p>
//               <p>
//                 <strong>Department:</strong> {currentAppointment.department}
//               </p>
//             </div>
//             <button
//               onClick={handleCancelClick}
//               className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//             >
//               Cancel Appointment
//             </button>
//           </div>
//         ) : (
//           <CancelAppointment
//             currentAppointment={currentAppointment}
//             onClose={handleCloseForm}
//           />
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default CAncel;

// import React, { useState } from 'react';
// import CancelAppointment from './cancelAppointment';
// import Navbar from '../../component/navbar';
// import Footer from '../../component/footer';
// import abstract from '../../assets/images/abs2.jpg';

// const CAncel = () => {
//   const [showCancelForm, setShowCancelForm] = useState(false);

//   const handleCancelClick = () => {
//     setShowCancelForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowCancelForm(false);
//   };

//   const currentAppointment = {
//     date: '2024-08-10',
//     time: '10:00 AM',
//     doctor: 'Dr. John Doe',
//     department: 'Cardiology',
//   };

//   return (
//     <>
//       <div
//         className="min-h-screen bg-cover bg-center p-6 md:p-12 lg:p-16 flex items-center justify-center font-poppins-regular text-lg"
//         style={{ backgroundImage: `url(${abstract})` }}
//       >
//         <Navbar />
//         {!showCancelForm ? (
//           <div className="text-center text-white">
//             <h1 className="text-3xl md:text-5xl font-bold mb-8">
//               Manage Your Appointment
//             </h1>
//             <div className="mb-6">
//               <h2 className="text-xl md:text-2xl font-semibold mb-2">
//                 Appointment Details:
//               </h2>
//               <p>
//                 <strong>Date:</strong> {currentAppointment.date}
//               </p>
//               <p>
//                 <strong>Time:</strong> {currentAppointment.time}
//               </p>
//               <p>
//                 <strong>Doctor:</strong> {currentAppointment.doctor}
//               </p>
//               <p>
//                 <strong>Department:</strong> {currentAppointment.department}
//               </p>
//             </div>
//             <button
//               onClick={handleCancelClick}
//               className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//             >
//               Cancel Appointment
//             </button>
//           </div>
//         ) : (
//           <CancelAppointment
//             currentAppointment={currentAppointment}
//             onClose={handleCloseForm}
//           />
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default CAncel;

import React, { useState } from 'react';
import CancelAppointment from './cancelAppointment';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';
import abstract from '../../assets/images/abs2.jpg';

const CAncel = () => {
  const [showCancelForm, setShowCancelForm] = useState(false);

  const handleCancelClick = () => {
    setShowCancelForm(true);
  };

  const handleCloseForm = () => {
    setShowCancelForm(false);
  };

  const currentAppointment = {
    date: '2024-08-10',
    time: '10:00 AM',
    doctor: 'Dr. John Doe',
    department: 'Cardiology',
  };

  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center p-6 md:p-12 lg:p-16 flex items-center justify-center font-poppins-regular text-lg"
        style={{ backgroundImage: `url(${abstract})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>{' '}
        {/* Overlay */}
        <div className="relative z-10">
          <Navbar />
          {!showCancelForm ? (
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-8">
                Manage Your Appointment
              </h1>
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  Appointment Details:
                </h2>
                <p>
                  <strong>Date:</strong> {currentAppointment.date}
                </p>
                <p>
                  <strong>Time:</strong> {currentAppointment.time}
                </p>
                <p>
                  <strong>Doctor:</strong> {currentAppointment.doctor}
                </p>
                <p>
                  <strong>Department:</strong> {currentAppointment.department}
                </p>
              </div>
              <button
                onClick={handleCancelClick}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Cancel Appointment
              </button>
            </div>
          ) : (
            <CancelAppointment
              currentAppointment={currentAppointment}
              onClose={handleCloseForm}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CAncel;
