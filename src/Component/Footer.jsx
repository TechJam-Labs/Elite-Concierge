import React from "react";
import EliteLogo from "../assets/elitelogo.png";
import Facebook from "../assets/facebook1.svg";
import Tik from "../assets/tik.svg";
import Instagram from "../assets/instagram.svg";
function Footer() {
  return (
    <footer className="px-[5rem] py-12 bg-[#000000]">
      <div className="flex items-center justify-between">
        <div>
          <img className=" w-[70px]" src={EliteLogo} alt="afflogo" />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <ul className="flex gap-4 underline font-outfit text-[#ffffff] text-[16px]">
            <li className="underline">General Enquiries</li>
            <li className="underline">Business Concierge Enquiries</li>
            <li className="underline">Private Concierge Enquiries</li>
            <li className="underline">Quick Estimate</li>
          </ul>
          <ul className="flex gap-4 font-outfit text-[#CC9933] text-[14px]">
            <li>hello@eliteconcierege.vip | +441729042090</li>
            <li>| Cookies Policy | Privacy Policy</li>
          </ul>
          <p className="font-outfit text-[#ffffff] text-[14px]">
            Copyright @ 2024 All rights reserved
          </p>
        </div>
        <div className="flex items-center mt-[-1rem] gap-5">
          <img src={Facebook} alt="facebook-image" />
          <img src={Instagram} alt=" instagram-image" />
          <img src={Tik} alt="tik-image" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
