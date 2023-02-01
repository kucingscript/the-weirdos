import { dataShowcase } from "../data/";
import NftItem from "./NftItem";

function Showcase() {
  return (
    <section
      name="showcase"
      className="w-full max-w-h-screen relative bg-primary flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="whitespace-nowrap my-8 flex animate-[move_20s_linear_infinite_none]">
        {dataShowcase[0].map((item, index) => {
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

      <div className="whitespace-nowrap my-8 flex animate-[move_15s_linear_infinite_reverse]">
        {dataShowcase[1].map((item, index) => {
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
