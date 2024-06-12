import React from "react";
import travel from "../assets/right-min-ser.png";
import curly from "../assets/curly.svg";
import Button from "./Button";

function Travel() {
  return (
    <section className="lg:mx-[4%] mx-4 mt-[2.5rem] bg-[#F3ECEC] lg:flex block  items-center px-[2.5rem] py-[3rem] shadow-service justify-center mb-[5rem] gap-[10rem]">
      <div className=" text-right flex flex-col gap-4 lg:w-[37rem]">
        <h1 className="font-medium text-[2rem] tracking-[0.25rem]">
          TRAVEL & LEISURE SERVICES
        </h1>
        <p className=" font-thin leading-[3rem]  text-[3rem]">
          Arranging flights, hotels, vacation packages & activities to create
          unforgettable travel experiences
        </p>

        <div className="flex gap-[3rem]">
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
        <p className="font-outfit font-medium text-[1.12rem]">
          J. ANDRES, AUTRIA
        </p>
        <div className="flex items-center justify-end ">
          <Button label="Get a Quick Estimate" />
        </div>
      </div>
      <img src={travel} alt="travel" />
    </section>
  );
}

export default Travel;
