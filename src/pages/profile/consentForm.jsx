import React, { useState } from 'react';

const ConsentForm = () => {
  const [consents, setConsents] = useState({
    treatment: false,
    disclosure: false,
    privacyPolicy: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setConsents((prevConsents) => ({
      ...prevConsents,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(consents);
  };

  return (
    <form
      onSubmit={handleSubmit}
      //   className="bg-gray-800 p-8 rounded-md shadow-md w-full max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4 text-white">
        Consent and Privacy
      </h2>
      <div className="space-y-4">
        <label className="flex items-center text-black">
          <input
            type="checkbox"
            name="treatment"
            checked={consents.treatment}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <span className="ml-2">
            I consent to receive treatment for my health condition.
          </span>
        </label>
        <label className="flex items-center text-black">
          <input
            type="checkbox"
            name="disclosure"
            checked={consents.disclosure}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <span className="ml-2">
            I consent to the use and disclosure of my health information for
            treatment purposes.
          </span>
        </label>
        <label className="flex items-center text-black">
          <input
            type="checkbox"
            name="privacyPolicy"
            checked={consents.privacyPolicy}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <span className="ml-2">
            I acknowledge that I have reviewed and agree to the privacy policy.
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-primary text-black py-2 px-4 rounded-md hover:bg-secondary"
      >
        Submit and continue
      </button>
    </form>
  );
};

export default ConsentForm;
