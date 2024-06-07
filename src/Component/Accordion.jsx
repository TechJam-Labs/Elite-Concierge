import { useState } from "react";
import Arrowsvg from "../assets/arrowdown.svg";
function Accordion({ content, topic }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      onClick={toggleAccordion}
      className="w-full border mb-4 rounded-lg overflow-hidden cursor-pointer"
    >
      <div
        className={`pl-5 py-2 flex items-center justify-between ${
          isOpen ? "bg-[#AC863A]" : "bg-[#E8D6B2]"
        }`}
      >
        <div className="flex items-center gap-2">
          <button>{isOpen ? "" : <img src={Arrowsvg} alt="arrow" />}</button>
          <h2 className="text-[14px] font-outfit  md:text-[20px] md:pl-4">
            {topic}
          </h2>
        </div>
        {/* <button>
          {isOpen ? (
            <img style={{ width: "50px" }} src={Dropup} alt="up" />
          ) : (
            <img style={{ width: "50px" }} src={Dropdown} alt="down" />
          )}
        </button> */}
      </div>
      {isOpen && (
        <div
          style={{ borderBottom: "3px solid #AC863A " }}
          className="px-10 py-4"
        >
          <ul className="list-disc font-body">
            {content.map((item, index) => (
              <li key={index} className="text-[15px] mt-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Accordion;
