import React from "react";
import { categories } from "../data";
import CategoriesCard from "./CategoriesCard";

function Categories() {
  return (
    <section className="lg:mx-[4%] mx-4 mb-[5rem]">
      <div className="mb-8 font-outfit font-semibold  lg:ml-[5rem] ml-0 lg:text-left text-center text-[1.5rem] lg:text-[2rem]">
        <span className="text-[#CC9933] ">CATEGORIES </span>
        <span>OF OUR SERVICES</span>
      </div>
      <div className="flex lg:flex-row flex-wrap flex-col lg:justify-around items-center gap-[2rem] lg:gap-0">
        {categories.map((service, index) => (
          <CategoriesCard
            key={index}
            img={service.img}
            header={service.header}
            title={service.title}
            body={service.body}
          />
        ))}
      </div>
    </section>
  );
}

export default Categories;
