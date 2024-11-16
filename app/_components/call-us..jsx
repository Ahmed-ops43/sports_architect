"use client"

import ReuseableButton from "@/components/button";
import Triangle from "@/components/triangle";
import MediumHeading from "@/components/TypoGraphy/heading-medium";
import Wrapper from "@/components/wrapper";
import Cal, { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import { useEffect } from "react";


export default function CallUsSection() {
  return (
    <section className="w-full relative ">
      <MediumHeading className={"flex gap-[10px] md:px-[50px] px-[15px] items-center"}>
                <Triangle className={"md:mx-[20px] mx-[5px]"} dark={true} />
               Start a Project
            </MediumHeading>
      <Wrapper>
        <div className="md:rounded-[80px] rounded-[50px] md:mt-[40px] mt-[20px] h-full overflow-hidden bg-black md:py-[50px] py-[25px] px-[15px] relative">
          {/* <MediumHeading
            className={"flex gap-[10px]  md:px-[20px] text-white items-center"}
          >
            <Triangle className={"md:mx-[20px] mx-[5px]"} dark={false} />
            Start a Project
          </MediumHeading> */}

<div className="md:mt-sectionSepration"></div>
          
          
          <CallBox/>

          <div className="w-full flex justify-center"></div>
          <Link href={"/callus"} className="flex  justify-center  ">
          <ReuseableButton className={"w-[80%] md:hidden block"}>Start a Project</ReuseableButton>
          </Link>

        </div>

      </Wrapper>
    </section>
  );
}



function CallBox() {
useEffect(()=>{
  (async function () {
  const cal = await getCalApi({"namespace":"30min"});
  cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
  })();
}, [])
return <Cal namespace="30min"
  calLink="ihtisham-cheema-jnabl1/30min"
  style={{width:"100%",height:"100%",overflow:"hidden"}}
  config={{"layout":"month_view"}}
  className="md:block hidden overflow-hidden"
  
  
/>;
};
