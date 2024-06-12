import React from "react";
import hospitality from "../assets/hospitality.png";
import curly from "../assets/curly.svg";
import Button from "./Button";

function Hospitality() {
  return (
    <section className="lg:mx-[4%] mx-4 mt-[2.5rem] bg-[#F3ECEC] lg:flex block  items-center px-[2.5rem] py-[3rem] shadow-service justify-center mb-[5rem] gap-[10rem]">
      <div className=" text-right flex flex-col gap-4 lg:w-[37rem]">
        <h1 className="font-medium text-[2rem] tracking-[0.25rem]">
          HOSPITALITY
        </h1>
        <p className=" font-thin leading-[3rem]  text-[3rem]">
          we redefine the essence of hospitality by offering bespoke services
          that cater to your every need. Our commitment to excellence is nothing
          short of extraordinary.
        </p>

        <div className="flex gap-[3rem]">
          <img src={curly} alt="curly" />
          <p className="leading-[1.8rem]">
            "I had the pleasure of staying in one of Elite Concierge's private
            residences during my trip to Italy. The villa was stunning, and the
            service was impeccable. From the concierge to the housekeeping and
            chef services, every detail was taken care of, making my stay truly
            luxurious and stress-free. Highly recommend Elite Concierge for
            anyone looking for exceptional short-term accommodations!"
          </p>
        </div>
        <p className="font-outfit font-medium text-[1.12rem]">
          — A. Wandolf, Germany
        </p>
        <div className="flex items-center justify-end ">
          <Button label="Explore our WOW! Checklist" />
        </div>
      </div>
      <img src={hospitality} alt="hospitality" />
    </section>
  );
}

export default Hospitality;
