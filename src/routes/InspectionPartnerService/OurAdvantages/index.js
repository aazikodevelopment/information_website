import React from "react";
import "./OurAdvantages.scss";
import OA1 from "../../../assets/Image/oa-1.png";
import OA2 from "../../../assets/Image/oa-2.png";
import OA3 from "../../../assets/Image/oa-3.png";
import OA4 from "../../../assets/Image/oa-4.png";
import ON1 from "../../../assets/Image/on-1.png";
import ON2 from "../../../assets/Image/on-2.png";
import ON3 from "../../../assets/Image/on-3.png";
import ON4 from "../../../assets/Image/on-4.png";
export default function OurAdvantages() {
    return (
        <div className="our-advantag-section">
            <div className="container">
                <div className="our-advantag-heading">
                    <h5>Our advantages</h5>
                </div>
                <div className="our-advantag-details-alignment">
                    <div className="our-advantag-grid">
                        <div className="our-advantag-grid-item">
                            <img src={OA1} alt="OA1" />
                        </div>
                        <div className="our-advantag-grid-item">
                            <div className="our-advantag-all-child-details">
                                <img src={ON1} alt="ON1" />
                                <h6>Extensive Inspection Business:</h6>
                                <p>By registering with Aaziko, you gain exposure to a vast pool of businesses seeking reliable inspection services for their export goods. Our platform connects you directly with potential clients, increasing your chances of securing more inspection projects.</p>
                            </div>
                        </div>
                    </div>
                    <div className="our-advantag-grid">
                        <div className="our-advantag-grid-item">
                            <div className="our-advantag-all-child-details">
                                <img src={ON2} alt="ON2" />
                                <h6>Streamlined Workflow:</h6>
                                <p>Our cutting-edge technology streamlines the entire inspection process, making it efficient and hassle-free. From scheduling inspections to generating reports, our platform simplifies each step, enabling you to focus on delivering high-quality services to your clients</p>
                            </div>
                        </div>
                        <div className="our-advantag-grid-item">
                            <img src={OA2} alt="OA1" />
                        </div>
                    </div>
                    <div className="our-advantag-grid">
                        <div className="our-advantag-grid-item">
                            <img src={OA3} alt="OA1" />

                        </div>
                        <div className="our-advantag-grid-item">
                            <div className="our-advantag-all-child-details">
                                <img src={ON3} alt="ON3" />
                                <h6>Global Reach: </h6>
                                <p>Aaziko has a wide network of clients spanning across various industries and geographical locations. By partnering with us, you open doors to international opportunities, allowing you to broaden your customer base and establish a strong presence in the global market.</p>
                            </div>
                        </div>
                    </div>

                    <div className="our-advantag-grid">
                        <div className="our-advantag-grid-item">
                            <div className="our-advantag-all-child-details">
                                <img src={ON4} alt="ON4" />
                                <h6>Quality Assurance:</h6>
                                <p> We prioritize quality and compliance, ensuring that all inspection companies registered with Aaziko meet our stringent standards. Our rigorous screening process guarantees that only reputable and reliable companies are part of our network, giving clients peace of mind and fostering trust in our services.</p>
                            </div>
                        </div>
                        <div className="our-advantag-grid-item">
                            <img src={OA4} alt="OA4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
