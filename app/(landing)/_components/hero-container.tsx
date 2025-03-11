import WidthLayout from "@/components/commons/width-layout";
import { HeroSection } from "./hero-section";
import { HeroInfo } from "./hero-info";
import { ProgressBar } from "./progress-bar";
import EquityCalculator from "./equity-calculator";
import ProductJourney from "./product-journey";
import { InvestmentSection } from "./investment-section";

export default function HeroContainer() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/drykej1am/image/upload/v1741622631/weeshr_website/HeroBGElements_wlz14l.png')",
      }}
      className="items-center justify-items-center bg-cover bg-top w-full pb-20"
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <WidthLayout>
          <HeroSection />
          <div className="backdrop-blur-xl bg-foreground/50 lg:bg-transparent lg:backdrop-blur-none rounded-2xl px-4 md:px-6 pb-10">
            <HeroInfo />
          </div>
        </WidthLayout>
      </main>{" "}
      <WidthLayout narrow={true}>
        <ProgressBar />
      </WidthLayout>
      <EquityCalculator />
      <ProductJourney />
      <WidthLayout>
        <InvestmentSection />
      </WidthLayout>
    </div>
  );
}
