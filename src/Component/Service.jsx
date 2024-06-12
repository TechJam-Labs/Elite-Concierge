import React from "react";
import NavigationBar from "./NavigationBar";
import servicebg from "../assets/services.png";
import Footer from "./Footer";
import Travel from "./Travel";
import Lifestyle from "./Lifestyle";
import Hospitality from "./Hospitality";
import Shopping from "./Shopping";
import Process from "./Process";
import Categories from "./Categories";

function Service() {
  return (
    <>
      <nav
        className="bg-[#000000CC] bg-cover bg-no-repeat bg-center pb-[7.5rem]"
        style={{ backgroundImage: `url(${servicebg})` }}
      >
        <NavigationBar />
        <h1 className="text-[#FFFFFF] font-outfit text-[3rem] textfont-semibold text ml-[7.5rem] mt-[5rem]">
          OUR SERVICES
        </h1>
      </nav>
      <Travel />
      <Lifestyle />
      <Hospitality />
      <Shopping />
      <Process />
      <Categories />
      <Footer />
    </>
  );
}

export default Service;
