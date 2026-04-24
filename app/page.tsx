import { HeroSection } from "@/components/home/HeroSection";
import { HikingTrail } from "@/components/home/HikingTrail";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { StatsSection } from "@/components/home/StatsSection";
import { CoachesPreview } from "@/components/home/CoachesPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeCta } from "@/components/home/HomeCta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HikingTrail />
      <WhatWeDo />
      <StatsSection />
      <CoachesPreview />
      <Testimonials />
      <HomeCta />
    </>
  );
}
