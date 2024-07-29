import React from 'react'
import "./APIContainerTracking.scss";
import APIContainerImg from "../../../assets/Image/api-container-tracking-img.png";
export default function APIContainerTracking() {
    return (
        <div className="api-container-tracking-section">
            <div className="api-container-tracking-grid">
                <div className="api-container-tracking-gridItem">
                    <div className="api-container-details-alignment">
                        <h5>API Container Tracking</h5>
                        <p>You can pass all container status events to your website using API which will organize and display the data by container number or B/L. This means greater visibility for your customers and fewer calls or emails to your service teams.</p>
                    </div>
                </div>
                <div className="api-container-tracking-gridItem">
                    <div className="api-container-box">
                        <img src={APIContainerImg} alt="APIContainerImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
