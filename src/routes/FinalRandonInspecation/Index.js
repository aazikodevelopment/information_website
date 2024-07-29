import React from "react";
import ShipImage from "../../assets/Image/FIRShip.png";
import SamplingImage from "../../assets/Image/FIR1.png";
import CriteriaImage from "../../assets/Image/FIR2.png";
import IdentificationImage from "../../assets/Image/FIR3.png";
import PassFailImage from "../../assets/Image/FIR5.png";
import ReportingImage from "../../assets/Image/FIR6.png";
import DocumentationImage from "../../assets/Image/FIR4.png";

import './FinalRandonInspecation.scss'

export default function FinalRandonInspecation() {
    return (
        <div>
            <div className="container">
                <div className="TowGridAlign">
                    <div className="InfoBox">
                        <h2>Aaziko Final Random Inspection</h2>
                    </div>
                    <div className="ImageDiv">
                        <img src={ShipImage} alt="shipimage" />
                    </div>
                </div>
                <h4>Our Process</h4>
                <div className="BoxTowGri">
                    <div>
                        <img src={SamplingImage} alt="SamplingImage" />
                    </div>
                    <div className="MessageInfo">
                        <h3>Random Sampling</h3>
                        <div>a random sample of products is selected from the production lot. The randomness is important to get an unbiased representation of the entire batch.</div>
                    </div>
                </div>
                <div className="BoxTowGri">
                    <div>
                        <img src={CriteriaImage} alt="CriteriaImage" />
                    </div>
                    <div className="MessageInfo">
                        <h3>Quality Criteria</h3>
                        <div>The inspector or quality control team checks the selected samples against predetermined quality criteria, which could include product specifications, industry standards, and any specific requirements set by the client or purchaser.</div>
                    </div>
                </div>
                <div className="BoxTowGri">
                    <div>
                        <img src={IdentificationImage} alt="IdentificationImage" />
                    </div>
                    <div className="MessageInfo">
                        <h3>Defect Identification</h3>
                        <div>Inspectors look for defects, discrepancies, or deviations from the quality standards. This can include checking for visual defects, measurements, functionality, and more, depending on the nature of the product.</div>
                    </div>
                </div>
                <div className="BoxTowGri">
                    <div>
                        <img src={DocumentationImage} alt="DocumentationImage" />
                    </div>
                    <div className="MessageInfo">
                        <h3>Documentation</h3>
                        <div>Detailed records are often kept during the inspection process. These records can include photographs, measurements, checklists, and any other relevant information</div>
                    </div>
                </div>
                <div className="BoxTowGri">
                    <div>
                        <img src={PassFailImage} alt="PassFailImage" />
                    </div>
                    <div className="MessageInfo">
                        <h3>Pass/Fail Decision</h3>
                        <div>Based on the inspection results, a decision is made whether the batch of products passes or fails the inspection. If the products pass, they can proceed to packaging and distribution.</div>
                    </div>
                </div>
                <div className="BoxTowGri">
                    <div>
                        <img src={ReportingImage} alt="ReportingImage" />
                    </div>
                    <div className="MessageInfo">
                        <h3>Reporting</h3>
                        <div>A comprehensive inspection report is typically generated, summarizing the findings of the inspection. This report is often shared with the manufacturer and the client, enabling them to make informed decisions about the quality of the products and whether any corrective actions are needed.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
