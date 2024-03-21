import React from 'react'
import { GoDotFill } from "react-icons/go";

const Ready = () => {
  return (
    <div className='w-screen h-screen bg-[#CDEA67] flex flex-col justify-center items-center text-black font-bold text-[17vh]'>
        <h1 className='scale-y-[160%] leading-[22vh] opacity-85 '>READY</h1>
        <h1 className='scale-y-[160%] leading-[22vh] opacity-85'>TO START</h1>
        <h1 className='scale-y-[160%] leading-[22vh] opacity-85'>THE PROJECT?</h1>
        <button className='text-[2vh] font-light mt-[8vh] p-[2vh] px-[1vw] bg-black opacity-80 text-white rounded-3xl flex gap-[3vw] items-center'>START THE PROJECT <GoDotFill/></button>
        <p className='text-[2vh] font-light m-[2vh]'>OR</p>
        <button className='text-[2vh] font-light p-[1.5vh] px-[1vw] bg-transparent border-[2px] border-black opacity-80 rounded-3xl flex gap-[3vw] items-center'>HELLO@OCHI.DESIGN <GoDotFill/></button>
    </div>
  )
}

export default Ready
