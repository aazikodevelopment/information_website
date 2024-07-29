import React from "react";
import "./StorefrontBanner.scss";
export default function StorefrontBanner() {
  return (
    <div>
      <div className="store-front-banner-design">
        <div className="container">
          <div className="grid">
            <div className="grid-items">
              <h1>Showcase your brand in Aaziko.com Storefront</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus.
              </p>
            </div>
            <div className="grid-items">
              <div className="white-box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
