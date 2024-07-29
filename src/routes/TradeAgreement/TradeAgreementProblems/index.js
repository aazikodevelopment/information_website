import React from "react";
import "./TradeAgreementProblems.scss";
import TapImg from "../../../assets/Image/tap-1.png";
import Tap2Img from "../../../assets/Image/tap-2.png";
export default function TradeAgreementProblems() {
  return (
    <div className="trade-agreement-problems-section">
      <div className="container">
        <div className="trade-agreement-problem-alignment">
          <div className="trade-agreement-problem-heading">
            <h4>Trade Agreement Problems</h4>
          </div>
          <div className="trade-agreement-problem-body-alignment">
            <div className="trade-agreement-problem-flex-alignment">
              <div className="trade-agreement-problem-all-detaild">
                <h6>Complex Trade Rules</h6>
                <p>
                  Trade agreements often face challenges due to their complex rules and regulations. These intricacies can lead to misunderstandings
                  between participating nations.
                </p>
              </div>
              <div className="trade-agreement-problem-box-alignment">
                <img src={TapImg} alt="TapImg" />
              </div>
            </div>
            <div className="trade-agreement-problem-flex-alignment">
              <div className="trade-agreement-problem-box-alignment">
                <img src={Tap2Img} alt="Tap2Img" />
              </div>
              <div className="trade-agreement-problem-all-detaild">
                <h6>Diffrent Trade Agreement</h6>
                <p>Different countries have distinct trade agreements, varying in terms and conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
