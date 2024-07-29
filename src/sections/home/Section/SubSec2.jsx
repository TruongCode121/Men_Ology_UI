"use client";

import NhaydoiSvg from "../../../../public/home/NhaydoiSvg";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const SubSec2 = () => {
  const refMenSub2 = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const handleBgTextAnimation = (ref) => {
    gsap.fromTo(
      ref?.current,
      { width: "0%", duration: 10 },
      { width: "100%", duration: 3, repeat: -1, ease: "linear" }
    );
  };
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container_box", // Phần tử kích hoạt ScrollTrigger
      },
    });
    tl.fromTo(
      box1Ref.current,
      { x: 200, opacity: 1, rotate: 180 },
      { x: 0, opacity: 1, rotate: 0, duration: 1 }
    )
      .fromTo(
        box2Ref.current,
        { x: 200, opacity: 0, rotate: 135 },
        { x: 0, opacity: 1, rotate: 0, duration: 0.75 }
      )
      .fromTo(
        box3Ref.current,
        { x: 200, opacity: 0, rotate: 90 },
        { x: 0, opacity: 1, rotate: 0, duration: 0.75 }
      );
  }, []);
  useEffect(() => {
    handleBgTextAnimation(refMenSub2);
  }, []);
  return (
    <section className="w-full mt-[3rem] sm:mt-[2.302rem]">
      <div className="w-[1.70394rem] ml-[0.3rem] lg:ml-[2rem] lg:w-[3.65131rem]">
        <NhaydoiSvg></NhaydoiSvg>
      </div>

      <div className="relative text-[2rem] lg:text-[4.875rem] ml-[0.7rem] sm:ml-[2.7rem] lg:ml-[7.5rem] mt-[0.3rem] sm:-mt-[0.5rem] lg:-mt-[1rem] w-auto inline-block ">
        <div
          ref={refMenSub2}
          className="overflow-hidden uppercase tt_common_extrabold whitespace-nowrap text-[#046D2F] pt-[3px] lg:pt-0 h-[5rem] lg:h-[10rem]"
        >
          Men
        </div>
        <div
          className="[&_span]:uppercase [&_span]:text-[2rem] [&_span]:lg:text-[4.875rem] 
      leading-[2.25rem]  lg:leading-[4.75rem] absolute top-0 sm:pr-[4rem] lg:pr-0
      text-[1.5rem] lg:text-[5rem] w-[20rem] sm:w-[30rem] lg:w-[58.375rem] tt_common_demibold text-[#141414]"
        >
          <span className="text_stroke_046D2F text-transparent tt_common_extrabold">
            Men
          </span>{" "}
          <span className="tt_common_extrabold text_stroke_046D2F text-transparent">
            O.logy
          </span>{" "}
          sự lựa chọn hoàn hảo dành cho bạn
        </div>
      </div>
      <div className="container_box flex justify-center lg:justify-end">
        <div className=" mt-[2rem] lg:mt-[5rem] lg:w-[59.9rem] gap-[1rem] lg:gap-[3.12rem] grid sm:grid-cols-3 grid-cols-2 relative">
          <ItemSales refBox={box1Ref} className=" px-[1.25rem] lg:px-[3.31rem]">
            Tăng doanh số bán hàng
          </ItemSales>
          <ItemSales refBox={box2Ref} className=" px-[1.25rem] lg:px-[3.06rem]">
            Tăng tỷ lệ chuyển đổi
          </ItemSales>
          <div className=" absolute sm:static top-[100%] left-1/2 lg:left-0 translate-x-[-50%] sm:translate-x-0">
            <ItemSales refBox={box3Ref} className="px-[1rem] lg:px-[3rem]">
              Thu hút khách hàng tiềm năng
            </ItemSales>
          </div>
        </div>
      </div>
    </section>
  );
};
export function ItemSales({ className, children, refBox }) {
  return (
    <div
      ref={refBox}
      className={`size-[8.5rem] sm:size-[9.88181rem] lg:size-[17.88181rem] rounded-full bg-[#046D2F] flex justify-center items-center text-center ${className} leading-[1.125rem] lg:leading-[2rem]`}
    >
      <p className="text-[1rem] lg:text-[1.75rem] tt_common_medium text-white">
        {children}
      </p>
    </div>
  );
}
export default SubSec2;
