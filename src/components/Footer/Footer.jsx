import React from "react";
import Banner from "./Banner";
import Logo from "../Navbar/Logo";

import { Link } from "react-scroll";

import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  const lists = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Team", link: "team" },
    { name: "Showcase", link: "showcase" },
    { name: "Faq", link: "faq" },
  ];

  const socialMedia = [
    { item: <FaGithub />, link: "https://github.com/rasyidzkun/" },
    {
      item: <FaFacebookF />,
      link: "https://www.facebook.com/RasyidzScreamo.221016/",
    },
    { item: <FaInstagram />, link: "https://www.instagram.com/kucingscript/" },
    { item: <SiGmail />, link: "mailto:kucingscript@gmail.com" },
  ];

  return (
    <footer
      name="footer"
      className="w-full max-w-h-screen bg-white text-primary relative flex flex-col overflow-hidden"
    >
      <Banner />

      {/* Container */}
      <div className="container w-full py-4 flex justify-between items-center border-b-2 border-primary md:py-6">
        {/* Left Side */}
        <div className="flex-col text-center mx-auto md:text-left md:mx-0">
          <Logo />
          <div className="flex items-center mx-auto space-x-4 my-4">
            {/* Social Media */}
            {socialMedia.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.link}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  className="hover:scale-125 transition-all duration-200 ease-in text-2xl"
                >
                  {item.item}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Side */}
        <ul className="w-1/2 grid-cols-2 gap-4 text-sm hidden md:grid">
          {lists.map((list, index) => {
            return (
              <Link key={index} to={list.link} duration={500} smooth={true}>
                <li className="cursor-pointer w-fit after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-200 after:ease-in hover:after:w-full">
                  {list.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      {/* copyright */}
      <div className="container flex flex-col justify-between items-center text-xs pt-4 pb-12 md:flex-row md:text-sm">
        <span>
          &copy; {new Date().getFullYear()} Weirdos Club. All rights reserved.
        </span>
        <span>
          Made with
          <span className="text-red-500"> &#10084;</span> by Kucingscript
        </span>
      </div>
    </footer>
  );
}

export default Footer;
