import React from 'react'
import "./OneTrakingSystem.scss";
import OneSystemImg from "../../../assets/Image/one-system-img.png";
export default function OneTrakingSystem() {
    return (
        <div className="one-traking-system-section">
            <div className="one-traking-system-grid-alignment">
                <div className="one-traking-system-gridItem-alignment">
                    <div className="one-traking-system-box">
                        <img src={OneSystemImg} alt="OneSystemImg" />
                    </div>
                </div>
                <div className="one-traking-system-gridItem-alignment">
                    <div className="one-traking-system-detaild-alignment">

                        <h5>One tracking system to manage all shipments</h5>
                        <p>Container Tracking system allows you to determine current position of containers on the World Map. The application calculates storage time in ports of transhipment. To find a container on the Map just enter the number and the shipping line.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
