import React from "react";
import TypeWriterText from "./TypeWriterText";
import Video from "./Video";

function Home() {
  return (
    <section
      name="home"
      className="w-full h-screen relative overflow-hidden md:h-[90vh]"
    >
      {/* Container */}
      <div className="container flex justify-center items-center flex-col-reverse first:mt-2 md:flex-row md:first:mt-0">
        {/* Left side */}
        <div className="flex flex-col w-full justify-center items-center md:w-1/2">
          <TypeWriterText />
        </div>
        {/* Right side */}
        <div className="flex flex-col w-full justify-center items-center py-6 md:w-1/2 md:py-0">
          <Video />
        </div>
      </div>
    </section>
  );
}

export default Home;
