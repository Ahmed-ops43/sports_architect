"use client"

import { ReactLenis } from "@studio-freight/react-lenis";
import LandingSection from './_components/landing-section'
import AboutUsSection from './_components/about-us'
import ServicesSection from './_components/services-section'
import PortfolioSection from "./_components/portfolio-section";
import CallUsSection from "./_components/call-us.";
import ReviewsSection from "./_components/review-section";
import MediumHeading from "@/components/TypoGraphy/heading-medium";
import Triangle from "@/components/triangle";
import Navbar from "@/components/navbar";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ReuseableButton from "@/components/button";
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import LargeParagraph from "@/components/TypoGraphy/paragraph-large";
import ResService from "./_components/res-service";

export default function Page() {


  const servicesTarget = useRef(null);
  const portfolioTarget = useRef(null);
  const reviewsTarget = useRef(null);
  const abouttarget = useRef(null);

  // Target Ref Funtions
  const scrollToServices = () => {
    servicesTarget.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToPortfolio = () => {
    portfolioTarget.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToReviews = () => {
    reviewsTarget.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAboutus = () => {
    abouttarget.current?.scrollIntoView({ behavior: 'smooth'})
  }

  const [counterOn, setCounterOn] = useState(false);


  return (
    <ReactLenis root>

    <main className='w-full relative'>
      {/* <LandingPageCursor/> */}
      <Navbar scrollToServices={scrollToServices} scrollToPortfolio={scrollToPortfolio} scrollToReviews={scrollToReviews} scrollToAboutus={scrollToAboutus}   />
      
      <LandingSection />
      <div className='mt-elementSpace flex flex-col md:gap-[0px] gap-elementSpace md:flex-row justify-evenly items-center'>
                <div className='flex flex-col justify-center items-center'>
                <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            // onExit={() => setCounterOn(false)}
          >
                    <h1 className={"text-[70px] font-[600] relative flex"}>
                    {counterOn && (
                <CountUp start={0} end={250} duration={2} delay={0} />
              )}+
                        <div className='absolute bottom-[15px] left-[-10%] w-[120%] h-[25px] z-[-1] bg-mainColor'></div>
                    </h1>

          </ScrollTrigger>
                    <LargeParagraph>Happy Clients</LargeParagraph>
                </div>
                <div className='flex flex-col justify-center items-center'>
                <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            // onExit={() => setCounterOn(false)}
          >
                    <h1 className={"text-[70px] font-[600] relative flex"}>
                    {counterOn && (
                <CountUp start={0} end={5} duration={4} delay={0} />
              )}+
                        <div className='absolute bottom-[15px] left-[-10%] w-[120%] h-[25px] z-[-1] bg-mainColor'></div>
                    </h1>

          </ScrollTrigger>
                    <LargeParagraph>Years of Experience</LargeParagraph>
                </div>
            </div>
      <div className="w-full" ref={portfolioTarget}></div>
      <MediumHeading className={"flex gap-[10px] md:px-[50px] px-[15px] py-elementSpace items-center"}>
          <Triangle className={"md:mx-[20px] mx-[5px]"} dark={true} />
          Our Work
        </MediumHeading>
      
      <PortfolioSection/>
      <div className="w-full" ref={servicesTarget}></div>
      <ServicesSection/>
      {/* <ResService/> */}
      <div className="w-full" ref={reviewsTarget}></div>
      {/* <MediumHeading className={"flex gap-[10px] md:px-[50px] px-[15px] pt-[40px] items-center"}>
          <Triangle className={"md:mx-[20px] mx-[5px]"} dark={true} />
         Reviews
        </MediumHeading> */}
      <ReviewsSection/>
      <div className="w-full" ref={abouttarget}></div>
      <AboutUsSection/>
     
     
     
        
      <CallUsSection/>
     


    <motion.div className="fixed bottom-[35px] right-[31px] md:bottom-[50px] md:right-[60px] z-[20]" initial={{ y: "20px",x:"0px", opacity: "0%", blur: "100px" }}
    whileInView={{ y: "0px", x:"0px", opacity: "100%", blur: "0px" }}
    transition={{ duration: 0.6, ease: "easeInOut" }}>

        <Link href={"/callus"}>
        
        <ReuseableButton className={"shadow-lg md:scale-[1.2]"}>
          START A PROJECT
        </ReuseableButton>
        </Link>
        </motion.div>


    </main>
    </ReactLenis>
  )
}
