import React from "react";
import EliteLogo from "../assets/elitelogo.png";
import Facebook from "../assets/facebook1.svg";
import Tik from "../assets/tik.svg";
import Instagram from "../assets/instagram.svg";
function Footer() {
  return (
    <footer className=" px-[2rem] pt-8 bg-[#000000] sm:px-[5rem] sm:py-12">
      <div className="sm:flex sm:items-center sm:justify-center lg:justify-between">
        <div>
          <img
            className=" hidden lg:block w-[70px]"
            src={EliteLogo}
            alt="afflogo"
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <ul className=" hidden lg:flex lg:gap-4 lg:underline lg:font-outfit lg:text-[#ffffff] lg:text-[16px]">
            <li className="underline">General Enquiries</li>
            <li className="underline">Business Concierge Enquiries</li>
            <li className="underline">Private Concierge Enquiries</li>
            <li className="underline">Quick Estimate</li>
          </ul>
          <ul className="flex gap-4 font-outfit text-[#CC9933] text-[14px]">
            <li>hello@eliteconcierege.vip | +441729042090</li>
            <li className="hidden sm:block">
              | Cookies Policy | Privacy Policy
            </li>
          </ul>
          <div className="flex items-center gap-5 lg:hidden">
            <img src={Facebook} alt="facebook-image" />
            <img src={Instagram} alt=" instagram-image" />
            <img src={Tik} alt="tik-image" />
          </div>
          <p className="font-outfit text-[#ffffff] mt-10 text-[12px] sm:mt-0 sm:text-[14px]">
            Copyright @ 2024 All rights reserved
          </p>
        </div>
        <div className="hidden lg:flex lg:items-center lg:mt-[-1rem] lg:gap-5">
          <img src={Facebook} alt="facebook-image" />
          <img src={Instagram} alt=" instagram-image" />
          <img src={Tik} alt="tik-image" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
