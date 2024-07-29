import React from "react";
import "./SellerContent.scss";
import SellerProfile from "../../../assets/imges/seller-profile.png";
import ProfileImage from "../../../assets/imges/profile.png";
import Icon0001 from "../../../assets/icons/0001.svg";
import Icon0002 from "../../../assets/icons/right-icon.svg";
export default function SellerContent() {
  return (
    <div>
      <div className="seller-all-content-alignment">
        <div className="container4">
          <div className="title">
            <h6>Success Stories from Aaziko.com Seller</h6>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="profile-grid">
                <div className="profile-grid-items">
                  <img src={ProfileImage} alt="ProfileImage" />
                </div>
                <div className="profile-grid-items">
                  <p>denish Manddret</p>
                  <span>Owner</span>
                </div>
              </div>
              <div className="left-icon">
              <img src={Icon0001} alt="Icon0001" />
            </div>
            <div className="text">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Egestas. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Egestas.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Egestas. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Egestas.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Egestas.
              </span>
            </div>
            <div className="right-icon">
              <img src={Icon0002} alt="Icon0002"/>
            </div>
            </div>


            <div className="grid-items">
              <img
                src={SellerProfile}
                alt="SellerProfile"
                className="seller-profile"
              />
            </div>
          </div>
          <div className="more-button">
            <button>More Stories</button>
          </div>
        </div>
      </div>
    </div>
  );
}
