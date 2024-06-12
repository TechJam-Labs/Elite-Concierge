import React from "react";
import lifestyle from "../assets/left-min.png";
import curly from "../assets/curly.svg";
import Button from "./Button";

function Lifestyle() {
  return (
    <section className="lg:mx-[4%] mx-4 mt-[2.5rem] bg-[#FDF4D3] lg:flex block  items-center px-[2.5rem] py-[3rem] shadow-service justify-center mb-[5rem] gap-[10rem]">
      <img src={lifestyle} alt="lifestyle" />
      <div className=" text-left flex flex-col gap-4 lg:w-[36rem]">
        <h1 className="font-medium text-[2rem] tracking-[0.25rem]">
          LIFESTYLE MANAGEMENT
        </h1>
        <p className=" font-thin leading-[3rem]  text-[3rem]">
          Our commitment to excellence and personalized service sets us apart,
          making your life easier and more enjoyable.
        </p>

        <div className="flex gap-[3rem] ">
          <p className="leading-[1.8rem]">
            "Elite Concierge has transformed my daily life. With their
            personalized support, I no longer worry about errands, scheduling
            appointments, or managing my household. They handle everything
            efficiently, allowing me to focus on what truly matters. Their
            lifestyle management services are a game-changer!"
          </p>
          <img className="rotate-180" src={curly} alt="curly" />
        </div>
        <p className="font-outfit font-medium text-[1.12rem]">
          — L. CHEN, CHINA
        </p>
        <div className="flex items-center justify-start ">
          <Button label="See Our Plans" />
        </div>
      </div>
    </section>
  );
}

export default Lifestyle;
