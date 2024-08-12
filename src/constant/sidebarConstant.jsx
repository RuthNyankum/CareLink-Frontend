// import { ChatBubbleBottomCenterIcon } from '@heroicons/react/20/solid';
import { BiChat } from 'react-icons/bi';
import { FaHome, FaUser, FaNotesMedical, FaIdCard } from 'react-icons/fa';
// import DashboardLayout from './dashboardLayout';

const K = {
  NAVLINKS: [
    // {
    //   icon: <DashboardLayout />,
    //   text: 'Overview',
    //   link: '/dashboard',
    // },
    {
      icon: <FaHome />,
      text: 'Overview',
      link: '/dashboard',
    },

    {
      icon: <FaUser />,
      text: 'Profile',
      link: '/dashboard/profile',
    },

    {
      icon: <FaNotesMedical />,
      text: 'Appointment',
      link: '/dashboard/appointment',
    },

    {
      icon: <BiChat />,
      text: 'Chat',
      link: '/dashboard/chat',
    },
    // { icon: <FaIdCard />, text: 'Logout', link: '#' }, // Logout link will be handled separately
  ],

  // patientData.js
  PATIENT_DATA: [
    {
      personalInfo: {
        firstname: 'Ruth',
        lastname: 'Doe',
        email: 'example@gmail.com',
        phone: '+233123456789',
        dob: '1990-01-01',
        gender: 'Female',
        address: '14 Street, Accra',
        occupation: 'Software Engineer',
        emergencyContactName: 'John Doe',
        emergencyContactNumber: '+233987654321',
      },
      medicalInfo: {
        insuranceProvider: 'BlueCross',
        insurancePolicyNumber: 'GHAA983920',
        allergies: 'Peanut',
        currentMedications: 'Ibuprofen, Coartem',
      },
      idVerification: {
        idType: 'National ID',
        idNumber: 'GHA-12345-67890',
        issuedDate: '2015-01-01',
        expiryDate: '2025-01-01',
      },
      consentForm: {
        consentGiven: true,
        consentDate: '2024-08-01',
      },
    },
  ],

  // src/constants/appointmentConstants.js
  APPOINTMENTDETAILS: [
    {
      department: 'Cardiology',
      doctor: 'Dr. Jane Doe',
      reason: 'Routine check-up',
      date: '2024-08-15',
      time: '10:00',
    },
    {
      department: 'Neurology',
      doctor: 'Dr. John Smith',
      reason: 'Headache Consultation',
      date: '2024-08-20',
      time: '14:00',
    },
    // Add more appointments as needed
  ],
};

export default K;
