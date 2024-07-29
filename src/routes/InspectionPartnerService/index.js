import React, { useEffect } from 'react'
import "./InspectionPartnerService.scss";
import IPSImg1 from "../../assets/Image/ips-1.png";
import ServicesDetails from './ServicesDetails';
import OurAdvantages from './OurAdvantages';
import { NavLink } from 'react-router-dom';
export default function InspectionPartnerService() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className="inspection-partner-service-section">
            <div className="container">
                <div className="inspection-parter-services-banner-alignment">
                    <div className="inspection-parter-services-grid">
                        <div className="inspection-parter-services-grid-item">
                            <div className="left-details">
                                <h5>inspection Partner Service</h5>
                                <p>We're looking for talented individuals to join our logistics team and help us make it better! If you have a passion for logistics and want to contribute to an organization that values innovation and efficiency, we would love to have you on board. With us, you'll have the opportunity to work on exciting projects, collaborate with a diverse team, and make a real impact in the world of logistics. So why wait? Come and work with us to make a difference and take your career to new heights!</p>
                            </div>
                            <div className="left-side-other-box-alignment">
                                <NavLink to="/company-details">
                                <div className="other-box ">
                                    <p>COMPANY</p>
                                </div>
                                </NavLink>
                            </div>
                            <NavLink to="/individual">
                            <div className="left-side-other-box-alignment">
                                <div className="other-box ">

                                    <p>INDIVIDUAL</p>
                                </div>
                            </div>
                            </NavLink>
                        </div>
                        <div className="inspection-parter-services-grid-item">
                            <div>
                                <img src={IPSImg1} alt="IPSImg1" />
                            </div>
                        </div>
                    </div>
                </div>

                <ServicesDetails />
                <OurAdvantages />
            </div>
        </div>
    )
}
