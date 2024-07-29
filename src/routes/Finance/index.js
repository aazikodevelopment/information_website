import React, { useEffect } from 'react'
import "./Finance.scss";
import PaymentImg from "../../assets/Image/payment-img.png";
import AazikoAdvantage from './AazikoAdvantage';
import FastAccess from './FastAccess';
import AboutAazikoCapital from './AboutAazikoCapital';
import PostShipmentFinance from './PostShipmentFinance';
export default function Finance() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className="finance-section">
            <div className="finance-banner-details">
                <div className="container">
                    <div className="finance-banner-details-alignment">
                        <div className="finance-banner-left-details">
                            <h4>Never wait for buyer payments WITH AAZIKO.COM</h4>
                            <p>Aaziko’s Trade Finance offering is helping exporters grow their business 30% m-o-m. With our invoice factoring solution, SMEs receive 80% of their invoice value upfront at the click of a button.</p>
                            <div className="finance-button-alignment">
                                <button>apply now</button>
                            </div>
                        </div>
                        <div className="finance-banner-right-details">
                            <img src={PaymentImg} alt="PaymentImg" />
                        </div>
                    </div>

                </div>
            </div>
            <AazikoAdvantage />
            <FastAccess />
            <AboutAazikoCapital />
            <PostShipmentFinance />
        </div>
    )
}
