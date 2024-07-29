import React, { useEffect } from "react";
import "./CustomsClearance.scss";
import ClearanceImage from "../../../assets/imges/clearance-img.png";
import CCImage from "../../../assets/imges/cc-image.png";
import UserIcon from "../../../assets/icons/user-plus-icon.svg";
import NotificationIcon from "../../../assets/icons/nootification-icon.svg";
import PaymentIcon from "../../../assets/icons/payment-iocn.svg";
import GiftIcon from "../../../assets/icons/gift-icon.svg";
import PaperIcon from "../../../assets/icons/paper-icon.svg";
import TalkToExpert from "../../../components/TalkToExpert";
export default function CustomsClearance() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <div className="customs-clearance-all-content-alignment">
        <div className="container">
          <div className="box">
            <div className="grid">
              <div className="grid-items">
                <p>Customs clearance</p>
                <span>
                  Transportation of bulk, break-bulk, project and heavy cargo, military equipment and other non-standard cargoes that are too big or
                  too heavy for a container (NCL - Non Container Load). Vessel chartering and forwarding ship cargo lots.
                </span>
                <div className="button-text-alignment">
                  <button>Find Quote</button>
                  <a>{`Rate request >> `}</a>
                </div>
              </div>
              <div className="grid-items">
                <div className="image-style">
                  <img src={ClearanceImage} alt="ClearanceImage" />
                </div>
              </div>
            </div>

            <div className="essace-customs-clener-alignment">
              <div className="essace-customs-clener-grid">
                <div className="essace-customs-clener-gridItem">
                  <div className="essace-custom-clener-img">
                    <img src={CCImage} alt="CCImage" />
                  </div>
                </div>
                <div className="essace-customs-clener-gridItem">
                  <div className="essace-custom-clener-all-details">
                    <h6>The essence of customs clearance</h6>
                    <p>
                      In its logistics community, SeaRates has qualified customs brokers who have received appropriate training and have licenses and
                      legal rights to carry out customs clearance on behalf of the customer.
                    </p>

                    <p>
                      The process of customs clearance is better to trust into the hands of qualified logistics providers - this will allow avoiding
                      troubles with the customs authorities. In the case of commercial cargo - incorrect customs clearance threatens with substantial
                      fines and even criminal liability.
                    </p>

                    <div className="essace-button-alignment">
                      <button>Click to explore</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="stages-clener-all-content-alignment">
              <h6>Stages of customs clearance</h6>
              <p>
                Forwarders at SeaRates.com who operate worldwide, maintain close ties with leading certification entities that have a wide scope of
                accreditation, which allows them to carry out certification of any types of products and in the shortest possible time, thereby
                reducing costs during customs clearance of your cargo. You can obtain the following documents:
              </p>
            </div>

            <div className="custom-clener-other-option-alignment">
              <div className="custom-clener-other-option-name">
                <div className="custom-clener-other-option-icon">
                  <img src={UserIcon} alt="UserIcon" />
                </div>
                <p>Registration of importer in the customs authority before the arrival of goods.</p>
              </div>
              <div className="custom-clener-other-option-name">
                <div className="custom-clener-other-option-icon">
                  <img src={NotificationIcon} alt="NotificationIcon" />
                </div>
                <p>Notification of the customs authority upon arrival and prior notification.</p>
              </div>
              <div className="custom-clener-other-option-name">
                <div className="custom-clener-other-option-icon">
                  <img src={PaymentIcon} alt="PaymentIcon" />
                </div>
                <p>Making customs payments (taxes, VAT, duties).</p>
              </div>
              <div className="custom-clener-other-option-name">
                <div className="custom-clener-other-option-icon">
                  <img src={GiftIcon} alt="GiftIcon" />
                </div>
                <p>Waiting for the decision of the customs authority regarding the release of the goods.</p>
              </div>
              <div className="custom-clener-other-option-name">
                <div className="custom-clener-other-option-icon">
                  <img src={PaperIcon} alt="PaperIcon" />
                </div>
                <p>Submission of the customs declaration in electronic or paper form.</p>
              </div>
            </div>

            <div>
                <TalkToExpert />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
