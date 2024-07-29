import React from 'react'
import "./FastAccess.scss";
import FastAccessImg from "../../../assets/Image/fast-access-img-1.png";
import AazikoVector from "../../../assets/icons/aaziko-vector-2.svg";
export default function FastAccess() {
    return (
        <div className="fast-access-section">
            <div className="fast-access-alignment">
                <div className="fast-access-advantage-img">
                    <img src={AazikoVector} alt="AazikoVector" />
                </div>
                <div className="container">
                    <div className="fast-access-details-alignment">
                        <div className="fast-access-heading-alignment">
                            <h4>Fast Access to Cash without Collateral</h4>
                        </div>

                        <div className="fast-access-all-details-alignment">
                            <div className="fast-access-all-details-grid">
                                <div className="fast-access-all-details-gridItem">
                                    <div className="fast-access-child-details">
                                        <h6>Apply Online</h6>
                                        <p>Apply online to start the application process with our team</p>
                                    </div>
                                    <div className="fast-access-child-details">
                                        <h6>Aaziko Assessment</h6>
                                        <p>Get the offer letter after submitting your business details</p>
                                    </div>
                                    <div className="fast-access-child-details">
                                        <h6>Submit Invoice</h6>
                                        <p>Upload your outstanding invoices on Drip Portal</p>
                                    </div>
                                    <div className="fast-access-child-details">
                                        <h6>Receive Funds</h6>
                                        <p>Get funded within 24 hours</p>
                                    </div>
                                </div>

                                <div className="fast-access-all-details-gridItem">
                                    <img src={FastAccessImg} alt="FastAccessImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
