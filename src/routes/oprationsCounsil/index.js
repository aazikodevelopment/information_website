import React, { useEffect } from "react";
import "./oprationsCounsil.scss";
import Aaziko from "../../assets/Image/aaziko-icon.png";
import FounderAaziko from "../../assets/Image/founder.png";
import Image1 from "../../assets/Image/1.png";
import Image2 from "../../assets/Image/2.png";
import Image3 from "../../assets/Image/3.png";
import Image4 from "../../assets/Image/4.png";
export default function OprationsCounsil() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <div className="oprations-counsil-all-content-alignment">
        <div className="container">
          <div className="first-grid">
            <div className="first-grid-items">
              <h4>
                Aaziko is led by a dynamic person of individuals with many years
                of experience in their respective fields.
              </h4>
              <span>
                WE MAKE YOUR PURCHASE AND SELLING HASSLE - FREE AND COST -
                EFFECTIVE.
              </span>
              <span>
                BECAUSE OF THE INNOVATION IN OUR BUSINESS MODEL. WE CREATE A WIN
                - WIN SITUTION FOR BUYERS, SELLERS, AND US. ADDITIONALLY, WE
                DON’T CHARGE ANY FEES OR COMMISSIONS. ENABLING CUSTOMERS TO BUY
                PRODUCTS AT MANUFACTURING COST.
              </span>
            </div>
            <div className="first-grid-items">
              <img src={Aaziko} alt="Aaziko" />
            </div>
          </div>
          <div className="founder">
            <div className="founder-items">
              <img src={FounderAaziko} alt="FounderAaziko" />
            </div>
            <div className="founder-items">
              <h4>Founder</h4>
              <p>
                <b>Sagar Sheliya</b> is a Young Enterpreneur,Founder and CEO Of
                Aaziko.
              </p>
            </div>
          </div>
          <div className="text">
            <p>
            IN 2014, HE BEGAN MANUFACTURING UAVS (UNMANED AERIAL VEHICLES) WITH A LIFTING CAPACITY OF 400 KG AND A FLYING TIME OF 5 HOURS. FOR THIS, HE IMPORTED CERTAIN EQUIPMENT FROM OUTSIDE INDIA AND ENCOUNTERED SEVERAL DIFFICULTIES. FOLLOWING THAT HE FOUNDED SAYA EXIM (SOUTH ASIAN YOUTH ASSOCIATION) IN ORDER TO MAKE GLOBAL TRADE EASIER AND MORE TRUSTWORTHY. SAYAEXIM FOCUSES ON A SINGLE INDUSTRY (TEXTILE) FOLLOWING HIS SUCCESS WITH SAYA EXIM.
            </p>
            <p>
            HE LAUNCHED AAZIKO.COM IN 2020 WITH THE GOAL OF MAKING INTERNATIONAL TRADE EASIER, MORE TRANSPARENT, AND TRUSTWORTHY FOR EVERYONE.
            </p>
          </div>
        </div>
        <div className="we-care-section">
            <div className="heading-text">
                <p>We Are Associated With</p>
            </div>
            <div className="background">
                <div className="container">
                    <div className="image-alignment">
                        <div>
                            <img src={Image1} alt="Image1"/>
                        </div>
                        <div>
                            <img src={Image2} alt="Image2"/>
                        </div>
                        <div>
                            <img src={Image3} alt="Image3"/>
                        </div>
                        <div>
                            <img src={Image4} alt="Image4"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
// Changes in this code scss file