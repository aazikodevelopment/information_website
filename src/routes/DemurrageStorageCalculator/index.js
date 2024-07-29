import React, { useState } from "react";
import "./DemurrageStorageCalculator.scss";
import DropdownIcon from "../../assets/icons/dropdown2.svg";
export default function DemurrageStorageCalculator() {
  const [demurrageDropDown, setDemurrageDropDown] = useState(false);
  return (
    <div className="demurrage-storage-calculator-section">
      <div className="container">
        <div className="demurrage-storage-calculator-alignment">
          <div className="demurrage-storage-calculator-heading">
            <h4>Demurrage & Storage Calculator</h4>
          </div>

          <div className="demurrage-storage-calculator-body">
            <div className="demurrage-storage-calculator-box">
              <div className="demurrage-storage-calculator-top-details">
                <div>
                  <div className="demurrage-storage-calculator-left-side-alignment">
                    <div className="demurrage-storage-calculator-left-details">
                      <label>Date of Discharge</label>
                    </div>
                    <div className="demurrage-storage-date-input">
                      <input type="date" />
                    </div>
                  </div>
                  <div className="demurrage-storage-calculator-left-side-alignment">
                    <div className="demurrage-storage-calculator-left-details">
                      <label>Gate out Full</label>
                    </div>
                    <div className="demurrage-storage-date-input">
                      <input type="date" />
                    </div>
                  </div>
                  <div className="demurrage-storage-calculator-left-side-alignment">
                    <div className="demurrage-storage-calculator-left-details">
                      <label>Gate in Empty</label>
                    </div>
                    <div className="demurrage-storage-date-input">
                      <input type="date" />
                    </div>
                  </div>
                </div>

                <div className="demurrage-storage-calculator-top-right-details">
                  <div className="demurrage-storage-calculator-top-right-heading">
                    <label>Results counting:</label>
                    <div className="top-right-option-alignment">
                      <ul>
                        <li>Separation</li>
                        <li> Combination</li>
                      </ul>
                    </div>
                  </div>
                  <div className="demurrage-storage-calculator-top-box">
                    <p>Storage: 0 USD</p>
                    <p>Demurrage: 0 USD</p>
                    <p>Detention: 0 USD </p>
                    <div className="total-alignment">
                      <span>Total:</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="demurrage-storage-calculator-bottom-details">
                <div className="demurrage-storage-calculator-bottom-grid-alignment">
                  <div className="demurrage-storage-calculator-bottom-grid-item">
                    <div className="demurrage-storage-calculator-all-details">
                      <h6>STORAGE</h6>
                      <div>
                        <div className="demurrage-storage-calculator-all-ther-details">
                          <label>Free time, days</label>
                          <div className="demurrage-storage-input-alignment">
                            <input type="text" placeholder="0" />
                            <div className="demurrage-storage-side-dropdown-icon" onClick={() => setDemurrageDropDown(!demurrageDropDown)}>
                              <img src={DropdownIcon} alt="DropdownIcon" />
                            </div>

                            <div
                              className={
                                demurrageDropDown ? "dropdown-box-alignment show-dropdown-box" : "dropdown-box-alignment hidden-dropdown-box"
                              }
                            >
                              <p>1</p>
                              <p>2</p>
                              <p>3</p>
                              <p>4</p>
                              <p>5</p>
                            </div>
                          </div>
                        </div>

                        <div className="demurrage-storage-calculator-all-ther-details">
                          <label>Currency</label>
                          <div className="demurrage-storage-input-alignment">
                            <input type="text" placeholder="USD" />
                            <div className="demurrage-storage-side-dropdown-icon" onClick={() => setDemurrageDropDown(!demurrageDropDown)}>
                              <img src={DropdownIcon} alt="DropdownIcon" />
                            </div>

                            <div
                              className={
                                demurrageDropDown ? "dropdown-box-alignment show-dropdown-box" : "dropdown-box-alignment hidden-dropdown-box"
                              }
                            >
                              <p>1</p>
                              <p>2</p>
                              <p>3</p>
                              <p>4</p>
                              <p>5</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="demurrage-storage-calculator-bottom-grid-item">
                    <div className="demurrage-storage-calculator-all-details">
                      <h6>DEMURRAGE</h6>
                      <div className="demurrage-storage-calculator-all-ther-details">
                        <label>Free time, days</label>
                        <div className="demurrage-storage-input-alignment">
                          <input type="text" placeholder="Select" />
                          <div className="demurrage-storage-side-dropdown-icon" onClick={() => setDemurrageDropDown(!demurrageDropDown)}>
                            <img src={DropdownIcon} alt="DropdownIcon" />
                          </div>

                          <div
                            className={demurrageDropDown ? "dropdown-box-alignment show-dropdown-box" : "dropdown-box-alignment hidden-dropdown-box"}
                          >
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="demurrage-storage-calculator-bottom-grid-item">
                    <div className="demurrage-storage-calculator-all-details">
                      <h6>DETENTION</h6>
                      <div className="demurrage-storage-calculator-all-ther-details">
                        <label>Free time, days</label>
                        <div className="demurrage-storage-input-alignment">
                          <input type="text" placeholder="Select" />
                          <div className="demurrage-storage-side-dropdown-icon" onClick={() => setDemurrageDropDown(!demurrageDropDown)}>
                            <img src={DropdownIcon} alt="DropdownIcon" />
                          </div>

                          <div
                            className={demurrageDropDown ? "dropdown-box-alignment show-dropdown-box" : "dropdown-box-alignment hidden-dropdown-box"}
                          >
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="demurrage-storage-calculator-bottom-other-details">
                  <div className="demurrage-storage-calculator-bottom-other-grid">
                    <div className="demurrage-storage-calculator-bottom-other-grid-item">
                      <label>FROM</label>
                      <div className="demurrage-storage-input-alignment">
                        <input type="text" placeholder="0" />
                        <div className="demurrage-storage-side-dropdown-icon" onClick={() => setDemurrageDropDown(!demurrageDropDown)}>
                          <img src={DropdownIcon} alt="DropdownIcon" />
                        </div>

                        <div
                          className={demurrageDropDown ? "dropdown-box-alignment show-dropdown-box" : "dropdown-box-alignment hidden-dropdown-box"}
                        >
                          <p>1</p>
                          <p>2</p>
                          <p>3</p>
                          <p>4</p>
                          <p>5</p>
                        </div>
                      </div>
                    </div>
                    <div className="demurrage-storage-calculator-bottom-other-grid-item">
                      <label>TO</label>
                      <div className="demurrage-storage-input-alignment">
                        <input type="text" placeholder="0" />
                        <div className="demurrage-storage-side-dropdown-icon" onClick={() => setDemurrageDropDown(!demurrageDropDown)}>
                          <img src={DropdownIcon} alt="DropdownIcon" />
                        </div>

                        <div
                          className={demurrageDropDown ? "dropdown-box-alignment show-dropdown-box" : "dropdown-box-alignment hidden-dropdown-box"}
                        >
                          <p>1</p>
                          <p>2</p>
                          <p>3</p>
                          <p>4</p>
                          <p>5</p>
                        </div>
                      </div>
                    </div>
                    <div className="demurrage-storage-calculator-bottom-other-grid-item">
                      <label>RATE</label>
                      <div className="demurrage-storage-rate-input-alignment">
                        <input type="text" placeholder="0" />
                      </div>
                    </div>
                  </div>
                  <div className="demurrage-storage-delete-row">
                    <p>Delete last row</p>
                  </div>
                </div>
              </div>

              <div className="demurrage-storage-button-alignment">
                <button>CALCULATE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
