import React from 'react'
import "./NotAcceptPayment.scss";
import PaymentImg from "../../../assets/Image/pmi3.png";
export default function NotAcceptPayment() {
  return (
    <div className="not-accepted-payment-section">
      <div className="container">
        <div className="not-accepted-payment-alignment">
          <h6>Any other payment of method is not acceptable.</h6>
          <p>Aaziko does not accept any form of payment other than the payment methods provided above.</p>
          <div className="not-accepted-box-alignment">
            <img src={PaymentImg} alt="PaymentImg" />
          </div>
        </div>
      </div>
    </div>
  )
}
