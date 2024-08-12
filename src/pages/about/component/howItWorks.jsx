// import React from 'react';
// import { steps } from './aboutConstant';

// const HowItWorks = () => {
//   return (
//     <div className="bg-[#f2f2f2]">
//       <div className="my-24 flex flex-col justify-center items-center">
//         <h1 className="font-bold text-[2.5rem] mb-12 mt-5">How It Works</h1>

//         <div className="flex flex-wrap gap-10 justify-center mb-5">
//           {steps.map(({ icon: Icon, color, title, description }, index) => (
//             <div key={index} className="flex flex-col items-center max-w-sm">
//               <Icon className={`h-10 w-10 ${color} mb-2`} />
//               <h2 className="text-[1.5rem] font-semibold text-center">
//                 {title}
//               </h2>
//               <p className="text-center">{description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;

import {
  UserPlusIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
  AdjustmentsHorizontalIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

export const steps = [
  {
    icon: UserPlusIcon,
    color: 'text-blue-500',
    title: 'Sign Up',
    description: 'Create an account on CareLink and complete your profile.',
  },
  {
    icon: MagnifyingGlassIcon,
    color: 'text-green-500',
    title: 'Search for Providers',
    description:
      'Use our search feature to find healthcare providers based on specialty, location, and availability.',
  },
  {
    icon: CalendarIcon,
    color: 'text-yellow-500',
    title: 'Book an Appointment',
    description:
      'Choose a suitable time slot and book an appointment with just a few clicks.',
  },
  {
    icon: AdjustmentsHorizontalIcon,
    color: 'text-red-500',
    title: 'Manage Your Appointments',
    description:
      'Reschedule or cancel appointments as needed, and receive notifications for any changes.',
  },
  {
    icon: UserCircleIcon,
    color: 'text-gray-500',
    title: 'Visit the Doctor',
    description:
      'Attend your appointment as scheduled, knowing that CareLink has taken care of the details.',
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="flex flex-col items-center mb-12">
        <h1 className="font-bold text-5xl mb-8">How It Works</h1>
      </div>

      <div className="flex justify-center items-center flex-wrap max-w-5xl mx-auto space-y-8 mb-7">
        <div className="flex justify-center space-x-16">
          {steps
            .slice(0, 3)
            .map(({ icon: Icon, color, title, description }, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                <Icon className={`h-10 w-10 ${color} mb-2`} />
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-gray-600 text-lg">{description}</p>

                {index < 2 && (
                  <div className="absolute right-[-50px] top-1/2 transform -translate-y-1/2">
                    <div className="w-12 border-t-4 border-primary"></div>
                    <div className="border-t-4 border-r-4 border-primary w-4 h-4 transform rotate-45 -translate-y-2.5 translate-x-8"></div>
                  </div>
                )}

                {index === 2 && (
                  <div className="absolute left-1/2 top-full transform -translate-x-1/2 -translate-y-1">
                    <div className="w-2 border-l-4 border-primary h-16"></div>
                    <div className="w-4 h-4 border-l-4 border-b-4 border-primary transform -rotate-45 -translate-x-1.5 -translate-y-4"></div>
                  </div>
                )}
              </div>
            ))}
        </div>

        <div className="flex justify-center space-x-16">
          {steps
            .slice(3, 5)
            .map(({ icon: Icon, color, title, description }, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                <Icon className={`h-10 w-10 ${color} mb-2`} />
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-gray-600 text-lg">{description}</p>

                {index === 0 && (
                  <div className="absolute right-[-50px] top-1/2 transform -translate-y-1/2">
                    <div className="w-16 border-t-4 border-primary"></div>
                    <div className="border-t-4 border-l-4 border-primary w-4 h-4 transform -rotate-45 -translate-y-2.5 translate-x-0"></div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
