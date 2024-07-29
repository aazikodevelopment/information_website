import React from "react";
import "./PerformanceSection.scss";
import SmartImage from "../../../assets/imges/smart.png";
import RegularImage from "../../../assets/imges/regular.png";
import Icon02 from "../../../assets/icons/icon2.svg";
import IntelligentIcon from "../../../assets/icons/Intelligent.svg";
import BiddingIcon from "../../../assets/icons/bidding.svg";
import TrafficIcon from "../../../assets/icons/traffic.svg";
export default function PerformanceSection() {
  return (
    <div>
      <div className="perfomance-section-all-contnet-alignment">
        <div className="container">
          <div className="text">
            <h4>Maximize performance through multiple advertising solutions</h4>
          </div>
          <div className="first-grid">
            <div className="first-grid-items">
              <div className="main-text-all-content-alignment">
                <div className="sub-text">
                  <h5>Smart Marketing</h5>
                  <p>
                    An intelligent marketing tool to efficiently advertise your
                    products
                  </p>
                </div>
                <div className="icon-grid-all-contnet-alignment">
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={Icon02} alt="Icon02" />
                    </div>
                    <div className="icon-grid-items">
                      <p>Intelligent operation</p>
                      <span>
                        Minimal start-up effort and intuitive operation
                      </span>
                    </div>
                  </div>
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={IntelligentIcon} alt="IntelligentIcon" />
                    </div>
                    <div className="icon-grid-items">
                      <p>Intelligent product assessment</p>
                      <span>
                        Campaign-appropriate products recommended by system
                      </span>
                    </div>
                  </div>
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={BiddingIcon} alt="BiddingIcon" />
                    </div>
                    <div className="icon-grid-items">
                      <p>Intelligent bidding</p>
                      <span>
                        Allocate a flexible daily budget and adjust bidding in
                        real-time
                      </span>
                    </div>
                  </div>
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={TrafficIcon} alt="TrafficIcon" />
                    </div>
                    <div className="icon-grid-items">
                      <p>Intelligent traffic</p>
                      <span>Filter high-conversion traffic automatically</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="first-grid-items">
              <div className="image-style">
                <img src={SmartImage} alt="SmartImage" />
              </div>
            </div>
          </div>
          <div className="sec-grid">
            <div className="sec-grid-items">
            <div className="image-style">
                <img src={RegularImage} alt="RegularImage" />
              </div>
            </div>
            <div className="sec-grid-items">
            <div className="main-text-all-content-alignment">
                <div className="sub-text">
                  <h5>Regular Marketing</h5>
                  <p>
                  Manual marketing tool to enhance your traffic for specific audiences and regions
                  </p>
                </div>
                <div className="icon-grid-all-contnet-alignment">
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={Icon02} alt="Icon02" />
                    </div>
                    <div className="icon-grid-items">
                      <p>Increase exposure for selected high-conversion products</p>
                     
                    </div>
                  </div>
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={IntelligentIcon} alt="IntelligentIcon" />
                    </div>
                    <div className="icon-grid-items">
                      <p>Premium bidding to better market to selected audiences and regions</p>
                      <span>
                      Ability to obtain traffic from non-targeted audiences and regions with a basic bidding price
                      </span>
                    </div>
                  </div>
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={BiddingIcon} alt="BiddingIcon" />
                    </div>
                    <div className="icon-grid-items">
                      <p>Use trending keywords to drive traffic</p>
                   
                    </div>
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
