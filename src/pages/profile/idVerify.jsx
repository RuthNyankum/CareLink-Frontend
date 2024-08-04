import { CloudArrowUpIcon } from '@heroicons/react/16/solid';
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const IdVerification = () => {
  const [idType, setIdType] = useState('');
  const [otherIdType, setOtherIdType] = useState('');

  const handleIdTypeChange = (e) => {
    setIdType(e.target.value);
    if (e.target.value !== 'other') {
      setOtherIdType(''); // Clear other ID type field if not "Other"
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Handle the files here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxFiles: 1,
    maxSize: 800 * 400,
  });

  return (
    <div className="mt-6 p-5">
      <h1 className="text-2xl font-bold mb-5 text-white">
        Identification and Verification
      </h1>
      <form>
        <div>
          <label htmlFor="id" className="block text-gray-700 mb-2 text-white">
            Identification type
          </label>
          <select
            name="id"
            id="id"
            value={idType}
            onChange={handleIdTypeChange}
            className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
          >
            <option value="">Select an option</option>
            <option value="NHIS">NHIS</option>
            <option value="SIC">SIC</option>
            <option value="Acacia">Acacia</option>
            <option value="other">Other</option>
          </select>

          {idType === 'other' && (
            <div className="mt-4">
              <label
                htmlFor="otherIdType"
                className="block text-gray-700 mb-2 text-white"
              >
                Please specify
              </label>
              <input
                type="text"
                name="otherIdType"
                id="otherIdType"
                value={otherIdType}
                onChange={(e) => setOtherIdType(e.target.value)}
                placeholder="Enter ID type"
                className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
              />
            </div>
          )}

          <div className="mt-4">
            <label
              htmlFor="idNumber"
              className="block text-gray-700 mb-2 text-white"
            >
              Identification Number
            </label>
            <input
              type="text"
              name="idNumber"
              id="idNumber"
              placeholder="SIC983920"
              className="w-full px-4 py-2 border h-14 border-gray-300 placeholder:text-lg rounded"
            />
          </div>
        </div>

        <div className="mt-4">
          <h2 className="block text-gray-700 mb-2 text-white">
            Scanned Copy of Identification Document
          </h2>
          <div
            {...getRootProps()}
            className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer mt-6"
          >
            <input {...getInputProps()} />
            <CloudArrowUpIcon className="w-12 h-12 mx-auto text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              {isDragActive ? (
                'Drop the files here ...'
              ) : (
                <>
                  Click to upload <br /> or drag and drop
                </>
              )}
            </p>
            <p className="mt-2 text-xs text-gray-500">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default IdVerification;
