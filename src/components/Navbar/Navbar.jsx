import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import Logo from "./Logo";
import Button from "../Button/Button";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const lists = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Roadmap", link: "roadmap" },
    { name: "Showcase", link: "showcase" },
    { name: "Team", link: "team" },
    { name: "Faq", link: "faq" },
  ];

  return (
    <nav className="w-full bg-white">
      {/* Flex container */}
      <div className="relative container flex justify-between items-center w-[85%] h-20">
        {/* Logo */}
        <div className="z-20 md:z-0">
          <Logo />
        </div>
        <ul className="flex justify-between items-center space-x-6">
          {/* List item */}
          {lists.map((list, index) => {
            return (
              <Link to={list.link} duration={500} smooth={true} key={index}>
                <li className="hidden text-primary cursor-pointer after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-200 after:ease-in hover:after:w-full md:block">
                  {list.name}
                </li>
              </Link>
            );
          })}
        </ul>

        {/* Hamburger */}
        <div
          onClick={handleClick}
          className="cursor-pointer z-20 md:hidden md:z-0"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "fixed top-0 left-0 w-full h-screen z-10 bg-white/[0.8] flex flex-col justify-center items-center backdrop-blur-sm space-y-6"
          }
        >
          {/* List item */}
          {lists.map((list, index) => {
            return (
              <Link
                onClick={handleClick}
                to={list.link}
                duration={500}
                smooth={true}
                key={index}
              >
                <li className="text-primary cursor-pointer">{list.name}</li>
              </Link>
            );
          })}
          <Button text={"Connect Wallet"} />
        </ul>

        {/* Button */}
        <div className="hidden md:block">
          <Button text={"Connect Wallet"} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
