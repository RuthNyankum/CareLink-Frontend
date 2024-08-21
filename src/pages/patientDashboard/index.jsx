// import React from 'react';
// import Sidebar from './sidebar';
// // import { SquareMenu } from 'lucide';
// import { Link, Outlet } from 'react-router-dom';
// import { CiSquareMinus } from 'react-icons/ci';

// const DashboardLayout = () => {
//   return (
//     <div>
//       <div className="flex font-poppins-regular">
//         <Sidebar />
//         <div className=" w-full ml-[-10rem]">
//           <div className="flex px-16 bg-primary py-5 shadow items-center">
//             <span className="p-3 bg-pink text-white rounded-full shadow-md hover:bg-white hover:text-pink">
//               <CiSquareMinus className="size-8" />
//             </span>
//             <Link
//               to="/dashboard/profile"
//               className="ml-auto bg-white p-4 rounded-full cursor-pointer"
//             >
//               <span className="text-xl font-semibold text-white">
//                 {/* {getAvatar()} */}
//               </span>
//             </Link>
//           </div>
//           <Outlet //context={[profile, setProfile]} />
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import React from 'react';
import Sidebar from '../patientDashboard/sidebar'; // Adjust the import path as necessary
import { Link, Outlet } from 'react-router-dom';
import { CiSquareMinus } from 'react-icons/ci';

const DashboardLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 lg:ml-24 p-4">
        <div className="flex px-4 lg:px-16 bg-primary py-5 shadow items-center">
          <span className="p-3 bg-pink text-white rounded-full shadow-md hover:bg-white hover:text-pink">
            <CiSquareMinus className="text-2xl" />
          </span>
          <Link
            to="/dashboard/profile"
            className="ml-auto bg-white p-4 rounded-full cursor-pointer"
          >
            <span className="text-xl font-semibold text-primary">
              {/* {getAvatar()} */}
            </span>
          </Link>
        </div>
        <div className="mt-4">
          <Outlet // context={[profile, setProfile]} />
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
