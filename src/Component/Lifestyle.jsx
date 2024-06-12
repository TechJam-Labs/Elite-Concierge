import React from "react";
import lifestyle from "../assets/left-min.png";
import curly from "../assets/curly.svg";
import Button from "./Button";

function Lifestyle() {
  return (
    <section className="lg:mx-[4%] mx-4 mt-[1.5rem] lg:mt-[2.5rem] bg-[#FDF4D3] lg:flex-row flex flex-col items-center lg:px-[2.5rem] px-0 py-[1.5rem] lg:py-[3rem] shadow-service justify-center mb-[5rem] lg:gap-[10rem] gap-[3.25rem]">
      <img
        className="lg:block hidden lg:w-[29rem] lg:h-[40rem] w-[24rem] h-[32rem]"
        src={lifestyle}
        alt="lifestyle"
      />
      <div className=" lg:text-right text-center flex flex-col lg:gap-4 gap-[0.6rem] lg:w-[37rem]">
        <h1 className="font-medium text-[1rem] lg:text-[2rem] tracking-[0.25rem] px-[2.5rem] lg:px-0">
          LIFESTYLE MANAGEMENT
        </h1>
        <p className=" font-thin lg:leading-[3rem] leading-7 text-[1.5rem] lg:text-[3rem] px-[2.5rem] lg:px-0">
          Our commitment to excellence and personalized service sets us apart,
          making your life easier and more enjoyable.
        </p>

        <div className="flex lg:gap-[3rem] lg:pl-0 pl-[2.5rem]">
          <p className="leading-[1.8rem]">
            "Elite Concierge has transformed my daily life. With their
            personalized support, I no longer worry about errands, scheduling
            appointments, or managing my household. They handle everything
            efficiently, allowing me to focus on what truly matters. Their
            lifestyle management services are a game-changer!"
          </p>
          <img className="rotate-180" src={curly} alt="curly" />
        </div>
        <p className="font-outfit font-medium text-[1.25rem] lg:text-[1.12rem] tracking-[0.25rem]">
          — L. CHEN, CHINA
        </p>
        <div className="flex items-center lg:justify-end justify-center ">
          <Button label="See Our Plans" />
        </div>
      </div>
      <img
        className="lg:hidden block lg:w-[29rem] lg:h-[40rem] w-[24rem] h-[32rem]"
        src={lifestyle}
        alt="lifestyle"
      />
    </section>
  );
}

export default Lifestyle;
