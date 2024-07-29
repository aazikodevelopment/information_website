import React, { useEffect } from "react";
import "./VesselTypes.scss";
import VTImg from "../../assets/Image/vti1.png";
import VT2Img from "../../assets/Image/vti2.png";
import VT3Img from "../../assets/Image/vti3.png";
import VT4Img from "../../assets/Image/vti5.png";
import VT5Img from "../../assets/Image/vti6.png";
export default function VesselTypes() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="vessel-types-section">
      <div className="container">
        <div className="vessel-types-alignment">
          <div className="vessel-types-heading-alignment">
            <h4>Vessel types</h4>
          </div>

          <div className="vessel-types-body-alignment">
            <div className="vessel-types-body-grid">
              <div className="vessel-types-body-grid-item">
                <div className="vessel-types-body-box">
                  <h6>General cargo</h6>

                  <div className="vessel-types-img-alignment">
                    <img src={VTImg} alt="VTImg" />
                  </div>

                  <div className="vessel-types-learn-more-details">
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="vessel-types-body-grid-item">
                <div className="vessel-types-body-box">
                  <h6>Bulk carriers</h6>

                  <div className="vessel-types-img-alignment">
                    <img src={VT2Img} alt="VTImg" />
                  </div>

                  <div className="vessel-types-learn-more-details">
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="vessel-types-body-grid-item">
                <div className="vessel-types-body-box">
                  <h6>Containerships</h6>

                  <div className="vessel-types-img-alignment">
                    <img src={VT3Img} alt="VTImg" />
                  </div>

                  <div className="vessel-types-learn-more-details">
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="vessel-types-body-grid-item">
                <div className="vessel-types-body-box">
                  <h6>Tanker market</h6>

                  <div className="vessel-types-img-alignment">
                    <img src={VT4Img} alt="VTImg" />
                  </div>

                  <div className="vessel-types-learn-more-details">
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="vessel-types-body-grid-item">
                <div className="vessel-types-body-box">
                  <h6>Specialized</h6>

                  <div className="vessel-types-img-alignment">
                    <img src={VT5Img} alt="VTImg" />
                  </div>

                  <div className="vessel-types-learn-more-details">
                    <a>LEARN MORE</a>
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
