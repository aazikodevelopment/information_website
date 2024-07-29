import React from "react";
import "./TSSupport.scss";
import MapIcon from "../../../assets/icons/mapRightArrow.svg";
import VisaCardIcon from "../../../assets/icons/visa-icon.svg";
import MasterCardIcon from "../../../assets/icons/master-card-icon.svg";
import PayPalIcon from "../../../assets/icons/paypal-card-icon.svg";
import ApplePayIcon from "../../../assets/icons/apple-pay-icon.svg";
import PaymentSecurityIcon from "../../../assets/icons/paymentSecurity-icon.svg";
import SupportIcon from "../../../assets/icons/support-icon.png";
export default function TSSupport() {
  return (
    <div className="ts-support-section">
      <div className="ts-support-background">
        <div className="container">
          <h4>Purchase with Convenience, Security and Extended Support</h4>

          <div className="ts-support-details-alignment">
            <div className="ts-support-details-grid">
              <div className="ts-support-details-gridItem">
                <div className="ts-support-details-box">
                  <div className="ts-support-heading-box">
                    <div className="ts-support-top-box-alignment">
                      <div>
                        <img src={MapIcon} alt="MapIcon" />
                      </div>
                    </div>
                  </div>

                  <div className="ts-support-body-alignment">
                    <h4>Convenient Options</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc </p>

                    <div className="ts-support-payment-option-details">
                      <div>
                        <img src={VisaCardIcon} alt="VisaCardIcon" />
                      </div>
                      <div>
                        <img src={MasterCardIcon} alt="MasterCardIcon" />
                      </div>
                      <div>
                        <img src={PayPalIcon} alt="PayPalIcon" />
                      </div>
                      <div>
                        <img src={ApplePayIcon} alt="ApplePayIcon" />
                      </div>
                    </div>

                    <div className="ts-support-view-all-alignment">
                      <a>View detail</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ts-support-details-gridItem">
                <div className="ts-support-details-box">
                  <div className="ts-support-heading-box">
                    <div className="ts-support-top-box-alignment">
                      <div>
                        <img src={PaymentSecurityIcon} alt="PaymentSecurityIcon" />
                      </div>
                    </div>
                  </div>

                  <div className="ts-support-body-alignment">
                    <h4>Payment Security</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
                      aptent taciti sociosqu ad litora
                    </p>
                  </div>
                </div>
              </div>
              <div className="ts-support-details-gridItem">
                <div className="ts-support-details-box">
                  <div className="ts-support-heading-box">
                    <div className="ts-support-top-box-alignment">
                      <div>
                        <img src={SupportIcon} alt="SupportIcon" />
                      </div>
                    </div>
                  </div>

                  <div className="ts-support-body-alignment">
                    <h4>Extended support</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
                      aptent taciti sociosqu ad litora{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
