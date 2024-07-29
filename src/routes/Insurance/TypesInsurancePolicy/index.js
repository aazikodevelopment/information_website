import React from "react";
import "./TypesInsurancePolicy.scss";
import TYI1 from "../../../assets/icons/pyi1.svg";
import TYI2 from "../../../assets/icons/pyi2.svg";
import TYI3 from "../../../assets/icons/pyi3.svg";

export default function TypesInsurancePolicy() {
  return (
    <div className="types-insurance-policy-main">
      <div className="container">
        <div className="types-insurance-policy-alignment">
          <div className="types-insurance-heading">
            <h6>Types of Insurance Policy</h6>
          </div>

          <div className="types-insurance-body-alignments">
            <div className="types-insurance-box-alignment">
              <div className="types-insurance-top-heading">
                <div>
                  <img src={TYI1} alt="TYI1" />
                </div>
                <h6>Open Policy</h6>
              </div>
              <div className="types-insurance-list">
                <p>
                  An Annual Open policy in marine insurance offers continuous and comprehensive protection for cargo during multiple shipments
                  throughout the year. It's a convenient and cost-effective choice for businesses engaged in regular shipping, as it covers goods on
                  various trips within the specified one-year period, unlike Single Transit Insurance, which only applies to a single journey.
                </p>
              </div>
            </div>
            <div className="types-insurance-box-alignment second-color">
              <div className="types-insurance-top-heading">
                <div>
                  <img src={TYI2} alt="TYI2" />
                </div>
                <h6>Specific Policy</h6>
              </div>
              <div className="types-insurance-list">
                <p>
                  Single Transit Insurance in marine insurance is a type of coverage that protects goods or cargo during a specific single transit or
                  voyage. It is designed to cover the cargo while it is being transported from one location (the origin) to another location (the
                  destination) via a vessel such as a truck, train, ship or plane.
                </p>
              </div>
            </div>
            <div className="types-insurance-box-alignment third-color">
              <div className="types-insurance-top-heading">
                <div>
                  <img src={TYI3} alt="TYI3" />
                </div>
                <h6>Annual Sales Turn Over Policy</h6>
              </div>
              <div className="types-insurance-list">
                <p>
                  For example, In FY 2023, if a company plans to export goods worth Rs 100 crore and import goods worth Rs 50 crore, they can opt for
                  a STOP policy. The insurance company will calculate the premium based on the Rs 100 crore estimated sales. However, the coverage
                  provided to the insured will be for both the Rs 100 crore export and Rs 50 crore import, totaling Rs 150 crore for potential loss or
                  damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
