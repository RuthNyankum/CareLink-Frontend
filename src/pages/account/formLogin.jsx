import { EyeIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { IoEyeOffOutline } from 'react-icons/io5';
import 'react-phone-input-2/lib/style.css';

const FormLogin = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleForgotPasswordChange = (e) => {
    setForgotPassword(e.target.checked);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Phone number:', phone);
    console.log('Forgot Password:', forgotPassword);
    console.log('Remember Me:', rememberMe);
    // Add logic to handle forgot password and remember me scenarios if needed
  };

  return (
    <div className="flex flex-col items-center bg-[#2222] w-full md:w-1/2 pt-7 px-6 md:px-12 lg:px-32 rounded-tl-3xl rounded-bl-3xl">
      <div className="text-[2rem] mb-12 md:mb-24 text-white">LOGO</div>
      <div className="text-white w-full">
        <div className="mb-10 md:mb-16">
          <h1 className="text-[1.5rem]">Hi there ....</h1>
          <p className="text-[1rem]">
            Get Started by loging in to your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-7 w-full">
          <label htmlFor="email" className="block w-full">
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black"
              required
            />
          </label>

          <label htmlFor="password" className="block w-full relative">
            Password
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="********"
              className="w-full h-14 px-4 py-2 pr-12 placeholder:text-lg rounded-lg text-black placeholder:bg-white"
              required
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

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className="mr-2"
              />
              <label htmlFor="remember-me" className="text-sm text-white">
                Remember Me
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="forgot-password"
                checked={forgotPassword}
                onChange={handleForgotPasswordChange}
                className="mr-2"
              />
              <label htmlFor="forgot-password" className="text-sm text-white">
                Forgot Password?
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-14 px-4 py-2 mt-8 bg-primary text-white rounded-lg hover:bg-primary-dark"
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

export default FormLogin;
