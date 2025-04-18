"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Team {
  name: string;
  title: string;
  content: string;
  image: string;
}

export const ParallaxScrollSecond = ({
  teamData,
  className,
}: {
  teamData: Team[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const third = Math.ceil(teamData.length / 3);

  const firstPart = teamData.slice(0, third);
  const secondPart = teamData.slice(third, 2 * third);
  const thirdPart = teamData.slice(2 * third);

  return (
    <div
      className={cn("h-full items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-24 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYFirst,
                x: translateXFirst,
                rotateZ: rotateXFirst,
              }}
              key={"grid-1" + idx}
            >
              <div className="flex flex-col w-full lg:w-[244px] rounded-4xl bg-[#E7E9F2] text-black group cursor-pointer">
                <div className="w-full h-[270px] relative rounded-4xl overflow-hidden">
                  <Image
                    alt=""
                    src={el.image}
                    width={300}
                    height={300}
                    className="w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full text-2xl p-6 bg-opacity-50 bg-gradient-to-t group-hover:from-[#6A70FF] via-transparent to-transparent">
                    <div className="flex flex-col text-white">
                      {el.name.split(" ").map((part, index) => (
                        <span key={index}>{part}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full p-4 text-base pb-6">
                  <h1 className="font-bold">{el.title}</h1>
                  <p className="text-sm">{el.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div key={"grid-2" + idx}>
              <div className="flex flex-col w-full lg:w-[244px] rounded-4xl bg-[#E7E9F2] text-black group cursor-pointer">
                <div className="w-full h-[270px] relative rounded-4xl overflow-hidden">
                  <Image
                    alt=""
                    src={el.image}
                    width={300}
                    height={300}
                    className="w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full text-2xl p-6 bg-opacity-50 bg-gradient-to-t group-hover:from-[#6A70FF] via-transparent to-transparent">
                    <div className="flex flex-col text-white">
                      {el.name.split(" ").map((part, index) => (
                        <span key={index}>{part}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full p-4 text-base pb-6">
                  <h1 className="font-bold">{el.title}</h1>
                  <p className="text-sm">{el.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYThird,
                x: translateXThird,
                rotateZ: rotateXThird,
              }}
              key={"grid-3" + idx}
            >
              <div className="flex flex-col w-full lg:w-[244px] rounded-4xl bg-[#E7E9F2] text-black group cursor-pointer">
                <div className="w-full h-[270px] relative rounded-4xl overflow-hidden">
                  <Image
                    alt=""
                    src={el.image}
                    width={300}
                    height={300}
                    className="w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full text-2xl p-6 bg-opacity-50 bg-gradient-to-t group-hover:from-[#6A70FF] via-transparent to-transparent">
                    <div className="flex flex-col text-white">
                      {el.name.split(" ").map((part, index) => (
                        <span key={index}>{part}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full p-4 text-base pb-6">
                  <h1 className="font-bold">{el.title}</h1>
                  <p className="text-sm">{el.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
