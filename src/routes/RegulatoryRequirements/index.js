import React, { useState } from "react";
import "./RegulatoryRequirements.scss";
import DropdownIcon from "../../assets/icons/drop-down-icon.svg";
export default function RegulatoryRequirements() {
  const [Dropdown1, setDropdown1] = useState(false);
  const [Dropdown2, setDropdown2] = useState(false);
  const [Dropdown3, setDropdown3] = useState(false);
  return (
    <div className="regulatory-requirements-tariffs-bg-alignments">
      <div className="container">
        <div className="regulatory-requirements-tariffs-all-details">
          <h4>Regulatory Requirements</h4>
          <p>Identify import and export-related regulatory requirements applicable to a product by importer, exporter and year.</p>
        </div>
      </div>

      <div className="regulatory-requirements-tariffs-body-alignment">
        <div className="regulatory-requirements-tariffs-box-alignment">
          <div className="regulatory-requirements-tariffs-input">
            <label>REQUIREMENT OF</label>

            <div className="input-box-alignment required-input" onClick={() => setDropdown3(!Dropdown3)}>
              <p>Importing </p>
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
          <div className="regulatory-requirements-tariffs-input">
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

          <div className="regulatory-requirements-tariffs-input">
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
          <div className="regulatory-requirements-tariffs-input">
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
