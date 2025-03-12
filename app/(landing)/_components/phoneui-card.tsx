'use client'
import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";

const PhoneUI = () => {
  // const data
  return (
    <div className='w-full mt-12 h-[70dvh] flex flex-col items-center justify-center rounded-2xl overflow-hidden relative'>
      <Image className='absolute top-0 left-0 -z-10 w-full h-full ' src='https://res.cloudinary.com/drykej1am/image/upload/v1741757808/weeshr-funding/Rectangle_3847_1_gozlia.png' alt='' width={100} height={100} />
      {/*weeshr text*/}
      <div className="text-white absolute top-0 left-1/2 lg:left-16 transform -translate-x-1/2 lg:-translate-x-0 z-30 text-6xl lg:text-[220px] font-bold p-4" style={{ textShadow: "0 0 10px #3b82f6, 0 0 20px #3b82f6" }}>
        Weeshr
      </div>
      <div className='absolute z-30 top-[20%] left-0 w-full h-fit lg:hidden'>
        <Infinitystrip />
      </div>
      {/*phone image*/}
      <Image className='absolute place-self-center bottom-0 right-0 w-full lg:w-[50%] h-[80%] lg:h-[750px]' src='https://res.cloudinary.com/drykej1am/image/upload/v1741757808/weeshr-funding/iPhones_an26x5.png' alt='' width={500} height={700} />

      {/*<Image className='absolute place-self-center bottom-0 right-0 w-full h-[70%]' src='https://res.cloudinary.com/drykej1am/image/upload/v1741769959/weeshr-funding/iPhones_rerbdo.png' alt='iphone' width={500} height={700} />*/}

      {/*rock base*/}
      <Image className='absolute place-self-center bottom-0 right-0 w-full lg:w-[40%] lg:place-self-start lg:right-0 h-36' src='https://res.cloudinary.com/drykej1am/image/upload/v1741757808/weeshr-funding/mockup_9_Background_Removed_1_chlizf.png' alt='' width={100} height={100} />
      <div className='absolute top-0 left-0 w-full h-full z-50 hidden lg:block'>
        <div className='w-full h-full relative'>
          <div className='absolute hover:p-4 top-1/2 left-20 flex items-center justify-center gap-4 p-3 rounded-full bg-white shadow-md'>
            <Image src='https://res.cloudinary.com/drykej1am/image/upload/v1741754206/weeshr-funding/camera-dynamic-premium_h7kk9y.png' alt='' width={20} height={20} />
            <p>'Personalized Showcase'</p>
          </div>
          <div className='absolute hover:p-4 bottom-24 left-1/4 flex items-center justify-center gap-4 p-3 rounded-full bg-white shadow-md'>
            <Image src='https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/card-dynamic-premium_y6mrei.png' alt='' width={20} height={20} />
            <p>'Get Virtual Card'</p>
          </div>
          <div className='absolute hover:p-4 top-36 left-1/3 flex items-center justify-center gap-4 p-3 rounded-full bg-white shadow-md'>
            <Image src='https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/bag-dynamic-premium_el2cqt.png' alt='' width={20} height={20} />
            <p>'Marketplace'</p>
          </div>
          <div className='absolute hover:p-4 left-36 bottom-48 flex items-center justify-center gap-4 p-3 rounded-full bg-white shadow-md'>
            <Image src='https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/gift-dynamic-premium_eqgfdv.png' alt='' width={20} height={20} />
            <p>'Gift Registry'</p>
          </div>
          <div className='absolute hover:p-4 top-36 left-1/3 flex items-center justify-center gap-4 p-3 rounded-full bg-white shadow-md'>
            <Image src='https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/rocket-dynamic-premium_pk6ywg.png' alt='' width={20} height={20} />
            <p>'Growing Community'</p>
          </div>
          <div className='absolute hover:p-4 top-36 right-12 flex items-center justify-center gap-4 p-3 rounded-full bg-white shadow-md'>
            <Image src='https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/calender-dynamic-premium_z2yrvb.png' alt='' width={20} height={20} />
            <p>'Multiple Events'</p>
          </div>
          <div className='absolute hover:p-4 bottom-48 right-12 flex items-center justify-center gap-4 p-3 rounded-full bg-white shadow-md'>
            <Image src='https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/chat-text-dynamic-premium_ugsott.png' alt='' width={20} height={20} />
            <p>'Send Compliments</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneUI;

function Infinitystrip() {
  const icons = [
    { img: 'https://res.cloudinary.com/drykej1am/image/upload/v1741754206/weeshr-funding/camera-dynamic-premium_h7kk9y.png', name: 'Personalized Showcase' },
    { img: 'https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/card-dynamic-premium_y6mrei.png', name: 'Get Virtual Card' },
    { img: 'https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/bag-dynamic-premium_el2cqt.png', name: 'Marketplace' },
    { img: 'https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/gift-dynamic-premium_eqgfdv.png', name: 'Gift Registry' },
    { img: 'https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/rocket-dynamic-premium_pk6ywg.png', name: 'Growing Community' },
    { img: 'https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/calender-dynamic-premium_z2yrvb.png', name: 'Multiple Events' },
    { img: 'https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/chat-text-dynamic-premium_ugsott.png', name: 'Send Compliments' }
  ]

  return (
    <div className="relative overflow-hidden w-full space-y-6">
      <Marquee pauseOnHover className='flex items-center justify-between w-full gap-4'>
        <div
          className="w-full flex items-center justify-between gap-8 lg:gap-16"
        >
          {icons.map((icon, index) => (
            <div key={index} className='flex items-center justify-center gap-4 p-3 rounded-full bg-white shadow-md'>
              <Image key={index} src={icon.img} alt='' width={20} height={20} />
              <p>{icon.name}</p>
            </div>
          ))}
        </div>
      </Marquee>
      {/*</div>*/}
    </div >
  );
}
