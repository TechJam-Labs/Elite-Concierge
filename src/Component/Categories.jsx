import React from "react";
import { categories } from "../data";
import CategoriesCard from "./CategoriesCard";

function Categories() {
  return (
    <section className="px-[4%] mb-[5rem]">
      <div className="mb-8 font-outfit font-semibold text-[2rem] ml-[5rem]">
        <span className="text-[#CC9933] ">CATEGORIES </span>
        <span>OF OUR SERVICES</span>
      </div>
      <div className="flex justify-around items-center ">
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
