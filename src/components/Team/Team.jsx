import React from "react";

import {
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
} from "../../assets/";
import ConfettiComponent from "./ConfettiComponent";

function Team() {
  // Image Component
  const MemberComponent = ({ img, name = "", position = "" }) => {
    return (
      <div className="w-[calc(20rem - 4vw)] py-4 text-white my-4 mx-4 backdrop-blur-sm z-10 relative border-2 rounded-xl border-primary md:my-6">
        <div className="w-[15rem] mx-3 bg-[#eeedde] rounded-xl border border-primary">
          <img
            src={img}
            alt={name}
            className="w-[90%] mx-auto h-auto hover:-translate-y-8 hover:scale-110 transition-all duration-200 ease-in"
          />
        </div>
        <h2 className="text-xl text-primary font-bold uppercase mt-4">
          {name}
        </h2>
        <div className="text-md text-primary/80 font-semibold capitalize">
          {position}
        </div>
      </div>
    );
  };

  return (
    <section
      name="team"
      className="w-full h-screen bg-white flex justify-center relative"
    >
      <ConfettiComponent />
      {/* Container */}
      <div className="container h-full text-center">
        <h1 className="text-3xl font-bold md:tracking-wider mt-6 md:text-4xl">
          Team
        </h1>
        {/* Item */}
        <div className="flex justify-center items-center flex-wrap md:justify-between">
          <MemberComponent
            img={img2}
            name={"Frankenstein"}
            position={"SEO Specialist"}
          />
          <MemberComponent
            img={img3}
            name={"Cornflake"}
            position={"Network Architect"}
          />
          <MemberComponent
            img={img4}
            name={"Centurion"}
            position={"IT Support"}
          />
          <MemberComponent
            img={img5}
            name={"Snow Cone"}
            position={"System Analyst"}
          />
          <MemberComponent
            img={img6}
            name={"Kraken"}
            position={"Software Developer"}
          />
          <MemberComponent
            img={img7}
            name={"Sentinel"}
            position={"Front-End Developer"}
          />
          <MemberComponent
            img={img8}
            name={"Captian RedBeard"}
            position={"Machine Learning Engineer"}
          />
          <MemberComponent
            img={img9}
            name={"Choco"}
            position={"Database Administrator"}
          />
          <MemberComponent
            img={img10}
            name={"Bullseye"}
            position={"Back-End Developer"}
          />
        </div>
      </div>
    </section>
  );
}

export default Team;
