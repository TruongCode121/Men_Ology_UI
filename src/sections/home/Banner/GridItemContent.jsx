"use client";

const GridItemContent = () => {
  return (
    <section className="[&_.title]:uppercase [&_.title]:text-[rgba(255,255,255,0.65)] [&_.title]:text-[0.75rem] [&_.title]:lg:text-[0.875rem] absolute bottom-[2.31rem] sm:bottom-[4rem] md:bottom-[2rem] lg:bottom-[3.88rem] lg:left-[6.25rem] tt_common_regular">
      <div
        className="[&_.content]:text-[1rem] [&_.content]:lg:text-[1.25rem] [&_.content]:tt_common_medium [&_.content]:mt-[0.5rem] grid grid-cols-2 gap-4 gap-x-[11rem] 
       lg:gap-0  sm:gap-x-0 px-[0.63rem] lg:flex items-start lg:space-x-[4.06rem] lg:w-[44.4rem] text-white leading-[0.8125rem] lg:leading-none"
      >
        <div className="w-[13rem]">
          <div className="title">Khách hàng</div>
          <div className="content leading-[1.40625rem] line-clamp-2 lg:pr-0 pr-[3rem]">
            Công ty cổ phần hàng tiêu dùng Proven
          </div>
        </div>
        <div className="w-[calc(100%_+_0.5rem)] sm:w-auto">
          <div className="title">dịch vụ</div>
          <div className="content">UI/UX Design</div>
          <div className="content">Development</div>
        </div>
        <div>
          <div className="title">thời gian</div>
          <div className="content">19/10/2022</div>
        </div>
        <div>
          <div className="title">thành viên</div>
          <div className="content">Loan Hoàng</div>
          <div className="content">Tiến Dũng</div>
        </div>
      </div>
    </section>
  );
};

export default GridItemContent;
