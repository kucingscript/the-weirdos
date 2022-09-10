import React from "react";
import Accordion from "./Accordion";

function Faq() {
  return (
    <section
      name="faq"
      className="bg-primary text-white w-full max-w-h-screen relative flex flex-col md:items-center md:justify-center md:h-screen"
    >
      {/* container */}
      <h1 className="text-3xl font-bold py-6 text-center md:py-0 md:text-4xl md:tracking-wider">
        FAQ
      </h1>
      <div className="container flex flex-col md:flex-row justify-between md:space-x-28">
        <div className="w-full px-8 md:px-0 md:w-1/2">
          <Accordion
            title={"WHERE CAN I VIEW MY NFTS?"}
            children={
              "Once minted or bought simply connect to your OpenSea account to view your NFTs."
            }
          />
          <Accordion
            title={"WHAT IS THE METAVERSE?"}
            children={
              "A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets."
            }
          />
          <Accordion
            title={"WHY DO WE NEED ROYALTIES?"}
            children={
              "The amount of royalties was fixed at 5% to finance the Weirdos Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests."
            }
          />
        </div>
        <div className="w-full px-8 -mt-12 md:px-0 md:w-1/2 md:-mt-0">
          <Accordion
            title={"HOW CAN I USE MY NFT?"}
            children={
              "You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs."
            }
          />
          <Accordion
            title={"WHAT ARE THE WEIRDOS?"}
            children={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in."
            }
          />
          <Accordion
            title={"WHAT IS THE FUSION PROCESS?"}
            children={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem, maxime, similique neque minus aliquam dolore doloremque laboriosam, facilis quibusdam unde sint officia."
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Faq;
