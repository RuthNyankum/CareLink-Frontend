// import React from 'react';

// const Overview = () => {
//   return (
//     <div className="p-6 ml-[10rem] bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Overview</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {/* Total Appointments */}
//         <div className="p-4 bg-blue-100 rounded-lg shadow">
//           <h3 className="text-xl font-semibold">Total Appointments</h3>
//           <p className="text-3xl font-bold mt-2">25</p>
//         </div>

//         {/* Upcoming Appointments */}
//         <div className="p-4 bg-green-100 rounded-lg shadow">
//           <h3 className="text-xl font-semibold">Upcoming Appointments</h3>
//           <p className="text-3xl font-bold mt-2">5</p>
//         </div>

//         {/* Medical Records */}
//         <div className="p-4 bg-yellow-100 rounded-lg shadow">
//           <h3 className="text-xl font-semibold">Medical Records</h3>
//           <p className="text-3xl font-bold mt-2">12</p>
//         </div>

//         {/* Notifications */}
//         <div className="p-4 bg-red-100 rounded-lg shadow">
//           <h3 className="text-xl font-semibold">Notifications</h3>
//           <p className="text-3xl font-bold mt-2">3</p>
//         </div>
//       </div>

//       {/* Recent Activity */}
//       <div className="mt-6">
//         <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
//         <ul>
//           <li className="mb-2">Appointment with Dr. Smith on Aug 15, 2024</li>
//           <li className="mb-2">Received lab results on Aug 10, 2024</li>
//           <li className="mb-2">
//             Scheduled follow-up with Dr. Brown on Aug 22, 2024
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Overview;

import React from 'react';

const Overview = () => {
  return (
    <div className="p-4 md:p-6 lg:ml-[10rem] bg-white rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Total Appointments */}
        <div className="p-3 md:p-4 bg-blue-100 rounded-lg shadow">
          <h3 className="text-lg md:text-xl font-semibold">
            Total Appointments
          </h3>
          <p className="text-2xl md:text-3xl font-bold mt-2">25</p>
        </div>

        {/* Upcoming Appointments */}
        <div className="p-3 md:p-4 bg-green-100 rounded-lg shadow">
          <h3 className="text-lg md:text-xl font-semibold">
            Upcoming Appointments
          </h3>
          <p className="text-2xl md:text-3xl font-bold mt-2">5</p>
        </div>

        {/* Medical Records */}
        <div className="p-3 md:p-4 bg-yellow-100 rounded-lg shadow">
          <h3 className="text-lg md:text-xl font-semibold">Medical Records</h3>
          <p className="text-2xl md:text-3xl font-bold mt-2">12</p>
        </div>

        {/* Notifications */}
        <div className="p-3 md:p-4 bg-red-100 rounded-lg shadow">
          <h3 className="text-lg md:text-xl font-semibold">Notifications</h3>
          <p className="text-2xl md:text-3xl font-bold mt-2">3</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-4 md:mt-6">
        <h3 className="text-lg md:text-xl font-semibold mb-4">
          Recent Activity
        </h3>
        <ul className="list-disc list-inside">
          <li className="mb-1 text-sm md:text-base">
            Appointment with Dr. Smith on Aug 15, 2024
          </li>
          <li className="mb-1 text-sm md:text-base">
            Received lab results on Aug 10, 2024
          </li>
          <li className="mb-1 text-sm md:text-base">
            Scheduled follow-up with Dr. Brown on Aug 22, 2024
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
