import React from "react";
import "./SurveyServicesDetails.scss";
import ServiceImage from "../../../../assets/imges/service.png";
import Icon1 from "../../../../assets/icons/1.svg";
import Icon2 from "../../../../assets/icons/2.svg";
import Icon3 from "../../../../assets/icons/3.svg";
import Icon4 from "../../../../assets/icons/4.svg";
import Icon5 from "../../../../assets/icons/5.svg";
import Icon6 from "../../../../assets/icons/6.svg";
import Icon7 from "../../../../assets/icons/7.svg";
import Icon8 from "../../../../assets/icons/8.svg";
import SurveyServicesCard from "../SurveyServicesCard";
import TalkToExpert from "../../../../components/TalkToExpert";
export default function SurveyServicesDetails() {
  return (
    <div>
      <div className="survey-servuces-details-all-content-alignment">
        <div className="container">
          <div className="box">
            <div className="grid">
              <div className="grid-items">
                <h4>Survey Services</h4>
                <span>
                  Survey is an important stage in cargo delivery, especially sea
                  transport. The essence of the service is that forwarder’s
                  specialists carefully inspect the transport, the cargo itself,
                  the integrity of its packaging and other aspects that may
                  affect safety.
                </span>
                <div className="button-text-alignment">
                  <button>Find Quote</button>
                  <a>{`Rate request >> `}</a>
                </div>
              </div>
              <div className="grid-items">
                <div className="image-style">
                  <img src={ServiceImage} alt="ServiceImage" />
                </div>
              </div>
            </div>
            <div className="center-text">
              <p>Scope of survey services available within SeaRates</p>
              <span>
                The range of services in this area is quite wide, because there
                are different transportation options, and the cargo may have
                different characteristics.
              </span>
            </div>
            <div className="searate-all-content">
              <h5>
                SeaRates logistics community provides the world coverage of the
                following services
              </h5>
              <div className="card-grid">
                <div className="card-grid-items">
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={Icon1} alt="Icon1" />
                    </div>
                    <div className="icon-grid-items">
                      <span>
                        Inspection of cargo, photographing, video filming as
                        necessary. The purpose of the inspection is to detect
                        inconsistencies in the actual information about the
                        cargo and the data specified in the documents.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-grid-items">
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={Icon2} alt="Icon2" />
                    </div>
                    <div className="icon-grid-items">
                      <span>
                        The specific possibilities of the surveyor can be found
                        by contacting us external-link and describing the type
                        of cargo and the intended type of vehicle for
                        transportation.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-grid-items">
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={Icon3} alt="Icon3" />
                    </div>
                    <div className="icon-grid-items">
                      <span>
                        Control of the process of loading / unloading . The
                        quality control process is carried out according to
                        regulatory documents.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-grid-items">
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={Icon4} alt="Icon4" />
                    </div>
                    <div className="icon-grid-items">
                      <span>
                        Batch inspection before shipment. Check production
                        procedures and quality of the “first batch” of product
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-grid-items">
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={Icon5} alt="Icon5" />
                    </div>
                    <div className="icon-grid-items">
                      <span>
                        Securing cargo on the selected type of transport. A
                        properly laid cargo implies its stability, ensuring the
                        safety of people nearby, as well as free access to fire
                        equipment.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-grid-items">
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={Icon6} alt="Icon6" />
                    </div>
                    <div className="icon-grid-items">
                      <span>
                        Advisory services for the transport of dangerous goods
                        of any type. SeaRates provides customer advisory
                        services and offers optimal conditions for the transport
                        of goods.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-grid-items">
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={Icon8} alt="Icon8" />
                    </div>
                    <div className="icon-grid-items">
                      <span>
                        Examination by an independent expert. This is necessary
                        in case of an insured event in the event of an accident
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="last-text">
                <p>
                    The range of services in this area is quite wide, because there are different transportation options, and the cargo may have different characteristics.The range of services in this area is quite wide, 
                    because there are different transportation options, and the cargo may have different characteristics.
                </p>
                <div className="button-center">
                    <button>View services</button>
                </div>
            </div>
            <SurveyServicesCard/>
            <TalkToExpert/>
          </div>
        </div>
      </div>
    </div>
  );
}
