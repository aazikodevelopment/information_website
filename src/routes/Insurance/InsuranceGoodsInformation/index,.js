import React from "react";
import "./InsuranceGoodsInformation.scss";
import TruckIcon from "../../../assets/icons/delivery-truck_icon.svg";
import RailIcon from "../../../assets/icons/rail_icon.svg";
import PlanIcon from "../../../assets/icons/plane_icon.svg";
import PakageIcon from "../../../assets/icons/package_icon.svg";
import ShipIcon from "../../../assets/icons/ship_icon.svg";
import DropdownIcon from "../../../assets/icons/drop-down-icon.svg";
import RightArrow from "../../../assets/icons/arrow-right-icon.svg";
export default function InsuranceGoodsInformation() {
  return (
    <div className="insurance-goods-information-main">
      <div className="container">
        <div className="insurance-goods-information-alignment">
          <div className="insurance-goods-heading">
            <h4>Goods Information</h4>
          </div>

          <div className="insurance-goods-form-alignment">
            <div className="two-insurance-goods-grid">
              <div className="insurance-goods-input">
                <input type="text" />

                <div className="insurance-goods-input-heading">
                  <span>Goods name</span>
                </div>
              </div>
              <div className="insurance-goods-input">
                <input type="text" />
                <div className="insurance-goods-input-heading">
                  <span>Commodity type</span>
                </div>
              </div>
            </div>

            <div className="option-insurance-main-details-alignment">
              <label>What type of cover do you want?</label>
              <div className="option-input-box-grid-alignment">
                <div className="option-input-box-alignment">
                  <div className="option-left-side-alignment ">
                    <h6>Single transit</h6>
                    <p>Covers your single journey from one location to another.</p>
                  </div>
                  <div className="option-right-side-alignment">
                    <input type="radio" />
                  </div>
                </div>
                <div className="option-input-box-alignment">
                  <div className="option-left-side-alignment ">
                    <h6>Annual open</h6>
                    <p>Covers your shipments throughout the year.</p>
                  </div>
                  <div className="option-right-side-alignment">
                    <input type="radio" />
                  </div>
                </div>
              </div>
            </div>
            <div className="option-insurance-main-details-alignment">
              <label>Where will your goods be shipped?</label>

              <div className="shipped-three-grid-alignment">
                <div className="shipped-three-grid-box">
                  <p>Inland (Domestic)</p>
                </div>
                <div className="shipped-three-grid-box">
                  <p>Export</p>
                </div>
                <div className="shipped-three-grid-box">
                  <p>Import</p>
                </div>
              </div>
            </div>

            <div className="option-insurance-main-details-alignment">
              <label>How will your goods be making their journey?</label>

              <div className="making-journey-grid-alignment">
                <div className="making-journey-grid-box">
                  <img src={TruckIcon} alt="TruckIcon" />
                  <p>Road</p>
                  <div className="making-journey-checkbox-alignment">
                    <input type="radio" />
                  </div>
                </div>
                <div className="making-journey-grid-box">
                  <img src={PlanIcon} alt="PlanIcon" />
                  <p>Air </p>
                  <div className="making-journey-checkbox-alignment">
                    <input type="radio" />
                  </div>
                </div>
                <div className="making-journey-grid-box">
                  <img src={RailIcon} alt="RailIcon" />
                  <p>Rail</p>
                  <div className="making-journey-checkbox-alignment">
                    <input type="radio" />
                  </div>
                </div>
                <div className="making-journey-grid-box">
                  <img src={PakageIcon} alt="PakageIcon" />
                  <p>Courier</p>
                  <div className="making-journey-checkbox-alignment">
                    <input type="radio" />
                  </div>
                </div>
                <div className="making-journey-grid-box">
                  <img src={ShipIcon} alt="ShipIcon" />
                  <p>Sea</p>
                  <div className="making-journey-checkbox-alignment">
                    <input type="radio" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="insurance-invoice-value-alignment">
            <div className="invoice-value-heading">
              <h6>Invoice value</h6>
            </div>
            <div className="insurance-invoice-value-grid ">
              <div className="insurance-invoice-value-grid-box">
                <p>USD</p>
                <img src={DropdownIcon} alt="DropdownIcon" />

                <div className="insurance-input-invoice-label ">
                  <span>Currency</span>
                </div>
              </div>
              <div className="insurance-invoice-value-grid-box">
                <input type="text" placeholder="Invoice Value" />
              </div>
              <div className="insurance-invoice-value-grid-box">
                <div className="rate-input-alignment">
                  <input type="text" placeholder="1 USD =" />
                  <span>INR</span>
                </div>
              </div>
              <div className="insurance-invoice-value-grid-box">
                <p>FOB</p>
                <img src={DropdownIcon} alt="DropdownIcon" />
                <div className="insurance-input-invoice-label ">
                  <span>Incoterm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="insurance-invoice-value-alignment">
            <div className="invoice-value-heading">
              <h6>Address</h6>
            </div>

            <div className="address-grid-alignment">
              <div className="address-grid-box-alignment">
                <input type="text" placeholder="From" />
              </div>
              <div className="address-grid-box-alignment">
                <input type="text" placeholder="To" />
              </div>
            </div>
          </div>
        </div>

        <div className="insurance-form-button">
          <button>
            Continue <img src={RightArrow} alt="RightArrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
