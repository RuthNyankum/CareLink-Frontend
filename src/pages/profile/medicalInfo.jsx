import React from 'react';

const MedicalInfo = () => {
  return (
    <div className="mt-6 p-5">
      <h1 className="text-2xl font-bold mb-5 text-white">
        Medical Information
      </h1>

      <form action="">
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label
              htmlFor="insurance"
              className="block text-gray-700 mb-2 text-white"
            >
              Insurance provider
            </label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="BlueCross"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
            />
          </div>

          <div className="w-full md:w-1/2 px-2">
            <label
              htmlFor="insuranceNumber"
              className="block text-gray-700 mb-2 text-white"
            >
              Insurance policy number
            </label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="GHAA983920"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
            />
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
              type="text"
              name="text"
              id="text"
              placeholder="Peanut"
              className="w-full px-4 py-2 border
            border-gray-300 placeholder:text-lg rounded"
            />
          </div>

          <div className="w-full md:w-1/2 px-2">
            <label
              htmlFor="allergies"
              className="block text-gray-700 mb-2 text-white"
            >
              Current medications
            </label>
            <textarea
              type="text"
              name="text"
              id="text"
              placeholder="Ibrufen, coartem"
              className="w-full px-4 py-2 border border-gray-300 placeholder:text-lg rounded"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label
              htmlFor="allergies"
              className="block text-gray-700 mb-2 text-white"
            >
              Family medical history (if relevant)
            </label>
            <textarea
              type="text"
              name="text"
              id="text"
              placeholder="Grandmother bp"
              className="w-full px-4 py-2 border border-gray-300 placeholder:text-lg rounded"
            />
          </div>

          <div className="w-full md:w-1/2 px-2">
            <label
              htmlFor="allergies"
              className="block text-gray-700 mb-2 text-white"
            >
              Past medical history
            </label>
            <textarea
              type="text"
              name="text"
              id="text"
              placeholder="not available"
              className="w-full px-4 py-2 border border-gray-300 placeholder:text-lg rounded"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MedicalInfo;
