"use client";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import subSec1Right from "../../../../public/home/subSec1Right.jpg";
import subSecLeft from "../../../../public/home/subSecLeft.jpg";
const SubSec1_2 = () => {
  const refImg = handleUseScrollTrigger(0, 0, 100, 0, 1);

  return (
    <section className="w-full lg:container mx-auto mt-[1.5rem] sm:mt-[4.63rem]">
      <div ref={refImg} className="flex items-center">
        <div className="w-1/2">
          <Image src={subSecLeft} alt="subSecLeft" className="w-full"></Image>
        </div>
        <div className="w-1/2">
          <Image
            src={subSec1Right}
            alt="subSec1Right"
            className="w-full"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default SubSec1_2;
