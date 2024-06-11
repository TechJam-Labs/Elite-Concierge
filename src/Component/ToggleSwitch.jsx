import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex items-center justify-center space-x-3 bg-[#F5F0E4] w-full p-2 font-outfit cursor-pointer">
      <div
        className={`relative inline-block w-16 h-8 transition duration-200 ease-linear rounded-full ${
          isToggled ? "bg-[#AC863A]" : "bg-gray-400"
        }`}
        onClick={handleToggle}
      >
        <span
          className={`absolute left-1 top-1 inline-block w-6 h-6 transform transition duration-100 ease-linear bg-white rounded-full shadow ${
            isToggled ? "translate-x-8" : ""
          }`}
        ></span>
      </div>
      <span className="text-xl font-outfit text-[#333333]">
        {isToggled ? "Yes" : "No"}
      </span>
    </div>
  );
};

export default ToggleSwitch;
