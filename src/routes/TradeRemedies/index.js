import React, { useState } from "react";
import "./TradeRemedies.scss";
import DropdownIcon from "../../assets/icons/drop-down-icon.svg";
import CalenderIcon from "../../assets/icons/calender-icon2.svg";

export default function TradeRemedies() {
  const [Dropdown1, setDropdown1] = useState(false);
  const [Dropdown2, setDropdown2] = useState(false);
  const [Dropdown3, setDropdown3] = useState(false);
  return (
    <div className="trade-tariffs-bg-alignments">
      <div className="container">
        <div className="trade-tariffs-all-details">
          <h4>Trade Remedies</h4>
          <p>Identify anti-dumping, countervailing and safeguard measures applied by an importing country to its partner, by product and by year.</p>
        </div>
      </div>

      <div className="trade-tariffs-body-alignment">
        <div className="trade-tariffs-box-alignment">
          <div className="trade-tariffs-input">
            <label>TYPE</label>

            <div className="input-box-alignment type-input" onClick={() => setDropdown3(!Dropdown3)}>
              <p>All </p>
              <img src={DropdownIcon} alt="DropdownIcon" />
              {Dropdown3 && (
                <div className="input-dropdown-box-alignment">
                  <p>Anti dumping</p>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(() => {
                    return <p>Albania</p>;
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="trade-tariffs-input">
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

          <div className="trade-tariffs-input">
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
          <div className="trade-tariffs-input ">
            <label>YEAR </label>

            <div className="input-box-alignment year-input">
              <p>Year</p>
              <img src={CalenderIcon} alt="CalenderIcon" />
            </div>
          </div>
          <div className="trade-tariffs-input">
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
