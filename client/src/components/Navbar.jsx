import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../assets/eventlogo.png'
import Auth from '../utils/authClient';

const Navbar = () => {
  
  return (
    <div className='fixed w-screen h-[12%] flex justify-between items-center p-8 bg-[#001e3b] text-white'>
      <div>
        <ul>
          <li>
            <Link to='' duration={500}>
              <div className=''>
              <img className='w-50 h-20 items-center object-cover h-10 w-60' src={Logo} alt='EventLogo'/>
              </div>
            </Link>
          </li>
        </ul>
        </div>
        <div>
        <ul className=' flex justify-items-end'>
          <li>
            <Link to="/events" duration={500}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/myevent" duration={500}>
              
              My Events
            </Link>
          </li>
          <li>
            <Link to="/booking" duration={500}>
              Booking
            </Link>
          </li>
          <li>
            <Link to="/login" duration={500}>
              Signup/Login
            </Link>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default Navbar