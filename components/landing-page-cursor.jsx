"use client"

import useMousePosition from "@/lib/cursor";
import { state } from "@/store";
import { motion } from "framer-motion";
import { useSnapshot } from "valtio";


export default function LandingPageCursor() {
  const { x, y } = useMousePosition();

  var { cursorHovered, cursorText } = useSnapshot(state);
  const size = cursorHovered ? 100 : 0;
  
  return (
    <motion.div
      animate={{
        top: `${y - size / 2}px`,
        left: ` ${x - size / 2}px`,
        height: `${size}px`,
        width: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
      className={`absolute z-[3] bg-[black] text-white cursor-none rounded-full hidden md:flex justify-center items-center`}
    >
        <p className="cursor-none text-[10px] font-[500] text-white">{cursorText}</p>
        <div className="absolute w-full h-full rounded-full"></div>
    </motion.div>
  );
}