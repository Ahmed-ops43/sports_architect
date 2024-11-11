"use client";

import ReuseableButton from "@/components/button";
import NavbarOther from "@/components/navbar-other";
import Triangle from "@/components/triangle";
import MediumHeading from "@/components/TypoGraphy/heading-medium";
import Wrapper from "@/components/wrapper";
import Cal, { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import { useEffect } from "react";

export default function CallUsPage() {
  return (
    <main className="w-full relative ">
      <NavbarOther/>

      <Wrapper>
        <div className="md:rounded-[80px] rounded-[50px] md:mt-0 h-full overflow-hidden pt-[25px] pb-[20px] px-[15px] relative">
          <MediumHeading
            className={"flex gap-[10px]  md:px-[20px] text-black items-center"}
          >
            <Triangle className={"md:mx-[20px] mx-[5px]"} dark={true} />
            Start a Project
          </MediumHeading>
          <div className="md:mt-sectionSepration mt-elementSpace"></div>
          <CallBox />
        </div>
      </Wrapper>
    </main>
  );
}

function CallBox() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      namespace="30min"
      calLink="ihtisham-cheema-jnabl1/30min"
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
      config={{ layout: "month_view" }}
    />
  );
}
