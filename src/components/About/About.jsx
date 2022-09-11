import React from "react";
import Carousel from "./Carousel/Carousel";

function About() {
  return (
    <section
      name="about"
      className="w-full h-screen bg-primary flex justify-center items-center relative overflow-hidden"
    >
      <div className="container h-full flex flex-col justify-center items-center md:flex-row">
        {/* Carousel */}
        <div className="flex flex-col w-full justify-center items-center py-6 md:py-0 md:w-1/2">
          <Carousel />
        </div>
        {/* Text */}
        <div className="flex flex-col w-full justify-center items-center md:w-1/2">
          <div className="w-full px-4 text-center text-white md:px-0 md:text-left md:w-[80%]">
            <h1 className="text-2xl capitalize font-bold md:tracking-wider md:text-4xl">
              Welcome To The <br />
              Weirdos Club.
            </h1>
            <p className="text-sm my-6 md:text-md">
              The WEIRDOS CLUB is a private collection of NFTs—unique digital
              collectibles. The Weirdos are stored as ERC-721 tokens on the
              Ethereum blockchain and hosted on IPFS.
            </p>
            <p className="text-xs text-gray-400 md:text-md">
              With more than 200+ hand drawn traits, each NFT is unique and
              comes with a membership to an exclusive group of successful
              investors. Join an ambitious ever-growing community with multiple
              benefits and utilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
