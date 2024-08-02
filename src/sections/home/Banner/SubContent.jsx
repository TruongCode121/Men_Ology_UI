"use client";

import ArowBanner from "../../../../public/home/ArowBanner";

const SubContent = () => {
  return (
    <section className="absolute top-[45%] sm:top-[13rem] md:top-[10rem] lg:top-[46%] left-1/2 -translate-x-1/2 ">
      <p className="font-light leading-[1.5rem] lg:leading-[2.1875rem]  text-[#FFF8F8] w-[18.4375rem] lg:w-[35.65rem] h-[6.5rem] text-[1rem] lg:text-[1.875rem] text-center tt_common_thin line-clamp-4">
        <strong className="tt_common_demibold">MEN O.LOGY</strong> luôn dẫn đầu
        xu hướng, sử dụng các thành phần thiên nhiên{" "}
        <strong className="tt_common_demibold">
          HOT NHẤT & ĐƯỢC YÊU THÍCH NHẤT
        </strong>{" "}
        trên thế giới.
      </p>
      <div className="flex justify-center -mt-[1.5rem] lg:mt-[1.5rem] ">
        <a href="#targetSection" className="animate-bounce">
          <ArowBanner></ArowBanner>
        </a>
      </div>
    </section>
  );
};

export default SubContent;
