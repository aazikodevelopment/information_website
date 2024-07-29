import React from "react";
import "./HomeNewGlobalSourcing.scss";
import Icon01 from "../../../assets/Image/100-icon.png";
import Icon02 from "../../../assets/Image/insurance-icon.png";
import Icon03 from "../../../assets/Image/Inspection-icon.png";
import Icon04 from "../../../assets/Image/logistic-icon.png";
import Icon05 from "../../../assets/Image/trade-icon.png";
import Icon06 from "../../../assets/Image/soucing-icon.png";
import Icon07 from "../../../assets/Image/daily-update-icon.png";
import Icon08 from "../../../assets/Image/customes-icon.png";
export default function HomeNewGlobalSourcing() {
  return (
    <div className="home-new-global-sourcing-section ">
      <div className="home-new-global-sourcing-heading ">
        <h2>Way To Global Sourcing</h2>
      </div>

      <div className="home-new-global-body-alignment">
        <div className="home-new-global-grid-alignment">
          <div className="home-new-global-grid-item">
            <div className="icon-center">
              <img src={Icon01} alt="Icon01" />
            </div>
            <div className="home-new-box-alignment">
              <span>100% Assurance</span>
            </div>
          </div>
          <div className="home-new-global-grid-item">
            <div className="icon-center">
              <img src={Icon02} alt="Icon02" />
            </div>
            <div className="home-new-box-alignment">
              <span>Insurance</span>
            </div>
          </div>
          <div className="home-new-global-grid-item">
            <div className="icon-center">
              <img src={Icon03} alt="Icon03" />
            </div>
            <div className="home-new-box-alignment">
              <span>Inspection</span>
            </div>
          </div>
          <div className="home-new-global-grid-item">
            <div className="icon-center">
              <img src={Icon04} alt="Icon04" />
            </div>
            <div className="home-new-box-alignment">
              <span>Logistic</span>
            </div>
          </div>
          <div className="home-new-global-grid-item">
            <div className="icon-center">
              <img src={Icon05} alt="Icon05" />
            </div>
            <div className="home-new-box-alignment">
              <span>
                Trade <br />
                Agreement
              </span>
            </div>
          </div>
          <div className="home-new-global-grid-item">
            <div className="icon-center">
              <img src={Icon05} alt="Icon05" />
            </div>
            <div className="home-new-box-alignment">
              <span>Sourcing</span>
            </div>
          </div>
          <div className="home-new-global-grid-item">
            <div className="icon-center">
              <img src={Icon06} alt="Icon05" />
            </div>
            <div className="home-new-box-alignment">
              <span>Communication</span>
            </div>
          </div>
          <div className="home-new-global-grid-item">
            <div className="icon-center">
              <img src={Icon07} alt="Icon05" />
            </div>
            <div className="home-new-box-alignment">
              <span>Daily Update</span>
            </div>
          </div>

          <div className="home-new-global-grid-item">
            <div className="icon-center">
              <img src={Icon08} alt="Icon05" />
            </div>
            <div className="home-new-box-alignment">
              <span>Customs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
