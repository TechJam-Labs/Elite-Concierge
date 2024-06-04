import React from "react";
import EliteLogo from "../assets/elitelogo.png";
function NavigationBar() {
  return (
    <header className="px-[6rem] font-nav py-6  h-31">
      <div className=" flex items-center px-6 py-2 justify-between relative z-50">
        {/* Logo section */}
        <div>
          <img className=" w-[70px]" src={EliteLogo} alt="afflogo" />
        </div>
        {/* navigation links */}

        <ul className=" flex gap-10 font-outfit font-normal text-[#FFFFFF] text-[15px]">
          <li className="relative group ">
            <button className="hover:opacity-50 cursor-pointer  ">HOME</button>
          </li>
          <li className="relative group ">
            <button className="hover:opacity-50 cursor-pointer">
              ABOUT US
            </button>
          </li>
          <li className="relative group ">
            <button className="hover:opacity-50 cursor-pointer">
              OUR SERVICES
            </button>
          </li>
          <li className="relative group ">
            <button className="hover:opacity-50 cursor-pointer">
              WACKITRAVELS
            </button>
          </li>
          <li className="relative group  ">
            <button className="hover:opacity-50 cursor-pointer">BLOG</button>
          </li>
        </ul>
        {/* call to action button CTA */}
        <button className="px-6 py-2 cursor-pointer rounded-lg text-[#ffffff] border border-[ #FFFFFF] font-normal font-outfit text-[18px] ">
          Contact Us
        </button>
      </div>
    </header>
  );
}

export default NavigationBar;
