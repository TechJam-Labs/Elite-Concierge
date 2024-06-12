import React from "react";
import travel from "../assets/right-min-ser.png";
import curly from "../assets/curly.svg";
import Button from "./Button";

function Travel() {
  return (
    <section className="lg:mx-[4%] mx-4 mt-[1.5rem] lg:mt-[2.5rem] bg-[#F3ECEC] lg:flex-row flex flex-col items-center lg:px-[2.5rem] px-0 py-[1.5rem] lg:py-[3rem] shadow-service justify-center lg:mb-[5rem] mb-[1.5rem] lg:gap-[10rem] gap-[3.25rem]">
      <div className="lg:text-right text-center flex flex-col lg:gap-4 gap-[0.6rem] lg:w-[37rem]">
        <h1 className="font-medium text-[1rem] lg:text-[2rem] tracking-[0.25rem] px-[2.5rem] lg:px-0">
          TRAVEL & LEISURE SERVICES
        </h1>
        <p className=" font-thin lg:leading-[3rem] leading-7 text-[1.5rem] lg:text-[3rem] px-[2.5rem] lg:px-0">
          Arranging flights, hotels, vacation packages & activities to create
          unforgettable travel experiences
        </p>

        <div className="flex lg:gap-[3rem] lg:pr-0 pr-[2.5rem]">
          <img src={curly} alt="curly" />
          <p className="leading-[1.8rem]">
            "I recently used Elite Concierge for arranging flights, hotels,
            vacation packages, and activities for our family vacation, and I
            couldn't be happier. They took care of every detail, creating an
            unforgettable travel experience for us. The service was seamless and
            personalized, making our trip truly special. Highly recommend Elite
            Concierge for anyone looking to travel without the stress!"
          </p>
        </div>
        <p className="font-outfit font-medium text-[1.25rem] lg:text-[1.12rem] tracking-[0.25rem]">
          - J. ANDRES, AUTRIA
        </p>
        <div className="flex items-center lg:justify-end justify-center ">
          <Button label="Get a Quick Estimate" />
        </div>
      </div>
      <img
        className="lg:w-[29rem] lg:h-[40rem] w-[24rem] h-[32rem]"
        src={travel}
        alt="travel"
      />
    </section>
  );
}

export default Travel;
