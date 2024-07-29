import React, { useState, useEffect } from "react";
import "./LogisticExplorer.scss";
import CalenderIcon from "../../assets/icons/calender-icon.svg";
import TypeOfContainer from "./TypeOfContainer";
import OnlineFreightMarketplace from "./OnlineFreightMarketplace";
import Totalshipment from "./Totalshipment";
import { ApiGet } from "../../helpers/API/ApiData";
export default function LogisticExplorer() {
  const [portdata, setPortdata] = useState([]);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const getCountyData = (value) => {
    ApiGet(`county-state-city/find-country?letter=${value}`)
      .then((res) => {})
      .catch((err) => {});
  };

  const getPortData = (value) => {
    ApiGet(`county-state-city/find-country?letter=${value}`)
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <div className="logistic-explorer-section">
      <div className="container">
        <div className="logistic-explorer-alignment">
          <div className="logistic-explorer-box  ">
            <div className="logistic-transportation-by-section">
              <label>Transportation by</label>

              <div className="logistic-transportation-box-alignment">
                <div className="logistic-transportation-child-details">
                  <div className="logistic-explorer-option-box active-explorer-box">
                    <div className="logistic-explorer-option-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="6" viewBox="0 0 26 6" fill="none">
                        <path
                          d="M1 5C4.31067 5 6.79333 1 6.79333 1C6.79333 1 9.276 5 12.5867 5C15.896 5 19.2067 1 19.2067 1C19.2067 1 22.5173 5 25 5"
                          stroke="#00AEEF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <p>SEA</p>
                  </div>
                </div>
                <div className="logistic-transportation-child-details">
                  <div className="logistic-explorer-option-box ">
                    <div className="logistic-explorer-option-icon land-alignment"></div>
                    <p>LAND</p>
                  </div>
                </div>
                <div className="logistic-transportation-child-details">
                  <div className="logistic-explorer-option-box">
                    <div className="logistic-explorer-option-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="6" viewBox="0 0 26 6" fill="none">
                        <path
                          d="M25 1C21.6893 1 19.2067 5 19.2067 5C19.2067 5 16.724 1 13.4133 1C10.104 1 6.79333 5 6.79333 5C6.79333 5 3.48267 1 0.999999 1"
                          stroke="#ED1C24"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <p>Air</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="logistic-origin-and-destination-section">
              <div className="logistic-label-alignment">
                <label>ORIGIN OF SHIPMENT</label>
                <label>DESTINATION OF SHIPMENT</label>
              </div>
              <div className="logistic-origin-and-destination-box">
                <div className="logistic-origin-and-destination-names">
                  <label>A</label>
                  <input type="text" placeholder="City, Port, Country" onClick={() => setDropdown(!dropdown)} />

                  <div
                    className={
                      dropdown ? "logistic-dropdown-alignment open-dropdown-alignment" : "logistic-dropdown-alignment close-dropdown-alignment"
                    }
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(() => {
                      return <p>City, Port, Country</p>;
                    })}
                  </div>
                </div>
                <div className="logistic-origin-and-destination-names">
                  <label>B</label>
                  <input type="text" placeholder="City, Port, Country" />
                </div>
              </div>
            </div>
            <div className="logistic-origin-ready-load-section">
              <label>READY TO LOAD</label>
              <div className="logistic-origin-ready-load-box-alignment">
                <div className="logistic-date-alignment">
                  <img src={CalenderIcon} alt="CalenderIcon" />
                  <span>14, Jan, 2022</span>
                </div>
              </div>
            </div>
            <div className="logistic-origin-type-shipment">
              <label>TYPE OF SHIPMENT</label>
              <div className="logistic-origin-type-box-alignment">
                <div className="logistic-origin-type-option">
                  <div className="first-details-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                      <path
                        d="M17.8125 16H1.1875C0.872555 16 0.57051 15.8595 0.347811 15.6095C0.125111 15.3594 0 15.0203 0 14.6667V1.33333C0 0.979711 0.125111 0.640573 0.347811 0.390524C0.57051 0.140476 0.872555 0 1.1875 0H17.8125C18.1274 0 18.4295 0.140476 18.6522 0.390524C18.8749 0.640573 19 0.979711 19 1.33333V14.6667C19 15.0203 18.8749 15.3594 18.6522 15.6095C18.4295 15.8595 18.1274 16 17.8125 16ZM1.1875 1.33333V14.6667H17.8125V1.33333H1.1875Z"
                        fill="#BABABA"
                      />
                      <path
                        d="M4.5 13C4.36739 13 4.24021 12.9423 4.14645 12.8395C4.05268 12.7368 4 12.5974 4 12.4521V3.54795C4 3.40262 4.05268 3.26325 4.14645 3.16049C4.24021 3.05773 4.36739 3 4.5 3C4.63261 3 4.75979 3.05773 4.85355 3.16049C4.94732 3.26325 5 3.40262 5 3.54795V12.4521C5 12.5974 4.94732 12.7368 4.85355 12.8395C4.75979 12.9423 4.63261 13 4.5 13Z"
                        fill="#BABABA"
                      />
                      <path
                        d="M7.5 13C7.36739 13 7.24021 12.9423 7.14645 12.8395C7.05268 12.7368 7 12.5974 7 12.4521V3.54795C7 3.40262 7.05268 3.26325 7.14645 3.16049C7.24021 3.05773 7.36739 3 7.5 3C7.63261 3 7.75979 3.05773 7.85355 3.16049C7.94732 3.26325 8 3.40262 8 3.54795V12.4521C8 12.5974 7.94732 12.7368 7.85355 12.8395C7.75979 12.9423 7.63261 13 7.5 13Z"
                        fill="#BABABA"
                      />
                      <path
                        d="M11.5 13C11.3674 13 11.2402 12.9423 11.1464 12.8395C11.0527 12.7368 11 12.5974 11 12.4521V3.54795C11 3.40262 11.0527 3.26325 11.1464 3.16049C11.2402 3.05773 11.3674 3 11.5 3C11.6326 3 11.7598 3.05773 11.8536 3.16049C11.9473 3.26325 12 3.40262 12 3.54795V12.4521C12 12.5974 11.9473 12.7368 11.8536 12.8395C11.7598 12.9423 11.6326 13 11.5 13Z"
                        fill="#BABABA"
                      />
                      <path
                        d="M14.5 13C14.3674 13 14.2402 12.9423 14.1464 12.8395C14.0527 12.7368 14 12.5974 14 12.4521V3.54795C14 3.40262 14.0527 3.26325 14.1464 3.16049C14.2402 3.05773 14.3674 3 14.5 3C14.6326 3 14.7598 3.05773 14.8536 3.16049C14.9473 3.26325 15 3.40262 15 3.54795V12.4521C15 12.5974 14.9473 12.7368 14.8536 12.8395C14.7598 12.9423 14.6326 13 14.5 13Z"
                        fill="#BABABA"
                      />
                    </svg>
                    <span>FCL</span>
                  </div>
                  <div className="second-details-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                      <path
                        d="M11.0078 0.355353L6.49418 5.0691L1.98054 0.355353C1.52685 -0.118451 0.79396 -0.118451 0.340268 0.355353C-0.113423 0.829157 -0.113423 1.59453 0.340268 2.06834L5.67987 7.64465C6.13356 8.11845 6.86644 8.11845 7.32013 7.64465L12.6597 2.06834C13.1134 1.59453 13.1134 0.829157 12.6597 0.355353C12.206 -0.106302 11.4615 -0.118451 11.0078 0.355353Z"
                        fill="#BABABA"
                      />
                    </svg>
                    <div className="seaech-alignment">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <rect width="50" height="50" rx="8" fill="#00AEEF" />
                        <path
                          d="M31.9694 29.9283C31.5025 29.4811 31.0481 29.0211 30.6067 28.5488C30.2359 28.172 30.0126 27.8979 30.0126 27.8979L27.2214 26.5653C28.3389 25.298 28.9556 23.6667 28.9559 21.9772C28.9559 18.1308 25.8258 15 21.978 15C18.1301 15 15 18.1308 15 21.9772C15 25.8237 18.1301 28.9545 21.978 28.9545C23.7354 28.9545 25.3374 28.2966 26.5665 27.2211L27.8993 30.012C27.8993 30.012 28.1734 30.2353 28.5502 30.6061C28.936 30.9679 29.4434 31.4573 29.9299 31.9686L31.2836 33.3561L31.8857 34L34 31.8859L33.356 31.2839C32.9782 30.9131 32.4738 30.4207 31.9694 29.9283ZM21.978 26.961C19.2296 26.961 16.9937 24.7253 16.9937 21.9772C16.9937 19.2292 19.2296 16.9935 21.978 16.9935C24.7263 16.9935 26.9622 19.2292 26.9622 21.9772C26.9622 24.7253 24.7263 26.961 21.978 26.961Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="logistic-explorer-all-details-alignment">
            <div className="logistic-explorer-all-details-grid">
              <div className="logistic-explorer-all-details-grid-item">
                {/* <TypeOfContainer /> */}
                <Totalshipment />
              </div>
              <div className="logistic-explorer-all-details-grid-item">
                <OnlineFreightMarketplace />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
