'use client'
import Marquee from "react-fast-marquee";
import * as motion from "motion/react-client";
import Image from "next/image";
import WidthLayout from "@/components/commons/width-layout";

export const Business = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-6 max-w-screen "
    >
      <WidthLayout>
        <div className="relative pt-8 pb-8 lg:pb-0 lg:pl-20% md:pt-0 flex justify-start items-start w-full md:w-auto">
          <h2 className="text-white pt-3 md:pb-10 pl-4 md:pl-0 font-semibold  text-left w-full flex justify-start items-start text-3xl md:text-5xl">
            Businesses they`ve
            <br />
            worked with
          </h2>
        </div>
      </WidthLayout>
      <Infinitystrip />
    </motion.div>
  )
}

function Infinitystrip() {
  const icons = [
    "https://res.cloudinary.com/drykej1am/image/upload/v1741637763/weeshr-funding/Wealth_White_Logo_4x_1_eqmyid.png",
    "https://res.cloudinary.com/drykej1am/image/upload/v1741637762/weeshr-funding/piggyvest-seeklogo_1_rcavj0.png",
    "https://res.cloudinary.com/drykej1am/image/upload/v1741637760/weeshr-funding/Group_2087330085_ejdgg5.png",
    "https://res.cloudinary.com/drykej1am/image/upload/v1741637760/weeshr-funding/Group_2087330082_oionaj.png",
    "https://res.cloudinary.com/drykej1am/image/upload/v1741637760/weeshr-funding/freepik_br_481f2bae-985c-4d4a-93e3-5f3dfd058e7a_1_rifacv.png",
    "https://res.cloudinary.com/drykej1am/image/upload/v1741637759/weeshr-funding/british-council-seeklogo_1_qo5jbq.png",
  ];

  // Duplicate the icons array to create a seamless loop
  const duplicatedIcons = [...icons, ...icons];

  return (
    <div className="relative overflow-hidden h-[7vh] w-full space-y-6">
      <Marquee
        pauseOnHover
        className="flex items-center justify-between w-full gap-4"
      >
        <div className="w-full flex items-center justify-between gap-8 lg:gap-16">
          {duplicatedIcons.map((icon, index) => (
            <Image key={index} src={icon} alt="" width={100} height={100} />
          ))}
        </div>
      </Marquee>
    </div>
  );
}
