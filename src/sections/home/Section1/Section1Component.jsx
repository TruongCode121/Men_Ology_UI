"use client";
import Image from "next/image";

import bgIMGSec1 from "../../../../public/home/bgIMGSec1.png";
import SubSec1_1 from "./SubSec1_1";
import TitleContentItem from "../TitleContentItem";
import SubSec1_2 from "./SubSec1_2";
import SubSec1_3 from "./SubSec1_3";
const Section1Component = () => {
  return (
    <section className="relative">
      <div className="w-full bg-slate-200 absolute">
        <div className="w-full bg-white h-[6rem] lg:h-[20rem]"></div>
        <Image
          src={bgIMGSec1}
          alt="bgIMGSec1"
          className="w-full h-[56.875rem] sm:h-[70rem] lg:h-full"
        ></Image>
      </div>
      <div className="w-full px-[0.63rem] lg:px-0  lg:container mx-auto relative mt-[1.5rem] sm:mt-[3.63rem]">
        <SubSec1_1></SubSec1_1>
        <TitleContentItem
          title="Thương hiệu chúng tôi"
          titleStyle="text-white tt_common_demibold text-[1.5rem] sm:text-[2.5rem] lg:text-[3.75rem] mb-[1rem]"
          className="text-white w-full lg:w-[51.625rem] mt-[2.8rem] lg:mt-[7.5rem]"
        >
          <p className="tt_common_regular text-[0.875rem] sm:text-[1rem] lg:text-[1.5625rem] leading-[1.3125rem] lg:leading-[2rem] line-clamp-5">
            Men O.logy là Công ty Cổ phần Hàng tiêu dùng Provence, Việt Nam.
            Thương hiệu này chuyên sản xuất các sản phẩm chăm sóc cá nhân cho
            nam như dầu gội, dao cạo râu, gel tắm. Thương hiệu này được{" "}
            <span className="tt_common_bold">khách hàng tin dùng</span> và lựa
            chọn vì có{" "}
            <span className="tt_common_bold">
              chất lượng cao, công nghệ hiện đại
            </span>{" "}
            và <span className="tt_common_bold">thiết kế bắt mắt.</span>
          </p>
        </TitleContentItem>
        <SubSec1_2></SubSec1_2>
        <SubSec1_3></SubSec1_3>
      </div>
    </section>
  );
};

export default Section1Component;
