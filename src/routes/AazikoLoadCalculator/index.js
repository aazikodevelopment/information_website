import React, { useEffect, useState } from "react";
import "./AazikoLoadCalculator.scss";
import SettingIcon from "../../assets/icons/setting-icon.svg";
import ImportIcon from "../../assets/icons/import-icon.svg";
import ExportIcon from "../../assets/icons/export-icon.svg";
import BorderSettingicon from "../../assets/icons/border-setting-icon.svg";
import DeleteIcon from "../../assets/icons/border-delete-icon.svg";
import DeleteIcon2 from "../../assets/icons/delete-icon2.svg";
import ImportIcon2 from "../../assets/icons/import-icon2.svg";
import ExportIcon2 from "../../assets/icons/export-icon2.svg";
import LoadContainerAndTruck from "./LoadContainerAndTruck";
import LoadStuffingResults from "./LoadStuffingResults";
import AddContainerModal from "./AddContainerModal";
export default function AazikoLoadCalculator() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [loadTab, setLoadTab] = useState("A");
  const [showModal, setShowModal] = useState(true);
  
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="aaziko-load-calculator-section">
      <div className="container">
        <div className="aaziko-load-calculator-alignment">
          <div className="aaziko-load-calculator-tab">
            <ul>
              <li className={loadTab === "A" ? "active-tab" : ""} onClick={() => setLoadTab("A")}>
                Products
              </li>
              <li className={loadTab === "B" ? "active-tab" : ""} onClick={() => setLoadTab("B")}>
                Containers & Trucks
              </li>
              <li className={loadTab === "C" ? "active-tab" : ""} onClick={() => setLoadTab("C")}>
                Stuffing Results
              </li>
              <li>
                <img src={SettingIcon} alt="SettingIcon" />
              </li>
            </ul>
          </div>

          {loadTab === "A" && (
            <>
              <div className="aaziko-add-container-box-alignment">
                <div className="aaziko-add-container-button">
                  <button>+ Add Container</button>
                </div>

                <div className="aaziko-dowalod-alignment">
                  <label>Download template</label>

                  <div className="import-button-alignment">
                    <button>
                      <img src={ImportIcon} alt="ImportIcon" />
                      Import
                    </button>
                  </div>
                  <div className="import-button-alignment">
                    <button className="export-button">
                      <img src={ExportIcon} alt="ExportIcon" />
                      Export
                    </button>
                  </div>
                </div>
              </div>

              <div className="aaziko-details-table-alignment">
                <div className="aaziko-details-table-box">
                  <div className="aaziko-details-flex-alignment">
                    <div className="aaziko-details-left-details-alignment">
                      <div className="aaziko-heading-alignment">
                        <div className="aaziko-box-alignment"></div>
                        <p>Group #1</p>
                      </div>
                      <div className="aaziko-details-edit-alignment">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                          <path
                            d="M20 4.51852L16.4815 1L2.40741 15.0741L1 20L5.92593 18.5926L20 4.51852ZM13.6667 3.81481L17.1852 7.33333L13.6667 3.81481ZM2.40741 15.0741L5.92593 18.5926L2.40741 15.0741Z"
                            stroke="#BABABA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="aaziko-details-right-details-alignment">
                      <div>
                        <img src={DeleteIcon2} alt="DeleteIcon2" />
                      </div>
                      <div>
                        <img src={ImportIcon2} alt="ImportIcon2" />
                      </div>
                      <div>
                        <img src={ExportIcon2} alt="ExportIcon2" />
                      </div>
                    </div>
                  </div>

                  <div className="aaziko-load-calculater-alignment">
                    <div className="aaziko-load-calculater-table-alignment table-responsive">
                      <table cellPadding={0} cellSpacing={0}>
                        <thead>
                          <tr>
                            <th>Type</th>
                            <th>Product Name</th>
                            <th>Length</th>
                            <th>Width/Radius</th>
                            <th>Height</th>
                            <th>Weight</th>
                            <th>Quantity</th>
                            <th>Color</th>
                            <th>Stack</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30" fill="none">
                                <rect x="0.5" y="0.5" width="34" height="29" rx="3.5" fill="white" stroke="#BABABA" />
                                <path
                                  d="M16.591 5.27477C17.4946 4.90841 18.5054 4.90841 19.409 5.27477L26.907 8.31477C27.23 8.44559 27.5065 8.66985 27.7013 8.95882C27.896 9.24779 28 9.58831 28 9.93677V19.5898C27.9998 19.9381 27.8957 20.2784 27.701 20.5671C27.5063 20.8559 27.2298 21.08 26.907 21.2108L19.409 24.2508C18.5054 24.6171 17.4946 24.6171 16.591 24.2508L9.093 21.2108C8.77003 21.0799 8.49347 20.8557 8.29875 20.5667C8.10402 20.2778 8 19.9372 8 19.5888V9.93777C8 9.58931 8.10402 9.24879 8.29875 8.95982C8.49347 8.67085 8.77003 8.44659 9.093 8.31577L16.591 5.27577V5.27477ZM18.845 6.66477C18.3031 6.44517 17.6969 6.44517 17.155 6.66477L15.24 7.44177L22.767 10.3688L25.436 9.33877L18.844 6.66577L18.845 6.66477ZM20.691 11.1698L13.215 8.26177L10.59 9.32577L18.001 12.2078L20.691 11.1698ZM9.5 19.5898C9.50013 19.6394 9.51504 19.6879 9.54282 19.729C9.5706 19.7702 9.61 19.8021 9.656 19.8208L17.155 22.8608C17.186 22.8738 17.218 22.8858 17.25 22.8968V13.5258L9.5 10.5118V19.5898ZM18.845 22.8608L26.344 19.8208C26.3902 19.802 26.4297 19.77 26.4575 19.7286C26.4853 19.6873 26.5001 19.6386 26.5 19.5888V10.5358L18.75 13.5278V22.8978C18.7819 22.8865 18.8136 22.8745 18.845 22.8618V22.8608Z"
                                  fill="#BABABA"
                                />
                              </svg>
                            </td>
                            <td>
                              <div className="product-name-alignment">
                                <span>Boxes 1</span>
                              </div>
                            </td>
                            <td>
                              <div className="other-details-box-alignment">
                                <span>1000</span>
                                <p>mm</p>
                              </div>
                            </td>
                            <td>
                              <div className="other-details-box-alignment">
                                <span>2000</span>
                                <p>mm</p>
                              </div>
                            </td>
                            <td>
                              <div className="other-details-box-alignment">
                                <span>1000</span>
                                <p>mm</p>
                              </div>
                            </td>
                            <td>
                              <div className="other-details-box-alignment">
                                <span>1000</span>
                                <p>kg</p>
                              </div>
                            </td>
                            <td>
                              <div className="other-details-box-alignment quality-width">
                                <span>50</span>
                              </div>
                            </td>
                            <td>
                              <div className="color-box-alignment"></div>
                            </td>
                            <td>
                              <div className="setting-delete-option-flex">
                                <div className="setting-icon-alignment">
                                  <img src={BorderSettingicon} alt="BorderSettingicon" />
                                </div>
                                <div className="setting-icon-alignment">
                                  <img src={DeleteIcon} alt="DeleteIcon" />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30" fill="none">
                                <rect x="0.5" y="0.5" width="34" height="29" rx="3.5" fill="white" stroke="#BABABA" />
                                <path
                                  d="M16.591 5.27477C17.4946 4.90841 18.5054 4.90841 19.409 5.27477L26.907 8.31477C27.23 8.44559 27.5065 8.66985 27.7013 8.95882C27.896 9.24779 28 9.58831 28 9.93677V19.5898C27.9998 19.9381 27.8957 20.2784 27.701 20.5671C27.5063 20.8559 27.2298 21.08 26.907 21.2108L19.409 24.2508C18.5054 24.6171 17.4946 24.6171 16.591 24.2508L9.093 21.2108C8.77003 21.0799 8.49347 20.8557 8.29875 20.5667C8.10402 20.2778 8 19.9372 8 19.5888V9.93777C8 9.58931 8.10402 9.24879 8.29875 8.95982C8.49347 8.67085 8.77003 8.44659 9.093 8.31577L16.591 5.27577V5.27477ZM18.845 6.66477C18.3031 6.44517 17.6969 6.44517 17.155 6.66477L15.24 7.44177L22.767 10.3688L25.436 9.33877L18.844 6.66577L18.845 6.66477ZM20.691 11.1698L13.215 8.26177L10.59 9.32577L18.001 12.2078L20.691 11.1698ZM9.5 19.5898C9.50013 19.6394 9.51504 19.6879 9.54282 19.729C9.5706 19.7702 9.61 19.8021 9.656 19.8208L17.155 22.8608C17.186 22.8738 17.218 22.8858 17.25 22.8968V13.5258L9.5 10.5118V19.5898ZM18.845 22.8608L26.344 19.8208C26.3902 19.802 26.4297 19.77 26.4575 19.7286C26.4853 19.6873 26.5001 19.6386 26.5 19.5888V10.5358L18.75 13.5278V22.8978C18.7819 22.8865 18.8136 22.8745 18.845 22.8618V22.8608Z"
                                  fill="#BABABA"
                                />
                              </svg>
                            </td>
                            <td>
                              <div className="product-name-alignment">
                                <span>Boxes 1</span>
                              </div>
                            </td>
                            <td>
                              <div className="other-details-box-alignment">
                                <span>1000</span>
                                <p>mm</p>
                              </div>
                            </td>
                            <td>
                              <div className="other-details-box-alignment">
                                <span>2000</span>
                                <p>mm</p>
                              </div>
                            </td>
                            <td>
                              <div className="other-details-box-alignment">
                                <span>1000</span>
                                <p>mm</p>
                              </div>
                            </td>
                            <td>
                              <div className="other-details-box-alignment">
                                <span>1000</span>
                                <p>kg</p>
                              </div>
                            </td>
                            <td>
                              <div className="other-details-box-alignment quality-width">
                                <span>50</span>
                              </div>
                            </td>
                            <td>
                              <div className="color-box-alignment"></div>
                            </td>
                            <td>
                              <div className="setting-delete-option-flex">
                                <div className="setting-icon-alignment">
                                  <img src={BorderSettingicon} alt="BorderSettingicon" />
                                </div>
                                <div className="setting-icon-alignment">
                                  <img src={DeleteIcon} alt="DeleteIcon" />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30" fill="none">
                                <rect x="0.5" y="0.5" width="34" height="29" rx="3.5" fill="white" stroke="#BABABA" />
                                <path
                                  d="M16.591 5.27477C17.4946 4.90841 18.5054 4.90841 19.409 5.27477L26.907 8.31477C27.23 8.44559 27.5065 8.66985 27.7013 8.95882C27.896 9.24779 28 9.58831 28 9.93677V19.5898C27.9998 19.9381 27.8957 20.2784 27.701 20.5671C27.5063 20.8559 27.2298 21.08 26.907 21.2108L19.409 24.2508C18.5054 24.6171 17.4946 24.6171 16.591 24.2508L9.093 21.2108C8.77003 21.0799 8.49347 20.8557 8.29875 20.5667C8.10402 20.2778 8 19.9372 8 19.5888V9.93777C8 9.58931 8.10402 9.24879 8.29875 8.95982C8.49347 8.67085 8.77003 8.44659 9.093 8.31577L16.591 5.27577V5.27477ZM18.845 6.66477C18.3031 6.44517 17.6969 6.44517 17.155 6.66477L15.24 7.44177L22.767 10.3688L25.436 9.33877L18.844 6.66577L18.845 6.66477ZM20.691 11.1698L13.215 8.26177L10.59 9.32577L18.001 12.2078L20.691 11.1698ZM9.5 19.5898C9.50013 19.6394 9.51504 19.6879 9.54282 19.729C9.5706 19.7702 9.61 19.8021 9.656 19.8208L17.155 22.8608C17.186 22.8738 17.218 22.8858 17.25 22.8968V13.5258L9.5 10.5118V19.5898ZM18.845 22.8608L26.344 19.8208C26.3902 19.802 26.4297 19.77 26.4575 19.7286C26.4853 19.6873 26.5001 19.6386 26.5 19.5888V10.5358L18.75 13.5278V22.8978C18.7819 22.8865 18.8136 22.8745 18.845 22.8618V22.8608Z"
                                  fill="#BABABA"
                                />
                              </svg>
                            </td>
                            <td>
                              <div className="product-name-alignment">
                                <span>Boxes 1</span>
                              </div>
                            </td>
                            <td>
                              <div className="other-details-box-alignment">
                                <span>1000</span>
                                <p>mm</p>
                              </div>
                            </td>
                            <td>
                              <div className="other-details-box-alignment">
                                <span>2000</span>
                                <p>mm</p>
                              </div>
                            </td>
                            <td>
                              <div className="other-details-box-alignment">
                                <span>1000</span>
                                <p>mm</p>
                              </div>
                            </td>
                            <td>
                              <div className="other-details-box-alignment">
                                <span>1000</span>
                                <p>kg</p>
                              </div>
                            </td>
                            <td>
                              <div className="other-details-box-alignment quality-width">
                                <span>50</span>
                              </div>
                            </td>
                            <td>
                              <div className="color-box-alignment"></div>
                            </td>
                            <td>
                              <div className="setting-delete-option-flex">
                                <div className="setting-icon-alignment">
                                  <img src={BorderSettingicon} alt="BorderSettingicon" />
                                </div>
                                <div className="setting-icon-alignment">
                                  <img src={DeleteIcon} alt="DeleteIcon" />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="add-product-other-details-alignment">
                        <div className="add-product-button-alignment">
                          <button>+ Add Product</button>
                        </div>

                        <div className="add-product-use-option-alignment">
                          <input type="checkbox" />
                          <p>Use Pallets </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aaziko-next-button-alignment">
                <button>Next</button>
              </div>
            </>
          )}
          {loadTab === "B" && <LoadContainerAndTruck />}
          {loadTab === "C" && <LoadStuffingResults />}
        </div>
      </div>
      {showModal && (
        <AddContainerModal onClose={closeModal} />
      )}
      
    </div>
  );
}
