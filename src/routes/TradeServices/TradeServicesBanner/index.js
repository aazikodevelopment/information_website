import React from 'react'
import "./TradeServicesBanner.scss";
import DemoImg1 from "../../../assets/Image/demo-img-1.png";
import DemoImg2 from "../../../assets/Image/demo-img-2.png";
import DemoImg3 from "../../../assets/Image/demo-img-3.png";
export default function TradeServicesBanner() {
  return (
    <div className="trade-services-banner-section">
      <div className="trade-sevices-bg">
        <div className="container">
          <div className="trade-sevices-details-alignment">
            <div className="trade-sevices-left-side-alignment">
              <h4>Why Aaziko.com Select?</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              <div className="trade-sevices-button-alignment">
                <button>Learn More</button>
              </div>
            </div>

            <div className="trade-sevices-right-side-alignment">
              <div className="trade-sevices-img">
                <img src={DemoImg1} alt="DemoImg1" />
              </div>
              <div>
                <div className="trade-sevices-img small-img-alignment" >
                  <img src={DemoImg2} alt="DemoImg2" />
                </div>
                <div className="trade-sevices-img">
                  <img src={DemoImg3} alt="DemoImg3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
