import React, { useEffect } from "react";
import WorkSelleContent from "./workSelleContent";
import "./workSellerPage.scss";
export default function WorkSellerPage() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <div className="how-we-work-hero-banner">
        <div className="container">
          <h1>How We Work For Seller</h1>
        </div>
      </div>
      <WorkSelleContent />
    </div>
  );
}
