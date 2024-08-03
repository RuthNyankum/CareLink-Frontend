// constants/doctors.js
import doc1 from '../../assets/images/doc1.jpg';
import doc2 from '../../assets/images/doc2.jpg';
import doc3 from '../../assets/images/doc7.jpg';
import doc4 from '../../assets/images/doc6.png';
import doc5 from '../../assets/images/doc5.jpg';

export const departments = [
  { id: '1', name: 'Cardiology' },
  { id: '2', name: 'Neurology' },
  { id: '3', name: 'Dental' },
  { id: '4', name: 'Ophthalmology' },
  { id: '5', name: 'Obstetrics and Gynecology (OB/GYN)' },
  { id: '6', name: 'Emergency' },
  { id: '7', name: 'General' },
];

export const doctors = {
  1: [
    {
      id: 'a',
      name: 'Dr. Brown Spencer',
      specialty: 'Cardiologist',
      image: doc2,
    },

    {
      id: 'b',
      name: 'Dr. Michael Brown',
      specialty: 'Interventional Cardiologist',
      image: doc3,
    },
  ],

  2: [
    {
      id: 'k',
      name: 'Dr. Sarah Hernandez',
      specialty: 'Neurologist',
      image: doc1,
    },
    {
      id: 'l',
      name: 'Dr. Richard Lewis',
      specialty: 'Neurosurgeon',
      image: doc4,
    },
  ],

  3: [
    {
      id: 'z',
      name: 'Dr. Anthony Harris',
      specialty: 'Medical Oncologist',
      image: doc3,
    },
    {
      id: 'aa',
      name: 'Dr. Rachel King',
      specialty: 'Radiation Oncologist',
      image: doc4,
    },
    {
      id: 'bb',
      name: 'Dr. Edward Young',
      specialty: 'Surgical Oncologist',
      image: doc3,
    },
  ],
  4: [
    {
      id: 'ee',
      name: 'Dr. Sarah Mitchell',
      specialty: 'Radiologist',
      image: doc5,
    },
    {
      id: 'ff',
      name: 'Dr. Gregory Parker',
      specialty: 'Interventional Radiologist',
      image: doc3,
    },
    {
      id: 'gg',
      name: 'Dr. Victoria Hill',
      specialty: 'Neuroradiologist',
      image: doc1,
    },
  ],
  5: [
    {
      id: 'jj',
      name: 'Dr. Angela Cooper',
      specialty: 'Obstetrician',
      image: doc5,
    },
    {
      id: 'kk',
      name: 'Dr. Thomas Carter',
      specialty: 'Gynecologist',
      image: doc3,
    },
  ],
  6: [
    {
      id: 'oo',
      name: 'Dr. Michael Turner',
      specialty: 'General Surgeon',
      image: doc4,
    },
    {
      id: 'pp',
      name: 'Dr. Stephanie Collins',
      specialty: 'Cardiothoracic Surgeon',
      image: doc3,
    },
    {
      id: 'qq',
      name: 'Dr. Daniel Harris',
      specialty: 'Neurosurgeon',
      image: doc4,
    },
  ],
  7: [
    {
      id: 'ee',
      name: 'Dr. Sarah Mitchell',
      specialty: 'General Physician',
      image: doc5,
    },
    {
      id: 'ff',
      name: 'Dr. Gregory Parker',
      specialty: 'General Physician',
      image: doc3,
    },
    {
      id: 'k',
      name: 'Dr. Sarah Hernandez',
      specialty: 'General Physician',
      image: doc1,
    },
  ],
};
