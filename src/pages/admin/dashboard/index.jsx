import React from 'react';
import N from '../../../constant';
import AdminDashboardLayout from './dasboardLayout';
// import DashboardLayout from './dasboardLayout';

const AdminDashboard = () => {
  return (
    <>
      {/* <AdminDashboardLayout /> */}
      <div className="min-h-screen bg-black flex justify-center  mx-28">
        <div className="w-full max-w-7xl bg-gray-900 text-white p-4 mx-4 rounded-lg">
          <div className="flex justify-between mb-7">
            <h1>Logo</h1>

            <div className="flex">
              <img src="" alt="admin" />
              <span>Admin</span>
            </div>
          </div>

          <div className="flex flex-col items-start mb-8">
            <h1 className="text-3xl font-bold mb-4">Welcome, Admin</h1>
            <p className="text-lg">
              Start your day by managing new appointments
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8">
            {N.OVERVIEW.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/40 rounded-lg shadow-md p-6 flex items-center"
                >
                  <div className={`mr-4 text-4xl ${item.color}`}>
                    <IconComponent />
                  </div>
                  <div>
                    <span className="text-2xl font-bold">{item.number}</span>
                    <p className="text-gray-300">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <h2 className="text-2xl font-bold mb-4">Appointment Overview</h2>
          <div className="overflow-x-auto w-full">
            <table className="min-w-full bg-gray-800 text-white shadow-md rounded-lg">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-700 text-left text-xs leading-4 text-gray-400 uppercase tracking-wider">
                    Patient
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-700 text-left text-xs leading-4 text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-700 text-left text-xs leading-4 text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-700 text-left text-xs leading-4 text-gray-400 uppercase tracking-wider">
                    Doctor
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-700 text-left text-xs leading-4 text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {N.APPOINTMENT.map((appointment, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={`https://ui-avatars.com/api/?name=${appointment.patient}&background=random`}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm leading-5 font-medium text-white">
                            {appointment.patient}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 text-white">
                        {appointment.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${appointment.statusColor}`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={appointment.doctorAvatar}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm leading-5 font-medium text-white">
                            {appointment.doctor}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium">
                      <a
                        href="#"
                        className="text-green-400 hover:text-green-600 mr-2"
                      >
                        Schedule
                      </a>
                      <a href="#" className="text-red-400 hover:text-red-600">
                        Cancel
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
