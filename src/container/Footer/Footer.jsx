import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import './Footer.css';

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
        contact deets
        </div>
        <div className='app__footer-links_logo'>
        Social links
        </div>
        <div className='app__footer-links_work'>
          Working hours
        </div>
      </div>
    </div>
  )
}

export default Footer