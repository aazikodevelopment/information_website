import React from "react";
import "./VideoGalley.scss";
import VideoAazikoLogo from "../../../assets/Image/video-aaziko-logo.png";
import OurTraindingVideo from "./OurTraindingVideo";
export default function VideoGalley() {
  return (
    <div className="video-gallery-content-alignment">
      <div className="container">
        <div className="video-galley-main-alignment">
          <div className="video-galley-main-grid">
            <div className="video-galley-main-grid-item">
              <h4>
                Aaziko <br />
                The Biggest Global Trade Plateform
              </h4>
              <p>
                "In our Aaziko company, we rely on a variety of Aaziko dialogues
                and other issues of global business. Our YouTube channel is a
                unique and Aaziko video source for a monthly Aaziko lover. It
                provides information on your business activities, business
                plans, Aaziko products and more. And research will be found.
              </p>
            </div>
            <div className="video-galley-main-grid-item">
              <div className="video-aaziko-logo">
                <img src={VideoAazikoLogo} alt="VideoAazikoLogo" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <OurTraindingVideo />
        </div>
      </div>
    </div>
  );
}
// Changes in this code scss file