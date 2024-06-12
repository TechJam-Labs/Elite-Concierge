import React from "react";
import dotarrow from "../assets/dot-arrow.svg";
import plane from "../assets/plane.svg";
import ring from "../assets/Ellipse22.svg";

function Process() {
  return (
    <section className="flex mt-[12rem] px-[4%]  pb-[7rem] flex-col justify-center items-center relative">
      <div className="font-outfit font-semibold text-[2.5rem] ">
        <span>OUR </span>
        <span className="text-[#AC863A]">PROCESS</span>
      </div>
      <p className="w-[40rem] text-center mb-[7rem]">
        This is the processes we follow here at Elite concierge to ensure
        excellent service delivery to our clients, document our process for
        iterable smooth running
      </p>
      <img className="w-[90%]" src={dotarrow} alt="dot-arrow" />
      <img
        className="absolute top-[10.9rem] right-[6.3rem]"
        src={plane}
        alt="plane"
      />
      <img
        className="absolute bottom-[9rem] left-[7.5rem]"
        src={ring}
        alt="ring"
      />

      <p className="bg-[#CC9933] flex items-center justify-center w-[4rem] h-[4rem] rounded-full absolute top-[14rem] z-10 left-[34rem] font-outfit font-medium text-[2rem]">
        01
      </p>
      <div
        className="absolute top-[16rem] left-[26rem] py-[3rem] px-[1.5rem] w-[20rem] h-[20rem] rounded-full flex flex-col items-center justify-center bg-white border-none"
        style={{
          boxShadow: "0 4px 6px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p className="font-outfit font-medium mb-[1rem] text-[1.5rem]">
          ENQUIRIES
        </p>
        <p className="text-center font-outfit font-normal">
          Complete our enquiries form or send an email detailng the service are
          looking at
        </p>
      </div>

      <p className="bg-[#CC9933] flex items-center justify-center w-[4rem] h-[4rem] rounded-full absolute top-[33rem] z-10 left-[61rem] font-outfit font-medium text-[2rem]">
        02
      </p>
      <div
        className="absolute top-[35rem] left-[53rem] py-[3rem] px-[1.5rem] w-[20rem] h-[20rem] rounded-full flex flex-col items-center justify-center bg-white border-none"
        style={{
          boxShadow: "0 4px 6px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p className="font-outfit font-medium mb-[1rem] text-[1.5rem]">
          BOOK/PAY
        </p>
        <p className="text-center font-outfit font-normal">
          After Confirmation of interest, and our revert with a description of
          offerings, you make payments as appropriate
        </p>
      </div>
      <p className="bg-[#CC9933] flex items-center justify-center w-[4rem] h-[4rem] rounded-full absolute top-[14rem] z-10 right-[23rem] font-outfit font-medium text-[2rem]">
        03
      </p>
      <div
        className="absolute top-[16rem] right-[15rem] py-[3rem] px-[1.5rem] w-[20rem] h-[20rem] rounded-full flex flex-col items-center justify-center bg-white border-none"
        style={{
          boxShadow: "0 4px 6px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p className="font-outfit font-medium mb-[1rem] text-[1.5rem]">
          ACTIVATE
        </p>
        <p className="text-center font-outfit font-normal">
          On receipt of payment your service gets Activated. proceed to enjoy
          our concierge service
        </p>
      </div>
    </section>
  );
}

export default Process;
