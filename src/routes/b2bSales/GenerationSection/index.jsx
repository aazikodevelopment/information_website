import React from "react";
import "./GenerationSection.scss";
import DashboardImage from "../../../assets/imges/dashboard1.png";
import DashboardImage2 from "../../../assets/imges/new2.png";
import Icon1 from "../../../assets/icons/a1.svg";
import Icon2 from "../../../assets/icons/a2.svg";
import Icon3 from "../../../assets/icons/a3.svg";
export default function GenerationSection() {
  return (
    <div>
      <div className="generation-section-all-contnet-alignment">
        <div className="container">
          <div className="grid">
            <div className="grid-items">
              <div className="image-style">
                <img src={DashboardImage} alt="DashboardImage" />
              </div>
            </div>
            <div className="grid-items">
              <div className="first-text">
                <span>Ads and lead generation</span>
                <h4>Increase awareness and sales with marketing tools</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas integer semper morbi ut auctor in dolor. Porta sed
                  aliquet netus ullamcorper nibh quisque lacus. Vel eget massa,
                  nec bibendum suspendisse. Porttitor et convallis.
                </p>
              </div>
              <div className="all-icon-contnet-alignment">
                <div className="icon-grid">
                  <div className="icon-grid-items">
                    <div className="icon">
                      <img src={Icon1} alt="Icon1" />
                    </div>
                  </div>
                  <div className="icon-grid-items">
                    <span>Product Showcases</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Egestas integer semper morbi ut auctor in dolor.
                    </p>
                  </div>
                </div>
                <div className="icon-grid">
                  <div className="icon-grid-items">
                    <div className="icon">
                      <img src={Icon2} alt="Icon2" />
                    </div>
                  </div>
                  <div className="icon-grid-items">
                    <span>Keyword advertising</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Egestas integer semper morbi ut auctor in dolor.
                    </p>
                  </div>
                </div>
                <div className="icon-grid">
                  <div className="icon-grid-items">
                    <div className="icon">
                      <img src={Icon2} alt="Icon2" />
                    </div>
                  </div>
                  <div className="icon-grid-items">
                    <span>Request for Quotation (RFQ)</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Egestas integer semper morbi ut auctor in dolor.
                    </p>
                  </div>
                </div>
                <div className="icon-grid">
                  <div className="icon-grid-items">
                    <div className="icon">
                      <img src={Icon3} alt="Icon3" />
                    </div>
                  </div>
                  <div className="icon-grid-items">
                    <span>Sitewide promotions</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Egestas integer semper morbi ut auctor in dolor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-grid">
            <div className="sub-grid-items">
              <div className="first-text">
                <span>Analytics and support</span>
                <h4>Continuously improve your store and sales</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas integer semper morbi ut auctor in dolor. Porta sed
                  aliquet netus ullamcorper nibh quisque lacus. Vel eget massa,
                  nec bibendum suspendisse. Porttitor et convallis.
                </p>
              </div>
              <div className="all-icon-contnet-alignment">
                <div className="icon-grid">
                  <div className="icon-grid-items">
                    <div className="icon">
                      <img src={Icon1} alt="Icon1" />
                    </div>
                  </div>
                  <div className="icon-grid-items">
                    <span>Dashboards</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Egestas integer semper morbi ut auctor in dolor.
                    </p>
                  </div>
                </div>
                <div className="icon-grid">
                  <div className="icon-grid-items">
                    <div className="icon">
                      <img src={Icon2} alt="Icon2" />
                    </div>
                  </div>
                  <div className="icon-grid-items">
                    <span>Industry analytics</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Egestas integer semper morbi ut auctor in dolor.
                    </p>
                  </div>
                </div>
                <div className="icon-grid">
                  <div className="icon-grid-items">
                    <div className="icon">
                      <img src={Icon2} alt="Icon2" />
                    </div>
                  </div>
                  <div className="icon-grid-items">
                    <span>One-on-one support</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Egestas integer semper morbi ut auctor in dolor.
                    </p>
                  </div>
                </div>
                <div className="icon-grid">
                  <div className="icon-grid-items">
                    <div className="icon">
                      <img src={Icon3} alt="Icon3" />
                    </div>
                  </div>
                  <div className="icon-grid-items">
                    <span>Resources</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Egestas integer semper morbi ut auctor in dolor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sub-grid-items">
              <div className="image-style">
                <img src={DashboardImage2} alt="DashboardImage2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
