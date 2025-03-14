"use client";

import { motion } from "framer-motion";
import { Users, Globe } from "lucide-react";

type JourneyItem = {
  timeframe: string;
  product: string;
  userCount: string;
  regions: string;
  color: string;
  dotColor: string;
  investmentStage?: string;
};

const journeyItems: JourneyItem[] = [
  {
    timeframe: "4 Months",
    product: "Birthday Only",
    userCount: "10k Users",
    regions: "Nigeria Only",
    color: "bg-[#b46c5d]",
    dotColor: "bg-[#e57373]",
    investmentStage: "Bootstrap/\nOrganic Growth",
  },
  {
    timeframe: "12 Months",
    product: "All Events",
    userCount: "500k Users",
    regions: "2 Countries",
    color: "bg-[#8b5cf6]",
    dotColor: "bg-[#a78bfa]",
    investmentStage: "Pre-seed",
  },
  {
    timeframe: "8 Months",
    product: "Weeshr Marketplace",
    userCount: "1M Users",
    regions: "4 Countries",
    color: "bg-[#ba68c8]",
    dotColor: "bg-[#d58fe3]",
    investmentStage: "Seed",
  },
  {
    timeframe: "8 Months",
    product: "Weeshr Virtual Shopping Card Service",
    userCount: "2M Users",
    regions: "8 Countries",
    color: "bg-[#5b7ebd]",
    dotColor: "bg-[#7d9be3]",
    investmentStage: "Series A",
  },
  {
    timeframe: "8 Months",
    product: "Full Social Integration",
    userCount: "5M Users",
    regions: "14 Countries",
    color: "bg-[#6bae7f]",
    dotColor: "bg-[#80cc95]",
    investmentStage: "Series B",
  },
];

const ProductJourney = () => {
  return (
    <div className="py-16  text-white pt-30 block">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Product Journey
        </motion.h2>

        <div className="flex gap-2 md:gap-6 bg-black/33 p-4 md:p-8 md:px-10 rounded-3xl">
          <div className="w-[25%] h-full md:space-y-[77px]  flex flex-col xl:space-y-22 text-xs md:text-sm space-y-17">
            <p>Feature Timeframe</p>

            <p>Product Map</p>

            <p>User Base & Region</p>

            <p>Investment Round</p>
          </div>

          <div className="w-[200px] sm:w-[350px] md:w-full overflow-x-auto xl:overflow-clip whitespace-nowrap ">
            <div className="w-[1000px] over">
              {/* Journey Timeline container */}
              <div className="relative mb-10">
                {/* Timeline */}
                <div className=" block absolute top-[85%] left-0 right-0 h-0.5 bg-gray-700 -translate-y-1/2 z-0"></div>

                {/* Timeline milestones for desktop */}
                <div className=" grid grid-cols-5 justify-between relative z-10">
                  {journeyItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="text-sm text-muted pb-4">
                        {item.timeframe}
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full ${item.dotColor}`}
                      ></div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-5 gap-6">
                {journeyItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`${item.color} rounded-xl p-5 flex justify-between flex-col w-48 xl:w-auto`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="font-semibold text-xs text-wrap md:text-sm mb-4">
                      {item.product}
                    </div>
                    <div>
                      <div className="flex items-center text-xs mb-1">
                        <Users size={16} className="mr-2" />
                        {item.userCount}
                      </div>
                      <div className="flex items-center text-xs">
                        <Globe size={16} className="mr-2" />
                        {item.regions}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Investment Rounds Timeline */}
              <div className=" pt-10  border-gray-800">
                {/* Investment Timeline */}
                <div className=" relative mb-4">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700 -translate-y-1/2 z-0"></div>

                  <div className=" relative z-10  grid grid-cols-5 grid-flow-col">
                    {journeyItems.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-col items-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                      >
                        <div
                          className={`w-4 h-4 rounded-full ${item.dotColor} `}
                        ></div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Investment Stages Names */}
                <div className="grid grid-cols-5 gap-4 text-center">
                  {journeyItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="text-muted whitespace-pre-line text-left text-xs md:text-md"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      {item.investmentStage}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductJourney;
