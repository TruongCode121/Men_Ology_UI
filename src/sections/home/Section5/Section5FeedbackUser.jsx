"use client";
import Image from "next/image";
import GroupIndex from "../../../../public/home/GroupIndex.png";
import NhaydoiSec5 from "../../../../public/home/NhaydoiSec5";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
const Section5FeedbackUser = () => {
  const refFeedBack = handleUseScrollTrigger(0, 0, 200, 0, 1);
  const refWeb = handleUseScrollTrigger(-200, 0, 0, 0, 1);
  return (
    <section className="bg-Loan-Men-Xanh pb-[4.06rem] lg:pb-0 mt-[12rem] sm:mt-[20rem] lg:mt-[26rem]">
      <div className="lg:container mx-auto  sm:mt-[-25%] lg:mt-[-8%] flex flex-col lg:flex-row items-center  space-x-[1.6rem] lg:space-x-[4.25rem]">
        <div
          ref={refWeb}
          className="-mt-[8rem] w-[22.1875rem] lg:w-[46.625rem]"
        >
          <Image
            src={GroupIndex}
            alt="GroupIndex"
            className="w-full h-full"
          ></Image>
        </div>
        <div ref={refFeedBack} className="text-white mt-[2rem] lg:-mt-[3rem]">
          <div className="-ml-[1.6rem] lg:-ml-[3rem] w-[2.7425rem]">
            <NhaydoiSec5></NhaydoiSec5>
          </div>
          <p className="text-[1rem] mt-2 lg:mt-0 lg:text-[2.1875rem] leading-[1.5rem] lg:leading-[3.28125rem] w-[20.5625rem] lg:w-[38.8125rem] tt_common_demibold">
            Đó là một sự nỗ lực không ngừng nghỉ của các bạn bên OkHub. Baa Baby
            thực sự ấn tượng với thiết kế đẹp mắt và tính năng dễ sử dụng mà
            OkHub mang lại cho chúng tôi.
          </p>
          <p className="text-[0.875rem] lg:text-[1.5rem] mt-[1.5rem] lg:mt-[3.13rem] tt_common_regular lg:font-manrope">
            Mrs. Nguyễn Thảo
          </p>
          <p className="text-[0.75rem] lg:text-[1.25rem] mt-[0.5rem] lg:mt-[1rem] tt_common_thin lg:font-beVietName">
            CEO Thời trang Men O.logy
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section5FeedbackUser;
