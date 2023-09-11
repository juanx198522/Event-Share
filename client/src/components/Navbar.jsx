import React from 'react'
import { Link } from 'react-scroll';
import Logo from '../assets/Eventlogo.png'

const Navbar = () => {
  return (
    <div className='fixed w-screen h-[12%] flex justify-between items-center p-8 bg-gray-500 text-white'>
      <div>
        <ul>
          <li>
            <Link to='' smooth={true} duration={500}>
              <div className=''>
              <img className='w-50 h-20 items-center flex-shrink-0' src={Logo} alt='EventLogo'/>
              </div>
            </Link>
          </li>
        </ul>
        </div>
        <div>
        <ul className=' flex justify-items-end'>
          <li>
            <Link to='' smooth={true} duration={500}>
              Events
            </Link>
          </li>
          <li>
            <Link to='' smooth={true} duration={500}>
              My Events
            </Link>
          </li>
          <li>
            <Link to='' smooth={true} duration={500}>
              Booking
            </Link>
          </li>
          <li>
            <Link to='' smooth={true} duration={500}>
              Signup/Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar