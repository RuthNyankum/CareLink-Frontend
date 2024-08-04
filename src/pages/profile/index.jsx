import React from 'react';
import abstract from '../../assets/images/abstract.jpg';
import PersonalInfo from './personalInfo';
import MedicalInfo from './medicalInfo';
import IdVerification from './idVerify';
import ConsentForm from './consentForm';

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4 mt-32">
      <div className="relative bg-gray-800 rounded-md shadow-md p-8 w-full max-w-6xl flex flex-col items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-md"
          style={{ backgroundImage: `url(${abstract})`, opacity: 0.7 }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-75 rounded-md"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl">
          <div>
            <h1 className="text-white text-3xl font-bold mb-4 text-center">
              Profile
            </h1>
            <h1 className="ml-11 text-white mb-5">LOGO</h1>
            <h2 className="ml-11 text-white text-3xl">Welcome</h2>
            <p className="ml-11 text-white ">Let us know more about yourself</p>
          </div>

          <div className="bg-gray-900 bg-opacity-75 p-6 rounded-md">
            <PersonalInfo />
            <MedicalInfo />
            <IdVerification />
            <ConsentForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
