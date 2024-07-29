import React, { useEffect } from "react";
import "./TradeAssurance.scss";
import TradeBanner from "../../assets/imges/trade-banner.png";
import TradeIcon from "../../assets/icons/trade-icon.svg";
import VideoIcon from "../../assets/icons/video-icon.svg";
import TSPeaseMind from "./TSPeaseMind";
import TSSupport from "./TSSupport";
import TSProtection from "./TSProtection";
import TSSuccessStory from "./TSSuccessStory";
export default function TradeAssurance() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="trade-services-section">
      <div className="trade-services-main-banner">
        <img src={TradeBanner} alt="trade banner" />

        <div className="trade-banner-details-alignment">
          <div className="trade-main-details">
            <div className="trade-icon-alignment">
              <img src={TradeIcon} alt="TradeIcon" />
            </div>

            <span>Trade assurance</span>
          </div>
          <h4>Protect your Aaziko.com orders</h4>
          <p>Trade assurance protects online orders when payment is made through Aziko .com</p>
          <div className="howWorkAlignment">
            <button>
              <div className="video-icon">
                <img src={VideoIcon} alt="VideoIcon" />
              </div>
              See how it works
            </button>
          </div>
        </div>
      </div>
      <TSPeaseMind />
      <TSSupport />
      <TSProtection />
      <TSSuccessStory />
    </div>
  );
}
