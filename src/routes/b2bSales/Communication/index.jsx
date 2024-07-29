import React , { useState }  from "react";
import "./Communication.scss";
import MobileImage from "../../../assets/imges/mobile.png";
import ToolsIcon from "../../../assets/icons/tools.svg";
import CompasIcon from "../../../assets/icons/compas.svg";
import PlusIcon from "../../../assets/icons/plus.svg";
export default function Communication() {
  const [toogle, setToogle] = useState(false);

  return (
    <div>
      <div className="communication-all-contnet-alignment">
        <div className="container6">
          <div className="grid">
            <div className="grid-items">
              <div className="first-text">
                <span>Communication</span>
                <h2>Connect freely to build lasting relationships</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas integer semper morbi ut auctor in dolor. Porta sed
                  aliquet netus ullamcorper nibh quisque lacus. Vel eget massa,
                  nec bibendum suspendisse. Porttitor et convallis.
                </p>
              </div>
              <div className="all-accodin">
                <div className="main-accodin">
                  <div className="accodin-header">
                    <div className="left-content">
                      <div>
                        <img src={ToolsIcon} alt="ToolsIcon" />
                      </div>
                      <div>
                        <span>Translation tools</span>
                      </div>
                    </div>
                    <div
                      className="right-content"
                      onClick={() => setToogle(!toogle)}>
                      <img
                        className={toogle ? "rotate-img" : ""}
                        src={PlusIcon}
                        alt="PlusIcon"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      toogle ? "accodin-body show" : "accodin-body hide "
                    }>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Egestas integer semper morbi ut auctor in dolor. Porta sed
                      aliquet netus ullamcorper nibh quisque lacus. Vel eget
                      massa, nec bibendum suspendisse. Porttitor et convallis.
                    </span>
                  </div>
                </div>
                <div className="main-accodin">
                  <div className="accodin-header">
                    <div className="left-content">
                      <div>
                        <img src={CompasIcon} alt="CompasIcon" />
                      </div>
                      <div>
                        <span>Product inquiries</span>
                      </div>
                    </div>
                    <div className="right-content">
                      <img src={PlusIcon} alt="PlusIcon" />
                    </div>
                  </div>
                </div>
                <div className="main-accodin">
                  <div className="accodin-header">
                    <div className="left-content">
                      <div>
                        <img src={CompasIcon} alt="CompasIcon" />
                      </div>
                      <div>
                        <span>Online trade shows</span>
                      </div>
                    </div>
                    <div className="right-content">
                      <img src={PlusIcon} alt="PlusIcon" />
                    </div>
                  </div>
                </div>
                <div className="main-accodin">
                  <div className="accodin-header">
                    <div className="left-content">
                      <div>
                        <img src={CompasIcon} alt="CompasIcon" />
                      </div>
                      <div>
                        <span>Aaziko Supplier app</span>
                      </div>
                    </div>
                    <div className="right-content">
                      <img src={PlusIcon} alt="PlusIcon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="mobile-image">
                <img src={MobileImage} alt="MobileImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
