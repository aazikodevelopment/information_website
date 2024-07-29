import React from "react";
import "./footer2.scss";
import Logo from "../../assets/logo/aaziko-logo.svg";
import Twitter from "../../assets/Image/twitter.png";
import Youtube from "../../assets/Image/youtube.png";
import Facebook from "../../assets/Image/facebook.png";
import Instagram from "../../assets/Image/instagram.png";
import LinkDin from "../../assets/Image/linkdinIcon.png";
import RainBowImg from "../../assets/images/rainBow-img.svg";
import { useHistory } from "react-router-dom";

export default function Footer2() {
  const history = useHistory();
  const rediretFunction = (key: any) => {
    history?.push(key);
  };

  return (
    <>
      <div className="footer-designs">
        <div className="footer-section">
          <div className="container">
            <div className="footer-alignment">
              <div className="footer-details-alignment">
                <div className="footer-details-section ">
                  <div className="footer-child-title">
                    <h4>Aaziko</h4>
                  </div>
                  <div className="footer-list-alignment">
                    <ul>
                      <li onClick={() => rediretFunction("/")}>Home</li>
                      <li onClick={() => rediretFunction("/how-we-work-for-buyer-new")}>How We Work For Buyer</li>
                      <li onClick={() => rediretFunction("//how-we-work-for-seller-new")}>How We Work For Seller </li>
                      <li onClick={() => rediretFunction("/gallery-page")}>Gallery </li>
                      <li onClick={() => rediretFunction("/company-contact-us")}>Contact Us</li>
                      <li onClick={() => rediretFunction("/blog")}>Blogs</li>
                      <li onClick={() => rediretFunction("/create-ticket")}>Create Ticket</li>
                      <li>Crafted in India</li>
                      {/* <li onClick={() => rediretFunction("/press-room")}>Press Room</li> */}
                    </ul>
                  </div>
                </div>

                <div className="footer-details-section ">
                  <div className="footer-child-title">
                    <h4>Aaziko Help</h4>
                  </div>
                  <div className="footer-list-alignment">
                    <ul>
                      <li onClick={() => rediretFunction("/my-account")}>Your Account</li>
                      <li onClick={() => rediretFunction("/coming-soons")}>Returns Centre </li>
                      <li onClick={() => rediretFunction("/coming-soons")}>Customer Care</li>
                      <li onClick={() => rediretFunction("/payment")}>Payments </li>
                      <li onClick={() => rediretFunction("/coming-soons")}>Message center</li>
                    </ul>
                  </div>
                </div>
                <div className="footer-details-section ">
                  <div className="footer-child-title">
                    <h4>Aaziko service</h4>
                  </div>
                  <div className="footer-list-alignment">
                    <ul>
                      <li onClick={() => rediretFunction("/coming-soons")}>Sell on Aaziko</li>
                      <li onClick={() => rediretFunction("/coming-soons")}>Source On Aaziko</li>
                      <li onClick={() => rediretFunction("/aaziko-request-quote")}>Request a quote</li>
                      <li onClick={() => rediretFunction("/container-tracking")}>Container Tracking</li>
                      <li onClick={() => rediretFunction("/coming-soons")}>Distance & Time</li>
                      <li onClick={() => rediretFunction("/aaziko-load-calculator")}>Load calculator</li>
                      <li onClick={() => rediretFunction("/route-planner")}>Route Planner</li>
                      <li onClick={() => rediretFunction("/trade-services")}>Trade services</li>
                      {/* <li onClick={() => rediretFunction("/inspection")}>Inspection admin</li> */}
                    </ul>
                  </div>
                </div>

                {/* <div className="footer-details-section ">
                  <div className="footer-child-title">
                    <h4>Aaziko About US</h4>
                  </div>

                  <div className="footer-list-alignment">
                    <ul>
                      <li onClick={() => rediretFunction("/all-shipping-leads")}>All Shipping Leads</li>
                      <li onClick={() => rediretFunction("/customs-clearance")}> Customs Clearance</li>
                      <li onClick={() => rediretFunction("/inspection-services")}>Inspection Services</li>
                      <li onClick={() => rediretFunction("/trade-services")}>Trade Services</li>
                      <li onClick={() => rediretFunction("/privacy-policy")}>Privacy Policy</li>
                    </ul>
                  </div>
                </div> */}

                <div className="footer-details-section ">
                  <div className="footer-child-title footer-child-titles">
                    <h4>Follow us</h4>
                  </div>

                  <div className="footer-list-alignment">
                    <ul className="footer-social-icon">
                      <a href="https://www.facebook.com/AazikoIndia/" target="_blank">
                        <li><img src={Facebook} /></li>
                      </a>
                      <a href="https://www.linkedin.com/AazikoIndia/" target="_blank">
                        <li><img src={LinkDin} /></li>
                      </a>
                      <a href="https://www.youtube.com/channel/UC9Q2xP5zy1ZuqkaG26coc5A" target="_blank">
                        <li><img src={Youtube} /></li>
                      </a>
                      <a href="https://twitter.com/Aaziko_India" target="_blank">
                        <li><img src={Twitter} /></li>
                      </a>
                      <a href="https://www.instagram.com/aazikoindia/?hl=en" target="_blank">
                        <li><img src={Instagram} /></li>
                      </a>
                    </ul>
                    <div className="logo-alignment">
                      <img src={Logo} alt="Logo" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
