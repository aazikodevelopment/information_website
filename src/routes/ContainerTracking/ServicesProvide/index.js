import React from 'react'
import "./ServicesProvide.scss";
import SeavicesProvideImg from "../../../assets/Image/logistic-services.png";
export default function ServicesProvide() {
    return (
        <div className="services-provide-section">
            <div className="services-provide-box-alignment">
                <img src={SeavicesProvideImg} alt="SeavicesProvideImg" />
            </div>
            <div className="services-provide-all-details-alignment">
                <h6>For logistics service providers</h6>
                <p>Our Multi-Tracking system isn’t just a convenient tool to satisfy curiosity – it’s a customer retention device. If container tracking is installed on your website, your customers will no longer visit your competitors' sites or shipping lines sites, which could be even worse for you. Container Tracking significantly increases customer return rate, which will affect your site traffic. Your company's website will adapt to the modern digital era and transform your organisation into a digital enterprise.</p>
            </div>
        </div>
    )
}
