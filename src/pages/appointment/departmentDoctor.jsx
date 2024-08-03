import React, { useState, useEffect } from 'react';
import { departments, doctors } from './appointmentConstants';
import Dropdown from './dropdown';

const DepartmentDoctor = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [doctorsList, setDoctorsList] = useState([]);
  const [selectedDoctors, setSelectedDoctors] = useState({});

  useEffect(() => {
    if (selectedDepartment) {
      setDoctorsList(doctors[selectedDepartment] || []);
    } else {
      setDoctorsList([]);
    }
  }, [selectedDepartment]);

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
    setSelectedDoctors({});
  };

  const handleDoctorChange = (doctorId, checked) => {
    setSelectedDoctors((prev) => ({
      ...prev,
      [doctorId]: checked,
    }));
  };

  return (
    <div className="w-full p-4 bg-gray-700 rounded-lg max-w-4xl mx-auto">
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="department" className="mb-2  text-lg text-white">
            Select Department
          </label>
          <select
            id="department"
            value={selectedDepartment}
            onChange={handleDepartmentChange}
            className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
          >
            <option value="">-- Select a Department --</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col ">
          <label htmlFor="doctors" className="mb-2  text-lg text-white ">
            Select Doctors
          </label>
          <Dropdown
            options={doctorsList}
            selectedValue={Object.keys(selectedDoctors).find(
              (id) => selectedDoctors[id]
            )}
            onChange={(value) => setSelectedDoctors({ [value]: true })}
            onCheckboxChange={handleDoctorChange}
          />
        </div>
      </form>
    </div>
  );
};

export default DepartmentDoctor;
