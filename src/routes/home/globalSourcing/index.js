import React from "react";
import "./globalSourcing.scss";
import Icon1 from "../../../assets/icons/ea1.svg";
import Icon2 from "../../../assets/icons/ea2.svg";
import Icon3 from "../../../assets/icons/ea3.svg";
import Icon4 from "../../../assets/icons/ea4.svg";
import Icon5 from "../../../assets/icons/ea5.svg";
import Icon6 from "../../../assets/icons/ea6.svg";
export default function GlobalSourcing() {
  return (
    <div className="global-sourcing-all-contnet-alignment">
      <div className="container">
        <div className="page-title">
          <h4>The Easiest And More Secure Way To Global Sourcing.</h4>
          <p>Just Tell Us What You Want To Buy From India.</p>
        </div>
        <div className="grid">
          <div className="grid-items">
            <div className="icon-style">
              <img src={Icon1} alt="Icon1" />
            </div>
            <h5>Largest </h5>
            <p>
              We have more than 200,000 verified suppliers in our database with
              covering all categories. So your purchase is legitimate and in
              safe hands all the time.
            </p>
          </div>
          <div className="grid-items">
            <div className="icon-style">
              <img src={Icon2} alt="Icon2" />
            </div>
            <h5>Inspections</h5>
            <p>
              We provide a full inspection report before dispatching. After
              completing manufacturing our team will visit manufacturers and
              inspect well properly and send you a full report and also provide
              a lab testing report if needed.
            </p>
          </div>
          <div className="grid-items">
            <div className="icon-style">
            <img src={Icon3} alt="Icon3" />
            </div>
            <h5>Insurance</h5>
            <p>
              We work will the most trusted insurance company. We can provide
              you full insurance till your warehouse.
            </p>
          </div>
          <div className="grid-items">
            <div className="icon-style">
    <img src={Icon4}alt="Icon4"/>
            </div>
            <h5>Payment security</h5>
            <p>
              You will get 100% payment security, Your payment is held by
              http://Aaziko.com and if anything goes wrong then you will get a
              refund of your money.
            </p>
          </div>
          <div className="grid-items">
            <div className="icon-style">
              <img src={Icon5} alt="Icon6"/>
            </div>
            <h5>Logistics</h5>
            <p>
              We have the best logistic network in all ways of transport, so you
              will get the most accurate and best lowest price. we provide door
              to door delivery around the globe.
            </p>
          </div>
          <div className="grid-items">
            <div className="icon-style">
             <img src={Icon6} alt="Icon6"/>
            </div>
            <h5>Customs</h5>
            <p>
              Our expert team do all paperwork regarding customs and to make
              clearance smooth and seamless. And also suggest using the most
              appropriate trade agreement to same money on duties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
