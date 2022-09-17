import { useState } from "react";
import { dataTeam } from "../data/dataImages";

import ConfettiComponent from "./ConfettiComponent";

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
      <h2 className="text-xl text-primary font-bold uppercase mt-4">{name}</h2>
      <div className="text-md text-primary/80 font-semibold capitalize">
        {position}
      </div>
    </div>
  );
};

function Team() {
  const [datas, setDatas] = useState(dataTeam);

  return (
    <section
      name="team"
      className="w-full min-h-screen bg-white relative flex justify-center pb-4 overflow-hidden"
    >
      <ConfettiComponent />
      {/* Container */}
      <div className="container w-full h-full text-center">
        <h1 className="text-3xl font-bold pt-6 md:text-4xl md:tracking-wider">
          Team
        </h1>
        {/* Item */}
        <div className="flex justify-center items-center flex-wrap md:justify-between">
          {datas.map((data, index) => {
            return (
              <MemberComponent
                img={data.imgUrl}
                name={data.name}
                position={data.position}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Team;
