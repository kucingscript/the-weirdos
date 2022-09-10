import React, { useState } from "react";

function Accordion({ title, children }) {
  const [collapse, setCollapse] = useState(false);
  const handleClick = () => setCollapse(!collapse);

  return (
    <div className="cursor-pointer p-2 my-12 flex flex-col border-b-2 border-[#eeedde]">
      <div
        onClick={handleClick}
        className="text-sm flex justify-between items-center"
      >
        <span>{title}</span>
        {collapse ? (
          <span className="text-2xl">-</span>
        ) : (
          <span className="text-2xl">+</span>
        )}
      </div>
      <div
        className={
          collapse
            ? "block my-2 text-justify text-white/60 text-sm leading-5"
            : "hidden"
        }
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
