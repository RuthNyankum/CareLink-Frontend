import React from 'react';
import AdminDashboard from './dashboard';
import doc from '../../assets/images/doc1.jpg';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    // IM NOT USING THE DASHBOARDLAYOUT SO I CAN DELETE IT
    <div className=" mb-5 font-poppins-regular">
      <div className="w-full flex justify-around p-5 items-center text-lg bg-primary text-white">
        <Link to="/">
          <p className="font-bold text-4xl text-white">CARELINK.</p>
        </Link>
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
