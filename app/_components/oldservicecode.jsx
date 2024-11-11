// import Triangle from "@/components/triangle";
// import MediumHeading from "@/components/TypoGraphy/heading-medium";
// import SmallHeading from "@/components/TypoGraphy/heading-small";
// import LargeParagraph from "@/components/TypoGraphy/paragraph-large";
// import Wrapper from "@/components/wrapper";

// import { motion } from "framer-motion";

// export default function OldServiceCode() {
//   return (
//     <section className="w-full relative ">
//       <Wrapper className={"md:h-[110vh] h-[90vh] max-h-[1000px] min-h-[800px]"}>
//         <div className="md:rounded-[80px] rounded-[50px] h-full overflow-hidden bg-black py-[50px] px-[15px] relative">
//           <div
//             className="absolute w-full h-[90%] top-[10%] left-0 bottom-0 right-0 flex justify-center items-center z-[2]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(to bottom, black, rgb(0,0,0,.3))",
//             }}
//           ></div>
//         <div className="absolute w-full h-[90%] top-[10%] left-0 bottom-0 right-0 flex justify-center items-center z-[1]">
//             <div className="w-[85%] h-[80%] relative overflow-hidden">
//               {/* <video  autoPlay muted loop className={"w-full h-full object-cover"}>
//           <source src="/service_video.mp4" type="video/mp4" />
//         </video> */}

//               {/* demp */}


//               <motion.img initial={{ y: "30px", transform:"scale(1.2)", filter:"blur(40px)" }}
//         whileInView={{ y: "0px", transform:"scale(1)", filter:"blur(0px)" }}
//         transition={{ duration: 1, ease: "easeInOut" }} src="/1-min.jpg" className={"w-full h-full object-cover"} alt="" />

//               {/* Sides to give video rectangle a different shape */}
//               <div className="absolute h-[200%] w-[150px] bg-black top-[-50%] left-[-120px] skew-x-[-4deg]"></div>
//               <div className="absolute h-[200%] w-[150px] bg-black top-[-50%] right-[-120px] skew-x-[4deg]"></div>
//             </div>
//           </div>
//           <div className="z-[3] relative">
//             <MediumHeading
//               className={"flex gap-[10px] md:px-[20px] text-white items-center"}
//             >
//               <Triangle className={"md:mx-[20px] mx-[5px]"} dark={false} />
//               Services
//             </MediumHeading>
//             <SmallHeading className={"text-white mt-[50px] text-center"}>
//               3D SPORTS ARCHITECTURE
//             </SmallHeading>
//             <div className="flex flex-col items-center">
//               <SmallHeading
//                 className={
//                   "text-black mt-[15px] w-full py-[5px] max-w-[700px] text-center bg-mainColor"
//                 }
//               >
//                 DESIGN, ANIMATION, PLANING
//               </SmallHeading>
//               <LargeParagraph
//                 className={
//                   "text-white w-full max-w-[600px] text-center mt-[80px]"
//                 }
//               >
//                 3D DESIGNS AND ANIMATION ESPECIALLY FOR YOUTUBE AND SPORTS
//                 FIRMS.
//               </LargeParagraph>
//             </div>
//           </div>
//         </div>
//       </Wrapper>
//     </section>
//   );
// }
