"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll-2";
import { MobileTeamSection } from "./mobile-team-section";

const teamData = [
  {
    name: "Abiola Tosin",
    title: "Co-founder/CEO",
    content:
      "Led teams and businesses across industries to drive growth for both local and international businesses. Have worked behind the scenes for notable brands like Cowrywise, Wealth.ng, Sankore, Fidelity Bank, FMN, British Council and more.",
    image:
      "https://res.cloudinary.com/drykej1am/image/upload/v1741783880/weeshr-funding/Rectangle_3854_8_cf1od5.png",
  },
  {
    name: "Hamid Oyempemi",
    title: "Head of Mobile Engineering",
    content:
      "Mobile Software Engineer with 5 years of experience in Flutter, Android & iOS development. Worked on Dukka, Baxi Onafriq, Mylnvester, Kada, Wealthng & Zuri Chat. Holds Google Africa Dev & HNG certifications, plus expertise in Jetpack Compose & Kotlin.",
    image:
      "https://res.cloudinary.com/drykej1am/image/upload/v1741783911/weeshr-funding/Rectangle_3854_5_m3zjec.png",
  },
  {
    name: "Richard Oseghale",
    title: "Head of Marketing",
    content:
      "Creative Art, Design and Architectural specialist with close to 8 years of experience, working with agencies in the design, music, financial, culinary, and Communication industries. Past Projects Creative director for Leadway Auto Insurance Campaign, Mavin Chapter X Campaign",
    image:
      "https://res.cloudinary.com/drykej1am/image/upload/v1741783898/weeshr-funding/Rectangle_3854_2_deitkz.png",
  },
  {
    name: "Saloni Modi",
    title: "Co-founder/COO",
    content:
      "Innovative Project Manager with 5+ years of experience, delivering 290+ projects across 20+ countries for 40+ brands. Worked with the Indian Army & German Government on robust tech solutions. Past Project Instaride, Xenox Labs, Vyperr Scripts, and more. Holds certifications from Google India, EC-Council (CEH), and Cisco.",
    image:
      "https://res.cloudinary.com/drykej1am/image/upload/v1741783913/weeshr-funding/Rectangle_3854_7_i1pxo7.png",
  },
  {
    name: "Adeola Bada",
    title: "Head of Backend Engineering",
    content:
      "Software Engineer with 5 years of experience in backend development, team leadership & scalabe architectures. Worked on Sil k y Systems ERP, E-jurney & DueDash. Skilled in Node.js, Larave, Vue.js & more. Holds multiple tech & UX certifications.",
    image:
      "https://res.cloudinary.com/drykej1am/image/upload/v1741783899/weeshr-funding/Rectangle_3854_4_zvqffl.png",
  },
  {
    name: "Jemimah Idowu",
    title: "Finance",
    content:
      "Global growth Manager. Extensive multi-sector experience in global strategy, finance and business operations across different regions.",
    image:
      "https://res.cloudinary.com/drykej1am/image/upload/v1741783896/weeshr-funding/Rectangle_3854_1_oigxqb.png",
  },
  {
    name: "Eugene Kolapo",
    title: "Co-founder/CEO",
    content:
      "Innovative Full-tack Software Engineer with 5+ years of experience in front-ed & back-end development. Worked on Birble Al, Wealth.ng, Sankore, Kada, Weeshr & more. OCA, OCP certified, skilled in React, Node, Vue & Tailwind CSS.",
    image:
      "https://res.cloudinary.com/drykej1am/image/upload/v1741783912/weeshr-funding/Rectangle_3854_6_chhuvp.png",
  },
  {
    name: "Charles Popson",
    title: "Head of Product",
    content:
      "Experienced product lead with a passion for solving challenges and crafting intuitive digital experiences. Has led and driven growth in finance, investment, Al, and real estate with Sankore, Wealth.ng, Cavisa Designs, Purple Shelves, Kada, and Juno.",
    image:
      "https://res.cloudinary.com/drykej1am/image/upload/v1741783909/weeshr-funding/Rectangle_3854_3_azvxlx.png",
  },
  {
    name: "Christian Sisson",
    title: "Advisor",
    content:
      "Christian Sisson is a 3x entrepreneur and founder of A*C: Antidote to Chaos. He has a strong career journey, building and scaling businesses while working with top brands and industries to drive innovation and growth.",
    image:
      "https://res.cloudinary.com/drykej1am/image/upload/v1741783888/weeshr-funding/Rectangle_3854_laquhv.png",
  },
];

export const TeamComponent = () => {
  return (
    <div className="py-16 w-full text-white h-fit relative">
      {/*lg screen text*/}
      <Image
        alt=""
        src="https://res.cloudinary.com/drykej1am/image/upload/v1741783884/weeshr-funding/WEESHR_CORE_fmuimv.png"
        width={300}
        height={300}
        className="w-60 h-full py-[20%] absolute top-0 left-[20%] hidden lg:block -z-10"
      />
      {/*small screen text*/}
      <Image
        alt=""
        src="https://res.cloudinary.com/drykej1am/image/upload/v1741783872/weeshr-funding/WEESHR_CORE_1_waoxvg.png"
        width={300}
        height={300}
        className="w-60 h-60 absolute bottom-0 left-0 lg:hidden -z-0"
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
