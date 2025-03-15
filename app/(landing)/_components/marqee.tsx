"use client";
import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
import useFullscreenModal from "@/hooks/use-fullscreen";

const Companies = () => {
  const { openModal, Modal } = useFullscreenModal();
  const getIframeHeight = () => {
    if (window.innerWidth < 640) return "80vh"; // Mobile
    if (window.innerWidth < 1024) return "85vh"; // Tablet
    return "90vh"; // Desktop
  };
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
      className="w-full mt-12 min-h-fit">
      <div className="flex flex-col gap-4 md:mt-12 md:flex-row items-center justify-between w-full px-4 lg:px-12">
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
                  className="w-full h-full max-w-full"
                  style={{ height: getIframeHeight() }}
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
                  className="w-full h-full max-w-full"
                  style={{ height: getIframeHeight() }}
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