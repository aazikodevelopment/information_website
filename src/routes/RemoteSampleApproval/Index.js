


import React from "react";
import './RemoteSampleApproval.scss'
import Remote11 from "../../assets/Image/Remote11.png";
import Romote2 from "../../assets/Image/Remote2.png";
import Romote10 from "../../assets/Image/Remote10.png";
import Romote9 from "../../assets/Image/Remote9.png";
import Romote8 from "../../assets/Image/Remote8.png";
import Romote7 from "../../assets/Image/Remote7.png";
import Romote6 from "../../assets/Image/Remote6.png";
import Romote5 from "../../assets/Image/Remote5.png";
import Romote4 from "../../assets/Image/Remote4.png";
import Romote3 from "../../assets/Image/Remote3.png";
import Romote1 from "../../assets/Image/Remote1.png";

export default function RemoteSampleApproval(){
    return(
        <div className="container">
            <div className="RemoteGrid">
                <div className="MessageGrid">
                    <h2>Remote Sample Approval</h2>
                    <div className="InfoMessageText">
                        Remote sample approval is a method used in various industries to review and approve product
                        samples without the need for physical presence.
                    </div>
                </div>
                <div className="ImageGrid">
                    <img src={Remote11} className="ImageGridRemote11" alt=""/>
                </div>
            </div>
            <div className="RemoteThreeGrid">
                <div className="GridBox">
                    <img src={Romote10} alt="Romote10" className="AllImageManage"/>
                    <h3>Sample Submission</h3>
                    <div>The supplier or manufacturer sends a sample of the product to the customer or a designated party for review.</div>
                </div>
                <div className="GridBox">
                    <img src={Romote9} alt="Remote9" className="AllImageManage"/>
                    <h3>Documentation</h3>
                    <div>Documentation is a vital aspect of various processes and activities within organizations, providing a structured way to record, communicate, and manage information.</div>
                </div>
                <div className="GridBox">
                    <img src={Romote8} alt="Romote8" className="AllImageManage"/>
                    <h3>Virtual Review</h3>
                    <div>The customer or the relevant stakeholders conduct a virtual review of the sample and associated documentation.</div>
                </div>
                <div className="GridBox">
                    <img src={Romote7} alt="Remote7" className="AllImageManage"/>
                    <h3>Quality Assessment</h3>
                    <div>During the virtual review, the customer assesses the quality, functionality, and compliance of the sample with the agreed-upon standards and specifications.</div>
                </div>
                <div className="GridBox">
                    <img src={Romote6} alt="Romote6" className="AllImageManage"/>
                    <h3>Communication</h3>
                    <div>Effective communication between the customer and the supplier is crucial during this process. They may need to clarify requirements, address concerns, and negotiate changes or improvements to the sample.</div>
                </div>
                <div className="GridBox">
                    <img src={Romote5} alt="Romote5" className="AllImageManage"/>
                    <h3>Approval or Rejection</h3>
                    <div>Based on the review and discussions, a decision is made to either approve the sample for production or request modifications and resubmission.</div>
                </div>
                <div className="GridBox">
                    <img src={Romote4} alt="Remote4" className="AllImageManage"/>
                    <h3>Testing and Verification</h3>
                    <div>In some cases, the approved sample may undergo further testing or verification by third-party laboratories or quality control teams to ensure it meets safety and regulatory standards.</div>
                </div>
                <div className="GridBox">
                    <img src={Romote3} alt="Remote3" className="AllImageManage"/>
                    <h3>Continuous Monitoring</h3>
                    <div>Even after approval, there may be ongoing monitoring and quality checks to ensure that the products consistently meet the approved standards.</div>
                </div>
                <div className="GridBox">
                    <img src={Romote2} alt="Remote2" className="AllImageManage"/>
                    <h3>Shipping and Delivery</h3>
                    <div>The finished products are shipped to the customer's location or distribution center according to the agreed-upon terms and timelines.</div>
                </div>
            </div>
            <div className="RemoteOneGrid">
                <div className="GridBoxFull">
                    <img src={Romote1} alt="Remote1" className="AllImageManage"/>
                    <h3>Production</h3>
                    <div>Once the sample is approved, the supplier proceeds with mass production of the goods, ensuring that <br/> each product matches the approved sample's specifications.</div>
                </div>
            </div>
        </div>
    )
}