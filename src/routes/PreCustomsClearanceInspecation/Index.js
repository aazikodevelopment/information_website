import React from "react";
import ShipImage from "../../assets/Image/ClearanceImage7.png";
import EnsurComplianceImage from "../../assets/Image/ClearanceImage6.png";
import SecurityImage from "../../assets/Image/ClearanceImage5.png";
import EnvironmentalImage from "../../assets/Image/ClearanceImage3.png";
import PublicImage from "../../assets/Image/ClearanceImage4.png";
import IntellectualImage from "../../assets/Image/ClearanceImage1.png";
import TaxDutyImage from "../../assets/Image/ClearanceImage2.png";

import "./PreCustomsClearanceInspecation.scss"

export default function PreCustomsClearanceInspecation() {
  return (
    <div>
      <div className="container">
        <div className="TowGridAlign">
          <div>
            <h1>Pre-Customs Clearance Inspections</h1>
          </div>
          <div>
            <img src={ShipImage} alt="shipimage" />
          </div>
        </div>
        <div className="TowGridBox">
          <div className="GridBoxDesign">
            <div className="SecondBorder">
              <div>
                <img src={EnsurComplianceImage} alt="EnsurComplianceImage" />
              </div>
            </div>
            <h2>Ensure Compliance</h2>
            <div>
              Verify that the goods meet all regulatory requirements, including product safety standards, labeling, and documentation.
            </div>
          </div>
          <div className="GridBoxDesign">
            <div className="SecondBorder">
              <div>
                <img src={SecurityImage} alt="SecurityImage" />
              </div>
            </div>
            <h2>Security</h2>
            <div>Assess the shipment for any security risks, such as the potential for smuggling or illegal goods.</div>
          </div>
        </div>
        <div className="TowGridBox">
          <div className="GridBoxDesign">
            <div className="SecondBorder">
              <div>
                <img src={PublicImage} alt="PublicImage" />
              </div>
            </div>
            <h2>Public Health and Safety</h2>
            <div>
              Ensure that products, especially food, pharmaceuticals, and hazardous materials, meet safety and quality standards.</div>
          </div>
          <div className="GridBoxDesign">
            <div className="SecondBorder">
              <div>
                <img src={EnvironmentalImage} alt="EnvironmentalImage" />
              </div>
            </div>
            <h2>Environmental Compliance</h2>
            <div>Check for compliance with environmental regulations, such as restrictions on hazardous substances.</div>
          </div>
        </div>
        <div className="TowGridBox">
          <div className="GridBoxDesign">
            <div className="SecondBorder">
              <div>
                <img src={TaxDutyImage} alt="TaxDutyImage" />
              </div>
            </div>
            <h2>Tax and Duty Assessment</h2>
            <div>
              Verify the declared value of goods for accurate assessment of customs duties and taxes.</div>
          </div>
          <div className="GridBoxDesign">
            <div className="SecondBorder">
              <div>
                <img src={IntellectualImage} alt="IntellectualImage" />
              </div>
            </div>
            <h2>Intellectual Property Rights</h2>
            <div>Ensure that imported products do not infringe on intellectual property rights, such as trademarks or patents.</div>
          </div>
        </div>
      </div>
    </div>
  )
}