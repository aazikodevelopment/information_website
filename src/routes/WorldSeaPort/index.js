import React from "react";
import "./WorldSeaPort.scss";
import TrackIcon from "../../assets/icons/track1-icon.svg";
import RealIcon from "../../assets/icons/real1-icon.svg";
import SeaIcon from "../../assets/icons/sea1-icon.svg";
export default function WorldSeaPort() {
  return (
    <div className="world-sea-port-section">
      <div className="world-sea-port-banner">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d929.9905123475592!2d72.7661357!3d21.1936665!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700288942783!5m2!1sen!2sin"
          loading="lazy"
          allowfullscreen=""
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="world-sea-port-body-alignment">
        <div className="container">
          {/* <div className="world-sea-port-contry-name-details">
            <div className="world-sea-port-contry-grid">
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
            </div>
          </div> */}

          <div className="world-sea-port-all-select-counrty-name">
            <h6>Sea ports of Bangladesh</h6>
            <div className="world-sea-port-selected-country-name">
              <ul>
                <li>Chalna</li>
                <li>Chittagong</li>
                <li>Dhaka</li>
                <li>Mongla</li>
              </ul>
            </div>
          </div>

          <div className="world-sea-port-other-details-alignment">
            <div className="world-sea-port-box-alignment">
              <div className="world-sea-port-box-all-details-alignment">
                <div className="world-sea-port-left-side-flex">
                  <div className="shipping-icon-box-alignment">
                    <img src={TrackIcon} alt="TrackIcon" />
                  </div>
                  <div className="shipping-other-details-alignment">
                    <h6>Track & Trace System</h6>
                    <p>
                      Container tracking service provides a very convenient and easy to use way of tracking the current location of containers with
                      your cargo by container number.
                    </p>
                  </div>
                </div>
                <div className="get-started-button">
                  <button>Get Started</button>
                </div>
              </div>
            </div>
            <div className="world-sea-port-box-alignment">
              <div className="world-sea-port-box-all-details-alignment">
                <div className="world-sea-port-left-side-flex">
                  <div className="shipping-icon-box-alignment">
                    <img src={RealIcon} alt="RealIcon" />
                  </div>
                  <div className="shipping-other-details-alignment">
                    <h6>Real ocean freight transit time</h6>
                    <p>
                      Get to know the time in transit of cargo on popular container shipping lines between ports of loading and port of discharge.
                    </p>
                  </div>
                </div>
                <div className="get-started-button">
                  <button>Get Started</button>
                </div>
              </div>
            </div>
            <div className="world-sea-port-box-alignment">
              <div className="world-sea-port-box-all-details-alignment">
                <div className="world-sea-port-left-side-flex">
                  <div className="shipping-icon-box-alignment">
                    <img src={SeaIcon} alt="SeaIcon" />
                  </div>
                  <div className="shipping-other-details-alignment">
                    <h6>Sea Lines Explorer</h6>
                    <p>Service is designed for determination of shipping lines whose vessels put in chosen port or direction.</p>
                  </div>
                </div>
                <div className="get-started-button">
                  <button>Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
