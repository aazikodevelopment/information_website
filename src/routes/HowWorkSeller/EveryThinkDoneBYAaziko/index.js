import React from "react";
import "./EveryThinkDoneBYAaziko.scss";
import N1 from "../../../assets/icons/n-1.svg";
import N2 from "../../../assets/icons/n-2.svg";
import N3 from "../../../assets/icons/n-3.svg";
import N4 from "../../../assets/icons/n-4.svg";
import N5 from "../../../assets/icons/n-5.svg";
import N6 from "../../../assets/icons/n-6.svg";
import N7 from "../../../assets/icons/n-7.svg";
import SI1 from "../../../assets/Image/si1.svg";
import SI2 from "../../../assets/Image/si2.svg";
import SI3 from "../../../assets/Image/si3.svg";
import SI4 from "../../../assets/Image/si4.svg";
import SI5 from "../../../assets/Image/si5.svg";
import SI6 from "../../../assets/Image/si6.svg";
import SI7 from "../../../assets/Image/si7.svg";
export default function EveryThinkDoneBYAaziko() {
  return (
    <div className="every-think-by-aaziko-section">
      <div className="every-think-by-aaziko-heading">
        <h5>
          Then Everythink Done By <span>Aaziko</span>
        </h5>
      </div>

      <div className="every-think-by-aaziko-details-alignment">
        <div className="every-think-by-aaziko-details-grid">
          <div className="every-think-by-aaziko-details-grid-item ">
            <div className="step-details-alignment">
              <div className="step-number">
                <img src={N1} alt="N1" />
              </div>
              <div className="step-main-img">
                <img src={SI1} alt="SI1" />
              </div>

              <div className="step-all-description">
                <h6> Aaziko Search Buyer </h6>
                <p>Buyer Just Share As There Requirements. And We Find Best Deal From Our 200 Thousand Manufacture.</p>
              </div>
            </div>
          </div>
          <div className="every-think-by-aaziko-details-grid-item ">
            <div className="step-details-alignment">
              <div className="step-number">
                <img src={N2} alt="N2" />
              </div>
              <div className="step-main-img">
                <img src={SI2} alt="SI2" />
              </div>
              <div className="step-all-description">
                <h6>Conversation</h6>
                <p> We provide Best Quotatons From all 200 Thousand Manufacturers to grow your Business.</p>
              </div>
            </div>
          </div>
          <div className="every-think-by-aaziko-details-grid-item ">
            <div className="step-details-alignment">
              <div className="step-number">
                <img src={N3} alt="N3" />
              </div>
              <div className="step-main-img">
                <img src={SI3} alt="SI3" />
              </div>
              <div className="step-all-description">
                <h6>Get Your Order</h6>
                <p> once you quote is aproved by buyer you will get order confirmation.</p>
              </div>
            </div>
          </div>

          <div className="every-think-by-aaziko-details-grid-item ">
            <div className="step-details-alignment">
              <div className="step-number">
                <img src={N4} alt="N4" />
              </div>
              <div className="step-main-img">
                <img src={SI4} alt="SI4" />
              </div>
              <div className="step-all-description">
                <h6>Manufacturing</h6>
                <p>
                  {" "}
                  After finalizing products by buyers, buyers need to fill the detailed order form. And the seller will give confirmation, and then
                  the seller will start manufacturing. And buyers will get a daily update through photos and videos.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="every-think-by-aaziko-details-grid-item ">
            <div className="step-details-alignment">
              <div className="step-number">
                <img src={N5} alt="N5" />
              </div>
              <div className="step-main-img">
                <img src={SI5} alt="SI5" />
              </div>
              <div className="step-all-description">
                <h6>Inspections</h6>
                <p>
                  Once manufacturing is complete, our expert team will go and check goods and do lab testing if require and send the full inspection
                  report to buyers.
                </p>
              </div>
            </div>
          </div>
          <div className="every-think-by-aaziko-details-grid-item ">
            <div className="step-details-alignment">
              <div className="step-number">
                <img src={N6} alt="N6" />
              </div>
              <div className="step-main-img">
                <img src={SI6} alt="SI6" />
              </div>
              <div className="step-all-description">
                <h6>Logistics</h6>
                <p>
                  After finalizing products by buyers, buyers need to fill the detailed order form. And the seller will give confirmation, and then
                  the seller will start manufacturing.
                </p>
              </div>
            </div>
          </div>
          <div className="every-think-by-aaziko-details-grid-item ">
            <div className="step-details-alignment">
              <div className="step-number">
                <img src={N7} alt="N7" />
              </div>
              <div className="step-main-img">
                <img src={SI7} alt="SI7" />
              </div>
              <div className="step-all-description">
                <h6>Safe Payment</h6>
                <p>Our platform aaziko do not charge any commission or fees with 100% payment assurence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
