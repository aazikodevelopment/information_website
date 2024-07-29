import React from "react";
import "./MeetingGallery.scss";
import MeetingImg from "../../../assets/Image/meeting-img.png";
import OurGlobalMeeting from "./OurGlobalMeeting/inde";
export default function MeetingGallery() {
  return (
    <div className="meeting-gallery-content-alignment">
      <div className="container">
        <div className="meeting-galler-main-content">
          <div className="meeting-galler-main-grid">
            <div className="meeting-galler-main-grid-item ">
              <h4>
                GlobalTradeConnect <br /> Revolutionizing Seamless Global Trade
              </h4>
              <p>
                Welcome to Aaziko your gateway to effortless global trade. Our
                company is a pioneer in the import-export industry, dedicated to
                simplifying and enhancing the international trading experience
                for every individual and business.
              </p>
            </div>
            <div className="meeting-galler-main-grid-item ">
              <div className="meeting-img-alignment">
                <img src={MeetingImg} alt="MeetingImg" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <OurGlobalMeeting />
        </div>
      </div>
    </div>
  );
}
// Changes in this code scss file