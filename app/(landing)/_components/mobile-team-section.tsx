"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { teamData } from "@/lib/constants/team-data";

export function MobileTeamSection() {
  return (
    <div className="relative w-full overflow-hidden">
      <Marquee pauseOnHover speed={50} gradient={false} className="w-full">
        {teamData.map((el, idx) => (
          <div
            key={idx}
            className="flex flex-col w-[244px] h-[560px] rounded-4xl bg-[#E7E9F2] text-black mx-4 transition-all duration-500 ease-in-out hover:bg-[#d1d5db] group cursor-pointer"
          >
            <div className="w-full h-[250px] relative rounded-4xl overflow-hidden">
              <Image
                alt=""
                src={el.image}
                width={300}
                height={250}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full text-2xl p-6 bg-gradient-to-t to-[#00000000] via-[#00000000] from-[#020721] transition-colors duration-500 group-hover:from-[#6A70FF]">
                <div className="flex flex-col text-white">
                  {el.name.split(" ").map((part, index) => (
                    <span key={index}>{part}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full p-4 text-base flex-1 overflow-hidden">
              <h1 className="font-bold">{el.title}</h1>
              <p className="overflow-ellipsis overflow-hidden text-sm">
                {el.content}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
