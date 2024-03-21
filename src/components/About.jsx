import React from "react";

const About = () => {
  return (
    <div className="bg-[#CDEA67] w-screen pb-[5vh] pt-[10vh] rounded-tl-[10px] rounded-tr-[10px] flex flex-col gap-[5vh]">
      <p className=" text-black text-[7vh] leading-[8vh] pr-[10vw] pl-[5vw] font-light">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </p>
      <div className="bg-black h-[1px]" />
      <div className="rest h-[35vh]"></div>
      <div className="bg-black h-[1px]" />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className=" text-black text-[7vh] leading-[8vh] font-light pl-[5vw]">
            Our approach:
          </p>
          <button className="uppercase p-[2vw] pt-[2.3vh] pb-[2.3vh] bg-black text-white w-fit ml-[5vw] font-extralight text-[1.8vh] rounded-3xl flex items-center mt-[3vh]">
            Read more
            <span className="h-[1vh] w-[1vh] bg-white rounded-full ml-[3vw]"></span>
          </button>
        </div>
        <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" className="h-[60vh] mr-[5vw] rounded-lg object-cover" alt="" />
      </div>
    </div>
  );
};

export default About;
