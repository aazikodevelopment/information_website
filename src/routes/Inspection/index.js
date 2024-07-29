import React, { useEffect } from "react";
import "./Inspection.scss";
import BannerImg from "../../assets/Image/inspection-img.png";
import IconImg1 from "../../assets/Image/icon1.png";
import IconImg2 from "../../assets/Image/icon2.png";
import IconImg3 from "../../assets/Image/icon3.png";
import Number1 from "../../assets/Image/num-1.png";
import Number2 from "../../assets/Image/num-2.png";
import Number3 from "../../assets/Image/num-3.png";
import StepImg from "../../assets/Image/step-img-1.png";
import StepImg1 from "../../assets/Image/step-img-2.png";
import StepImg2 from "../../assets/Image/step-img-3.png";
import TrustImg from "../../assets/Image/trust-img.png";
import InspectionBannerImg from "../../assets/Image/inspection-main-banner.svg";
export default function Inspection() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="inspection-section">
      <div className="container">
        <div className="inspection-alignment">
          <div className="inspection-banner-alignment">
            <div className="inspection-left-side-details-alignment">
              <h6>Aaziko's Inspection Services</h6>
            </div>
            <div>
              <img src={InspectionBannerImg} alt="InspectionBannerImg" />
            </div>
          </div>
        </div>
      </div>
      <div className="inspection-virtual-section">
        <h4>Why is Inspection Vital?</h4>
        <p>In the dynamic world of global trade, ensuring that products meet the defined standards is paramount.</p>

        <div className="inspection-virtual-option-alignment">
          <div className="container">
            <div className="option-grid-alignment">
              <div>
                <img src={IconImg1} alt="IconImg1" />
                <p>validating product quality</p>
              </div>
              <div>
                <img src={IconImg2} alt="IconImg2" />
                <p>Guaranteeing accurate packaging.</p>
              </div>
              <div>
                <img src={IconImg3} alt="IconImg3" />
                <p>Ensuring requisite documentation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inspection-path-section">
        <div className="container">
          <h4>Choose Your Inspection Path</h4>

          <div className="inspection-path-steps-alignment">
            <div className="inspection-path-steps-details-alignment">
              <div className="inspection-path-number">
                <img src={Number1} alt="Number1" />
                <h6>Aaziko's In-House Inspection:</h6>
              </div>

              <div className="inspection-all-details-alignment">
                <div className="inspection-all-details-grid">
                  <div className="inspection-all-details-grid-item">
                    <img src={StepImg} alt="StepImg" />
                  </div>

                  <div className="inspection-all-details-grid-item">
                    <div className="inspection-all-child-details-alignment">
                      <h6>Affordable Excellence</h6>
                      <p>Whether you're a large conglomerate or a budding entrepreneur, benefit from our free or nominally priced inspections.</p>
                    </div>
                    <div className="inspection-all-child-details-alignment">
                      <h6>Diligent Oversight</h6>
                      <p>Our dedicated team meticulously examines every aspect - from product quality and packaging to essential paperwork.</p>
                    </div>
                    <div className="inspection-all-child-details-alignment">
                      <h6>Insightful Reporting</h6>
                      <p>Stay informed with our comprehensive reports, enabling you to make data-driven decisions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="inspection-path-steps-details-alignment second-step">
              <div className="inspection-path-number">
                <img src={Number2} alt="Number1" />
                <h6>Third-Party Inspection with Global Expertise:</h6>
              </div>

              <div className="inspection-all-details-alignment">
                <div className="inspection-all-details-grid">
                  <div className="inspection-all-details-grid-item">
                    <div className="inspection-all-child-details-alignment">
                      <h6>Global Standards:</h6>
                      <p>Partnering with internationally recognized inspection companies, we bring world-class scrutiny to your doorstep.</p>
                    </div>
                    <div className="inspection-all-child-details-alignment">
                      <h6>Budget-Friendly Options:</h6>
                      <p>
                        Leveraging our global partnerships, we offer you specialized rates, ensuring you get the best of both worlds - quality and
                        affordability.
                      </p>
                    </div>
                  </div>

                  <div className="inspection-all-details-grid-item">
                    <img src={StepImg1} alt="StepImg2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="inspection-path-steps-details-alignment">
              <div className="inspection-path-number">
                <img src={Number3} alt="Number1" />
                <h6>Customized Inspection:</h6>
              </div>

              <div className="inspection-all-details-alignment">
                <div className="inspection-all-details-grid">
                  <div className="inspection-all-details-grid-item">
                    <img src={StepImg2} alt="StepImg" />
                  </div>

                  <div className="inspection-all-details-grid-item">
                    <div className="inspection-all-child-details-alignment">
                      <h6>Personal Touch:</h6>
                      <p>
                        Prefer to have a hands-on approach? Feel free to conduct the inspection personally or send a representative of your choice.
                      </p>
                    </div>
                    <div className="inspection-all-child-details-alignment">
                      <h6>Your Comfort, Our Priority:</h6>
                      <p>
                        Whether you wish to use an inspection service of your preference or do it personally, Aaziko offers unparalleled flexibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trust-aaziko-section">
        <div className="container">
          <h6>Trust in Transparency. Trust in Aaziko</h6>
          <p>
            At Aaziko, we understand the complexities and nuances of global trade. That’s why our inspection services are tailored to eliminate
            uncertainties and provide clarity. With us, every purchase is a step towards building a more transparent, trust-filled global trading
            ecosystem.
          </p>
          <div className="trust-img-alignment">
            <img src={TrustImg} alt="TrustImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
