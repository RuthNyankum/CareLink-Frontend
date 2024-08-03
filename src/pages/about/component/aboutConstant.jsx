import cadio from '../../../assets/images/cardiology.jpg';
import dental from '../../../assets/images/dental.jpg';
import ophth from '../../../assets/images/eye.jpg';
import emerg from '../../../assets/images/emeg.jpg';
import diag from '../../../assets/images/diag1.jpg';
import neuro from '../../../assets/images/neuro.jpg';
import other from '../../../assets/images/consult.jpg';

import {
  BellIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export const featureList = [
  {
    icon: CheckCircleIcon,
    color: 'text-blue-500',
    text: 'Online Appointment Booking',
  },
  {
    icon: XCircleIcon,
    color: 'text-red-500',
    text: 'Rescheduling and Cancellations',
  },
  {
    icon: ClockIcon,
    color: 'text-green-500',
    text: 'Doctor Availability',
  },
  {
    icon: BellIcon,
    color: 'text-yellow-500',
    text: 'Reminders and Notifications',
  },
  {
    icon: EnvelopeIcon,
    color: 'text-gray-500',
    text: 'Secure Messaging',
  },
];

import {
  UserPlusIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
  AdjustmentsHorizontalIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

export const steps = [
  {
    icon: UserPlusIcon,
    color: 'text-blue-500',
    title: 'Sign Up',
    description: 'Create an account on CareLink and complete your profile.',
  },
  {
    icon: MagnifyingGlassIcon,
    color: 'text-green-500',
    title: 'Search for Providers',
    description:
      'Use our search feature to find healthcare providers based on specialty, location, and availability.',
  },
  {
    icon: CalendarIcon,
    color: 'text-yellow-500',
    title: 'Book an Appointment',
    description:
      'Choose a suitable time slot and book an appointment with just a few clicks.',
  },
  {
    icon: AdjustmentsHorizontalIcon,
    color: 'text-red-500',
    title: 'Manage Your Appointments',
    description:
      'Reschedule or cancel appointments as needed, and receive notifications for any changes.',
  },
  {
    icon: UserCircleIcon,
    color: 'text-gray-500',
    title: 'Visit the Doctor',
    description:
      'Attend your appointment as scheduled, knowing that CareLink has taken care of the details.',
  },
];

export const departments = [
  { name: 'Cardiology', icon: '❤️' },
  { name: 'Neurology', icon: '🧠' },
  { name: 'Diagnostics', icon: '🔬' },
  { name: 'Dental', icon: '🦷' },
  { name: 'Ophthalmology', icon: '👁️' },
  { name: 'Emergency', icon: '🚑' },
  { name: 'Others', icon: '🏬' },
];

export const departmentDetails = {
  Cardiology: {
    image: cadio,
    description:
      'Learn about cardiology, heart health, and treatments for cardiovascular conditions.',
    features: [
      'Advanced Cardiac Care',
      'Comprehensive Heart Screening',
      'Expert Cardiologists',
      'Emergency Heart Services',
    ],
  },
  Neurology: {
    image: neuro,
    description:
      'Explore our neurology department, offering care for neurological disorders and treatments.',
    features: [
      'Expert Neurologists',
      'Comprehensive Diagnostics',
      'Specialized Treatment Plans',
      'Patient-Centered Care',
    ],
  },
  Diagnostics: {
    image: diag,
    description:
      'State-of-the-art diagnostic facilities for accurate and timely diagnoses.',
    features: [
      'Advanced Imaging Technology',
      'Accurate Lab Testing',
      'Expert Radiologists',
      'Comprehensive Diagnostics',
    ],
  },
  Dental: {
    image: dental,
    description:
      'Providing comprehensive dental care, from routine check-ups to advanced procedures.',
    features: [
      'Preventive Dental Care',
      'Cosmetic Dentistry',
      'Oral Surgery',
      'Orthodontics and Braces',
    ],
  },
  Ophthalmology: {
    image: ophth,
    description:
      'Eye care services including exams, treatments, and surgeries for various eye conditions.',
    features: [
      'Comprehensive Eye Exams',
      'Cataract Surgery',
      'Laser Eye Surgery',
      'Treatment for Eye Diseases',
    ],
  },
  Emergency: {
    image: emerg,
    description: '24/7 emergency care for all urgent medical conditions.',
    features: [
      'Immediate Response',
      'Critical Care Specialists',
      'Advanced Emergency Equipment',
      'Rapid Diagnosis and Treatment',
    ],
  },
  Others: {
    image: other,
    description: 'These are other departments to know.',
    features: ['General OPD', 'Obs and Gyeny', 'Psychiatrist', 'Dermatology'],
  },
};
