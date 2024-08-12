// import React, { useState } from 'react';
// import RescheduleAppointment from './rescheduleAppointment';

// const Reschedule = () => {
//   const [showReschedule, setShowReschedule] = useState(false);

//   const currentAppointment = {
//     date: '2024-08-10',
//     time: '10:00 AM',
//     doctor: 'Dr. John Doe',
//     department: 'Cardiology',
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 mt-28">
//       <div className="text-center mb-8">
//         <p className="text-xl font-semibold mb-2">Hi Dear</p>
//         <p className="text-lg text-gray-700 mb-6">
//           Do you want to reschedule your appointment?
//         </p>
//       </div>
//       <button
//         onClick={() => setShowReschedule(true)}
//         className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none"
//       >
//         Reschedule Appointment
//       </button>
//       {showReschedule && (
//         <RescheduleAppointment
//           currentAppointment={currentAppointment}
//           onClose={() => setShowReschedule(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default Reschedule;

import React, { useState } from 'react';
import RescheduleAppointment from './rescheduleAppointment';
import N from '../../constant';

const Reschedule = () => {
  const [showReschedule, setShowReschedule] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 mt-28 font-poppins-regular">
      <div className="text-center mb-8">
        <p className="text-2xl font-semibold mb-2">Hi there👋</p>
        <p className="text-xl text-gray-700 mb-6">
          Do you want to reschedule your appointment?
        </p>
      </div>
      <button
        onClick={() => setShowReschedule(true)}
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none"
      >
        Reschedule Appointment
      </button>
      {showReschedule && (
        <RescheduleAppointment
          currentAppointment={N.CURRENTAPPOINTMENT}
          onClose={() => setShowReschedule(false)}
        />
      )}
    </div>
  );
};

export default Reschedule;
