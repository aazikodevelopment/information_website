import React from "react";
import "./TradeAgreementEasySolution.scss";
import ProductImg from "../../../assets/Image/product-img-1.png";
export default function TradeAgreementEasySolution() {
  return (
    <div className="trade-agreement-easy-solution-section">
      <div className="container">
        <div className="trade-agreement-easy-solution-alignment">
          <div className="trade-agreement-easy-solution-header">
            <h4>Trade Agreement Easy solution</h4>
            <p>Aaziko Presenting simplified and cost-effective trade agreements for various countries on a single page</p>
          </div>
          <div className="trade-agreement-easy-solution-body">
            <img src={ProductImg} alt="ProductImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
