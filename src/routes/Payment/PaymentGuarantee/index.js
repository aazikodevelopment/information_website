import React from 'react'
import "./PaymentGuarantee.scss";
import Angle from "../../../assets/Image/p-angle.svg";
import PIMG1 from "../../../assets/Image/payment-img-1.png";
import PIMG2 from "../../../assets/Image/payment-img-2.png";
export default function PaymentGuarantee() {
    return (
        <div className="payment-guarantee-section">
            <div className="container">
                <div className="payment-heading-alignment">
                    <h4>Aaziko payment Guarantee</h4>
                </div>
                <div className="payment-guarantee-details-alignment">
                    <div className="payment-guarantee-details-flex">
                        <div className="payment-guarantee-details-child-details">
                            <div className="payment-guarantee-details-box">
                                <img src={PIMG1} alt="PIMG1" />
                            </div>
                            <div className="payment-guarantee-box-detais">
                                <h6>Buyer Payment</h6>
                                <p>We guarantee payment of goods in quality bulk and packing.
                                </p>
                            </div>
                        </div>
                        <div className="mobile-view-hide">
                            <img src={Angle} alt="Angle" />
                        </div>
                        <div className="payment-guarantee-details-child-details">
                            <div className="payment-guarantee-details-box">
                                <img src={PIMG2} alt="PIMG2" />
                            </div>
                            <div className="payment-guarantee-box-detais">
                                <h6>Supplier Payment</h6>
                                <p>We guarantee payment of money without any deduction charges.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
