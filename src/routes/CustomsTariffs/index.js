import React, { useState } from "react";
import "./CustomsTariffs.scss";
import DropdownIcon from "../../assets/icons/drop-down-icon.svg";
import CalenderIcon from "../../assets/icons/calender-icon2.svg";

export default function CustomsTariffs() {
  const [Dropdown1, setDropdown1] = useState(false);
  const [Dropdown2, setDropdown2] = useState(false);
  return (
    <div className="customs-tariffs-bg-alignments">
      <div className="container">
        <div className="customs-tariffs-all-details">
          <h4>Customs Tariffs</h4>
          <p>Identify general, MFN and preferential tariffs applied by an importing country to its partners, by product and by year.</p>
        </div>
      </div>

      <div className="custom-tariffs-body-alignment">
        <div className="custom-tariffs-box-alignment">
          <div className="custom-tariffs-input">
            <label>DESTINATION COUNTRY</label>

            <div className="input-box-alignment" onClick={() => setDropdown1(!Dropdown1)}>
              <p>Select Country</p>
              <img src={DropdownIcon} alt="DropdownIcon" />
              {Dropdown1 && (
                <div className="input-dropdown-box-alignment">
                  <p>Afthanistan</p>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(() => {
                    return <p>Albania</p>;
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="custom-tariffs-input">
            <label>EXPORTING COUNTRY</label>

            <div className="input-box-alignment" onClick={() => setDropdown2(!Dropdown2)}>
              <p>all</p>
              <img src={DropdownIcon} alt="DropdownIcon" />
              {Dropdown2 && (
                <div className="input-dropdown-box-alignment">
                  <p>Afthanistan</p>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(() => {
                    return <p>Albania</p>;
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="custom-tariffs-input ">
            <label>YEAR </label>

            <div className="input-box-alignment year-input">
              <p>Year</p>
              <img src={CalenderIcon} alt="CalenderIcon" />
            </div>
          </div>
          <div className="custom-tariffs-input">
            <label>PRODUCT</label>

            <div className="input-box-alignment serach-input ">
              <p>Serach product by HS6 code or name</p>
              <img src={DropdownIcon} alt="DropdownIcon" />
            </div>
          </div>
          <div className="search-button-alignment">
            <button>SEARCH</button>
          </div>
        </div>
      </div>
    </div>
  );
}
