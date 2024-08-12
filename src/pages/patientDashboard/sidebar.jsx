import React from 'react';
import K from '../../constant/sidebarConstant';
import { NavLink } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';

const Sidebar = () => {
  return (
    <div className="mt-32 ml-7 bg-slate-600 shadow-lg rounded-l-full rounded-r-full w-24 h-[60vh] p-4 relative z-10 bg-opacity-80 backdrop-filter backdrop-blur-lg flex flex-col justify-between mr-10 font-poppins-regular">
      <h1 className="text-center text-white font-bold mt-6">PATIENT</h1>

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

      <button
        className="flex items-center justify-center mt-auto p-2 text-white hover:bg-white hover:text-primary rounded transition-all duration-300"
        // onClick={logout} // Uncomment and implement the logout function if needed
      >
        <div className="relative group">
          <span className="text-2xl">
            <BiLogOut />
          </span>
          <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-slate-600 text-white rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            Logout
          </span>
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
