import React from "react";
import NavigationBar from "./NavigationBar";
import Heroimg from "../assets/hero.png";
import Messagesvg from "../assets/message.svg";
import Hospitalsvg from "../assets/hospitality.svg";
import Lifestylesvg from "../assets/lifestyle.svg";
import Shoppingsvg from "../assets/shopping.svg";
import Additionalsvg from "../assets/additional.svg";
import Cityimg from "../assets/city.png";
import Exclamationsvg from "../assets/exclamation.svg";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";
import Accordion from "./Accordion";
import Service from "../assets/services.png";
import Circle from "../assets/circle.svg";
import Footer from "./Footer";
import ServiceColumn from "./ServiceColumn";

function HomePage() {
  const travelItems = [
    {
      imgSrc: Messagesvg,
      title: "TRAVEL & LEISURE",
      subtitle: "Let's Plan it",
    },
    {
      imgSrc: Hospitalsvg,
      title: "HOSPITALITY",
      subtitle: "Lets Handle it",
    },
    {
      imgSrc: Lifestylesvg,
      title: "LIFESTYLE",
      subtitle: "Lets Plan it",
    },
    {
      imgSrc: Shoppingsvg,
      title: "SHOPPING",
      subtitle: " Lets Curate it",
    },
  ];

  const blog = [
    {
      imgSrc: Blog1,
      title: "A new resort has been opened in bahamas",
      linkText: "Continue reading",
    },
    {
      imgSrc: Blog3,
      title: "Get a virtual tour of A new villa at Monaco Now",
      linkText: "Click to watch Video",
    },
    {
      imgSrc: Blog2,
      title:
        "Check out the latest spot people are visiting all around the world.",
      linkText: "Continue reading",
    },
  ];
  const items = [
    {
      title: "Customized Solutions:",
      description:
        "Receive services specifically designed to match your individual requirements.",
    },
    {
      title: "Exclusive Benefits:",
      description:
        "Enjoy special perks and privileges as part of our dedicated client base.",
    },
    {
      title: "24/7 Support:",
      description:
        "Access round-the-clock assistance for any queries or concerns.",
    },
    {
      title: "Expert Guidance:",
      description:
        "Benefit from the expertise of our highly trained professionals.",
    },
    {
      title: "Flexible Options:",
      description:
        "Choose from a range of services that adapt to your lifestyle and schedule.",
    },
    {
      title: "Premium Quality:",
      description: "Experience top-notch quality in every service we provide.",
    },
  ];
  return (
    <>
      <NavigationBar />
      <section>
        <div className="overflow-hidden w-full relative mt-[-138px] z-[-15] ">
          {/* hero image for shero section  */}
          <img
            className="h-[350px] w-full object-cover sm:h-[450px] md:h-[550px] lg:h-full"
            src={Heroimg}
            alt="heroimage"
          />
          {/* overlay container */}
          <div className="absolute  inset-0 bg-[#000] opacity-80"></div>

          {/* hero section content */}

          <div className="absolute top-[33%] px-[3rem] w-[100%] flex justify-center md:top-[30%] lg:top-[30%]">
            <div className="text-center">
              <p className=" text-[16px] font-outfit text-[#EADEDE] md:text-[30px] lg:text-[40px]  ">
                Time is the ultimate luxury!
              </p>
              <p className="font-outfit text-[16px] leading-none text-[#EADEDE] md:text-[30px] lg:w-[700px] lg:text-[40px] lg:mt-[-0.7rem]">
                Imagine if you could create more of it... by making the most of
                it
              </p>
              {/* call to action button CTA */}
              <button className="px-4 py-2 font-bold shadow-bottom tracking-6px font-outfit mt-[2.5rem] cursor-pointer rounded-lg bg-[#0E0E0D] text-[#FFFFFF] text-[16px] sm:mt-[4.5rem] md:mt-[6.5rem] lg:mt-[14.5rem] lg:py-4 lg:px-6 lg:text-[20px]">
                Find Out More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* service section displayed in cards  */}
      <section className=" px-[2rem] relative sm:px-[6rem] md:px-[9rem] lg:px-[12rem]">
        <div className="w-full bg-[#ffffff] shadow-card mb-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 items-center z-30 mt-[-4rem]">
          {travelItems.map((item, index) => (
            <div
              key={index}
              className={`px-4 py-4 flex items-center gap-2 md:flex-col ${
                index !== travelItems.length - 1
                  ? "border-r border-[#DEB41F] border-b border-[#DEB41F] lg:border-r border-[#DEB41F] md:border-b-0 lg:border-b-0"
                  : ""
              }`}
              style={{ zIndex: index === 2 ? 1 : "auto", position: "relative" }}
            >
              <img className="w-[20px] md:w-[50px]" src={item.imgSrc} alt="" />
              <div>
                <h4
                  style={{ color: index === 2 ? "black" : " #4B3307CC" }}
                  className="font-roboto font-bold text-[12px] sm:text-[16px] md:text-[14px] lg:text-[24px] "
                >
                  {item.title}
                </h4>
                <h6
                  style={{ color: index === 2 ? "black" : "#4B3307CC" }}
                  className="font-roboto font-semi-bold mt-[-0.45rem] text-[14px] lg:text-[20px] "
                >
                  {item.subtitle}
                </h6>
              </div>
              {index === 2 && (
                <>
                  <div className="flex px-4 gap-2 items-center absolute inset-0 bg-[#AC863A] z-0 h-[125%] top-[-14%] md:flex-col md:gap-0 md:items-center justify-center md:px-0 ">
                    <img
                      className="w-[30px] md:w-[50px]"
                      src={item.imgSrc}
                      alt=""
                    />
                    <div>
                      <h4 className="font-roboto font-bold text-[16px] sm:text-[16px] md:text-[14px] lg:text-[24px] ">
                        {item.title}
                      </h4>
                      <h6 className="font-roboto font-semi-bold mt-[-0.45rem] text-[14px] lg:text-[20px] ">
                        {item.subtitle}
                      </h6>
                    </div>
                    <img
                      className=" w-[30px] md:w-[50px] md:block"
                      src={Additionalsvg}
                      alt="Additional SVG"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* writeup section  */}
      <section className="px-[2rem] mt-[5rem] lg:px-[12rem]">
        <div className="w-full mb-8  flex flex-col items-center text-center  ">
          <img src={Exclamationsvg} alt="exc svg" />
          <p className="font-outfit text-[22px] mt-[0.9rem] lg:text-[24px]">
            Twenty years from now you will be more disappointed by the things
            you didn’t do than by the ones you did do. So throw off the
            bowlines. Sail away from the safe harbor. Catch the trade winds in
            your sails.{" "}
            <span className="font-semibold underline">
              Explore. Dream. Discover
            </span>
          </p>
          <p className="text-[#AC863A] mt-2 font-semibold font-outfit text-[22px]">
            ― Mark Twain
          </p>
        </div>
      </section>

      {/* ESSENCE OF ELITE CONCIERGE section  */}
      <section className="px-[2rem] mt-[3rem] lg:px-[12rem]">
        <div className="w-full md:flex md:gap-[4%] ">
          <div className="w-full mt-14 md:w-[50%]">
            <h4 className="uppercase font-outfit font-bold text-center text-[20px] md:text-[22px] md:flex md:text-left md:justify-end lg:text-[30px]">
              essence of elite concierge
            </h4>
            <p
              style={{ fontWeight: "100" }}
              className="text-center font-outfit text-[23px] font-extralight leading-tight text-[#000000] md:text-end md:text-[34px]"
            >
              Your personalized gateway to luxury, relaxation & unforgettable
              adventures!
            </p>
            <h6 className="text-center font-bold font-outfit text-[20px] md:text-end lg:text-[16px] ">
              From dream vacations to seamless business trips, our expert team
              ensures every detail is perfect. Indulge in our curated relaxation
              packages designed to rejuvenate your body and soul. Let us handle
              the details of your next event, whether it's a corporate function
              or a private celebration. Experience the essence of true luxury
              with Elite Concierge Services.
            </h6>
          </div>
          <div className=" w-full mt-4 md:w-[45%] md:mt-0 ">
            <img
              className="w-full h-full object-cover"
              src={Cityimg}
              alt="city-image"
            />
          </div>
        </div>
      </section>

      {/* business conceriege section */}

      <section className=" px-[2rem] py-[2rem] mt-6 bg-[#AC863A] md:hidden">
        <div className="text-[#FFFFFF] flex flex-col justify-center">
          <h2 className="text-center uppercase font-lato text-[24px]">
            business concierge
          </h2>
          <p className="text-center font-outfit text-[15px]">
            Streamline your business travel with our expert concierge services.
            From transportation and accommodations to dining and event planning,
            we've got you covered. Enjoy a seamless experience – book now and
            let us take care of the rest!
          </p>
          <button className="px-4 mt-4 uppercase py-2 cursor-pointer rounded-lg text-[#ffffff] border border-[#ffffff] font-normal font-outfit text-[14px] ">
            Talk to a Desdicated Handler
          </button>
        </div>
      </section>

      {/* service section and what we do section */}

      <section className=" w-full relative z-[-15] md:mt-[-1rem] ">
        <div className="hidden md:block custom">
          <svg
            className="hidden"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="overflow-hidden w-full h-[1100px] md:h-full">
          <img
            className="h-full w-full z-[-30] object-cover md:mt-[-4rem] "
            src={Service}
            alt="serviceimage"
          />
          <div className=" text-[#ffffff] absolute top-[5%] inset-0 md:top-[25%] md:px-[6rem]">
            <div className="text-center">
              <h2 className="font-outfit text-[24px] font-bold uppercase  md:text-[36px]">
                Our services
              </h2>
            </div>
            <div className="w-full px-[2rem] md:px-0 md:flex md:justify-end pt-4">
              {/* <div className="w-[50%]"></div> */}
              <div className=" w-full md:w-[50%] md:flex md:gap-4">
                <ServiceColumn
                  services={[
                    { title: "Travel & Leisure", width: "w-full" },
                    { title: "Hospitality", width: "md:w-[70%] md:ml-[5rem]" },
                  ]}
                  marginTop="md:mt-[2.3rem]"
                />
                <ServiceColumn
                  services={[
                    { title: "Lifestyle Management", width: "md:w-[80%]" },
                    { title: "Personal Shopping", width: "md:w-[80%]" },
                  ]}
                  marginTop="mt-[1rem] md:mt-[-2rem]"
                />
              </div>
            </div>
          </div>
          {/* <div className="absolute inset-0 bg-[#000] opacity-80"></div> */}
        </div>
        <div className=" text-[#F8EEEE]  absolute bottom-[5%] md:bottom-[10%] px-[2rem] font-outfit md:flex md:px-[8rem]  ">
          <h3 className="text-center text-[#F8E6C3] font-outfit uppercase font-bold text-[24px] md:text-[35px] md:mb-0 md:-rotate-90  ">
            with us you get...
          </h3>
          <div
            style={{ borderLeft: "2px solid #FFFEF8" }}
            className="flex flex-col gap-2 pl-2 md:ml-[-19rem]"
          >
            {items.map(({ title, description }) => (
              <div key={title}>
                <h6 className="font-bold">{title}</h6>
                <p className=" w-[90%] md:w-[60%] leading-[1]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* eclipse section */}
      <section className=" flex justify-center bg-[#F5F5F5]">
        <div className="z-30 mt-[-3rem] bg-white p-2 rounded-full">
          <img src={Circle} alt="circle" />
        </div>
      </section>

      {/* Blog section */}
      <section className="px-[2rem] pb-[0.1rem] pt-[3rem] bg-[#F5F5F5] md:px-[5rem]">
        <h4 className="font-outfit text-[30px] font-bold">wackiTravels BLOG</h4>
        <h6 className="font-outfit text-[12px] text-[#604516]">
          TRAVEL JOURNAL | NEWS & UPDATES | TIPS
        </h6>

        <div className=" w-full mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {blog.map((item, index) => (
            <div key={index} className={`flex flex-col  py-4 md:px-4`}>
              <img src={item.imgSrc} alt={item.title} className="mb-4" />
              <h4 className="leading-tight font-thin font-lato ml-2 text-[16px] text-[#23103A] w-[70%]">
                {item.title}
              </h4>
              <a
                href={item.link}
                className="underline mt-2 ml-2 font-lato cursor-pointer text-[22px] text-[#CC9933]"
              >
                {item.linkText}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Faqs section */}
      <section className="px-[2rem] pt-[2rem] md:px-[5rem] md:pb-[5rem] md:pt-[5rem]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="col-span-1  lg:col-span-2">
            <h6 className="font-outfit text-[20px] text-center md:text-left ">
              FAQs
            </h6>
            <h4 className="font-outfit text-[22px] font-bold text-center leading-[1] mb-[0.5rem] md:text-left md:text-[48px] md:font-normal">
              Frequently Asked Questions
            </h4>
            <h6 className="text-[14px] font-semi-bold text-center mb-[0.8rem] md:text-start md:w-[90%] md:text-[20px] md:font-normal">
              Checkout the questions that are mostly asked by the clients and
              intending Customers
            </h6>
            <div className="flex justify-center md:justify-start">
              <button className="px-4 py-2 cursor-pointer rounded-lg text-[black] border border-black font-normal font-outfit text-[18px] md:px-6">
                Contact Us
              </button>
            </div>
          </div>
          <div className="col-span-1 md:px-4 lg:col-span-3 ">
            <Accordion
              topic="What Payment Plan does Elite concierge support? "
              content={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
              ]}
            />
            <Accordion
              topic="Do you "
              content={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
              ]}
            />
            <Accordion
              topic="What Payment Plan does Elite concierge support? "
              content={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
              ]}
            />
            <Accordion
              topic="What Payment Plan does Elite concierge support? "
              content={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
              ]}
            />
          </div>
        </div>
      </section>

      {/* newletter section */}
      <section className="px-[2rem] flex justify-center bg-[#FCF5E7] py-[2rem] md:py-[4rem] md:px-0 ">
        <div className="text-center">
          <h4 className="font-lato font-bold text-[24px] md:text-[32px]">
            Join Our Newsletter
          </h4>
          <h6 className="font-outfit font-semi-bold text-[14px] md:text-[16px]">
            Join our mailing list for humorous travel tips & hacks, discount
            offers & more! ️
          </h6>
          <h6 className="font-outfit font-semi-bold text-[14px] md:text-[16px]">
            Share your wacky travel moments with #FunnyTravel with our exciting
            travel community!
          </h6>
          <div className="flex mt-[1.5rem]">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 border border-gray-300 rounded-l-full outline-none"
            />
            <button className="bg-[#AC863A] font-outfit text-[14px] text-black py-3 px-4 font-semi-bold rounded-r-full md:text-[20px] md:px-6">
              JOIN NOW
            </button>
          </div>
        </div>
      </section>

      {/* footer component displaying footwe section  */}
      <Footer />
    </>
  );
}

export default HomePage;
