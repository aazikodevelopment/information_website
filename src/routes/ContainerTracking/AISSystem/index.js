import React from 'react'
import "./AISSystem.scss";
import AISSystemImg from "../../../assets/Image/anthena-img.png";
export default function AISSystem() {
    return (
        <div className="ais-system-section">
            <div className="ais-system-grid-alignment">
                <div className="ais-system-gridItem-alignment">
                    <img src={AISSystemImg} alt="AISSystemImg" />
                </div>
                <div className="ais-system-gridItem-alignment">
                    <div className="ais-system-details-alignment">
                        <h6>AIS system</h6>
                        <p>SeaRates Tracking transfers data from the Automatic Identification System (AIS), used on ships and vessel traffic services (VTS), to identify and locate objects through digital data exchange with other AIS stations nearby (ships, satellites, bases). AIS allows us to determine the exact berthing time and significantly increases data accuracy obtained from shipping lines.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
