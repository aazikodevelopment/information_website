import React from "react";
import "./LoadContainerAndTruck.scss";
import LoadTransportIcon from "../../../assets/icons/add-transport-icon.svg";
export default function LoadContainerAndTruck() {
  return (
    <div className="load-container-and-truck-section">
      <div className="container">
        <div className="load-container-and-truck-top-details">
          <div className="add-container-button-alignment">
            <button>+ Add Container</button>
          </div>

          <div className="automatic-container-section-alignment">
            <h6>Automatic Container Selection</h6>
            <div className="automatic-container-bottom-details">
              <div className="option-details-alignment">
                <input type="radio" />
                <label>20’ Standard</label>
              </div>
              <div className="option-details-alignment">
                <input type="radio" />
                <label>40’ Standard</label>
              </div>
              <div className="option-details-alignment">
                <input type="radio" />
                <label>40’ High-cube</label>
              </div>
            </div>
          </div>
        </div>
        <div className="load-container-add-transport-box">
          <div className="load-container-icon-alignment">
            <img src={LoadTransportIcon} alt="LoadTransportIcon" />
          </div>
          <h6>Please add transport</h6>
        </div>

        <div className="load-container-bottom-details-alignment">
          <button className="backButton">Back</button>
          <button className="nextButton">Next</button>
        </div>
      </div>
    </div>
  );
}
