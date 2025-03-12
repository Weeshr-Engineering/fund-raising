'use client'
import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";

const teamData = [
  {
    name: 'Abiola Tosin',
    title: 'Co-founder/CEO',
    content: 'Led teams and businesses across industries to drive growth for both local and international businesses. Have worked behind the scenes for notable brands like Cowrywise, Wealth.ng, Sankore, Fidelity Bank, FMN, British Council and more.',
    image: 'https://res.cloudinary.com/drykej1am/image/upload/v1741783880/weeshr-funding/Rectangle_3854_8_cf1od5.png'
  },
  {
    name: 'Hamid Oyempemi',
    title: 'Head of Mobile Engineering',
    content: 'Mobile Software Engineer with 5 years of experience in Flutter, Android & iOS development. Worked on Dukka, Baxi Onafriq, Mylnvester, Kada, Wealthng & Zuri Chat. Holds Google Africa Dev & HNG certifications, plus expertise in Jetpack Compose & Kotlin.',
    image: 'https://res.cloudinary.com/drykej1am/image/upload/v1741783911/weeshr-funding/Rectangle_3854_5_m3zjec.png'
  },
  {
    name: 'Richard Oseghale',
    title: 'Head of Marketing',
    content: 'Creative Art, Design and Architectural specialist with close to 8 years of experience, working with agencies in the design, music, financial, culinary, and Communication industries. Past Projects Creative director for Leadway Auto Insurance Campaign, Mavin Chapter X Campaign',
    image: 'https://res.cloudinary.com/drykej1am/image/upload/v1741783898/weeshr-funding/Rectangle_3854_2_deitkz.png'
  },
  {
    name: 'Saloni Modi',
    title: 'Co-founder/COO',
    content: 'Innovative Project Manager with 5+ years of experience, delivering 290+ projects across 20+ countries for 40+ brands. Worked with the Indian Army & German Government on robust tech solutions. Past Project Instaride, Xenox Labs, Vyperr Scripts, and more. Holds certifications from Google India, EC-Council (CEH), and Cisco.',
    image: 'https://res.cloudinary.com/drykej1am/image/upload/v1741783913/weeshr-funding/Rectangle_3854_7_i1pxo7.png'
  },
  {
    name: 'Adeola Bada',
    title: 'Head of Backend Engineering',
    content: 'Software Engineer with 5 years of experience in backend development, team leadership & scalabe architectures. Worked on Sil k y Systems ERP, E-jurney & DueDash. Skilled in Node.js, Larave, Vue.js & more. Holds multiple tech & UX certifications.',
    image: 'https://res.cloudinary.com/drykej1am/image/upload/v1741783899/weeshr-funding/Rectangle_3854_4_zvqffl.png'
  },
  {
    name: 'Jemimah Idowu',
    title: 'Finance',
    content: 'Global growth Manager. Extensive multi-sector experience in global strategy, finance and business operations across different regions.',
    image: 'https://res.cloudinary.com/drykej1am/image/upload/v1741783896/weeshr-funding/Rectangle_3854_1_oigxqb.png'
  },
  {
    name: 'Eugene Kolapo',
    title: 'Co-founder/CEO',
    content: 'Innovative Full-tack Software Engineer with 5+ years of experience in front-ed & back-end development. Worked on Birble Al, Wealth.ng, Sankore, Kada, Weeshr & more. OCA, OCP certified, skilled in React, Node, Vue & Tailwind CSS.',
    image: 'https://res.cloudinary.com/drykej1am/image/upload/v1741783912/weeshr-funding/Rectangle_3854_6_chhuvp.png'
  },
  {
    name: 'Charles Popson',
    title: 'Head of Product',
    content: 'Experienced product lead with a passion for solving challenges and crafting intuitive digital experiences. Has led and driven growth in finance, investment, Al, and real estate with Sankore, Wealth.ng, Cavisa Designs, Purple Shelves, Kada, and Juno.',
    image: 'https://res.cloudinary.com/drykej1am/image/upload/v1741783909/weeshr-funding/Rectangle_3854_3_azvxlx.png'
  },
  {
    name: 'Christian Sisson',
    title: 'Advisor',
    content: 'Christian Sisson is a 3x entrepreneur and founder of A*C: Antidote to Chaos. He has a strong career journey, building and scaling businesses while working with top brands and industries to drive innovation and growth.',
    image: 'https://res.cloudinary.com/drykej1am/image/upload/v1741783888/weeshr-funding/Rectangle_3854_laquhv.png'
  },
]

// import Marquee from "react-fast-marquee";
// import Image from "next/image";

export function MobileTeamSection() {
  return (
    <div className="relative w-full overflow-hidden">
      <Marquee pauseOnHover speed={50} gradient={false} className="w-full">
        {teamData.map((el, idx) => (
          <div
            key={idx}
            className="flex flex-col w-[244px] rounded-4xl bg-[#E7E9F2] text-black mx-4"
          >
            <div className="w-full h-[270px] relative rounded-4xl overflow-hidden">
              <Image
                alt=""
                src={el.image}
                width={300}
                height={300}
                className="w-full h-full"
              />
              <div
                className={`absolute bottom-0 left-0 w-full text-2xl p-6 bg-opacity-50 ${el.name === "Eugene Lolapo"
                  ? "bg-gradient-to-t to-blue-[#00000000] via-[#00000000] from-[#6A70FF]"
                  : "bg-gradient-to-t to-[#00000000] via-[#00000000] from-[#020721]"
                  }`}
              >
                <div className="flex flex-col text-white">
                  {el.name.split(" ").map((part, index) => (
                    <span key={index}>{part}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full p-4 text-base">
              <h1 className="font-bold">{el.title}</h1>
              <p>{el.content}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
