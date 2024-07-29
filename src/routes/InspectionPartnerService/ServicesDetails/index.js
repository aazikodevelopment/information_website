import React from 'react'
import "./ServicesDetails.scss";
import IS1 from "../../../assets/Image/is-1.png";
import IS2 from "../../../assets/Image/is-2.png";
import IS3 from "../../../assets/Image/is-3.png";
import IS4 from "../../../assets/Image/is-4.png";
import IS5 from "../../../assets/Image/is-5.png";
export default function ServicesDetails() {
    return (
        <div className="services-details-section">
            <div className="services-details-heading-alignment ">
                <h4>Services</h4>
            </div>
            <div className="services-all-details-alignment">
                <div className="services-all-details-box">
                    <img src={IS1} alt="IS1" />
                    <h5>Freight Services</h5>
                    <p>Open up new opportunities to grow your business. Enter new markets and discover new continents. We are with you, door-to-door.</p>
                </div>
                <div className="services-all-details-box">
                    <img src={IS2} alt="IS2" />
                    <h5>Shipping & Logistics</h5>
                    <p>Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs.</p>
                </div>
                <div className="services-all-details-box">
                    <img src={IS3} alt="IS3" />
                    <h5>Business services</h5>
                    <p>We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.</p>
                </div>
                <div className="services-all-details-box">
                    <img src={IS4} alt="IS4" />
                    <h5>Digital Technologies</h5>
                    <p>Our priority is to offer a mix of tools and insights for businesses, no matter the size of your operation, the volume of your sales or the age of your company.</p>
                </div>
                <div className="services-all-details-box">
                    <img src={IS5} alt="IS5" />
                    <h5>24/7 Support</h5>
                    <p>Receive support from our experts all over the world at every stage of the process, 24/7.</p>
                </div>
            </div>
        </div>
    )
}
