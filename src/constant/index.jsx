import docas from '../assets/images/doc4.jpg';
import ruth from '../assets/images/doc1.jpg';
import yaw from '../assets/images/doc7.jpg';
import brown from '../assets/images/doc2.jpg';
import baker from '../assets/images/doc6.png';
import lisa from '../assets/images/doc5.jpg';
import patient1 from '../assets/images/patient1.png';
import patient2 from '../assets/images/patient2.jpg';
import patient3 from '../assets/images/patient3.jpg';

const N = {
  NAVLINKS: [
    // {
    //   name: 'Landing',
    //   path: '/',
    // },
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about-us',
    },
    {
      name: 'Patient',
      path: '#',
      subItems: [
        { name: 'Profile', path: '/profile' },
        { name: 'Appointment', path: '/appointment' },
        { name: 'Reschedule', path: '/reschedule' },
      ],
    },
    {
      name: 'Contact',
      path: '/contact-us',
    },
    // {
    //   name: 'Account',
    //   path: '/register',
    // },
    {
      name: 'Admin',
      path: '/admin',
    },
  ],

  BUTTONDATA: [
    {
      title: 'New Patient',
      link: '/signup',
      buttonText: 'Sign Up',
    },
    {
      title: 'Old Patient',
      link: '/login',
      buttonText: 'Login',
    },
    {
      title: 'Admin',
      link: '/admin-login',
      buttonText: 'Login',
    },
  ],

  DOCTORS: [
    {
      img: ruth,
      name: 'Dr. Ruth Snow',
      specialty: 'Psychiatrist',
    },
    {
      img: yaw,
      name: 'Dr. Yaw Sakyi',
      specialty: 'Gynecologist',
    },
    {
      img: brown,
      name: 'Dr. Bown Spencer',
      specialty: 'Cardiologist',
    },
    {
      img: docas,
      name: 'Dr. Dorcas Nyankum',
      specialty: 'General Surgeon',
    },
    {
      img: baker,
      name: 'Dr. Michelle Baker',
      specialty: 'Dermatologist',
    },
    {
      img: lisa,
      name: 'Dr. Lisa Foster',
      specialty: 'General Physician',
    },
  ],

  TESTIMONIALSDATA: [
    {
      image: patient1,
      text: 'MediConnect has made it so much easier to manage my appointments. I love the convenience of booking online and getting reminders!',
      name: 'Sarah M.',
      role: 'Patient',
    },
    {
      image: yaw,
      text: "As a doctor, MediConnect helps me keep track of my schedule and manage patient appointments efficiently. It's a game-changer for my practice.",
      name: 'Dr. John D.',
      role: 'Healthcare Provider',
    },
    {
      image: patient2,
      text: "Booking appointments has never been this easy. MediConnect's user-friendly interface and real-time availability are fantastic.",
      name: 'Emily R.',
      role: 'Patient',
    },
    {
      image: patient3,
      text: 'The reminder notifications are so helpful. I never miss an appointment now thanks to MediConnect!',
      name: 'Michael T.',
      role: 'Patient',
    },
  ],
};

export default N;
