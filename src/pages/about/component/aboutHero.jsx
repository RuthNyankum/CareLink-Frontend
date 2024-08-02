import React from 'react';
import doctor from '../../../assets/images/doc3.jpg';
import patient from '../../../assets/images/patient1.png';

const AboutHero = () => {
  return (
    <div className="mt-32 mx-auto max-w-7xl relative">
      <div className="flex flex-col lg:flex-row justify-around items-center relative z-10">
        <div className="h-auto w-[600px] mb-8 lg:mb-0 mt-20">
          <img
            src={patient}
            alt="Patient"
            className="h-[550px] w-[700px] rounded-br-full rounded-t-full"
          />
        </div>

        <div className="flex-1 text-center lg:text-left lg:px-8">
          <div className="flex items-center gap-4 justify-center lg:justify-start mb-2">
            <span className="font-bold text-[1.8rem]">About</span>
            <span className="font-bold text-secondary text-[3rem]">
              CareLink
            </span>
          </div>

          <p className="mb-4 text-justify">
            CareLink is an innovative healthcare platform designed to streamline
            the process of booking and managing medical appointments. Our
            platform connects patients with healthcare providers, making it easy
            to schedule, reschedule, and manage appointments from the comfort of
            your home.
          </p>
          <div>
            <p className="font-bold mb-2 text-[2rem]">Mission Statement</p>
            <p className="text-justify">
              Our mission at CareLink is to make healthcare accessible and
              convenient for everyone. We strive to empower patients and
              healthcare professionals by providing a seamless and efficient
              platform for managing appointments and healthcare services.
            </p>
          </div>
        </div>

        <div className="h-auto w-[600px] mb-20">
          <img
            src={doctor}
            alt="Doctor"
            className="h-[550px] w-[700px] rounded-b-full rounded-tl-full"
          />
        </div>
      </div>

      {/* Curved Moving Dashed Line */}
      <svg
        className="absolute inset-x-0 top-3/4"
        width="100%"
        height="200px"
        viewBox="0 0 1000 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M200 50 Q500 200 800 50"
          stroke="#4ADEDE"
          strokeWidth="4"
          strokeDasharray="10 10"
          className="animate-dash"
          fill="none"
        />
      </svg>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes dash {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -20;
          }
        }
        .animate-dash {
          animation: dash 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutHero;
