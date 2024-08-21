// import React, { useState } from 'react';
// import SelfForm from './selfForm';
// import OtherForm from './otherForm';

// const AppointmentForm = () => {
//   const [appointmentFor, setAppointmentFor] = useState(null);

//   const handleAppointmentForChange = (e) => {
//     setAppointmentFor(e.target.value);
//   };

//   const resetForm = () => {
//     setAppointmentFor(null);
//   };

//   return (
//     <div className="bg-gray-800 p-6 md:p-12 lg:p-16 xl:p-24 rounded-tl-3xl rounded-bl-3xl mt-14 text-white max-w-4xl mx-auto ">
//       {/* <div className="text-2xl md:text-4xl mb-8 md:mb-16 text-center">LOGO</div> */}

//       <div className="mb-10 md:mb-16 text-center">
//         <h1 className="text-xl md:text-2xl ">Hi there👋</h1>
//         <p className="text-lg md:text-xl">
//           Request a new appointment in 10 seconds
//         </p>
//       </div>

//       <form>
//         {appointmentFor === null ? (
//           <div className="mb-6">
//             <label className="block mb-2 text-center text-2xl">
//               Who is the appointment for?
//             </label>
//             <div className="flex justify-center gap-4">
//               <label className="flex items-center text-xl">
//                 <input
//                   type="radio"
//                   value="self"
//                   checked={appointmentFor === 'self'}
//                   onChange={handleAppointmentForChange}
//                   className="mr-2 "
//                 />
//                 Myself
//               </label>
//               <label className="flex items-center text-xl">
//                 <input
//                   type="radio"
//                   value="other"
//                   checked={appointmentFor === 'other'}
//                   onChange={handleAppointmentForChange}
//                   className="mr-2"
//                 />
//                 Someone Else
//               </label>
//             </div>
//           </div>
//         ) : appointmentFor === 'self' ? (
//           <SelfForm resetForm={resetForm} />
//         ) : (
//           <OtherForm resetForm={resetForm} />
//         )}

//         <div className="ml-4 mr-4">
//           <button
//             type="submit"
//             className="w-full h-14 px-4 py-2 mt-8 bg-primary text-white rounded-lg hover:bg-primary-dark text-xl"
//           >
//             Get Started
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AppointmentForm;

// import React, { useState } from 'react';
// import SelfForm from '../appointment/selfForm';
// import OtherForm from '../appointment/otherForm';
// import FormLoader from '../../component/formLoader';
// import { apiGetAppointments } from '../../services/appointment';

// const AppointmentForm = () => {
//   const [appointmentFor, setAppointmentFor] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     relationship: '',
//     department: '',
//     doctors: '',
//     reasonForAppointment: '',
//     appointmentDate: '',
//     appointmentTime: '',
//     status: 'pending',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false); // Add this state

//   const handleAppointmentForChange = (e) => {
//     setAppointmentFor(e.target.value);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true); // Set isSubmitting to true when submitting starts
//     try {
//       const response = await apiGetAppointments('/appointment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Appointment created:', data);
//         // Handle success (e.g., show a confirmation message or redirect)
//       } else {
//         console.error('Failed to create appointment');
//         // Handle failure (e.g., show an error message)
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsSubmitting(false); // Reset isSubmitting to false after submission completes
//     }
//   };

//   const resetForm = () => {
//     setAppointmentFor(null);
//     setFormData({
//       name: '',
//       relationship: '',
//       department: '',
//       doctors: '',
//       reasonForAppointment: '',
//       appointmentDate: '',
//       appointmentTime: '',
//       status: 'pending',
//     });
//   };

//   return (
//     <div className="bg-gray-800 p-6 md:p-12 lg:p-16 xl:p-24 rounded-tl-3xl rounded-bl-3xl mt-14 text-white max-w-4xl mx-auto">
//       <div className="mb-10 md:mb-16 text-center">
//         <h1 className="text-xl md:text-2xl">Hi there👋</h1>
//         <p className="text-lg md:text-xl">
//           Request a new appointment in 10 seconds
//         </p>
//       </div>

//       <form onSubmit={handleSubmit}>
//         {appointmentFor === null ? (
//           <div className="mb-6">
//             <label className="block mb-2 text-center text-2xl">
//               Who is the appointment for?
//             </label>
//             <div className="flex justify-center gap-4">
//               <label className="flex items-center text-xl">
//                 <input
//                   type="radio"
//                   value="self"
//                   checked={appointmentFor === 'self'}
//                   onChange={handleAppointmentForChange}
//                   className="mr-2"
//                 />
//                 Myself
//               </label>
//               <label className="flex items-center text-xl">
//                 <input
//                   type="radio"
//                   value="other"
//                   checked={appointmentFor === 'other'}
//                   onChange={handleAppointmentForChange}
//                   className="mr-2"
//                 />
//                 Someone Else
//               </label>
//             </div>
//           </div>
//         ) : appointmentFor === 'self' ? (
//           <SelfForm
//             resetForm={resetForm}
//             formData={formData}
//             handleChange={handleChange}
//           />
//         ) : (
//           <OtherForm
//             resetForm={resetForm}
//             formData={formData}
//             handleChange={handleChange}
//           />
//         )}

//         <div className="ml-4 mr-4">
//           <button
//             type="submit"
//             className="w-full h-14 px-4 py-2 mt-8 bg-primary text-white rounded-lg hover:bg-primary-dark text-xl"
//           >
//             {isSubmitting ? <FormLoader /> : 'Get Started'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AppointmentForm;

// import React, { useState } from 'react';
// import SelfForm from '../appointment/selfForm';
// import OtherForm from '../appointment/otherForm';
// import FormLoader from '../../component/formLoader';
// import { apiGetAppointments } from '../../services/appointment';

// const AppointmentForm = () => {
//   const [appointmentFor, setAppointmentFor] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     relationship: '',
//     department: '',
//     doctors: '',
//     reasonForAppointment: '',
//     appointmentDate: '',
//     appointmentTime: '',
//     status: 'pending',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleAppointmentForChange = (e) => {
//     setAppointmentFor(e.target.value);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const token = localStorage.getItem('token'); // Fetch the token from localStorage

//     try {
//       const response = await apiGetAppointments('', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`, // Include the token in the Authorization header
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Appointment created:', data);
//         // Handle success (e.g., show a confirmation message or redirect)
//         resetForm(); // Reset the form if needed
//       } else {
//         const errorData = await response.json();
//         console.error('Failed to create appointment:', errorData);
//         // Handle failure (e.g., show an error message)
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const resetForm = () => {
//     setAppointmentFor(null);
//     setFormData({
//       name: '',
//       relationship: '',
//       department: '',
//       doctors: '',
//       reasonForAppointment: '',
//       appointmentDate: '',
//       appointmentTime: '',
//       status: 'pending',
//     });
//   };

//   return (
//     <div className="bg-gray-800 p-6 md:p-12 lg:p-16 xl:p-24 rounded-tl-3xl rounded-bl-3xl mt-14 text-white max-w-4xl mx-auto">
//       <div className="mb-10 md:mb-16 text-center">
//         <h1 className="text-xl md:text-2xl">Hi there👋</h1>
//         <p className="text-lg md:text-xl">
//           Request a new appointment in 10 seconds
//         </p>
//       </div>

//       <form onSubmit={handleSubmit}>
//         {appointmentFor === null ? (
//           <div className="mb-6">
//             <label className="block mb-2 text-center text-2xl">
//               Who is the appointment for?
//             </label>
//             <div className="flex justify-center gap-4">
//               <label className="flex items-center text-xl">
//                 <input
//                   type="radio"
//                   value="self"
//                   checked={appointmentFor === 'self'}
//                   onChange={handleAppointmentForChange}
//                   className="mr-2"
//                 />
//                 Myself
//               </label>
//               <label className="flex items-center text-xl">
//                 <input
//                   type="radio"
//                   value="other"
//                   checked={appointmentFor === 'other'}
//                   onChange={handleAppointmentForChange}
//                   className="mr-2"
//                 />
//                 Someone Else
//               </label>
//             </div>
//           </div>
//         ) : appointmentFor === 'self' ? (
//           <SelfForm
//             resetForm={resetForm}
//             formData={formData}
//             handleChange={handleChange}
//           />
//         ) : (
//           <OtherForm
//             resetForm={resetForm}
//             formData={formData}
//             handleChange={handleChange}
//           />
//         )}

//         <div className="ml-4 mr-4">
//           <button
//             type="submit"
//             className="w-full h-14 px-4 py-2 mt-8 bg-primary text-white rounded-lg hover:bg-primary-dark text-xl"
//           >
//             {isSubmitting ? <FormLoader /> : 'Get Started'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AppointmentForm;

// import React, { useState } from 'react';
// import SelfForm from '../appointment/selfForm';
// import OtherForm from '../appointment/otherForm';
// import FormLoader from '../../component/formLoader';
// import { apiCreateAppointment } from '../../services/appointment'; // Import the API function

// const AppointmentForm = () => {
//   const [appointmentFor, setAppointmentFor] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     relationship: '',
//     department: '',
//     doctors: '',
//     reasonForAppointment: '',
//     appointmentDate: '',
//     appointmentTime: '',
//     status: 'pending',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleAppointmentForChange = (e) => {
//     setAppointmentFor(e.target.value);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setIsSubmitting(true);

//   //   try {
//   //     const response = await apiCreateAppointment(formData); // Use the API function

//   //     console.log('Appointment created:', response.data);
//   //     // Handle success (e.g., show a confirmation message or redirect)
//   //     resetForm(); // Reset the form if needed
//   //   } catch (error) {
//   //     console.error(
//   //       'Failed to create appointment:',
//   //       error.response?.data || error.message
//   //     );
//   //     // Handle failure (e.g., show an error message)
//   //   } finally {
//   //     setIsSubmitting(false);
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Conditional validation
//     if (appointmentFor === 'other' && !formData.relationship) {
//       console.error('Relationship is required for someone else');
//       return;
//     }

//     setIsSubmitting(true);

//     const token = localStorage.getItem('token');
//     try {
//       const response = await apiCreateAppointment(formData, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.status === 200) {
//         const data = await response.json();
//         console.log('Appointment created:', data);
//         resetForm();
//       } else {
//         const errorData = await response.json();
//         console.error('Failed to create appointment:', errorData);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const resetForm = () => {
//     setAppointmentFor(null);
//     setFormData({
//       name: '',
//       relationship: '',
//       department: '',
//       doctors: '',
//       reasonForAppointment: '',
//       appointmentDate: '',
//       appointmentTime: '',
//       status: 'pending',
//     });
//   };

//   return (
//     <div className="bg-gray-800 p-6 md:p-12 lg:p-16 xl:p-24 rounded-tl-3xl rounded-bl-3xl mt-14 text-white max-w-4xl mx-auto">
//       <div className="mb-10 md:mb-16 text-center">
//         <h1 className="text-xl md:text-2xl">Hi there👋</h1>
//         <p className="text-lg md:text-xl">
//           Request a new appointment in 10 seconds
//         </p>
//       </div>

//       <form onSubmit={handleSubmit}>
//         {appointmentFor === null ? (
//           <div className="mb-6">
//             <label className="block mb-2 text-center text-2xl">
//               Who is the appointment for?
//             </label>
//             <div className="flex justify-center gap-4">
//               <label className="flex items-center text-xl">
//                 <input
//                   type="radio"
//                   value="self"
//                   checked={appointmentFor === 'self'}
//                   onChange={handleAppointmentForChange}
//                   className="mr-2"
//                 />
//                 Myself
//               </label>
//               <label className="flex items-center text-xl">
//                 <input
//                   type="radio"
//                   value="other"
//                   checked={appointmentFor === 'other'}
//                   onChange={handleAppointmentForChange}
//                   className="mr-2"
//                 />
//                 Someone Else
//               </label>
//             </div>
//           </div>
//         ) : appointmentFor === 'self' ? (
//           <SelfForm
//             resetForm={resetForm}
//             formData={formData}
//             handleChange={handleChange}
//           />
//         ) : (
//           <OtherForm
//             resetForm={resetForm}
//             formData={formData}
//             handleChange={handleChange}
//           />
//         )}

//         <div className="ml-4 mr-4">
//           <button
//             type="submit"
//             className="w-full h-14 px-4 py-2 mt-8 bg-primary text-white rounded-lg hover:bg-primary-dark text-xl"
//           >
//             {isSubmitting ? <FormLoader /> : 'Get Started'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AppointmentForm;
// import React, { useState } from 'react';
// import SelfForm from '../appointment/selfForm';
// import OtherForm from '../appointment/otherForm';
// import FormLoader from '../../component/formLoader';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AppointmentForm = () => {
//   const [appointmentFor, setAppointmentFor] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     relationship: '',
//     department: '',
//     doctors: '',
//     reasonForAppointment: '',
//     appointmentDate: '',
//     appointmentTime: '',
//     status: 'pending',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleAppointmentForChange = (e) => {
//     setAppointmentFor(e.target.value);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Conditional validation
//     if (appointmentFor === 'other' && !formData.relationship) {
//       console.error('Relationship is required for someone else');
//       return;
//     }

//     setIsSubmitting(true);

//     // Simulate a successful form submission without sending to the backend
//     setTimeout(() => {
//       toast.success('Appointment has been booked successfully!');
//       resetForm();
//       setIsSubmitting(false);
//     }, 1000); // Simulate a delay
//   };

//   const resetForm = () => {
//     setAppointmentFor(null);
//     setFormData({
//       name: '',
//       relationship: '',
//       department: '',
//       doctors: '',
//       reasonForAppointment: '',
//       appointmentDate: '',
//       appointmentTime: '',
//       status: 'pending',
//     });
//   };

//   return (
//     <div className="bg-gray-800 p-6 md:p-12 lg:p-16 xl:p-24 rounded-tl-3xl rounded-bl-3xl mt-14 text-white max-w-4xl mx-auto">
//       <div className="mb-10 md:mb-16 text-center">
//         <h1 className="text-xl md:text-2xl">Hi there👋</h1>
//         <p className="text-lg md:text-xl">
//           Request a new appointment in 10 seconds
//         </p>
//       </div>

//       <form onSubmit={handleSubmit}>
//         {appointmentFor === null ? (
//           <div className="mb-6">
//             <label className="block mb-2 text-center text-2xl">
//               Who is the appointment for?
//             </label>
//             <div className="flex justify-center gap-4">
//               <label className="flex items-center text-xl">
//                 <input
//                   type="radio"
//                   value="self"
//                   checked={appointmentFor === 'self'}
//                   onChange={handleAppointmentForChange}
//                   className="mr-2"
//                 />
//                 Myself
//               </label>
//               <label className="flex items-center text-xl">
//                 <input
//                   type="radio"
//                   value="other"
//                   checked={appointmentFor === 'other'}
//                   onChange={handleAppointmentForChange}
//                   className="mr-2"
//                 />
//                 Someone Else
//               </label>
//             </div>
//           </div>
//         ) : appointmentFor === 'self' ? (
//           <SelfForm
//             resetForm={resetForm}
//             formData={formData}
//             handleChange={handleChange}
//           />
//         ) : (
//           <OtherForm
//             resetForm={resetForm}
//             formData={formData}
//             handleChange={handleChange}
//           />
//         )}

//         <div className="ml-4 mr-4">
//           <button
//             type="submit"
//             className="w-full h-14 px-4 py-2 mt-8 bg-primary text-white rounded-lg hover:bg-primary-dark text-xl"
//           >
//             {isSubmitting ? <FormLoader /> : 'Get Started'}
//           </button>
//         </div>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AppointmentForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelfForm from '../appointment/selfForm';
import OtherForm from '../appointment/otherForm';
import FormLoader from '../../component/formLoader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppointmentForm = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [appointmentFor, setAppointmentFor] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    relationship: '',
    department: '',
    doctors: '',
    reasonForAppointment: '',
    appointmentDate: '',
    appointmentTime: '',
    status: 'pending',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAppointmentForChange = (e) => {
    setAppointmentFor(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Conditional validation
    if (appointmentFor === 'other' && !formData.relationship) {
      console.error('Relationship is required for someone else');
      return;
    }

    setIsSubmitting(true);

    // Simulate a successful form submission without sending to the backend
    setTimeout(() => {
      toast.success('Appointment has been booked successfully!');
      resetForm();
      setIsSubmitting(false);

      // Redirect to the dashboard after a short delay (e.g., 2 seconds)
      setTimeout(() => {
        navigate('/dashboard'); // Redirect to the dashboard page
      }, 2000);
    }, 1000); // Simulate a delay
  };

  const resetForm = () => {
    setAppointmentFor(null);
    setFormData({
      name: '',
      relationship: '',
      department: '',
      doctors: '',
      reasonForAppointment: '',
      appointmentDate: '',
      appointmentTime: '',
      status: 'pending',
    });
  };

  return (
    <div className="bg-gray-800 p-6 md:p-12 lg:p-16 xl:p-24 rounded-tl-3xl rounded-bl-3xl mt-14 text-white max-w-4xl mx-auto">
      <div className="mb-10 md:mb-16 text-center">
        <h1 className="text-xl md:text-2xl">Hi there👋</h1>
        <p className="text-lg md:text-xl">
          Request a new appointment in 10 seconds
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {appointmentFor === null ? (
          <div className="mb-6">
            <label className="block mb-2 text-center text-2xl">
              Who is the appointment for?
            </label>
            <div className="flex justify-center gap-4">
              <label className="flex items-center text-xl">
                <input
                  type="radio"
                  value="self"
                  checked={appointmentFor === 'self'}
                  onChange={handleAppointmentForChange}
                  className="mr-2"
                />
                Myself
              </label>
              <label className="flex items-center text-xl">
                <input
                  type="radio"
                  value="other"
                  checked={appointmentFor === 'other'}
                  onChange={handleAppointmentForChange}
                  className="mr-2"
                />
                Someone Else
              </label>
            </div>
          </div>
        ) : appointmentFor === 'self' ? (
          <SelfForm
            resetForm={resetForm}
            formData={formData}
            handleChange={handleChange}
          />
        ) : (
          <OtherForm
            resetForm={resetForm}
            formData={formData}
            handleChange={handleChange}
          />
        )}

        <div className="ml-4 mr-4">
          <button
            type="submit"
            className="w-full h-14 px-4 py-2 mt-8 bg-primary text-white rounded-lg hover:bg-primary-dark text-xl"
          >
            {isSubmitting ? <FormLoader /> : 'Get Started'}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AppointmentForm;
