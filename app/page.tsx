
import HeroContainer from "./(landing)/_components/hero-container";
import { HowItWorks } from "./(landing)/_components/how-it-works";

export default function Home() {
  return (
    <div className="items-center min-h-screen justify-items-center bg-cover bg-top">
      <HeroContainer />
      {/*<HowItWorks />*/}
    </div>
  );
}
