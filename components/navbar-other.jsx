"use client";

import { IoIosCall } from "react-icons/io";


import ReuseableButton from "./button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NavbarOther() {

  return (
    <motion.div initial={{ y: "-30px", opacity: "0%", blur: "100px" }}
    whileInView={{ y: "0px", opacity: "100%", blur: "0px" }}
    transition={{ duration: 0.6, ease: "easeInOut" }} className="w-full max-w-[1300px] mx-auto p-[12px] md:top-[15px] top-[3px] left-0 right-0 z-[10]">
      <div className="w-full md:px-[45px] px-[0px] pt-[10px]  items-center">
        <div className="w-full flex justify-center bg-black items-center px-[5px] rounded-full">

        <Link href={"/"}>
        <img src="/logowhite.png" className="ml-[10px] h-[56px]" alt="" />
        </Link>
        <Link href={"/callus"}>
        
        </Link>
        </div>
      </div>

    </motion.div>
  );
}
