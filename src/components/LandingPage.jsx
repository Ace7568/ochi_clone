import React, { useState } from "react";
import img from "../assets/textimg.jpg";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [animateback, setback] = useState(false);
  return (
    <div data-scroll data-scroll-speed="-.4" className="w-screen h-screen bg-zinc-900 text-white pt-1">
      <div className='textstructure uppercase text-[8.5vw] font-semibold mx-[5vw] font-["Founders_Grotesk_Condensed"] mt-[20vh]'>
        <div className="masker1">
          <h1 className="leading-none">WE CREATE</h1>
        </div>
        <div className="masker1 flex gap-3 items-center">
          <motion.img
            initial={{width:0}}
            animate={{width:"9vw"}}
            transition={{ease:[0.85, 0, 0.15, 1], duration:1}}
            src={img}
            alt=""
            className="h-[10vh] rounded-lg text-center mt-[2vh]"
          />
          <h1 className="leading-none p-0 m-0">EYE-OPENING</h1>
        </div>
        <div className="masker1">
          <h1 className="leading-none">PRESENTATIONS</h1>
        </div>
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-[18vh] flex justify-around pt-4 text-sm font-medium">
        <h5>For public and private companies</h5>
        <h5>From the first pitch to IPO</h5>
        <div className="button flex gap-[1vw]">
          <button className="border-[1px] border-white px-[2vh] py-[4px] rounded-lg tracking-widest font-extralightight hover:bg-zinc-200 hover:text-black transition uppercase">
            Start the Project
          </button>
          <div className="text-sm border-[1px] border-white rounded-full w-[3.5vh] h-[3.5vh] place-content-center flex justify-center items-center rotate-45">
            <FaArrowUpLong />
          </div>
        </div>
      </div>

      <motion.h5
        initial={{ y: 0 }}
        animate={{ y: animateback ? 0 : "3vh" }}
        transition={{ ease: "linear", yoyo: Infinity, duration: 1 }}
        className="text-center mt-[2vh] capitalize opacity-30 text-white flex items-center justify-center gap-1"
        onAnimationComplete={() => setback(!animateback)}
      >
        scroll down <FaArrowDown/>
      </motion.h5>
    </div>
  );
};

export default LandingPage;
