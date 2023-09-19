import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/eventlogo.png";
import Auth from "../utils/authClient";

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="fixed w-screen h-[12%] flex justify-between items-center p-8 bg-[#001e3b] text-white">
      <div>
        <ul>
          <li>
            <Link to="" duration={500}>
              <div className="">
                <img
                  className="w-50 h-20 items-center object-cover w-60"
                  src={Logo}
                  alt="EventLogo"
                />
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul
          className=" flex justify-items-end
font-medium flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 
md:border-0 "
        >
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
            {Auth.loggedIn() ? (
              <>
                <div className="">
                  {Auth.getProfile().data.username}'s profile
                </div>
                <button
                  className="btn btn-lg btn-light m-2 hover:text-red-300"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-lg btn-info m-2 " to="/login">
                  Login/Register
                </Link>
              </>
            )}

           
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
