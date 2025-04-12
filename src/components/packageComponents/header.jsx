import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

export default function Header() {
  return (
    <div className='max-w-[1512px] h-[860px] mb-[178px] flex flex-col justify-center items-center gap-y-[30px]' style={{backgroundImage: `url('../public/packageImages/pageHeader.png')`}}>
        <h1 className='text-[64px] font-bold text-[#ffffff]'>Travel Packages</h1>
        <h4 className='text-[24px] font-medium text-[#ffffff] flex items-center gap-1.5'>Home <IoIosArrowForward className='size-[24px]' /> Package</h4>
    </div>
  )
}
