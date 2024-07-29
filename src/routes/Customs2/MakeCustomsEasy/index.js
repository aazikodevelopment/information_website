import React from "react";
import "./MakeCustomsEasy.scss";
import Img11 from "../../../assets/Image/mci-11.png";
import Img12 from "../../../assets/Image/mci-12.png";
import Img13 from "../../../assets/Image/mci-13.png";
export default function MakeCustomsEasy() {
  return (
    <div className="make-customs-easy-section">
      <div className="make-customs-easy-flex">
        <div className="make-customs-child-details">
          <div className="make-customs-easy-box">
            <img src={Img11} alt="Img11" />
          </div>
          <h6>Ai Read Documents</h6>
        </div>
        <div className="make-customs-child-details">
          <div className="make-customs-easy-box">
            <img src={Img12} alt="Img12" />
          </div>
          <h6>
            Verify Diffrent <br /> Agency
          </h6>
        </div>
        <div className="make-customs-child-details">
          <div className="make-customs-easy-box">
            <img src={Img13} alt="Img13" />
          </div>
          <h6>
            Provide Customs <br /> Documents
          </h6>
        </div>
      </div>
    </div>
  );
}
