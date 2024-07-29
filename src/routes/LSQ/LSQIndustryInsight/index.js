import React from "react";
import "./LSQIndustryInsight.scss";
import IICImg from "../../../assets/Image/iic-img.png";
import HotImg from "../../../assets/Image/hot-img.png";
import RightArrowBlue from "../../../assets/icons/right-arrow-blue.svg";
export default function LSQIndustryInsight() {
  return (
    <div className="lsq-industry-insight-section">
      <div className="container">
        <div className="lsq-industry-heading-alignment">
          <h6>Industry Insight</h6>
        </div>
        <div className="lsq-industry-body-details-alignment">
          <div className="lsq-industry-body-details-grid">
            <div className="lsq-industry-body-details-grid-item">
              <div className="lsq-industry-left-side-alignment">
                <div className="lsq-top-heading-alignment">
                  <h6>Buyer Demand Trend</h6>
                  <p>Buyer demand trend in past 2 years</p>
                </div>
                <div className="lsq-body-alignment">
                  <div>
                    <img src={IICImg} alt="IICImg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lsq-industry-body-details-grid-item">
              <div className="lsq-industry-right-side-alignment">
                <div className="right-side-top-alignment-heding">
                  <h6>Hot search keywords this month</h6>
                </div>

                <div className="lsq-industry-table-alignment">
                  <div className="lsq-industry-heading-alignment">
                    <div className="lsq-industry-grid-alignment">
                      <div className="lsq-industry-grid-item-box">
                        <p>Hot Searches</p>
                      </div>
                      <div className="lsq-industry-grid-item-box">
                        <p>Popularity</p>
                      </div>
                    </div>
                  </div>

                  <div className="lsq-industry-img-chart">
                    <img src={HotImg} alt="HotImg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lsq-view-report-alignment">
          <a>
            View the full industry report <img src={RightArrowBlue} alt="RightArrowBlue" />
          </a>
        </div>
      </div>
    </div>
  );
}
