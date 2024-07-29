import React, { useState } from "react";
import "./UnitConverter.scss";
import DropdownIcon from "../../assets/icons/drop-dorn-icon.svg";
import EquallIcon from "../../assets/icons/equal-icon.svg";

export default function UnitConverter() {
  const [firstDropdown, setFirstDropdown] = useState(false);
  const [secondDropdown, setSecondDropdown] = useState(false);
  const [thirdDropdown, setThirdDropdown] = useState(false);
  return (
    <div className="unit-converter-section">
      <div className="container">
        <div className="unit-converter-alignment">
          <div className="unit-converter-heading ">
            <h4>Unit converter</h4>
            <p>
              The online unit converter allows accurately, quickly, and for free convert common units of measurement. Enter your value in the input
              box and select from and to unit from the drop-down to convert the unit.
            </p>
          </div>

          <div className="unit-converter-body">
            <div className="unit-converter-box">
              <div className="unit-converter-grid">
                <div className="unit-converter-grid-item">
                  <div className="unit-converter-input-alignment">
                    <input type="text" placeholder="Acceleration" />
                    <div className="unit-converter-side-dropdown-icon" onClick={() => setFirstDropdown(!firstDropdown)}>
                      <img src={DropdownIcon} alt="DropdownIcon" />
                    </div>

                    <div className={firstDropdown ? "dropdown-box-alignment show-dropdown-box" : "dropdown-box-alignment hidden-dropdown-box"}>
                      <p>Accelerationt</p>
                      <p>Area</p>
                      <p>Torque</p>
                      <p>Electricity</p>
                      <p>Energy</p>
                      <p>Force</p>
                      <p>Lenght</p>
                      <p>Mass</p>
                      <p>Mass Flow</p>
                      <p>Density & Mass Capacity</p>
                      <p>Power</p>
                      <p>Pressure & stress</p>
                      <p>Temperature</p>
                      <p>Time</p>
                      <p>Velocity & Capacity</p>
                      <p>Volume Flow</p>
                    </div>
                  </div>
                  <div className="unit-converter-input-alignment">
                    <input type="text" placeholder="Meter/sq.sec (m/sec²)" />
                    <div className="unit-converter-side-dropdown-icon" onClick={() => setSecondDropdown(!secondDropdown)}>
                      <img src={DropdownIcon} alt="DropdownIcon" />
                    </div>

                    <div className={secondDropdown ? "dropdown-box-alignment show-dropdown-box" : "dropdown-box-alignment hidden-dropdown-box"}>
                      <p>Meter/Sq.sec (m/sec)</p>
                      <p>Foot/Sq.sec (ft/sec)</p>
                      <p>G (g)</p>
                      <p>Galileo (gal)</p>
                      <p>Inch/sq.sec (in/sec)</p>
                    </div>
                  </div>
                  <div className="unit-converter-total-input">
                    <input type="text" placeholder="0" />
                  </div>
                </div>
                <div className="unit-converter-grid-item">
                  <div className="unit-converter-equal-icon">
                    <img src={EquallIcon} alt="EquallIcon" />
                  </div>
                </div>
                <div className="unit-converter-grid-item">
                  <div className="unit-converter-input-alignment">
                    <input type="text" placeholder="Meter/sq.sec (m/sec²)" />
                    <div className="unit-converter-side-dropdown-icon" onClick={() => setThirdDropdown(!thirdDropdown)}>
                      <img src={DropdownIcon} alt="DropdownIcon" />
                    </div>

                    <div className={thirdDropdown ? "dropdown-box-alignment show-dropdown-box" : "dropdown-box-alignment hidden-dropdown-box"}>
                      <p>Meter/Sq.sec (m/sec)</p>
                      <p>Foot/Sq.sec (ft/sec)</p>
                      <p>G (g)</p>
                      <p>Galileo (gal)</p>
                      <p>Inch/sq.sec (in/sec)</p>
                    </div>
                  </div>
                  <div className="unit-converter-total-input">
                    <input type="text" placeholder="0" />
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
