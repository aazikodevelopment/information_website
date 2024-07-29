import React from "react";
import "./WhyByInsurance.scss";
import GreenBox from "../../../assets/icons/box-green.svg";
import BlueBox from "../../../assets/icons/box-blue.svg";
import OrangeBox from "../../../assets/icons/box-orange.svg";
import RedBox from "../../../assets/icons/box-red.svg";
import WII1 from "../../../assets/icons/wii1.svg";
import WII2 from "../../../assets/icons/wii2.svg";
import WII3 from "../../../assets/icons/wii3.svg";
import WII4 from "../../../assets/icons/wii4.svg";
export default function WhyByInsurance() {
  return (
    <div className="why-by-insurance-main">
      <div className="container">
        <div className="why-by-insurance-alignment">
          <h4>Why Buy For Aaziko Insurance</h4>

          <div className="why-by-insurance-all-details-alignment">
            <div className="why-by-insurance-box">
              <img src={GreenBox} alt="GreenBox" />

              <div className="why-by-insurance-details-alignment">
                <h6>Claim Assistance</h6>
                <p>Our claim experts are available 365 days to help you with claim intimation and status</p>
              </div>

              <div className="why-by-insurance-top-icon">
                <img src={WII1} alt="WII1" />
              </div>
            </div>
            <div className="why-by-insurance-box">
              <img src={BlueBox} alt="BlueBox" />
              <div className="why-by-insurance-details-alignment">
                <p>Select your transit type and commodity, make payment and your policy copy is ready</p>
                <h6>Instant policy copy</h6>
              </div>
              <div className="why-by-insurance-top-icon">
                <img src={WII2} alt="WII2" />
              </div>
            </div>
            <div className="why-by-insurance-box">
              <img src={OrangeBox} alt="OrangeBox" />
              <div className="why-by-insurance-details-alignment">
                <h6>Affordable pricing</h6>
                <p>We provide you with the best prices in the market with excellent services</p>
              </div>
              <div className="why-by-insurance-top-icon">
                <img src={WII3} alt="WII3" />
              </div>
            </div>
            <div className="why-by-insurance-box">
              <img src={RedBox} alt="RedBox" />
              <div className="why-by-insurance-details-alignment">
                <p>We provide expert advice after understanding your complete business risk</p>
                <h6>Expert advice</h6>
              </div>
              <div className="why-by-insurance-top-icon">
                <img src={WII4} alt="WII4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
