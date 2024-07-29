"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const TitleBG = () => {
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  useEffect(() => {
    const marqueeWidth = marqueeInnerRef.current.offsetWidth;
    gsap.to(marqueeRef.current, {
      x: `-${marqueeWidth}px`,
      duration: 40,
      ease: "linear",
      repeat: -1,
    });
  }, []);
  return (
    <section>
      <div
        ref={marqueeRef}
        className="text-[rgba(217,217,217,0.26)] text-[8.125rem] mt-[2rem] mb-[4rem] sm:mb-0 sm:mt-0 sm:text-[11.375rem] lg:text-[14.375rem]  tracking-[0.575rem] uppercase font-bold leading-[8.125rem] sm:leading-[15.125rem] lg:leading-[21.125rem] whitespace-nowrap select-none container flex"
      >
        <div ref={marqueeInnerRef}>
          MEN O.LOGY&nbsp;MEN O.LOGY&nbsp;MEN O.LOGY&nbsp;MEN
          O.LOGY&nbsp;MEN&nbsp;MEN&nbsp;MEN O.LOGY
        </div>
        <div className="">
          &nbsp;MEN O.LOGY&nbsp;MEN O.LOGY&nbsp;MEN O.LOGY&nbsp;MEN
          O.LOGY&nbsp;MEN&nbsp;MEN &nbsp;
        </div>
      </div>
    </section>
  );
};

export default TitleBG;
