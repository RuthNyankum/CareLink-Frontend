import React from 'react';
import { steps } from './aboutConstant';

const HowItWorks = () => {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="my-24 flex flex-col justify-center items-center">
        <h1 className="font-bold text-[2.5rem] mb-12 mt-5">How It Works</h1>

        <div className="flex flex-wrap gap-10 justify-center mb-5">
          {steps.map(({ icon: Icon, color, title, description }, index) => (
            <div key={index} className="flex flex-col items-center max-w-sm">
              <Icon className={`h-10 w-10 ${color} mb-2`} />
              <h2 className="text-[1.5rem] font-semibold text-center">
                {title}
              </h2>
              <p className="text-center">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
