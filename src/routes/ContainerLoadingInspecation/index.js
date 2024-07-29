import React from "react";
import './ContainerLoadingInspecation.scss'
import ClientsIcon from "../../assets/Image/CLI1.png";
import InspectionIcon from "../../assets/Image/CLI3.png";
import SupportIcon from "../../assets/Image/CLI2.png";
import ContainerImage3 from "../../assets/Image/CLIJOIN3.png";
import ContainerImage2 from "../../assets/Image/CLIJOIN2.png";
import ContainerImage1 from "../../assets/Image/CLIJOIN1.png";
import Packagingimage from "../../assets/Image/CIL5.png";
import Verificationimage from "../../assets/Image/CIL4.png";
import Photographicimage from "../../assets/Image/CIL10.png";
import Complianceimage from "../../assets/Image/CIL9.png";
import Documentationimage from "../../assets/Image/CIL8.png";
import Sealingimage from "../../assets/Image/CIL7.png";
import Distributionimage from "../../assets/Image/CIL11.png";
import Loadinplangimage from "../../assets/Image/CIL6.png";

export default function ContainerLoadingInspecation() {
    return (
        <div>
            <div className="container">
                <div className="ContainerGrid">
                    <div className="MessageGrid">
                        <h2>Container Loading Inspection</h2>
                        <div className="InfoMessageText">
                            Container Loading Inspection (CLI) is a quality control and inspection process commonly used in international trade and logistics.
                        </div>
                    </div>
                    <div className="ContainerImage">
                        <img src={ContainerImage1} className="IMAGE1" alt="ContainerImage1" />
                        <img src={ContainerImage2} className="IMAGE2" alt="ContainerImage2" />
                        <img src={ContainerImage3} className="IMAGE3" alt="ContainerImage3" />
                    </div>
                </div>
            </div>
            <div className="bgouterContainer">
                <div className="container">
                    <div className="informationDetails">
                        <h2>Our Inspection Process</h2>
                        <div>Our Comprehensive Inspection Process Ensure Your cargo stays in tip-top condition! Our 8-step-process
                            includes verification of goods,Packaging & labeling, creating a loading plan, Weight distribution,sealing,
                            documentation, compliance and photographic evidence.</div>
                    </div>
                    <div className="helplinedetailsalign">
                        <div>
                            <img src={ClientsIcon} alt="ClientsIcon" />
                            <h4>Happy Clients</h4>
                        </div>
                        <div>
                            <img src={SupportIcon} alt="SupportIcon" />
                            <h4>Support</h4>
                        </div>
                        <div>
                            <img src={InspectionIcon} alt="InspectionIcon" />
                            <h4>Inspection Done</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="ContainerTowGrid">
                    <div className="GridBoxContainer">
                        <div className="imagegrid">
                            <img src={Verificationimage} alt="Verificationimage" />
                        </div>
                        <div className="detailsinfo">
                            <h3>Verification of Goods</h3>
                            <div className="message">Inspectors check that the goods being loaded into the container match the details in the shipping documents, including quantity, type, and quality.</div>
                        </div>
                    </div>
                    <div className="GridBoxContainer">
                        <div className="imagegrid">
                            <img src={Packagingimage} alt="Packagingimage" />
                        </div>
                        <div className="detailsinfo">
                            <h3>Packaging and Labeling</h3>
                            <div className="message">The inspection includes checking the packaging of goods to ensure they are adequately protected for transit. Labels and markings should be accurate</div>
                        </div>
                    </div>
                </div>
                <div className="ContainerThreeGrid">
                    <div className="GridBoxContainer">
                        <div className="imagegrid">
                            <img src={Loadinplangimage} alt="Loadinplangimage" />
                        </div>
                        <div className="detailsinfo">
                            <h3>Loading Plan</h3>
                            <div className="message">Inspectors review the loading plan to ensure that the goods are loaded in a way that maximizes space utilization and minimizes the risk of damage during transportation.</div>
                        </div>
                    </div>
                    <div className="GridBoxContainer">
                        <div className="imagegrid">
                            <img src={Distributionimage} alt="Distributionimage" />
                        </div>
                        <div className="detailsinfo">
                            <h3>Weight Distribution</h3>
                            <div className="message">Proper weight distribution is essential for safe transportation. Inspectors ensure that heavy items are evenly distributed within the container to prevent imbalance.</div>
                        </div>
                    </div>
                    <div className="GridBoxContainer">
                        <div className="imagegrid">
                            <img src={Sealingimage} alt="Sealingimage" />
                        </div>
                        <div className="detailsinfo">
                            <h3>Sealing</h3>
                            <div className="message">The container should be sealed properly, and the seal number should be recorded for tracking and security purposes.</div>
                        </div>
                    </div>
                    <div className="GridBoxContainer">
                        <div className="imagegrid">
                            <img src={Documentationimage} alt="Documentationimage" />
                        </div>
                        <div className="detailsinfo">
                            <h3>Documentation</h3>
                            <div className="message">Inspectors review all relevant shipping documents, including the bill of lading, packing list, and commercial invoice, to ensure they are accurate and complete.</div>
                        </div>
                    </div>
                    <div className="GridBoxContainer">
                        <div className="imagegrid">
                            <img src={Complianceimage} alt="Complianceimage" />
                        </div>
                        <div className="detailsinfo">
                            <h3>Compliance</h3>
                            <div className="message">CLI also involves checking for compliance with relevant international shipping regulations and standards, such as those set by the International Maritime Organization (IMO) and local customs authorities.</div>
                        </div>
                    </div>
                    <div className="GridBoxContainer">
                        <div className="imagegrid">
                            <img src={Photographicimage} alt="Photographicimage" />
                        </div>
                        <div className="detailsinfo">
                            <h3>Photographic Evidence</h3>
                            <div className="message">Inspectors often take photographs or videos during the inspection process to document the condition of the cargo and the loading process.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bgouterContainer">
                <div className="container">
                    <div className="InformationContainer">
                        <h1>Why Choose Us?</h1>
                        <div className="InformationGrid">
                            <div>
                                <h4>Expert Inspectors</h4>
                                <div>Our team consists of experienced professionals.</div>
                            </div>
                            <div>
                                <h4>Real- time Reports</h4>
                                <div>Get instant updates on the loading status.</div>
                            </div>
                        </div>
                        <div className="InformationGrid">
                            <div>
                                <h4>Detailed Analysis</h4>
                                <div>We provide a thorough understanding of your consignment.</div>
                            </div>
                            <div>
                                <h4>Transparent Process</h4>
                                <div>Maintain visibility throughout the entire process.</div>
                            </div>
                        </div>
                        <div className="InformationGrid">
                            <div>
                                <h4>Custom Solutions</h4>
                                <div>Tailored services to fit your unique requirments.</div>
                            </div>
                            <div>
                                <h4>Global Coverage</h4>
                                <div>We oofer our services around the world.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}