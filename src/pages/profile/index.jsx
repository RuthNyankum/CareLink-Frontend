// import React from 'react';
// import abstract from '../../assets/images/abstract.jpg';
// import PersonalInfo from './personalInfo';
// import MedicalInfo from './medicalInfo';
// import IdVerification from './idVerify';
// import ConsentForm from './consentForm';
// import Navbar from '../../component/navbar';

// const Profile = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4 mt-32">
//       <Navbar />
//       <div className="relative bg-gray-800 rounded-md shadow-md p-8 w-full max-w-6xl flex flex-col items-center font-poppins-regular">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center rounded-md"
//           style={{ backgroundImage: `url(${abstract})`, opacity: 0.7 }}
//         ></div>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gray-800 bg-opacity-75 rounded-md"></div>

//         {/* Content */}
//         <div className="relative z-10 w-full max-w-4xl">
//           <div>
//             <h1 className="text-white text-4xl font-bold mb-4 text-center">
//               Profile
//             </h1>
//             {/* <h1 className="ml-11 text-white mb-5">LOGO</h1> */}
//             <h2 className="ml-11 text-white text-3xl">Welcome</h2>
//             <p className="ml-11 text-lg text-white ">
//               Let us know more about yourself
//             </p>
//           </div>

//           <div className="bg-gray-900 bg-opacity-75 p-6 rounded-md">
//             <PersonalInfo />
//             <MedicalInfo />
//             <IdVerification />
//             <ConsentForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from 'react';
// // import abstract from '../../assets/images/form4.jpg';
// import PersonalInfo from './personalInfo';
// import MedicalInfo from './medicalInfo';
// import IdVerification from './idVerify';
// import ConsentForm from './consentForm';
// import Navbar from '../../component/navbar';
// import Footer from '../../component/footer';

// const Profile = () => {
//   const [loading, setLoading] = useState(true); // State to manage page loading

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false); // Simulate loading finished after 2 seconds
//     }, 2000);
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-900">
//         <div className="loader border-t-transparent border-solid rounded-full border-blue-600 border-4 h-12 w-12 animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4 mt-32">
//         <Navbar />
//         <div className="relative bg-gray-800 rounded-md shadow-md p-8 w-full max-w-6xl flex flex-col items-center font-poppins-regular">
//           {/* Background Image */}

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gray-800 bg-opacity-75 rounded-md"></div>

//           {/* Content */}
//           <div className="relative z-10 w-full max-w-4xl">
//             <div>
//               <h1 className="text-white text-4xl font-bold mb-4 text-center">
//                 Profile
//               </h1>
//               <h2 className="ml-11 text-white text-3xl">Welcome</h2>
//               <p className="ml-11 text-lg text-white">
//                 Let us know more about yourself
//               </p>
//             </div>

//             <div className="bg-gray-900 bg-opacity-75 p-6 rounded-md">
//               <PersonalInfo />
//               <MedicalInfo />
//               <IdVerification />
//               <ConsentForm />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from 'react';
import PersonalInfo from './personalInfo';
import MedicalInfo from './medicalInfo';
import IdVerification from './idVerify';
import ConsentForm from './consentForm';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';
import backgroundImage from '../../assets/images/abs.jpeg';

const Profile = () => {
  const [loading, setLoading] = useState(true); // State to manage page loading

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulate loading finished after 2 seconds
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="loader border-t-transparent border-solid rounded-full border-blue-600 border-4 h-12 w-12 animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center p-4 "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-md shadow-md p-8 w-full max-w-6xl flex flex-col items-center font-poppins-regular">
          {/* Content */}
          <div className="relative z-10 w-full max-w-4xl">
            <div>
              <h1 className="text-white text-4xl font-bold mb-4 text-center mt-32">
                Profile
              </h1>
              <h2 className="ml-11 text-white text-3xl">Welcome</h2>
              <p className="ml-11 text-lg text-white">
                Let us know more about yourself
              </p>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-md">
              <PersonalInfo />
              <MedicalInfo />
              <IdVerification />
              <ConsentForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
