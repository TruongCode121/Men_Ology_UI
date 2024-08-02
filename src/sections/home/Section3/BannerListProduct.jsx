import React, { useEffect, useRef } from "react";
import Image from "next/image";
import image_140 from "../../../../public/home/image_140.jpg";
import image_140_mobie from "../../../../public/home/image_140_mobie.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
gsap.registerPlugin(ScrollTrigger);
const BannerListProduct = () => {
  const refBanner = handleUseScrollTrigger(0, 0, 100, 0, 1);

  return (
    <section className="w-full mt-[4rem]  lg:-mt-[4.3rem]">
      <h2 className="text-[1.5rem] sm:text-[2.5rem] lg:text-[3.75rem] font-semibold text-white text-center sm:mb-[2.68rem]">
        Các bộ sản phẩm Men O.logy
      </h2>
      <div
        ref={refBanner}
        className="w-full lg:h-[51.625rem] hidden sm:inline-block pl-[0.5rem]"
      >
        <div className="sm:w-full sm:h-[20rem] lg:size-full  overflow-hidden border_bannerSection3">
          <Image
            src={image_140}
            alt="image_140"
            className="w-full rounded-xl scale-x-[1.14] sm:ml-[0.4rem] lg:ml-3 
            sm:scale-y-[1.17] lg:scale-y-[1.1] lg:-mt-[1.5rem] "
          ></Image>
        </div>
      </div>
      <div className="bg-white overflow-hidden w-[21.9375rem] sm:w-full h-[14.3125rem] rounded-2xl mt-[1.5rem] sm:hidden">
        <Image
          src={image_140_mobie}
          alt="image_140"
          className="w-full rounded-xl lg:hidden inline-block -mt-[2.4rem] scale-x-[1.05] scale-y-[1.05]"
        ></Image>
      </div>
    </section>
  );
};

export default BannerListProduct;
