import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './layouts/rootLayout';
import About from './pages/about';
import Profile from './pages/profile';
import Appointment from './pages/appointment';
import Reschedule from './pages/reschedule';
import Contact from './pages/contact';
import Admin from './pages/admin';
import Home from './pages/home';
import Login from './pages/account/login';
import SignUp from './pages/account/signUp';
import AdminLogin from './pages/admin/adminLogin';
import Cancel from './pages/cancel';
import DashboardLayout from './pages/patientDashboard';
import Overview from './pages/patientDashboard/overview';
import FilledAppointment from './pages/patientDashboard/filledAppointment';
import Chat from './pages/patientDashboard/chat';
import FilledProfile from './pages/patientDashboard/filledProfile';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        // {
        //   index: true,
        //   element: <LandingPage />,
        // },
        {
          index: 'true',
          element: <Home />,
        },
        {
          path: 'about-us',
          element: <About />,
        },
        {
          path: 'profile',
          element: <Profile />,
        },
        {
          path: 'appointment',
          element: <Appointment />,
        },
        {
          path: 'reschedule',
          element: <Reschedule />,
        },
        {
          path: '/dashboard',
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <Overview />,
            },
            {
              path: 'profile',
              element: <FilledProfile />,
            },
            {
              path: 'appointment',
              element: <FilledAppointment />,
            },
            {
              path: 'chat',
              element: <Chat />,
            },
          ],
        },
        {
          path: 'cancel',
          element: <Cancel />,
        },
        {
          path: 'contact-us',
          element: <Contact />,
        },
        // {
        //   path: 'Register',
        //   element: <Account />,
        // },
        {
          path: 'admin',
          element: <Admin />,
        },

        // {
        //   path: '/adminDashboard',
        //   element: <DashboardLayout />,
        //   children: [
        //     {
        //       index: true,
        //       element: <Overview />,
        //     },
        //     {
        //       path: 'profile',
        //       element: <PatientProfile />,
        //     },
        //   ],
        // },
        {
          path: 'adminlogin',
          element: <AdminLogin />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'signup',
          element: <SignUp />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
