import { dataShowcase1, dataShowcase2 } from "../data/dataImages";

import Eth from "../../assets/Nfts/Ethereum.svg";

// NFT component
const NftItem = ({ img, number = 0, prices = 0 }) => {
  return (
    // Img Container
    <div className="w-40 mx-4 bg-white rounded-xl cursor-pointer md:w-60">
      <img src={img} alt="The Weirdos" className="w-full" />

      {/* Details */}
      <div className="flex justify-between py-3 px-4 bg-primary border-2 border-white/50 rounded-bl-xl rounded-br-xl ">
        <div>
          <span className="text-xs text-white/50 leading-6 font-bold md:text-sm">
            Weirdos
          </span>
          <br />
          <h1 className="text-sm text-white font-bold md:text-md">#{number}</h1>
        </div>

        <div>
          <span className="text-xs text-white/50 leading-6 font-bold md:text-sm">
            Price
          </span>
          <div className="flex justify-start items-center">
            <img src={Eth} alt="Ethereum" className="w-4" />
            <h1 className="text-sm text-white font-bold md:text-md">
              {Number(prices).toFixed(1)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

function Showcase() {
  return (
    <section
      name="showcase"
      className="w-full max-w-h-screen relative bg-primary flex flex-col justify-center items-center overflow-hidden"
    >
      {/* container up */}
      <div className="whitespace-nowrap my-8 flex animate-[move_20s_linear_infinite_none]">
        {/* Showcase Item */}
        {dataShowcase1.map((item, index) => {
          return (
            <NftItem
              img={item.imgUrl}
              r
              number={item.name}
              prices={item.price}
              key={index}
            />
          );
        })}
      </div>

      {/* container down */}
      <div className="whitespace-nowrap my-8 flex animate-[move_15s_linear_infinite_reverse]">
        {/* Showcase Item */}
        {dataShowcase2.map((item, index) => {
          return (
            <NftItem
              img={item.imgUrl}
              number={item.name}
              prices={item.price}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Showcase;
