import React from "react";
import "./LogisticMapOption.scss";

import ByRoadIcon from "../../../assets/icons/by-road-icon.svg";
import RightArrowIcon from "../../../assets/icons/black-fill-right-arrow.svg";
import WayIcon from "../../../assets/icons/way-icon.svg";
export default function LogisticMapOption() {
  return (
    <div className="logistic-map-option-alignment">
      <div className="logistic-map-back-alignment">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            opacity="0.8"
            d="M17.1354 20.1729C17.2435 20.065 17.3293 19.9368 17.3879 19.7956C17.4464 19.6545 17.4766 19.5032 17.4766 19.3504C17.4766 19.1976 17.4464 19.0463 17.3879 18.9052C17.3293 18.764 17.2435 18.6358 17.1354 18.5279L12.6087 14.0012L17.1354 9.47457C17.3535 9.25643 17.4761 8.96057 17.4761 8.65207C17.4761 8.34357 17.3535 8.04771 17.1354 7.82957C16.9172 7.61143 16.6214 7.48888 16.3129 7.48888C16.0044 7.48888 15.7085 7.61143 15.4904 7.82957L10.1354 13.1846C10.0272 13.2925 9.94142 13.4207 9.88287 13.5618C9.82433 13.703 9.79419 13.8543 9.79419 14.0071C9.79419 14.1599 9.82433 14.3112 9.88287 14.4523C9.94142 14.5934 10.0272 14.7216 10.1354 14.8296L15.4904 20.1846C15.9337 20.6279 16.6804 20.6279 17.1354 20.1729Z"
            fill="black"
          />
        </svg>
        <p>Back</p>
      </div>

      <div className="logistic-map-body-details-alignment">
        <div className="logistic-all-details-box">
          <div className="logistic-bottom-border-alignment">
            <div className="logistic-all-details-grid">
              <div className="logistic-all-road-name-alignment">
                <h6>№851305</h6>
                <div className="by-road-icon">
                  <img src={ByRoadIcon} alt="ByRoadIcon" />
                </div>
              </div>

              <div className="logistic-map-all-details-alignment">
                <div className="logistic-map-name-alignment">
                  <h6>Visakhapatn...IN</h6>
                  <div className="logistic-right-arrow">
                    <img src={RightArrowIcon} alt="RightArrowIcon" />
                  </div>
                  <h6>Ravenna, IT</h6>
                </div>
                <div className="logistic-map-bottom-details">
                  <div className="logistic-date-alignemnt">
                    <p>25 AUG 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="logistic-map-details-alignment">
              <div className="logistic-map-box-alignment">
                <img src={WayIcon} alt="WayIcon" />
                <p>FCL , 20’Standard 200mt</p>
              </div>
            </div>
          </div>
          <div className="logistic-map-routes-details-alignment">
            <div className="logistic-map-rountes-heading-alignment">
              <h4>Routes</h4>
              <p>Request created 25 Aug 2023</p>
            </div>

            <div className="logistic-map-rountes-body-alignment">
              <div className="logistic-map-rountes-grid-alignment">
                <div className="logistic-map-rountes-grid-item">
                  <div className="logistic-map-left-side-alignment"></div>
                  <div className="logistic-line-alignment"></div>
                  <div className="logistic-second-line"></div>
                </div>
                <div className="logistic-map-rountes-grid-item">
                  <div className="logistic-map-right-side-alignment">
                    <h5>Visakhapatnam, Andhra Pradesh, India</h5>
                    <p>Place of loading</p>
                  </div>
                </div>
              </div>
              <div className="logistic-map-rountes-grid-alignment">
                <div className="logistic-map-rountes-grid-item">
                  <div className="logistic-map-left-side-alignment"></div>

                  <div className="logistic-line-alignment"></div>
                  <div className="logistic-second-line green-line"></div>
                </div>
                <div className="logistic-map-rountes-grid-item">
                  <div className="logistic-map-right-side-alignment">
                    <h5>Visakhapatnam</h5>
                    <p>Port of loading</p>
                  </div>
                </div>
              </div>
              <div className="logistic-map-rountes-grid-alignment">
                <div className="logistic-map-rountes-grid-item">
                  <div className="logistic-map-left-side-alignment"></div>
                </div>
                <div className="logistic-map-rountes-grid-item">
                  <div className="logistic-map-right-side-alignment">
                    <h5>Ravenna</h5>
                    <p>Port of discharge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="logistic-map-details-details">
            <div className="logistic-map-box-alignment">
              <h6>#</h6>
              <p>Coal, anthracite, whether or not pulverised, but not agglomereted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
