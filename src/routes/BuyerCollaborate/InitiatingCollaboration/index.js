import React from 'react'
import "./InitiatingCollaboration.scss";
import ICIMg from "../../../assets/Image/ici.png";
export default function InitiatingCollaboration() {
    return (
        <div className="initiating-collaboration-section">
            <div className="container">
                <div className="initiating-collaboration-header">
                    <h4>Initiating Collaboration</h4>
                    <p>We're eager to explore partnership opportunities that amplify our strengths and your agency's expertise.</p>
                </div>
                <div className="initiating-collaboration-img">
                    <img src={ICIMg} alt="ICIMg" />
                </div>
                <div className="initiating-collaboration-description">
                    <p>To initiate a collaboration conversation, reach out to our dedicated collaboration team at aaziko.com Kindly share insights into your agency's capabilities and the collaboration avenue you're interested in pursuing.</p>
                </div>
            </div>
        </div>
    )
}
