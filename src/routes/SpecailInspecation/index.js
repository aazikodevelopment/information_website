import React from "react";
import './SpecailInspecation.scss'
import SpecialServicesImage from "../../assets/Image/SpecailIn1.png";
import ProductQualityImage from "../../assets/Image/SpecailIn2.png";
import SupplierAuditsImage from "../../assets/Image/SpecailIn3.png";
import LabelingImage from "../../assets/Image/SpecailIn5.png";
import PackagingImage from "../../assets/Image/FIR3.png";

export default function SpecailInspecation() {
    return (
        <div>
            <div className="container">
                <div className="specailInspecatinGrid">
                    <div className="MessageGrid">
                        <h2>Special Inspection Services</h2>
                    </div>
                    <div className="ImageGrid">
                        <img src={SpecialServicesImage} alt="SpecialServicesImage" />
                    </div>
                </div>
                <div className="moredetailsGrid">
                    <div className="SpecailInBox">
                        <div>
                            <div className="shadowbox">
                                <img src={ProductQualityImage} alt="ProductQualityImage" />
                            </div>
                        </div>
                        <div className="infodetails">
                            <h2>Product Quality Inspection</h2>
                            <div className="message">Detailed examination of your products to verify quality, specifications, and compliance with industry standards and regulations.</div>
                        </div>
                    </div>
                    <div className="SpecailInBox">
                        <div>
                            <div className="shadowbox">
                                <img src={SupplierAuditsImage} alt="SupplierAuditsImage" />
                            </div>
                        </div>
                        <div className="infodetails">
                            <h2>Supplier Audits</h2>
                            <div className="message">Comprehensive assessments of your suppliers to ensure they meet your quality and compliance requirements.</div>
                        </div>
                    </div>
                    <div className="SpecailInBox">
                        <div>
                            <div className="shadowbox">
                                <img src={ProductQualityImage} alt="ProductQualityImage" />
                            </div>
                        </div>
                        <div className="infodetails">
                            <h2>Product Quality Inspection</h2>
                            <div className="message">Thorough inspections to ensure your products meet customs regulations and requirements.</div>
                        </div>
                    </div>
                    <div className="SpecailInBox">
                        <div>
                            <div className="shadowbox">
                                <img src={PackagingImage} alt="PackagingImage" />
                            </div>
                        </div>
                        <div className="infodetails">
                            <h2>Packaging Inspection</h2>
                            <div className="message">Evaluation of packaging materials to ensure they protect your products during transit and meet international shipping standards.</div>
                        </div>
                    </div>
                </div>
                <div className="specailonegrid">
                    <div className="SpecailInBox">
                        <div>
                            <div className="shadowbox">
                                <img src={LabelingImage} alt="LabelingImage" />
                            </div>
                        </div>
                        <div className="infodetails">
                            <h2>Labeling and Marking Inspection</h2>
                            <div className="message">Verification of product labeling and marking to comply with local and international labeling regulations.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="backgroundbox">
                <div className="container">
                    <div className="listinfo">
                            <h2>Why Choose for Special Inspection:</h2>
                            <ul>
                                <li>Experienced and qualified inspection professionals.</li>
                                <li>Timely and accurate inspection reports.</li>
                                <li>Customized inspection solutions tailored to your industry and product.</li>
                                <li>Global reach with inspection services available in key trading regions.</li>
                                <li>Transparent and competitive pricing.</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}