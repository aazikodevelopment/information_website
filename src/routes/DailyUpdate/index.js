import React, { useEffect } from "react";
import "./DailyUpdate.scss";
import DailyUpdateImg from "../../assets/Image/daily-update-bg.png";
import Isolation1Img from "../../assets/Image/Isolation-1.png";
import Isolation2Img from "../../assets/Image/Isolation-2.png";
import Isolation3Img from "../../assets/Image/Isolation-3.png";
import Isolation4Img from "../../assets/Image/Isolation-4.png";
import Isolation5Img from "../../assets/Image/Isolation-5.png";
export default function DailyUpdate() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="daily-update-section">
      <div className="daily-update-banner-alignment">
        <div className="container">
          <h4>Daily Updates</h4>

          <div className="daily-banner-update-img">
            <img src={DailyUpdateImg} alt="DailyUpdateImg" />
          </div>
        </div>
      </div>

      <div className="daily-update-details-alignment">
        <div className="container">
          <div className="daily-update-details-flex">
            <div className="daily-img-alignment">
              <img src={Isolation1Img} alt="Isolation1Img" />
            </div>
            <div className="daily-update-box-alignment">
              <h6>Once the production is started, then until the production is complete, we provide daily updates.</h6>
            </div>
          </div>
          <div className="daily-update-details-flex">
            <div className="daily-img-alignment">
              <img src={Isolation2Img} alt="Isolation1Img" />
            </div>
            <div className="daily-update-box-alignment second-box">
              <div>
                <h6>Once your first product is ready than we check and provide you 360 angle photos and videos.</h6>
                <p>Note : if company restrict for goods photos and video than we don’t provide you.</p>
              </div>
            </div>
          </div>
          <div className="daily-update-details-flex">
            <div className="daily-img-alignment">
              <img src={Isolation3Img} alt="Isolation1Img" />
            </div>
            <div className="daily-update-box-alignment third-box">
              <h6>
                We update daily the complete information of how many quantities of your goods are made every day, whether the packing of these goods
                is done properly or not.
              </h6>
            </div>
          </div>
          <div className="daily-update-details-flex">
            <div className="daily-img-alignment">
              <img src={Isolation4Img} alt="Isolation1Img" />
            </div>
            <div className="daily-update-box-alignment fourth-box">
              <h6>If goods production be finish then we provide Inspection service.</h6>
            </div>
          </div>
          <div className="daily-update-details-flex">
            <div className="daily-img-alignment">
              <img src={Isolation5Img} alt="Isolation1Img" />
            </div>
            <div className="daily-update-box-alignment  five-box">
              <h6>
                This way we give you daily updates from the time the product starts to be made till the product is completed and provide best products
                as your prefrence.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
