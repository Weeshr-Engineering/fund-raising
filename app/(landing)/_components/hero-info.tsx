"useClient";

// import { motion } from "motion/react";
import * as motion from "motion/react-client";
import { Icon } from "@iconify/react";
import YouTubeThumbnail from "@/components/commons/thumbnail";

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
                className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden"
              >
                <YouTubeThumbnail url="https://youtu.be/333i_92Z0cA" fallbackImage="https://weeshr.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrykej1am%2Fimage%2Fupload%2Fv1704590604%2Fj7aiv2jdwuksre2bpclu.png&w=96&q=75" />
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
                  Claim an equity share in our pre-seed round in a <span className="font-bold">$100 Billion </span>
                  market across Africa. Join the movement to tranforming gift
                  registry for 1.5 Billion Africans. Weeshr is a tech startup
                  focused on revolutionizing the gift registry ecosystem in.
                  We are making gifting easy,
                  localized and seamless in events like weddings, birthdays,
                  anniversaries and more.
                </p>
                <p className="mb-4 text-sm">
                  Launched in October 1st 2024, we are are fast growing tech
                  startup growing at 2,000+ users monthly organically and have
                  processed over &#8358; 50,000,000  in transactions so far at zero cost. There is
                  an urgent need for infrastructure to meet up with our growth
                  speed, grow faster and expand. This why we are raising our{" "}
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
      <div className="absolute w-full lg:px-6 lg:-bottom-24">
        <motion.div
          className="lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            className="glass rounded-xl p-6 bg-[#C6EDF6] flex justify-between flex-col h-52 md:h-full"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4">
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
          </motion.div>

          <motion.div
            className="glass rounded-xl p-6 py-4 bg-[#C6EDF6] flex justify-between flex-col"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
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
          </motion.div>

          <motion.div
            className="glass rounded-xl p-6 py-4 bg-[#E9F4D1] flex justify-between flex-col h-52 md:h-full"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
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
          </motion.div>

          <motion.div
            className="glass rounded-xl p-6 py-4 bg-[#DCDEFF] flex justify-between flex-col"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
