import React from 'react'
import "./ConnectWithUs.scss";
export default function ConnectWithUs() {
    return (
        <div className="connect-with-us-section">
            <h6>Connect With Us</h6>
            <div className="connect-with-us-details-alignment">
                <div className="connect-with-child-details">
                    <h6>Register With <span>Aaziko</span></h6>
                    <a href='https://vendors.aaziko.com/' target='_blank'>
                        <div className="connect-with-us-button">
                            <button>Create Account</button>
                        </div>
                    </a>
                </div>
                <div className="connect-with-child-details">
                    <h6>Our Current <span>Requirement</span></h6>
                    <div className="connect-with-us-button">
                        <a href='https://vendors.aaziko.com/lsq' target='_blank'>
                            <button className='lsq-button '>LSQ Market</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
