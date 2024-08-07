"use client";

import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import Borderbtn from "../../../../public/home/Borderbtn";

import FooterImg1 from "../../../../public/home/FooterImg1.png";
import FooterImg2 from "../../../../public/home/FooterImg2.png";
import FooterImg3 from "../../../../public/home/FooterImg3.png";
import TitleContentItem from "../TitleContentItem";
// import Borderbtn from "../../../../public/home/Borderbtn";

const Footer = () => {
  const refWeb1 = handleUseScrollTrigger(0, 0, 200, 0, 1);
  const refWeb2 = handleUseScrollTrigger(0, 0, 100, 0, 1);
  const refWeb3 = handleUseScrollTrigger(0, 0, 100, 0, 1);
  const refBgColor = handleUseScrollTrigger(400, 0, -100, 0, 2);
  const widthHeightItem =
    "w-[10.5625rem] sm:w-[15rem] lg:w-[21.56094rem] h-[20.60706rem] sm:h-[31rem] lg:h-[44.0625rem] ";
  return (
    <section className=" mx-auto lg:pt-[17.1rem] lg:pb-[19rem] h-full">
      <div className=" lg:container  flex flex-col lg:flex-row items-start  relative">
        <div className="mt-[20%] px-[0.63rem] lg:px-0">
          <TitleContentItem
            title="Tối ưu Responsive"
            titleStyle="tt_common_demibold text-[1.5rem] lg:text-[3.75rem] mb-[1rem] lg:mb-[1.69rem]"
            className="text-Loan-Men-text-men lg:w-[31.25rem]"
          >
            <p className="text-[0.875rem] lg:text-[1.25rem] leading-[1.3125rem] lg:leading-[2rem]">
              Với thiết kế UI responsive, người xem sẽ có một trải nghiệm tương
              đồng trên điện thoại và các môi trường khác
            </p>
          </TitleContentItem>
          {/* border-t-[3px] border-r-[3px] border-[#00CA22] */}
          <div
            type="button"
            className="cursor-pointer w-[15.5rem] h-[3.50088rem]
            md:flex justify-center items-center group hidden border-t-[3px] border-r-[3px] border-[#00CA22]
             mt-[5.63rem] bg-black "
          >
            <div className="text-white text-[1.25rem] transition-all duration-100 group-hover:text-[1.5rem]">
              Khám phá ngay
            </div>
            {/* <div className="h-[3.50088rem] w-[15.5rem] bg-white">
              <Borderbtn></Borderbtn>
            </div> */}
          </div>
        </div>
        <div className="w-full relative lg:translate-x-[5%] mt-[2.5rem] lg:mt-0">
          <div
            ref={refBgColor}
            className="size-[73.0625rem] absolute lg:static -left-[110%] sm:-left-[55%] top-1/2 -mt-[11.8rem] lg:mt-0  rounded-full bg-[rgba(4,109,47,0.10)]"
          ></div>

          <div
            ref={refWeb1}
            className={`${widthHeightItem}  lg:absolute lg:top-[-10.87rem] lg:left-[7.87rem] ml-[0.63rem] lg:ml-0`}
          >
            <Image
              src={FooterImg1}
              alt="FooterImg1"
              className="w-full h-full"
            ></Image>
          </div>
          <div
            ref={refWeb2}
            className={`${widthHeightItem} absolute top-[7.5rem] sm:top-[12rem] lg:top-[14.5rem] right-[0.63rem] lg:left-[33.5rem]`}
          >
            <Image
              src={FooterImg2}
              alt="FooterImg2"
              className="w-full h-full"
            ></Image>
          </div>
          <div
            ref={refWeb3}
            className={`${widthHeightItem} lg:absolute top-[37.31rem] left-[4.56rem] mt-[1.93rem] mb-[4rem] lg:mb-0 lg:mt-0  ml-[0.63rem] lg:ml-0`}
          >
            <Image
              src={FooterImg3}
              alt="FooterImg3"
              className="w-full h-full"
            ></Image>
          </div>
        </div>
      </div>
      <div className="h-[20rem] sm:h-[16rem] bg-white absolute w-full block lg:hidden"></div>
    </section>
  );
};

export default Footer;
