"use client";
import TitleContentItem from "../TitleContentItem";
import Image from "next/image";
import imgLayoutRespon from "../../../../public/home/imgLayoutRespon.jpg";
import SubRight3_3 from "../../../../public/home/SubRight3_3.png";
import SubLeft2_3Mobie from "../../../../public/home/SubLeft2_3Mobie.png";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
const SubSec2_3 = () => {
  const refImg1 = handleUseScrollTrigger(0, 0, 0, 0, 1, 0.5, 1);
  const refImg2 = handleUseScrollTrigger(200, 0, 0, 0, 1);
  return (
    <section className="flex flex-col lg:flex-row w-full justify-between items-center mt-[3rem] lg:mt-[10rem]">
      <div className="order-1 sm:order-2 ">
        <TitleContentItem
          title="Grid"
          className="lg:w-[29.8rem] text-[#1C1C1C] text-[1.5225rem] tt_common_demibold"
          titleStyle="text-[1.5rem] sm:text-[3.75rem] mb-[1rem] sm:mb-[1.5rem]"
        >
          <p className="text-[0.875rem] sm:text-[1.25rem] leading-[1.3125rem] sm:leading-[120%] tt_common_regular line-clamp-4">
            Với cấu trúc thông tin đã định, chúng tôi tiến hành xây dựng grid
            các trang. Grid này cụ thể hoá việc sắp xếp các cột theo kích thước
            PC 1600px và 12 colum, Mobile 414px và 4 colum.
          </p>
        </TitleContentItem>
        <div
          ref={refImg1}
          className="mt-[2rem] sm:mt-[2rem] relative sm:static"
        >
          <Image
            src={imgLayoutRespon}
            alt="imgLayoutRespon"
            priority
            className="hidden  sm:inline-block sm:w-[51.1rem] sm:relative"
          ></Image>
          <div className="absolute sm:inline-block hidden bottom-0 left-[24.3%] sm:h-[2.1375rem] lg:h-[3.4375rem] w-[0.0625rem] bg-black/10 z-0"></div>
          <Image
            src={SubLeft2_3Mobie}
            alt="SubRight3_3Mobie"
            priority
            className="inline-block sm:hidden w-full"
          ></Image>
          <NumberBgImg></NumberBgImg>
          <div className="w-[14.5rem] h-[3.125rem] mx-auto relative sm:hidden">
            <BorderStyleItem className="w-[0.865rem] h-[0.0625rem] left-[3.7rem] top-[0.35rem]"></BorderStyleItem>
            <BorderStyleItem className="w-[0.405rem] h-[0.0625rem] left-[5.7rem] top-[0.35rem]"></BorderStyleItem>
            <NumberBgImg className="top-[0.9rem] left-[3.65rem]">
              103
            </NumberBgImg>
            <NumberBgImg className="top-[0.9rem] left-[5.6rem]">32</NumberBgImg>
            <NumberBgImg className="top-[2rem] left-1/2 -translate-x-1/2">
              1240px
            </NumberBgImg>
            <LineImg
              className="absolute top-0 left-[3.7rem]"
              wItem="w-[0.0625rem]"
              hItem="h-[0.875rem]"
            ></LineImg>
            <LineImg
              className="absolute top-0 left-[4.5rem]"
              wItem="w-[0.0625rem]"
              hItem="h-[0.875rem]"
            ></LineImg>
            <LineImg
              className="absolute top-0 left-[5.7rem]"
              wItem="w-[0.0625rem]"
              hItem="h-[0.875rem]"
            ></LineImg>
            <LineImg
              className="absolute top-0 left-[6.1rem]"
              wItem="w-[0.0625rem]"
              hItem="h-[0.875rem]"
            ></LineImg>
            <LineImg></LineImg>
            <LineImg
              className="absolute top-1/2 -translate-y-1/2"
              wItem="w-[14.5rem]"
              hItem="h-[0.0625rem]"
            ></LineImg>
            <LineImg className="absolute right-0 top-0"></LineImg>
          </div>
        </div>
      </div>
      <div className="order-2 w-[13.375rem] sm:w-[16rem] lg:w-[22.25rem] lg:h-[50.25rem] relative lg:mr-[4rem]">
        <div
          ref={refImg2}
          className="static lg:absolute mt-[2rem] sm:mt-[5rem] sm:-top-[10rem]"
        >
          <Image
            src={SubRight3_3}
            alt="SubLeft3_3"
            priority
            className="w-full scale-x-105 scale-y-105"
          ></Image>
        </div>
      </div>
    </section>
  );
};
export function LineImg({
  className,
  wItem = "w-[0.0625rem]",
  hItem = "h-[3.125rem]",
}) {
  return (
    <div
      className={`${className} ${wItem} ${hItem} bg-[rgba(37,36,37,0.20)]`}
    ></div>
  );
}
export function BorderStyleItem({ className }) {
  return (
    <div
      className={`${className} border-[0.0625rem] border-dashed border-[rgba(37,36,37,0.20)] absolute`}
    ></div>
  );
}
export function NumberBgImg({ children = "1600 x 850", className }) {
  return (
    <div
      className={`font-manrope sm:hidden text-[0.625rem] ${
        className ? className : " top-[-1rem] right-[0.75rem]"
      }  text-neutral-500 absolute`}
    >
      {children}
    </div>
  );
}
export default SubSec2_3;
