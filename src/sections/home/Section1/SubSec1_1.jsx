"usse client";

import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import brand_story_img from "../../../../public/home/brand_story_img.png";
const SubSec1_1 = () => {
  const refImg = handleUseScrollTrigger(0, 0, 0, 0, 1, 0.5, 1);
  return (
    <section
      ref={refImg}
      className="w-full sm:h-full lg:w-[72.25rem] h-[14.3125rem] lg:h-[39.4375rem] mx-auto rounded-2xl p-[0.5rem] lg:p-[1rem] shadow bg-white"
    >
      <div className="w-full h-full rounded-[0.5rem] sm:rounded-2xl overflow-hidden">
        <Image
          src={brand_story_img}
          alt="brand_story_img"
          className="imgSrcShadow section1_shadow w-full  sm:scale-x-110 h-full object-cover"
        ></Image>
      </div>
    </section>
  );
};

export default SubSec1_1;
