import React from "react";
import "./CustomsProblems.scss";
import C1Img from "../../../assets/Image/ci-1.png";
import C2Img from "../../../assets/Image/ci-2.png";
import C3Img from "../../../assets/Image/ci-3.png";
export default function CustomsProblems() {
  return (
    <div className="customs-problems-section">
      <div className="customs-problems-heading">
        <h4>Customs Problems</h4>
      </div>
      <div className="customs-problem-body-alignment">
        <div className="customs-problem-flex-alignment">
          <div className="customs-problem-child-details">
            <h4>Goods Rejection </h4>
            <p>If you fail to adhere to customs rules and regulations, your goods are liable to be rejected.</p>
          </div>
          <div className="customs-problem-details-img">
            <img src={C1Img} alt="C1Img" />
          </div>
        </div>
        <div className="customs-problem-flex-alignment">
          <div className="customs-problem-details-img">
            <img src={C2Img} alt="C2Img" />
          </div>
          <div className="customs-problem-child-details">
            <h4>Customs Pentalties</h4>
            <p>Failing to adhere to customs rules can result in customs penalties being imposed.</p>
          </div>
        </div>
        <div className="customs-problem-flex-alignment">
          <div className="customs-problem-child-details">
            <h4>Damarage Charge</h4>
            <p>If you do not comply with customs rules, you may be required to pay port charges for damages. </p>
          </div>

          <div className="customs-problem-details-img">
            <img src={C3Img} alt="C3Img" />
          </div>
        </div>
      </div>
    </div>
  );
}
