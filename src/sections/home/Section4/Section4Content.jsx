"use client";

import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import brandStory from "../../../../public/home/brandStory.jpg";
const Section4Content = () => {
  const refImg = handleUseScrollTrigger(200, 0, 0, 0, 1);
  const refMEN = useRef(null);
  const reftxt2 = useRef(null);
  const reftxt3 = useRef(null);
  const handleBgTextAnimation = (ref) => {
    gsap.fromTo(
      ref?.current,
      { width: "0%", duration: 10 },
      { width: "100%", duration: 4, repeat: -1, ease: "linear" }
    );
  };
  useEffect(() => {
    handleBgTextAnimation(refMEN);
    handleBgTextAnimation(reftxt2);
    handleBgTextAnimation(reftxt3);
  }, []);
  return (
    <section className="section4_style flex flex-col lg:flex-row justify-between items-center w-full xl:w-[83rem] lg:pl-[1rem] select-none lg:space-x-[1rem]">
      <div className="content_left -ml-[2rem] sm:ml-0 text-[1.25rem] lg:text-[2.25rem] leading-[1.75rem] lg:leading-[2.25rem] tt_common_regular lg:order-1 order-2 mt-[1.54rem] lg:mt-0">
        <p className="line-clamp-1">Những người trẻ,</p>
        <div className="tt_common_extrabold relative inline-block text-[2rem] lg:text-[2.5rem]">
          <p
            ref={reftxt2}
            className=" text-[#046D2F] overflow-hidden  whitespace-nowrap h-[2.2rem] lg:h-[2.7rem] pt-1"
          >
            MUÔN MÀU MUÔN VẺ.
          </p>
          <p className="text_stroke_046D2F absolute top-0 left-0 text-transparent pt-1">
            MUÔN MÀU MUÔN VẺ.
          </p>
        </div>
        <p className="-mt-2 whitespace-nowrap line-clamp-1">
          Luôn chủ động, đón những điều mới mẻ.
        </p>
        <p className="line-clamp-1">Luôn chủ động, dù đó là những cú té.</p>
        <p className="line-clamp-1">Dù không hoàn hảo,</p>
        <div className="relative tt_common_extrabold text-[2rem] lg:text-[2.5rem] inline-block">
          <p
            ref={reftxt3}
            className=" text-[#046D2F] overflow-hidden  whitespace-nowrap h-[2.6rem] lg:h-[3.1rem] pt-2 -mt-1"
          >
            CỨ VẬY TIẾN TỚI!
          </p>
          <p className=" text_stroke_046D2F absolute top-0 left-0 text-transparent pt-1">
            CỨ VẬY TIẾN TỚI!
          </p>
        </div>
        <p className="-mt-2 line-clamp-1">Có gì mà phải lo!</p>
        <div className="mt-[1rem] lg:mt-[2rem]">
          <div className="text-[2.5rem] lg:text-[4.25rem] tt_common_black relative inline-block ">
            <div
              ref={refMEN}
              className="overflow-hidden whitespace-nowrap flex flex-shrink-0 h-[3.3rem] -mt-1 pt-1"
            >
              <span>MEN</span>
            </div>
            <div className="absolute top-0 left-0 flex space-x-[0.6rem] lgspace-x-[1rem]">
              <span className="text_stroke_black  text-transparent">MEN</span>
              <span className="text_stroke_black text-transparent">O.LOGY</span>
            </div>
          </div>

          <p className="text-[2rem] lg:text-[2.8125rem] tracking-[0.03519rem] font-bold lg:mt-[0.8rem] font-chakra">
            MEN KHÔNG LO GÌ!
          </p>
        </div>
      </div>
      <div ref={refImg} className=" lg:order-2 order-1">
        <Image
          src={brandStory}
          alt="Group1181877"
          className=" w-[19.80156rem] lg:w-auto"
        ></Image>
      </div>
    </section>
  );
};

export default Section4Content;
