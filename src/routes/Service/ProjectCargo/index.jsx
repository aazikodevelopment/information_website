import React, { useEffect } from "react";
import "./ProjectCargo.scss";
import CargoImage from "../../../assets/imges/cargo.png";
import TrucksImage from "../../../assets/imges/trucks2.png";
import SettingIcon from "../../../assets/icons/setting.svg";
import TruckIcon from "../../../assets/icons/truck.svg";
import TalkToExpert from "../../../components/TalkToExpert";
export default function ProjectCargo() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <div className="project-cargo-all-content-alignment">
        <div className="container">
          <div className="box">
            <div className="grid">
              <div className="grid-items">
                <p>Project cargo</p>
                <span>
                  Transportation of bulky, heavy, expensive or important (for
                  the project for which they are intended) pieces of equipment
                  is carried out in a short time and at reasonable prices.
                </span>
                <div className="button-text-alignment">
                  <button>Find Quote</button>
                  <a>{`Rate request >> `}</a>
                </div>
              </div>
              <div className="grid-items">
                <div className="image-style">
                  <img src={CargoImage} alt="CargoImage" />
                </div>
              </div>
            </div>
            <div className="center-text">
              <p>
                SeaRates.com is a place where you can get services for the
                integrated transportation of oversized and project cargo
                internationally. Our logistics community will provide quality
                and professional assistance to the client on any issue, will
                give the best solution for the type and route of transportation.
                The most important thing is the transportation of oversized or
                heavy-lift cargo is made in the right time, and customers are
                very pleased with its cost.
              </p>
            </div>
            <div className="sub-text">
              <h6>
                What is profitable of choosing the transportation solution of
                project cargo at SeaRates.com?
              </h6>
              <h5>
                Top world’s logistics companies at SeaRates provide the
                following conditions
              </h5>
            </div>
            <div className="text-grid">
              <div className="text-grid-items">
                <ul>
                  <li>
                    Multiple options of multimodal project cargo delivery (by
                    containers, rail, trucks or even air, as well as on ship
                    decks)
                  </li>
                  <li>
                    Guaranteed delivery at the right time (without various
                    delays)
                  </li>
                  <li>
                    Individual services and approach to each client, taking into
                    account all interests and requirements
                  </li>
                  <li>
                    Every forwarding company is fully responsible for the
                    transportation of oversized cargo based on the insurance
                    protection
                  </li>
                </ul>
              </div>
              <div className="text-grid-items">
                <ul>
                  <li>Affordable competitive prices</li>
                  <li>Assistance in paperwork</li>
                  <li>Online-tracking of every shipment</li>
                  <li>Performance of work at high level</li>
                  <li>
                    Professional knowledge of established rules, regulations and
                    standards in each country
                  </li>
                  <li>
                    Coordination of legal requirements of various countries for
                    oversized or heavy cargo transportation
                  </li>
                </ul>
              </div>
            </div>
            <div className="most-grid">
              <div className="most-grid-items">
                <p>
                  The most used equipment for project cargo is 20’/40′ Open Top
                  and 20’/40′ Flat Rack. Due to their characteristics, these
                  types of containers allow to stow and stack very heavy cargo
                  or extra dimensioned cargo. If you d like to learn more about
                  the dimensions and types of containers, click the button
                  below.
                </p>
                <button>Click to explore</button>
              </div>
              <div className="most-grid-items">
                <div className="image-style">
                  <img src={TrucksImage} alt="TrucksImage" />
                </div>
              </div>
            </div>
            <div className="sub-box">
              <div className="sub-box-items">
                <div className="icon">
                  <img src={SettingIcon} alt="SettingIcon" />
                </div>
                <h4>
                  Services you can choose within Aziko.com to deliver project
                  cargo
                </h4>
                <span>
                  Forwarders at SeaRates have competence to transport
                  construction equipment, river and sea transport, agricultural
                  equipment, industrial equipment, as well as transportation of
                  various non-standard equipment and machinery. SeaRates has
                  modern technologies for transport different types of various
                  payloads , which are qualitatively performed by international
                  and local freight transportation.
                </span>
                <span>
                  If you want to know how much it will cost to transport a
                  project cargo, for this we have developed an online
                  calculator, where you need to input your personal data, place
                  of departure and arrival, the number of services, information
                  about the cargo (weight, length, height, width). By doing that
                  you are getting all the information about your transportation,
                  price and time.
                </span>
              </div>
              <div className="sub-box-items">
                <div className="icon">
                  <img src={TruckIcon} alt="TruckIcon" />
                </div>
                <h4>
                  Ways of project cargo transportation by sea, road and railway
                </h4>
                <span>
                  Sea freight for over-gauge cargo is normally performed in
                  specialized container equipment, such as Flat-Racks, Open-Tops
                  and Platforms. This is valid for cargoes which not exceed 12m
                  by length and 3m by height and width. In other cases it
                  requires special arrangements, or shipping on the deck of a
                  chartered vessel. Delivery of oversized and heavy cargo by
                  road is made with the following parameters: weight over 25
                  tons, width over 2.54 meters, length over 13,5 meters, height
                  over 2,7 m. Rail transportation of project cargoes can be
                  performed either in containers as multimodal delivery, if the
                  sizes allow, or otherwise – on rail platforms or freight
                  wagons (which is more common for heavy-weight cargo). For each
                  type of transportation, you can calculate its cost. If you
                  encounter difficulties, you can contact the forwarder in chat
                  who will find a way out for all the problems and explain what
                  and how to do.
                </span>
                <span>
                  International transportation of oversized cargo is organized
                  in all countries of the world, you can find any transport
                  solution of the category that you order. The price depends on
                  the size, delivery time, type of the cargo and individual
                  conditions.
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
