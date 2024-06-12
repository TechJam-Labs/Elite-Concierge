import React from "react";
import dotarrow from "../assets/dot-arrow.svg";
import plane from "../assets/plane.svg";
import ring from "../assets/Ellipse22.svg";
import arrowmobile from "../assets/arrow-mobile.svg";

function Process() {
  return (
    <>
      <section className="lg:flex hidden mt-[12rem] px-[4%] pb-[7rem] flex-col justify-center items-center relative">
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
            boxShadow: `
                 0px 46.67px 93.33px 0px #3333333D,
                 0px 14.52px 14.52px 0px #FFFFFF inset,
                -0px -14.52px 14.52px 0px #CCCCCC inset`,
          }}
        >
          <p className="font-outfit font-medium mb-[1rem] text-[1.5rem]">
            ENQUIRIES
          </p>
          <p className="text-center font-outfit font-normal">
            Complete our enquiries form or send an email detailng the service
            are looking at
          </p>
        </div>

        <p className="bg-[#CC9933] flex items-center justify-center w-[4rem] h-[4rem] rounded-full absolute top-[33rem] z-10 left-[61rem] font-outfit font-medium text-[2rem]">
          02
        </p>
        <div
          className="absolute top-[35rem] left-[53rem] py-[3rem] px-[1.5rem] w-[20rem] h-[20rem] rounded-full flex flex-col items-center justify-center bg-white border-none"
          style={{
            boxShadow: `
                 0px 46.67px 93.33px 0px #3333333D,
                 0px 14.52px 14.52px 0px #FFFFFF inset,
                -0px -14.52px 14.52px 0px #CCCCCC inset`,
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
            boxShadow: `
                 0px 46.67px 93.33px 0px #3333333D,
                 0px 14.52px 14.52px 0px #FFFFFF inset,
                -0px -14.52px 14.52px 0px #CCCCCC inset`,
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
      <section className="flex relative flex-col items-center lg:hidden mx-[1.5rem] mb-[5rem]">
        <div className="font-outfit font-semibold lg:text-[2.5rem] text-[1.5rem]">
          <span>OUR </span>
          <span className="text-[#AC863A]">PROCESS</span>
        </div>
        <p className="text-center mb-[1rem]">
          This is the processes we follow here at Elite concierge to ensure
          excellent service delivery to our clients, document our process for
          iterable smooth running
        </p>

        <img
          className="text-center ml-[1rem] w-[3rem] h-[3rem]"
          src={ring}
          alt="ring"
        />
        <img src={arrowmobile} alt="arrow-mobile" />
        <img
          className="text-center mr-[0.5rem] w-[3.5rem] h-[4rem] -mt-[0.6rem]"
          src={plane}
          alt="plane"
        />
        <p className="bg-[#CC9933] flex items-center justify-center ml-[0.8rem] w-[3rem] h-[3rem] rounded-full absolute top-[14rem] z-10 font-outfit font-medium text-[1.2rem]">
          01
        </p>
        <div
          className="absolute top-[16rem] py-[3rem] px-[1.5rem] w-[16rem] h-[16rem] rounded-full flex flex-col items-center justify-center bg-white border-none"
          style={{
            boxShadow: `
                 0px 46.67px 93.33px 0px #3333333D,
                 0px 14.52px 14.52px 0px #FFFFFF inset,
                -0px -14.52px 14.52px 0px #CCCCCC inset`,
          }}
        >
          <p className="font-outfit font-medium mb-[1rem] text-[1.2rem]">
            ENQUIRIES
          </p>
          <p className="text-center font-outfit font-normal">
            Complete our enquiries form or send an email detailng the service
            are looking at
          </p>
        </div>

        <p className="bg-[#CC9933] flex items-center justify-center ml-[0.3rem] w-[3rem] h-[3rem] rounded-full absolute top-[38rem] z-10 font-outfit font-medium text-[1.2rem]">
          02
        </p>
        <div
          className="absolute top-[40rem] py-[3rem] px-[1.5rem] w-[16rem] h-[16rem] rounded-full flex flex-col items-center justify-center bg-white border-none"
          style={{
            boxShadow: `
                 0px 46.67px 93.33px 0px #3333333D,
                 0px 14.52px 14.52px 0px #FFFFFF inset,
                -0px -14.52px 14.52px 0px #CCCCCC inset`,
          }}
        >
          <p className="font-outfit font-medium mb-[1rem] text-[1.2rem]">
            BOOK/PAY
          </p>
          <p className="text-center font-outfit font-normal">
            After Confirmation of interest, and our revert with a description of
            offerings, you make payments as appropriate
          </p>
        </div>
        <p className="bg-[#CC9933] flex items-center justify-center w-[3rem] h-[3rem] rounded-full absolute ml-[0.3rem] bottom-[25rem] z-10 font-outfit font-medium text-[1.2rem]">
          03
        </p>
        <div
          className="absolute bottom-[10rem] py-[3rem] px-[1.5rem] w-[16rem] h-[16rem] rounded-full flex flex-col items-center justify-center bg-white border-none"
          style={{
            boxShadow: `
                 0px 46.67px 93.33px 0px #3333333D,
                 0px 14.52px 14.52px 0px #FFFFFF inset,
                -0px -14.52px 14.52px 0px #CCCCCC inset`,
          }}
        >
          <p className="font-outfit font-medium mb-[1rem] text-[1.2rem]">
            ACTIVATE
          </p>
          <p className="text-center font-outfit font-normal">
            On receipt of payment your service gets Activated. proceed to enjoy
            our concierge service
          </p>
        </div>
      </section>
    </>
  );
}

export default Process;
