import React, { useEffect } from "react";
import "./AllShippingLeads.scss";
import ShipImg from "../../../assets/Image/ship-img.png";
import JordarImg from "../../../assets/Image/jordan-icon.svg";
import RateImg from "../../../assets/images/rate-img.png";
import SeaImg from "../../../assets/images/sea-img.svg";
import LandImg from "../../../assets/images/land-icon.png";
import AirImf from "../../../assets/images/air-icon.png";
import RightArrowIcon from "../../../assets/icons/right-arrow-black.svg";
import SearchIcon from "../../../assets/icons/search-blue-icon.svg";
import TopIcon from "../../../assets/icons/top-black-icon.svg";
import BottomIcon from "../../../assets/icons/bottom-black-icon.svg";
export default function AllShippingLeads() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="all-shipping-lead-section">
      <div className="container">
        <div className="all-shipping-grid-alignment">
          <div className="all-shipping-gridItem-alignment">
            <div className="all-shipping-left-side-alignment">
              <div className="new-request-box-alignment">
                <div className="plus-icon-alignment">+</div>
                <p>New Request</p>
              </div>

              <div className="request-id-box-alignment">
                <div className="request-id-heading">
                  <h5>Request ID</h5>
                </div>

                <div className="shipping-rount-alignment">
                  <h6>Shipping Route</h6>

                  <div className="shipping-rount-address-box">
                    <div className="shipping-rount-aadres-name">
                      <span>A</span>
                      <p>City, Port</p>
                    </div>

                    <div className="shipping-rount-aadres-name">
                      <span>B</span>
                      <p>City, Port</p>
                    </div>
                  </div>
                </div>
                <div className="type-of-shipping-alignment">
                  <h6>Type of Shipment</h6>
                  <div className="shipping-details-option-alignment">
                    <div className="option-heading-alignment">
                      <input type="checkbox" />
                      <label htmlFor="">All</label>
                    </div>

                    <div className="oprion-option-box-alignment">
                      <div className="option-name-alignment">
                        <img src={SeaImg} alt="SeaImg" />
                        <span>Sea</span>
                      </div>
                      <img src={TopIcon} alt="TopIcon" />
                    </div>
                    <div className="option-heading-alignment">
                      <input type="checkbox" />
                      <label htmlFor="">FCL</label>
                    </div>
                    <div className="option-heading-alignment">
                      <input type="checkbox" />
                      <label htmlFor="">LCL</label>
                    </div>
                    <div className="option-heading-alignment">
                      <input type="checkbox" />
                      <label htmlFor="">BULK</label>
                    </div>
                    <div className="oprion-option-box-alignment">
                      <div className="option-name-alignment">
                        <img src={AirImf} alt="AirImf" />
                        <span>Air</span>
                      </div>
                      <img src={BottomIcon} alt="BottomIcon" />
                    </div>

                    <div className="oprion-option-box-alignment">
                      <div className="option-name-alignment">
                        <img src={SeaImg} alt="SeaImg" />
                        <span>Sea</span>
                      </div>
                      <img src={TopIcon} alt="TopIcon" />
                    </div>
                  </div>
                </div>

                <div className="shipping-button-alignment">
                  <button>Search</button>
                </div>
              </div>
            </div>
          </div>
          <div className="all-shipping-gridItem-alignment">
            <div className="all-shipping-right-side-alignment">
              {[0, 1, 2].map(() => {
                return (
                  <div className="all-shipping-details-grid-alignment">
                    <div className="all-shipping-details-gridItem">
                      <div className="all-shipping-first-part">
                        <h6>N:685094</h6>
                        <p>15 JUN, 2022 10:58</p>

                        <div className="tranform-img-alignment ">
                          <img src={ShipImg} alt="ShipImg" />
                        </div>
                      </div>
                    </div>
                    <div className="all-shipping-details-gridItem">
                      <div className="all-shipping-second-part">
                        <div className="all-shipping-first-row-alignment">
                          <div className="shiping-address-name-alignment">
                            <p>Aqaba, JO</p>
                            <img src={RightArrowIcon} alt="RightArrowIcon" />
                          </div>

                          <div className="shiping-address-name-alignment">
                            <p>Mumbai, IN</p>
                            <img src={RightArrowIcon} alt="RightArrowIcon" />
                          </div>

                          <div className="shiping-address-name-alignment">
                            <img src={JordarImg} alt="JordarImg" />
                            <p>Jordan</p>
                          </div>
                        </div>

                        <div className="all-shipping-rount-box-alignment">
                          <div className="all-shipping-rout-box-img-alignment">
                            <img src={RateImg} alt="RateImg" />
                          </div>

                          <div className="all-shipping-other-details-alignment">
                            <div>
                              <div className="all-shipping-name-alignment">
                                <p>Port Of Loading</p>
                                <div className="all-shipping-contry-alignment">
                                  <div className="counrty-img">
                                    <img src={JordarImg} alt="JordarImg" />
                                  </div>
                                  <p>Aqaba, Jordan</p>
                                </div>
                              </div>
                              <div className="all-shipping-name-alignment">
                                <p>Port Of Loading</p>
                                <div className="all-shipping-contry-alignment">
                                  <div className="counrty-img">
                                    <img src={JordarImg} alt="JordarImg" />
                                  </div>
                                  <p>Aqaba, Jordan</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <img src={SearchIcon} alt="SearchIcon" />
                            </div>
                          </div>
                        </div>

                        <div className="all-shipping-wight-other-details-alignment">
                          <div className="all-shipping-other-chilg-details">
                            <p>Weight Of Cargo:</p>
                            <span>50000 Metric Ton</span>
                          </div>
                          <div className="all-shipping-other-chilg-details">
                            <p>Cargo Ready:</p>
                            <span>15 Jul, 2022</span>
                          </div>
                          <div className="all-shipping-other-chilg-details">
                            <p>Commodity Name:</p>
                            <span>Rock Phosphate</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
