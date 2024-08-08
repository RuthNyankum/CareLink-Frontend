import React from 'react';
import doct from '../../assets/images/doc1.jpg';
import FormSignup from './formSignup';

const SignUp = () => {
  return (
    <div className="mt-10 md:mt-32">
      <div className="flex flex-col md:flex-row justify-center mx-4 md:mx-28 bg-black/85 rounded-3xl overflow-hidden">
        <div className="hidden md:flex md:w-1/2 h-full items-center justify-center">
          <img
            src={doct}
            alt="Doctors Picture"
            className="rounded-tl-3xl rounded-bl-3xl w-full h-auto object-cover"
          />
        </div>
        <FormSignup />
      </div>
    </div>
  );
};

export default SignUp;
