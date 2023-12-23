// Header.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/png/whitelogo.png';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-24 sm:w-48">
            <img src={logo} alt="" />
          </div>

          <div className='mx-5 lg:mx-2'>
            <SearchBar/>
          </div>

          {/* Hamburger Menu Icon */}
          <div  className="lg:hidden  cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
             onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
          </div>
          
          {/* Large Screen Navigation Links */}
          <nav className="hidden lg:flex space-x-4 lg:space-x-14">
            <a href="#" className="text-white text-xl lg:text-3xl ">Home</a>
            <a href="#" className="text-white text-xl lg:text-3xl ">About</a>
            <a href="#" className="text-white text-xl lg:text-3xl ">Help</a>
            <a href="#" className="text-white text-xl lg:text-3xl ">Cart</a>
          </nav>
        </div>
      </header>

      {/* Responsive Navigation Links */}
      <nav className={`lg:hidden bg-gray-800 text-white p-4 ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-1000 ease-in-out`}>
      <div className="flex flex-col items-center">
          <a href="#" className="block py-2">Home</a>
          <a href="#" className="block py-2">About</a>
          <a href="#" className="block py-2">Services</a>
          <a href="#" className="block py-2">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
