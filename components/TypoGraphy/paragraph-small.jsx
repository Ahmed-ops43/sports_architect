import { motion } from 'framer-motion'
import React from 'react'

export default function SmallParagraph({className, children}) {
  return (
    <motion.p initial={{ y: "30px", opacity: "0%", blur: "100px" }}
    whileInView={{ y: "0px", opacity: "100%", blur: "0px" }}
    transition={{ duration: 0.7, ease: "easeInOut" }} className={`md:text-[20px] text-[14px] font-[400] leading-[130%]  ${className || ""}`}>{children}</motion.p>
  )
}