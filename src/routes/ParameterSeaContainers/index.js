import React, { useEffect } from "react";
import "./ParameterSeaContainers.scss";
import DemiImg from "../../assets/Image/demi.png";
export default function ParameterSeaContainers() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="parameter-sea-container-section">
      <div className="container">
        <div className="parameter-sea-container-alignment">
          <div className="parameter-sea-container-heading">
            <h4>Parameters of sea containers</h4>
          </div>

          <div className="parameter-sea-container-body-alignment">
            <div className="parameter-sea-container-body-box">
              <div className="parameter-sea-container-heading">
                <h5>Demi</h5>
              </div>

              <div className="parameter-sea-all-child-details-alignment">
                <div className="parameter-sea-all-img-alignment">
                  <img src={DemiImg} alt="DemiImg" />
                </div>

                <div className="parameter-sea-right-side-alignment">
                  <div className="parameter-sea-container-grid">
                    <div className="parameter-sea-heading-alignment">
                      <h6>IATA ULD code:</h6>
                    </div>
                    <div className="parameter-sea-notes-details">
                      <p>AYY contoured container on half pallet base.</p>
                    </div>
                  </div>
                  <div className="parameter-sea-container-grid">
                    <div className="parameter-sea-heading-alignment">
                      <h6>Rate class:</h6>
                    </div>
                    <div className="parameter-sea-notes-details">
                      <p>Type 7</p>
                    </div>
                  </div>
                  <div className="parameter-sea-container-grid">
                    <div className="parameter-sea-heading-alignment">
                      <h6>Description:</h6>
                    </div>
                    <div className="parameter-sea-notes-details">
                      <p>Half-width main deck container with top contour</p>
                    </div>
                  </div>
                  <div className="parameter-sea-container-grid">
                    <div className="parameter-sea-heading-alignment">
                      <h6>Suitable for:</h6>
                    </div>
                    <div className="parameter-sea-notes-details">
                      <p>727F, 737F, 757F main deck, 747F, 767F, 777F, DC-10F, MD-11 F main deck Maximum gross weight: 3,016 kg (6,649 lb)</p>
                    </div>
                  </div>
                  <div className="parameter-sea-container-grid">
                    <div className="parameter-sea-heading-alignment">
                      <h6>Tare weight:</h6>
                    </div>
                    <div className="parameter-sea-notes-details">
                      <p>80 kg (176 lb)</p>
                    </div>
                  </div>
                  <div className="parameter-sea-container-grid">
                    <div className="parameter-sea-heading-alignment">
                      <h6>AS1825 volume: </h6>
                    </div>
                    <div className="parameter-sea-notes-details">
                      <p>5.8 m3 (206 ft3)</p>
                    </div>
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
