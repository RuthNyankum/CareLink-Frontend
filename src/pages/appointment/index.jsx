import React from 'react';
import AppointmentForm from './appointmentForm';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';
import backgroundImage from '../../assets/images/abs2.jpg';

const Appointment = () => {
  return (
    <>
      <Navbar />
      <div
        className="relative min-h-screen p-6 md:p-12 lg:p-16 mt-7 font-poppins-regular bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <header className="relative z-10 text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 mt-7">
            CareLink
          </h1>
          <p className="text-lg md:text-xl text-white/75">
            Your gateway to convenient healthcare appointments
          </p>
        </header>

        <main className="relative z-10 max-w-4xl mx-auto">
          <section className="bg-white bg-opacity-10 backdrop-blur-lg p-6 md:p-12 lg:p-16 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-center text-white">
              Book an Appointment
            </h2>
            <AppointmentForm />
          </section>
        </main>

        <footer className="relative z-10 text-center mt-12 p-6 bg-gray-800 text-white">
          <p>&copy; 2024 CareLink. All rights reserved.</p>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default Appointment;

// INTEGRATEDDDDDD
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { apiCreateAppointment } from '../../services/appointment';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../../component/navbar';
// import Footer from '../../component/footer';
// import backgroundImage from '../../assets/images/abs2.jpg';

// const doctorsByDepartment = {
//   1: [
//     { id: '1', name: 'Dr. Yaw Sekyi', specialty: 'Cardiology' },
//     { id: '2', name: 'Dr. Micheal Brown', specialty: 'Cardiology' },
//     { id: '3', name: 'Dr. Anthony Spencer', specialty: 'Cardiology' },
//   ],
//   2: [
//     { id: '4', name: 'Dr. Ruth Snow', specialty: 'Neurology' },
//     { id: '5', name: 'Dr. Daniel Sidsaya', specialty: 'Neurology' },
//     { id: '6', name: 'Dr. Victoria Hill', specialty: 'Neurology' },
//   ],
//   3: [
//     { id: '7', name: 'Dr. Yaw Sekyi', specialty: 'Oncology' },
//     { id: '8', name: 'Dr. Vidash Daizey', specialty: 'Oncology' },
//     { id: '9', name: 'Dr. Sarah Mitchell', specialty: 'Oncology' },
//   ],
//   4: [
//     { id: '10', name: 'Dr. Sarah Mitchell', specialty: 'Radiology' },
//     { id: '11', name: 'Dr. Victoria Hill', specialty: 'Radiology' },
//     { id: '12', name: 'Dr. Daniel Sidsaya', specialty: 'Radiology' },
//   ],
//   5: [
//     {
//       id: '13',
//       name: 'Dr. Lisa Foster',
//       specialty: 'Obstetrics and Gynecology',
//     },
//     { id: '14', name: 'Dr. Ruth Snow', specialty: 'Obstetrics and Gynecology' },
//     {
//       id: '15',
//       name: 'Dr. Thomas Carter',
//       specialty: 'Obstetrics and Gynecology',
//     },
//   ],
//   6: [
//     { id: '16', name: 'Dr. Richard Lewis', specialty: 'Surgery' },
//     { id: '17', name: 'Dr. Stephanie Collins', specialty: 'Surgery' },
//     { id: '18', name: 'Dr. Anthony Spencer', specialty: 'Surgery' },
//   ],
//   7: [
//     { id: '19', name: 'Dr. Micheal Brown', specialty: 'General Medicine' },
//     { id: '20', name: 'Dr. Ruth Snow', specialty: 'General Medicine' },
//     { id: '21', name: 'Dr. Richard Lewis', specialty: 'General Medicine' },
//   ],
// };

// const Appointment = () => {
//   const [selectedDepartment, setSelectedDepartment] = useState('');
//   const [selectedDoctor, setSelectedDoctor] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const handleDepartmentChange = (e) => {
//     setSelectedDepartment(e.target.value);
//     setSelectedDoctor('');
//   };

//   const handleDoctorChange = (e) => {
//     setSelectedDoctor(e.target.value);
//   };

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     try {
//       const res = await apiCreateAppointment({
//         ...data,
//         doctors: selectedDoctor,
//         status: 'Pending',
//       });
//       toast.success(res.data.message || 'Booking successful!');
//       setTimeout(() => {
//         navigate('/dashboard');
//       }, 500);
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'An error occurred!');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const doctorsOptions = selectedDepartment
//     ? (doctorsByDepartment[selectedDepartment] || []).map((doctor) => (
//         <option key={doctor.id} value={doctor.id}>
//           {doctor.name} ({doctor.specialty})
//         </option>
//       ))
//     : [];

//   return (
//     <>
//       <Navbar />
//       <div
//         className="min-h-screen bg-cover bg-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-50">
//           <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-8 shadow-lg w-full max-w-4xl my-28">
//             <button
//               onClick={() => navigate('/')}
//               className="mb-4 text-secondary underline"
//             >
//               ← Go back
//             </button>

//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="flex flex-col gap-5"
//             >
//               <div className="flex flex-col md:flex-row gap-5 mt-5">
//                 <label htmlFor="patient" className="block w-full text-lg">
//                   Patient
//                   <input
//                     type="text"
//                     id="patient"
//                     {...register('patient', {
//                       required: 'Patient name is required!',
//                     })}
//                     placeholder="Enter the patient's name"
//                     className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
//                   />
//                   {errors.patient && (
//                     <span className="text-red-500">
//                       {errors.patient.message}
//                     </span>
//                   )}
//                 </label>

//                 <label htmlFor="relationship" className="block w-full text-lg">
//                   Relationship
//                   <input
//                     type="text"
//                     id="relationship"
//                     {...register('relationship')}
//                     placeholder="Enter your relationship with the patient"
//                     className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
//                   />
//                 </label>
//               </div>

//               <div className="flex flex-col md:flex-row gap-5 mt-5">
//                 <label htmlFor="department" className="block w-full text-lg">
//                   Department
//                   <select
//                     {...register('department', {
//                       required: 'Department selection is required!',
//                     })}
//                     value={selectedDepartment}
//                     onChange={handleDepartmentChange}
//                     className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
//                   >
//                     <option value="">Select a department</option>
//                     <option value="1">Cardiology</option>
//                     <option value="2">Neurology</option>
//                     <option value="3">Oncology</option>
//                     <option value="4">Radiology</option>
//                     <option value="5">Obstetrics and Gynecology</option>
//                     <option value="6">Surgery</option>
//                     <option value="7">General Medicine</option>
//                   </select>
//                   {errors.department && (
//                     <span className="text-red-500">
//                       {errors.department.message}
//                     </span>
//                   )}
//                 </label>
//               </div>

//               <div className="flex flex-col md:flex-row gap-5 mt-5">
//                 <label htmlFor="doctors" className="block w-full text-lg">
//                   Doctors
//                   <select
//                     {...register('doctors', {
//                       required: 'Doctor selection is required!',
//                     })}
//                     value={selectedDoctor}
//                     onChange={handleDoctorChange}
//                     className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
//                   >
//                     <option value="">Select a doctor</option>
//                     {doctorsOptions}
//                   </select>
//                   {errors.doctors && (
//                     <span className="text-red-500">
//                       {errors.doctors.message}
//                     </span>
//                   )}
//                 </label>
//               </div>

//               <label
//                 htmlFor="reasonForAppointment"
//                 className="block text-lg mt-5"
//               >
//                 Reason for Appointment
//                 <textarea
//                   {...register('reasonForAppointment', {
//                     required: 'Please provide a reason for your appointment!',
//                   })}
//                   rows="4"
//                   placeholder="Enter the reason for your appointment"
//                   className="w-full px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
//                 />
//                 {errors.reasonForAppointment && (
//                   <span className="text-red-500">
//                     {errors.reasonForAppointment.message}
//                   </span>
//                 )}
//               </label>

//               <div className="flex flex-col md:flex-row gap-5 mt-5">
//                 <label
//                   htmlFor="appointmentDate"
//                   className="block w-full text-lg"
//                 >
//                   Appointment Date
//                   <input
//                     type="date"
//                     id="appointmentDate"
//                     {...register('appointmentDate', {
//                       required: 'Appointment date is required!',
//                     })}
//                     className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
//                   />
//                   {errors.appointmentDate && (
//                     <span className="text-red-500">
//                       {errors.appointmentDate.message}
//                     </span>
//                   )}
//                 </label>
//                 <label
//                   htmlFor="appointmentTime"
//                   className="block w-full text-lg"
//                 >
//                   Appointment Time
//                   <input
//                     type="time"
//                     id="appointmentTime"
//                     {...register('appointmentTime', {
//                       required: 'Appointment time is required!',
//                     })}
//                     className="w-full h-14 px-4 py-2 mt-2 placeholder-gray-400 text-black rounded-lg"
//                   />
//                   {errors.appointmentTime && (
//                     <span className="text-red-500">
//                       {errors.appointmentTime.message}
//                     </span>
//                   )}
//                 </label>
//               </div>

//               <div className="mt-5">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full h-14 bg-primary text-white font-semibold rounded-lg"
//                 >
//                   {isSubmitting ? 'Submitting...' : 'Book Appointment'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Appointment;
// END HERE
