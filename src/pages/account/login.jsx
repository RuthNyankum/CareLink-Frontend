import React from 'react';
import doc from '../../assets/images/doc1.jpg';
import FormLogin from './formLogin';

const Login = () => {
  return (
    <div className="mt-10 md:mt-32">
      <div className="flex flex-col md:flex-row justify-center mx-4 md:mx-28 bg-black/85 rounded-3xl">
        <FormLogin />
        <div className="hidden md:block md:w-1/2">
          <img
            src={doc}
            alt="Doctors Picture"
            className="rounded-3xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
