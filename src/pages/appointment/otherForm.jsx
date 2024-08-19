import React from 'react';
import DepartmentDoctor from './departmentDoctor';

const OtherForm = ({ resetForm }) => (
  <div className="max-w-4xl mx-auto">
    <button onClick={resetForm} className="mb-4 text-secondary underline">
      ← Go back
    </button>
    <div className="flex flex-col md:flex-row gap-5 mt-6 ml-4 mr-4">
      <label htmlFor="name" className="block w-full text-lg">
        Full Name
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
        />
      </label>
      <label htmlFor="relationship" className="block w-full text-lg">
        Relationship
        <input
          type="text"
          name="relationship"
          id="relationship"
          placeholder="Enter your relationship with the patient"
          className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
        />
      </label>
    </div>

    <div className="flex flex-col md:flex-row gap-5 mt-5 ml-4 mr-4">
      <label htmlFor="name" className="block w-full text-lg">
        Full Name
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter the name of the person you are booking for"
          className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
        />
      </label>
    </div>
    <DepartmentDoctor />
    <div className="flex flex-col md:flex-row gap-5 mt-2 ml-4 mr-4">
      <label htmlFor="reason" className="block w-full text-lg">
        Reason for appointment
        <textarea
          name="reason"
          id="reason"
          placeholder="Briefly describe the reason for your appointment"
          className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
        />
      </label>
    </div>
    <div className="flex flex-col md:flex-row gap-5 mt-5 ml-4 mr-4">
      <label htmlFor="date" className="block w-full text-lg">
        Expected appointment date
        <input
          type="date"
          name="date"
          id="date"
          className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
          style={{ WebkitAppearance: 'none' }}
        />
      </label>
      <label htmlFor="time" className="block w-full text-lg">
        Expected tppointment time
        <input
          type="time"
          name="time"
          id="time"
          className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
          style={{
            color: '#000',
            WebkitTextFillColor: '#000',
            WebkitAppearance: 'none',
          }}
        />
      </label>
    </div>
  </div>
);

export default OtherForm;

// import React from 'react';
// import DepartmentDoctor from './departmentDoctor';

// const OtherForm = ({ resetForm, formData, handleChange, appointmentFor }) => (
//   <div className="max-w-4xl mx-auto">
//     <button onClick={resetForm} className="mb-4 text-secondary underline">
//       ← Go back
//     </button>
//     <div className="flex flex-col md:flex-row gap-5 mt-6 ml-4 mr-4">
//       <label htmlFor="name" className="block w-full text-lg">
//         Full Name
//         <input
//           type="text"
//           name="name"
//           id="name"
//           placeholder="Enter your name"
//           className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </label>
//       {appointmentFor === 'other' && (
//         <label htmlFor="relationship" className="block w-full text-lg">
//           Relationship
//           <input
//             type="text"
//             name="relationship"
//             id="relationship"
//             placeholder="Enter your relationship with the patient"
//             className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
//             value={formData.relationship}
//             onChange={handleChange}
//           />
//         </label>
//       )}
//     </div>
//     <DepartmentDoctor formData={formData} handleChange={handleChange} />
//     <div className="flex flex-col md:flex-row gap-5 mt-2 ml-4 mr-4">
//       <label htmlFor="reason" className="block w-full text-lg">
//         Reason for appointment
//         <textarea
//           name="reasonForAppointment"
//           id="reason"
//           placeholder="Briefly describe the reason for your appointment"
//           className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
//           value={formData.reasonForAppointment}
//           onChange={handleChange}
//         />
//       </label>
//     </div>
//     <div className="flex flex-col md:flex-row gap-5 mt-5 ml-4 mr-4">
//       <label htmlFor="appointmentDate" className="block w-full text-lg">
//         Expected appointment date
//         <input
//           type="date"
//           name="appointmentDate"
//           id="appointmentDate"
//           className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
//           value={formData.appointmentDate}
//           onChange={handleChange}
//           style={{ WebkitAppearance: 'none' }}
//         />
//       </label>
//       <label htmlFor="appointmentTime" className="block w-full text-lg">
//         Expected appointment time
//         <input
//           type="time"
//           name="appointmentTime"
//           id="appointmentTime"
//           className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
//           value={formData.appointmentTime}
//           onChange={handleChange}
//           style={{
//             color: '#000',
//             WebkitTextFillColor: '#000',
//             WebkitAppearance: 'none',
//           }}
//         />
//       </label>
//     </div>
//   </div>
// );

// export default OtherForm;
