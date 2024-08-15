// import React from 'react';

// const MedicalInfo = () => {
//   return (
//     <div className="mt-6 p-5">
//       <h1 className="text-2xl font-bold mb-5 text-white">
//         Medical Information
//       </h1>

//       <form action="" className="text-lg">
//         <div className="flex flex-wrap -mx-2 mb-4">
//           <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
//             <label
//               htmlFor="insurance"
//               className="block text-gray-700 mb-2 text-white"
//             >
//               Insurance provider
//             </label>
//             <input
//               type="text"
//               name="text"
//               id="text"
//               placeholder="BlueCross"
//               className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
//             />
//           </div>

//           <div className="w-full md:w-1/2 px-2">
//             <label
//               htmlFor="insuranceNumber"
//               className="block text-gray-700 mb-2 text-white"
//             >
//               Insurance policy number
//             </label>
//             <input
//               type="text"
//               name="text"
//               id="text"
//               placeholder="GHAA983920"
//               className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
//             />
//           </div>
//         </div>

//         <div className="flex flex-wrap -mx-2 mb-4">
//           <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
//             <label
//               htmlFor="allergies"
//               className="block text-gray-700 mb-2 text-white"
//             >
//               Allergies (if any)
//             </label>
//             <textarea
//               type="text"
//               name="text"
//               id="text"
//               placeholder="Peanut"
//               className="w-full px-4 py-2 border
//             border-gray-300 placeholder:text-lg rounded"
//             />
//           </div>

//           <div className="w-full md:w-1/2 px-2">
//             <label
//               htmlFor="allergies"
//               className="block text-gray-700 mb-2 text-white"
//             >
//               Current medications
//             </label>
//             <textarea
//               type="text"
//               name="text"
//               id="text"
//               placeholder="Ibrufen, coartem"
//               className="w-full px-4 py-2 border border-gray-300 placeholder:text-lg rounded"
//             />
//           </div>
//         </div>

//         <div className="flex flex-wrap -mx-2 mb-4">
//           <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
//             <label
//               htmlFor="allergies"
//               className="block text-gray-700 mb-2 text-white"
//             >
//               Family medical history (if relevant)
//             </label>
//             <textarea
//               type="text"
//               name="text"
//               id="text"
//               placeholder="Grandmother bp"
//               className="w-full px-4 py-2 border border-gray-300 placeholder:text-lg rounded"
//             />
//           </div>

//           <div className="w-full md:w-1/2 px-2">
//             <label
//               htmlFor="allergies"
//               className="block text-gray-700 mb-2 text-white"
//             >
//               Past medical history
//             </label>
//             <textarea
//               type="text"
//               name="text"
//               id="text"
//               placeholder="not available"
//               className="w-full px-4 py-2 border border-gray-300 placeholder:text-lg rounded"
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MedicalInfo;

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { apiGetProfile, apiAddProfile } from '../../services/personalInfo'; // Import the correct API functions
import { apiClient } from '../../services/config';

const MedicalInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      insuranceProvider: '',
      insurancePolicyNumber: '',
      pastMedicalHistory: '',
      familyMedicalHistory: '',
      allergies: '',
      currentMedications: '',
    },
  });

  const fetchProfile = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetProfile(); // Fetch profile data
      reset(res.data); // Populate the form with existing data
    } catch (error) {
      toast.error('Failed to fetch medical information');
      console.error('Fetch Profile Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddProfile = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await apiAddProfile(data); // Use the API to add profile data
      toast.success(res.data.message);
      reset(); // Clear the form
      fetchProfile(); // Refresh the medical information
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
    fetchProfile(); // Fetch profile data on component mount
  }, []);

  return (
    <div className="mt-6 p-5">
      <h1 className="text-2xl font-bold mb-5 text-white">
        Medical Information
      </h1>

      <form onSubmit={handleSubmit(handleAddProfile)} className="text-lg">
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label
              htmlFor="insuranceProvider"
              className="block text-gray-700 mb-2 text-white"
            >
              Insurance Provider
            </label>
            <input
              type="text"
              name="insuranceProvider"
              id="insuranceProvider"
              placeholder="BlueCross"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
              {...register('insuranceProvider', { required: true })}
            />
            {errors.insuranceProvider && (
              <p className="text-red-500">Insurance provider is required</p>
            )}
          </div>

          <div className="w-full md:w-1/2 px-2">
            <label
              htmlFor="insurancePolicyNumber"
              className="block text-gray-700 mb-2 text-white"
            >
              Insurance Policy Number
            </label>
            <input
              type="text"
              name="insurancePolicyNumber"
              id="insurancePolicyNumber"
              placeholder="GHAA983920"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
              {...register('insurancePolicyNumber', { required: true })}
            />
            {errors.insurancePolicyNumber && (
              <p className="text-red-500">
                Insurance policy number is required
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label
              htmlFor="allergies"
              className="block text-gray-700 mb-2 text-white"
            >
              Allergies (if any)
            </label>
            <textarea
              name="allergies"
              id="allergies"
              placeholder="Peanut"
              className="w-full px-4 py-2 border border-gray-300 placeholder:text-lg rounded"
              {...register('allergies')}
            />
          </div>

          <div className="w-full md:w-1/2 px-2">
            <label
              htmlFor="currentMedications"
              className="block text-gray-700 mb-2 text-white"
            >
              Current Medications
            </label>
            <textarea
              name="currentMedications"
              id="currentMedications"
              placeholder="Ibuprofen, Coartem"
              className="w-full px-4 py-2 border border-gray-300 placeholder:text-lg rounded"
              {...register('currentMedications')}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label
              htmlFor="familyMedicalHistory"
              className="block text-gray-700 mb-2 text-white"
            >
              Family Medical History (if relevant)
            </label>
            <textarea
              name="familyMedicalHistory"
              id="familyMedicalHistory"
              placeholder="Grandmother BP"
              className="w-full px-4 py-2 border border-gray-300 placeholder:text-lg rounded"
              {...register('familyMedicalHistory')}
            />
          </div>

          <div className="w-full md:w-1/2 px-2">
            <label
              htmlFor="pastMedicalHistory"
              className="block text-gray-700 mb-2 text-white"
            >
              Past Medical History
            </label>
            <textarea
              name="pastMedicalHistory"
              id="pastMedicalHistory"
              placeholder="Not available"
              className="w-full px-4 py-2 border border-gray-300 placeholder:text-lg rounded"
              {...register('pastMedicalHistory')}
            />
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

export default MedicalInfo;
