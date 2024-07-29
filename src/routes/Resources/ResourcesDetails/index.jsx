import React from "react";
import "./ResourcesDetails.scss";
export default function ResourcesDetails() {
  return (
    <div>
      <div className="resources-details-all-content-alignment">
        <div className="container">
          <div className="text-grid">
            <div className="text-grid-items">
              <span>What is Aaziko.com?</span>
            </div>
            <div className="text-grid-items">
              <span>New to sourcing on Aaziko.com?</span>
            </div>
            <div className="text-grid-items">
              <span>Hear from our buyers</span>
            </div>
            <div className="text-grid-items">
              <span>Latest from Aaziko.com</span>
            </div>
          </div>
          <div className="white-box">
            <div className="grid">
              <div className="grid-items">
                <div className="text">
                  <p>What is Aaziko.com?</p>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </span>
                </div>
              </div>
              <div className="grid-items">
                <div className="new-text-grid">
                  <div className="new-text-grid-items">
                    <h5>190+</h5>
                    <span>Countries and regions</span>
                  </div>
                  <div className="new-text-grid-items">
                    <h5>40+</h5>
                    <span>Industries</span>
                  </div>
                  <div className="new-text-grid-items">
                    <h5>5,900+</h5>
                    <span>Product Categories</span>
                  </div>
                  <div className="new-text-grid-items">
                    <h5>16</h5>
                    <span>Languages Translated</span>
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
