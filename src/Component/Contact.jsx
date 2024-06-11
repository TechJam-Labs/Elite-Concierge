import React from "react";
import NavigationBar from "./NavigationBar";
import Contactimg from "../assets/contact.png";
import Contactfirst from "../assets/contact1.png";
import Footer from "./Footer";
import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
function Contact() {
  const [displayForm, setDisplayForm] = useState(true);
  const [displaySurvey, setDisplaySurvey] = useState(false);

  const switchHandler = () => {
    setDisplayForm(false);
    setDisplaySurvey(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <NavigationBar />
      <section>
        <div className="w-full relative h-[160px] mt-[-115px] md:h-full md:mt-[-138px]">
          <img
            className="w-full h-full object-cover"
            src={Contactimg}
            alt="aboutimg"
          />
          <div className="absolute inset-0 bg-[#000] opacity-80"></div>
          <div className="absolute top-[70%] px-[2rem] md:top-[65%] md:px-[5rem] lg:px-[7.4rem] lg:top-[65%]">
            <h4 className="font-outfit text-[#ffffff] md:text-[32px] lg:text-[48px]">
              CONTACT US
            </h4>
          </div>
        </div>
      </section>
      <section className=" w-full px-[1rem] py-[2rem] lg:flex lg:items-center lg:gap-[6rem] lg:px-[7rem] ">
        <div
          className={`relative md:order-2 md:w-[90%] ${
            displaySurvey ? "lg:mt-[-55rem]" : "lg:mt-[-28rem]"
          }`}
        >
          <div className="flex justify-end md:w-[90%]">
            <img
              className="md:w-[80%] md:h-full object-cover "
              src={Contactfirst}
              alt=""
            />
          </div>
          <div className=" absolute top-[30%] left-0 bg-[#AC863A]  w-[75%] p-2 text-[#FFFAFA] font-outfit sm:w-[80%] md:w-[65%] lg:w-[65%] ">
            <div className="border border-white p-4">
              <h4 className="text-[13px] sm:text-[15px] md:text-[20px] lg:text-[22px]">
                www.eliteconcierge.vip
              </h4>
              <div className="text-[13px] mt-10 sm:mt-12 sm:text-[15px] md:text-[20px] md:mt-[9rem] lg:mt-[7rem] lg:text-[22px]">
                <h5>Phone: +447903077383</h5>
                <h5>Email: contact@eliteconcierge.vip</h5>
                <h5>128 city road , London, EC1V 2NX, UK </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 md:mt-[8rem] font-outfit md:order-1 lg:w-[50%] flex flex-col md:mt-[8rem] lg:mt-20 lg:items-start">
          <div className="border-b">
            <h4 className="text-[20px] font-bold lg:text-[30px]">
              We’d love to hear from you
            </h4>
            <h6>Our typical response time is 24 hours!</h6>
          </div>
          <div className="mt-6">
            {displayForm && (
              <form>
                <input
                  type="text"
                  placeholder="Fullname"
                  className=" w-full mb-4 px-4 py-2 border border-black rounded-lg focus:outline-none "
                />
                <input
                  type="text"
                  placeholder="Company (if applicable)"
                  className=" w-full mb-4  px-4 py-2 border border-black rounded-lg focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className=" w-full mb-4  px-4 py-2 border border-black rounded-lg focus:outline-none "
                />
                <input
                  type="number"
                  placeholder="Contact Number"
                  className=" w-full mb-4  px-4 py-2 border border-black rounded-lg focus:outline-none  "
                />
                <textarea
                  placeholder="Your Message..."
                  className="w-full h-40 px-4 py-2 border border-black rounded-lg focus:outline-none "
                />

                <div className="font-outfit mt-4">
                  <h4 className="w-full text-[20px] text-[#242222]">
                    Please select the Elite Concierge Service(s) you'd like to
                    know more about:
                  </h4>
                  <label htmlFor className=" mt-4 flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="text-gray-700 text-[18px]">
                      Travel & Liesure
                    </span>
                  </label>
                  <label htmlFor className=" mt-3 flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="text-gray-700 text-[18px]">
                      Hospitality
                    </span>
                  </label>
                  <label htmlFor className=" mt-3 flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="text-gray-700 text-[18px]">
                      Lifestyle Management
                    </span>
                  </label>
                  <label htmlFor className=" mt-3 flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="text-gray-700 text-[18px]">
                      Personal Shopping
                    </span>
                  </label>
                </div>

                <div className="mt-8">
                  <button
                    onClick={switchHandler}
                    className="px-6 py-2 cursor-pointer rounded-lg text-[#272525] border border-[#B5955C] font-normal text-[18px]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
            {displaySurvey && (
              <div
                style={{ borderTop: "3px solid #B5955C" }}
                className="bg-[#F4EDED] w-full p-2 font-outfit"
              >
                <div className="p-2 bg-white rounded-lg shadow-md mt-8 w-full font-outfit">
                  <h2 className="text-[15px] text-center font-outfit w-full font-semibold mb-4 md:text-[17px] ">
                    Are you planning to travel anytime soon?
                  </h2>
                  <ToggleSwitch />
                </div>
                <div className="p-2 bg-white rounded-lg shadow-md mt-4 mx-2 font-outfit">
                  <h2 className="text-[15px] text-center font-outfit font-semibold mb-4 md:text-[17px]">
                    When are you looking at?
                  </h2>
                  <div className="flex gap-2 justify-center mb-6 p-2 bg-[#F5F0E4] md:gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[12px] ">
                        Next Month
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[12px] ">
                        In 3 Months
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[12px]  ">
                        In 6 Months
                      </span>
                    </label>
                  </div>
                  <div className="flex justify-center items-center -mt-2 bg-[#F5F0E4] p-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[13px]">
                        Other (Specify)
                      </span>
                    </label>
                  </div>
                </div>
                <div className="p-2 bg-white rounded-lg shadow-md mt-4 mx-2 font-outfit">
                  <h2 className="text-[15px] text-center font-outfit font-semibold mb-4 md:text-[17px]">
                    What is the purpose of your travel?
                  </h2>
                  <div className="flex gap-2 justify-center mb-6 p-2 bg-[#F5F0E4] md:gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[12px] ">
                        Business
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[13px] ">
                        Liesure
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[13px]  ">
                        Both
                      </span>
                    </label>
                  </div>
                  <div className="flex justify-center items-center -mt-2 bg-[#F5F0E4] p-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[13px]">
                        Other (Specify)
                      </span>
                    </label>
                  </div>
                </div>

                <div className="p-2 bg-white rounded-lg shadow-md mt-4 mx-2 font-outfit">
                  <h2 className="text-[15px] text-center font-outfit font-semibold mb-4 md:text-[17px]">
                    What is the size of your travel party?
                  </h2>
                  <div className="flex gap-2 justify-center mb-2 p-2 bg-[#F5F0E4] md:gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[12px] ">
                        Individual
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer "
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[13px] ">
                        Group
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[13px]  ">
                        Family
                      </span>
                    </label>
                  </div>
                </div>

                <div className="p-2 bg-white rounded-lg shadow-md mt-4 mx-2 font-outfit">
                  <h2 className="text-[15px] text-center font-outfit font-semibold mb-4 md:text-[17px]">
                    What is your travel destination(s)?
                  </h2>
                  <div className="flex justify-center items-center -mt-2 bg-[#F5F0E4] p-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[13px]">
                        List if more than one
                      </span>
                    </label>
                  </div>
                </div>
                <div className="p-2 bg-white rounded-lg shadow-md mt-4 mx-2 font-outfit">
                  <h2 className="text-[15px] text-center font-outfit font-semibold mb-4 md:text-[17px]">
                    Check the services you may require:
                  </h2>
                  <div className="flex justify-center items-center mt-2 bg-[#F5F0E4] p-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[13px]">
                        Visa
                      </span>
                    </label>
                  </div>
                  <div className="flex justify-center items-center mt-2 bg-[#F5F0E4] p-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[13px]">
                        Flight Booking
                      </span>
                    </label>
                  </div>
                  <div className="flex justify-center items-center mt-2 bg-[#F5F0E4] p-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[13px]">
                        Hotel
                      </span>
                    </label>
                  </div>
                  <div className="flex justify-center items-center mt-2 bg-[#F5F0E4] p-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[13px]">
                        Taxi
                      </span>
                    </label>
                  </div>
                  <div className="flex justify-center items-center mt-2 bg-[#F5F0E4] p-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[13px]">
                        Shopping
                      </span>
                    </label>
                  </div>
                  <div className="flex justify-center items-center mt-2 bg-[#F5F0E4] p-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[13px]">
                        Tour Guide
                      </span>
                    </label>
                  </div>
                  <div className="flex justify-center items-center mt-2 bg-[#F5F0E4] p-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 cursor-pointer"
                      />
                      <span className="ml-2 text-[12px] md:text-[16px] lg:text-[13px]">
                        Other(specify)
                      </span>
                    </label>
                  </div>
                </div>
                <div className=" flex justify-center bg-[#22201D] p-2 rounded-md mt-4 mb-4 mx-2 ">
                  <button className="text-[#FEFBF5]">SUBMIT</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
