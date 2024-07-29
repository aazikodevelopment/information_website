import React from "react";
import "./TradeAgreement.scss";
import TradeImg from "../../assets/Image/coun-img.png";
import TradeAgreementWithAaziko from "./TradeAgreementWithAaziko";
import TradeAgreementProblems from "./TradeAgreementProblems";
import TradeAgreementEasySolution from "./TradeAgreementEasySolution";
export default function TradeAgreement() {
  return (
    <div className="trade-agreement-section">
      <div className="trade-agreement-baaner-alignment">
        <div className="container">
          <div className="trade-agreement-flex-alignment">
            <div className="trade-country-name">
              <h4>
                <span>194</span> Countries
              </h4>
            </div>
            <div>
              <img src={TradeImg} alt="TradeImg" />
            </div>
          </div>
        </div>
      </div>
      <TradeAgreementWithAaziko />
      <TradeAgreementProblems />
      <TradeAgreementEasySolution />
    </div>
  );
}
