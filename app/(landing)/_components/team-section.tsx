"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll-2";
import { MobileTeamSection } from "./mobile-team-section";
import { teamData } from "@/lib/constants/team-data";

export const TeamComponent = () => {
  return (
    <div className="py-16 w-full text-white h-fit relative">
      {/*lg screen text*/}
      <Image
        alt=""
        src="https://res.cloudinary.com/drykej1am/image/upload/v1741783884/weeshr-funding/WEESHR_CORE_fmuimv.png"
        width={300}
        height={300}
        className="w-60 h-full py-[20%] absolute top-0 left-[35px] xl:left-[180px] hidden lg:block -z-10"
      />
      {/*small screen text*/}
      <Image
        alt=""
        src="https://res.cloudinary.com/drykej1am/image/upload/v1741783872/weeshr-funding/WEESHR_CORE_1_waoxvg.png"
        width={300}
        height={300}
        className="w-60 h-60 absolute bottom-16 left-0 lg:hidden -z-0"
      />
      <div className="container mx-auto px-4 max-w-6xl lg:w-full">
        <div className="gap-8 mb-20 w-full flex flex-col items-center justify-center">
          <motion.div
            className="space-y-8 w-full flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Senior Leadership Team
            </h2>
            <p className="text-md text-muted max-w-6xl text-justify">
              Meet The Mind Behind Weeshr
            </p>
          </motion.div>
          <div className="hidden lg:block">
            <ParallaxScrollSecond teamData={teamData} />
          </div>
          <div className="lg:hidden w-full">
            <MobileTeamSection />
          </div>
        </div>
      </div>
    </div>
  );
};
