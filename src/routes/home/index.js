import React, { useEffect } from "react";
import AssociatedSection from "./associatedSection";
import GlobalSourcing from "./globalSourcing";
import HeroBanner from "./heroBanner";
import "./home.scss";
import VisionSection from "./visionSection";
import WhyGlobalSourcing from "./WhyGlobalSourcing";
export default function HomePage() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <HeroBanner />
      <WhyGlobalSourcing />
      <VisionSection />
      <AssociatedSection />
      <GlobalSourcing />
    </div>
  );
}
