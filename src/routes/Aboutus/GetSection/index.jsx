import React from "react";
import "./GetSection.scss";
import GetImage from "../../../assets/imges/get.png";
import UndrawImage from "../../../assets/imges/undraw.png";
import RightIcon from "../../../assets/icons/right-blue.svg";
export default function GetSection() {
  return (
    <div>
      <div className="get-section-all-content-alignment">
        <div className="container3">
          <div className="first-grid">
            <div className="first-grid-items">
              <h6>Get discovered and increase sales with intelligent tools</h6>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Egestas.
              </span>
              <div className="icon-text">
                <a>See the global demands for your product</a>
                <img src={RightIcon} alt="RightIcon" />
              </div>
            </div>
            <div className="first-grid-items">
              <div className="image">
                <img src={GetImage} alt="GetImage" />
              </div>
            </div>
          </div>
          <div className="sec-grid">
            <div className="sec-grid-items">
              <div className="image">
                <img src={UndrawImage} alt="UndrawImage"/>
              </div>
            </div>
            <div className="sec-grid-items">
              <h4>Unlock Your Sucess with professional services</h4>
              <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas.
              </span>
              <div className="icon-text">
                <a>See the global demands for your product</a>
                <img src={RightIcon}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
