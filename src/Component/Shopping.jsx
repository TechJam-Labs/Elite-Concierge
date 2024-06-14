import React from "react";
import personalshopping from "../assets/leftShop-min.png";
import curly from "../assets/curly.svg";
import Button from "./Button";

function Shopping() {
  return (
    <section className="lg:mx-[4%] mx-4 mt-[1.5rem] lg:mt-[2.5rem] bg-[#FDF4D3] lg:flex-row flex flex-col items-center lg:px-[2.5rem] px-0 py-[1.5rem] lg:py-[3rem] shadow-service justify-center mb-[5rem] lg:gap-[10rem] gap-[3.25rem]">
      <img
        className="lg:block hidden lg:w-[29rem] lg:h-[40rem] w-[24rem] h-[32rem]"
        src={personalshopping}
        alt="personal-shopping"
      />
      <div className="lg:text-right text-center flex flex-col lg:gap-4 gap-[0.6rem] lg:w-[37rem]">
        <h1 className="font-medium text-[1rem] lg:text-[2rem] tracking-[0.25rem] px-[2.5rem] lg:px-0">
          PERSONAL SHOPPING
        </h1>
        <p className="font-thin lg:leading-[3rem] leading-7 text-[1.5rem] lg:text-[3rem] px-[2.5rem] lg:px-0">
          Whether you’re looking for the perfect gift, updating your wardrobe,
          or sourcing exclusive items, our dedicated shopping is all your needs
          with style and efficiency.
        </p>

        <div className="flex lg:gap-[3rem] lg:pl-0 pl-[2.5rem]">
          <p className="leading-[1.8rem]">
            "Elite Concierge has taken my shopping experience to the next level.
            They assisted me with curated product selections, purchasing, and
            delivery of luxury items that I couldn't have found on my own.
            Thanks to their exclusive access, I now enjoy a wardrobe filled with
            unique and high-end pieces. Truly an outstanding service!"
          </p>
          <img className="rotate-180" src={curly} alt="curly" />
        </div>
        <p className="font-outfit font-medium text-[1.25rem] lg:text-[1.12rem] tracking-[0.25rem]">
          — M. Fernández, Spain
        </p>
        <div className="flex items-center lg:justify-end justify-center">
          <Button label="See Our Catalogue" />
        </div>
      </div>
      <img
        className="lg:hidden block lg:w-[29rem] lg:h-[40rem] w-[24rem] h-[32rem]"
        src={personalshopping}
        alt="personal-shopping"
      />
    </section>
  );
}

export default Shopping;
