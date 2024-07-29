import React from "react";
import "./TSPeaseMind.scss";
import QuantityIcon from "../../../assets/icons/quantity-icon.svg";
import TipsIcon from "../../../assets/icons/tips-icon.svg";
export default function TSPeaseMind() {
  return (
    <div className="tSPeaseMind-section">
      <div className="tSPeaseMind-alignment">
        <div className="container">
          <div className="tSPeaseMind-all-content">
            <h5>Have Greater peace of mind</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <div className="tSPeaseMind-option-details">
              <div className="tSPeaseMind-option-grid">
                <div className="tSPeaseMind-option-gridItem">
                  <div className="tSPeaseMind-option-box">
                    <div className="tSPeaseMind-option-icon">
                      <img src={QuantityIcon} alt="QuantityIcon" />
                    </div>
                    <p>Product Quality</p>
                  </div>
                </div>

                <div className="tSPeaseMind-option-gridItem">
                  <div className="tSPeaseMind-option-box">
                    <div className="tSPeaseMind-option-icon">
                      <img src={QuantityIcon} alt="QuantityIcon" />
                    </div>
                    <p>One Time Ship Date</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tSPeaseMind-tips-alignment">
        <div className="container">
          <div className="tSPeaseMind-tips-contents">
            <div className="tSPeaseMind-tips-icon">
              <img src={TipsIcon} alt="TipsIcon" />
            </div>

            <div className="tSPeaseMind-tips-notes">
              <p>
                <span>Pro tip: </span>the trade assurance online order is where you and your supplier define product quality and specify ship date.
                please review it carefully.so we can better protect you.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
