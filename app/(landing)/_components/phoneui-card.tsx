'use client'
import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";

const PhoneUI = () => {
  // const data
  return (
    <div className='w-full mt-12 h-[70dvh] flex flex-col items-center justify-center rounded-2xl overflow-hidden relative'>
      <Image className='absolute top-0 left-0 -z-10 w-full h-full' src='https://res.cloudinary.com/drykej1am/image/upload/v1741757808/weeshr-funding/Rectangle_3847_1_gozlia.png' alt='' width={100} height={100} />
      {/*weeshr text*/}
      {/*<Image className='absolute top-0 left-0 z-30 w h-full' src='https://res.cloudinary.com/drykej1am/image/upload/v1741754210/weeshr-funding/Group_2087330080_s7pnfx.png' alt='' width={100} height={100} />      */}
      <div className='absolute z-30 top-8 left-0 w-full h-fit lg:hidden'>
        <Infinitystrip />
      </div>
      {/*phone image*/}
      <Image className='absolute place-self-center bottom-0 left-0 w-full h-86' src='https://res.cloudinary.com/drykej1am/image/upload/v1741757808/weeshr-funding/iPhones_an26x5.png' alt='' width={500} height={700} />
      <Image className='absolute place-self-center bottom-0 left-0 w-full h-24' src='https://res.cloudinary.com/drykej1am/image/upload/v1741757808/weeshr-funding/mockup_9_Background_Removed_1_chlizf.png' alt='' width={100} height={100} />
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
            <div className='flex items-center justify-center gap-4 p-3 rounded-full bg-white shadow-md'>
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




// https://res.cloudinary.com/drykej1am/image/upload/v1741754206/weeshr-funding/camera-dynamic-premium_h7kk9y.png
// https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/card-dynamic-premium_y6mrei.png
// https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/bag-dynamic-premium_el2cqt.png
// https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/gift-dynamic-premium_eqgfdv.png
// https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/rocket-dynamic-premium_pk6ywg.png
// https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/calender-dynamic-premium_z2yrvb.png
// https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/chat-text-dynamic-premium_ugsott.png
