import React from 'react'
import "./PostShipmentFinance.scss";
import InNewsImg from "../../../assets/Image/in-news-img.png";
export default function PostShipmentFinance() {
    return (
        <div className="post-shipment-finance-section">
            <div className="container">
                <div className="post-shipment-details-alignment">
                    <div className="post-shipment-details-heading">
                        <h5>Apply now to avail post-shipment finance by
                            factoring your export invoices.</h5>
                    </div>
                    <div className="apply-button-alignment">
                        <button>Apply Now</button>
                    </div>

                    <div className="in-the-news-section">
                        <h4>In the news</h4>

                        <div className="in-the-news-details-alignment">
                            <div className="in-the-new-details-relative">
                                <img src={InNewsImg} alt="InNewsImg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
