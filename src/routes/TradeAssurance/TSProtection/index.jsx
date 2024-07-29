import React from "react";
import "./TSProtection.scss";
import PCImg from "../../../assets/imges/pcImg.png";
import RightIcon from "../../../assets/icons/right-arrow.svg";
import TipsIcon from "../../../assets/icons/tips-icon.svg";
export default function TSProtection() {
  return (
    <div className="tS-protection-section">
      <div className="container">
        <div className="tS-protection-alignment">
          <h4>How to Get Protection</h4>

          <div className="tS-protection-details-alignment">
            <div>
              <div className="ts-protection-step-content">
                <div className="ts-protection-step-box-alignment">
                  <img src={RightIcon} alt="RightIcon" />
                </div>
                <div className="ts-protection-steps-all-details-alignment">
                  <h5>
                    Place an Online Order with Trade <br /> Assurance supplier
                  </h5>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                  </p>
                </div>
              </div>

              <div className="ts-protection-step-content">
                <div className="ts-protection-step-box-alignment disable-step">
                  <span>2</span>
                </div>
                <div className="ts-protection-steps-all-details-alignment">
                  <h5>
                    Pay Through Aziko.com’s secure <br /> payment Platform
                  </h5>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
              </div>
            </div>
            <div>
              <img src={PCImg} alt="PCImg" />
            </div>
          </div>
        </div>
        <div className="tS-protection-tips-contents">
          <div className="tS-protection-tips-icon">
            <img src={TipsIcon} alt="TipsIcon" />
          </div>

          <div className="tS-protection-tips-notes">
            <p>
              <span>Pro tip: </span>the trade assurance online order is where you and your supplier define product quality and specify ship date.
              please review it carefully.so we can better protect you.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
