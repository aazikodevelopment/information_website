import React, { useEffect } from "react";
import "./Certification.scss";
import Container2 from "../../assets/Image/container2.png";
import ButerflieIcon from "../../assets/icons/buterflie.svg";
import Q1 from "../../assets/icons/q1.svg";
import Q2 from "../../assets/icons/q2.svg";
import Q3 from "../../assets/icons/q3.svg";
import Q4 from "../../assets/icons/q4.svg";
import Q5 from "../../assets/icons/q5.svg";
import Q6 from "../../assets/icons/q6.svg";
import Q7 from "../../assets/icons/q7.svg";
import Q8 from "../../assets/icons/q8.svg";
import CS1 from "../../assets/icons/cs1.svg";
import CS2 from "../../assets/icons/cs2.svg";
import TalkToExpert from "../../components/TalkToExpert";
export default function Certification() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="certification-all-contnet-alignment">
        <div className="container">
          <div className="white-box-design">
            <div className="first-grid">
              <div className="first-grid-items">
                <h1>
                  Certification <br />
                  Services
                </h1>
                <p>
                  Aaziko offers certification services for you if you have the necessary package of documents in a short time and at reasonable
                  prices.
                </p>
                <div className="btn-alignment">
                  <button>Find Quote</button>
                  <a>{`Rate request >>`}</a>
                </div>
              </div>
              <div className="first-grid-items">
                <img src={Container2} alt="Container2" />
              </div>
            </div>
            <div className="center-text-all-content-alignment">
              <p>
                Forwarders at Aaziko.com who operate worldwide, maintain close ties with leading certification entities that have a wide scope of
                accreditation, which allows them to carry out certification of any types of products and in the shortest possible time, thereby
                reducing costs during customs clearance of your cargo. You can obtain the following documents:
              </p>
            </div>
            <div className="three-col-grid">
              <div className="three-col-grid-items">
                <div className="icon-center-alignment">
                  <img src={ButerflieIcon} alt="ButerflieIcon" />
                </div>
                <span>Certificate of compliance with technical regulations</span>
              </div>
              <div className="three-col-grid-items">
                <div className="icon-center-alignment">
                  <img src={Q1} alt="Q1" />
                </div>
                <span>Quality certificate</span>
              </div>
              <div className="three-col-grid-items">
                <div className="icon-center-alignment">
                  <img src={Q2} alt="Q2" />
                </div>
                <span>Other specialized certificates for various types of goods</span>
              </div>
              <div className="three-col-grid-items">
                <div className="icon-center-alignment">
                  <img src={Q3} alt="Q3" />
                </div>
                <span>Sanitary-epidemiological conclusion</span>
              </div>
              <div className="three-col-grid-items">
                <div className="icon-center-alignment">
                  <img src={Q4} alt="Q4" />
                </div>
                <span>Expert opinion on the cost and condition of the goods</span>
              </div>
              <div className="three-col-grid-items">
                <div className="icon-center-alignment">
                  <img src={Q5} alt="Q5" />
                </div>
                <span>Certificate of origin</span>
              </div>
              <div className="three-col-grid-items">
                <div className="icon-center-alignment">
                  <img src={Q6} alt="Q6" />
                </div>
                <span>
                  Quarantine certificates <br /> (both export and import)
                </span>
              </div>
              <div className="three-col-grid-items">
                <div className="icon-center-alignment">
                  <img src={Q7} alt="Q7" />
                </div>
                <span>
                  Development and approval of <br /> specifications (technical conditions)
                </span>
              </div>
              <div className="three-col-grid-items">
                <div className="icon-center-alignment">
                  <img src={Q8} alt="Q8" />
                </div>
                <span>
                  Veterinary documents <br /> (certificates, import permits)
                </span>
              </div>
            </div>

            <div className="certification-details-box-alignment">
              <div className="certification-details-box-border-alignment">
                <div className="cerrification-details-grid-alignment">
                  <div className="certification-all-details">
                    <div>
                      <img src={CS1} alt="CS1" />
                    </div>
                    <p>
                      The timing and cost of certification services depend on the specifics of the product itself, the presence of other certificates
                      and the specifics of the certification tests conducted. The final cost of certification services is determined in each case
                      separately, after examining all aspects of the upcoming certification process.
                    </p>
                  </div>
                  <div className="certification-all-details">
                    <div>
                      <img src={CS2} alt="CS2" />
                    </div>
                    <p>
                      Throughout the work Aaziko.com has gained needed coverage in the field of forwarding related services, and provides customers a
                      full cycle of services for the certification of goods. Aaziko forwarders directly cooperate with the certification authorities
                      in different countries. All this allows us to offer the most timely and high-quality service for the cargo certification without
                      any overpayments
                    </p>
                  </div>
                </div>
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
