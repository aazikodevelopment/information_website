import React from "react";
import "./TrackingDetails.scss";
import SearchIcon from "../../../assets/imges/Group-search.svg";
export default function TrackingDetails() {
  return (
    <div>
      <div className="tracking-details-all-content-alignment">
        <div className="container">
          <div className="grid">
            <div className="grid-items">
              <div className="white-box">
                <div className="enter-container">
                  <input type="text" placeholder="Enter container number" />
                  <button>Search</button>
                </div>
                <div className="text">
                  <p>
                    Track all your freight shipments online in one place. More
                    than 90,000 businesses around the world use Container
                    Tracking by SeaRates.
                  </p>
                </div>
                <div className="center-text">
                  <div className="icon-center-alignment">
                    <img src={SearchIcon} alt="SearchIcon" />
                  </div>
                  <p>
                    There are no saved containers to track Sign in to sort and
                    group your searches
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6835053380096!2d72.8372217760578!3d21.204728181709907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fb2a64a922f%3A0xf5c5fbd871f68587!2sSurat%20station!5e0!3m2!1sen!2sin!4v1683178617641!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
