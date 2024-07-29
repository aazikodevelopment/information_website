import React from "react";
import "./advertisingSection.scss";
import Icon1 from "../../../assets/icons/icon1.svg";
export default function AdvertisingSection() {
  return (
    <div>
      <div className="advertising-section-all-contnet-alignment">
        <div className="container">
          <div className="text">
            <h4>How advertising can help your exposure</h4>
            <p>
              Leverage Aaziko.com’s Keyword Advertising (KWA) tool to get more
              eyes on your storefront. Bring your products in the spotlight to
              reach prospective buyers who are looking for what you’re selling.
            </p>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="icon-grid">
                <div className="icon-grid-items">
                  <img src={Icon1} alt="Icon1" />
                </div>
                <div className="icon-grid-items">
                  <p>Better displayed position</p>
                  <span>
                    Improve product visibility with higher search rankings
                  </span>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="icon-grid">
                <div className="icon-grid-items">
                  <img src={Icon1} alt="Icon1" />
                </div>
                <div className="icon-grid-items">
                  <p>Measurable results</p>
                  <span>Optimize your campaign based on data reports</span>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="icon-grid">
                <div className="icon-grid-items">
                  <img src={Icon1} alt="Icon1" />
                </div>
                <div className="icon-grid-items">
                  <p>Find precise buyers fast</p>
                  <span>
                    Leverage big data to target the right market for your
                    products
                  </span>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="icon-grid">
                <div className="icon-grid-items">
                  <img src={Icon1} alt="Icon1" />
                </div>
                <div className="icon-grid-items">
                  <p>Pay-per-click</p>
                  <span>Only pay when buyers click on your ads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
