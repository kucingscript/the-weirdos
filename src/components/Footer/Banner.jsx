import { useState } from "react";
import { dataBanner } from "../data/";

function Banner() {
  const [datas, setDatas] = useState(dataBanner);

  return (
    <section className="w-full h-60 bg-primary/90 text-white flex justify-center items-center flex-col overflow-hidden md:h-[25rem] md:flex-row">
      {/* Banner Container */}
      <div className="w-full opacity-20 flex justify-center items-center absolute">
        {/* Image  */}
        {datas.map((data, index) => {
          return (
            <img
              src={data.imgUrl}
              alt="The Weirdos"
              className="w-32 md:w-60"
              key={index}
            />
          );
        })}
      </div>
      {/* Title */}
      <h1 className="w-full text-3xl px-6 text-center font-bold z-10 md:px-0 md:pt-0 md:text-6xl md:tracking-wider">
        Join the Weirdos Club
      </h1>
    </section>
  );
}

export default Banner;
