import React from 'react'
import { IoCall } from 'react-icons/io5'
import { GoLinkExternal } from "react-icons/go";


export default function ReuseableButton({className, children}) {
  return (
    <button className={` py-[12px] flex justify-between gap-[15px] items-center text-[14px] font-[300] rounded-full px-[30px] bg-mainColor ${className || ""}`}>
        {children}
        {/* <IoCall /> */}
        <GoLinkExternal />

    </button>
  )
}
