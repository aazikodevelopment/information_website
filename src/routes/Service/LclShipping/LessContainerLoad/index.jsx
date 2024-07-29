import React from "react";
import "./LessContainerLoad.scss";
import ContainerImage from "../../../../assets/icons/less-container.svg";
import HouseIcon from "../../../../assets/icons/house.svg";
import LclImage from "../../../../assets/imges/lcl.png";
export default function LessContainerLoad() {
  return (
    <div>
      <div className="less-container-load-all-content-alignment">
        <div className="container">
          <div className="box">
            <div className="grid">
              <div className="grid-items">
                <p>Less Container Load</p>
                <span>
                  Delivery of collective cargoes from 1m3 to 15m3, transported
                  in a common container with other shippers in order not to
                  overpay for delivery . It is considered the most economical
                  way to deliver small quantities of goods
                </span>
                <div className="button-text-alignment">
                  <button>Find Quote</button>
                  <a>{`Rate request >> `}</a>
                </div>
              </div>
              <div className="grid-items">
                <div className="image-style">
                  <img src={ContainerImage} alt="ContainerImage" />
                </div>
              </div>
            </div>
            <div className="sec-grid">
              <div className="sec-grid-items">
                <p>Difference Between LCL & FCL</p>
                <span>
                  FCL (Full Container Load) and LCL (Less Container Load) are
                  terms used in international sea freight transportation. FCL
                  and LCL are different both by definition and practice.
                </span>
                <span>
                  If you need to transport a small cargo that can not be sent by
                  regular post, but the cost of air freight is already
                  prohibitively high for such cargo, and for transporting the
                  whole container it is still too small, then sending the
                  combined cargo is what you need.
                </span>
                <p>The dimensions of the cargo for the collective shipment</p>
                <span>
                  According to the world standard, if the volume of the shipment
                  does not exceed half the volume of the container (a 20-foot
                  standard container has a volume of 33.2m3), a combined
                  shipment – LCL applied.
                </span>
              </div>
              <div className="sec-grid-items">
                <div className="iamge-style">
                  <img src={LclImage} alt="LclImage" />
                </div>
              </div>
            </div>
            <div className="card-grid">
              <div className="card-grid-items">
                <div className="icon">
                  <img src={HouseIcon} alt="HouseIcon" />
                </div>
                <p>How it works?</p>
                <span>
                  Let's say you found an attractive item on the Chinese portal,
                  bought it - and now you need to deliver it to your city. You
                  make an application for delivery, and we immediately contact
                  our agents abroad in the nearest city from the place of
                  dispatch. They take the cargo from your seller and send it to
                  the cargo consolidation warehouse. In this warehouse, dispatch
                  of containers is formed all over the world, including to the
                  countries of Europe and the CIS. Cargo consolidation is not an
                  easy process. The company that you trust the delivery must
                  have experience in this area, since they need to arrange all
                  stages of transportation.
                </span>
              </div>
              <div className="card-grid-items">
                <div className="icon">
                  <img src={HouseIcon} alt="HouseIcon" />
                </div>
                <p>Use of LCL</p>
                <span>
                  When transporting a consolidated cargo, you do not need to
                  worry about returning the container after its delivery. Since
                  along with your cargo in the container the goods of other
                  shippers are transported, the return of the container becomes
                  a problem of the container line. Senders of LCL need only
                  worry about the cargo that is to be transported, and more
                  about nothing. It should be noted that dangerous goods are
                  never accepted for the transport of consolidated cargoes
                  (falling under the IMO classification and having UN number -
                  that is, flammable, combustible, explosive, radioactive, etc.)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
