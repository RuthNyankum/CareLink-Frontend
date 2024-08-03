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
import Account from './pages/account';
import Login from './pages/account/login';
import SignUp from './pages/account/signUp';
import AdminLogin from './pages/admin/adminLogin';
import CancelAppointment from './pages/cancel/cancelAppointment';

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
          path: 'cancel',
          element: <CancelAppointment />,
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
