import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function ServiceColumn({ services, marginTop }) {
  return (
    <div className={`flex flex-col gap-4 ${marginTop}`}>
      {services.map((service, index) => (
        <div
          key={index}
          className={`border border-[#CC9933] p-4 ${service.width}`}
        >
          <h3 className="font-outfit text-[28px] lg:text-[32px] leading-[1.1] text-[#FFF3DC]">
            {service.title}
          </h3>
          <Link
            to={service.link} // Use Link instead of <a> for internal navigation
            className="font-lato text-[20px] underline text-[#CC9933] cursor-pointer hover:text-[#FFD700] transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ServiceColumn;
