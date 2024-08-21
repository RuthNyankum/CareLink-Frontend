// import React, { useState, useEffect } from 'react';
// import K from '../../constant/sidebarConstant';
// // import { PATIENT_DATA } from './patientData';

// const FilledProfile = () => {
//   const [patientInfo, setPatientInfo] = useState({
//     personalInfo: {},
//     medicalInfo: {},
//     idVerification: {},
//     consentForm: {},
//   });

//   useEffect(() => {
//     // Simulate data fetching from an API
//     setPatientInfo(K.PATIENT_DATA);
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black p-4">
//       <div className="bg-gray-800 text-white rounded-md shadow-md p-8 w-full max-w-4xl">
//         <h1 className="text-3xl font-bold mb-8 text-center">Patient Profile</h1>

//         <section className="mb-8">
//           <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
//           <p>
//             <strong>Firstname:</strong> {patientInfo.personalInfo.firstname}
//           </p>
//           <p>
//             <strong>Lastname:</strong> {patientInfo.personalInfo.lastname}
//           </p>
//           <p>
//             <strong>Email:</strong> {patientInfo.personalInfo.email}
//           </p>
//           <p>
//             <strong>Phone:</strong> {patientInfo.personalInfo.phone}
//           </p>
//           <p>
//             <strong>Date of Birth:</strong> {patientInfo.personalInfo.dob}
//           </p>
//           <p>
//             <strong>Gender:</strong> {patientInfo.personalInfo.gender}
//           </p>
//           <p>
//             <strong>Address:</strong> {patientInfo.personalInfo.address}
//           </p>
//           <p>
//             <strong>Occupation:</strong> {patientInfo.personalInfo.occupation}
//           </p>
//           <p>
//             <strong>Emergency Contact Name:</strong>{' '}
//             {patientInfo.personalInfo.emergencyContactName}
//           </p>
//           <p>
//             <strong>Emergency Contact Number:</strong>{' '}
//             {patientInfo.personalInfo.emergencyContactNumber}
//           </p>
//         </section>

//         <section className="mb-8">
//           <h2 className="text-2xl font-semibold mb-4">Medical Information</h2>
//           <p>
//             <strong>Insurance Provider:</strong>{' '}
//             {patientInfo.medicalInfo.insuranceProvider}
//           </p>
//           <p>
//             <strong>Insurance Policy Number:</strong>{' '}
//             {patientInfo.medicalInfo.insurancePolicyNumber}
//           </p>
//           <p>
//             <strong>Allergies:</strong> {patientInfo.medicalInfo.allergies}
//           </p>
//           <p>
//             <strong>Current Medications:</strong>{' '}
//             {patientInfo.medicalInfo.currentMedications}
//           </p>
//         </section>

//         <section className="mb-8">
//           <h2 className="text-2xl font-semibold mb-4">ID Verification</h2>
//           <p>
//             <strong>ID Type:</strong> {patientInfo.idVerification.idType}
//           </p>
//           <p>
//             <strong>ID Number:</strong> {patientInfo.idVerification.idNumber}
//           </p>
//           <p>
//             <strong>Issued Date:</strong>{' '}
//             {patientInfo.idVerification.issuedDate}
//           </p>
//           <p>
//             <strong>Expiry Date:</strong>{' '}
//             {patientInfo.idVerification.expiryDate}
//           </p>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Consent Form</h2>
//           <p>
//             <strong>Consent Given:</strong>{' '}
//             {patientInfo.consentForm.consentGiven ? 'Yes' : 'No'}
//           </p>
//           <p>
//             <strong>Consent Date:</strong> {patientInfo.consentForm.consentDate}
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default FilledProfile;

// import React, { useState, useEffect } from 'react';
// import K from '../../constant/sidebarConstant';

// const FilledProfile = () => {
//   const [patientInfo, setPatientInfo] = useState({
//     personalInfo: {},
//     medicalInfo: {},
//     idVerification: {},
//     consentForm: {},
//   });

//   useEffect(() => {
//     // Access the first patient's data
//     if (K.PATIENT_DATA && K.PATIENT_DATA.length > 0) {
//       setPatientInfo(K.PATIENT_DATA[0]);
//     }
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <div className="bg-white text-black rounded-md shadow-lg shadow-black p-8 w-full max-w-4xl">
//         <h1 className="text-3xl font-bold mb-8 text-center">Patient Profile</h1>

//         {patientInfo.personalInfo && (
//           <section className="mb-8">
//             <h2 className="text-2xl font-semibold mb-4">
//               Personal Information
//             </h2>
//             <p>
//               <strong>Firstname:</strong> {patientInfo.personalInfo.firstname}
//             </p>
//             <p>
//               <strong>Lastname:</strong> {patientInfo.personalInfo.lastname}
//             </p>
//             <p>
//               <strong>Email:</strong> {patientInfo.personalInfo.email}
//             </p>
//             <p>
//               <strong>Phone:</strong> {patientInfo.personalInfo.phone}
//             </p>
//             <p>
//               <strong>Date of Birth:</strong> {patientInfo.personalInfo.dob}
//             </p>
//             <p>
//               <strong>Gender:</strong> {patientInfo.personalInfo.gender}
//             </p>
//             <p>
//               <strong>Address:</strong> {patientInfo.personalInfo.address}
//             </p>
//             <p>
//               <strong>Occupation:</strong> {patientInfo.personalInfo.occupation}
//             </p>
//             <p>
//               <strong>Emergency Contact Name:</strong>{' '}
//               {patientInfo.personalInfo.emergencyContactName}
//             </p>
//             <p>
//               <strong>Emergency Contact Number:</strong>{' '}
//               {patientInfo.personalInfo.emergencyContactNumber}
//             </p>
//           </section>
//         )}

//         {patientInfo.medicalInfo && (
//           <section className="mb-8">
//             <h2 className="text-2xl font-semibold mb-4">Medical Information</h2>
//             <p>
//               <strong>Insurance Provider:</strong>{' '}
//               {patientInfo.medicalInfo.insuranceProvider}
//             </p>
//             <p>
//               <strong>Insurance Policy Number:</strong>{' '}
//               {patientInfo.medicalInfo.insurancePolicyNumber}
//             </p>
//             <p>
//               <strong>Allergies:</strong> {patientInfo.medicalInfo.allergies}
//             </p>
//             <p>
//               <strong>Current Medications:</strong>{' '}
//               {patientInfo.medicalInfo.currentMedications}
//             </p>
//           </section>
//         )}

//         {patientInfo.idVerification && (
//           <section className="mb-8">
//             <h2 className="text-2xl font-semibold mb-4">ID Verification</h2>
//             <p>
//               <strong>ID Type:</strong> {patientInfo.idVerification.idType}
//             </p>
//             <p>
//               <strong>ID Number:</strong> {patientInfo.idVerification.idNumber}
//             </p>
//             <p>
//               <strong>Issued Date:</strong>{' '}
//               {patientInfo.idVerification.issuedDate}
//             </p>
//             <p>
//               <strong>Expiry Date:</strong>{' '}
//               {patientInfo.idVerification.expiryDate}
//             </p>
//           </section>
//         )}

//         {patientInfo.consentForm && (
//           <section>
//             <h2 className="text-2xl font-semibold mb-4">Consent Form</h2>
//             <p>
//               <strong>Consent Given:</strong>{' '}
//               {patientInfo.consentForm.consentGiven ? 'Yes' : 'No'}
//             </p>
//             <p>
//               <strong>Consent Date:</strong>{' '}
//               {patientInfo.consentForm.consentDate}
//             </p>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FilledProfile;

import React, { useState, useEffect } from 'react';
import K from '../../constant/sidebarConstant';

const FilledProfile = () => {
  const [patientInfo, setPatientInfo] = useState({
    personalInfo: {},
    medicalInfo: {},
    idVerification: {},
    consentForm: {},
  });

  useEffect(() => {
    // Access the first patient's data
    if (K.PATIENT_DATA && K.PATIENT_DATA.length > 0) {
      setPatientInfo(K.PATIENT_DATA[0]);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="bg-white text-black rounded-md shadow-lg p-6 w-full max-w-4xl md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
          Patient Profile
        </h1>

        {patientInfo.personalInfo && (
          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p>
                <strong>Firstname:</strong> {patientInfo.personalInfo.firstname}
              </p>
              <p>
                <strong>Lastname:</strong> {patientInfo.personalInfo.lastname}
              </p>
              <p>
                <strong>Email:</strong> {patientInfo.personalInfo.email}
              </p>
              <p>
                <strong>Phone:</strong> {patientInfo.personalInfo.phone}
              </p>
              <p>
                <strong>Date of Birth:</strong> {patientInfo.personalInfo.dob}
              </p>
              <p>
                <strong>Gender:</strong> {patientInfo.personalInfo.gender}
              </p>
              <p>
                <strong>Address:</strong> {patientInfo.personalInfo.address}
              </p>
              <p>
                <strong>Occupation:</strong>{' '}
                {patientInfo.personalInfo.occupation}
              </p>
              <p>
                <strong>Emergency Contact Name:</strong>{' '}
                {patientInfo.personalInfo.emergencyContactName}
              </p>
              <p>
                <strong>Emergency Contact Number:</strong>{' '}
                {patientInfo.personalInfo.emergencyContactNumber}
              </p>
            </div>
          </section>
        )}

        {patientInfo.medicalInfo && (
          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Medical Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p>
                <strong>Insurance Provider:</strong>{' '}
                {patientInfo.medicalInfo.insuranceProvider}
              </p>
              <p>
                <strong>Insurance Policy Number:</strong>{' '}
                {patientInfo.medicalInfo.insurancePolicyNumber}
              </p>
              <p>
                <strong>Allergies:</strong> {patientInfo.medicalInfo.allergies}
              </p>
              <p>
                <strong>Current Medications:</strong>{' '}
                {patientInfo.medicalInfo.currentMedications}
              </p>
            </div>
          </section>
        )}

        {patientInfo.idVerification && (
          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              ID Verification
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p>
                <strong>ID Type:</strong> {patientInfo.idVerification.idType}
              </p>
              <p>
                <strong>ID Number:</strong>{' '}
                {patientInfo.idVerification.idNumber}
              </p>
              <p>
                <strong>Issued Date:</strong>{' '}
                {patientInfo.idVerification.issuedDate}
              </p>
              <p>
                <strong>Expiry Date:</strong>{' '}
                {patientInfo.idVerification.expiryDate}
              </p>
            </div>
          </section>
        )}

        {patientInfo.consentForm && (
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Consent Form
            </h2>
            <p>
              <strong>Consent Given:</strong>{' '}
              {patientInfo.consentForm.consentGiven ? 'Yes' : 'No'}
            </p>
            <p>
              <strong>Consent Date:</strong>{' '}
              {patientInfo.consentForm.consentDate}
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default FilledProfile;
