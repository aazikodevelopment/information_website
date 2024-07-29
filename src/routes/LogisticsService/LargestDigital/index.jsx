import React from "react";
import "./LargestDigital.scss";
import Icon1 from "../../../assets/icons/i1.svg";
import Icon2 from "../../../assets/icons/i2.svg";
import Icon3 from "../../../assets/icons/i3.svg";
export default function LargestDigital() {
  return (
    <div>
      <div className="largest-degital-all-content-alignment">
        <div className="container">
          <div className="first-section">
            <div className="text">
              <h2>
                The world’s largest digital freight platform, now on Aaziko.com
              </h2>
            </div>
            <div className="grid">
              <div className="grid-items">
                <div className="icon">
                  <img src={Icon1} alt="Icon1" />
                </div> 
                <p>Fast comparison & booking</p>
                <span>
                  Instantly compare quotes from 12 handpicked providers to find
                  the best value for your needs.
                </span>
              </div>
              <div className="grid-items">
                <div className="icon">
                  <img src={Icon2} alt="Icon2" />
                </div>
                <p>Full visibility & control</p>
                <span>
                  Breathe easy thanks to end-to-end tracking, live updates, and
                  flexible payment options.
                </span>
              </div>
              <div className="grid-items">
                <div className="icon">
                  <img src={Icon3} alt="Icon3" />
                </div>
                <p>Stay organized</p>
                <span>
                  Manage documents, communicate with providers, and get support
                  — all in one dashboard.
                </span>
              </div>
            </div>
          </div>
          <div className="sec-section">
            <div className="text">
              <h4>
                Compare, book and manage ocean freight, right from Aaziko.com
              </h4>
            </div>
            <div className="center-box">
              <div className="box"></div>
            </div>
            <div className="text-grid">
              <div className="text-grid-items">
                <div className="icon-center-alignment">
                  <div className="icon">1</div>
                </div>
                <p>Compare and book</p>
                <span>
                  Tell us some details about your TA order, then choose a quote
                  from one of our providers.
                </span>
              </div>
              <div className="text-grid-items">
                <div className="icon-center-alignment">
                  <div className="icon">2</div>
                </div>
                <p>Upload documents</p>
                <span>
                  We’ll let you know what documents you’ll need to provide for
                  your shipment.
                </span> 
              </div>
              <div className="text-grid-items">
                <div className="icon-center-alignment">
                  <div className="icon">3</div>
                </div>
                <p>Track your order</p>
                <span>
                  Monitor your shipment and our team of experts will help you
                  resolve any issues that arise.
                </span>
              </div>
              <div className="text-grid-items"></div>
              <div className="text-grid-items"></div>
            </div>
            <div className="button-alignment">
              <button>Compare rates</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
