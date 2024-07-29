import React, { useEffect } from 'react'
import "./CompanyDetails.scss";
import ContactBg from "../../assets/Image/contact-bg.png";
export default function CompanyDetails() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className="company-details-section">
            <div className="company-details-bg-alignment">
                <h4>COMPANY DETAILS</h4>
            </div>
            <div className="company-details-form-alignment">
                <div className="container">

                    <div className="company-details-form-grid">
                        <div className="input-alignment">
                            <input type='text' placeholder='Name' />
                        </div>
                        <div className="input-alignment">
                            <input type='text' placeholder='company Name' />
                        </div>
                        <div className="input-alignment">
                            <input type='text' placeholder='Email' />
                        </div>
                        <div className="input-alignment">
                            <input type='text' placeholder='Contact Number' />
                        </div>
                        <div className="input-alignment">
                            <input type='text' placeholder='Gst' />
                        </div>
                    </div>
                    <div className="company-address-alignment">
                        <textarea placeholder='Address'></textarea>
                    </div>
                </div>
            </div>

            <div className="company-submit-section">
                <button>Submit</button>
            </div>
        </div>
    )
}
