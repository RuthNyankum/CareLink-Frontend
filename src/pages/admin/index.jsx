import React from 'react';
import AdminDashboard from './dashboard';
import doc from '../../assets/images/doc1.jpg';

const Admin = () => {
  return (
    // IM NOT USING THE DASHBOARDLAYOUT SO I CAN DELETE IT
    <div className="mt-20 mb-5 font-poppins-regular">
      <div className="w-full flex justify-around p-5 items-center text-lg bg-primary text-white">
        <p>LOGO</p>
        <div className="">
          <img src={doc} alt="" className="h-16 w-16 rounded-full" />
          <p>Dr Snow</p>
        </div>
      </div>

      <div className="mt-7">
        <AdminDashboard />
      </div>
    </div>
  );
};

export default Admin;
