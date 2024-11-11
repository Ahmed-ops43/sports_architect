import React from 'react'

export default function Triangle({className, dark}) {
  return (
    <img src={ dark ?  "/triangle1.png" : "triangle.png"} className={`md:w-[50px] w-[35px] rotate-[-19deg]  ${className || ""}`} alt="" />
  )
}
