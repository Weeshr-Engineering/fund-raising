"use client";

import HeroContainer from "./(landing)/_components/hero-container";
import dynamic from "next/dynamic";
import "@dexhunterio/swaps/lib/assets/style.css";
import { toast } from "react-toastify"; // Ensure you have this dependency if you're using toast notifications

// Dynamically import the Swap component with SSR disabled
const Swap = dynamic(() => import("@dexhunterio/swaps"), {
  ssr: false,
});

export default function Home() {
  const settings = {
    partnerName: "tr", // required
    partnerCode:
      "tr61646472317178706b666364783839656b6d7466373374656d6734366c6d64753078706a647377767561377267617a34676a393674746634687738387678656a37646a786333636a79763977727a6c766364356574707a75336771726c78646d716d793439326ada39a3ee5e6b4b0d3255bfef95601890afd80709", // required
    orderTypes: ["SWAP", "LIMIT", "DCA"],
    theme: "dark",
    defaultToken:
      "279c909f348e533da5808898f87f9a14bb2c3dfbbacccd631d927a3f534e454b",
    colors: {
      background: "#0E0F12",
      containers: "#191B23",
      subText: "#88919E",
      mainText: "#FFFFFF",
      buttonText: "#FFFFFF",
      accent: "#007DFF",
    },
    width: "300",
  };

  return (
    <div className="items-center min-h-screen justify-items-center bg-cover bg-top pt-80">
      <Swap {...settings} />
      {/* <HeroContainer /> */}
    </div>
  );
}
