"use client"

import Triangle from '@/components/triangle'
import MediumHeading from '@/components/TypoGraphy/heading-medium'
import LargeParagraph from '@/components/TypoGraphy/paragraph-large'
import Wrapper from '@/components/wrapper'
import React, { useState } from 'react'
import CountUp from 'react-countup'

import Marquee from "react-fast-marquee";
import ScrollTrigger from 'react-scroll-trigger'

export default function AboutUsSection() {


    const [counterOn, setCounterOn] = useState(false);


  return (
    <section className='md:py-sectionSepration py-elementSpace'>
        <MediumHeading className={"flex gap-[10px] md:px-[50px] px-[15px] items-center"}>
                <Triangle className={"md:mx-[20px] mx-[5px]"} dark={true} />
                About Us
            </MediumHeading>
        <Wrapper className={"md:px-[50px] px-[15px] "}>
            {/* <MediumHeading className={"flex gap-[10px] mt-[-15px] items-center"}>
                <Triangle className={"md:mx-[20px] mx-[5px]"} dark={true} />
                About Us
            </MediumHeading> */}
            <LargeParagraph className={"w-full max-w-[90%] md:mt-elementSpace mt-[20px]"}>At our sports architecture firm, we specialize in innovative 3D design and planning for dynamic recreational spaces. Our expertise combines precise technical detail with engaging visuals to bring sports facilities to life. We aim to create spaces that inspire connection, activity, and community.</LargeParagraph>
           
        </Wrapper>
        <OurClients/>
    </section>
  )
}


const OurClients = () =>{
    return (
        <div className='w-full mt-sectionSepration'>

            <MediumHeading className={"flex gap-[10px] md:px-[50px] px-[15px] items-center"}>
                <Triangle className={"md:mx-[20px] mx-[5px]"} dark={true} />
                Our Clients
            </MediumHeading>
            <div className='mt-elementSpace md:py-[25px] py-[10px] relative'>

            <div className="absolute h-[100%] md:w-[270px] w-[50px] z-[10] top-0 left-0" style={{
              backgroundImage:
                "linear-gradient(to right, white, rgb(255,255,255,0.2))",
            }}></div>
            <div className="absolute h-[100%] md:w-[270px] w-[50px] z-[10] top-0 right-0" style={{
              backgroundImage:
                "linear-gradient(to left, white, rgb(255,255,255,0.1))",
            }}></div>
            <Marquee pauseOnHover={true} className='relative'>


                <img src="/logo1.png" className='mr-[120px] h-[50px]' alt="" />
                <img src="/logo2.png" className='mr-[120px] h-[50px]' alt="" />
                <img src="/newlogo.png" className='mr-[120px] h-[50px]' alt="" />
                {/* <img src="/logo5.png" className='mr-[120px] h-[50px]' alt="" /> */}
                <img src="/logo6.png" className='mr-[120px] h-[50px] object-cover w-[180px]' alt="" />
                <img src="/logo7.png" className='mr-[120px] h-[50px]' alt="" />
                <img src="/logo8.png" className='mr-[120px] h-[50px]' alt="" />
                <img src="/logo9.png" className='mr-[120px] h-[50px]' alt="" />
                <img src="/logo10.png" className='mr-[120px] h-[50px]' alt="" />
                <img src="/logo11.png" className='mr-[120px] h-[50px]' alt="" />
                <img src="/logo12.png" className='mr-[120px] h-[50px]' alt="" />
            </Marquee>
            </div>
        </div>
    )
}