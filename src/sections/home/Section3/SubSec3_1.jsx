"use client";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import SubSec3_1Img from "../../../../public/home/SubSec3_1Img.jpg";
import TitleContentItem from "../TitleContentItem";
const SubSec3_1 = () => {
  const refWebMen = handleUseScrollTrigger(0, 0, 0, 0, 1, 0.5, 1);
  return (
    <section className="w-full -mt-[30%] lg:-mt-[17%]">
      <div className="flex flex-col lg:flex-row sm:items-end justify-between w-full">
        <div
          ref={refWebMen}
          className="w-full lg:w-[50.9375rem] p-[0.5rem] lg:p-[1rem] inline-block section3_shadow"
        >
          <Image
            src={SubSec3_1Img}
            alt="SubSec3_1Img"
            className="shadow-2xl w-full rounded-xl"
          ></Image>
        </div>
        <div className="w-full mt-[1.2rem] lg:w-[29.8rem] sm:mb-[1rem]">
          <TitleContentItem
            title="Kết quả dự án"
            titleStyle="mb-[1rem] lg:mb-[1.5rem] text-[1.5rem] sm:text-[2.5rem] lg:text-[3.75rem] tt_common_demibold"
            className="text-white"
          >
            <p className="text-[0.875rem] sm:text-[1.25rem] leading-[120%] line-clamp-3 sm:line-clamp-2 tt_common_regular">
              Giao diện được tối ưu hiển thị, đem lại trải nghiệm liền mạch và
              đồng nhất cho user dù ở bất kì kích thước màn hình nào.
            </p>
          </TitleContentItem>
        </div>
      </div>
    </section>
  );
};

export default SubSec3_1;
