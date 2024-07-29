import React, { useEffect } from "react";
import "./ourfeature.scss";
import OurFeatureImage from "../../assets/Image/our-feature.png";
import OurMissionImage from "../../assets/Image/our-mission.png";
import OneStopImage from "../../assets/Image/one-stop.png";
import AnytimeImage from "../../assets/Image/anytime.png";
export default function Ourfeature() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="our-feature-all-content-alignment">
        <div className="our-feature-content-box">
          <div className="container">
            <div className="grid">
              <div className="grid-items">
                <p>We are the world’s leading testing, inspection and certification company.</p>
                <span>
                  Launched in 2000, Aaziko.com is the leading platform for global wholesale trade. We serve millions of buyers and suppliers around
                  the world.
                </span>
              </div>
              <div className="grid-items">
                <img src={OurFeatureImage} alt="OurFeatureImage" />
              </div>
            </div>
          </div>
        </div>
        <div className="our-feature-content-box">
          <div className="container">
            <div className="our-mission">
              <div className="our-mission-items">
                <img src={OurMissionImage} alt="OurMissionImage" />
              </div>
              <div className="our-mission-items">
                <h2>Our Mission</h2>
                <p>As part of the Aaziko.com Group, our mission is to make it easy to do business anywhere.</p>
                <p>
                  We do this by giving suppliers the tools necessary to reach a global audience for their products, and by helping buyers find
                  products and suppliers quickly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="our-feature-content-box">
          <div className="container">
            <div className="one-stop">
              <div className="one-stop-items">
                <h2>One-Stop Sourcing</h2>
                <p>
                  Aaziko.com brings you hundreds of millions of products in over 40 different major categories, including consumer electronics,
                  machinery and apparel.
                </p>
                <p>
                  Buyers for these products are located in 190+ countries and regions, and exchange hundreds of thousands of messages with suppliers
                  on the platform each day.
                </p>
              </div>
              <div className="one-stop-items">
                <img src={OneStopImage} alt="OneStopImage" />
              </div>
            </div>
          </div>
        </div>
        <div className="our-feature-content-box">
          <div className="container">
            <div className="anytime">
              <div className="anytime-items">
                <img src={AnytimeImage} alt="AnytimeImage" />
              </div>
              <div className="anytime-items">
                <h2>Anytime, Anywhere</h2>
                <p>As a platform, we continue to develop services to help businesses do more and discover new opportunities.</p>
                <p>
                  Whether it’s sourcing from your mobile phone or contacting suppliers in their local language, turn to Aaziko.com for all your global
                  business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Changes in this code scss file