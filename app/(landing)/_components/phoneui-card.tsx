"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const PhoneUI = () => {
  const getRandomAnimation = () => {
    // Use smaller y-values for subtle movement
    const variant = Math.random() > 0.5 ? { y: [0, -5, 0] } : { y: [0, 5, 0] };

    return {
      animate: variant,
      transition: {
        duration: 4, // Shorter duration for smoother animation
        repeat: Infinity, // Loop the animation
        ease: "easeInOut", // Smooth easing function
        delay: Math.random() * 0.5, // Random delay up to 0.5 seconds
        repeatType: "mirror", // Smoothly reverse the animation
      },
    };
  };

  return (
    <div className="flex justify-center items-center w-full px-4 rounded-lg">
      <div className="w-full mt-12 lg:mt-36 h-[75dvh] lg:h-[75dvh] flex flex-col items-center justify-center relative rounded-lg">
        <Image
          className="absolute top-0 left-0 -z-10 w-full h-full overflow-hide rounded-md"
          src="https://res.cloudinary.com/drykej1am/image/upload/v1741956580/weeshr_website/Rectangle_3847_1_gozlia_blc6om.png"
          alt=""
          width={500}
          height={500}
        />
        {/* Weeshr text */}
        <div
          className="text-white absolute top-0 left-1/2 lg:left-16 transform -translate-x-1/2 lg:-translate-x-0 z-30 lg:text-6xl xl:text-[200px] text-[50px] lg:text-[150px] font-bold p-4 pt-10"
          style={{ textShadow: "0 0 10px #3b82f6, 0 0 20px #3b82f6" }}
        >
          Weeshr
        </div>
        <div className="absolute z-30 md:top-[20%] top-[23%] left-0 w-full h-fit lg:hidden">
          <Infinitystrip />
        </div>
        {/* Phone image */}
        <Image
          className="absolute place-self-center -bottom-0 lg:bottom-6 z-0 right-0 w-[140%] lg:w-[50%] h-[66%] md:h-[650px] lg:object-none object-contain"
          src="https://res.cloudinary.com/drykej1am/image/upload/v1741769959/weeshr-funding/iPhones_rerbdo.png"
          alt=""
          width={500}
          height={700}
        />
        {/* Rock base */}
        <Image
          className="absolute place-self-center bottom-0 right-0 -z-10 w-full lg:w-[55%] lg:place-self-start lg:right-0 h-36 object-none"
          src="https://res.cloudinary.com/drykej1am/image/upload/v1741757808/weeshr-funding/mockup_9_Background_Removed_1_chlizf.png"
          alt=""
          width={600}
          height={600}
        />

        {/* Animated elements */}
        <div className="absolute top-0 left-0 w-full h-full z-50 hidden lg:block">
          <div className="w-full h-full relative">
            {[
              {
                className: "top-[10px] left-[64px]",
                img: "https://res.cloudinary.com/drykej1am/image/upload/v1741754206/weeshr-funding/camera-dynamic-premium_h7kk9y.png",
                text: "Personalized Showcase",
              },
              {
                className: "bottom-[147px] left-[179px]",
                img: "https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/card-dynamic-premium_y6mrei.png",
                text: "Get Virtual Card",
              },
              {
                className: "top-[127px] right-[54px]",
                img: "https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/bag-dynamic-premium_el2cqt.png",
                text: "Marketplace",
              },
              {
                className: "left-[597px] bottom-[123px]",
                img: "https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/gift-dynamic-premium_eqgfdv.png",
                text: "Gift Registry",
              },
              {
                className: "bottom-[200px] left-[432px]",
                img: "https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/rocket-dynamic-premium_pk6ywg.png",
                text: "Growing Community",
              },
              {
                className: "top-[265px] right-[533px]",
                img: "https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/calender-dynamic-premium_z2yrvb.png",
                text: "Multiple Events",
              },
              {
                className: "bottom-[202px] right-[48px]",
                img: "https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/chat-text-dynamic-premium_ugsott.png",
                text: "Send Compliments",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`absolute hover:p-4 flex items-center justify-center gap-4 p-3 rounded-full bg-white shadow-md ${item.className}`}
                animate={getRandomAnimation().animate}
              // transition={getRandomAnimation().transition}
              >
                <Image src={item.img} alt="" width={20} height={20} />
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneUI;

function Infinitystrip() {
  const icons = [
    {
      img: "https://res.cloudinary.com/drykej1am/image/upload/v1741754206/weeshr-funding/camera-dynamic-premium_h7kk9y.png",
      name: "Personalized Showcase",
    },
    {
      img: "https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/card-dynamic-premium_y6mrei.png",
      name: "Get Virtual Card",
    },
    {
      img: "https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/bag-dynamic-premium_el2cqt.png",
      name: "Marketplace",
    },
    {
      img: "https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/gift-dynamic-premium_eqgfdv.png",
      name: "Gift Registry",
    },
    {
      img: "https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/rocket-dynamic-premium_pk6ywg.png",
      name: "Growing Community",
    },
    {
      img: "https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/calender-dynamic-premium_z2yrvb.png",
      name: "Multiple Events",
    },
    {
      img: "https://res.cloudinary.com/drykej1am/image/upload/v1741754205/weeshr-funding/chat-text-dynamic-premium_ugsott.png",
      name: "Send Compliments",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full space-y-6">
      <Marquee
        pauseOnHover
        className="flex items-center justify-between w-full gap-4"
      >
        <div className="w-full flex items-center justify-between gap-8 lg:gap-16">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4 p-3 rounded-full bg-white shadow-md"
            >
              <Image src={icon.img} alt="" width={20} height={20} />
              <p>{icon.name}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
