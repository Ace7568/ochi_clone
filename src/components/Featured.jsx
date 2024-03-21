import React from "react";
import { GoDotFill } from "react-icons/go";
import { motion, useAnimation } from "framer-motion";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handlehover = (index) => {
    cards[index].start({ y: "0%" });
  };

  const handlehoverend = (index) => {
    cards[index].start({ y: "100%" });
  }

  return (
    <div className="w-full py-[3vw]">
      <h4 className="text-[4vw] font-extralight p-[2vw] border-b-[1px] border-zinc-500">
        Featured projects
      </h4>
      <div className="relative w-full p-[4vw] flex gap-[2vw]">
        <div className="w-1/2">
          <h4 className="flex items-center mb-[2vh]">
            <GoDotFill />
            FYND
          </h4>
          <div className="w-full">
            <motion.img
              onHoverStart={() => handlehover(0)}
              onHoverEnd={()=> handlehoverend(0)}
              className="w-full rounded-lg hover:scale-95 transition-all object-cover"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-1/2">
          <h4 className="flex items-center mb-[2vh]">
            <GoDotFill />
            TRAWA
          </h4>
          <div className="w-full">
            <motion.img
              onHoverStart={() => handlehover(1)}
              onHoverEnd={()=> handlehoverend(1)}
              className="w-full rounded-lg hover:scale-95 transition-all object-cover"
              src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
              alt=""
            />
          </div>
        </div>
        <motion.h4 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[7vh] font-light tracking-tighter overflow-hidden">
          {"FYND".split("").map((item, index) => (
            <motion.span initial={{ y: "100%" }} animate={cards[0]} className="inline-block" transition={{ease:[0.25, 1, 0.5, 1], delay: index * 0.05}}>
              {item}
            </motion.span>
          ))}
        </motion.h4>
        <h4 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[7vh] font-light tracking-tighter overflow-hidden'>
            {"TRAWA".split('').map((item,index)=> (
              <motion.span initial={{ y: "100%" }} animate={cards[1]} className="inline-block" transition={{ease:[0.25, 1, 0.5, 1], delay: index * 0.05}}>
              {item}
              </motion.span>
            ))}
        </h4>
      </div>
    </div>
  );
};

export default Featured;
