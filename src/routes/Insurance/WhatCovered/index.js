import React from "react";
import "./WhatCovered.scss";
import WCI1 from "../../../assets/icons/wci1.svg";
import WCI2 from "../../../assets/icons/wci2.svg";
import WCI3 from "../../../assets/icons/wci3.svg";
import WCI4 from "../../../assets/icons/wci4.svg";
import WCI5 from "../../../assets/icons/wci5.svg";
import WCI6 from "../../../assets/icons/wci6.svg";
export default function WhatCovered() {
  return (
    <div className="what-coverded-section">
      <div className="container">
        <div>
          <div className="what-coverded-heading">
            <h4>What Is Covered</h4>
          </div>

          <div className="what-coverded-box-alignment">
            <div className="what-covered-grid-alignment">
              <div className="what-covered-grid-item">
                <div>
                  <img src={WCI1} alt="WCI1" />
                </div>
                <p>Intentional or unintentional damage by third parties</p>
              </div>
              <div className="what-covered-grid-item">
                <div>
                  <img src={WCI2} alt="WCI2" />
                </div>
                <p>The acceptance of all or part of the consignment</p>
              </div>
              <div className="what-covered-grid-item">
                <div>
                  <img src={WCI3} alt="WCI3" />
                </div>
                <p>Fire, natural disaster, catastrophe</p>
              </div>
              <div className="what-covered-grid-item">
                <div>
                  <img src={WCI4} alt="WCI5" />
                </div>
                <p>Theft as a result of robbery</p>
              </div>
              <div className="what-covered-grid-item">
                <div>
                  <img src={WCI5} alt="WCI6" />
                </div>
                <p>Crash</p>
              </div>
              <div className="what-covered-grid-item">
                <div>
                  <img src={WCI6} alt="WCI7" />
                </div>
                <p>Fraud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
