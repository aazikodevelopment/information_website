import React from 'react'
import "./WhatWeAre.scss";
import DemoVideImg from "../../../../assets/Image/demo-video-img.png";
import PSIIcon from "../../../../assets/icons/ps1.svg";
import EPSI1Icon from "../../../../assets/icons/epsi1.svg";
import ES1Icon from "../../../../assets/icons/es1.svg";
import RCQI1Icon from "../../../../assets/icons/rqci1.svg";
import RSCI1Icon from "../../../../assets/icons/rsci1.svg";
import TCIIcon from "../../../../assets/icons/tci1.svg";
export default function WhatWeAre() {
    return (
        <div className="what-we-are-section">
            <div className="what-we-are-heading-alignment">
                <h4>What We Are</h4>
            </div>
            <div className="what-we-are-details">
                <div className="what-we-are-details-box-alignment">
                    <div className="what-we-are-details-heading">
                        <h5>We ensure safety,
                            Reliability and Efficiency
                            to fulfill your critical
                            wholesale needs.</h5>
                        <p>Remember, these are general recommendations, and it's important to tailor them to your specific needs and goals. Continuously monitor and analyze user engagement to refine your website further.</p>
                    </div>
                    <div>
                        <img src={DemoVideImg} alt="DemoVideImg" />
                    </div>
                </div>
            </div>

            <div className="what-we-are-heading-alignment">
                <h4>What We Are</h4>
            </div>

            <div className="what-we-are-details-box-alignment">
                <div className="what-we-are-details-grid">
                    <div className="what-we-are-details-gridItem">
                        <div className="what-we-are-details-child-box">
                            <div>
                                <img src={PSIIcon} alt="PSIIcon" />
                            </div>
                            <h5>Professional Services</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                    </div>
                    <div className="what-we-are-details-gridItem">
                        <div className="what-we-are-details-child-box">
                            <div>
                                <img src={EPSI1Icon} alt="EPSI1Icon" />
                            </div>
                            <h5>Extensive product Selectiom</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                        </div>
                    </div>
                    <div className="what-we-are-details-gridItem">
                        <div className="what-we-are-details-child-box">
                            <div>
                                <img src={ES1Icon} alt="ES1Icon" />
                            </div>
                            <h5>Effcient Sourcing</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                        </div>
                    </div>
                    <div className="what-we-are-details-gridItem">
                        <div className="what-we-are-details-child-box">
                            <div>
                                <img src={RCQI1Icon} alt="RCQI1Icon" />
                            </div>
                            <h5>Rigorous Quality Control</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                        </div>
                    </div>
                    <div className="what-we-are-details-gridItem">
                        <div className="what-we-are-details-child-box">
                            <div>
                                <img src={RSCI1Icon} alt="RSCI1Icon" />
                            </div>
                            <h5>Reliable Supply Chain</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                        </div>
                    </div>
                    <div className="what-we-are-details-gridItem">
                        <div className="what-we-are-details-child-box">
                            <div>
                                <img src={TCIIcon} alt="TCIIcon" />
                            </div>
                            <h5>Trade Compliance</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                        </div>
                    </div>


                </div>
            </div>
            <div className="what-we-are-main-box-alignment">
                
            </div>
        </div>
    )
}
