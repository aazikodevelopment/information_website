import React from "react";
import "./BulkcargoDetails.scss";
import BulkImage from "../../../../assets/imges/bulk.png";
import BotImage from "../../../../assets/imges/bot.png";
import HandImage from "../../../../assets/imges/hand.svg";
import MountainsIcon from "../../../../assets/icons/mountains.svg";
import TransportationIcon from "../../../../assets/icons/transportation.svg";
export default function BulkcargoDetails() {
  return (
    <div>
      <div className="bulkcargo-details-all-cotnent-alignment">
        <div className="container">
          <div className="box">
            <div className="grid">
              <div className="grid-items">
                <p>Bulk cargo & ship chartering</p>
                <span>
                  Transportation of bulk, break-bulk, project and heavy cargo,
                  military equipment and other non-standard cargoes that are too
                  big or too heavy for a container (NCL - Non Container Load).
                  Vessel chartering and forwarding ship cargo lots.
                </span>
                <div className="button-text-alignment">
                  <button>Find Quote</button>
                  <a>{`Rate request >> `}</a>
                </div>
              </div>
              <div className="grid-items">
                <div className="image-style">
                  <img src={BulkImage} alt="BulkImage" />
                </div>
              </div>
            </div>
            <div className="center-text">
              <p>
                General cargo includes break bulk, which refers to goods
                transported in drums, bags, pallets, and boxes; neon bulk, which
                includes lumber and paper; and containerized cargo, which refers
                to any type of cargo that may be transported in a container
                unit. For general bulk transportation, geared, RoRo, or standard
                vessels are typically used. Bulk cargo is further divided into
                liquid bulk – which includes vegetal oil, chemicals, and LNG
                (liquified natural gas) – and dry bulk, which includes coal,
                iron, grain, and sand. Liquid bulk vessels are classified as
                tanks and are equipped with pumps and pipelines for the purpose
                of transporting the cargo. Dry bulk vessels are typically
                equipped with grab and suction conveyors. If you'd like to learn
                more about vessel types, click the button below.
              </p>
              <div className="button-center-alignment">
                <button>Click to Explore</button>
              </div>
            </div>
            <div className="sec-grid">
              <div className="sec-grid-items">
                <p>When should this type of transportation be considered?</p>
                <span>
                  The proposal of the most efficient and economical way of
                  delivering your cargo is always the most urgent issue for a
                  logistics company.
                </span>
                <span>
                  For shipment that, based on the route, quantity of cargo and
                  other conditions, are most efficiently transported by the
                  ships, at SeaRates we have combined the capabilities of
                  first-class Shipowners, Shipping Agencies and Ship Brokers in
                  different countries of the world to provide a full range of
                  ship forwarding services in any ports of the world, as well as
                  ship chartering.
                </span>
                <span>
                  The freight market remains the most conservative in the
                  industry, and a key role is always played by professionals
                  with a reputation and proficiency. Based on the experience of
                  professionals in the field of chartering with great practical
                  skills, as well as the most modern methods of digital and
                  mathematical modeling in place with statistical algorithms.
                </span>
              </div>
              <div className="sec-grid-items">
                <div className="image-style">
                  <img src={BotImage} alt="BotImage" />
                </div>
              </div>
            </div>
            <div className="three-grid">
              <div className="three-grid-items">
                <div className="hand-image">
                  <img src={HandImage} alt="HandImage" />
                </div>
              </div>
              <div className="three-grid-items">
                <span>
                  We manage to provide the most competitive freight rates and
                  the optimal options for transportation of various types of
                  cargo in ship lots, including vehicles and oversized
                  equipment.
                </span>
                <span>
                  In some regions of short-sea navigation, general cargo
                  transportation by vessels has lost its relevance due to its
                  laboriousness, and container transportation has come to
                  replace it, which in this case often turns out to be even
                  cheaper than ship lots.
                </span>
                <span>
                  Nevertheless, when the volume of the cargo exceeds 2,000 tons,
                  the carriage in bulk again acquires its relevance, but for its
                  implementation it is necessary to have a special
                  qualification. Not to mention lots of over 50,000 tons
                  (Supramax vessels type), 70,000 tons (Panamax type) and
                  100,000 tons (Capesize type).
                </span>
              </div>
            </div>
            <div className="card-grid">
              <div className="card-grid-items">
                <div className="icon">
                  <img src={MountainsIcon} alt="MountainsIcon" />
                </div>
                <p>Classification of bulk cargoes</p>
                <span>
                  Bulk cargo, in terms of normalizing the conditions for their
                  transportation, are divided into two groups: non-grain and
                  grain. Non-grain includes goods transported in bulk: ore, ore
                  concentrates, coal, building materials, salt, raw sugar,
                  grain, etc. All these loads consist of homogeneous or
                  inhomogeneous particles of limited size.
                </span>
                <span>
                  ll grain cargoes are divided into three groups: cereals,
                  legumes and oilseeds. Physical properties: flowability,
                  shrinkage, density, borehole, thermal conductivity and
                  sorption properties. Biological properties: grain respiration,
                  ripening, germination, self-warming, etc.
                </span>
                <span>
                  The carrier must take into account all the specified
                  properties of the cargo and ensure, firstly, rational loading
                  and safe navigation of the ship; secondly, the safety of the
                  goods carried.
                </span>
              </div>
              <div className="card-grid-items">
                <div className="icon">
                  <img src={TransportationIcon} alt="TransportationIcon" />
                </div>
                <p>Legal basis of transportation by ships</p>
                <span>
                  Bulk cargo, in terms of normalizing the conditions for their
                  transportation, are divided into two groups: non-grain and
                  grain.
                </span>
                <span>
                  Non-grain includes goods transported in bulk: ore, ore
                  concentrates, coal, building materials, salt, raw sugar,
                  grain, etc. All these loads consist of homogeneous or
                  inhomogeneous particles of limited size. ll grain cargoes are
                  divided into three groups: cereals, legumes and oilseeds.
                </span>
                <span>
                  Physical properties: flowability, shrinkage, density,
                  borehole, thermal conductivity and sorption properties.
                  Biological properties: grain respiration, ripening,
                  germination, self-warming, etc.
                </span>
                <span>
                  The carrier must take into account all the specified
                  properties of the cargo and ensure, firstly, rational loading
                  and safe navigation of the ship; secondly, the safety of the
                  goods carried.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
