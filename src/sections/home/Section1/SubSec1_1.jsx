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
{
  /* <h1 className="text-[3.5rem]">BRAND STORY</h1>
      <div className="overflow-hidden h-[33rem] rounded-lg bg-black mt-[1rem] relative">
        <Image
          src={new_back_section_1}
          alt="new_back_section_1"
          className=" scale-150 "
        ></Image>
        <div className="absolute top-0">
          <div className="flex flex-col">
            <span>Những người trẻ.</span>
            <span>LUÔN MÀU MUỐN VỀ</span>
            <span>Luôn chủ động, đón những điều mới mẻ.</span>
            <span>Luôn chủ động, dù đó là những cú té.</span>
            <span>Dù không hoàn hảo,</span>
            <span>CỨ VẬY TIẾN TỚI</span>
            <span>Có gì mà phải lo!</span>
            <span>MEN O.LOGY</span>
            <span> MEN KHÔNG LO GÌ!</span>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <Image
            src={homepage_brand_story_1}
            alt="homepage_brand_story_1"
          ></Image>
        </div>
      </div> */
}
