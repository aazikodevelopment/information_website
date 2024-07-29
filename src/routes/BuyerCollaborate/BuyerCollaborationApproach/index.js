import React from 'react'
import "./BuyerCollaborationApproach.scss";
import BAI1 from "../../../assets/Image/bai-1.png";
import BAI2 from "../../../assets/Image/bai-2.png";
import BAI3 from "../../../assets/Image/bai-3.png";
import BAI4 from "../../../assets/Image/bai-4.png";
import BAOI1 from "../../../assets/Image/ba0i-1.png";
import BAOI2 from "../../../assets/Image/ba0i-2.png";
import BAOI3 from "../../../assets/Image/ba0i-3.png";
import BAOI4 from "../../../assets/Image/ba0i-4.png";
import BAOI5 from "../../../assets/Image/ba0i-5.png";

export default function BuyerCollaborationApproach() {
    return (
        <div className="buyer-collaboration-approach-section">
            <div className="container">
                <div className="buyer-collaboration-approach-heading">
                    <h4> Buyer Collaboration Approach</h4>
                </div>
                <div className="buyer-collaboration-all-details-alignment">
                    <div className="buyer-collaboration-grid-alignment">
                        <div className="buyer-collaboration-gridItem">
                            <div className="img-logo-alignment">
                                <img src={BAI1} alt="BAI1" />
                            </div>
                            <p>Market Leadersh</p>
                        </div>
                        <div className="buyer-collaboration-gridItem">
                            <div className="img-logo-alignment">
                                <img src={BAI2} alt="BAI1" />
                            </div>
                            <p>Regional Expertise</p>
                        </div>
                        <div className="buyer-collaboration-gridItem">
                            <div className="img-logo-alignment">
                                <img src={BAI3} alt="BAI1" />
                            </div>
                            <p>Holistic Solutions</p>
                        </div>
                        <div className="buyer-collaboration-gridItem">
                            <div className="img-logo-alignment">
                                <img src={BAI4} alt="BAI1" />
                            </div>
                            <p>Network Amplification</p>
                        </div>
                    </div>
                </div>

                <div className="buyer-other-all-details-alignment">
                    <div className="buyer-other-details-grid-alignment">
                        <div className="buyer-other-details-grid-item-alignment">
                            <div>
                                <img src={BAOI1} alt="BAOI1" />
                            </div>
                        </div>
                        <div className="buyer-other-details-grid-item-alignment">
                            <h6>  Market Entry Strategy: </h6>

                            <p>   Agencies specializing in market entry strategies can collaborate with us to provide comprehensive plans for clients looking to enter the Indian import-export arena.</p>
                        </div>
                    </div>

                    <div className="buyer-other-details-grid-alignment second-styles">
                        <div className="buyer-other-details-grid-item-alignment">
                            <h6> Logistics Optimization:</h6>
                            <p>
                                If your agency excels in logistics and supply chain management, let's collaborate to streamline operations, reduce costs, and improve efficiency.</p>
                        </div>
                        <div className="buyer-other-details-grid-item-alignment">
                            <div>
                                <img src={BAOI2} alt="BAOI2" />
                            </div>
                        </div>
                    </div>

                    <div className="buyer-other-details-grid-alignment">
                        <div className="buyer-other-details-grid-item-alignment">
                            <div>
                                <img src={BAOI3} alt="BAOI3" />
                            </div>
                        </div>
                        <div className="buyer-other-details-grid-item-alignment">
                            <h6>  Customs and Compliance:</h6>
                            <p>
                                Collaborate with Aaziko India to navigate the complex realm of customs regulations, ensuring smooth import-export transactions for your clients.</p>

                        </div>
                    </div>

                    <div className="buyer-other-details-grid-alignment second-styles">
                        <div className="buyer-other-details-grid-item-alignment">
                            <h6>  Digital Innovation: </h6>

                            <p>  Agencies offering cutting-edge digital solutions, such as AI-driven platforms or e-commerce integration, can create transformative solutions in partnership with Aaziko India.</p>
                        </div>
                        <div className="buyer-other-details-grid-item-alignment">
                            <div>
                                <img src={BAOI4} alt="BAOI4" />
                            </div>
                        </div>

                    </div>

                    <div className="buyer-other-details-grid-alignment">
                        <div className="buyer-other-details-grid-item-alignment">
                            <div>
                                <img src={BAOI5} alt="BAOI5" />
                            </div>
                        </div>
                        <div className="buyer-other-details-grid-item-alignment">
                            <h6> Trade Finance Assistance:
                            </h6>
                            <p>
                                Collaborators specializing in trade finance and funding solutions can augment our services by helping clients secure the necessary financial resources.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
