import React from 'react'
import "./SupplierNotAcceptPayment.scss";
import PaymentImg from "../../../assets/Image/pmi3.png";
export default function SupplierNotAcceptPayment() {
  return (
    <div className="supplier-not-accepted-payment-section">
      <div className="container">
        <div className="supplier-not-accepted-payment-alignment">
          <h6>Any other payment of method is not acceptable.</h6>
          <div className="supplier-not-accepted-flex-alginment">
            <div className="supplier-not-accepted-box-alignment">
              <img src={PaymentImg} alt="PaymentImg" />
            </div>
            <p>Aaziko does not accept any form of payment other than the payment methods provided above.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
