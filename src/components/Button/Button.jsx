import React from "react";
import { Link } from "react-scroll";

function Button({ text, link, hide }) {
  return (
    <Link to={link} duration={500} smooth={true}>
      <button
        className="text-white bg-primary outline-none border-none py-3 px-10 rounded-[50px] cursor-pointer text-sm hover:scale-95 transition duration-300 ease-in md:inline-block"
        type="button"
      >
        {text}
      </button>
    </Link>
  );
}

export default Button;
