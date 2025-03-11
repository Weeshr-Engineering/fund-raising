import WidthLayout from "@/components/commons/width-layout";
import { HeroSection } from "./hero-section";
import { HeroInfo } from "./hero-info";
import { ProgressBar } from "./progress-bar";
import { HowItWorks } from "./how-it-works";
import Companies from "./marqee";

export default function HeroContainer() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/drykej1am/image/upload/v1741595494/weeshr_website/HeroBGElements_bklhok.png')",
      }}
      className="items-center justify-items-center bg-cover bg-top w-full"
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <WidthLayout>
          <HeroSection />
          <div className="backdrop-blur-xl bg-foreground/50 lg:bg-transparent rounded-2xl px-4 md:px-6">
            <HeroInfo />

            <ProgressBar />
          </div>
          <Companies />
          <HowItWorks />
        </WidthLayout>
      </main>{" "}
    </div>
  );
}
