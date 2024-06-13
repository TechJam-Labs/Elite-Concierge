import { useState } from "react";
import Arrowsvg from "../assets/arrowdown.svg"; // Assuming arrowdown.svg is for the closed state

function Accordion({ topic, qaList }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mb-4 rounded-lg overflow-hidden cursor-pointer">
      <div
        onClick={toggleAccordion}
        className={`flex items-center justify-between p-4 ${
          isOpen ? "bg-[#AC863A]" : "bg-[#E8D6B2]"
        }`}
        style={{ borderRadius: "2px" }}
      >
        <h2 className="text-[20px] font-outfit font-normal md:text-[22px]">
          {topic}
        </h2>
        <img src={isOpen ? "" : Arrowsvg} alt="" />
      </div>
      {isOpen && (
        <div className="bg-[#F8F7F7] border-b-2 border-b border-[#AC863A]">
          {qaList.map((qa, index) => (
            <div key={index} className="p-4 rounded-lg shadow-sm mb-2">
              <h3
                style={{ boxShadow: "0px 2px 2px 2px #00000026" }}
                className="p-3 text-[16px] bg-[#FDF7EC] font-bold"
              >
                {qa.question}
              </h3>
              <p
                style={{ boxShadow: "0px 1px 2px 2px #0000000F" }}
                className="p-4 text-[16px] bg-white"
              >
                {qa.answer}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Accordion;
