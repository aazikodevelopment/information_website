import React from "react";
import "./Vision.scss";
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
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";

export default function Vision() {
  return (
    <div className="vision-all-contnet-alignment">
      <div className="container">
        <Fade bottom duration={1000} delay={1000}>
          <div className="vision-heading">
            <img src={VisionIcon} alt="VisionIcon" className="vision-img" />
            <p>
              To Make Global Trade <span>Easiest</span>, <span>Transparnt</span> And
              <span>Trustful.</span>
            </p>
          </div>
        </Fade>

        <div className="vision-details-alignment">
          <div className="vision-first-row">
            <Fade bottom delay={1000}>
              <NavLink to="/how-we-work-for-buyer-new">
                <div className="vision-details-box-alignment">
                  <div className="vision-details-img">
                    <img src={BuyerIcon} alt="BuyerIcon" />
                  </div>
                  <p>BUYER</p>
                </div>
              </NavLink>
            </Fade>
            <Fade bottom delay={1500}>
              <NavLink to="/how-we-work-for-seller-new">
                <div className="vision-details-box-alignment">
                  <div className="vision-details-img">
                    <img src={SellerIcon} alt="SellerIcon" />
                  </div>
                  <p>SELLER</p>
                </div>
              </NavLink>
            </Fade>
          </div>

          <div className="vision-second-box-alignment">
            <Fade bottom delay={1600}>
              <NavLink to="/dangerous-goods-transportation">
                <div className="vision-second-details-box-alignment first-img">
                  <div className="vision-second-details-img">
                    <img src={TransportationIcon} alt="TransportationIcon" />
                  </div>
                  <p>transportation</p>
                </div>
              </NavLink>
            </Fade>
            <Fade bottom delay={2000}>
            <NavLink to="/sourcing">
              <div className="vision-second-details-box-alignment second-img">
                <div className="vision-second-details-img">
                  <img src={SourcingIcon} alt="SourcingIcon" />
                </div>
                <p>Sourcing</p>
              </div>
              </NavLink>
            </Fade>
            <Fade bottom delay={2300}>
              <NavLink to="/cargoInsurance">
                <div className="vision-second-details-box-alignment third-img">
                  <div className="vision-second-details-img">
                    <img src={InsuranceIcon} alt="InsuranceIcon" />
                  </div>
                  <p>insurance</p>
                </div>
              </NavLink>
            </Fade>
            <Fade bottom delay={2500}>
              <NavLink to="/daily-update">
                <div className="vision-second-details-box-alignment forth-img">
                  <div className="vision-second-details-img">
                    <img src={DailyUpdate} alt="DailyUpdate" />
                  </div>
                  <p>Daily Update</p>
                </div>
              </NavLink>
            </Fade>
            <Fade bottom delay={2800}>
              <div className="vision-second-details-box-alignment five-img">
                <NavLink to="/customs-clearance">
                  <div className="vision-second-details-img">
                    <img src={CustomsIcon} alt="CustomsIcon" />
                  </div>
                  <p>customs</p>
                </NavLink>
              </div>
            </Fade>
            <div className="vision-second-details-box-alignment six-img">
              <div className="vision-second-details-img">
                <img src={SafePaymentIcon} alt="SafePaymentIcon" />
              </div>
              <p>Safe Payment</p>
            </div>
            <Fade bottom delay={3200}>
              <div className="vision-second-details-box-alignment seven-img">
                <NavLink to="/inspection-partner-service">
                  <div className="vision-second-details-img">
                    <img src={InspectionIcon} alt="InspectionIcon" />
                  </div>
                  <p>inspection</p>
                </NavLink>
              </div>
            </Fade>
          </div>
        </div>
        <div className="mobile-view-show-new-home-page-data">
          <div className="container">
            <div className="grid">
              <Fade bottom delay={800} duration={1400}>
                <NavLink to="/buyer-partners">
                  <div className="grid-items">
                    <div className="icon-center-alignment">
                      <img src={BuyerIcon} alt="BuyerIcon" />
                    </div>
                    <span>BUYER</span>
                  </div>
                </NavLink>
              </Fade>
              <Fade bottom delay={800} duration={1400}>
                <NavLink to="/how-we-work-for-seller-new">
                  <div className="grid-items">
                    <div className="icon-center-alignment">
                      <img src={SellerIcon} alt="SellerIcon" />
                    </div>
                    <span>SELLER</span>
                  </div>
                </NavLink>
              </Fade>
              <Fade bottom delay={1000} duration={1400}>
                <NavLink to="/dangerous-goods-transportation">
                  <div className="grid-items">
                    <div className="icon-center-alignment">
                      <img src={TransportationIcon} alt="TransportationIcon" />
                    </div>
                    <span>transportation</span>
                  </div>
                </NavLink>
              </Fade>
              <Fade bottom delay={1000} duration={1400}>
                <NavLink to="/sourcing">
                  <div className="grid-items">
                    <div className="icon-center-alignment">
                      <img src={SourcingIcon} alt="SourcingIcon" />
                    </div>
                    <span>Sourcing</span>
                  </div>
                </NavLink>
              </Fade>
              <Fade bottom delay={1200} duration={1400}>
                <NavLink to="/cargoInsurance">
                  <div className="grid-items">
                    <div className="icon-center-alignment">
                      <img src={InsuranceIcon} alt="InsuranceIcon" />
                    </div>
                    <span>insurance</span>
                  </div>
                </NavLink>
              </Fade>
              <Fade bottom delay={1200} duration={1400}>
              <NavLink to="/daily-update">
                <div className="grid-items">
                  <div className="icon-center-alignment">
                    <img src={DailyUpdate} alt="DailyUpdate" />
                  </div>
                  <span>Daily Update</span>
                </div>
                </NavLink>
              </Fade>
              <Fade bottom delay={1000} duration={1400}>
                <NavLink to="/customs-clearance">
                  <div className="grid-items">
                    <div className="icon-center-alignment">
                      <img src={CustomsIcon} alt="CustomsIcon" />
                    </div>
                    <span>customs</span>
                  </div>
                </NavLink>
              </Fade>
              <Fade bottom delay={1000} duration={1400}>
                <NavLink to="/inspection-services">
                  <div className="grid-items">
                    <div className="icon-center-alignment">
                      <img src={InspectionIcon} alt="InspectionIcon" />
                    </div>
                    <span>inspection</span>
                  </div>
                </NavLink>
              </Fade>
              <Fade bottom delay={1200} duration={1400}>
                <div className="grid-items">
                  <div className="icon-center-alignment">
                    <img src={SafePaymentIcon} alt="SafePaymentIcon" />
                  </div>
                  <span>Safe Payment</span>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
