import WidthLayout from "@/components/commons/width-layout";
import { HeroSection } from "./hero-section";
import { HeroInfo } from "./hero-info";
import { ProgressBar } from "./progress-bar";
import { HowItWorks } from "./how-it-works";
import Companies from "./marqee";
import EquityCalculator from "./equity-calculator";
import ProductJourney from "./product-journey";
import { InvestmentSection } from "./investment-section";
import { ReasonComponent } from "./reason-section";
import PhoneUI from "./phoneui-card";
import { TeamComponent } from "./team-section";
// import { TracingBeam } from "@/components/ui/tracing-beam";

export default function HeroContainer() {
  return (
    <div className="items-center justify-items-center  bg-top w-full pb-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start bg-cover w-full md:bg-[url('https://res.cloudinary.com/drykej1am/image/upload/v1741622631/weeshr_website/HeroBGElements_wlz14l.png')] ">
        <WidthLayout>
          <HeroSection />
          <div className="backdrop-blur-xl bg-foreground/50 lg:bg-transparent lg:backdrop-blur-none rounded-2xl px-4 md:px-6 pb-10">
            <HeroInfo />
          </div>
        </WidthLayout>{" "}
        <WidthLayout narrow={true}>
          <ProgressBar />
        </WidthLayout>
        <EquityCalculator />
      </main>{" "}
      <ProductJourney />
      <WidthLayout>
        <InvestmentSection />
      </WidthLayout>
      <PhoneUI />
      <ReasonComponent />
      <TeamComponent />
      <WidthLayout>
        <Companies />
        <HowItWorks />
      </WidthLayout>
    </div>
  );
}
