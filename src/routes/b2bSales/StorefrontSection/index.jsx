import React, { useState } from "react";
import "./StorefrontSection.scss";
import SupplierImage from "../../../assets/imges/Supplier.png";
import CompasIcon from "../../../assets/icons/compas.svg";
import PlusIcon from "../../../assets/icons/plus.svg";
export default function StorefrontSection() {
  const [toogle, setToogle] = useState(false);

  return (
    <div>
      <div className="store-front-section-all-contnet-alignment">
        <div className="container5">
          <div className="grid">
            <div className="grid-items">
              <div className="image">
                <img src={SupplierImage} />
              </div>
            </div>
            <div className="grid-items">
              <div className="first-text">
                <span>Storefront and catalog</span>
                <h2>Bring your catalog online to attract more customers</h2>
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
                        <img src={CompasIcon} alt="CompasIcon" />
                      </div>
                      <div>
                        <span>Storefront</span>
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
                        <span>Smart Product Posting</span>
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
                        <span>Dynamic Pricing</span>
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
                        <span>API integration</span>
                      </div>
                    </div>
                    <div className="right-content">
                      <img src={PlusIcon} alt="PlusIcon" />
                    </div>
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
