import React from 'react'
import SubHeading from '../Subheading/SubHeading'
import './Newsletter.css';

export const Newsletter = () => {
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <Subheading title="Newsletter" />
        <h1 className='headtext__cormorant'>Subscribe to our Newsletter</h1>
        <p className='p__opensans'>Never miss our latest updates!</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type="email" placeholder='Enter your Email' />
        <button className='custom__button'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter