"use client";

import TitleContentItem from "../TitleContentItem";
import imgSubSection2 from "../../../../public/home/imgSubSection2.png";
import imgSubSection2Mobie from "../../../../public/home/imgSubSection2Mobie.png";
import Image from "next/image";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
const SubSec2_1 = () => {
  const refContentRight = handleUseScrollTrigger(200, 0, 0, 0, 1);
  return (
    <section className="flex flex-col sm:flex-row w-full justify-between items-center -mt-[8.5rem]">
      <TitleContentItem
        title="Khách hàng của Men O.logy"
        className="sm:w-[50%] lg:w-[54%] lg:mr-[3rem] text-[#1C1C1C] mt-[10rem]"
        titleStyle="text-[1.5rem] lg:text-[3.75rem] tt_common_demibold mb-[1rem] lg:mb-[1.5rem]"
      >
        <p className="hidden lg:inline-block text-[1.5625rem] tracking-[0.01956rem] tt_common_regular leading-[2rem] line-clamp-3">
          Một vài dòng về Men Ology survived not only five centuries, but also
          the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
          containing
        </p>
        <p className="lg:hidden inline-block text-[0.875rem] tt_common_regular leading-[1.3125rem] line-clamp-3">
          Với sự phát triển của công nghệ và Internet, thị trường mua sắm trực
          tuyến tại Việt Nam đang có sự tăng trưởng mạnh mẽ. Các khách hàng ngày
          càng ưa thích việc mua sắm
        </p>
      </TitleContentItem>
      <div
        ref={refContentRight}
        className="-mr-[3.5rem] sm:-mr-[1rem] lg:-mr-[2.2rem] sm:mt-[10rem] lg:mt-0"
      >
        <Image
          src={imgSubSection2}
          alt="imgSubSection2"
          className="hidden sm:inline-block lg:scale-[1.1] lg:scale-x-[1.2] "
        ></Image>
        <Image
          src={imgSubSection2Mobie}
          alt="imgSubSection2"
          className="inline-block sm:hidden w-[19.9375rem] h-[16.25rem] sm:scale-[1.1] sm:scale-x-[1.2] "
        ></Image>
      </div>
    </section>
  );
};

export default SubSec2_1;
