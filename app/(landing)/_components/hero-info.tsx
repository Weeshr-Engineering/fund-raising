"useClient";

// import { motion } from "motion/react";
import * as motion from "motion/react-client";
import { DollarSign, Percent, Flag, PieChart, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export const HeroInfo = () => {
  return (
    <div className=" text-white relative">
      <div className=" py-10  lg:bg-foreground/50 rounded-2xl mx-auto lg:pb-28 lg:mb-44 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text and Play Button */}
            <div className="space-y-6 ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="px-2"
              >
                <span className="text-sm text-slate-400">Watch</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-1">
                  The Weeshr Way
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900"
              >
                <Image
                  src="https://res.cloudinary.com/drykej1am/image/upload/v1695036799/cld-sample.jpg"
                  alt="Jupiter Promotional"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <div className="ml-1 text-slate-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 h-full flex items-end lg:pb-4 "
            >
              <div className="text-muted">
                <p className=" mb-4 text-sm">
                  Claim an equity share in our pre-seed round in a $200 Billion
                  market across Africa. Join the movement to tranforming gift
                  registry for 1.5 Billion Africans. Weeshr is a tech startup
                  focused on revolutionizing the gift registry ecosystem in
                  Africa, Asia and the Middle East. We are making gifting easy,
                  localized and seamless in events like weddings, birthdays,
                  anniversaries and more.
                </p>
                <p className="mb-4 text-sm">
                  Launched in October 1st 2024, we are are fast growing tech
                  startup growing at 2,000+ users monthly organically and have
                  processed over 41,000,000 NGN in transactions so far. There is
                  an urgent need for infrastructure to meet up with our growth
                  speed, grow faster and expand. This why we are raising ou{" "}
                  <span className="font-bold">Pre-seed</span> round.
                </p>
                <p className="text-sm">
                  We are looking to raise this round from family, friends,
                  networks and angels to keep us running, hit our milestones for
                  our next <span className="font-bold">Seed round</span>.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Funding Stats Cards */}
        </div>
      </div>
      <div className="lg:absolute w-full lg:px-6 lg:-bottom-24">
        <motion.div
          className="lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass rounded-xl p-6 bg-[#DCDEFF] flex justify-between flex-col h-52 md:h-full ">
            <div className="w-10 h-10 rounded-full  flex items-center justify-center mb-4">
              <Icon
                icon="solar:bolt-circle-bold"
                height={50}
                width={50}
                className="text-background border-none"
              />
            </div>
            <div className="space-y-0">
              <p className="text-slate-400 text-sm">Round</p>
              <h3 className="text-2xl font-bold text-background">Pre-seed</h3>
            </div>
          </div>

          <div className="glass rounded-xl p-6 py-4 bg-[#C6EDF6] flex justify-between flex-col">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4">
              <Icon
                icon="solar:star-circle-bold"
                height={50}
                width={50}
                className="text-background border-none"
              />
            </div>
            <div className="space-y-0">
              <p className="text-muted-foreground text-sm">Valuation</p>
              <h3 className="text-2xl font-bold text-background">$1.5M</h3>
            </div>
          </div>

          <div className="glass rounded-xl p-6 py-4 bg-[#E9F4D1] flex justify-between flex-col h-52 md:h-full">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4">
              <Icon
                icon="solar:bookmark-circle-bold"
                height={50}
                width={50}
                className="text-background border-none"
              />
            </div>
            <div className="space-y-0">
              <p className="text-muted-foreground text-sm">Equity on Sale</p>
              <h3 className="text-2xl font-bold text-background">10%</h3>
            </div>
          </div>

          <div className="glass rounded-xl p-6 py-4 bg-[#F4D5F6] flex justify-between flex-col">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4">
              <Icon
                icon="solar:circle-bottom-up-bold"
                height={50}
                width={50}
                className="text-background border-none"
              />
            </div>
            <div className="space-y-0">
              <p className="text-muted-foreground">Raising</p>
              <h3 className="text-2xl font-bold text-background">$150,000</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
