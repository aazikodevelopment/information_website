import React, { useEffect } from "react";
import "./ReeferCargoDelivery.scss";
import NewImageStyle from "../../../assets/imges/new-image.png";
import ContainerReferImage from "../../../assets/imges/container-refr.png";
import MedImage from "../../../assets/imges/med.png";
import TalkToExpert from "../../../components/TalkToExpert";
export default function ReeferCargoDelivery() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <div className="reefer-cargo-delivery-all-content-alignment-for-page">
        <div className="container">
          <div className="white-box">
            <div className="grid">
              <div className="grid-items">
                <p>Reefer cargo delivery</p>
                <span>
                  Reefer cargoes are products that requires special conditions
                  of transportation, first of all, maintaining the specified
                  temperature and humidity conditions.
                </span>
                <div className="button-text-alignment">
                  <button>Find Quote</button>
                  <a>{`Rate request >>`}</a>
                </div>
              </div>
              <div className="grid-items">
                <div className="new-image">
                  <img src={NewImageStyle} alt="NewImageStyle" />
                </div>
              </div>
            </div>
            <div className="text-style">
              <p>
                Refrigerated transportation of containers by trucks with and
                without plugging in, sea transportation, forwarding and
                international transportation of reefer containers all over the
                world are exactly what certain forwarding companies specialize
                in at SeaRates.com.
              </p>
            </div>
            <div className="sec-grid">
              <div className="sec-grid-items">
                <p>Refrigerated container transport</p>
                <span>
                  This is a transportation of goods or raw materials that
                  require the maintenance of a certain temperature regime on the
                  whole route. By connecting to a fixed or mobile network
                  (GenSet - diesel generator), refrigerated containers allow you
                  to maintain a temperature that cargo requires.
                </span>
              </div>
              <div className="sec-grid-items">
                <div className="image-style">
                  <img src={ContainerReferImage} alt="ContainerReferImage" />
                </div>
              </div>
            </div>
            <div className="three-col-grid">
              <div className="three-col-grid-items">
                <div className="image-style">
                  <img src={MedImage} alt="MedImage" />
                </div>
              </div>
              <div className="three-col-grid-items">
                <p>Products requiring temperature control</p>
                <span>
                  Groups of goods that require refrigerated transport (most
                  often - perishables) include fish and seafood, milk and dairy
                  products, eggs, fats and oils, vegetables, fruits, medicines,
                  chemical products.
                </span>
              </div>
            </div>
            <TalkToExpert/>
           
          </div>
        </div>
      </div>
    </div>
  );
}
