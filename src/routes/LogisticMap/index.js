import React, { useEffect } from "react";
import "./LogisticMap.scss";
import SearchIcon from "../../assets/icons/search-icon.svg";
import LocationIcon from "../../assets/icons/location-black-icon.svg";
import LeftRightArrow from "../../assets/icons/left-right-round.svg";
import ByRoadIcon from "../../assets/icons/by-road-icon.svg";
import RightArrowIcon from "../../assets/icons/black-fill-right-arrow.svg";
import NextArrowIcon from "../../assets/icons/next-arrow.svg";
import LogisticMapOption from "./LogisticMapOption";

export default function LogisticMap() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="logistic-map-section">
      <div className="container">
        <div className="logistic-map-alignment">
          <div className="logistic-map-grid">
            <div className="logistic-map-grid-item">
              <div className="logistic-map-left-side">
              
                <LogisticMapOption />
              </div>
            </div>
            <div className="logistic-map-grid-item">
              <div className="logistic-map-box-alignment">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6835053380096!2d72.8372217760578!3d21.204728181709907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fb2a64a922f%3A0xf5c5fbd871f68587!2sSurat%20station!5e0!3m2!1sen!2sin!4v1683178617641!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
