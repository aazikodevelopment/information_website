import React from 'react'
import "./SupplierSecurePayment.scss";
import Img1 from "../../../assets/Image/pmi1.png";
import Img2 from "../../../assets/Image/pmi2.png";
import Img3 from "../../../assets/Image/pmi4.png";
export default function SupplierSecurePayment() {
  return (
    <div className="supplire-secure-payment-section">
      <div className="container">
        <div className="supplire-secure-payment-heading">
          <h4>How we make supplier secure payment.</h4>
        </div>

        <div className="supplire-secure-payment-details">
          <div className="supplire-secure-payment-child-details">
            <div className="supplire-secure-box">
              <img src={Img1} alt="Img1" />

            </div>

            <div className="supplire-secure-box-details">
              <p>30% advance will be taken from the buyer and given to the supplier when the order is conformed.</p>
            </div>
          </div>
          <div className="supplire-secure-payment-child-details">
            <div className="supplire-secure-box">
              <img src={Img2} alt="Img2" />

            </div>

            <div className="supplire-secure-box-details">
              <p>The remaining 70% payment will be collected from the buyer before shipment of the goods once the inspection report is done.</p>
            </div>
          </div>
          <div className="supplire-secure-payment-child-details">
            <div className="supplire-secure-box">
              <img src={Img3} alt="Img2" />

            </div>

            <div className="supplire-secure-box-details">
              <p>We guarantee payment to the supplier relying on the LC (letter of credit) issued by the buyer's bank.</p>

              <div className="read-more-button">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
