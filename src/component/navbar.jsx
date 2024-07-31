import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import N from '../constant';
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.relative')) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary p-4 shadow-lg z-20">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <Link to="/">
          <img src="path_to_logo" alt="Logo" className="h-8 w-8" />
        </Link>

        <div className="flex md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        <div
          className={`md:flex items-center space-x-4 ${
            mobileMenuOpen ? 'block' : 'hidden'
          } md:block`}
        >
          {N.NAVLINKS.map((item, index) => (
            <div key={item.name} className="relative">
              {item.subItems ? (
                <>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex items-center text-white hover:text-gray-700 focus:outline-none"
                  >
                    {item.name}
                    <ChevronDownIcon
                      className={`w-4 h-4 ml-1 transition-transform ${
                        dropdownOpen === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {dropdownOpen === index && (
                    <div className="absolute left-0 mt-2 w-48 bg-secondary text-black rounded-lg shadow-lg">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 hover:bg-primary"
                          onClick={() => setDropdownOpen(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.path} className="text-white hover:text-gray-700">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
