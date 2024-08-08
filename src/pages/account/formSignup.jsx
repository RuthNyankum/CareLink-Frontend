/////THE CORRECT ONE///
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import 'react-phone-input-2/lib/style.css';
// import { IoEyeOffOutline } from 'react-icons/io5';
// import { EyeIcon } from '@heroicons/react/24/outline';
// import { apiSignUp } from '../../services/auth';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';

// const FormSignup = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     console.log(data);
//     setIsSubmitting(true);
//     try {
//       const res = await apiSignUp({
//         firstName: data.firstName,
//         lastName: data.lastName,
//         phoneNumber: data.phoneNumber,
//         email: data.email,
//         password: data.password,
//       });
//       console.log(res.data);

//       // addToLocalStorage(res.data.accessToken, res.data.user);
//       toast.success(res.data);
//       setTimeout(() => {
//         navigate('/login');
//       });

//       console.log('res', res.data, res);
//       toast.success(res.data.message);
//     } catch (error) {
//       console.log(error);
//       toast.error('An error occurred');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // const [phone, setPhone] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   // const handlePhoneChange = (value) => {
//   //   setPhone(value);
//   // };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <div className="bg-[#2222] w-full md:w-1/2 pt-7 px-6 md:px-32 rounded-tl-3xl rounded-bl-3xl">
//       <div className="text-[2rem] mb-8 md:mb-10 text-white">LOGO</div>
//       <div className="text-white">
//         <div className="mb-8 md:mb-14">
//           <h1 className="text-[1.5rem]">Hi there....</h1>
//           <p className="text-[1rem]">Register to get started</p>
//         </div>
//         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
//           <label htmlFor="firstName" className="block">
//             Firstname
//             <input
//               type="text"
//               name="firstName"
//               id="firstName"
//               placeholder="Ruth"
//               className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black"
//               {...register('firstName', {
//                 required: 'Your first name is required!',
//               })}
//             />
//             {errors.firstName && <span>{errors.firstName.message}</span>}
//           </label>

//           <label htmlFor="lastName" className="block">
//             Lastname
//             <input
//               type="text"
//               name="lastName"
//               id="lastName"
//               placeholder="Brown"
//               className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black"
//               {...register('lastName', {
//                 required: 'Your last name is required!',
//               })}
//             />
//             {errors.lastName && <span>{errors.lastName.message}</span>}
//           </label>

//           <label htmlFor="email" className="block">
//             Email
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="example@gmail.com"
//               className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black"
//               {...register('email', {
//                 required: 'Your email is required!',
//               })}
//             />
//             {errors.email && <span>{errors.email.message}</span>}
//           </label>

//           {/* //<label htmlFor="phone">
//             Phone number
//             <PhoneInput
//               country={'gh'}
//               value={phone}
//               id="phoneNumber"
//               onChange={handlePhoneChange}
//               inputProps={{
//                 name: 'phoneNumber',
//                 required: true,
//                 autoFocus: true,
//               }}
//               containerStyle={{ width: '100%' }}
//               inputStyle={{ width: '100%', height: '56px' }}
//               className="text-black"
//               {...register('phoneNumber')}
//             />
//           </label> */}

//           <label htmlFor="phoneNumber" className="block">
//             Phone Number
//             <input
//               type="phoneNumber"
//               name="phoneNumber"
//               id="phoneNumber"
//               placeholder="123456789"
//               className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black"
//               {...register('phoneNumber')}
//             />
//             {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
//           </label>

//           <label htmlFor="password" className="block relative">
//             Password
//             <input
//               type={passwordVisible ? 'text' : 'password'}
//               name="password"
//               id="password"
//               placeholder="********"
//               className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black pr-10"
//               {...register('password', {
//                 required: 'Your password is required!',
//               })}
//             />
//             {errors.password && <span>{errors.password.message}</span>}
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//               className="absolute top-1/2 right-4 bottom-9 transform -translate-y-1/2"
//             >
//               {passwordVisible ? (
//                 <IoEyeOffOutline className="w-6 h-6 text-black" />
//               ) : (
//                 <EyeIcon className="w-6 h-6 text-black" />
//               )}
//             </button>
//           </label>

//           <button
//             type="submit"
//             className="w-full h-14 px-4 py-2 mt-4 bg-primary text-white rounded-lg"
//             disabled={isSubmitting}
//           >
//             Get Started
//           </button>
//         </form>
//         <ToastContainer />
//         <p className="mt-8 md:mt-16 lg:mt-28 text-center text-white">
//           &copy; 2024 CareLink
//         </p>
//       </div>
//     </div>
//   );
// };

// export default FormSignup;
//////END HERE

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-phone-input-2/lib/style.css';
import { IoEyeOffOutline } from 'react-icons/io5';
import { EyeIcon } from '@heroicons/react/24/outline';
import { apiSignUp } from '../../services/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import FormLoader from '../../component/formLoader';

const FormSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const res = await apiSignUp({
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        email: data.email,
        password: data.password,
      });
      console.log(res.data);

      toast.success(res.data.message);
      setTimeout(() => {
        navigate('/login');
      }, 500);
    } catch (error) {
      console.log(error);
      toast.error('An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="bg-[#2222] w-full md:w-1/2 pt-7 px-6 md:px-32 rounded-tl-3xl rounded-bl-3xl">
      <div className="text-[2rem] mb-8 md:mb-10 text-white">LOGO</div>
      <div className="text-white">
        <div className="mb-8 md:mb-14">
          <h1 className="text-[1.5rem]">Hi there....</h1>
          <p className="text-[1rem]">Register to get started</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <label htmlFor="firstName" className="block">
            Firstname
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Ruth"
              className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black"
              {...register('firstName', {
                required: 'Your first name is required!',
              })}
            />
            {errors.firstName && <span>{errors.firstName.message}</span>}
          </label>

          <label htmlFor="lastName" className="block">
            Lastname
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Brown"
              className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black"
              {...register('lastName', {
                required: 'Your last name is required!',
              })}
            />
            {errors.lastName && <span>{errors.lastName.message}</span>}
          </label>

          <label htmlFor="email" className="block">
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black"
              {...register('email', {
                required: 'Your email is required!',
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </label>

          <label htmlFor="phoneNumber" className="block">
            Phone Number
            <input
              type="phoneNumber"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="123456789"
              className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black"
              {...register('phoneNumber')}
            />
            {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
          </label>

          <label htmlFor="password" className="block relative">
            Password
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="********"
              className="w-full h-14 px-4 py-2 placeholder:text-lg rounded-lg text-black pr-10"
              {...register('password', {
                required: 'Your password is required!',
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
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

          <button
            type="submit"
            className="w-full h-14 px-4 py-2 mt-4 bg-primary text-white rounded-lg"
          >
            {isSubmitting ? <FormLoader /> : 'Get Started'}
          </button>
        </form>
        <ToastContainer />
        <p className="mt-8 md:mt-16 lg:mt-28 text-center text-white">
          &copy; 2024 CareLink
        </p>
      </div>
    </div>
  );
};

export default FormSignup;
