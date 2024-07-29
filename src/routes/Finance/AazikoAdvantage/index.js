import React from 'react'
import "./AazikoAdvantage.scss";
import AazikoVector from "../../../assets/icons/aaziko-vector.svg";
import AazikoAdvantageImg from "../../../assets/Image/aaziko-advantage-1.png";
export default function AazikoAdvantage() {
    return (
        <div className="aaziko-advantage-section">
            <div className="aaziko-advantage-alignment">
                <div className="aaziko-advantage-img">
                    <img src={AazikoVector} alt="AazikoVector" />
                </div>

                <div className="container">
                    <div className="aaziko-advantage-details-content">
                        <h6>The Aaziko Advantage</h6>

                        <div className="aaziko-advantage-all-content-alignment">
                            <div className="aaziko-advantage-all-contentImg">
                                <img src={AazikoAdvantageImg} alt="AazikoAdvantageImg" />
                            </div>
                            <div className="aaziko-advantage-details-alignment">
                                <div className="aaziko-advantage-details-child-content-alignment">
                                    <h6>Collateral Free Working Capital</h6>
                                    <p>Fund your exports growth using just your trade receivables.</p>
                                </div>
                                <div className="aaziko-advantage-details-child-content-alignment">
                                    <h6>Credit Limit up to $2.5 Million</h6>
                                    <p>Get post-shipment credit line up to $2.5 million.</p>
                                </div>
                                <div className="aaziko-advantage-details-child-content-alignment">
                                    <h6>Competitive Pricing</h6>
                                    <p>Cost of financing can be as low as 0.7% per month basis credit evaluation.</p>
                                </div>
                                <div className="aaziko-advantage-details-child-content-alignment">
                                    <h6>Paperless, Swift, Hassle-Free</h6>
                                    <p>Use Portal by Drip for faster fulfilment and end-to-en d service - all in one place.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
