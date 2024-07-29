import React from "react";
import "./InsuranceOtherOption.scss";
import II1 from "../../../assets/icons/ii1.svg";
import II2 from "../../../assets/icons/ii2.svg";
import II3 from "../../../assets/icons/ii3.svg";
import TI1 from "../../../assets/Image/ti1.png";
import TI2 from "../../../assets/Image/ti2.png";
import TI3 from "../../../assets/Image/ti3.png";
import TI4 from "../../../assets/Image/ti4.png";
export default function InsuranceOtherOption() {
  return (
    <div className="insurance-other-option-main">
      <div className="container">
        <div className="insurance-other-option-alignment">
          <div className="insurance-grid-alignment">
            <div className="insurance-grid-item-alignment">
              <div className="insurance-icon-img">
                <img src={II1} alt="II1" />
              </div>
              <p>Get Right Expert Advice</p>
            </div>
            <div className="insurance-grid-item-alignment">
              <div className="insurance-icon-img">
                <img src={II2} alt="II2" />
              </div>
              <p>Hassle free policy</p>
            </div>
            <div className="insurance-grid-item-alignment">
              <div className="insurance-icon-img">
                <img src={II3} alt="II3" />
              </div>
              <p>Speedy Claims</p>
            </div>
          </div>
          <div className="top-insure-main">
            <div className="top-insure-box">
              <h4>Top Insurers</h4>

              <div className="top-insure-grid-alignment">
                <div>
                  <img src={TI1} alt="TI1" />
                </div>
                <div>
                  <img src={TI2} alt="TI2" />
                </div>
                <div>
                  <img src={TI3} alt="TI3" />
                </div>
                <div>
                  <img src={TI4} alt="TI4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
