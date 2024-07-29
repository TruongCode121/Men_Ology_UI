"use client";
import TitleContentItem from "../TitleContentItem";
import SubSec3_1 from "./SubSec3_1";
import SubSec3_2 from "./SubSec3_2";

import TitleBG from "../TitleBG";
import BannerListProduct from "./BannerListProduct";
const Section3Component = () => {
  return (
    <section className="relative bg-[#262626] pb-[2.25rem] mt-[3rem] select-none">
      <div className="h-[8rem] sm:h-[12rem] lg:h-[20rem] w-full bg-white"></div>
      <div className="px-[0.63rem] lg:px-0 lg:container mx-auto relative">
        <SubSec3_1></SubSec3_1>
        <SubSec3_2></SubSec3_2>
        <BannerListProduct></BannerListProduct>
      </div>
      <TitleBG></TitleBG>
    </section>
  );
};

export default Section3Component;
