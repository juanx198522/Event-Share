import React from 'react'
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-500 text-white">
      <div>
        <ul className="flex">
          <li>
            <Link to="" smooth={true} duration={500}>
              
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