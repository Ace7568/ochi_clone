import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const EyePart = () => {

    const [rotate, setRotate] = useState(0);
    const [anix, setanix] = useState(0);
    const [aniy, setaniy] = useState(0);
    const eye2 = useRef(null);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            let anix = (mouseX - window.innerWidth/2) / 100 + 10;
            let aniy = (mouseY - window.innerHeight/2) / 100 + 10;

            let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI) - 180;
            setRotate(angle);
            setanix(anix);
            setaniy(aniy)
        })
        
    })
  return (
    <div className="w-screen h-screen bg-red-500 overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-[url("./assets/Eyeimg.jpeg")] bg-cover bg-center flex justify-center items-center'>
        <div className="w-1/2 h-[30vh] flex justify-around">
          <div className="h-[30vh] w-[30vh] bg-white rounded-full flex justify-center items-center">
            <motion.div initial={{x:"0"}} animate={{x:anix, y:aniy}} transition={{duration:0.1, ease:'linear'}} className="h-[20vh] w-[20vh] bg-black rounded-full flex justify-center items-center">
              <div className="w-full" style={{transform:`rotate(${rotate}deg)`}}>
                <div className="h-[5vh] w-[5vh] ml-1 bg-white rounded-full"></div>
              </div>
            </motion.div>
          </div>
          <div className="h-[30vh] w-[30vh] bg-white rounded-full flex justify-center items-center">
            <motion.div initial={{x:"0"}} animate={{x:anix, y:aniy}} transition={{duration:0.1, ease:'linear'}} className="h-[20vh] w-[20vh] bg-black rounded-full flex justify-center items-center">
              <div className="w-full" style={{transform:`rotate(${rotate}deg)`}}>
                <div className="h-[5vh] w-[5vh] ml-1 bg-white rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyePart;
