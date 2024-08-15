// import React from 'react';
// import N from '../../../constant';

// const OurTeam = () => {
//   return (
//     <div>
//       <div className="flex flex-col items-center mt-10">
//         <h1 className="font-bold text-5xl">Our Team</h1>
//         <p className="text-center mb-3 text-lg">
//           Our team at CareLink includes experienced healthcare professionals,
//           tech enthusiasts, and dedicated support staff. We're passionate <br />
//           about making healthcare more accessible and are committed to providing
//           the best possible service to our users.
//         </p>
//       </div>

//       <div>
//         {/* <h2 className="font-bold text-[2rem] my-12 text-center">Our Doctors</h2> */}

//         <div className="flex gap-4 ">
//           {N.DOCTORS.map((doctor, index) => (
//             <div key={index}>
//               <div className="bg-primary p-4 rounded-lg shadow-lg">
//                 <img
//                   src={doctor.img}
//                   alt={doctor.name}
//                   //   className="h-[500px] w-[450px]"
//                   className="h-[500px] w-[450px] object-cover rounded-t-lg"
//                 />
//                 {/* <p className="text-[1.6rem]">{doctor.name}</p>
//                 <p className="text-[1.2rem]">{doctor.specialty}</p> */}
//                 <div className="p-4">
//                   <p className="text-2xl font-semibold">{doctor.name}</p>
//                   <p className="text-lg text-gray-600">{doctor.specialty}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurTeam;

import React from 'react';
import N from '../../../constant';

const OurTeam = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mt-10">
        <h1 className="font-bold text-5xl text-center">Our Team</h1>
        <p className="text-center mb-3 text-lg mt-4">
          Our team at CareLink includes experienced healthcare professionals,
          tech enthusiasts, and dedicated support staff. We're passionate <br />
          about making healthcare more accessible and are committed to providing
          the best possible service to our users.
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          {N.DOCTORS.map((doctor, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="bg-primary p-4 rounded-lg shadow-lg flex flex-col">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="h-[500px] w-full object-cover rounded-t-lg"
                />
                <div className="p-4 flex-1 text-white text-center">
                  <p className="text-2xl font-semibold">{doctor.name}</p>
                  <p className="text-lg text-gray-600">{doctor.specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
