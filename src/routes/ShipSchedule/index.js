import React, { useEffect, useState } from "react";
import "./ShipSchedule.scss";
import LocationIcon from "../../assets/icons/location-icon.svg";
import DefaltLocationIcon from "../../assets/icons/defalt-location-icon.svg";
import DefaltVehicalIcon from "../../assets/icons/vehical-icon.svg";
import VehicalIcon from "../../assets/icons/active-vehical-icon.svg";
import LeftRightIcon from "../../assets/icons/LeftRightIcon.svg";
import CalenderIcon from "../../assets/icons/calender-icon.svg";
import FilterIcon from "../../assets/icons/filter-icon.svg";
import SearchIcon from "../../assets/icons/search-icon.svg";
import ShipSearchIcon from "../../assets/icons/ship-search-box.svg";
import ShipScheduleOptionByVessel from "./ShipScheduleOptionByVessel";
export default function ShipSchedule() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [shipScheduleTab, setShipScheduleTab] = useState("A");
  const [weekDropdownBox, setWeekDropdownBox] = useState(false);
  return (
    <div className="ship-schedule-section">
      <div className="container">
        <div className="ship-schedule-alignment">
          <div className="ship-schedule-top-box-alignment">
            <div
              className={shipScheduleTab === "A" ? "ship-schedule-child-details-alignment active-option" : "ship-schedule-child-details-alignment"}
              onClick={() => setShipScheduleTab("A")}
            >
              {shipScheduleTab === "A" ? (
                <div className="ship-schedule-icon ship-active-icon">
                  <img src={LocationIcon} alt="LocationIcon" />
                </div>
              ) : (
                <div className="ship-schedule-icon default-active-icon">
                  <img src={DefaltLocationIcon} alt="DefaltLocationIcon" />
                </div>
              )}

              <div className="ship-schedule-name ">
                <p>By Points</p>
              </div>
            </div>
            <div
              className={shipScheduleTab === "B" ? "ship-schedule-child-details-alignment active-option" : "ship-schedule-child-details-alignment"}
              onClick={() => setShipScheduleTab("B")}
            >
              {shipScheduleTab === "B" ? (
                <div className="ship-schedule-icon ship-active-icon">
                  <img src={VehicalIcon} alt="VehicalIcon" />
                </div>
              ) : (
                <div className="ship-schedule-icon default-active-icon">
                  <img src={DefaltVehicalIcon} alt="DefaltVehicalIcon" />
                </div>
              )}
              <div className="ship-schedule-name">
                <p>By Vessel</p>
              </div>
            </div>
          </div>

          {shipScheduleTab === "A" && (
            <>
              <div className="ship-schedule-filter-box-alignment">
                <div className="ship-schedule-first-secrch-alignment">
                  <div className="ship-schedule-search-alignment">
                    <div className="search-number-alignment">
                      <p>A</p>
                      <input type="text" placeholder="Port of departure" />
                    </div>
                  </div>
                  <div>
                    <img src={LeftRightIcon} alt="LeftRightIcon" />
                  </div>

                  <div className="second-ship-schedule-search-alignment">
                    <div className="second-search-number-alignment">
                      <p>B</p>
                      <input type="text" placeholder="Port of departure" />
                    </div>
                  </div>
                </div>
                <div className="ship-date-search-alignment">
                  <img src={CalenderIcon} alt="CalenderIcon" />
                  <p>15 Jun, 20...</p>
                </div>
                <div className="ship-days-filter-alignment" onClick={() => setWeekDropdownBox(!weekDropdownBox)}>
                  <p>1 week</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                    <path
                      d="M10.1611 0.310934L5.99463 4.43546L1.82819 0.310934C1.4094 -0.103645 0.732886 -0.103645 0.314094 0.310934C-0.104698 0.725513 -0.104698 1.39522 0.314094 1.80979L5.24295 6.68907C5.66175 7.10364 6.33826 7.10364 6.75705 6.68907L11.6859 1.80979C12.1047 1.39522 12.1047 0.725513 11.6859 0.310934C11.2671 -0.0930144 10.5799 -0.103645 10.1611 0.310934Z"
                      fill="#BABABA"
                    />
                  </svg>

                  <div
                    className={
                      weekDropdownBox
                        ? "ship-day-filter-dropdown-box-alignment ship-day-week-open-alignment"
                        : "ship-day-filter-dropdown-box-alignment ship-day-week-close-alignment"
                    }
                  >
                    <div className="ship-day-filter-details-alignment">
                      <p>1 week</p>
                      <p>2 week</p>
                      <p>3 week</p>
                      <p>4 week</p>
                      <p>5 week</p>
                    </div>
                  </div>
                </div>

                <div className="ship-all-filter-search-button-alignment">
                  <div className="filter-icon">
                    <img src={FilterIcon} alt="FilterIcon" />
                  </div>

                  <div className="search-button-alignment">
                    <img src={SearchIcon} alt="SearchIcon" />
                  </div>
                </div>
              </div>

              <div className="ship-schedule-filter-body-alignment">
                <div>
                  <img src={ShipSearchIcon} alt="ShipSearchIcon" />
                </div>

                <p>Select port (place) of origin and port (place) of destination, then time interval for your schedule and hit Search button.</p>
              </div>
            </>
          )}
          {shipScheduleTab === "B" && <ShipScheduleOptionByVessel />}
        </div>
      </div>
    </div>
  );
}
