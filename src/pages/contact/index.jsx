//VALIDATION
// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.subject) newErrors.subject = 'Subject is required';
//     if (!formData.message) newErrors.message = 'Message is required';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }
//     // Handle form submission, e.g., send data to your backend or API
//     console.log('Form submitted:', formData);
//     // Reset form
//     setFormData({
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     });
//     setErrors({});
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
//       <div className="bg-gray-800 bg-cover bg-center rounded-md shadow-md p-8 w-full max-w-4xl flex flex-col items-center">
//         <h1 className="text-white text-3xl font-bold mb-4">Contact Us</h1>
//         <form onSubmit={handleSubmit} className="w-full max-w-2xl">
//           <div className="mb-4">
//             <label
//               className="block text-white text-sm font-bold mb-2"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="name"
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               aria-label="Name"
//             />
//             {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-white text-sm font-bold mb-2"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="email"
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               aria-label="Email"
//             />
//             {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-white text-sm font-bold mb-2"
//               htmlFor="subject"
//             >
//               Subject
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="subject"
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               aria-label="Subject"
//             />
//             {errors.subject && <p className="text-red-500 text-xs italic">{errors.subject}</p>}
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-white text-sm font-bold mb-2"
//               htmlFor="message"
//             >
//               Message
//             </label>
//             <textarea
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="message"
//               name="message"
//               rows="4"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               aria-label="Message"
//             />
//             {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from 'react';
import ContactForm from './contactForm';
import Location from './location';

const Contact = () => {
  return (
    <div className="mt-24 ">
      <ContactForm />
      <Location />
    </div>
  );
};

export default Contact;
