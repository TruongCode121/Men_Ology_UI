"use client";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import subSec1Footer from "../../../../public/home/subSec1Footer.png";
import TitleContentItem from "../TitleContentItem";
const SubSec1_3 = () => {
  const refContentLeft = handleUseScrollTrigger(-200, 0, 0, 0, 1);
  return (
    <section className="w-full flex lg:flex-row flex-col mt-[3.4rem] lg:mt-[7.5rem]">
      <div
        ref={refContentLeft}
        className="px-[2.37rem] sm:px-[3rem] lg:px-0 w-full lg:w-1/2 order-2 lg:order-1"
      >
        <Image
          src={subSec1Footer}
          alt="subSec1Footer"
          className="w-[18.68763rem] sm:w-[24rem] lg:w-full mt-[2.15rem] lg:mt-[1.3rem]"
        ></Image>
      </div>
      <div className="order-1 lg:order-2 w-full lg:w-1/2 lg:mt-[13rem] lg:pl-[2.5rem]">
        <TitleContentItem
          title="Nghành nghề kinh doanh"
          titleStyle="text-white tt_common_demibold lg:text-[3.75rem] text-[1.5rem] text-center lg:text-right mb-[1.5rem]"
          className="text-white"
        >
          <p className="tt_common_regular text-[0.875rem] lg:text-[1.5625rem] leading-[1.3125rem] lg:leading-[2rem] px-[1.6rem] lg:px-0  text-center lg:text-right line-clamp-5">
            Các thương hiệu chăm sóc cá nhân cho nam giới tại Việt Nam đang cạnh
            tranh với Men O.logy như một số thương hiệu nổi bật có độ phủ song
            cao: X-Men, The FaceShop, Shisedo và Clinique
          </p>
        </TitleContentItem>
      </div>
    </section>
  );
};

export default SubSec1_3;
