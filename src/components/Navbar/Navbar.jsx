import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { navLists } from "../data";

import Logo from "./Logo";
import Button from "../Button/Button";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="w-full bg-white" name="navbar">
      <div className="relative container flex justify-between items-center w-[85%] h-20">
        <div className="z-20 md:z-0">
          <Logo />
        </div>
        <ul className="flex justify-between items-center space-x-6">
          {navLists.map((list, index) => {
            return (
              <Link to={list.link} duration={500} smooth={true} key={index}>
                <li className="hidden text-primary cursor-pointer after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-200 after:ease-in hover:after:w-full md:block">
                  {list.name}
                </li>
              </Link>
            );
          })}
        </ul>

        <div
          onClick={handleClick}
          className="cursor-pointer z-20 md:hidden md:z-0"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
          className={
            !nav
              ? "hidden"
              : "fixed top-0 left-0 w-full h-screen z-10 bg-white/[0.8] flex flex-col justify-center items-center backdrop-blur-sm space-y-6"
          }
        >
          {/* Mobile Nav*/}
          {navLists.map((list, index) => {
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

        <div className="hidden md:block">
          <Button text={"Get Started"} link={"about"} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
