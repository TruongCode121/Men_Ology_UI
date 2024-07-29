"use client";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import TitleContentItem from "../TitleContentItem";

const SubSec2_2 = () => {
  const refBox1 = handleUseScrollTrigger(-200, 0, 0, 0, 1, 1, 1, -180, 0);
  const refBox2 = handleUseScrollTrigger(200, 0, 0, 0, 1, 1, 1, 180, 0);
  return (
    <section className="flex flex-col lg:flex-row w-full justify-between items-center ">
      <div
        className="order-2 lg:order-1 mt-[2rem] lg:mt-0 [&_.colorItem]:size-[10.875rem] [&_.colorItem]:sm:size-[14.5rem] 
[&_.colorItem]:lg:size-[21.5rem]       
[&_.colorItem]:rounded-full [&_.colorItem]:flex [&_.colorItem]:justify-center [&_.colorItem]:items-center [&_.colorItem1]:bg-[#046D2F] [&_.colorItem2]:bg-black [&_.colorItem]:text-white flex [&_p]:text-[1rem] [&_p]:sm:text-[1.5rem]  [&_p]:lg:text-[2.5rem] tt_common_medium"
      >
        <div ref={refBox1} className="colorItem colorItem1">
          <p>#046D2F</p>
        </div>
        <div
          ref={refBox2}
          className="colorItem colorItem2 -ml-[3rem] sm:-ml-[4rem]"
        >
          <p>#262626</p>
        </div>
      </div>
      <TitleContentItem
        title="Color"
        className="order-1 lg:order-2 w-full lg:w-1/2 text-[#1C1C1C] text-[0.875rem] sm:text-[1rem] lg:text-[1.5625rem] lg:pl-[0.8rem]"
        titleStyle="text-[1.5rem] sm:text-[2.5rem] lg:text-[3.5rem] tt_common_demibold mb-[1.5rem]"
      >
        <p className="tt_common_regular line-clamp-3">
          Màu sắc thương hiệu của Men O.logy là đen và xanh lá
        </p>
        <p className="mb-[0.3rem] mt-[0.5rem] lg:my-[2rem] line-clamp-3">
          <span className="tt_common_bold">Màu xanh lá:</span> biểu thị sự tươi
          mới, tự nhiên, thanh lọc và an toàn
        </p>
        <p className="leading-[1.3125rem] sm:leading-[2rem] sm:w-[42rem] sm:pr-[1.6rem] line-clamp-3">
          <span className="tt_common_bold">Màu đen:</span> biểu thị quyền lực,
          sức mạnh, sự huyền bí, dũng cảm và táo bạo.
        </p>
      </TitleContentItem>
    </section>
  );
};

export default SubSec2_2;
