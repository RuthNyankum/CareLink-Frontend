import React from 'react';
import vid from '../../assets/video/bgLanding.mp4';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';
import N from '../../constant';

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
        id="bg-video"
      >
        <source src={vid} type="video/mp4" />
        {/* <source src="path/to/your-video.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>

      {/* Content Over Video */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center p-4 z-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to CareLink</h1>
        <p className="text-lg mb-4">Navigating Health with Ease</p>

        <Link
          to="/about-us"
          className="flex items-center text-lg space-x-2 mb-8"
        >
          <span>Explore our site to learn more.</span>
          <ArrowRightIcon className="h-5 w-5 text-primary" />
        </Link>

        <div className="flex flex-col md:flex-row gap-10 md:gap-36 mt-28">
          {N.BUTTONDATA.map(({ index, title, link, buttonText }) => (
            <div key={index} className="text-center">
              <p className="text-[1.5rem] mb-2">{title}</p>
              <Link to={link}>
                <button className="text-[1rem] px-9 py-2 bg-primary rounded-xl">
                  {buttonText}
                </button>
              </Link>
              {/* <button
                onClick={() => navigate(link)}
                className="text-[1.3rem] px-9 py-2 bg-primary rounded-xl"
              >
                {buttonText}
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
