import React from "react";
import "./AssociatedWith.scss";
import AsImg1 from "../../../assets/Image/as-img-1.png";
import AsImg2 from "../../../assets/Image/as-img-2.png";
import AsImg3 from "../../../assets/Image/as-img-3.png";
import AsImg4 from "../../../assets/Image/as-img-4.png";
import Angle1 from "../../../assets/icons/angle-1.svg";
import Angle2 from "../../../assets/icons/angle-2.svg";
import { Fade } from "react-reveal";

export default function AssociatedWith() {
  return (
    <div className="associate-with-all-contnet-alignment">
      <div className="container">
        <div className="associate-heading">
        <Fade  bottom  delay={1000} >
          <p>
            We Are <span>Associated</span> With
          </p>
          </Fade>
        </div>

        <div className="associate-all-details-alignment">
          <div className="associate-grid">
            <div className="associate-grid-item">
              <img src={AsImg1} alt="AsImg1" />

              <div className="top-angle">
                <img src={Angle1} alt="Angle1" />
              </div>

              <div className="bottom-angle">
                <img src={Angle2} alt="Angle2" />
              </div>
            </div>
            <div className="associate-grid-item">
              <img src={AsImg2} alt="AsImg1" />

              <div className="top-angle">
                <img src={Angle1} alt="Angle1" />
              </div>

              <div className="bottom-angle">
                <img src={Angle2} alt="Angle2" />
              </div>
            </div>
            <div className="associate-grid-item">
              <img src={AsImg3} alt="AsImg2" />

              <div className="top-angle">
                <img src={Angle1} alt="Angle1" />
              </div>

              <div className="bottom-angle">
                <img src={Angle2} alt="Angle2" />
              </div>
            </div>
            <div className="associate-grid-item">
              <img src={AsImg4} alt="AsImg1" />

              <div className="top-angle">
                <img src={Angle1} alt="Angle1" />
              </div>

              <div className="bottom-angle">
                <img src={Angle2} alt="Angle2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
