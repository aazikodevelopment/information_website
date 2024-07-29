import React, { useEffect } from "react";
import "./PreProducationInspecation.scss";
import WorkingImage from "../../assets/Image/PPI1.png";
import WeightImage from "../../assets/Image/PPI2.png";
import NotingImage from "../../assets/Image/PPI3.png";
import MachineryImage from "../../assets/Image/PPI4.png";
import WorkFlowImage from "../../assets/Image/PPI5.png";
import SampleTestingImage from "../../assets/Image/PPI6.png";
import GrowImage from "../../assets/Image/PPI7.png";
import ProductLearningImage from "../../assets/Image/PPI8.png";
import MeetingImage from "../../assets/Image/PPI9.png";


export default function PreProducationInspecation() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className="pre-producation-section">
            <div className="pre-producation-section-banner">
                <div className="container">
                    <div className="pre-producation-banner-grid">
                        <div className="pre-producation-title">
                            <h4>Aaziko Pre-Production Inspection Services:</h4>
                        </div>
                        <div className="pre-producation-img">
                            <img src={WorkingImage} alt="WorkingImage" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pre-producation-alignment">
                <h1 className="Product-Title">Why Aaziko's Pre-Production Inspection is Crucial?</h1>
                <div className="container">
                    <div className="Pre-Producation-TowGrid">
                        <div>
                            <div className="Pre-Producation-img">
                                <img src={WeightImage} alt="WeightImage" />
                            </div>
                            <div className="Pre-producation-message">
                            <h2>Raw Material Verification</h2>
                                <p> Ensuring the quality of a product begins with the authenticity and grade of raw materials. Our pre-production inspections ensure that all materials align with set specifications and standards.</p>
                            </div>
                        </div>
                        <div>
                            <div className="Pre-Producation-img">
                                <img src={NotingImage} alt="NotingImage" />
                            </div>
                            <div className="Pre-producation-message">
                                <h2>Production Readiness</h2>
                                <p> Review machinery, tools, and production setups to ensure they're calibrated correctly and are in optimal condition for the manufacturing process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pre-producation-alignment">
                <h1 className="Product-Title">What's Included in the Pre-Production Inspection?</h1>
                <div className="container">
                    <div className="Pre-Producation-TowGrid">
                        <div>
                            <div className="Pre-Producation-img">
                                <img src={WeightImage} alt="WeightImage" />
                            </div>
                            <div className="Pre-producation-message">
                            <h2>Raw Material Checks</h2>
                                <p> A deep dive into the quality, quantity, and storage conditions of the raw materials to ensure they meet the stipulated criteria.</p>
                            </div>
                        </div>
                        <div>
                            <div className="Pre-Producation-img">
                                <img src={MachineryImage} alt="MachineryImage" />
                            </div>
                            <div className="Pre-producation-message">
                                <h2>Machinery & Equipment Audit</h2>
                                <p> An evaluation of the machinery and tools set to be used in the production, ensuring they're in top working condition and meet safety and efficiency standards.</p>
                            </div>
                        </div>
                    </div>
                    <div className="Pre-Producation-TowGrid" style={{marginTop:32}}>
                        <div>
                            <div className="Pre-Producation-img">
                                <img src={WorkFlowImage} alt="WorkFlowImage" />
                            </div>
                            <div className="Pre-producation-message">
                            <h2>Workflow Analysis</h2>
                                <p> An inspection of the production processes, timelines, and workflow to ensure that everything is in place for smooth, efficient, and timely production.</p>
                            </div>
                        </div>
                        <div>
                            <div className="Pre-Producation-img">
                                <img src={SampleTestingImage} alt="SampleTestingImage" />
                            </div>
                            <div className="Pre-producation-message">
                                <h2>Sample Testing</h2>
                                <p> The initial samples are tested against the buyer's specifications, ensuring consistency and quality right from the start.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pre-producation-alignment-three">
                <h1 className="Product-Title">The Aaziko Advantage</h1>
                <div className="container">
                    <div className="Pre-Producation-ThreeGrid">
                        <div>
                            <div className="Pre-Producation-img">
                                <img src={GrowImage} alt="GrowImage" />
                            </div>
                            <div className="Pre-producation-message">
                            <h2>Risk Reduction</h2>
                            </div>
                        </div>
                        <div>
                            <div className="Pre-Producation-img">
                                <img src={ProductLearningImage} alt="ProductLearningImage" />
                            </div>
                            <div className="Pre-producation-message">
                                <h2>Transparency from the Start</h2>
                            </div>
                        </div>
                        <div>
                            <div className="Pre-Producation-img">
                                <img src={MeetingImage} alt="MeetingImage" />
                            </div>
                            <div className="Pre-producation-message">
                                <h2>Strengthened Supplier Relationships</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
