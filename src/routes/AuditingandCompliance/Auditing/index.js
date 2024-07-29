import React from "react";
import "./Auditing.scss";
import RegulationCompliance from "../../../assets/icons/RegulationCompliance.svg";
import FinancialAccuracy from "../../../assets/icons/Financial Accuracy.svg";
import InternalControls from "../../../assets/icons/InternalControls.svg";
import RiskAssessment from "../../../assets/icons/RiskAssessment.svg";
import Efficient from "../../../assets/icons/Efficient.svg";
export default function Auditing() {
  return (
    <div>
      <div className="auditing-all-contnt-alignment">
        <div className="container">
          <div className="title">
            <h6>Auditing</h6>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="icon-center">
                <img src={RegulationCompliance} alt="RegulationCompliance" />
              </div>
              <div className="text">
                <p>Regulation Compliance</p>
                <span>
                  Auditors check whether the organization is adhering to
                  relevant laws, regulations, and industry standards.
                </span>
              </div>
            </div>
            <div className="grid-items">
              <div className="icon-center">
                <img src={FinancialAccuracy} alt="FinancialAccuracy" />
              </div>
              <div className="text">
                <p>Financial Accuracy</p>
                <span>
                  Auditors review financial statements, such as income
                  statements, balance sheets, and cash flow statements, to
                  verify their accuracy and completeness.
                </span>
              </div>
            </div>
            <div className="grid-items">
              <div className="icon-center">
                <img src={InternalControls} alt="InternalControls" />
              </div>
              <div className="text">
                <p>Internal Controls</p>
                <span>
                  Auditors assess the effectiveness of an organization's
                  internal controls and procedures.
                </span>
              </div>
            </div>
            </div>
            <div className="grid-child grid">
            <div className="grid-items">
              <div className="icon-center">
                <img src={RiskAssessment} alt="RiskAssessment" />
              </div>
              <div className="text">
                <p>Risk Assessment</p>
                <span>
                  Auditors identify potential risks that could impact the
                  organization financially or operationally.
                </span>
              </div>
            </div>
            <div className="grid-items">
              <div className="icon-center">
                <img src={Efficient} alt="Efficient" />
              </div>
              <div className="text">
                <p>Efficient & Effective</p>
                <span>
                  In some cases, auditors examine an organization's operations
                  and processes to identify areas for improvement.
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
