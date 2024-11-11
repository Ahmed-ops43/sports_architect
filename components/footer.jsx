import React from 'react'
import SmallParagraph from './TypoGraphy/paragraph-small'

export default function Footer() {
  return (
    <section className='w-full px-[12px]'>
    <div className='w-full md:rounded-t-[80px] rounded-t-[50px] bg-black flex flex-col items-center pb-elementSpace pt-[45px] px-[15px]'>
      <img src="/logowhite.png" className='md:h-[100px] h-[80px]' alt="" />
      <div className=' flex gap-[15px] mt-[15px]'>

        <a href='https://www.instagram.com/thesports.architect/' target='_blank' className='md:w-[60px] md:h-[60px] w-[45px] h-[45px] flex justify-center items-center rounded-full bg-mainColor'>
          <img className='md:w-[30px] md:h-[30px] w-[20px] h-[20px]' src="/insta.png" alt="" />
        </a>
        <a href='https://www.youtube.com/@the.sports.architect' target='_blank' className='md:w-[60px] md:h-[60px] w-[45px] h-[45px] flex justify-center items-center rounded-full bg-mainColor'>
          <img className='md:w-[30px] md:h-[30px] w-[20px] h-[20px]' src="/youtube.png" alt="" />
        </a>

      </div>
        <a className='md:text-[17px] text-[14px] mt-[40px] font-[400] leading-[130%] text-white' href="mainto:the.sportsarchitect@gmail.com" >the.sportsarchitect@gmail.com</a>
        <p className={"md:text-[17px] text-[14px] font-[400] leading-[130%] text-white mt-[25px]"}>
        © ALL RIGHTS ARE RESERVED 2024
        </p>
    </div>
    </section>
  )
}
