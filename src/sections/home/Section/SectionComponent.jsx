"use client";

import SubSec1 from "./SubSec1";
import SubSec2 from "./SubSec2";
import SubSec3 from "./SubSec3";
import Image from "next/image";
import bgnhap4 from "../../../../public/home/bgnhap4.png";
import la1 from "../../../../public/home/la1.png";
import bgImgHop from "../../../../public/home/bgImgHop.png";
import TitleContentItem from "../TitleContentItem";
import { useRef } from "react";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
const SectionComponent = () => {
  return (
    <section className="relative ">
      <div className="absolute top-[5rem] lg:top-[1rem] -right-[1rem] lg:right-[-2rem]">
        <Image
          src={bgnhap4}
          alt="bgnhap4"
          // width={325}
          // height={420}
          className="w-[9.7145rem] h-[14.07225rem] lg:w-[20.313rem] lg:h-[29.418rem]"
        ></Image>
      </div>
      <div className="absolute -left-[1rem] lg:left-0 top-1/3 lg:top-1/4 -translate-y-1/4 mt-[2rem]  lg:-mt-[7.5rem] ">
        <Image
          src={la1}
          alt="bgnhap5"
          // width={566}
          // height={805}
          className="w-[12.36875rem] h-[23.90219rem] lg:w-[35.375rem] lg:h-[50.313rem]"
        ></Image>
      </div>
      <div className="absolute -right-[3rem] lg:-left-[0.4rem] top-2/3 mt-4 sm:-mt-[2rem] lg:top-3/4 -translate-y-3/4 lg:-mt-[10rem]">
        <Image
          src={bgImgHop}
          alt="bgnhap6"
          className="w-[16.375rem] h-[32.75rem] lg:w-[32.125rem] lg:h-[64.125rem]
          "
        ></Image>
      </div>
      <div className="px-[0.63rem] lg:px-0 w-full lg:container lg:mx-auto mt-[4rem] lg:mt-[7.5rem] relative ">
        <TitleContentItem></TitleContentItem>
        <SubSec1></SubSec1>
        <SubSec2></SubSec2>
        <SubSec3></SubSec3>
      </div>
    </section>
  );
};

export default SectionComponent;
