import React, { useState } from "react";
import "./CompareProduct.scss";
import DropdownIcon from "../../assets/icons/down-line.svg";

export default function CompareProduct() {
  const [Dropdown1, setDropdown1] = useState(false);
  const [Dropdown2, setDropdown2] = useState(false);
  return (
    <div className="compare-product-section">
      <div className="compare-product-heading">
        <h4>Customs Tariffs</h4>
        <p>Compare tariffs and other market access indicators applicable to all countries when exporting in a given destination market</p>
      </div>
      <div className="compare-product-body-alignment">
        <div className="compare-product-box-alignment">
          <div className="compare-product-flex-alignment">
            <div className="compare-product-input">
              <label>EXPORTING COUNTRY</label>

              <div className="input-details-alignment" onClick={() => setDropdown1(!Dropdown1)}>
                <input type="text" placeholder="Select country" />
                <img src={DropdownIcon} alt="DropdownIcon" />

                {Dropdown1 && (
                  <div className="search-box-drodown-alignment">
                    <div className="dropdown-search-box">
                      <input type="text" />
                    </div>

                    <div className="search-option-select-alignment">
                      <ul>
                        <li className="active-link">Select country</li>
                        <li>Afghanistan</li>
                        <li>Albania</li>
                        <li>Algeria</li>
                        <li>American Samoa</li>
                        <li>Afghanistan</li>
                        <li>Albania</li>
                        <li>Algeria</li>
                        <li>American Samoa</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="compare-product-input">
              <label>DESTINATION COUNTRY</label>

              <div className="input-details-alignment" onClick={() => setDropdown2(!Dropdown2)}>
                <input type="text" placeholder="Select country" />
                <img src={DropdownIcon} alt="DropdownIcon" />
                {Dropdown2 && (
                  <div className="search-box-drodown-alignment">
                    <div className="dropdown-search-box">
                      <input type="text" />
                    </div>

                    <div className="search-option-select-alignment">
                      <ul>
                        <li className="active-link">Select country</li>
                        <li>Afghanistan</li>
                        <li>Albania</li>
                        <li>Algeria</li>
                        <li>American Samoa</li>
                        <li>Afghanistan</li>
                        <li>Albania</li>
                        <li>Algeria</li>
                        <li>American Samoa</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="compare-product-input">
              <label>PRODUCT</label>

              <div className="input-details-alignment search-input">
                <input type="text" placeholder="Search product by HS6 code or name" />
                <img src={DropdownIcon} alt="DropdownIcon" />
              </div>
            </div>

            <div className="search-button-alignment">
              <button> Search</button>
            </div>
          </div>

          <div className="advance-search-alignment">
            <a>Advanced product search</a>
          </div>
        </div>
      </div>
    </div>
  );
}
