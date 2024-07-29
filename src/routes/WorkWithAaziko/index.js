import React, { useEffect } from "react";
import "./WorkWithAaziko.scss";
import AazikoLogo from "../../assets/logo/aaziko-logo.svg";
import WorkImg from "../../assets/Image/worki1.png";
import FormBannerImg from "../../assets/Image/form-banner.png";
import Mailicon from "../../assets/icons/mail-icon.svg";
import CompanyIcon from "../../assets/icons/company-icon.svg";
import UserIcon from "../../assets/icons/user-ison.svg";
import PhoneIcon from "../../assets/icons/phone-icon.svg";
import PinIcon from "../../assets/icons/location-icon2.svg";
export default function WorkWithAaziko() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="work-with-aaziko-section">
      <div className="work-with-aaziko-banner-alignment">
        <div className="container">
          <div className="work-with-aaziko-banner-details">
            <div>
              <h6>
                Transport work with <img src={AazikoLogo} alt="AazikoLogo" /> .
              </h6>
            </div>
            <p>Aaziko, a leading name in global trade, we understand the pivotal significance of transportation in the import-export landscape. </p>
          </div>
        </div>
      </div>

      <div className="work-with-aaziko-all-details-alignment">
        <div className="container">
          <div className="work-with-aaziko-top-details">
            <div className="work-with-aaziko-top-details-grid">
              <div className="work-with-aaziko-top-details-grid-item">
                <img src={WorkImg} alt="WorkImg" />
              </div>

              <div className="work-with-aaziko-top-details-grid-item">
                <div className="work-with-aaziko-all-child-details">
                  <h6> Aaziko's Commitment to Domestic Transportation.</h6>
                  <p> Aaziko emphasize on efficient domestic transportation networks to underscore our commitment to international trade.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="transform-job-details-alignment">
            <div className="transform-job-details-heading-alignment">
              <h5>Transport and Job</h5>
              <h6>Start Geting transport Job With Aaziko.</h6>
            </div>

            <div className="transform-job-form-alignment">
              <div className="form-top-banner">
                <img src={FormBannerImg} alt="FormBannerImg" />
              </div>

              <div className="form-input-alignment">
                <div className="form-input-first-grid-alignment">
                  <div className="form-input">
                    <div className="form-icon-alignment">
                      <img src={CompanyIcon} alt="CompanyIcon" />
                    </div>
                    <input type="text" placeholder="Company Name" />
                  </div>
                  <div className="form-input">
                    <div className="form-icon-alignment">
                      <img src={Mailicon} alt="Mailicon" />
                    </div>
                    <input type="text" placeholder="Email Adress" />
                  </div>
                </div>

                <div className="form-input-second-grid-alignment">
                  <div className="form-input">
                    <div className="form-icon-alignment">
                      <img src={UserIcon} alt="UserIcon" />
                    </div>
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="form-input">
                    <div className="form-icon-alignment">
                      <img src={PhoneIcon} alt="PhoneIcon" />
                    </div>
                    <input type="text" placeholder="Contact Number" />
                  </div>
                  <div className="form-input">
                    <div className="form-icon-alignment">
                      <img src={PinIcon} alt="PinIcon" />
                    </div>
                    <input type="text" placeholder="Address" />
                  </div>
                </div>

                <div className="form-button-alignment">
                  <button>SUBMIT</button>
                </div>

                <div className="thank-you-message-box-alignment">
                  <p>Thank You for Apply at Aaziko. our team contact you soon.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
