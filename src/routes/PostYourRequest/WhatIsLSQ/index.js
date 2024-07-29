import React from 'react'
import "./WhatIsLSQ.scss";
import WIL1 from "../../../assets/Image/wil-1.png";
export default function WhatIsLSQ() {
    return (
        <div className="what-is-lsq-section">
            <div className="what-is-lsq-grid">
                <div className="what-is-lsq-grid-item">
                    <div className="what-is-lsq-ledt-details-alignment">
                        <h6>What is LSQ?</h6>
                        <p>Request for Quotation is a free and easy solution for buyers who are seeking quality quotes. By sending out a simple request, you will receive multiple quotes from qualified suppliers.</p>

                        <div className="lsq-number-details-alignmwnt">
                            <div>
                                <p>2,700,000</p>
                                <span>LSQs posted</span>
                            </div>
                            <div>
                                <p>160,000</p>
                                <span>Active suppliers</span>
                            </div>
                            <div>
                                <p>23h</p>
                                <span>Average response time</span>
                            </div>
                            <div>
                                <p>7580</p>
                                <span>Industries covered</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="what-is-lsq-grid-item">
                    <img src={WIL1} alt="WIL1" />
                </div>
            </div>
        </div>
    )
}
