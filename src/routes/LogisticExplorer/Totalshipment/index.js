import React from "react";
import "./Totalshipment.scss";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";
export default function Totalshipment() {
  return (
    <div className="total-shipment-section">
      <div className="total-shipment-box">
        <div className="total-shipment-heading">
          <h6>Total shipment</h6>
        </div>
        <div className="total-shipment-body-alignment">
          <div className="total-shipment-top-details">
            <label>Weight</label>

            <div className="total-shipment-left-side">
              <div className="total-shipment-box-details">
                <p>100</p>
              </div>
              <div className="kg-alignment">
                <p>KG</p>
                <div className="kg-dropdown-arrow">
                  <img src={DropdownArrow} alt="DropdownArrow" />
                </div>
              </div>
            </div>
          </div>

          <div className="total-shipment-range-alignment">
            <input type="range" />
          </div>
        </div>
      </div>
    </div>
  );
}
