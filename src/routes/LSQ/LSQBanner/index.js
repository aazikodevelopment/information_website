import React from "react";
import "./LSQBanner.scss";
import BannerImg from "../../../assets/Image/lsq1.svg";
export default function LSQBanner() {
  return (
    <div className="lsq-banner-section">
      <div className="container">
        <div className="lsq-banner-grid">
          <div className="lsq-banner-left-side-alignment">
            <h4>Streamline lead <br></br> generation and start <br></br>sales with <br></br>Aaziko.com LSQ</h4>
            <p>
              Connect with buyers with a demand for your products in the Aaziko.com Request for Quotation (lsq) market. Browse order requests and
              provide quotes to warm leads to streamline your sales process.
            </p>
            <div className="submit-button-alignment">
              <button>submit LSQ</button>
            </div>
          </div>
          <div>
            <img src={BannerImg} alt="BannerImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
