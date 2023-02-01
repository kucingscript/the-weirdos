import Carousel from "./Carousel/Carousel";
import AboutText from "./AboutText";

function About() {
  return (
    <section
      name="about"
      className="w-full h-screen bg-primary flex justify-center items-center relative overflow-hidden"
    >
      <div className="container h-full flex flex-col justify-center items-center md:flex-row">
        <div className="flex flex-col w-full justify-center items-center py-6 md:py-0 md:w-1/2">
          <Carousel />
        </div>
        <div className="flex flex-col w-full justify-center items-center md:w-1/2">
          <div className="w-full px-4 text-center text-white md:px-0 md:text-left md:w-[80%]">
            <AboutText />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
