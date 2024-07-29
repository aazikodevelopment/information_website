import React from "react";
import "./TSSuccessStory.scss";
import DemoImg from "../../../assets/imges/demo-img.png";
export default function TSSuccessStory() {
  return (
    <div className="ts-success-story-section">
      <div className="ts-success-story-bg">
        <div className="container">
          <div className="ts-suceess-heading-alignment">
            <h5>Buyer Success stories</h5>
          </div>

          <div className="ts-sucess-details-alignment">
            <div className="ts-sucess-details-grid-alignment">
              <div className="ts-sucess-details-gridItem-alignment">
                <div className="ts-sucess-box-alignment">
                  <div className="ts-success-img-alignment">
                    <img src={DemoImg} alt="DemoImg" />
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
