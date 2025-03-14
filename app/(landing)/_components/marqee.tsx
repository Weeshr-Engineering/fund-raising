"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import * as motion from "motion/react-client";
import useFullscreenModal from "@/hooks/use-fullscreen";

const Companies = () => {
  const { openModal, Modal } = useFullscreenModal();
  const openInNewTab = (url: string) => {
    const newTab = window.open(url, "_blank");

    if (newTab) {
      newTab.focus(); // Brings the new tab to the front
    } else {
      alert("Popup blocked! Please allow popups for this site.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full mt-12 min-h-fit"
    >
      <div className="relative pt-8 lg:px-12 md:pt-0 flex justify-start items-start w-full md:w-auto">
        <h2 className="text-white pt-3 md:pb-10 pl-4 md:pl-0 font-semibold  text-left w-full flex justify-start items-start text-3xl md:text-5xl">
          Businesses they`ve
          <br />
          worked with
        </h2>
      </div>
      <Infinitystrip />
      <div className="mt-32 flex flex-col gap-4 md:mt-12 md:flex-row items-center justify-between w-full px-4 lg:px-12">
        <div className="bg-[#D9D9D933] flex flex-col items-center justify-center p-2 rounded-3xl w-full md:w-[400px]">
          <Image
            src="https://res.cloudinary.com/drykej1am/image/upload/v1741643919/weeshr-funding/radar-line_q0pqzh.png"
            alt=""
            width={30}
            height={30}
            className="my-4"
          />
          <button
            onClick={() =>
              openModal(
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf18f7Gflteu6WummqG29rETayofKsrxLjaKt0LZQZ0qVim1g/viewform?embedded=true"
                  width="640"
                  height="990"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                >
                  Loading…
                </iframe>
              )
            }
            className="flex hover:cursor-pointer items-center justify-center rounded-xl py-3 w-full text-white bg-[#5CAF69]"
          >
            Invest Now
          </button>
        </div>
        <div className="bg-[#D9D9D933] bg-opacity-50 flex flex-col items-center justify-center p-2 rounded-3xl w-full md:w-[400px]">
          <Image
            src="https://res.cloudinary.com/drykej1am/image/upload/v1741643949/weeshr-funding/calendar-todo-line_j1cyif.png"
            alt=""
            width={30}
            height={30}
            className="my-4"
          />
          <button
            onClick={() =>
              openModal(
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdycDBUjIDj1vi6tper18Wi2z3UPOHtUrFwtRLqS7ksS7cB6w/viewform?embedded=true"
                  width="640"
                  height="1270"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                >
                  Loading…
                </iframe>
              )
            }
            className="flex hover:cursor-pointer items-center justify-center rounded-xl py-3 w-full text-white bg-[#217E7E]"
          >
            I want a meeting
          </button>
        </div>
        <div className="bg-[#D9D9D933] flex flex-col items-center justify-center p-2 rounded-3xl w-full md:w-[400px]">
          <Image
            src="https://res.cloudinary.com/drykej1am/image/upload/v1741643920/weeshr-funding/slideshow-line_qj0mne.png"
            alt=""
            width={30}
            height={30}
            className="my-4"
          />
          <button
            onClick={() => openInNewTab("https://lu.ma/wj3qdvz8")}
            className="flex hover:cursor-pointer items-center justify-center rounded-xl py-3 w-full text-white bg-[#3770AD]"
          >
            Join Next Public Pitch
          </button>
        </div>
      </div>
      <Modal />
    </motion.div>
  );
};

export default Companies;

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
