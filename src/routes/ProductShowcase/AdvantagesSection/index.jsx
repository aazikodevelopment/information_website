import React from "react";
import "./AdvantagesSection.scss";
import ShowcaseImage from "../../../assets/imges/Showcase.png";
import RankingIcon from "../../../assets/icons/ranking.svg";
import ExposureIcon from "../../../assets/icons/exposure.svg";
import ManagementIcon from "../../../assets/icons/management.svg";
export default function AdvantagesSection() {
  return (
    <div>
      <div className="advantage-section-all-contnet-alignment-for-page">
        <div className="container">
          <div className="section-title">
            <h4>Advantages of using Product Showcase</h4>
            <p>
              There are several benefits of using Product Showcase on
              Aaziko.com. The top advantages include higher ranking, more
              exposure, and flexible listing management.
            </p>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="icon-grid">
                <div className="icon-grid-items">
                  <img src={RankingIcon} alt="RankingIcon" />
                </div>
                <div className="icon-grid-items">
                  <p>Higher ranking</p>
                  <span>
                    Display best-selling products into your Product Showcase to
                    get higher ranking.
                  </span>
                </div>
              </div>
              <div className="icon-grid">
                <div className="icon-grid-items">
                  <img src={ExposureIcon} alt="ExposureIcon" />
                </div>
                <div className="icon-grid-items">
                  <p>More exposure</p>
                  <span>
                    Items listed with Product Showcase tend to have more
                    exposure to products that aren’t boosted with this tool.
                  </span>
                </div>
              </div>
              <div className="icon-grid">
                <div className="icon-grid-items">
                  <img src={ManagementIcon} alt="ManagementIcon" />
                </div>
                <div className="icon-grid-items">
                  <p>Flexible listing management</p>
                  <span>
                    Product Showcase listings are easy to adjust and manage.
                    This makes it great for sellers who need flexible marketing
                    strategies.
                  </span>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="image-style">
                <img src={ShowcaseImage} alt="ShowcaseImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
