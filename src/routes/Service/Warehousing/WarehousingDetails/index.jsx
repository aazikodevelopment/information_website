import React from "react";
import "./WarehousingDetails.scss";
import WarehouingImage from "../../../../assets/imges/warehouing.png";
import Icon01 from "../../../../assets/icons/01.svg";
import Icon02 from "../../../../assets/icons/icon02.svg";
import Icon03 from "../../../../assets/icons/03.svg";
import Icon04 from "../../../../assets/icons/04.svg";
import Icon05 from "../../../../assets/icons/05.svg";
import Icon06 from "../../../../assets/icons/06.svg";
import Icon07 from "../../../../assets/icons/07.svg";
import Icon08 from "../../../../assets/icons/08.svg";
import Icon09 from "../../../../assets/icons/09.svg";
import Icon001 from "../../../../assets/icons/001.svg";
import Icon002 from "../../../../assets/icons/002.svg";
import TrucksImage from "../../../../assets/imges/trucks.png";
import HadingImage from "../../../../assets/imges/hading.png";
export default function WarehousingDetails() {
  return (
    <div>
      <div className="warehouing-details-all-content-alignment">
        <div className="container">
          <div className="box">
            <div className="grid">
              <div className="grid-items">
                <p>Warehousing</p>
                <span>
                  Warehousing services from SeaRates are a high-quality storage
                  of cargo, a guarantee of its safety, active manipulation of
                  the goods , which are made in accordance with its features and
                  customer requirements
                </span>
                <div className="button-text-alignment">
                  <button>Find Quote</button>
                  <a>{`Rate request >> `}</a>
                </div>
              </div>
              <div className="grid-items">
                <div className="image">
                  <img src={WarehouingImage} alt="WarehouingImage" />
                </div>
              </div>
            </div>
            <div className="text-center-style">
              <span>
                Freight forwarding companies within SeaRates.com provide
                warehousing services in different cities of the world for
                handling and storage of goods. Covered warehouses can be
                intended for piece and bulk cargo, which allows, regardless of
                weather conditions, to store goods in complete safety. Freight
                forwarders pass a special qualification, and as a rule they have
                a huge experience for all types of cargo and all the necessary
                equipment for this. Given that warehouses are often located
                right in the ports, the implementation of warehousing services
                becomes much easier and easier. The container terminal is
                located in the maximum proximity to the premises, which makes it
                possible to carry out the dispatch of containers promptly,
                without any delays. The huge covered warehouse is a spacious
                room in which your cargo will be in complete safety. Warehouse
                services can be provided as a whole complex, and selective
                services.
              </span>
            </div>
            <div className="rule-text">
              <h6>As a rule, warehouse services include</h6>
              <div className="new-box">
                <div className="sub-grid">
                  <div className="sub-grid-items">
                    <div className="icon-center">
                      <img src={Icon01} alt="Icon01" />
                    </div>
                    <p>Reception of containers at the warehouse terminal</p>
                  </div>
                  <div className="sub-grid-items">
                    <div className="icon-center">
                      <img src={Icon02} alt="Icon02" />
                    </div>
                    <p>Reception of transport with the customers cargo</p>
                  </div>
                  <div className="sub-grid-items">
                    <div className="icon-center">
                      <img src={Icon03} alt="Icon03" />
                    </div>
                    <p>
                      Documentation and production of the required certificates
                      (origin, quality, etc.)
                    </p>
                  </div>
                  <div className="sub-grid-items">
                    <div className="icon-center">
                      <img src={Icon04} alt="Icon04" />
                    </div>
                    <p>Handling of goods</p>
                  </div>
                  <div className="sub-grid-items">
                    <div className="icon-center">
                      <img src={Icon05} alt="Icon05" />
                    </div>
                    <p>Customs clearance</p>
                  </div>
                  <div className="sub-grid-items">
                    <div className="icon-center">
                      <img src={Icon06} alt="Icon06" />
                    </div>
                    <p>Delivery to the terminal</p>
                  </div>
                  <div className="sub-grid-items">
                    <div className="icon-center">
                      <img src={Icon07} alt="Icon07" />
                    </div>
                    <p>Cargo storage</p>
                  </div>
                  <div className="sub-grid-items">
                    <div className="icon-center">
                      <img src={Icon08} alt="Icon08" />
                    </div>
                    <p>Degassing and fumigation</p>
                  </div>
                  <div className="sub-grid-items">
                    <div className="icon-center">
                      <img src={Icon09} alt="Icon09" />
                    </div>
                    <p>Other services on demand</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ware-grid">
              <div className="ware-grid-items">
                <p>Warehouse Equipment</p>
                <span>
                  Many freight forwarders have stevedore complexes at their
                  disposal that have different types of loading and unloading
                  equipment: gantry cranes, pneumatic cranes, grain throwers,
                  forklifts , and all the necessary equipment and conditions to
                  implement the transshipment process quickly and efficiently.
                </span>
                <span>
                  The presence of the railway line directly on the territory
                  allows you to receive and send goods by railway transport.
                </span>
                <span>
                  For quick acceptance and shipment to the warehouse, the
                  complexes are equipped with automobile dumpers for receiving
                  wheat, corn, soybeans, rapeseed, barley, sunflower seeds and a
                  ramp for reloading container and piece goods.
                </span>
              </div>
              <div className="ware-grid-items">
                <div className="image-style">
                  <img src={TrucksImage} alt="TrucksImage" />
                </div>
              </div>
            </div>
            <div className="hading-grid">
              <div className="hading-grid-items">
                <div className="image-style">
                  <img src={HadingImage} alt="HadingImage" />
                </div>
              </div>
              <div className="hading-grid-items">
                <p>Handling and storage</p>
                <span>
                  Warehouses and equipment for handling will help to solve the
                  current problems of transportation and storage of your cargo.
                  This area of ​​SeaRates activity is in demand, and we are
                  doing an excellent job with covering and managing the supply
                  chain of our customers. In various cities and ports, both open
                  and closed warehouses are represented. At the same time, all
                  the conditions and requirements for the preservation of cargo
                  in unchanged form are maintained
                </span>
              </div>
            </div>
            <div className="common-box">
              <div className="item">
                <div className="icon-center-alignment">
                  <img src={Icon001} alt="Icon001" />
                </div>
                <h6>The requirements are followed:</h6>
                <ul>
                  <li>Storage conditions.</li>
                  <li>Temperature mode.</li>
                  <li>Humidity.</li>
                  <li>Other specific conditions.</li>
                  <li>Handling;</li>
                </ul>
                <span>
                  The quality of the services is important and it is at a high
                  level in the framework of the standardization of SeaRates
                  services. For handling purposes can be used:
                </span>
                <ul>
                  <li>Gantry cranes of different capacity.</li>
                  <li>Floating cranes.</li>
                  <li>Car cranes.</li>
                </ul>
              </div>
              <div className="item">
                <div className="icon-center-alignment">
                  <img src={Icon002} alt="Icon002" />
                </div>
                <h6>Responsible storage of goods</h6>
                <span>
                  Responsible storage is a business transaction for the transfer
                  of material values ​​under a storage contract or other legal
                  acts for storage to another entity who is obliged to ensure
                  the safety of this product (safe custody) without loss of
                  quality indicators and characteristics. The main advantage of
                  responsible storage is a guarantee of safety and value of the
                  goods, lack of costs for the maintenance of storage facilities
                  and staff, high speed and quality during cargo handling.
                  SeaRates takes care of providing customers with:
                </span>
                <ul>
                  <li>A-class warehousing complexes</li>
                  <li>Shelf and floor storage of dimensional goods</li>
                  <li>
                    Storage of goods in areas of strict temperature control
                    (from -20 ° C to + 10 ° C)
                  </li>
                  <li>
                    Storage of goods with different requirements and
                    characteristics in separate warehouses and areas
                  </li>
                  <li>Storage in open and closed areas</li>
                  <li>Storage of oversized cargoes</li>
                  <li>Talk to an expert</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
