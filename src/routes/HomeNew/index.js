import React, { useEffect } from "react";
import "./HomeNew.scss";
import HomeNewBanner from "./HomeNewBanner";
import HomeNewVision from "./HomeNewVision";
import HomeNewAssociatedWith from "./HomeNewAssociatedWith";
import HomeNewGlobalSourcing from "./HomeNewGlobalSourcing";
import HomeNewClientTestimonials from "./HomeNewClientTestimonials";
import NewFooter from "../NewHome/NewFooter";
export default function HomeNew() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="home-new-section">
      <HomeNewBanner />
      <HomeNewVision />

      <HomeNewAssociatedWith />
      <div className="home-new-bottom-section-alignment">
        <div className="container">
          <HomeNewGlobalSourcing />
        </div>
        <HomeNewClientTestimonials />
        <NewFooter />
      </div>
    </div>
  );
}
