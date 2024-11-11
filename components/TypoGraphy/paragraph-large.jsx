import { motion } from 'framer-motion'
import React from 'react'


export default function LargeParagraph({className, children}) {
  return (
    <motion.p initial={{ y: "30px", opacity: "0%", blur: "100px" }}
    whileInView={{ y: "0px", opacity: "100%", blur: "0px" }}
    transition={{ duration: 0.7, ease: "easeInOut" }} className={`md:text-[28px] text-[18px] font-[400] leading-[120%]  ${className || ""}`}>{children}</motion.p>
  )
}