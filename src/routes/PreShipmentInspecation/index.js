import React from "react";
import ShipImage from "../../assets/Image/PSI1.png";
import QualityImage from "../../assets/Image/PSI2.png";
import ComplianceImage from "../../assets/Image/PSI3.png";
import DocumentationImage from "../../assets/Image/PSI4.png";
import SamplingImage from "../../assets/Image/PSI5.png";
import MitigationImage from "../../assets/Image/PSI6.png";
import PaymentImage from "../../assets/Image/PSI7.png";
import CustomsImage from "../../assets/Image/PSI8.png";
import CostsImage from "../../assets/Image/PSI9.png";

import "./PreShipmentInspecation.scss"

export default function PreShipmentInspecation() {
    return (
        <div>
            <div className="container">
                <div className="TowGridAlign">
                    <div className="InfoBox">
                        <h2>Pre - Shipment Inspection Services:</h2>
                        <div>
                            Pre-shipment inspection (PSI), also known as a pre-shipment review or final inspection,
                            is a quality control process carried out by an independent inspection company or agency before goods
                            are shipped from the manufacturer or supplier to the buyer or importer.
                        </div>
                    </div>
                    <div className="ImageDiv">
                        <img src={ShipImage} alt="shipimage" />
                        <div className="CircleNo1"></div>
                        <div className="CircleNo2"></div>
                    </div>
                </div>
                <div className="NextTowGridAlign">
                    <div className="ImageDiv">
                        <img src={QualityImage} alt="QualityImage" />
                    </div>
                    <div className="InfoDetailsBox">
                        <h3>Quality Assurance</h3>
                        <div>PSI helps ensure that the goods being shipped are of the expected quality and meet the agreed-upon specifications. It can include checking for defects, verifying product quantities, and confirming that the packaging is appropriate.</div>
                    </div>
                </div>
                <div className="NextTowGridAlignReverce">
                    <div className="InfoDetailsBox">
                        <h3>Compliance</h3>
                        <div>The inspection ensures that the products comply with relevant regulations, standards, and legal requirements in the destination country.</div>
                    </div>
                    <div className="ImageDiv">
                        <img src={ComplianceImage} alt="ComplianceImage" />
                    </div>
                </div>
                <div className="NextTowGridAlign">
                    <div className="ImageDiv">
                        <img src={DocumentationImage} alt="DocumentationImage" />
                    </div>
                    <div className="InfoDetailsBox">
                        <h3>Documentation</h3>
                        <div> Inspectors often review documents such as invoices, packing lists, and certificates of origin to ensure accuracy and consistency with the shipment.</div>
                    </div>
                </div>
                <div className="NextTowGridAlignReverce">
                    <div className="InfoDetailsBox">
                        <h3>Sampling</h3>
                        <div> In many cases, inspectors will take random samples from the shipment to check for quality and conformity. The sampling process should be statistically sound to provide a representative assessment of the entire shipment.</div>
                    </div>
                    <div className="ImageDiv">
                        <img src={SamplingImage} alt="SamplingImage" />
                    </div>
                </div>
                <div className="NextTowGridAlign">
                    <div className="ImageDiv">
                        <img src={MitigationImage} alt="MitigationImage" />
                    </div>
                    <div className="InfoDetailsBox">
                        <h3>Risk Mitigation</h3>
                        <div>PSI helps reduce the risk of receiving substandard or defective goods, which can lead to costly delays, rejections, or disputes.</div>
                    </div>
                </div>
                <div className="NextTowGridAlignReverce">
                    <div className="InfoDetailsBox">
                        <h3>Payment and Delivery</h3>
                        <div>In some cases, the buyer may make payment to the seller or initiate the shipment only after receiving a satisfactory PSI report.</div>
                    </div>
                    <div className="ImageDiv">
                        <img src={PaymentImage} alt="PaymentImage" />
                    </div>
                </div>
                <div className="NextTowGridAlign">
                    <div className="ImageDiv">
                        <img src={CustomsImage} alt="CustomsImage" />
                    </div>
                    <div className="InfoDetailsBox">
                        <h3>Customs Clearance</h3>
                        <div> A positive PSI report can expedite customs clearance at the destination, as it demonstrates that the goods meet the required standards.</div>
                    </div>
                </div>
                <div className="NextTowGridAlignReverce">
                    <div className="InfoDetailsBox">
                        <h3>Costs</h3>
                        <div>The cost of a PSI is typically borne by the buyer, although it can also be negotiated between the buyer and the seller as part of the trade agreement.</div>
                    </div>
                    <div className="ImageDiv">
                        <img src={CostsImage} alt="CostsImage" />
                    </div>
                </div>
            </div>
        </div>
    )
}