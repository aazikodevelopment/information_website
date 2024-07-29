import React, { useEffect } from 'react'
import "./Payment.scss";
import PaymentGuarantee from './PaymentGuarantee';
import PaymentMode from './PaymentMode';
import NotAcceptPayment from './NotAcceptPayment';
export default function Payment() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="payment-section">
      <div className="payment-bg-alignment">
        <div className="container">
          <div className="payment-banner-details-alignment">
            <h4>Secure Payment
              With Aaziko.</h4>
            <p>At Aaziko, we understand the importance of convenient and secure payment options for your international trade transactions. That's why we offer a range of flexible and reliable payment solutions tailored to meet your needs.</p>
          </div>
        </div>
      </div>
      <div>
        <PaymentGuarantee />
      </div>
      <div>
        <PaymentMode />
      </div>
      <div>
        <NotAcceptPayment />
      </div>
    </div>
  )
}
