import React from "react";
import EliteLogo from "../assets/elitelogo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="px-[0.7rem] relative font-nav py-6 h-31 md:px-[6rem]">
      <div className="flex items-center px-6 py-2 justify-between relative z-50">
        {/* Logo section */}
        <div>
          <img className="w-[30px] md:w-[70px]" src={EliteLogo} alt="afflogo" />
        </div>
        {/* Hamburger menu for mobile and tablet */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#CC9933] focus:outline-none"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Navigation links for laptop view */}
        <ul className="hidden lg:flex gap-10 font-outfit font-normal text-[#ffffff] text-[15px]">
          <li className="relative group">
            <NavLink to="/">
              <button className="hover:opacity-50 cursor-pointer">HOME</button>
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink to="/about-us">
              <button className="hover:opacity-50 cursor-pointer">
                ABOUT US
              </button>
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink to="/service">
              <button className="hover:opacity-50 cursor-pointer">
                OUR SERVICES
              </button>
            </NavLink>
          </li>
          <li className="relative group">
            <button className="hover:opacity-50 cursor-pointer">
              WACKITRAVELS
            </button>
          </li>
          <li className="relative group">
            <button className="hover:opacity-50 cursor-pointer">BLOG</button>
          </li>
        </ul>
        {/* Call to action button CTA for laptop view */}
        <button className="hidden lg:block px-6 py-2 cursor-pointer rounded-lg text-[#ffffff] border border-[#FFFFFF] font-normal text-[18px]">
          Contact Us
        </button>
      </div>
      {/* Navigation links for mobile and tablet view */}
      {isOpen && (
        <ul className="lg:hidden  w-[80%] absolute z-30 bg-[#F5F5F5] text-black font-outfit font-normal text-[15px] mt-4 ml-6 px-6 py-4 space-y-2">
          <li className="relative group">
            <NavLink to="/">
              <button className="hover:opacity-50 cursor-pointer">HOME</button>
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink to="/about-us">
              <button className="hover:opacity-50 cursor-pointer">
                ABOUT US
              </button>
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink to="/service">
              <button className="hover:opacity-50 cursor-pointer">
                OUR SERVICES
              </button>
            </NavLink>
          </li>
          <li className="relative group">
            <button className="hover:opacity-50 cursor-pointer">
              WACKITRAVELS
            </button>
          </li>
          <li className="relative group">
            <button className="hover:opacity-50 cursor-pointer">BLOG</button>
          </li>
        </ul>
      )}
    </header>
  );
}

export default NavigationBar;
