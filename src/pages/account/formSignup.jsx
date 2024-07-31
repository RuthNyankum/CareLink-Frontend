import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { IoEyeOffOutline } from 'react-icons/io5';
import { EyeIcon } from '@heroicons/react/24/outline';

const FormSignup = () => {
  const [phone, setPhone] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Phone number:', phone);
  };

  return (
    <div className="bg-[#2222] w-full md:w-1/2 pt-7 px-6 md:px-32 rounded-tl-3xl rounded-bl-3xl">
      <div className="text-[2rem] mb-8 md:mb-10 text-white">LOGO</div>
      <div className="text-white">
        <div className="mb-8 md:mb-14">
          <h1 className="text-[1.5rem]">Hi there....</h1>
          <p className="text-[1rem]">Register to get started</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label htmlFor="firstname" className="block">
            Firstname
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Ruth"
              className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black"
            />
          </label>

          <label htmlFor="lastname" className="block">
            Lastname
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Brown"
              className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black"
            />
          </label>

          <label htmlFor="email" className="block">
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black"
            />
          </label>

          <label htmlFor="phone">
            Phone number
            <PhoneInput
              country={'gh'}
              value={phone}
              onChange={handlePhoneChange}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true,
              }}
              containerStyle={{ width: '100%' }}
              inputStyle={{ width: '100%', height: '56px' }}
              className="text-black"
            />
          </label>

          <label htmlFor="password" className="block relative">
            Password
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="********"
              className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black pr-10"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-4 bottom-9 transform -translate-y-1/2"
            >
              {passwordVisible ? (
                <IoEyeOffOutline className="w-6 h-6 text-black" />
              ) : (
                <EyeIcon className="w-6 h-6 text-black" />
              )}
            </button>
          </label>

          <button
            type="submit"
            className="w-full h-14 px-4 py-2 mt-4 bg-primary text-white rounded-lg"
          >
            Get Started
          </button>
        </form>
        <p className="mt-8 md:mt-16 lg:mt-28 text-center text-white">
          &copy; 2024 CareLink
        </p>
      </div>
    </div>
  );
};

export default FormSignup;
