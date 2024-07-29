import React from "react";
import "./HomeNewVision.scss";
import VisionIcon from "../../../assets/icons/vision.svg";
import BuyerIcon from "../../../assets/icons/buyer-icon.svg";
import SellerIcon from "../../../assets/icons/seller-icon.svg";
import TransportationIcon from "../../../assets/icons/transportation-icon.svg";
import SourcingIcon from "../../../assets/icons/sourcing-icon.svg";
import InsuranceIcon from "../../../assets/icons/insurance-icon.svg";
import DailyUpdate from "../../../assets/icons/daily-update.svg";
import CustomsIcon from "../../../assets/icons/customs-icon.svg";
import SafePaymentIcon from "../../../assets/icons/safe-payment.svg";
import InspectionIcon from "../../../assets/icons/inspection2-icon.svg";

import NewSellerIcon from "../../../assets/icons/new-seller-icon.svg";
import NewBuyerIcon from "../../../assets/icons/new-buyer-icon.svg";
import NewSourcingIcon from "../../../assets/icons/sourcing-new-icon.svg";
import NewInspectionIcon from "../../../assets/icons/new-inspection-icon.svg";
import NewDailyUpdate from "../../../assets/icons/new-daily-update-icon.svg";
import NewSafePaymentIcon from "../../../assets/icons/new-safe-payment-icon.svg";
import NewInsuranceIcon from "../../../assets/icons/new-insurance-icon.svg";
import NewCustomsIcon from "../../../assets/icons/new-customs-icon.svg";
import NewTransportationIcon from "../../../assets/icons/new-tranportation-icon.svg";
import { NavLink } from "react-router-dom";
import LineImg1 from "../../../assets/icons/line-1.svg";
import LineImg2 from "../../../assets/icons/line-2.svg";
import LineImg3 from "../../../assets/icons/line-3.svg";
import LineImg4 from "../../../assets/icons/line-4.svg";
export default function HomeNewVision() {
  return (
    <div className="home-new-vision-section">
      <div className="container">
        <div className="home-new-vision-heading">
          <h2>Vision</h2>

          <h5>
            To Make World United By Making Global Trade <span>Easiest</span>, <span>Fastest</span> And <span>Trustful.</span>
          </h5>
        </div>
        <div className="home-new-vision-details-section">
          {/* <div className="home-new-vision-details-grid">
            <NavLink to="/how-we-work-for-buyer-new">
              <div className="home-new-vision-details-grid-item">
                <div className="home-new-vision-details-box">
                  <div className="vision-second-details-img">
                    <img src={BuyerIcon} alt="BuyerIcon" />
                  </div>
                  <p>BUYER</p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/how-we-work-for-seller-new">
              <div className="home-new-vision-details-grid-item">
                <div className="home-new-vision-details-box">
                  <div className="vision-second-details-img">
                    <img src={SellerIcon} alt="SellerIcon" />
                  </div>
                  <p>SELLER</p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/dangerous-goods-transportation">
              <div className="home-new-vision-details-grid-item">
                <div className="home-new-vision-details-box">
                  <div className="vision-second-details-img">
                    <img src={TransportationIcon} alt="TransportationIcon" />
                  </div>
                  <p>transportation</p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/sourcing">
              <div className="home-new-vision-details-grid-item">
                <div className="home-new-vision-details-box">
                  <div className="vision-second-details-img">
                    <img src={SourcingIcon} alt="SourcingIcon" />
                  </div>
                  <p>Sourcing</p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/cargoInsurance">
              <div className="home-new-vision-details-grid-item">
                <div className="home-new-vision-details-box">
                  <div className="vision-second-details-img">
                    <img src={InsuranceIcon} alt="InsuranceIcon" />
                  </div>
                  <p>insurance</p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/daily-update">
              <div className="home-new-vision-details-grid-item">
                <div className="home-new-vision-details-box">
                  <div className="vision-second-details-img">
                    <img src={DailyUpdate} alt="DailyUpdate" />
                  </div>
                  <p>Daily Update</p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/customs-clearance">
              <div className="home-new-vision-details-grid-item">
                <div className="home-new-vision-details-box">
                  <div className="vision-second-details-img">
                    <img src={CustomsIcon} alt="CustomsIcon" />
                  </div>
                  <p>customs</p>
                </div>
              </div>
            </NavLink>
            <div className="home-new-vision-details-grid-item">
              <div className="home-new-vision-details-box">
                <div className="vision-second-details-img">
                  <img src={SafePaymentIcon} alt="SafePaymentIcon" />
                </div>
                <p>Safe Payment</p>
              </div>
            </div>
            <NavLink to="/inspection-partner-service">
              <div className="home-new-vision-details-grid-item">
                <div className="home-new-vision-details-box">
                  <div className="vision-second-details-img">
                    <img src={InspectionIcon} alt="InspectionIcon" />
                  </div>
                  <p>inspection</p>
                </div>
              </div>
            </NavLink>
          </div> */}

          <div className="home-new-vision-details-top-alignment">
            <NavLink to="/how-we-work-for-buyer-new">
              <div className="home-new-top-child-details-alignment">
                <h4>Buyer</h4>

                <div className="home-child-option-img">
                  <img src={NewBuyerIcon} alt="NewBuyerIcon" />
                </div>

                <div className="first-line-alignment">
                  <img src={LineImg1} alt="LineImg1" />
                </div>
              </div>
            </NavLink>
            <NavLink to="/how-we-work-for-seller-new">
              <div className="home-new-top-child-details-alignment">
                <h4>Seller</h4>
                <div className="home-child-option-img">
                  <img src={NewSellerIcon} alt="NewSellerIcon" loading="lazy" />
                </div>
                <div className="second-line-alignment">
                  <img src={LineImg2} alt="LineImg2" />
                </div>
              </div>
            </NavLink>
          </div>
          <NavLink to="/sourcing">
            <div className="home-new-second-details-top-alignment">
              <div className="home-new-second-child-details-alignment">
                <div className="home-child-option-img">
                  <img src={NewSourcingIcon} alt="SourcingIcon" />
                </div>
                <h4>Sourcing</h4>
              </div>
            </div>
          </NavLink>

          <div className="third-line-alignment">
            <img src={LineImg3} alt="LineImg3" />
          </div>

          <div className="home-new-third-details-top-alignment">
            <NavLink to="/daily-update">
              <div className="home-new-third-child-details-alignment">
                <div className="home-child-option-img">
                  <img src={NewDailyUpdate} alt="NewDailyUpdate" />
                </div>
                <h4>Daily Update</h4>
              </div>
            </NavLink>
            <NavLink to="/inspection-partner-service">
              <div className="home-new-third-child-details-alignment">
                <div className="home-child-option-img">
                  <img src={NewInspectionIcon} alt="NewInspectionIcon" />
                </div>
                <h4>Inspection</h4>
              </div>
            </NavLink>
            <NavLink to="/payment">
            <div className="home-new-third-child-details-alignment">
              <div className="home-child-option-img">
                <img src={NewSafePaymentIcon} alt="NewSafePaymentIcon" />
              </div>
              <h4>Safe Payment</h4>
            </div>
            </NavLink>
          </div>
          <div className="third-line-alignment">
            <img src={LineImg4} alt="LineImg4" />
          </div>
          <div className="home-new-third-details-top-alignment">
            <NavLink to="/dangerous-goods-transportation">
              <div className="home-new-third-child-details-alignment">
                <div className="home-child-option-img top-margin-alignment">
                  <img src={NewTransportationIcon} alt="NewTransportationIcon" />
                </div>
                <h4>Tranportation</h4>
              </div>
            </NavLink>

            <NavLink to="/cargoInsurance">
              <div className="home-new-third-child-details-alignment">
                <div className="home-child-option-img">
                  <img src={NewInsuranceIcon} alt="NewInsuranceIcon" />
                </div>
                <h4>Insurance</h4>
              </div>
            </NavLink>

            <NavLink to="/customs-clearance">
              <div className="home-new-third-child-details-alignment">
                <div className="home-child-option-img top-margin-alignment">
                  <img src={NewCustomsIcon} alt="NewCustomsIcon" />
                </div>
                <h4>Customs</h4>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
