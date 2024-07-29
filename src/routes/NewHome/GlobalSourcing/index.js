import React from "react";
import "./GlobalSourcing.scss";
import Icon01 from "../../../assets/icons/i01.svg";
import Icon02 from "../../../assets/icons/i02.svg";
import Icon03 from "../../../assets/icons/i03.svg";
import Icon04 from "../../../assets/icons/i04.svg";
import Icon05 from "../../../assets/icons/i05.svg";
import { Fade } from "react-reveal";
export default function GlobalSourcing() {
                                                                                                                 
  return (
    <div>
      <div className="global-sourcing-all-contnet-alignment">
        <div className="container">
          <div className="title">
          <Fade  bottom  delay={1000} >
            <p>
              Way To <span>Global</span> Sourcing
            </p>
            </Fade>
          </div>
          <div className="cus-grid">
            <div className="cus-grid-items">
              <div className="icon-center">
                <img src={Icon01} alt="Icon01" />
              </div>
              <span>MONEY BACK GUARANTEE</span>
            </div>
            <div className="cus-grid-items">
              <div className="icon-center">
                <img src={Icon02} alt="Icon02" />
              </div>
              <span>INSURANCE</span>
            </div>
            <div className="cus-grid-items">
              <div className="icon-center">
                <img src={Icon03} alt="Icon03" />
              </div>
              <span>INSPECTION</span>
            </div>
            <div className="cus-grid-items">
              <div className="icon-center">
                <img src={Icon04} alt="Icon04" />
              </div>
              <span>LOGISTIC</span>
            </div>
            <div className="cus-grid-items">
              <div className="icon-center">
                <img src={Icon05} alt="Icon05" />
              </div>
              <span>TRADE <br/> AGREEMENTS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
