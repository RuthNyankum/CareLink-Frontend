import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './layouts/rootLayout';
import LandingPage from './pages/landing';
import About from './pages/about';
import Profile from './pages/profile';
import Appointment from './pages/appointment';
import Reschedule from './pages/reschedule';
import Contact from './pages/contact';
import Admin from './pages/admin';
import Home from './pages/home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: 'home',
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
          path: 'contact-us',
          element: <Contact />,
        },
        {
          path: 'admin',
          element: <Admin />,
        },
        // {
        //   path: 'login',
        //   element: <Login />,
        // },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
