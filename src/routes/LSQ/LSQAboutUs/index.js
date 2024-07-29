import React, { useState } from "react";
import "./LSQAboutUs.scss";
import PlusIcon from "../../../assets/icons/plus-icon.svg";
export default function LSQAboutUs() {
  const [lsqAbout, setLsqAbout] = useState(false);
  return (
    <div className="lsq-about-us-section">
      <div className="container">
        <div className="lsq-about-us-alignment">
          <a>About Aaziko.com LSQ </a>

          <div className="lsq-about-us-all-details">
            <h4>What is Aaziko.com SLQ?</h4>
            <p>
              Aaziko.com Request for Quotation (LSQ) is a marketplace that allows sellers to take the initiative to connect with buyers. Prospective
              buyers post descriptions of products they need, and sellers respond with a quote for the request.
            </p>

            <div className="lsq-about-all-child-details-alignment">
              <div className="lsq-about-all-child-main-details-alignment">
                <div className="lsq-about-all-personal-details">
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
              <div className="lsq-about-all-child-main-details-alignment">
                <div className="lsq-about-all-personal-details">
                  <h6>Inquiries from 5,000+ industries</h6>
                  <div className="lsq-plus-icon">
                    <img src={PlusIcon} alt="PlusIcon" />
                  </div>
                </div>
              </div>
              <div className="lsq-about-all-child-main-details-alignment">
                <div className="lsq-about-all-personal-details">
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
  );
}
