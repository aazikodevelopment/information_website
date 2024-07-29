import React from "react";
import "./LoadStuffingResults.scss";
import ContainerImg from "../../../assets/Image/container-img.png";
import DownloadImg from "../../../assets/Image/download-img.png";
import PackageIcon from "../../../assets/icons/pakage-icon.svg";
import CartIcon from "../../../assets/icons/cart-icon.svg";
export default function LoadStuffingResults() {
  return (
    <div className="load-stuffing-results-section">
      <div className="container">
        <div className="load-stuffing-results-alignment">
          <div className="load-stuffing-top-details-alignment">
            <div className="load-stuffing-top-box-alignment">
              <div className="load-stuffing-to-box-heading">
                <h4>40 High Cube</h4>
                <div className="stuffing-img-alignment">
                  <img src={ContainerImg} alr="ContainerImg" />
                </div>
              </div>

              <div className="load-stuffing-bottom-details-alignment">
                <div className="load-stuffing-units-details">
                  <h6>2 units</h6>
                </div>
                <div className="load-weight-volume-alignment">
                  <p>weight: 5280.00 kg</p>
                  <p>volume: 103.88 m3</p>
                </div>
              </div>
            </div>
            <div className="load-stuffing-top-box-alignment">
              <div className="load-stuffing-to-box-heading">
                <h4>20 STANDARD </h4>
                <div className="stuffing-img-alignment">
                  <img src={ContainerImg} alr="ContainerImg" />
                </div>
              </div>

              <div className="load-stuffing-bottom-details-alignment">
                <div className="load-stuffing-units-details">
                  <h6>1 units</h6>
                </div>
                <div className="load-weight-volume-alignment">
                  <p>weight: 670.00 kg</p>
                  <p>volume: 9.00 m3</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="load-stuffing-other-details-alignment">
          {[0, 1, 2, 3].map(() => {
            return (
              <div className="load-stuffing-other-details-box-alignment">
                <div className="load-stuffing-other-details-box-grid">
                  <div className="load-stuffing-other-details-box-grid-item">
                    <div className="load-stuffing-other-details-box-left-side">
                      <h6>40 High Cube #1</h6>

                      <div className="load-stuffing-other-img">
                        <img src={DownloadImg} alt="DownloadImg" />
                      </div>

                      <div className="load-stuffing-other-bottom-details">
                        <p>1 units</p>

                        <div className="view-button-alignment">
                          <button>3 view</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="load-stuffing-other-details-box-grid-item">
                    <div className="load-stuffing-other-details-box-right-side">
                      <div className="load-stuffing-other-details-box-right-top-grid">
                        <h6>Total</h6>
                        <p>114 packages</p>
                      </div>
                      <div className="load-stuffing-other-details-box-right-top-grid">
                        <h6>Cargo volume</h6>
                        <p>55.88 m3 (73% of volume)</p>
                      </div>
                      <div className="load-stuffing-other-details-box-right-top-grid">
                        <h6>Cargo weight</h6>
                        <p>4440.00 kg (16% of max weight)</p>
                      </div>
                    </div>
                    <div className="load-stuffing-other-chart-alignment">
                      <div className="load-stuffing-other-chart-grid">
                        <div className="load-stuffing-other-chart-grid-item">
                          <svg width="133" height="133" viewBox="0 0 133 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M93.6787 124.757C94.1456 125.758 93.7135 126.951 92.6989 127.388C79.4018 133.109 64.5769 134.326 50.4944 130.821C35.7639 127.155 22.7382 118.544 13.5944 106.427C4.45066 94.3098 -0.257024 79.4215 0.258235 64.2504C0.773478 49.0793 6.48046 34.5447 16.4252 23.076C26.37 11.6074 39.95 3.89968 54.8953 1.24123C69.8405 -1.4172 85.2454 1.13471 98.5351 8.47044C111.825 15.8062 122.194 27.4812 127.909 41.544C133.373 54.9883 134.267 69.8362 130.487 83.8094C130.198 84.8757 129.079 85.4724 128.022 85.1519L109.984 79.6832C108.927 79.3627 108.335 78.2469 108.607 77.1762C110.879 68.2152 110.236 58.7429 106.743 50.1464C102.997 40.931 96.2026 33.2804 87.4938 28.4733C78.7851 23.6662 68.6902 21.9939 58.8966 23.736C49.1029 25.4781 40.204 30.5289 33.6872 38.0443C27.1703 45.5597 23.4305 55.0843 23.0929 65.0259C22.7553 74.9676 25.8402 84.7239 31.8321 92.6641C37.824 100.604 46.3598 106.247 56.0127 108.65C65.0173 110.891 74.4851 110.186 83.034 106.667C84.0554 106.247 85.244 106.675 85.7109 107.676L93.6787 124.757Z" fill="#165AE5" />
                            <path d="M126.941 88.4024C127.979 88.7787 128.519 89.9273 128.111 90.9539C122.617 104.797 112.618 116.388 99.7303 123.854C98.7745 124.408 97.5592 124.043 97.0346 123.071L88.0829 106.484C87.5583 105.512 87.9237 104.303 88.8706 103.734C96.8323 98.9516 103.053 91.7405 106.616 83.1633C107.039 82.1433 108.182 81.6044 109.22 81.9807L126.941 88.4024Z" fill="#00A651" />
                          </svg>

                        </div>
                        <div className="load-stuffing-other-chart-grid-item">
                          <div className="load-stuffing-chart-details-alignment table-responsive">
                            <table cellPadding={0} cellSpacing={0}>
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Packages</th>
                                  <th>Volume</th>
                                  <th>Weight</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="load-stuffing-name-alignment">
                                      <div className="load-stuffing-colour-box blue-box"></div>
                                      <h6>Boxes 1</h6>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="load-stuffing-pakage-alignment">
                                      <div>
                                        <img
                                          src={PackageIcon}
                                          alt="PackageIcon"
                                        />
                                      </div>
                                      <h6>24</h6>
                                    </div>
                                  </td>
                                  <td>48.00 m3</td>
                                  <td>840.00 kg</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="load-stuffing-name-alignment">
                                      <div className="load-stuffing-colour-box green-box"></div>
                                      <h6>Big bags</h6>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="load-stuffing-pakage-alignment">
                                      <div>
                                        <img src={CartIcon} alt="PackageIcon" />
                                      </div>
                                      <h6>90</h6>
                                    </div>
                                  </td>
                                  <td>7.88 m3</td>
                                  <td>3600.00 kg</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="load-stuffing-button-alignment">
          <div className="load-stuffing-back-button">
            <button>Back</button>
          </div>
          <div className="export-pdf-button">
            <button>Export to PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
}
