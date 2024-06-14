import React from "react";
import hospitality from "../assets/hospitality.png";
import curly from "../assets/curly.svg";
import Button from "./Button";

function Hospitality() {
  return (
    <section className="lg:mx-[4%] mx-4 mt-[1.5rem] lg:mt-[2.5rem] bg-[#F3ECEC] lg:flex-row flex flex-col items-center lg:px-[2.5rem] px-0 py-[1.5rem] lg:py-[3rem] shadow-service justify-center lg:mb-[5rem] mb-[1.5rem] lg:gap-[10rem] gap-[3.25rem]">
      <div className="lg:text-right text-center flex flex-col lg:gap-4 gap-[0.6rem] lg:w-[37rem]">
        <h1 className="font-medium text-[1rem] lg:text-[2rem] tracking-[0.25rem] px-[2.5rem] lg:px-0">
          HOSPITALITY
        </h1>
        <p className=" font-thin lg:leading-[3rem] leading-7 text-[1.5rem] lg:text-[3rem] px-[2.5rem] lg:px-0">
          we redefine the essence of hospitality by offering bespoke services
          that cater to your every need. Our commitment to excellence is nothing
          short of extraordinary.
        </p>

        <div className="flex lg:gap-[3rem] lg:pr-0 pr-[2.5rem]">
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
        <p className="font-outfit font-medium text-[1.25rem] lg:text-[1.12rem] tracking-[0.25rem]">
          — A. Wandolf, Germany
        </p>
        <div className="flex items-center lg:justify-end justify-center">
          <Button label="Explore our WOW! Checklist" />
        </div>
      </div>
      <img
        className="lg:w-[29rem] lg:h-[40rem] w-[24rem] h-[32rem]"
        src={hospitality}
        alt="hospitality"
      />
    </section>
  );
}

export default Hospitality;
