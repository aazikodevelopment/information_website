import React from "react";
import "./TradeAgreementWithAaziko.scss";
import AazikoLogo from "../../../assets/logo/aaziko-logo.svg";
import IndiaFleg from "../../../assets/Image/india.svg";

export default function TradeAgreementWithAaziko() {
  return (
    <div className="trade-agreement-with-aaziko-section">
      <div className="container">
        <div className="trade-agreement-with-aaziko-details">
          <div className="trade-agreement-with-aaziko-heading">
            <h4>Trade Agreement with</h4>
            <div className="trade-aaziko-logo">
              <img src={AazikoLogo} alt="AazikoLogo" />
            </div>
          </div>

          <div className="trade-agreement-with-aaziko-body-alignment">
            <div className="trade-agreement-with-aaziko-box">
              <div className="trade-send-post-box">
                <p>Send Your Request</p>
              </div>

              <div className="trade-send-inout-box-alignment">
                <div className="trade-send-input-details-alignment">
                  <div className="trade-send-input-hs-code-box">
                    <input type="text" placeholder="Enter Your HH Code" />
                  </div>
                  <p>Write 6 Digite code</p>
                </div>

                <div className="trade-send-input-details-alignment">
                  <div className="trade-send-input-hs-code-box">
                    <div className="trade-child-flex">
                      <span>India</span>
                      <div className="counrty-fleg-alignment">
                        <img src={IndiaFleg} alt="IndiaFleg" />
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M24 12L16 20L8 12" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="trade-button-alignment">
                <button>SEARCH</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
