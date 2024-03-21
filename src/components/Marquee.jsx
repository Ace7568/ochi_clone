import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full rounded-tl-2xl rounded-tr-2xl bg-[#004D43] pt-[5vh] mt-[10vh] overflow-hidden flex">
      <motion.h1
        className='uppercase border-t-[1px] border-zinc-500 text-[20vw] font-["Founders_Grotesk_Condensed"] font-semibold leading-none whitespace-nowrap pr-[5vw]'
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
      >
        we are ochi
      </motion.h1>
      <motion.h1
        className='uppercase border-t-[1px] border-zinc-500 text-[20vw] font-["Founders_Grotesk_Condensed"] font-semibold leading-none whitespace-nowrap pr-[5vw]'
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
      >
        we are ochi
      </motion.h1>
    </div>
    
  );
};

export default Marquee;
