"use client";

import { RiMenu5Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";

import ReuseableButton from "./button";
import SmallHeading from "./TypoGraphy/heading-small";
import Link from "next/link";


export default function Navbar({
  scrollToServices,
  scrollToPortfolio,
  scrollToReviews,
  scrollToAboutus,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-[1300px] mx-auto p-[12px] absolute md:top-[15px] top-[3px] left-0 right-0 z-[10]">
      <div className="w-full md:px-[45px] px-[20px] pt-[10px] flex justify-between items-center">
        <motion.img initial={{ y: "-20px", x : "-20px", opacity: "0%", blur: "100px" }}
    whileInView={{ y: "0px", x:"0px", opacity: "100%", blur: "0px" }}
    transition={{ duration: 0.6, ease: "easeInOut" }} src="/logowhite.png" className="h-[70px] md:h-[80px]" alt="" />
        <motion.div initial={{ y: "-20px", opacity: "0%", blur: "100px" }}
    whileInView={{ y: "0px", opacity: "100%", blur: "0px" }}
    transition={{ duration: 0.6, ease: "easeInOut" }} className="bg-black md:flex rounded-full p-[3px] hidden">
          <span
            className="text-[13px] cursor-pointer font-[500] px-[17px] py-[10px] bg-[#242424] rounded-full text-mainColor"
            href=""
          >
            HOME
          </span>
         
          <span
            onClick={scrollToPortfolio}
            className=" cursor-pointer text-[13px] font-[500] px-[17px] py-[10px] rounded-full text-white"
            href=""
          >
            OUR WORK
          </span>
          <span
            onClick={scrollToServices}
            className="cursor-pointer text-[13px] font-[500] px-[17px] py-[10px] rounded-full text-white"
            href=""
          >
            SERVICES
          </span>
          <span
            onClick={scrollToReviews}
            className=" cursor-pointer text-[13px] font-[500] px-[17px] py-[10px] rounded-full text-white"
            href=""
          >
            REVIEWS
          </span>
          <span
            onClick={scrollToAboutus}
            className=" cursor-pointer text-[13px] font-[500] px-[17px] py-[10px] rounded-full text-white"
            href=""
          >
            ABOUT US
          </span>
        </motion.div>
       
        <div
          onClick={() => {
            setMenuOpen(true);
          }}
          className="md:hidden flex justify-center items-center rounded-full w-[40px] h-[40px]  bg-mainColor"
        >
          <RiMenu5Line className="text-black  " size={24} />
        </div>
      </div>

      <div
        className={`fixed h-[100vh] w-full bg-black z-[30] top-0 ${
          menuOpen ? "right-0" : "right-[-110vw]"
        } transition-all `}
        style={{ transitionDuration: "1000ms" }}
      >
        <IoCloseSharp
          onClick={() => setMenuOpen(false)}
          className="absolute top-[15px] right-[15px] text-white"
          size={24}
        />
        <div className="w-full h-full flex flex-col justify-evenly">
            <div className="flex w-full justify-center">

          <img src="/logowhite.png" className="w-[50%]" alt="" />
            </div>
          <div className="flex flex-col gap-[10px] pl-[35px]">
            <span
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <SmallHeading
                className={
                  "text-white border-mainColor border-l-[7px] px-[10px] cursor-pointer"
                }
              >
                HOME
              </SmallHeading>
            </span>
            <span
              onClick={() => {
                scrollToPortfolio();
                setMenuOpen(false);
              }}
            >
              <SmallHeading
                className={
                  "text-white border-mainColor border-l-[7px] px-[10px] cursor-pointer"
                }
              >
               OUR WORK
              </SmallHeading>
            </span>
            <span
              onClick={() => {
                scrollToServices();
                setMenuOpen(false);
              }}
            >
              <SmallHeading
                className={
                  "text-white border-mainColor border-l-[7px] px-[10px] cursor-pointer"
                }
              >
                SERVICES
              </SmallHeading>
            </span>
           
            <span
              onClick={() => {
                scrollToReviews();
                setMenuOpen(false);
              }}
            >
              <SmallHeading
                className={
                  "text-white border-mainColor border-l-[7px] px-[10px] cursor-pointer"
                }
              >
                REVIEWS
              </SmallHeading>
            </span>
            <span
              onClick={() => {
                scrollToAboutus();
                setMenuOpen(false);
              }}
            >
              <SmallHeading
                className={
                  "text-white border-mainColor border-l-[7px] px-[10px] cursor-pointer"
                }
              >
                ABOUT US
              </SmallHeading>
            </span>
          </div>
          <div className="flex justify-center w-full">
            <Link onClick={() => {
                setMenuOpen(false);
              }} href={"/callus"} className="w-[70%]">
            <ReuseableButton className={"w-full"}>Start a Project</ReuseableButton></Link>
            </div>
        </div>
      </div>
    </nav>
  );
}
