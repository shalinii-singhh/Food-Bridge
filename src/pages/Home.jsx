import Hero from "../components/sections/Hero";
import LiveFeed from "../components/sections/LiveFeed";
import Marquee from "../components/sections/Marquee";
import HowItWorks from "../components/sections/HowItWorks";
import ImpactBand from "../components/sections/ImpactBand";

export default function Home() {
  return (
    <>
      <div className="grid lg:grid-cols-[1fr_440px] gap-16 max-w-[1300px] mx-auto px-6 md:px-12 pt-20 pb-16 items-start relative z-10">
        <Hero />
        <LiveFeed />
      </div>
      <Marquee />
      <HowItWorks />
      <ImpactBand />
    </>
  );
}
