import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/png/whitelogo.png';
import { NavLink } from 'react-router-dom';
// import SearchBar from './SearchBar';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  // const [toggleBtn,setToggleBtn]=useState('Login');

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

          {/* <div className='mx-5 lg:mx-2'>
            <SearchBar/>
          </div> */}

          {/* Hamburger Menu Icon */}
          <div  className="lg:hidden  cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
             onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
          </div>
          
          {/* Large Screen Navigation Links */}
          <nav className="hidden lg:flex space-x-4 lg:space-x-14">

            <NavLink  to="/" className="text-white text-xl lg:text-3xl  "  >Home</NavLink >
            <NavLink to="/about" className="text-white text-xl lg:text-3xl " >About</NavLink>
            <NavLink to="/help" className="text-white text-xl lg:text-3xl  " >Help</NavLink>
            <NavLink to="/cart" className="text-white text-xl lg:text-3xl  " >Cart</NavLink>

            {/* For toggle functionality */}
            {/* <button
            onClick={()=>{
            toggleBtn==='Login'?setToggleBtn('Logout') : setToggleBtn('Login')
            }}
            >{toggleBtn}</button> */}
          </nav>
        </div>
      </header>

      {/* Responsive Navigation Links */}
      <nav className={`lg:hidden bg-gray-800 text-white p-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
      <div className="flex flex-col items-center">

      <NavLink to="/" className="block py-2 " onClick={toggleMenu} >Home</NavLink>
      <NavLink to="/about" className="block py-2 " onClick={toggleMenu} >About</NavLink>
      <NavLink to="/help" className="block py-2 " onClick={toggleMenu} >Help</NavLink>
      <NavLink to="/cart" className="block py-2 " onClick={toggleMenu} >Cart</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
