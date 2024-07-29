import React from 'react'
import "./CustomsDetails.scss";
import Image1 from "../../../assets/Image/kdi6.png"
import Image2 from "../../../assets/Image/kdi7.png"
export default function CustomsDetails() {
    return (
        <div className="custom-details-section">
            <div className="custom-details-alignment">
                <div className="custom-details-flex">
                    <div className="customs-details-box-alignment">
                        <img src={Image1} alt="Image1" />
                    </div>
                    <div className="customs-details-box-details-alignment">
                        <h6>Calculating Duties and Taxes</h6>
                        <p>To calculate duties and taxes when importing goods, follow these steps: Determine the product's HS code, declare its value accurately, find the applicable duty rates based on the code and origin, calculate duties by multiplying value and rate, account for extra fees, and sum up all costs. Consult your country's customs authority and consider professional assistance for accuracy.</p>
                    </div>

                </div>
                <div className="custom-details-flex">

                    <div className="customs-details-box-details-alignment">
                        <h6>Customs Penalties, Rejection <br />
                            of Goods and Losses on Import-Export.</h6>
                        <p>Exploring the adverse consequences that arise when import-export processes fail to align with customs requirements. This overview covers the financial implications of customs penalties, the impact of goods rejection and potential losses due to damaged goods.</p>
                    </div>
                    <div className="customs-details-box-alignment">
                        <img src={Image2} alt="Image2" />
                    </div>
                </div>
            </div>
        </div >
    )
}
