import React from "react";

function ServiceColumn({ services, marginTop }) {
  return (
    <div className={`flex flex-col gap-4 ${marginTop}`}>
      {services.map((service, index) => (
        <div
          key={index}
          className={`border border-[#CC9933] p-4 ${service.width}`}
        >
          <h3 className="font-outfit text-[28px] md:text-[32px] leading-[1.1] text-[#FFF3DC]">
            {service.title}
          </h3>
          <p className="font-lato text-[20px] underline text-[#CC9933]">
            Learn More
          </p>
        </div>
      ))}
    </div>
  );
}

export default ServiceColumn;
