import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-phone-input-2/lib/style.css';
import { apiAddProfile, apiGetProfile } from '../../services/personalInfo';
import { toast } from 'react-toastify';

const PersonalInfo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);

  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
      // sex: '',
      address: '',
      occupation: '',
      emergencyContactName: '',
      emergencyContactNumber: '',
    },
  });

  const fetchProfile = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetProfile();
      setProfileData(res.data);
      // Populate the form with existing data if available
      reset(res.data);
    } catch (error) {
      toast.error('Failed to fetch personal information');
      console.error('Fetch Profile Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddProfile = async (data) => {
    setIsSubmitting(true);
    try {
      // Use the raw data directly
      const formattedData = data;
      const res = await apiAddProfile(formattedData);
      toast.success(res.data.message);
      reset(); // Clear the form
      fetchProfile(); // Refresh the personal information
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || 'An error occurred');
      } else {
        toast.error('An error occurred');
      }
      console.error('Add Profile Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5 text-white">
        Personal Information
      </h1>
      <form onSubmit={handleSubmit(handleAddProfile)} className="text-lg">
        <div className="flex flex-wrap -mx-2 mb-4 ">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label
              htmlFor="firstname"
              className="block text-gray-700 mb-2 text-white "
            >
              Firstname
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Ruth"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
              {...register('firstName', { required: true })}
            />
            {errors.firstName && (
              <p className="text-red-500">First Name is required</p>
            )}
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
              {...register('lastName', { required: true })}
            />
            {errors.lastName && (
              <p className="text-red-500">Last Name is required</p>
            )}
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
              {...register('email', { required: true })}
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </div>

          <div className="w-full md:w-1/2 px-2">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 mb-2 text-white"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="123-456-7890"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
              {...register('phoneNumber', { required: true })}
            />

            {errors.phoneNumber && (
              <p className="text-red-500">Phone Number is required</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label
              htmlFor="dateOfBirth"
              className="block text-gray-700 mb-2 text-white"
            >
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
              {...register('dateOfBirth', { required: true })}
            />
            {errors.dateOfBirth && (
              <p className="text-red-500">Date of Birth is required</p>
            )}
          </div>

          <div className="w-full md:w-1/2 px-2">
            <label
              htmlFor="sex"
              className="block text-gray-700 mb-2 text-white"
            >
              Sex
            </label>
            <select
              type="sex"
              id="sex"
              name="sex"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded bg-white text-black"
              {...register('sex', { required: true })}
            >
              <option value="" disabled>
                Select Sex
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.sex && <p className="text-red-500">Sex is required</p>}
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
              {...register('address', { required: true })}
            />
            {errors.address && (
              <p className="text-red-500">Address is required</p>
            )}
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
              {...register('occupation')}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label
              htmlFor="emergencyContactName"
              className="block text-gray-700 mb-2 text-white"
            >
              Emergency Contact Name
            </label>
            <input
              type="text"
              name="emergencyContactName"
              id="emergencyContactName"
              placeholder="Name of the person"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
              {...register('emergencyContactName', { required: true })}
            />
            {errors.emergencyContactName && (
              <p className="text-red-500">Emergency Contact Name is required</p>
            )}
          </div>

          <div className="w-full md:w-1/2 px-2">
            <label
              htmlFor="emergencyContactNumber"
              className="block text-gray-700 mb-2 text-white"
            >
              Emergency Contact Number
            </label>
            <input
              type="tel"
              name="emergencyContactNumber"
              id="emergencyContactNumber"
              placeholder="123-456-7890"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
              {...register('emergencyContactNumber', { required: true })}
            />
            {errors.emergencyContactNumber && (
              <p className="text-red-500">
                Emergency Contact Number is required
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-fit p-3 bg-primary text-white rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
