import React, { useEffect } from "react";
import "./AssuranceQuality.scss"
import MessageBox from "../../assets/imges/Quility8.png";
import RiskManagementImage from "../../assets/imges/Quility2.png";
import CertificationImage from "../../assets/imges/Quility1.png";
import DocumentationImage from "../../assets/imges/Quility4.png";
import CustomerFeedbackImage from "../../assets/imges/Quility3.png";
import ProcessImprovementImage from "../../assets/imges/Quility5.png";
import QualityControlImage from "../../assets/imges/Quility6.png";

export default function AssuranceQuility() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (

        <div>
            <div className="container">
                <div className="quility-section">
                    <div className="quility-banner">
                        <div className="bordercolor"></div>
                        <div className="quility-banner-grid">
                            <div className="quilitymessage-box">
                                <img src={MessageBox} alt="MessageBox" />
                                <div className="addtext-messagebox">
                                    <h3 className="Aazikp-quility-title">Aaziko <br /> Quality Assurance</h3>
                                </div>
                            </div>
                            <div className="on-site-banner-left-side-alignment">
                                <div className="bordercolorFlex">
                                    <span>Standards </span>
                                    <span>Planning</span>
                                    <span>Control</span>
                                </div>
                                <p>
                                    Welocme to the world of Aaziko Global Trade
                                    Import Export Company. Dive Into our quality
                                    assurance serive and let’s elevate your business
                                    together!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="traferentbg">
                <div className="container">
                <div className="quilityTowGridtrasferentbg">
                    <div className="BoxDesignbg">
                        <div>
                            <img src={QualityControlImage} alt="QualityControlImage" />
                        </div>
                        <div>
                        <h3>Quality Standards</h3>
                        Establishing clear and measurable quality standards or criteria that a product or service must meet. 
                        These standards are often based on industry best practices or customer expectations.
                        </div>
                    </div>
                    <div className="BoxDesignbg">
                        <div>
                            <img src={ProcessImprovementImage} alt="ProcessImprovementImage" />
                        </div>
                        <div>
                        <h3>Quality Planning</h3>
                        Creating a structured plan that outlines the processes, resources, and responsibilities necessary to meet quality standards.
                         This includes defining objectives, setting targets, and specifying procedures.
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="quilityTowGrid">
                    <div className="BoxDesign">
                        <div>
                            <img src={QualityControlImage} alt="QualityControlImage" />
                        </div>
                        <div>
                            Conducting inspections, tests, and checks at various stages of product development or service delivery to
                            identify and rectify defects or deviations from quality standards. Statistical techniques like Six Sigma can be used in this phase.
                            <h3>Quality Control</h3>
                        </div>
                    </div>
                    <div className="BoxDesign">
                        <div>
                            <img src={ProcessImprovementImage} alt="ProcessImprovementImage" />
                        </div>
                        <div>
                            Continuously reviewing and improving processes to enhance efficiency and quality.
                            Methods like Total Quality Management (TQM), Lean Six Sigma, and Continuous Improvement
                            (CI) are often employed to streamline operations and reduce errors.
                            <h3>Process Improvement</h3>
                        </div>
                    </div>
                </div>
                <div className="spaccingalign">
                    <div className="quilityTowgridbox">
                        <div>
                            <h3>Documentation</h3>
                            <span>
                                Maintaining comprehensive records of processes, quality standards, test results, and any corrective actions taken.
                                Documentation helps in traceability and accountability.
                            </span>
                        </div>
                        <div>
                            <img src={DocumentationImage} alt="DocumentationImage" />
                        </div>
                    </div>
                    <div className="quilityTowgridbox">
                        <div>
                            <h3>Customer Feedback</h3>
                            <span>
                                Gathering feedback from customers to understand their expectations and satisfaction levels.
                                This information can be used to drive improvements and make necessary adjustments.
                            </span>
                        </div>
                        <div>
                            <img src={CustomerFeedbackImage} alt="CustomerFeedbackImage" />
                        </div>
                    </div>
                </div>
                <div className="spaccingalign">
                    <div className="quilityTowgridboxReturn">
                        <div>
                            <img src={RiskManagementImage} alt="RiskManagementImage" />
                        </div>
                        <div>
                            <h3>Risk Management</h3>
                            <span>
                                Identifying potential risks that could affect product or service quality and developing mitigation strategies.
                            </span>
                        </div>
                    </div>
                    <div className="quilityTowgridboxReturn">
                        <div>
                            <img src={CertificationImage} alt="CertificationImage" />
                        </div>
                        <div>
                            <h3>Certification and Compliance</h3>
                            <span>
                                Ensuring that products or services meet industry-specific standards and regulations.
                                Obtaining certifications, if applicable, to demonstrate adherence to quality requirements.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="spaccingalign">
                    <div className="GetStartBox">
                        <h2>Get started</h2>
                        <div>Embark on an exciting journey of ultimate financial clarity and exceptional compliance with Aaziko. Let's turn your business vision into reality!</div>
                        <button>contact us </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
