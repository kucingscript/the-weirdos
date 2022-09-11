import React from "react";
import { TbArrowBottomCircle } from "react-icons/tb";
import { Link } from "react-scroll";

function ScrollToTop() {
  return (
    <div className="w-12 h-12 text-primary bg-white text-2xl fixed right-4 bottom-4 cursor-pointer flex justify-center items-center rounded-full rotate-180 hover:scale-110 active:scale-90 transition-all duration-200 ease-in">
      <Link to="home" duration={500} smooth={true}>
        <TbArrowBottomCircle />
      </Link>
    </div>
  );
}

export default ScrollToTop;
