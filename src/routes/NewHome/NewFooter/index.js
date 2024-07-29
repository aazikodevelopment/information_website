import React from "react";
import "./NewFooter.scss";
import Fotoerlogo from "../../../assets/logo/footer-logo.svg";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
export default function NewFooter() {
  const history = useHistory();
  const rediretFunction = (key) => {
    history?.push(key);
  };

  return (
    <div>
      <div className="new-footer-alignment">
        <div className="container">
          <div className="footer-alignment">
            <img src={Fotoerlogo} alt="Fotoerlogo" />
          </div>
          <div className="footer-menu-alignment">
            <div>
              <p>Aaziko</p>
              <a onClick={() => rediretFunction("/")}>Home</a>
              <a onClick={() => rediretFunction("/how-we-work-for-buyer-new")}>How We Work For Buyer</a>
              <a onClick={() => rediretFunction("/how-we-work-for-seller-new")}>How We Work For Seller</a>
              <a onClick={() => rediretFunction("/gallery-page")}>Gallery</a>
              <a onClick={() => rediretFunction("/company-contact-us")}>Contact Us</a>
              <a onClick={() => rediretFunction("/blog")}>Blogs</a>
              <a onClick={() => rediretFunction("/create-ticket")}>Create Ticket</a>
              <a onClick={() => rediretFunction("/coming-soons")}>Crafted in India</a>
              <a onClick={() => rediretFunction("/press-room")}>Press Room</a>
            </div>
            <div>
              <p>Aaziko Help</p>
              <a onClick={() => rediretFunction("/my-account")}>Your Account</a>
              <a onClick={() => rediretFunction("/coming-soons")}>Returns Centre</a>
              <a onClick={() => rediretFunction("/coming-soons")}>Customer Care</a>
              <a onClick={() => rediretFunction("/payment")}>Payment</a>
              <a onClick={() => rediretFunction("/coming-soons")}>Message center</a>
            </div>
            <div>
              <p>Aaziko service</p>
              <a onClick={() => rediretFunction("/coming-soons")}>Sell on Aaziko</a>
              <a onClick={() => rediretFunction("/coming-soons")}>Source On Aaziko</a>
              <a onClick={() => rediretFunction("/aaziko-request-quote")}>Request a quote</a>
              <a onClick={() => rediretFunction("/container-tracking")}>Container Tracking</a>
              <a onClick={() => rediretFunction("/coming-soons")}>Distance & Time</a>
              <a onClick={() => rediretFunction("/aaziko-load-calculator")}>Load calculator</a>
              <a onClick={() => rediretFunction("/route-planner")}>Route Planner</a>
              <a onClick={() => rediretFunction("/trade-services")}>Trade services</a>
              <a onClick={() => rediretFunction("/inspection")}>Inspection admin</a>
            </div>
            <div>
              <p>Aaziko About US</p>
              <a onClick={() => rediretFunction("/all-shipping-leads")}>All Shipping Leads</a>
              <a onClick={() => rediretFunction("/customs-clearance")}> Customs Clearance</a>
              <a onClick={() => rediretFunction("/inspection-services")}>Inspection Services</a>
              <a onClick={() => rediretFunction("/trade-services")}>Trade Services</a>
              <a onClick={() => rediretFunction("/privacy-policy")}>Privacy Policy</a>
            </div>
            <div>
              <p>Follow us</p>
              <a href="https://www.facebook.com/AazikoIndia/" target="_blank">
                Facebook
              </a>
              <a href="https://www.instagram.com/aazikoindia/?hl=en" target="_blank">
                Instagram
              </a>
              <a href="https://www.youtube.com/channel/UC9Q2xP5zy1ZuqkaG26coc5A" target="_blank">
                Youtube
              </a>
              <a href="https://twitter.com/Aaziko_India" target="_blank">
                Twitter
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
