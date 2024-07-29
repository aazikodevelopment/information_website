import React from 'react'
import "./SupplierMembershipsBanner.scss";
import EarthImg from "../../../assets/Image/earth-img.png";
export default function SupplierMembershipsBanner() {
  return (
    <div className="supplier-memberships-banner-section">
      <div className="container">
        <div className="supplier-memberships-banner-alignment">
          <div className="supplier-memberships-banner-flex">
            <div className="supplier-memberships-left-side-alignment">
              <h6>Sell on Aaziko.com</h6>
              <h4>Reach Millions of B2B Byuer Globally</h4>
              <div className="supplier-button-alignment">
                <div className="supplier-start-selling">
                  <button>Start Selling</button>
                </div>
                <div className="supplier-chat-consultant-button">
                  <button>Chat With consultant</button>
                </div>
              </div>
            </div>
            <div className="supplier-memberships-right-side-alignment">
              <div className="supplier-memberships-box-alignment">
                <h6>26,000,000+</h6>
                <p>Active buyer globally</p>
              </div>
              <div className="supplier-memberships-box-alignment">
                <h6>400,000+</h6>
                <p>Product inquiries daily</p>
              </div>
              <div className="supplier-memberships-box-alignment">
                <h6>200+</h6>
                <p>Countries and regions
                  represented</p>
              </div>
            </div>
          </div>

          <div className="supplier-earth-img-alignment">
            <img src={EarthImg} alt="EarthImg" />
          </div>

          <div className="supplier-aaziko-details-box-alignment">
            <h5>Our Mission: Empowering SMEs to Go Global with Aaziko.com</h5>

            <div className="supplier-aaziko-details-flex-alignment">
              <div className="suplier-aaziko-img-alignment">

              </div>
              <div className="supplier-aaziko-description-details">
                <p>At Aaziko, we are dedicated to empowering global trade through a professional and reliable approach.</p>
                <p>Welcome to Aaziko, where we provide professional solutions to help you establish a successful ecommerce presence for your business.</p>
                <p>At Aaziko, we understand the importance of maximizing your profits. That's why we offer you the opportunity to pocket more from each sale with our incredibly low take rates, some as low as 0% in certain cases.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
