import React from "react";
import personalshopping from "../assets/leftShop-min.png";
import curly from "../assets/curly.svg";
import Button from "./Button";

function Shopping() {
  return (
    <section className="lg:mx-[4%] mx-4 mt-[2.5rem] bg-[#FDF4D3] lg:flex block  items-center px-[2.5rem] py-[3rem] shadow-service justify-center gap-[10rem]">
      <img src={personalshopping} alt="personal-shopping" />
      <div className=" text-left flex flex-col gap-4 lg:w-[36rem]">
        <h1 className="font-medium text-[2rem] tracking-[0.25rem]">
          PERSONAL SHOPPING
        </h1>
        <p className=" font-thin leading-[3rem]  text-[3rem]">
          Whether you’re looking for the perfect gift, updating your wardrobe,
          or sourcing exclusive items, our dedicated shopping is all your needs
          with style and efficiency.
        </p>

        <div className="flex gap-[3rem] ">
          <p className="leading-[1.8rem]">
            "Elite Concierge has taken my shopping experience to the next level.
            They assisted me with curated product selections, purchasing, and
            delivery of luxury items that I couldn't have found on my own.
            Thanks to their exclusive access, I now enjoy a wardrobe filled with
            unique and high-end pieces. Truly an outstanding service!"
          </p>
          <img className="rotate-180" src={curly} alt="curly" />
        </div>
        <p className="font-outfit font-medium text-[1.12rem]">
          — M. Fernández, Spain
        </p>
        <div className="flex items-center justify-start ">
          <Button label="See Our Catalogue" />
        </div>
      </div>
    </section>
  );
}

export default Shopping;
