import React from "react";
import "./Featuredpartners.scss";
import FeaturedpartnersCard from "./FeaturedpartnersCard";
export default function Featuredpartners() {
  return (
    <div>
      <div className="feature-partners-all-contnet-alignment">
        <div className="container">
          <div className="section-title">
            <h5>Featured partners</h5>
            <p>
              Aaziko.com has joined forces with these service providers to bring
              businesses more value.
            </p>
          </div>
          <div className="tab">
            <span>All</span>
            <span>Product search tools</span>
            <span>Logistics services</span>
            <span>Dropshipping</span>
            <span>Storefronts</span>
          </div>
          <FeaturedpartnersCard/>
        </div>
      </div>
    </div>
  );
}
