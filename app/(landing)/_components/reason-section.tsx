'use client'

import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const ReasonComponent = () => {
  return (
    <div className="py-16 w-full text-white">
      <div className="container mx-auto px-4 max-w-6xl lg:w-full">
        {/* Investment notification */}
        <motion.div
          className="rounded-full px-5 py-3 flex items-center gap-2 lg:mb-8 mx-auto w-full  justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[92px] lg:text-[250px] font-bold text-center relative">
            BIGGEST
            <Image
              className="absolute -bottom-20 -left-32 h-60 w-60 z-30 hidden md:inline-block" 
              src='https://res.cloudinary.com/drykej1am/image/upload/v1741754206/weeshr-funding/Navigation_rh5uok.png' alt='' width={100} height={100} />
          </div>
        </motion.div>

        {/* Terms of Investment */}
        <div className="gap-8 mb-20 w-full flex items-center justify-center">
          <motion.div
            className="space-y-8 lg:w-[70%]"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Reasons for you to invest in Weeshr
            </h2>
            <p className="text-lg text-gray-300 max-w-6xl text-justify">
              We are a fast growing with a ready market. The affrican virtual, social and online gifting market gifting
              is soaring. Gifting has been  major part of the African culture in this digital age. People in
              Africa have sought online gift registry now more than ever and they resort to using platforms like amazon. The problem with that is that it is not tailored to their needs in terms of currency, experience and features.
            </p>

            <div className="flex justify-end">
              <Button size={"lg"} className="  text-black  px-6">
                Invest Now <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="w-full text-background">
          <motion.div
            className="lg:mt-12 grid grid-cols-2 gap-4 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass rounded-xl py-10 pl-12 pr-4 bg-[#DCDEFF] flex flex-col lg:flex-row lg:items-start justify-between items-center h-52 md:h-full ">
              <p className="rounded-full flex items-center text-4xl font-bold">
                1.5B
              </p>
              <div className="space-y-0 text-right">
                <p className="text-base font-bold">Underserved Africans</p>
                <h3 className="text-base font-bold">seeking our solution</h3>
              </div>
            </div>

            <div className="glass rounded-xl py-10 pl-12 pr-4 bg-[#C6EDF6] flex flex-col lg:flex-row lg:items-start justify-between items-center">
              <p className="w-10 h-10 rounded-full flex items-center text-4xl font-bold">
                $200B
              </p>
              <div className="space-y-0 text-right">
                <p className="text-base font-bold">Market valuation</p>
                <h3 className="text-base font-bold text-background">and growing</h3>
              </div>
            </div>

            <div className=" rounded-xl py-10 pl-12 pr-4 bg-[#E9F4D1] flex flex-col lg:flex-row lg:items-start justify-between items-center h-52 md:h-full">
              <p className="rounded-full flex items-center text-4xl font-bold text-nowrap">
                50M+
              </p>
              <div className="space-y-0 text-right">
                <p className="text-base font-bold">50M processed</p>
                <h3 className="text-base font-bold text-background">organically in 4 months</h3>
              </div>
            </div>

            <div className="glass rounded-xl py-10 pl-12 pr-4 bg-[#F4D5F6] flex flex-col lg:flex-row lg:items-start justify-between items-center">
              <p className="w-10 h-10 rounded-full flex items-center text-4xl font-bold text-nowrap">
                10K+ Users
              </p>
              <div className="space-y-0 text-right">
                <p className="text-base font-bold">Organically with zero</p>
                <h3 className="text-base font-bold text-background">cost of aquisition</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
