import { EyeIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { IoEyeOffOutline } from 'react-icons/io5';
import 'react-phone-input-2/lib/style.css';

const AdminLogin = () => {
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
    // Add logic to handle forgot password and remember me scenarios if needed
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="flex flex-col items-center w-full max-w-md p-6 bg-[#222] md:p-8 lg:p-12 rounded-xl">
        <div className="text-[2rem] mb-12 text-white">LOGO</div>
        <div className="text-white w-full">
          <div className="mb-10">
            <h1 className="text-[1.5rem]">Hi Doc...</h1>
            <p className="text-[1rem]">
              Get Started by logging in to your account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
            <label htmlFor="email" className="block w-full">
              Email
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full h-14 px-4 py-2 mt-1 rounded-lg text-black placeholder:text-lg"
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
                className="w-full h-14 px-4 py-2 mt-1 pr-12 rounded-lg text-black placeholder:text-lg"
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
          <p className="mt-8 text-center text-white">&copy; 2024 CareLink</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
