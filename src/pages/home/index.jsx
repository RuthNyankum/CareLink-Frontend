// import React from 'react';
// import vid from '../../assets/video/bgLanding.mp4';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
// import { Link } from 'react-router-dom';
// import N from '../../constant';

// const Home = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden font-poppins-regular">
//       {/* Video Background */}
//       <video
//         autoPlay
//         muted
//         loop
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         id="bg-video"
//       >
//         <source src={vid} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Content Over Video */}
//       <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center p-4 z-10">
//         <h1 className="text-5xl font-bold mb-4">Welcome to CareLink</h1>
//         <p className="text-lg mb-4">Navigating Health with Ease</p>

//         <Link
//           to="/about-us"
//           className="flex items-center text-xl space-x-2 mb-8"
//         >
//           <span>Explore our site to learn more.</span>
//           <ArrowRightIcon className="h-5 w-5 text-primary" />
//         </Link>

//         <div className="flex flex-col md:flex-row gap-10 md:gap-36 mt-28">
//           {N.BUTTONDATA.map(({ title, link, buttonText }, index) => (
//             <div key={index} className="text-center">
//               <p className="text-3xl mb-2">{title}</p>
//               <Link to={link}>
//                 <button className="text-xl px-9 py-2 bg-primary rounded-xl">
//                   {buttonText}
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
// import Typed from 'react-typed';
import bgImage from '../../assets/images/care1.jpg';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import N from '../../constant';
import { ReactTyped } from 'react-typed';

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden font-poppins-regular">
      {/* Image Background */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Content Over Image and Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center p-4 z-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to CareLink</h1>
        <p className="text-lg mb-4">Navigating Health with Ease</p>

        <Link
          to="/about-us"
          className="flex items-center text-2xl space-x-2 mb-8"
        >
          <ReactTyped
            strings={['Explore our site to learn more.']}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="inline-block"
          />
          <ArrowRightIcon className="h-5 w-5 text-primary" />
        </Link>

        <div className="flex flex-col md:flex-row gap-10 md:gap-36 mt-28">
          {N.BUTTONDATA.map(({ title, link, buttonText }, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl mb-2">{title}</p>
              <Link to={link}>
                <button className="text-xl px-9 py-2 bg-primary rounded-xl">
                  {buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
