"use client";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import image_141 from "../../../../public/home/image_141.png";

import image_193_png from "../../../../public/home/image_193_png.png";
import TitleContentItem from "../TitleContentItem";
const SubSec3_2 = () => {
  const refWebMen1 = handleUseScrollTrigger(0, 0, 0, 0, 1, 0.5, 1);
  const refWebProduct = handleUseScrollTrigger(0, 0, 0, 0, 1, 0.5, 1);
  return (
    <section className="w-full lg:mt-[1.6rem] ">
      <div className="flex flex-col lg:flex-row items-start sm:justify-between  sm:px-0">
        <div
          ref={refWebMen1}
          className="w-[23rem] lg:w-[49.9375rem] lg:-ml-[2.5rem] -ml-[1.6rem]"
        >
          <Image src={image_141} alt="SubSec3_1Img" className="w-full"></Image>
        </div>
        <div
          ref={refWebProduct}
          className="w-full lg:w-[40.5625rem] -mt-[2rem] lg:mt-0"
        >
          <Image
            src={image_193_png}
            alt="SubSec3_1Img"
            className="w-[17.3125rem] lg:w-full rounded-xl lg:mt-[6.4rem] ml-auto lg:ml-0"
          ></Image>
          <TitleContentItem
            title=""
            titleStyle="mb-[1.5rem] text-[3.75rem] font-semibold"
            className="text-white w-[17.3125rem] lg:w-auto ml-auto"
          >
            <p className="text-[0.875rem] leading-[1.3125rem] lg:leading-normal  lg:text-[2rem] line-clamp-4 tt_common_medium">
              Bộ sản phẩm này là một trong những sản phẩm bán chạy nhất của
              chúng tôi, được nhiều khách hàng tin dùng và yêu thích.
            </p>
          </TitleContentItem>
        </div>
      </div>
    </section>
  );
};

export default SubSec3_2;
