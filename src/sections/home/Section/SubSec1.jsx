"use client";

import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import imgSection1 from "../../../../public/home/imgSection1.jpg";
import imgSection2 from "../../../../public/home/imgSection2.jpg";
import imgSection3 from "../../../../public/home/imgSection3.jpg";
const SubSec1 = () => {
  const refImgSection1 = handleUseScrollTrigger(-200, 0, 0, 0, 1);
  const refImgSection2 = handleUseScrollTrigger(0, 0, 200, 0, 1);
  const refImgSection3 = handleUseScrollTrigger(200, 0, 0, 0, 1);
  return (
    <section className="w-full flex justify-center mt-[2rem] lg:mt-[4.37rem] ">
      <div
        className="flex items-center
       space-x-[0.53rem]
       sm:space-x-[1rem]
      lg:space-x-[1.87rem]"
      >
        <div ref={refImgSection1}>
          <Image
            src={imgSection1}
            alt="imgSection1"
            width={475}
            height={425}
            // className="w-full  sm:w-[525px]  lg:w-[475px] lg:h-[425rem]"
          ></Image>
        </div>
        <div ref={refImgSection2}>
          <Image
            src={imgSection2}
            alt="imgSection2"
            width={546}
            height={644}
            // className="w-full  sm:w-[625px]  lg:w-[546px] lg:h-[644px]"
          ></Image>
        </div>
        <div ref={refImgSection3}>
          <Image
            src={imgSection3}
            alt="imgSection3"
            width={475}
            height={425}
            // className="w-full sm:w-[525px] lg:w-[475px] lg:h-[425rem]"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default SubSec1;
