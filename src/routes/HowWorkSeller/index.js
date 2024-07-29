import React, { useEffect } from 'react'
import "./HowWorkSeller.scss";
import WIFIImg from "../../assets/Image/WiFi_icon.svg";
import EveryThinkDoneBYAaziko from './EveryThinkDoneBYAaziko';
import ConnectWithUs from './ConnectWithUs';
export default function HowWorkSeller() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className="how-we-work-for-seller-section">
            <div className="container">

                <div className="how-we-work-seller-heading">
                    <h4>How We Work For <span>Seller</span></h4>
                </div>

                <div className="how-we-work-seller-details-alignment">
                    <div className="how-we-work-seller-img">
                        <img src={WIFIImg} alt="WIFIImg" />
                    </div>
                    <div className="how-to-work-description">
                        <h6>Update Products & Company</h6>
                        <p>Sellers have to update  company and products details on one of the fastest growing platform Aaziko.</p>
                    </div>
                </div>

                <EveryThinkDoneBYAaziko />
                <ConnectWithUs />
            </div>
        </div>
    )
}
