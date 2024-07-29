import React from "react";
import "./SurveyServicesCard.scss";
import ServiceImage1 from "../../../../assets/imges/service1.png";
import ServiceImage2 from "../../../../assets/imges/warehouse.png";
export default function SurveyServicesCard() {
  return (
    <div>
      <div className="survey-service-card-all-content-alignment">
        <h6>
          Specialized Research and Production Enterprises offer more than a
          dozen different services, namely:
        </h6>
        <div className="grid">
          <div className="grid-items">
            <div className="image">
              <img src={ServiceImage1} alt="ServiceImage1" />
            </div>
          </div>
          <div className="grid-items">
            <ul>
              <li>
                Conducting laboratory studies of transport characteristics and
                properties of goods;
              </li>
              <li>
                Issuing IMO Certificate on transport characteristics of goods at
                the time of loading and IMO Declaration on cargo with
                recommendations for its safe sea and river transport;
              </li>
              <li>
                Expert inspection of the commodity prior to loading,
                determination of the cargo quality according to the terms of the
                sales contracts (control of labeling, packaging, inspection of
                the cargo for damage or deterioration);
              </li>
              <li>
                Determination of the cargo amount loaded on the vessel using the
                «DRAFT SURVEY» method, and also tally accounting of cargo;
              </li>
              <li>
                Issuing an expert opinion on the seaworthiness of the vessel and
                the compliance of its design and equipment with the
                characteristics of the transported goods;
              </li>
            </ul>
          </div>
        </div>
        <div className="grid">
          <div className="grid-items">
            <ul>
              <li>Issuing Acts of transport units survey;</li>
              <li>
                Development and issuing Certificates about packing of goods in
                containers or vehicles;
              </li>
              <li>
                Development of technical and technological safety measures
                related to the transport of dangerous goods, hazardous
                substances and pollutants - preparing Emergency cards;
              </li>
              <li>
                Examinating goods with the subsequent issuance of cargo
                radioactivity absence certificate;
              </li>
              <li>
                Surveyor inspection of scrap and waste of ferrous and
                non-ferrous metals with the issuance of cargo explosion safety
                certificate;
              </li>
              <li>
                Functions of emergency commissioners — investigating the
                circumstances of accidents, giving an estimate of losses.
              </li>
            </ul>
          </div>
          <div className="grid-items">
            <div className="image">
              <img src={ServiceImage2} alt="ServiceImage2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
