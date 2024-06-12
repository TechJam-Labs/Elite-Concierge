import React from "react";

function CategoriesCard({ img, header, title, body }) {
  return (
    <div>
      <div
        className="flex lg:justify-start justify-center items-end lg:text-left text-center rounded-[1.25rem] border-none w-[25rem] h-[29rem]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-white lg:pb-[4.8rem] pb-8 pl-4 pt-4 bg-[#00000080] w-full rounded-[1.25rem]">
          <p className="font-outfit font-semibold lg:text-[1.5rem] text-[1.2rem]">
            {header}
          </p>
          <p>{title}</p>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}

export default CategoriesCard;
