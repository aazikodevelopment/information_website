import React from "react";
import "./FullContainerLoad.scss";
import ContainerImage from "../../../../assets/imges/container.png";
import Icon1 from "../../../../assets/icons/icon_1.svg";
import Icon2 from "../../../../assets/icons/icon_2.svg";
import Icon3 from "../../../../assets/icons/icon_3.svg";
import Icon4 from "../../../../assets/icons/icon_4.svg";
import Icon5 from "../../../../assets/icons/icon_5.svg";
import Icon6 from "../../../../assets/icons/icon_6.svg";
import Icon7 from "../../../../assets/icons/icon_7.svg";
import Icon8 from "../../../../assets/icons/icon_8.svg";
import Icon9 from "../../../../assets/icons/icon_9.svg";
export default function FullContainerLoad() {
  return (
    <div>
      <div className="full-container-load-all-content-alignment">
        <div className="container">
          <div className="box">
            <div className="first-text">
              <h4>Full Container Load</h4>
              <span>
                FCL (Full Container Load) – is an ocean shipping mode, in which
                the entire container is intended for one supplier and occupies a
                full container (regardless of size). FCL transportation can be
                filled directly at the supplier’s warehouse, and then sent to
                the container yard (container cargo station in the port). The
                container can be unloaded at the port of destination or the
                carrier can deliver to the recipient's warehouse.
              </span>
              <a>{`Find Quote Rate Request >> `}</a>
            </div>
            <div className="container-image">
              <img src={ContainerImage} alt="ContainerImage" />
            </div>
            <div className="sec-text">
              <p>
                The difference between container transportation and carriage in
                bulk
              </p>
              <span>
                More than 80% of everything we eat, wear, and use is shipped by
                sea. Since the 1950s, container shipping has become very popular
                among shippers due to their standardization and efficiency.
                Container transportation allows for uninterrupted delivery of
                cargo from the consignor to the consignee, thereby reducing the
                volume of intermediate transshipment operations.
              </span>
            </div>
            <div className="three-text">
              <p>Advantages over other types of shipping</p>
              {/* <ul>
                <li>
                  There are more opportunities for computerizing the management
                  of the process of cargo delivery.
                </li>
                <li>
                  There is no need to overload the goods when changing the mode
                  of transport.
                </li>
                <li>
                  The goods will be once loaded into the container at the sender
                  and unloaded at the recipient in the warehouse.
                </li>
                <li>The pace of loading and unloading is accelerating.</li>
                <li>Requires less packaging costs for the goods.</li>
                <li>
                  Transport documentation and forwarding operations have been
                  simplified and unified.
                </li>
                <li>Goods are well stored.</li>
                <li>
                  Simplified the process of delivery of goods to the recipient's
                  warehouse.
                </li>
                <li>As a result, delivery times are reducede.</li>
              </ul> */}

              <div className="advantages-over-other-type-box-alignment">
                <div className="advantages-over-other-type-box-grid">
                  <div className="advantages-over-other-type-box-grid-item">
                    <div className="advantages-over-other-type-icon">
                      <img src={Icon1} alt="Icon1" />
                    </div>
                    <p>
                      There are more opportunities for computerizingthe
                      management of the process of cargo delivery
                    </p>
                  </div>
                  <div className="advantages-over-other-type-box-grid-item">
                    <div className="advantages-over-other-type-icon">
                      <img src={Icon2} alt="Icon2" />
                    </div>
                    <p>
                      There is no need to overload the goods when changing the
                      mode of transport
                    </p>
                  </div>
                  <div className="advantages-over-other-type-box-grid-item">
                    <div className="advantages-over-other-type-icon">
                      <img src={Icon3} alt="Icon3" />
                    </div>
                    <p>
                      The goods will be once loaded into the container at the
                      sender and unloaded at the recipient in the warehouse
                    </p>
                  </div>
                  <div className="advantages-over-other-type-box-grid-item">
                    <div className="advantages-over-other-type-icon">
                      <img src={Icon4} alt="Icon4" />
                    </div>
                    <p>The pace of loading and unloading is accelerating</p>
                  </div>
                  <div className="advantages-over-other-type-box-grid-item">
                    <div className="advantages-over-other-type-icon">
                      <img src={Icon5} alt="Icon5" />
                    </div>
                    <p>Requires less packaging costs for the goods</p>
                  </div>
                  <div className="advantages-over-other-type-box-grid-item">
                    <div className="advantages-over-other-type-icon">
                      <img src={Icon6} alt="Icon6" />
                    </div>
                    <p>
                      Transport documentation and forwarding operations have
                      been simplified and unified
                    </p>
                  </div>

                  <div className="advantages-over-other-type-box-grid-item">
                    <div className="advantages-over-other-type-icon">
                      <img src={Icon7} alt="Icon7" />
                    </div>
                    <p>Goods are well stored</p>
                  </div>
                  <div className="advantages-over-other-type-box-grid-item">
                    <div className="advantages-over-other-type-icon">
                      <img src={Icon8} alt="Icon8" />
                    </div>
                    <p>
                      Simplified the process of delivery of goods to the
                      recipient's warehouse
                    </p>
                  </div>
                  <div className="advantages-over-other-type-box-grid-item">
                    <div className="advantages-over-other-type-icon">
                      <img src={Icon9} alt="Icon9" />
                    </div>
                    <p>As a result, delivery times are reducede</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sec-text">
              <p>Transportation of general cargoes</p>
              <span>
                For relatively large quantities of goods, it is more
                advantageous to use a certain number of containers than to
                transport cargo on board the vessel. Before the beginning of
                containerization, general cargoes were transported separately on
                board ships. Loading / unloading for general cargoes is more
                labor and time consuming . With coming of containers, the
                process of transporting this type of goods was strongly
                optimized.
              </span>
            </div>
            <div className="sec-text sec-text-align">
              <p>Transportation of non-standard cargoes</p>
              <span>
                When transporting a consolidated cargo, you do not need to worry
                about returning the container after its delivery. Since along
                with your cargo in the container the goods of other shippers are
                transported, the return of the container becomes a problem of
                the container line. Senders of LCL need only worry about the
                cargo that is to be transported, and more about nothing.
              </span>
              <span>
                It should be noted that dangerous goods are never accepted for
                the transport of consolidated cargoes (falling under the IMO
                classification and having UN number - that is, flammable,
                combustible, explosive, radioactive, etc.)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
