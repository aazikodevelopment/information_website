import React, { useEffect } from "react";
import "./howWeWork.scss";
import HowWeWorkContent from "./howWeWorkContent";
export default function HowWeWorkPage() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <>
      <div className="how-we-work-hero-banner">
        <div className="container">
          <h1>How We Work For Buyer</h1>
        </div>
      </div>
      <HowWeWorkContent />
    </>
  );
}
