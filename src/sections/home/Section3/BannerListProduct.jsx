import React, { useEffect, useRef } from "react";
import Image from "next/image";
import image_140 from "../../../../public/home/image_140.jpg";
import image_140_mobie from "../../../../public/home/image_140_mobie.png";
import banner_mobie_section3 from "../../../../public/home/banner_mobie_section3.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import bannerSection3 from "../../../../public/home/bannerSection3.jpg";
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
        <div className="sm:w-full sm:h-full lg:size-full  overflow-hidden border_bannerSection3">
          <Image
            src={bannerSection3}
            alt="image_140"
            className="w-full rounded-xl "
          ></Image>
        </div>
      </div>
      <div className="bg-white overflow-hidden w-[21.9375rem] sm:w-full h-[14.3125rem] rounded-2xl mt-[1.5rem] sm:hidden p-[0.5rem]">
        <Image
          src={banner_mobie_section3}
          alt="image_140"
          className="w-full rounded-xl lg:hidden inline-block "
        ></Image>
      </div>
    </section>
  );
};

export default BannerListProduct;
