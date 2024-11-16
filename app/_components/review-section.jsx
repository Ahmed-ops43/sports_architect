import Triangle from "@/components/triangle";
import MediumHeading from "@/components/TypoGraphy/heading-medium";
import SmallParagraph from "@/components/TypoGraphy/paragraph-small";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Wrapper from "@/components/wrapper";
import Autoplay from "embla-carousel-autoplay"


export default function ReviewsSection() {

  const reviews = [
    {
      name:"Saudi Arabia",
      review:"Fantastic professional and willing to go the extra mile for clients without any fuss. Delivery on time and fantastic coordination and understanding of client needs. We will work together on many projects in Sha Allah. Well done 👍🏿"
    },
    {
      name:"United States",
      review:"Ihtisham.c exceeded my expectations with a great design based on our conversation. Working with him was a breeze thanks to his politeness, deep understanding, and quick responsiveness. Highly recommend! 👍"
    },
    {
      name:"United States",
      review:"This is our third experience working together and IHTISHAM always delivers for us. Thank you for the continued hard work! I highly recommend him for any project that you need design assistance with."
    },
    {
      name:"Bermuda",
      review:"Amazing work, delivered the design we were looking for. Quality work and not affraid to add some additional requests we add. Class act, thanks a million"
    },
    {
      name:"New Zealand",
      review:"Met expectations and requirements in very quick time. Responded to adjustments very quickly. Not much to change from first copy. Exceptional. Would work with again. Very happy."
    },
    {
      name:"France",
      review:"Nothing short of perfection. From communication to execution. The best experience I’ve had on Fivrr. Strongly recommend to anyone who wants a creative partner."
    },
  ]

  return (
    <section className=" mt-sectionSepration">

<MediumHeading className={"flex gap-[10px] md:px-[50px] px-[15px] items-center"}>
                <Triangle className={"md:mx-[20px] mx-[5px]"} dark={true} />
                Reviews
            </MediumHeading>
       
      <Wrapper className={"md:px-[30px] px-[12px] mt-[-15px]"}>
        {/* <MediumHeading className={"flex gap-[10px] items-center"}>
          <Triangle className={"md:mx-[20px] mx-[5px]"} dark={true} />
          Reviews
        </MediumHeading> */}
        
        <Carousel opts={{loop:true}} plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]} className="w-full mt-elementSpace relative overflow-hidden">
        <CarouselContent>
        {reviews.map((review,index)=>
        
            <CarouselItem key={index} className="md:basis-1/2">
            <ReviewCard review={review} />
            </CarouselItem>
        )}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[10px] md:flex hidden" />
          <CarouselNext className="absolute bottom-0 right-[10px] md:flex hidden" />
        </Carousel>
      </Wrapper>
    </section>
  );
}


const ReviewCard = ({review}) =>{
    return (
        <div  className="bg-black md:min-h-[320px] min-h-[250px] md:p-[30px] p-[20px] md:rounded-tl-[50px] rounded-tl-[39px] ">
            <img src="/quotes.png" className="md:w-[50px] w-[35px]" alt="" />
            <SmallParagraph className={"mt-[20px] text-white"}>
            {review.review}
            </SmallParagraph>
            <div className="flex justify-end">
                <SmallParagraph className={"mt-[20px] text-white font-bold italic"}>~ {review.name}</SmallParagraph>
            </div>
        </div>
    )
}