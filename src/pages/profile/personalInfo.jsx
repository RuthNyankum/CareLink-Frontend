import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PersonalInfo = () => {
  const [selectedGender, setSelectedGender] = useState('');
  const [phone, setPhone] = useState('');

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5 text-white">
        Personal Information
      </h1>
      <form>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label
              htmlFor="firstname"
              className="block text-gray-700 mb-2 text-white"
            >
              Firstname
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Ruth"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
              // w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black
            />
          </div>

          <div className="w-full md:w-1/2 px-2">
            <label
              htmlFor="lastname"
              className="block text-gray-700 mb-2 text-white"
            >
              Lastname
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Doe"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label
              htmlFor="email"
              className="block text-gray-700 mb-2 text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
            />
          </div>

          <div className="w-full md:w-1/2 px-2">
            <label
              htmlFor="phone"
              className="block text-gray-700 mb-2 text-white"
            >
              Phone Number
            </label>
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
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label
              htmlFor="date"
              className="block text-gray-700 mb-2 text-white"
            >
              Date of Birth
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
            />
          </div>

          <div className="w-full md:w-1/2 px-2">
            <label
              htmlFor="gender"
              className="block text-gray-700 mb-2 text-white"
            >
              Gender
            </label>
            <div className="flex space-x-4">
              <label
                // className={`flex items-center p-2 border rounded-md
                className={`flex items-center w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded
                  ${
                    selectedGender === 'Male'
                      ? 'border-secondary bg-primary'
                      : 'border-gray-300'
                  }`}
              >
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  checked={selectedGender === 'Male'}
                  onChange={handleGenderChange}
                  className="hidden"
                />
                <span
                  className={`w-4 h-4 border-2 rounded-full ${
                    selectedGender === 'Male'
                      ? 'bg-white border-gray/30'
                      : 'border-gray-400'
                  }`}
                />
                <span className="ml-2 text-black">Male</span>
              </label>

              <label
                // className={`flex items-center p-2 border rounded-md
                className={`flex items-center w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded
                  ${
                    selectedGender === 'Female'
                      ? 'border-secondary bg-primary'
                      : 'border-gray-300'
                  }`}
              >
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  checked={selectedGender === 'Female'}
                  onChange={handleGenderChange}
                  className="hidden"
                />
                <span
                  className={`w-4 h-4 border-2 rounded-full ${
                    selectedGender === 'Female'
                      ? 'bg-white border-gray/30'
                      : 'border-gray-400'
                  }`}
                />
                <span className="ml-2 ">Female</span>
              </label>

              <label
                // className={`flex items-center p-2 border rounded-md
                className={`flex items-center w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded
                  ${
                    selectedGender === 'Other'
                      ? 'border-secondary bg-primary'
                      : 'border-gray-300'
                  }`}
              >
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="Other"
                  checked={selectedGender === 'Other'}
                  onChange={handleGenderChange}
                  className="hidden"
                />
                <span
                  className={`w-4 h-4 border-2 rounded-full ${
                    selectedGender === 'Other'
                      ? 'bg-white border-gray/30'
                      : 'border-gray-400'
                  }`}
                />
                <span className="ml-2 text-black">Other</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label
              htmlFor="address"
              className="block text-gray-700 mb-2 text-white"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="14 Street, Accra"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
            />
          </div>

          <div className="w-full md:w-1/2 px-2">
            <label
              htmlFor="occupation"
              className="block text-gray-700 mb-2 text-white"
            >
              Occupation
            </label>
            <input
              type="text"
              name="occupation"
              id="occupation"
              placeholder="Software Engineer"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label
              htmlFor="contactName"
              className="block text-gray-700 mb-2 text-white"
            >
              Emergency Contact Name
            </label>
            <input
              type="text"
              name="contactName"
              id="contactName"
              placeholder="Name of the person"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
            />
          </div>

          <div className="w-full md:w-1/2 px-2">
            <label
              htmlFor="contactNumber"
              className="block text-gray-700 mb-2 text-white"
            >
              Emergency Contact Number
            </label>
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
