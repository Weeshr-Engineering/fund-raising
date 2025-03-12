"use state";

import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Icon } from "@iconify/react";

export const InvestmentSection = () => {
  return (
    <div className="py-16  text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Investment notification */}
        <motion.div
          className="bg-white/10 rounded-full px-5 py-3 flex items-center gap-2 mb-16 mx-auto max-w-max md:max-w-[52rem] justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-8 h-8 rounded-full bg-[#2D2E61] flex items-center justify-center text-blue-400">
            <span>
              <Icon icon="game-icons:padlock-open" />
            </span>
          </div>
          <p className="text-sm md:text-base">
            Our next investment round (Seed Round) is 8 months after completion
            of current Pre-seed round.
          </p>
        </motion.div>

        {/* Terms of Investment */}
        <div className="grid grid-cols-1 md:grid-cols-[1px_1fr] gap-8 mb-20">
          <div className="hidden md:block w-[3px] h-auto bg-[#C6F427]"></div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Terms of Investment
            </h2>
            <p className="text-lg text-gray-300 max-w-6xl text-justify">
              We are raising a $150,000 at 10% equity from friends, family,
              angel investors and networks. This pre-seed round will enable Weeshr to establish its
              market by building the necessary infrastructure to drive higher traction in preparation for our seed rounded.
              <br />
              To ensure legal structure and investor protection, we are utilizing a Special Purpose Vehicle (SPV)
              to facilitate and formalize the investment agreement. Investors equity will be bought back at 2x value upon completion of our next seed round.
              The equity buyback is fixed for all pre-seed equity holders, providing a structure and trasnparent exit strategy.
            </p>

            <div className="flex justify-end">
              <Button size={"lg"} className="  text-black  px-6">
                Invest Now <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* The Problem section */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-6 md:gap-12 mb-20">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 -right-4 md:right-10"></div>
            <h2 className="text-3xl md:text-4xl font-bold">
              The <br /> Problem
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted">
              While Amazon seems to have figured out gift registry in America
              and Europe, people in Africa struggle to find easy ways to send
              and receive gifts in a way that's localised (with local
              currencies), customised, and hassle free. We find Africans trying
              to use foreign solutions which is not customized and localised for
              their needs.
            </p>

            <p className="text-muted">
              While Africa takes celebrations, events and giftings even more
              seriously than America and Europe, they seem to have little
              technology solutions to help them with their gift registry to send
              and receive gifts.
            </p>
          </motion.div>
        </div>

        {/* The Solution section */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              The <br /> Solution
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted">
              Weeshr help people in Africa to create a localised gift registry
              in their currency, customised for the occasion and make it easy
              for people to gift them without hassle.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
