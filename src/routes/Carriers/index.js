import React, { useEffect } from "react";
import "./Carriers.scss";
import carriesImg from "../../assets/Image/carries-img.png";
import MissionImg from "../../assets/Image/mission-img.png";
import AnyTimeImg from "../../assets/Image/img-5.png";
import SetGloballyImg from "../../assets/Image/sell-globally-img.png";
import GrowAazikoImg from "../../assets/Image/undraw-img.png";
export default function Carriers() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="carriers-section">
      <div className="carriers-banner-alignment">
        <div className="container">
          <div className="carriers-banner-details">
            <div>
              <h4>We are the world’s leading testing, inspection and certification company.</h4>
              <p>
                Launched in 2000, Aaziko.com is the leading platform for global wholesale trade. We serve millions of buyers and suppliers around the
                world.
              </p>
            </div>
            <div className="carries-banner-img">
              <img src={carriesImg} alt="carriesImg" />
            </div>
          </div>
        </div>
      </div>

      <div className="carriers-page-body-algnment">
        <div className="mission-box-alignment">
          <div className="container">
            <div className="mission-grid-alignment">
              <div className="mission-img-alignment">
                <img src={MissionImg} alt="MissionImg" />
              </div>

              <div className="mission-description-alignment">
                <h6>Our Mission</h6>

                <div className="mission-description-text-alignment">
                  <p>As part of the Aaziko.com Group, our mission is to make it easy to do business anywhere.</p>
                  <p>
                    We do this by giving suppliers the tools necessary to reach a global audience for their products, and by helping buyers find
                    products and suppliers quickly and efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="anytime-anywhere-box-alignment">
          <div className="container">
            <div className="anytime-anywhere-grid-alignment">
              <div className="anytime-anywhere-description-alignment">
                <h6>Anytime, Anywhere</h6>

                <div className="anytime-anywhere-description-text-alignment">
                  <p>As a platform, we continue to develop services to help businesses do more and discover new opportunities.</p>
                  <p>
                    Whether it’s sourcing from your mobile phone or contacting suppliers in their local language, turn to Aaziko.com for all your
                    global business needs.
                  </p>
                </div>
              </div>
              <div className="anytime-anywhere-img-alignment">
                <img src={AnyTimeImg} alt="AnyTimeImg" />
              </div>
            </div>
          </div>
        </div>
        <div className="sell-globally-box-alignment">
          <div className="container">
            <div className="sell-globally-grid-alignment">
              <div className="sell-globally-img-alignment">
                <img src={SetGloballyImg} alt="SetGloballyImg" />
              </div>

              <div className="sell-globally-description-alignment">
                <h6>Sell Globally</h6>

                <div className="sell-globally-description-text-alignment">
                  <p>
                    Welcome to Aaziko.com, a leading platform dedicated to revolutionizing global trade with a professional and unwavering commitment
                    to excellence. Our mission is to provide a one-stop solution for all your import needs from India or selling endeavors to India,
                    ensuring a seamless and trustworthy trading experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow-with-aaziko-box-alignment">
          <div className="container">
            <div className="grow-with-aaziko-grid-alignment">
              <div className="grow-with-aaziko-description-alignment">
                <h6>Grow with Aaziko.com</h6>

                <div className="grow-with-aaziko-description-text-alignment">
                  <h5>Reach millions of business buyers globally</h5>
                  <p>Reach Millions of Business Buyers Globally with Aaziko.com: Your Gateway to Success</p>
                </div>
              </div>
              <div className="grow-with-aaziko-img-alignment">
                <img src={GrowAazikoImg} alt="GrowAazikoImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
