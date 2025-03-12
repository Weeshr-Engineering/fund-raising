'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";
// import { FiStar } from 'react-icons/fi'; // Example SVG icon from react-icons

const Companies = () => {
  // const data
  return (
    <div className='w-full mt-12 min-h-fit'>
      <div className="relative pt-8 lg:px-12 md:pt-0 flex justify-start items-start w-full md:w-auto">
        <h2 className="text-white pt-3 md:pb-10 pl-4 md:pl-0 font-semibold  text-left w-full flex justify-start items-start text-3xl md:text-5xl">
          Businesses they`ve
          <br />
          worked with
        </h2>
      </div>
      <Infinitystrip />
      <div className='mt-32 flex flex-col gap-4 md:mt-12 md:flex-row items-center justify-between w-full px-4 lg:px-12'>
        <div className='bg-[#D9D9D933] flex flex-col items-center justify-center p-2 rounded-3xl w-full md:w-[400px]'>
          <Image src='https://res.cloudinary.com/drykej1am/image/upload/v1741643919/weeshr-funding/radar-line_q0pqzh.png' alt='' width={30} height={30} className='my-4' />
          <button className='flex items-center justify-center rounded-xl py-3 w-full text-white bg-[#5CAF69]'>Invest Now</button>
        </div>
        <div className='bg-[#D9D9D933] bg-opacity-50 flex flex-col items-center justify-center p-2 rounded-3xl w-full md:w-[400px]'>
          <Image src='https://res.cloudinary.com/drykej1am/image/upload/v1741643949/weeshr-funding/calendar-todo-line_j1cyif.png' alt='' width={30} height={30} className='my-4' />
          <button className='flex items-center justify-center rounded-xl py-3 w-full text-white bg-[#217E7E]'>I want a meeting</button>
        </div>
        <div className='bg-[#D9D9D933] flex flex-col items-center justify-center p-2 rounded-3xl w-full md:w-[400px]'>
          <Image src='https://res.cloudinary.com/drykej1am/image/upload/v1741643920/weeshr-funding/slideshow-line_qj0mne.png' alt='' width={30} height={30} className='my-4' />
          <button className='flex items-center justify-center rounded-xl py-3 w-full text-white bg-[#3770AD]'>Join Next Public Pitch</button>
        </div>
      </div>
    </div>
  )
}

export default Companies;

function Infinitystrip() {
  const [position, setPosition] = useState(0);
  const icons = [
    'https://res.cloudinary.com/drykej1am/image/upload/v1741637763/weeshr-funding/Wealth_White_Logo_4x_1_eqmyid.png',
    'https://res.cloudinary.com/drykej1am/image/upload/v1741637762/weeshr-funding/piggyvest-seeklogo_1_rcavj0.png',
    'https://res.cloudinary.com/drykej1am/image/upload/v1741637760/weeshr-funding/Group_2087330085_ejdgg5.png',
    'https://res.cloudinary.com/drykej1am/image/upload/v1741637760/weeshr-funding/Group_2087330082_oionaj.png',
    'https://res.cloudinary.com/drykej1am/image/upload/v1741637760/weeshr-funding/freepik_br_481f2bae-985c-4d4a-93e3-5f3dfd058e7a_1_rifacv.png',
    'https://res.cloudinary.com/drykej1am/image/upload/v1741637759/weeshr-funding/british-council-seeklogo_1_qo5jbq.png'

  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % (icons.length * 40)); // Adjust spacing as needed
    }, 30);

    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <div className="relative overflow-hidden h-[7vh] w-full space-y-6">
      <Marquee pauseOnHover className='flex items-center justify-between w-full gap-4'>
        <div
          className="w-full flex items-center justify-between gap-8 lg:gap-16"
        >
          {icons.map((icon, index) => (
            <Image key={index} src={icon} alt='' width={100} height={100} />
          ))}
        </div>
      </Marquee>
      {/*</div>*/}
    </div >
  );
}

// footer
// https://res.cloudinary.com/drykej1am/image/upload/v1741637765/weeshr-funding/iPhone_14_Pro_Mockup_rfxtia.png

// phone ui
// https://res.cloudinary.com/drykej1am/image/upload/v1741637763/weeshr-funding/iPhone_16_-_Ultramarine_Front_z3lkpt.png

// https://res.cloudinary.com/drykej1am/image/upload/v1741643920/weeshr-funding/slideshow-line_qj0mne.png
// https://res.cloudinary.com/drykej1am/image/upload/v1741643919/weeshr-funding/radar-line_q0pqzh.png
// https://res.cloudinary.com/drykej1am/image/upload/v1741643949/weeshr-funding/calendar-todo-line_j1cyif.png