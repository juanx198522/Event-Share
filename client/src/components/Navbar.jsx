import React from 'react'
import { Link } from "react-scroll";
import Logo from '../assets/eventlogo.png'

const Navbar = () => {
  return (
    <div className="fixed w-screen h-[100px] flex justify-between items-center px-4 bg-gray-500 text-white">
      <div>
        <ul className="flex">
          <li>
            <Link to="" smooth={true} duration={500}>
              <div>
              <img className='w-60 h-60 object-scale-down' src={Logo} alt="EventLogo"/>
              </div>
            </Link>
          </li>
        </ul>
        </div>
        <div>
        <ul className=' flex justify-items-end'>
          <li>
            <Link to="" smooth={true} duration={500}>
              Events
            </Link>
          </li>
          <li>
            <Link to="" smooth={true} duration={500}>
              My Events
            </Link>
          </li>
          <li>
            <Link to="" smooth={true} duration={500}>
              Booking
            </Link>
          </li>
          <li>
            <Link to="" smooth={true} duration={500}>
              Signup/Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar