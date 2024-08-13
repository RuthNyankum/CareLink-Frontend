import React from 'react';
import AboutHero from './component/aboutHero';
import Features from './component/features';
import HowItWorks from './component/howItWorks';
import OurTeam from './component/ourTeam';
import Department from './component/department';
import Testimonials from './component/testimonials';
import FutureGoals from './component/futureGoals';
import Navbar from '../../component/navbar';

const About = () => {
  return (
    <div className="font-poppins-regular">
      <Navbar />
      <AboutHero />
      <Features />
      <HowItWorks />
      <OurTeam />
      <Department />
      <Testimonials />
      <FutureGoals />
    </div>
  );
};

export default About;
