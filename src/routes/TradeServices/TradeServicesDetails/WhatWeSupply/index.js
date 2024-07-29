import React from 'react'
import "./WhatWeSupply.scss";
import PPE1Img from "../../../../assets/Image/ppe1.png";
import MCI1 from "../../../../assets/Image/mci1.png";
import MDI1 from "../../../../assets/Image/mdi1.png";
import DISIC1 from "../../../../assets/Image/disic1.png";
export default function WhatWeSupply() {
    return (
        <div className="what-we-supply-section">
            <div className="what-we-supply-details">
                <h4>What We Supply</h4>

                <div className="what-we-supply-child-details">
                    <div className="what-we-supply-child-grid">
                        <div className="what-we-supply-child-gridItem">
                            <div className="what-we-supply-child-box">
                                <div className="what-we-box-heading">
                                    <p>Personal Protective Equipment</p>
                                </div>
                                <div className="what-we-box-other-details">
                                    <div>
                                        <a>View more</a>
                                    </div>
                                    <div>
                                        <img src={PPE1Img} alt="PPE1Img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="what-we-supply-child-gridItem">
                            <div className="what-we-supply-child-box">
                                <div className="what-we-box-heading">
                                    <p>Medical
                                        <br />
                                        consumables</p>
                                </div>
                                <div className="what-we-box-other-details">
                                    <div>
                                        <a>View more</a>
                                    </div>
                                    <div>
                                        <img src={MCI1} alt="MCI1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="what-we-supply-child-gridItem">
                            <div className="what-we-supply-child-box">
                                <div className="what-we-box-heading">
                                    <p>Medical   <br />
                                        devices</p>
                                </div>
                                <div className="what-we-box-other-details">
                                    <div>
                                        <a>View more</a>
                                    </div>
                                    <div>
                                        <img src={MDI1} alt="MDI1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="what-we-supply-child-gridItem">
                            <div className="what-we-supply-child-box">
                                <div className="what-we-box-heading">
                                    <p>Disinfectants</p>
                                </div>
                                <div className="what-we-box-other-details">
                                    <div>
                                        <a>View more</a>
                                    </div>
                                    <div>
                                        <img src={DISIC1} alt="DISIC1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
