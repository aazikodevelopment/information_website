import React, { useState } from "react";
import "./LSQHowItWorks.scss";
import HowItWorkIg from "../../../assets/Image/how-it-work-img.png";
import PlusIcon from "../../../assets/icons/plus-icon.svg";

export default function LSQHowItWorks() {
  const [lsqAbout, setLsqAbout] = useState(false);
  return (
    <div className="lsq-how-it-works-alignment">
      <div className="container">
        <div className="lsq-how-it-works-section">
          <div className="lsq-how-it-works-grid">
            <div>
              <img src={HowItWorkIg} alt="HowItWorkIg" />
            </div>
            <div className="lsq-how-it-work-right-side">
              <div className="lsq-how-it-work-top-details">
                <a>How it works</a>
                <h4>How AAZIKO.com LSQ <br></br>boosts your business</h4>

                <div className="lsq-how-it-work-notes">
                  <p>
                    The AAZIKO.com LSQ market helps B2B sellers take their businesses to the next level by providing high-quality leads, forging
                    valuable professional relationships, and facilitating sales. This unique marketplace creates a springboard with significant growth
                    in your business.
                  </p>
                </div>
              </div>

              <div className="lsq-how-it-work-child-details-alignment">
                <div className="lsq-how-it-work-child-main-details-alignment">
                  <div className="lsq-how-it-work-personal-details">
                    <h6>20,000 new requests each day</h6>
                    <div className={lsqAbout ? "lsq-plus-icon open-arrow-alignment" : "lsq-plus-icon  "} onClick={() => setLsqAbout(!lsqAbout)}>
                      <img src={PlusIcon} alt="PlusIcon" />
                    </div>
                  </div>
                  <div
                    className={
                      lsqAbout ? "lsq-show-other-all-details-alignment open-show-details" : "lsq-show-other-all-details-alignment close-show-details"
                    }
                  >
                    <p>Each day, over 20,000 new requests are posted on the LSQ market. Each request presents a unique business opportunity.</p>
                  </div>
                </div>
                <div className="lsq-how-it-work-child-main-details-alignment">
                  <div className="lsq-how-it-work-personal-details">
                    <h6>Inquiries from 5,000+ industries</h6>
                    <div className="lsq-plus-icon">
                      <img src={PlusIcon} alt="PlusIcon" />
                    </div>
                  </div>
                </div>
                <div className="lsq-how-it-work-child-main-details-alignment">
                  <div className="lsq-how-it-work-personal-details">
                    <h6>Trade between 200+ countries</h6>
                    <div className="lsq-plus-icon">
                      <img src={PlusIcon} alt="PlusIcon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
