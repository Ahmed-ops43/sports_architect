"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { state } from "@/store";
import { motion } from "framer-motion";
// import homep1 from '../../public/P-1/R-1.jpg'




import Wrapper from "@/components/wrapper";
import Autoplay from "embla-carousel-autoplay";
import LargeHeading from "@/components/TypoGraphy/heaidng-large";
import Triangle from "@/components/triangle";
import SmallParagraph from "@/components/TypoGraphy/paragraph-small";


export default function LandingSection() {
  return (
    <section
      className="h-[100vh]"
      onMouseEnter={() => {
        state.cursorHovered = true;
        state.cursorText = "Scroll Down";
      }}
      onMouseLeave={() => {
        state.cursorHovered = false;
        state.cursorText = "";
      }}
    >
      {/* <img src="/1-min.jpg" alt="" /> */}
      <Wrapper className={"h-full overflow-hidden"}>
        <div className="w-full h-full relative overflow-hidden md:rounded-[80px] rounded-[50px]">
          <div className="absolute top-0 left-0 w-full h-full bg-black z-[2] opacity-[.6] md:rounded-[80px] rounded-[50px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-black z-[4] opacity-[0] md:rounded-[80px] rounded-[50px]"></div>
          <div className="absolute top-0 left-0 w-full h-full z-[3] md:p-[50px] p-[15px] flex items-center">
            <div>
              <LargeHeading
                className={"hidden md:flex items-center gap-[10px] text-white"}
              >
                {" "}
                <Triangle className={"mx-[20px]"} dark={false} /> Innovative 3D 
                Architecture 
              </LargeHeading>
              <LargeHeading
                className={"text-white hidden md:flex leading-[100%]"}
              >
                Solutions for Sports.
              </LargeHeading>
              <LargeHeading
                className={"text-white block md:hidden leading-[120%]"}
              >
                Innovative 3D Architecture  Solutions for Sports.
              </LargeHeading>
              <SmallParagraph className={"text-white mt-[25px]"}>
              Transforming Ideas into 3D Designs.
              </SmallParagraph>
            </div>
          </div>
          <motion.div initial={{ y: "30px", transform:"scale(1.2)", filter:"blur(10px)" }}
        whileInView={{ y: "0px", transform:"scale(1)", filter:"blur(0px)" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full h-full"
        >

          <Carousel
            className="h-full overflow-hidden md:rounded-[80px] rounded-[50px]"
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                  <img
                    src='/P-1/R-1.jpg'
                    className="w-full h-full object-cover md:rounded-[80px] rounded-[50px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full h-[100vh] ">
                <img
                    src='/P-1/R-2.jpg'
                    className="w-full h-full object-cover md:rounded-[80px] rounded-[50px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                <img
                   src='/P-1/R-3.jpg'
                    className="w-full h-full object-cover md:rounded-[80px] rounded-[50px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                <img
                    src='/P-2/6.jpg'
                    className="w-full h-full object-cover md:rounded-[80px] rounded-[50px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                <img
                    src='/P-2/R-11.jpg'
                    className="w-full h-full object-cover md:rounded-[80px] rounded-[50px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                <img
                    src='/P-2/R-12.jpg'
                    className="w-full h-full object-cover md:rounded-[80px] rounded-[50px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                <img
                    src='/P-3/R-7.jpg'
                    className="w-full h-full object-cover md:rounded-[80px] rounded-[50px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                <img
                    src='/P-4/R-1.jpg'
                    className="w-full h-full object-cover md:rounded-[80px] rounded-[50px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                <img
                    src='/P-4/R-9.jpg'
                    className="w-full h-full object-cover md:rounded-[80px] rounded-[50px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                <img
                    src='/P-4/R-10.jpg'
                    className="w-full h-full object-cover md:rounded-[80px] rounded-[50px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                <img
                    src='/P-5/P-5.jpg'
                    className="w-full h-full object-cover md:rounded-[80px] rounded-[50px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                <img
                    src='/P-6/7.jpg'
                    className="w-full h-full object-cover md:rounded-[80px] rounded-[50px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                <img
                    src='/P-7/R-2.jpg'
                    className="w-full h-full object-cover md:rounded-[80px] rounded-[50px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              
            
            </CarouselContent>
          </Carousel>
          </motion.div>

        </div>
      </Wrapper>
    </section>
  );
}
