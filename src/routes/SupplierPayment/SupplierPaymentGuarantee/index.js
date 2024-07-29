import React from 'react'
import "./SupplierPaymentGuarantee.scss";
import Angle from "../../../assets/Image/p-angle.svg";
import PIMG1 from "../../../assets/Image/payment-img-1.png";
import PIMG2 from "../../../assets/Image/payment-img-2.png";
export default function SupplierPaymentGuarantee() {
    return (
        <div className="supplier-payment-guarantee-section">
            <div className="container">
                <div className="supplier-payment-heading-alignment">
                    <h4>Aaziko payment Guarantee</h4>
                </div>
                <div className="supplier-payment-guarantee-details-alignment">
                    <div className="supplier-payment-guarantee-details-flex">

                        <div className="supplier-payment-guarantee-details-child-details">
                            <div className="supplier-payment-guarantee-details-box">
                                <img src={PIMG2} alt="PIMG2" />
                            </div>
                            <div className="supplier-payment-guarantee-box-detais">
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
