import React from "react";
import "./LatestBlog.scss";
import CardImage from "../../../assets/imges/card-image.png";
export default function LatestBlog() {
  return (
    <div>
      <div className="our-latest-blog-all-content-alignment">
        <div className="container">
          <div className="text">
            <h4>Our latest Blog</h4>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="card-image">
                <img src={CardImage} alt="CardImage" />
              </div>
              <div className="text">
                <span>Lorem ipsum dolor sit amet, consectetur.</span>
              </div>
            </div>
            <div className="grid-items">
              <div className="card-image">
                <img src={CardImage} alt="CardImage" />
              </div>
              <div className="text">
                <span>Lorem ipsum dolor sit amet, consectetur.</span>
              </div>
            </div>
            <div className="grid-items">
              <div className="card-image">
                <img src={CardImage} alt="CardImage" />
              </div>
              <div className="text">
                <span>Lorem ipsum dolor sit amet, consectetur.</span>
              </div>
            </div>
            <div className="grid-items">
              <div className="card-image">
                <img src={CardImage} alt="CardImage" />
              </div>
              <div className="text">
                <span>Lorem ipsum dolor sit amet, consectetur.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
