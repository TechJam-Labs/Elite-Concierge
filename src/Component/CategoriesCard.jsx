import React from "react";

function CategoriesCard({ img, header, title, body }) {
  return (
    <div>
      <div
        className="flex justify-start items-end rounded-[1.25rem] border-none w-[25rem] h-[29rem]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "contain",
        }}
      >
        <div className="text-white pb-[4.8rem] pl-4 pt-4 bg-[#00000080] w-full rounded-[1.25rem]">
          <p className="font-outfit font-semibold text-[1.5rem]">{header}</p>
          <p>{title}</p>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}

export default CategoriesCard;
