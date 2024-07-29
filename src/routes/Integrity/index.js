import React, { useEffect } from "react";
import "./Integrity.scss";
import IntImg from "../../assets/Image/int-img.png";
import AazikoLogo from "../../assets/logo/aaziko-logo-2.svg";
import INiImg from "../../assets/Image/ini-1.png";
import INi2Img from "../../assets/Image/ini-2.png";
import INi3Img from "../../assets/Image/ini-3.png";
import INi4Img from "../../assets/Image/ini-4.png";
import INi5Img from "../../assets/Image/ini-5.png";
export default function Integrity() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="integrity-section">
      <div className="container">
        <div className="integrity-alignment">
          <div className="integrity-baaner-details-alignment">
            <div className="integrity-first-box">
              <div>
                <h6>Global Trade integrity with Aaziko.</h6>
                <p>
                  At Aaziko, we are committed to revolutionizing import and export dynamics by upholding the highest standards of ethical conduct and
                  transparency.{" "}
                </p>
              </div>
            </div>
            <div className="integrity-second-box">
              <div className="integrity-img-alignment">
                <img src={IntImg} alt="IntImg" />

                <div className="aaziko-logo-alignment">
                  <img src={AazikoLogo} alt="AazikoLogo" />
                </div>
              </div>
            </div>
          </div>

          <div className="integrity-all-body-details-alignment">
            <div className="integrity-all-body-grid-alignment">
              <div className="integrity-all-details-alignment">
                <h6>Transparent Dealings</h6>
                <p>Aaziko provide complete visibility into every stage of your import and export processes.</p>
              </div>
              <div>
                <img src={INiImg} alt="INiImg" />
              </div>
            </div>
            <div className="integrity-all-body-grid-alignment">
              <div className="integrity-img-alignment">
                <img src={INi2Img} alt="INiImg" />
              </div>
              <div className="integrity-all-details-alignment">
                <h6>Transparent Dealings</h6>
                <p>Aaziko provide complete visibility into every stage of your import and export processes.</p>
              </div>
            </div>
            <div className="integrity-all-body-grid-alignment">
              <div className="integrity-all-details-alignment">
                <h6>Transparent Dealings</h6>
                <p>Aaziko provide complete visibility into every stage of your import and export processes.</p>
              </div>
              <div>
                <img src={INi3Img} alt="INiImg" />
              </div>
            </div>
            <div className="integrity-all-body-grid-alignment">
              <div>
                <img src={INi4Img} alt="INiImg" />
              </div>
              <div className="integrity-all-details-alignment">
                <h6>Transparent Dealings</h6>
                <p>Aaziko provide complete visibility into every stage of your import and export processes.</p>
              </div>
            </div>

            <div className="integrity-all-body-grid-alignment">
              <div className="integrity-all-details-alignment">
                <h6>Transparent Dealings</h6>
                <p>Aaziko provide complete visibility into every stage of your import and export processes.</p>
              </div>
              <div>
                <img src={INi5Img} alt="INiImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
