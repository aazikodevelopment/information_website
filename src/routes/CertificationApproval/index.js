import React from "react";
import './CertificationApproval.scss'
import CertificationImage from "../../assets/Image/CAP1.png";
import UnderstandingImage from "../../assets/Image/CAP2.png";
import DocumentationReviewImage from "../../assets/Image/CAP3.png";
import LaboratoryImage from "../../assets/Image/CAP5.png";
import DetailedImage from "../../assets/Image/CAP6.png";
import OnsiteImage from "../../assets/Image/CAP4.png";
import ContinuousImage from "../../assets/Image/CAP8.png";
import CertificationcardImage from "../../assets/Image/CAP7.png";

export default function CertificationApproval() {
    return (
        <div>
            <div className="container">
                <div className="certificationGrid">
                    <div className="MessageGrid">
                        <h2>Certification and Approval</h2>
                    </div>
                    <div className="ImageGrid">
                        <img src={CertificationImage} alt="CertificationImage" />
                    </div>
                </div>
                <div className="certificationGridthreeGrid">
                    <div className="SpecailInBox">
                        <div>
                            <div className="shadowbox">
                                <img src={UnderstandingImage} alt="UnderstandingImage" />
                            </div>
                        </div>
                        <div className="infodetails">
                            <h2>Understanding Your Needs</h2>
                            <div className="message">Begin with a detailed consultation where we grasp your product specifics, target markets, and certification aspirations.</div>
                        </div>
                    </div>
                    <div className="SpecailInBox">
                        <div>
                            <div className="shadowbox">
                                <img src={DocumentationReviewImage} alt="DocumentationReviewImage" />
                            </div>
                        </div>
                        <div className="infodetails">
                            <h2>Documentation Review</h2>
                            <div className="message">Our seasoned experts delve into your product documentation, aligning it with international and market-specific standards.</div>
                        </div>
                    </div>
                    <div className="SpecailInBox">
                        <div>
                            <div className="shadowbox">
                                <img src={OnsiteImage} alt="OnsiteImage" />
                            </div>
                        </div>
                        <div className="infodetails">
                            <h2> On-site Inspection</h2>
                            <div className="message">Experience our rigorous on-site inspection, where every facet of your production process is scrutinized for excellence and compliance.</div>
                        </div>
                    </div>
                    <div className="SpecailInBox">
                        <div>
                            <div className="shadowbox">
                                <img src={LaboratoryImage} alt="LaboratoryImage" />
                            </div>
                        </div>
                        <div className="infodetails">
                            <h2>Sampling & Laboratory</h2>
                            <div className="message">We collaborate with accredited laboratories, ensuring that your product undergoes stringent tests, reflecting its true quality and safety.</div>
                        </div>
                    </div>
                    <div className="SpecailInBox">
                        <div>
                            <div className="shadowbox">
                                <img src={DetailedImage} alt="DetailedImage" />
                            </div>
                        </div>
                        <div className="infodetails">
                            <h2>Detailed Reporting</h2>
                            <div className="message">Post-inspection, we furnish a comprehensive report, highlighting our findings and offering insights for potential enhancements.</div>
                        </div>
                    </div>
                    <div className="SpecailInBox">
                        <div>
                            <div className="shadowbox">
                                <img src={CertificationcardImage} alt="CertificationcardImage" />
                            </div>
                        </div>
                        <div className="infodetails">
                            <h2>Certification</h2>
                            <div className="message">With our findings, we guide you towards the most relevant and esteemed certifications, amplifying your product's global appeal.</div>
                        </div>
                    </div>
                </div>
                <div className="certificationonegrid">
                    <div className="SpecailInBox">
                        <div>
                            <div className="shadowbox">
                                <img src={ContinuousImage} alt="ContinuousImage" />
                            </div>
                        </div>
                        <div className="infodetails">
                            <h2>Continuous Support</h2>
                            <div className="message">Our commitment doesn't end with a report. We offer continuous support, ensuring your product remains compliant and market-ready at all times.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="backgroundbox">
                <div className="container">
                    <div className="listinfo">
                        <h2>Why Aaziko's Certification Inspection</h2>
                        <div className="informationaligngrid">
                            <div className="informationdetils">
                                <h3>Global Acumen</h3>
                                <div>With our fingers on the pulse of global trade, we bring insights from various markets, ensuring your product is universally compliant.</div>
                            </div>
                            <div className="informationdetils">
                                <h3>Expertise at Work</h3>
                                <div>Our team, a blend of industry veterans and innovative minds, ensures that your product stands tall in any market.</div>
                            </div>
                            <div className="informationdetils">
                                <h3>Precision & Speed</h3>
                                <div>We value your ambitions. Our processes, while thorough, are designed for swift conclusions, propelling your market entry.</div>
                            </div>
                            <div className="informationdetils">
                                <h3>Partnership Approach</h3>
                                <div>We view our clients as partners. With Aaziko, you're not just getting an inspection service; you're gaining a global trade ally.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}