import React from 'react';
import { featureList } from './aboutConstant';

const Features = () => {
  return (
    <div className="my-24 flex flex-col justify-center items-center bg-primary">
      <h1 className="font-bold text-[2.5rem] my-12">Features</h1>

      <div className="flex flex-wrap gap-10 justify-center mb-12">
        {featureList.map(({ icon: Icon, color, text }, index) => (
          <div
            key={index}
            className="flex flex-col items-center h-[90px] w-[auto] bg-white shadow-lg shadow-black p-2 rounded-md"
          >
            <Icon className={`h-10 w-10 ${color} mb-2`} />
            <p className="text-[1.2rem] text-center">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
