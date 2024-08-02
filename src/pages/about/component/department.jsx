import React, { useState } from 'react';
import { departmentDetails, departments } from './aboutConstant';

const Department = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('Neurology');

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
  };

  return (
    <div className="bg-[#f2f2f2]">
      {' '}
      <div className="container mx-auto p-4 mt-36 ">
        <h2 className="text-2xl font-bold mb-4 mt-5 text-center text-[2.5rem]">
          Our Department
        </h2>
        <p className=" text-gray-600 text-center">
          Learn more about our departments and services.
        </p>

        <div className="flex flex-col lg:flex-row my-8">
          <div className="w-full lg:w-1/4 bg-gray-100 p-4">
            <ul className="mt-10 lg:mt-28">
              {departments.map((department) => (
                <li
                  key={department.name}
                  className={`flex items-center py-2 px-4 cursor-pointer hover:bg-teal-200 transition-colors duration-300 ${
                    selectedDepartment === department.name
                      ? 'bg-teal-500 text-white'
                      : ''
                  }`}
                  onClick={() => handleDepartmentClick(department.name)}
                >
                  <span className="mr-2">{department.icon}</span>
                  <span>{department.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-3/4 p-4 lg:p-8">
            <div className="flex flex-col">
              <img
                src={departmentDetails[selectedDepartment].image}
                alt={selectedDepartment}
                className="w-full h-52 object-cover rounded-lg mb-4 lg:mb-8"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-4">
                  About the {selectedDepartment.toLowerCase()}
                </h3>
                <p className="mb-4">
                  {departmentDetails[selectedDepartment].description}
                </p>
                <div className="flex flex-wrap mb-4">
                  {departmentDetails[selectedDepartment].features.map(
                    (feature, index) => (
                      <div key={index} className="w-full lg:w-1/2 mb-2 lg:mb-0">
                        <ul className="list-disc list-inside">
                          <li>{feature}</li>
                        </ul>
                      </div>
                    )
                  )}
                </div>
                <button className="px-4 py-2 bg-teal-500 text-white rounded-lg w-max">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
