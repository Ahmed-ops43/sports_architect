import Triangle from "@/components/triangle";
import MediumHeading from "@/components/TypoGraphy/heading-medium";
import SmallHeading from "@/components/TypoGraphy/heading-small";
import LargeParagraph from "@/components/TypoGraphy/paragraph-large";
import Wrapper from "@/components/wrapper";

import { motion } from "framer-motion";

export default function ResService() {
  return (
    <section className="w-full relative ">
      <Wrapper className={" md:h-[110vh]"}>
        <div className="md:rounded-[80px] rounded-[50px] h-full overflow-hidden bg-black py-[50px] px-[15px] relative">
          <div className="z-[3] relative">
            <MediumHeading
              className={"flex gap-[10px] md:px-[20px] text-white items-center"}
            >
              <Triangle className={"md:mx-[20px] mx-[5px]"} dark={false} />
              Services
            </MediumHeading>
            {/* <SmallHeading className={"text-white mt-[50px] text-center"}>
              3D SPORTS ARCHITECTURE
            </SmallHeading> */}
            {/* <div className="flex flex-col items-center">
              <SmallHeading
                className={
                  "text-black mt-[15px] w-full py-[5px] max-w-[700px] text-center bg-mainColor"
                }
              >
                DESIGN, ANIMATION, PLANING
              </SmallHeading>
              <LargeParagraph
                className={
                  "text-white w-full max-w-[600px] text-center mt-[80px]"
                }
              >
                3D DESIGNS AND ANIMATION ESPECIALLY FOR YOUTUBE AND SPORTS
                FIRMS.
              </LargeParagraph>
            </div> */}
          </div>




          <div className=" flex w-full md:flex-row flex-col justify-between items-start mt-9 md:mt-10 gap-y-4 md:gap-x-6 ">
            <div className="   flex flex-col md:pt-[30px]">
              <div className="   flex justify-center  gap-3 text-mainColor md:text-[17px] text-[14px] font-semibold ">
              <h1>1: </h1>
                <h1>2D Planning and CAD Drawings</h1>
              </div>
              <div className="  text-white mt-3 md:mt-5 pl-4 text-[13px] md:text-[15px] md:space-y-4">
                <li >Precise architectural layouts for sports facilities</li>
                <li >High-detail floor plans, site layouts, and schematics</li>
                <li >Ensures clarity and accuracy in project execution</li>
                <li >Customized to meet specific project requirements</li>
                <li >3D Design and Animation</li>

              </div>
            </div>

            <div className="    flex flex-col items-center  md:pt-[30px]">
            <div className=" flex justify-center  gap-3 text-mainColor md:text-[17px] text-[14px] font-semibold md:pl-4">
                <h1>2: </h1>
                <h1>Realistic 3D renderings to visualize your facility</h1>
              </div>
              <div className=" text-white mt-3 md:mt-5 pl-4 text-[13px] md:text-[15px] md:space-y-4">
                <li >Smooth animations for an immersive experience</li>
                <li >Demonstrates lighting, material finishes, and spatial design</li>
                <li >Ideal for showcasing the final look and feel</li>
                <li >Concept 3D Planning Presentation</li>

              </div>
            </div>

            <div className="   flex flex-col items-center  md:pt-[30px]">
            <div className=" flex justify-center gap-3 text-mainColor md:pl-4 md:text-[17px] text-[14px] font-semibold">
                <h1>3: </h1>
                <h1>Initial 3D models for early-stage project visualization</h1>
              </div>
              <div className=" text-white mt-3 md:mt-5 pl-4 text-[13px] md:text-[15px] md:space-y-4">
                <li >Highlights innovative design and functionality</li>
                <li >Great for pitches, sponsorships, and presentations</li>
                <li >Provides in-depth perspective before construction</li>
               

              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
