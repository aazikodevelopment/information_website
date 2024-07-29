import React from "react";
import "./InsuranceBanner.scss";
import InsuranceImg from "../../../assets/Image/insurance-img.svg";
export default function InsuranceBanner() {
  return (
    <div className="insurance-banner-main">
      <div className="container">
        <div className="insurance-banner-details-alignment">
          <div className="insurance-left-side-alignment">
            <h1>Essential Role of Marine Insurance in Trade</h1>
            <p>
              Marine insurance plays a crucial role in international trade by providing coverage for goods during import and export. It safeguards
              against potential risks such as damage, loss, or theft that can occur during transit.
            </p>
          </div>
          <div>
            <img src={InsuranceImg} alt="InsuranceImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
