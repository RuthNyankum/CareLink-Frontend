import React from 'react';
import Navbar from '../component/navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/footer';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
