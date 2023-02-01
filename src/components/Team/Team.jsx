import { dataTeam } from "../data/";
import MemberComponent from "./MemberComponent";
import ConfettiComponent from "./ConfettiComponent";

function Team() {
  return (
    <section
      name="team"
      className="w-full min-h-screen bg-white relative flex justify-center pb-4 overflow-hidden"
    >
      <ConfettiComponent />
      <div className="container w-full h-full text-center">
        <h1 className="text-3xl font-bold pt-6 md:text-4xl md:tracking-wider">
          Team
        </h1>
        <div className="flex justify-center items-center flex-wrap md:justify-between">
          {dataTeam.map((data, index) => {
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
