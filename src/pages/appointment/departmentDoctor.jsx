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

// import React, { useState } from 'react';

// const departments = [
//   'Cardiology',
//   'Neurology',
//   'Dental',
//   'Ophthalmology',
//   'Obstetrics and Gynecology (OB/GYN)',
//   'Emergency',
//   'General',
// ];

// const doctors = [
//   'Dr Yaw Sekyi',
//   'Dr Micheal Brown',
//   'Dr Ruth Snow',
//   'Dr Richard Lewis',
//   'Dr Anthony Spencer',
//   'Dr Vidash Daizey',
//   'Dr Sarah Mitchell',
//   'Dr Daniel Sidsaya',
//   'Dr Victoria Hill',
//   'Dr Lisa Foster',
//   'Dr Thomas Carter',
//   'Dr Stephanie Collins',
// ];

// const DepartmentDoctor = () => {
//   const [selectedDepartment, setSelectedDepartment] = useState('');
//   const [selectedDoctor, setSelectedDoctor] = useState('');

//   const handleDepartmentChange = (e) => {
//     setSelectedDepartment(e.target.value);
//   };

//   const handleDoctorChange = (e) => {
//     setSelectedDoctor(e.target.value);
//   };

//   return (
//     <div className="max-w-4xl mx-auto">
//       <div className="flex flex-col md:flex-row gap-5 mt-6 ml-4 mr-4">
//         <label htmlFor="department" className="block w-full text-lg">
//           Select Department
//           <select
//             id="department"
//             name="department"
//             className="w-full h-14 px-4 py-2 mt-2 text-black rounded-lg"
//             value={selectedDepartment}
//             onChange={handleDepartmentChange}
//           >
//             <option value="" disabled>
//               Select a department
//             </option>
//             {departments.map((department, index) => (
//               <option key={index} value={department}>
//                 {department}
//               </option>
//             ))}
//           </select>
//         </label>
//         <label htmlFor="doctor" className="block w-full text-lg">
//           Select Doctor
//           <select
//             id="doctor"
//             name="doctor"
//             className="w-full h-14 px-4 py-2 mt-2 text-black rounded-lg"
//             value={selectedDoctor}
//             onChange={handleDoctorChange}
//           >
//             <option value="" disabled>
//               Select a doctor
//             </option>
//             {doctors.map((doctor, index) => (
//               <option key={index} value={doctor}>
//                 {doctor}
//               </option>
//             ))}
//           </select>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default DepartmentDoctor;
