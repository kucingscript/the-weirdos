import Typewriter from "typewriter-effect";
import Button from "../Button/Button";

function TypeWriterText() {
  return (
    <div className="w-[80%] text-center md:text-left">
      <h1 className="text-3xl capitalize text-primary font-bold md:tracking-wider md:text-4xl">
        Discover a new era of cool{" "}
        <div className="tracking-normal text-2xl uppercase logo-font pb-2 md:text-3xl">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`<span class="text-blue-600">NFTs.</span>`)
                .pauseFor(2000)
                .deleteAll()
                .typeString(
                  `<span class="text-yellow-400">collectible items.</span>`
                )
                .pauseFor(2000)
                .deleteAll()
                .typeString(`<span class="text-red-500">ape killers!</span>`)
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>
      </h1>
      <p className="capitalize text-primary opacity-70 text-md font-bold tracking-tighter mb-2 md:font-lg">
        Bored of apes? try something new
      </p>
      <Button text={"Explore"} link={"about"} />
    </div>
  );
}

export default TypeWriterText;
