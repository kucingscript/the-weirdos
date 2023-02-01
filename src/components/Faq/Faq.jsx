import { useLayoutEffect, useRef } from "react";
import Accordion from "./Accordion";
import { dataFaq } from "../data/";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Faq() {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section
      ref={ref}
      name="faq"
      className="bg-primary text-white w-full h-screen relative flex flex-col md:items-center md:justify-center"
    >
      <h1 className="text-3xl font-bold pt-12 text-center md:pt-0 md:text-4xl md:tracking-wider">
        FAQ
      </h1>
      <div className="container flex flex-col md:flex-row justify-between md:space-x-28">
        <div className="w-full px-8 md:px-0 md:w-1/2">
          {dataFaq[0].map((faq, index) => {
            return (
              <Accordion
                title={faq.title}
                children={faq.children}
                key={index}
              />
            );
          })}
        </div>

        <div className="w-full px-8 -mt-12 md:px-0 md:w-1/2 md:-mt-0">
          {dataFaq[1].map((faq, index) => {
            return (
              <Accordion
                title={faq.title}
                children={faq.children}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
