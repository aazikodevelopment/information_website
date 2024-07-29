import React from "react";
import "./ShipScheduleOptionByVessel.scss";
import SearchIcon from "../../../assets/icons/searchIcon.svg";
import CVSIcon from "../../../assets/icons/cvs-icon.svg";
import BlackRightIcon from "../../../assets/icons/black-right-arrow.svg";
export default function ShipScheduleOptionByVessel() {
  return (
    <div className="ship-schedule-option-by-vessel-section">
      <div className="ship-schedule-option-search-box-alignment">
        <div className="ship-schedule-option-input-alignment">
          <input type="text" placeholder="name of vessel, IMO, MMSI" />
        </div>
        <div className="ship-schedule-option-input-alignment second-input">
          <input type="text" placeholder="voyage (optional)s" />
        </div>
        <div className="search-box-alignment">
          <button>
            <img src={SearchIcon} alt="SearchIcon" />
          </button>
        </div>
      </div>
      <div className="ship-schedule-option-by-vessel-body-alignment">
        <div className="cvs-icon-alignment">
          <img src={CVSIcon} alt="CVSIcon" />
        </div>
        <h4>Check vessel schedules online</h4>
        <p>
          At SeaRates, we allow you to check shipping schedules by routing, by port, by vessel, or by carrier. This service is accessible on our
          website, or can be integrated to your system via API or Web technology.
        </p>
        <div className="read-about-app-section">
          <a>Read about app <img src={BlackRightIcon} alt="BlackRightIcon" /></a>
        </div>
      </div>
    </div>
  );
}
