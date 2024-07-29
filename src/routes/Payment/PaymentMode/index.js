import React from 'react'
import "./PaymentMode.scss";
import Step1 from "../../../assets/Image/pstep1.png";
import Step2 from "../../../assets/Image/pstep2.png";
import Img1 from "../../../assets/Image/pmi1.png";
import Img2 from "../../../assets/Image/pmi2.png";
import Img3 from "../../../assets/Image/pmi4.png";

export default function PaymentMode() {
    return (
        <div className="payment-mode-section">
            <div className="container">
                <div className="payment-mode-step-details">
                    <div className="payment-mode-heading-alignment">
                        <img src={Step1} alt="Step1" />
                        <h4>Payment Mode</h4>
                    </div>

                    <div className="payment-steps-all-details-alignment">
                        <div className="payment-step-details-flex-alignment">
                            <div className="payment-step-box-alignment">
                                <img src={Img1} alt="Img1" />
                            </div>
                            <p>Buyer will pay 30% advance payment for after  order confirmation.</p>
                        </div>

                        <div className="payment-step-details-flex-alignment right-side">
                            <p>The remaining 70% of the payment will pay after inspection report and before goods  dispatch. </p>
                            <div className="payment-step-box-alignment">
                                <img src={Img2} alt="Img2" />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="payment-mode-step-details second-step-mode">
                    <div className="payment-mode-heading-alignment">
                        <img src={Step2} alt="Step2" />
                        <h4>Payment Mode</h4>
                    </div>

                    <div className="payment-steps-all-details-alignment second-step">
                        <div className="payment-step-details-flex-alignment">
                            <div className="payment-step-box-alignment">
                                <img src={Img3} alt="Img1" />
                            </div>
                            <div>

                                <p>We will trust the LC (letter of credit) issued
                                    by your bank.</p>
                                <div className="payment-read-more-button">
                                    <button>Read More</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
