import React, { useEffect } from "react";
import "./ContactUsNew.scss";
import ContactImg from "../../assets/Image/contact-img.png";
import AddressIcon from "../../assets/icons/address-icon.svg";
import IndiaImg from "../../assets/Image/india.svg";
import AusImg from "../../assets/Image/aus.png";

export default function ContactUsNew() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="company-contact-us-section">
      <div className="container">
        <div className="company-contact-us-alignment">
          <div className="company-contact-us-heading">
            <h4>Contact us</h4>
          </div>
          <div className="company-contact-us-top-details-alignment">
            <div className="compnay-contact-us-left-side-details">
              <h6>We always answer!</h6>

              <div className="company-contact-address-alignment">
                <div>
                  <img src={AddressIcon} alt="AddressIcon" />
                </div>
                <p>405, Avalon Business Hub, Aamba Talavadi, Katargam, Surat, Gujarat 395004</p>
              </div>

              <div className="company-location-area-details-alignment">
                <div className="company-location-area-flex">
                  <div className="fleg-img-alignment">
                    <img src={IndiaImg} alt="IndiaImg" />
                  </div>
                  <p>+ 91 9904224477</p>
                </div>
                <div className="company-location-area-flex">
                  <div className="fleg-img-alignment">
                    <img src={AusImg} alt="AusImg" />
                  </div>
                  <p>+ 61 413009199</p>
                </div>
              </div>
            </div>
            <div className="company-contact-img">
              <img src={ContactImg} alt="ContactImg" />
            </div>
          </div>

          <div className="company-contact-form-details-alignment">
            <div className="company-contact-form-box-alignment">
              <h6>For other inquiries please submit your message below</h6>

              <div className="compnay-contact-form-alignment">
                <div className="company-contact-form-grid">
                  <div className="company-contact-form-grid-item">
                    <label>FIRST NAME</label>
                    <div className="contact-input">
                      <input type="text" placeholder="Enter Your Name" />
                    </div>
                  </div>
                  <div className="company-contact-form-grid-item">
                    <label>LAST NAME</label>
                    <div className="contact-input">
                      <input type="text" placeholder="Enter Your Surname" />
                    </div>
                  </div>
                  <div className="company-contact-form-grid-item">
                    <label>PHONE NUMBER</label>
                    <div className="contact-input">
                      <input type="text" placeholder="(0000)000-000" />
                    </div>
                  </div>
                  <div className="company-contact-form-grid-item">
                    <label>E-MAIL</label>
                    <div className="contact-input">
                      <input type="text" placeholder="Aaziko@gmail.com" />
                    </div>
                  </div>
                </div>

                <div className="company-contact-message-supplier-alignment">
                  <label>MESSAGE</label>
                  <div className="company-contct-textarea-alignment">
                    <textarea placeholder="Your Message..."></textarea>
                  </div>
                </div>

                <div className="company-contact-button-alignment">
                  <button>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
