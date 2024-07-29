import React, { useEffect } from "react";
import "./CargoInsurance.scss";
import BlurContainer from "../../../assets/imges/blur-container.png";
import ShieldIcon from "../../../assets/icons/Shield.svg";
import ContainersIcon from "../../../assets/icons/containers.svg";
import IconCrashedHouse from "../../../assets/icons/icon_crashed-house.svg";
import IconPiece from "../../../assets/icons/icon_piece.svg";
import IconFire from "../../../assets/icons/icon_fire.svg";
import IconMask from "../../../assets/icons/icon_mask.svg";
import IconLightning from "../../../assets/icons/icon_lightning.svg";
import IconRobber from "../../../assets/icons/icon_robber.svg";
export default function CargoInsurance() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <div className="cargo-insurance-all-content-alignment">
        <div className="container">
          <div className="box">
            <div className="grid">
              <div className="grid-items">
                <p>Cargo Insurance</p>
                <span>
                  Insurance service is optional for any cargo. SeaRates
                  recommends you to protect your cargo at all stages of
                  transportation.
                </span>
                <div className="button-text-alignment">
                  <button>Find Quote</button>
                  <a>{`Rate request >> `}</a>
                </div>
              </div>
              <div className="grid-items">
                <div className="blur-container">
                  <img src={BlurContainer} alt="BlurContainer" />
                </div>
              </div>
            </div>
            <div className="sub-grid">
              <div className="sub-grid-items">
                <div className="icon">
                  <img src={ShieldIcon} alt="ShieldIcon" />
                </div>
                <p>Secure your cargo at SEARATES</p>
                <span>
                  The insurance service is not mandatory for any cargo, but
                  SeaRates always recommends it. And in fact it is beneficial
                  primarily for the owner of the goods (BCO). It compensates for
                  financial losses, which are quite possible both during the
                  transportation process and at the stage of transfer /
                  acceptance of cargo.
                </span>
              </div>
              <div className="sub-grid-items">
                <div className="icon">
                  <img src={ContainersIcon} alt="ContainersIcon" />
                </div>
                <p>What does shippig insurance protect against?</p>
                <span>
                  Each transport company on SeaRates.com assumes obligations for
                  transportation, but their responsibility is clearly regulated,
                  while different situations can always arise along the way.
                  Risks that arise can only be compensated if there is cargo
                  insurance.
                </span>
              </div>
            </div>
            <div className="type-content-alignment">
              <h4>Typically, such risks include</h4>
              <div className="box-center">
                <div className="three-col-grid">
                  <div className="three-col-grid-items">
                    <div className="icon-center">
                      <img src={IconCrashedHouse} alt="IconCrashedHouse" />
                    </div>
                    <span>
                      Intentional or unintentional damage by third parties
                    </span>
                  </div>
                  <div className="three-col-grid-items">
                    <div className="icon-center">
                      <img src={IconPiece} alt="IconPiece" />
                    </div>
                    <span>
                      The acceptance of all or part of the consignment
                    </span>
                  </div>
                  <div className="three-col-grid-items">
                    <div className="icon-center">
                      <img src={IconFire} alt="IconFire" />
                    </div>
                    <span>Fire, natural disaster, catastrophe</span>
                  </div>
                  <div className="three-col-grid-items">
                    <div className="icon-center">
                      <img src={IconMask} alt="IconMask" />
                    </div>
                    <span>Theft as a result of robbery</span>
                  </div>
                  <div className="three-col-grid-items">
                    <div className="icon-center">
                      <img src={IconLightning} alt="IconLightning" />
                    </div>
                    <span>Crash</span>
                  </div>
                  <div className="three-col-grid-items">
                    <div className="icon-center">
                      <img src={IconRobber} alt="IconRobber" />
                    </div>
                    <span>Fraud</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-style">
              <p>INSURANCE COST</p>
              <span>
                The price of insurance depends on the amount of risk it covers.
                Choose one or another option is based on the selected type of
                carriage. Insurance options that are usually offered:
              </span>
              <span>
                By booking a shipment at SeaRates you will receive an
                explanation of all insurance points that will help you make the
                right choice of an insurance policy.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
