import React from "react";
import "./GoodsTransportation.scss";
import TransportationImage from "../../../../assets/imges/transportation.png";
import DangerImage from "../../../../assets/imges/danger.png";
import BombIcon from "../../../../assets/icons/bomb.svg";
import ColbIcon from "../../../../assets/icons/colb.svg";
import TempIcon from "../../../../assets/icons/temp.svg";
import BonesIcon from "../../../../assets/icons/bones.svg";
import ImoIcon from "../../../../assets/icons/imo.svg";
import FolderIcon from "../../../../assets/icons/folder.svg";
import ListIcon from "../../../../assets/icons/list.svg";
import { NavLink } from "react-router-dom";
export default function GoodsTransportation() {
  return (
    <div>
      <div className="goods-transportation-all-content-alignment">
        <div className="container">
          <div className="white-box">
            <div className="grid">
              <div className="grid-items">
                <p>Dangerous Goods Transportation</p>
                <span>
                  Dangerous goods - substances, materials, products, industrial
                  and other waste that, due to their inherent properties, in the
                  presence of certain factors, during transportation can cause
                  an explosion, fire, damage to technical equipment, devices,
                  structures and other objects, cause material damage and
                  environment damage and also lead to death, injury, poisoning
                  of people and animals.
                </span>
                <div className="button-text-alignment">
                  <NavLink to="/aaziko-request-quote">
                    <button>Find Quote</button>
                  </NavLink>
                  <a>{`Rate request >> `}</a>
                </div>
              </div>
              <div className="grid-items">
                <div className="image-style">
                  <img src={TransportationImage} alt="TransportationImage" />
                </div>
              </div>
            </div>
            <div className="center-text">
              <p>What is dangerous goods?</p>
              <span>
                Dangerous goods are any objects with characteristics and
                properties that can: threaten human life and health; cause
                irreparable harm to the environment; cause damage to material
                objects. Substances under this designation are:
              </span>
            </div>
            <div className="box-center-alignment">
              <div className="main-grid">
                <div className="main-grid-items">
                  <div>
                    <img src={BombIcon} alt="BombIcon" />
                  </div>
                  <div>
                    <span>
                      Capable of exploding due to friction or detonation,
                      leaving large-scale damage
                    </span>
                  </div>
                </div>
                <div className="main-grid-items">
                  <div>
                    <img src={ColbIcon} alt="ColbIcon" />
                  </div>
                  <div>
                    <span>
                      Causing a corrosive process in conventional containers for
                      storage, which may result in the release of a substance.
                    </span>
                  </div>
                </div>
                <div className="main-grid-items">
                  <div>
                    <img src={TempIcon} alt="TempIcon" />
                  </div>
                  <div>
                    <span>
                      Belonging to the category of strong poisons, hazardous to
                      human life and health.
                    </span>
                  </div>
                </div>
                <div className="main-grid-items">
                  <div>
                    <img src={BonesIcon} alt="BonesIcon" />
                  </div>
                  <div>
                    <span>
                      That can easily ignite due to temperature or other
                      factors.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="sec-grid">
              <div className="sec-grid-items">
                <div className="icon-style">
                  <img src={ImoIcon} alt="ImoIcon" />
                </div>
                <span>
                  IMO IMDG Code is the main document governing the carriage of
                  dangerous goods by sea . Forwarding companies operating on
                  SeaRates are regularly required to qualify for knowledge of
                  this code.
                </span>
                <button>Click to Explore</button>
              </div>
              <div className="sec-grid-items">
                <div className="image-style">
                  <img src={DangerImage} alt="DangerImage" />
                </div>
              </div>
            </div>
            <div className="two-col-grid">
              <div className="two-col-grid-items">
                <div className="icon">
                  <img src={FolderIcon} />
                </div>
                <p>Classification</p>
                <span>
                  There are 9 classes of dangerous goods, selected on the basis
                  of their characteristics and degree of danger.
                </span>
                <ul>
                  <li>Substances that can cause an explosion;</li>
                  <li>Compressed, dissolved substances under pressure;</li>
                  <li>Liquids, easily and quickly flammable;</li>
                  <li>
                    Solids, characterized by ease of ignition, self-igniting
                    substances, cargo, emitting gases under the influence of
                    water, subject to ignition;
                  </li>
                  <li>Oxidizing loads, organic peroxides;</li>
                  <li>
                    Poisonous goods, as well as goods that can cause infection;
                  </li>
                  <li>Radioactive loads;</li>
                  <li>Caustic and corrosive substances;</li>
                  <li>
                    Other goods dangerous to humans and the environment.on.
                  </li>
                </ul>
              </div>
              <div className="two-col-grid-items">
                <div className="icon">
                  <img src={ListIcon} alt="ListIcon" />
                </div>
                <p>IMO cargo transportation by different modes of transport</p>
                <span>
                  SeaRates sets high standards for the competence of freight
                  forwarders in working with shipping lines, railway operators
                  and air lines, as well as in complying with the rules for the
                  transport of dangerous goods by road using ADR.
                </span>
                <span>
                  There are a number of codes that regulate both international
                  maritime and domestic transport of dangerous goods (such as
                  MARPOL 73/78, SOLAS-74 and local GOSTs), and depending on the
                  requirements for each particular shipment, the transport
                  company follows the relevant regulations so that you can be
                  sure for the safety and timeliness of your cargo delivery on
                  any Incoterms.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
