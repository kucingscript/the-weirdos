import React, { useLayoutEffect, useRef, useState } from "react";
import Accordion from "./Accordion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { dataFaq1, dataFaq2 } from "../data/dataFaq";

function Faq() {
  const [faq1, setFaq1] = useState(dataFaq1);
  const [faq2, setFaq2] = useState(dataFaq2);

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
      className="bg-primary text-white w-full max-w-h-screen relative flex flex-col md:items-center md:justify-center md:h-screen"
    >
      {/* container */}
      <h1 className="text-3xl font-bold pt-12 text-center md:pt-0 md:text-4xl md:tracking-wider">
        FAQ
      </h1>
      <div className="container flex flex-col md:flex-row justify-between md:space-x-28">
        {/* Left Side */}
        <div className="w-full px-8 md:px-0 md:w-1/2">
          {faq1.map((faq, index) => {
            return (
              <Accordion
                title={faq.title}
                children={faq.children}
                key={index}
              />
            );
          })}
        </div>

        {/* Right SIde */}
        <div className="w-full px-8 -mt-12 md:px-0 md:w-1/2 md:-mt-0">
          {faq2.map((faq, index) => {
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
