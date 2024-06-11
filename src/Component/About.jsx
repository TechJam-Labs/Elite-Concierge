import React from "react";
import NavigationBar from "./NavigationBar";
import Aboutimg from "../assets/about.png";
import Firstabt from "../assets/firstabt.png";
import Secondabt from "../assets/secondabt.png";
import Thirdabt from "../assets/thirdabt.png";
import Photo from "../assets/ph.png";
import Footer from "./Footer";
import Images from "../assets/vendor.png";
function About() {
  return (
    <>
      <NavigationBar />
      <section>
        <div className="w-full relative h-[160px] mt-[-115px] md:h-full md:mt-[-138px]">
          <img
            className="w-full h-full object-cover"
            src={Aboutimg}
            alt="aboutimg"
          />
          <div className="absolute inset-0 bg-[#000] opacity-80"></div>
          <div className="absolute top-[70%] px-[2rem] md:top-[65%] md:px-[5rem] lg:px-[7.4rem] lg:top-[65%]">
            <h4 className="font-outfit text-[#ffffff] md:text-[32px] lg:text-[48px]">
              ABOUT US
            </h4>
          </div>
        </div>
      </section>
      <section className=" w-full py-10 px-[2rem] md:py-20 md:px-[4rem] lg:px-[7rem]">
        <div className=" flex flex-col w-full h-full md:flex-row md:items-center">
          <div
            style={{ boxShadow: "5px 4px 24.3px 10px rgba(0, 0, 0, 0.1)" }}
            className="w-full bg-[#FFFFFF] order-2 px-4 py-4 md:order-1 md:w-[50%] lg:w-[50%]"
          >
            <div className="border-2 border-dashed border-[#B5955C] p-4">
              <h6 className="text-[#AC863A] text-center text-[18px] font-outfit font-semi-bold md:text-left md:text-[20px]">
                Welcome to Elite Concierge
              </h6>
              <h4 className="uppercase font-outfit mt-4 font-semi-bold  text-center text-[16px] leading-[-1] md:text-left md:leading-[1] md:text-[24px] mt-2 lg:w-[100%] lg:text-[30px]">
                Where exceptional service meets personalized care
              </h4>
              <p className="font-outfit text-[16px] text-[#757272] mt-3 text-center leading-[-1] md:text-left lg:text-[22px] lg:leading-[1] ">
                We specialize in offering bespoke concierge services tailored to
                meet the unique needs of our distinguished client. Our team of
                dedicated professionals is committed to providing you with
                seamless and memorable experiences, no matter your request.
              </p>
              <div className="mt-4 flex justify-center md:justify-start">
                <button className="text-[#ffffff] bg-[#CC9933] px-4 py-2 rounded-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="w-full order-1 md:order-2 z-[-1] md:ml-[-4rem] md:w-[60%] lg:w-[60%]">
            <img
              className="w-full h-full object-cover"
              src={Firstabt}
              alt="first image"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#FFEFCF] px-8 pt-8 lg:px-24 pt-12">
        <div className=" w-full flex flex-col items-center md:flex-row md:gap-4 lg:gap-[5rem]">
          <div className="w-full ">
            <img
              className="w-full h-full object-cover"
              src={Photo}
              alt="girl photo"
            />
          </div>
          <div className="mt-6">
            <p className="font-comic text-[19px] font-bold leading-none lg:ml-[3rem] lg:text-[30px] lg:w-[80%]">
              “We pride ourselves on our attention to detail and our ability to
              anticipate your needs. Our personalized approach means that we get
              to know you and your preferences, allowing us to deliver tailored
              solutions that exceed your expectations.”
            </p>
            <p className="text-[#BF6944] text-[40px] text-center font-dynalight sm:text-[45px] md:text-[50px] lg:leading-none lg:text-[90px] lg:ml-[-8.5rem]">
              Signature of Excellence!
            </p>
          </div>
        </div>
      </section>
      <section className=" w-full py-10 px-[2rem] md:py-20 md:px-[4rem] lg:px-[7rem]">
        <div className=" flex flex-col w-full h-full md:flex-row md:items-center">
          <div
            style={{ boxShadow: "5px 4px 24.3px 10px rgba(0, 0, 0, 0.1)" }}
            className="w-full bg-[#FFFFFF] order-2 px-4 py-4 md:order-1 md:w-[50%] lg:w-[50%]"
          >
            <div className="border-2 border-dashed border-[#B5955C] p-4">
              <h6 className="text-[#AC863A] text-center text-[18px] font-outfit font-semi-bold md:text-left md:text-[20px]">
                At Elite Concierge
              </h6>
              <h4 className="uppercase font-outfit mt-4 font-semi-bold  text-center text-[16px] leading-[-1] md:text-left md:leading-[1] md:text-[24px] mt-2 lg:w-[100%] lg:text-[30px]">
                We understand that time is your most valuable asset
              </h4>
              <p className="font-outfit text-[15px] text-[#757272] mt-3 text-center leading-[-1] md:text-left lg:text-[22px] lg:leading-[1] ">
                Whether you need assistance with travel arrangements, event
                planning, or everyday tasks, our goal is to make your life
                easier and more enjoyable. Our extensive network of trusted
                partners ensures that we can deliver unparalleled services, from
                securing last-minute reservations at exclusive restaurants to
                arranging private tours and luxury transportation.
              </p>
              <div className="mt-4 flex justify-center md:justify-start">
                <button className="text-[#ffffff] bg-[#CC9933] px-4 py-2 rounded-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="w-full order-1 md:order-2 z-[-1] md:ml-[-4rem] md:w-[60%] lg:w-[60%]">
            <img
              className="w-full h-full object-cover"
              src={Secondabt}
              alt="first image"
            />
          </div>
        </div>
      </section>
      <section className=" w-full py-10 px-[2rem] md:py-20 md:px-[4rem] lg:px-[7rem]">
        <div className=" flex flex-col w-full h-full md:flex-row md:items-center">
          <div
            style={{ boxShadow: "5px 4px 24.3px 10px rgba(0, 0, 0, 0.1)" }}
            className="w-full bg-[#FFFFFF] order-2 px-4 py-4  md:w-[50%] lg:w-[50%]"
          >
            <div className="border-2 border-dashed border-[#B5955C] p-4">
              <h6 className="text-[#AC863A] text-center text-[18px] font-outfit font-semi-bold md:text-left md:text-[20px]">
                Choose Elite Concierge
              </h6>
              <h4 className="uppercase font-outfit mt-4 font-semi-bold  text-center text-[16px] leading-[-1] md:text-left md:leading-[1] md:text-[24px] mt-2 lg:w-[100%] lg:text-[30px]">
                for a service that goes beyond the ordinary
              </h4>
              <p className="font-outfit text-[16px] text-[#757272] mt-3 text-center leading-[-1] md:text-left lg:text-[22px] lg:leading-[1] ">
                Experience the luxury of having a dedicated team at your
                fingertips, ready to assist you with whatever you need, whenever
                you need it. Let us handle the details, so you can focus on what
                truly matters.
              </p>
              <p className=" uppercase font-bold font-outfit text-[16px] text-[#757272] mt-3 text-center leading-[-1] md:text-left lg:text-[22px] lg:leading-[1] ">
                Welcome to a new standard of concierge service. Welcome to
                Elite Concierge.
              </p>
            </div>
          </div>
          <div className="w-full order-1 z-[-1] md:mr-[-4rem] md:w-[60%] lg:w-[60%]">
            <img
              className="w-full h-full object-cover"
              src={Thirdabt}
              alt="first image"
            />
          </div>
        </div>
      </section>
      <section
        className="bg-cover bg-center h-[370px] px-[2rem] py-[1rem] w-full sm:bg-150 sm:h-full md:px-0 lg:bg-auto "
        style={{ backgroundImage: `url(${Images})` }}
      >
        <div className="font-outfit flex flex-col pt-[4rem] items-center text-[#ffffff]">
          <h2 className="uppercase mt-[-2rem] text-[20px] font-bold md:mt-0 md:text-[32px]">
            join our vendor program
          </h2>
          <p className="text-[15px] mt-3 text-center md:text-[20px] md:w-[80%]">
            At Elite Concierge, we believe that every team member plays a
            crucial role in delivering exceptional experiences to our clients.
            If you are passionate about providing top-notch service, eager to
            grow in a dynamic environment, and ready to be a part of a team that
            values your contributions, then we would love to have you on board.
          </p>
          <button className="inline-flex items-center justify-center mt-3 px-8 py-3 bg-[#AC863A] text-black border-none rounded-none rounded-r-[50px] rounded-l-[50px] font-bold text-sm uppercase cursor-pointer sm:mt-3 sm:mb-3 md:mt-3 md:mb-3 lg:mt-4 lg:mb-4 ">
            Send A Message
            <svg
              width="30"
              height="31"
              viewBox="0 0 50 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2" /* Add margin-left to the SVG */
            >
              <path
                d="M25 13L22.7656 15.1766L31.4844 23.9375H12.5V27.0625H31.4844L22.7656 35.7703L25 38L37.5 25.5L25 13Z"
                fill="black"
              />
              <path
                d="M25 47.375C20.6735 47.375 16.4442 46.0921 12.8469 43.6884C9.24959 41.2848 6.44581 37.8683 4.79014 33.8712C3.13448 29.8741 2.70128 25.4757 3.54533 21.2324C4.38938 16.9891 6.47277 13.0913 9.53205 10.032C12.5913 6.97277 16.4891 4.88938 20.7324 4.04533C24.9757 3.20128 29.3741 3.63448 33.3712 5.29014C37.3683 6.94581 40.7848 9.74959 43.1884 13.3469C45.5921 16.9442 46.875 21.1735 46.875 25.5C46.8684 31.2996 44.5616 36.8597 40.4607 40.9607C36.3597 45.0616 30.7996 47.3684 25 47.375ZM25 6.75001C21.2916 6.75001 17.6665 7.84968 14.5831 9.90995C11.4996 11.9702 9.09641 14.8986 7.67727 18.3247C6.25813 21.7508 5.88681 25.5208 6.61029 29.158C7.33376 32.7951 9.11952 36.136 11.7418 38.7583C14.364 41.3805 17.7049 43.1663 21.3421 43.8897C24.9792 44.6132 28.7492 44.2419 32.1753 42.8228C35.6014 41.4036 38.5298 39.0004 40.5901 35.917C42.6503 32.8335 43.75 29.2084 43.75 25.5C43.7442 20.529 41.7669 15.7632 38.2519 12.2482C34.7368 8.7331 29.971 6.7558 25 6.75001Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default About;
