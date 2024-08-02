"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const TitleContent = () => {
  const refMENBanner = useRef(null);
  const handleBgTextAnimation = (ref) => {
    gsap.fromTo(
      ref?.current,
      { width: "0%", duration: 10 },
      { width: "100%", duration: 4, repeat: -1, ease: "linear" }
    );
  };
  useEffect(() => {
    handleBgTextAnimation(refMENBanner);
  }, []);
  return (
    <section className="absolute top-[15%] sm:top-[3.25rem] lg:top-[20%] left-1/2 -translate-x-1/2">
      <div className="uppercase text-[3.75rem] sm:text-[5rem] md:text-[4rem] lg:text-[9.375rem] leading-[5.5625rem] md:leading-[4rem] flex tt_common_bold space-x-[1rem]">
        <div className="relative">
          <div
            ref={refMENBanner}
            className="text-white overflow-hidden pb-2 lg:h-[8rem] lg:-mt-[1.6rem] lg:pt-[1.6rem]"
          >
            men
          </div>
          <div className="text-transparent text_stroke_white absolute top-0 left-0">
            men
          </div>
        </div>
        <div className="text-transparent text_stroke_white">o.logy</div>
      </div>
      <div className="text-white text-right text-[1.5rem] md:text-[1rem] lg:text-[2.8125rem] font-medium lg:mt-[1rem]">
        By Nature
      </div>
    </section>
  );
};

export default TitleContent;
