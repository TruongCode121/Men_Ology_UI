"use client";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import bannerSection1 from "../../../../public/home/bannerSection1.jpg";
const SubSec3 = () => {
  const refTitle = handleUseScrollTrigger(0, 0, 100, 0, 1);
  const refText = handleUseScrollTrigger(0, 0, 200, 0, 1);
  return (
    <section className="w-full mt-[50%] sm:mt-[4rem] lg:mt-[8.18rem]">
      <Image
        src={bannerSection1}
        alt="bannerSection1"
        className="w-full"
      ></Image>
      <div
        className="w-full lg:w-[53.75rem] text-center mx-auto 
      mt-[3.12rem] lg:mt-[7.5rem]"
      >
        <h1
          ref={refTitle}
          className="text-[1.5rem] sm:text-[2.5rem] lg:text-[3.75rem] tt_common_demibold text-Loan-Men-11 mb-[1rem]"
        >
          3C Reseach{" "}
        </h1>
        <p
          ref={refText}
          className="text-[0.875rem] sm:text-[1rem] lg:text-[1.5625rem] text-Loan-Men-text-men leading-[1.3125rem] lg:leading-[2.0625rem] lg:line-clamp-2 tracking-normal tt_common_regular"
        >
          Với sự phát triển của công nghệ và Internet, thị trường mua sắm trực
          tuyến tại Việt Nam đang có sự tăng trưởng mạnh mẽ. Các khách hàng ngày
          càng ưa thích việc mua sắm
        </p>
      </div>
    </section>
  );
};

export default SubSec3;
