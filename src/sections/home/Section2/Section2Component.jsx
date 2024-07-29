"use client";

import SubSec2_1 from "./SubSec2_1";
import SubSec2_2 from "./SubSec2_2";
import SubSec2_3 from "./SubSec2_3";

const Section2Component = () => {
  return (
    <section className="w-full px-[0.63rem] lg:px-0 lg:container mx-auto mb-[1rem]">
      <SubSec2_1></SubSec2_1>
      <div
        className=" text-[7.5rem] sm:text-[10rem] whitespace-nowrap lg:text-[12.5rem] leading-[11.25rem] sm:leading-[15rem] lg:leading-[21.5625rem] tt_common_bold text-[rgba(0,0,0,0.03)] w-full -ml-[22%] lg:-ml-3 
      -mt-[3rem]
      lg:-mt-[4.5rem] select-none"
      >
        MEN O.LOGY
      </div>
      <SubSec2_2></SubSec2_2>
      <SubSec2_3></SubSec2_3>
    </section>
  );
};

export default Section2Component;
