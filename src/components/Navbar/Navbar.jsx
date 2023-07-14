import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <a href="/"><img src={images.gericht} alt="logo" /></a>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Log in / Register</a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {}} />
        <div className='app__navbar-smallscreen_overlay flex-center slide-bottom'>
        <MdOutlineRestaurantMenu className='overlay__close' fontsize={27} onClick={() => {}} />
          <ul className='app__navbar-smallscreen-links'>
          <li className='p__opensans'><a href="#home">Home</a></li>
          <li className='p__opensans'><a href="#about">About</a></li>
          <li className='p__opensans'><a href="#menu">Menu</a></li>
          <li className='p__opensans'><a href="#awards">Awards</a></li>
          <li className='p__opensans'><a href="#contact">Contact</a></li>
        </ul>
          </div> 
      </div>
    </nav>
  )
}

export default Navbar