// // import React from 'react';
// // import K from '../../constant/sidebarConstant';
// // import { Link, NavLink } from 'react-router-dom';
// // import { BiLogOut } from 'react-icons/bi';

// // const Sidebar = () => {
// //   return (
// //     <div className="mt-32 ml-7 bg-primary shadow-lg rounded-l-full rounded-r-full w-24 h-[60vh] p-4 relative z-10 bg-opacity-80 backdrop-filter backdrop-blur-lg flex flex-col justify-between mr-10 font-poppins-regular">
// //       {/* <h1 className="text-center text-white font-bold mt-6">PATIENT</h1> */}

// //       <div className="flex flex-col space-y-6 mt-16">
// //         {K.NAVLINKS.map(({ icon, text, link }, index) => (
// //           <NavLink
// //             to={link}
// //             key={index}
// //             className={({ isActive }) =>
// //               `flex items-center justify-center p-2 rounded-md transition-all duration-300 ${
// //                 isActive
// //                   ? 'bg-white text-primary'
// //                   : 'text-white hover:bg-white hover:text-primary'
// //               }`
// //             }
// //             end
// //           >
// //             <div className="relative group">
// //               <span className="text-2xl">{icon}</span>
// //               <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-slate-600 text-white rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
// //                 {text}
// //               </span>
// //             </div>
// //           </NavLink>
// //         ))}
// //       </div>

// //       <button
// //         className="flex items-center justify-center mt-auto p-2 text-white hover:bg-white hover:text-primary rounded transition-all duration-300"
// //         // onClick={logout} // Uncomment and implement the logout function if needed
// //       >
// //         {/* <div className="relative group">
// //           <span className="text-2xl">
// //             <BiLogOut />
// //           </span>
// //           <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-slate-600 text-white rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
// //             Logout
// //           </span>
// //         </div> */}
// //         <div className="relative group">
// //           <Link to="/about-us">
// //             <span className="text-2xl">
// //               <BiLogOut />
// //             </span>
// //             <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-slate-600 text-white rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
// //               Logout
// //             </span>
// //           </Link>
// //         </div>
// //       </button>
// //     </div>
// //   );
// // };

// // export default Sidebar;
// import React, { useState } from 'react';
// import K from '../../constant/sidebarConstant';
// import { Link, NavLink } from 'react-router-dom';
// import { BiLogOut, BiMenu } from 'react-icons/bi';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       {/* Toggle button for mobile view */}
//       <div className="sm:hidden fixed top-5 left-5 z-20">
//         <button
//           onClick={toggleSidebar}
//           className="text-white text-3xl focus:outline-none"
//         >
//           <BiMenu />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full p-4 bg-primary shadow-lg z-10 transition-transform duration-300 ease-in-out transform ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         } sm:translate-x-0 sm:static sm:ml-7 sm:bg-opacity-80 sm:backdrop-filter sm:backdrop-blur-lg sm:w-24 sm:h-[60vh] sm:rounded-l-full sm:rounded-r-full sm:flex sm:flex-col sm:justify-between sm:mt-32 sm:font-poppins-regular`}
//       >
//         {/* Navigation Links */}
//         <div className="flex flex-col space-y-6 mt-16">
//           {K.NAVLINKS.map(({ icon, text, link }, index) => (
//             <NavLink
//               to={link}
//               key={index}
//               className={({ isActive }) =>
//                 `flex items-center justify-center p-2 rounded-md transition-all duration-300 ${
//                   isActive
//                     ? 'bg-white text-primary'
//                     : 'text-white hover:bg-white hover:text-primary'
//                 }`
//               }
//               end
//               onClick={toggleSidebar} // Close sidebar on link click in mobile view
//             >
//               <div className="relative group">
//                 <span className="text-2xl">{icon}</span>
//                 <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-slate-600 text-white rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
//                   {text}
//                 </span>
//               </div>
//             </NavLink>
//           ))}
//         </div>

//         {/* Logout Button */}
//         <button
//           className="flex items-center justify-center mt-auto p-2 text-white hover:bg-white hover:text-primary rounded transition-all duration-300"
//           onClick={toggleSidebar} // Close sidebar on logout click in mobile view
//         >
//           <div className="relative group">
//             <Link to="/about-us">
//               <span className="text-2xl">
//                 <BiLogOut />
//               </span>
//               <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-slate-600 text-white rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
//                 Logout
//               </span>
//             </Link>
//           </div>
//         </button>
//       </div>

//       {/* Overlay for closing sidebar in mobile view */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-10 sm:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from 'react';
import K from '../../constant/sidebarConstant';
import { Link, NavLink } from 'react-router-dom';
import { BiLogOut, BiMenu } from 'react-icons/bi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Toggle button for mobile view */}
      <div className="sm:hidden fixed top-5 left-5 z-30">
        <button
          onClick={toggleSidebar}
          className="text-white text-3xl focus:outline-none"
        >
          <BiMenu />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full p-4 bg-primary shadow-lg z-20 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 sm:static sm:ml-7 sm:bg-opacity-80 sm:backdrop-filter sm:backdrop-blur-lg sm:w-24 sm:h-[60vh] sm:rounded-l-full sm:rounded-r-full sm:flex sm:flex-col sm:justify-between sm:mt-32 sm:font-poppins-regular`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col space-y-6 mt-16">
          {K.NAVLINKS.map(({ icon, text, link }, index) => (
            <NavLink
              to={link}
              key={index}
              className={({ isActive }) =>
                `flex items-center justify-center p-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-primary'
                    : 'text-white hover:bg-white hover:text-primary'
                }`
              }
              end
              onClick={() => setIsOpen(false)} // Close sidebar on link click in mobile view
            >
              <div className="relative group">
                <span className="text-2xl">{icon}</span>
                <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-slate-600 text-white rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  {text}
                </span>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Logout Button */}
        <button
          className="flex items-center justify-center mt-auto p-2 text-white hover:bg-white hover:text-primary rounded transition-all duration-300"
          onClick={() => setIsOpen(false)} // Close sidebar on logout click in mobile view
        >
          <div className="relative group">
            <Link to="/about-us">
              <span className="text-2xl">
                <BiLogOut />
              </span>
              <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-slate-600 text-white rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                Logout
              </span>
            </Link>
          </div>
        </button>
      </div>

      {/* Overlay for closing sidebar in mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 sm:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
