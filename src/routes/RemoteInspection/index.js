import React, { useEffect } from "react";
import "./RemoteInspection.scss";
import RIIcon from "../../assets/Image/ri-icon.png";
import TimeEfficientImage from "../../assets/Image/ri8.png";
import CostEffectiveImage from "../../assets/Image/ri9.png";
import LabelingImage from "../../assets/Image/ri7.png";
import VerificationImage from "../../assets/Image/ri6.png";
import RealTimeImage from "../../assets/Image/ri5.png";
import WalkthroughsImage from "../../assets/Image/ri4.png";
import FlexibilityIcon from "../../assets/Image/ri2.png";
import ImmediateIcon from "../../assets/Image/ri3.png";
import SafetyIcon from "../../assets/Image/ri1.png";
import Image1 from "../../assets/Image/RI10.png";
import Image2 from "../../assets/Image/RI11.png";
import LineArrowIcon from "../../assets/Image/Line 105.png";
import LineArrowIcon2 from "../../assets/Image/Line 106.png";


export default function RemoteInspection() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <div className="remote-inspection-section">
      <div className="container">
        <div className="remote-inspection-alignment">
          <div className="remote-inspection-grid">
            <div className="remote-inspection-right-side-alignemnt">
              <h4>Aaziko Remote Inspection Services:</h4>
            </div>
            <div className="remote-inspection-details">
              <div className="ImageBox"></div>
              <div className="image1">
                <img src={Image1} alt="image1"/>
              </div>
              <div className="image2">
              <img src={Image1} alt="image1"/>
              </div>
              <div className="image3">
                <img src={Image2} alt="image1"/>
              </div>
              <img src={LineArrowIcon} className="line1" alt="linearrowicon"/>
              <img src={LineArrowIcon2} className="line2" alt="LineArrowIcon2"/>
              <span className="spancircle1"/>
              <span className="spancircle2"/>
            </div>
          </div>
        </div>
      </div>
      <div className="fullbg">
        <div className="container">
          <div>
            <h3>Benefits of Remote Inspection</h3>
            <div>Remote inspection refers to the process of evaluating, examining, or assessing something from a distance using technology and digital tools, rather than physically being present at the location.</div>
          </div>
          <div className="helpeingalign">
            <div>
              <div className="imageshadow">
                <img src={SafetyIcon} alt="SafetyIcon"/>
              </div>
              <div>Safety & Sustainability</div>
            </div>
            <div>
              <div className="imageshadow">
                <img src={FlexibilityIcon} alt="FlexibilityIcon"/>
              </div>
              <div>Flexibility</div>
            </div>
            <div>
              <div className="imageshadow">
                <img src={ImmediateIcon} alt="ImmediateIcon"/>
              </div>
              <div>Immediate Decision Making</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="remote-inspection-all-details-alignmnent">
          <div className="remote-inspection-all-child-details-alignment">
            <div className="remote-inspection-heading-alignment">
              <h6>What Does the Remote Inspection Cover?</h6>
            </div>
            <div className="romote-inspection-option-details-alignment">
              <div className="remote-inspection-child-grid-alignment">
                <div className="remote-inspection-child-grid-item">
                  <div className="bordershadow">
                    <div className="remote-option-details-img">
                      <img src={WalkthroughsImage} alt="WalkthroughsImage" />
                    </div>
                  </div>
                  <div className="remote-option-details-alignment">
                    <h6>Virtual Walkthroughs:</h6>
                    <p>
                      Take a guided tour of the manufacturing facility, observing processes, machinery, and workforce efficiency, all through
                      high-definition video feeds.
                    </p>
                  </div>
                </div>
                <div className="remote-inspection-child-grid-item">
                  <div className="bordershadow">
                    <div className="remote-option-details-img">
                      <img src={RealTimeImage} alt="RealTimeImage" />
                    </div>
                  </div>
                  <div className="remote-option-details-alignment">
                    <h6>Real-Time Production</h6>
                    <p>
                      Watch products being tested live. Ask questions, request additional checks, and interact with onsite personnel as if you were
                      there in person.
                    </p>
                  </div>
                </div>
                <div className="remote-inspection-child-grid-item">
                  <div className="bordershadow">
                    <div className="remote-option-details-img">
                      <img src={VerificationImage} alt="VerificationImage" />
                    </div>
                  </div>
                  <div className="remote-option-details-alignment">
                    <h6>Document Verification</h6>
                    <p>
                      Review quality certifications, production records, and other pertinent documents in real-time, ensuring all standards are
                      being upheld.
                    </p>
                  </div>
                </div>
                <div className="remote-inspection-child-grid-item">
                  <div className="bordershadow">
                    <div className="remote-option-details-img">
                      <img src={LabelingImage} alt="LabelingImage" />
                    </div>
                  </div>
                  <div className="remote-option-details-alignment">
                    <h6>Live Packaging & Labeling</h6>
                    <p>
                      Ensure products are packaged and labeled according to your specifications and international requirements, right before your
                      eyes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="remote-inspection-all-child-details-alignment">
          <div className="remote-inspection-heading-alignment">
            <h6>Why Opt for Aaziko's Remote Inspection?</h6>
          </div>
          <div className="romote-inspection-option-details-alignment">
            <div className="remote-inspection-child-grid-alignment">
              <div className="remote-inspection-child-grid-item">
                <div className="bordershadow">
                  <div className="remote-option-details-img">
                    <img src={TimeEfficientImage} alt="TimeEfficientImage" />
                  </div>
                </div>
                <div className="remote-option-details-alignment">
                  <h6>Time-Efficient</h6>
                  <p>
                    Avoid the travel, planning, and logistical challenges of onsite visits. With remote inspection, get real-time insights into
                    the manufacturing process from the comfort of your office or home.
                  </p>
                </div>
              </div>
              <div className="remote-inspection-child-grid-item">
                <div className="bordershadow">
                  <div className="remote-option-details-img">
                    <img src={CostEffectiveImage} alt="CostEffectiveImage" />
                  </div>
                </div>
                <div className="remote-option-details-alignment">
                  <h6>Cost-Effective</h6>
                  <p>
                    Save on travel expenses, accommodation, and other related costs. Remote inspection ensures your budget is spent on product
                    quality, not on overheads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="benefit-remote-inspection-details">
          <div className="benefit-remote-inspection-heading">
            <h6>Benefits of Remote Inspection</h6>
          </div>
          <div className="benefit-remote-inspection-all-details">
            <div className="benefit-remote-inspection-grid">
              <div className="benefit-remote-inspection-child-details">
                <div className="remote-inspection-child-details">
                  <img src={RIIcon7} alt="RIIcon7" />
                </div>
                <div>
                  <h6>Safety & Sustainability</h6>
                </div>
              </div>
              <div className="benefit-remote-inspection-child-details">
                <div className="remote-inspection-child-details">
                  <img src={RIIcon8} alt="RIIcon7" />
                </div>
                <div>
                  <h6>Flexibility</h6>
                </div>
              </div>
              <div className="benefit-remote-inspection-child-details">
                <div className="remote-inspection-child-details">
                  <img src={RIIcon9} alt="RIIcon7" />
                </div>
                <div>
                  <h6>Immediate Decision Making</h6>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
