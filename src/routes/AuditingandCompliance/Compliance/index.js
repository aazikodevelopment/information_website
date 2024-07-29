import React from "react";
import "./Compliance.scss";
import Definition from "../../../assets/icons/Definition.svg";
export default function Compliance() {
  return (
    <div>
      <div className="compliance-all-content-alignment">
        <div className="container">
          <div className="title">
            <h6>Compliance</h6>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="icon-center">
                <img src={Definition} alt="Definition" />
              </div>
              <div className="text">
                <p>Definition</p>
                <span>
                  Compliance refers to an organization's adherence to laws,
                  regulations, industry standards, and internal policies that
                  apply to its operations.
                </span>
              </div>
            </div>
            <div className="grid-items">
              <div className="icon-center">
                <img src={Definition} alt="Definition" />
              </div>
              <div className="text">
                <p>Legal Compliance</p>
                <span>
                  Ensuring adherence to local, state, federal, and international
                  laws relevant to the organization's activities.
                </span>
              </div>
            </div>
            <div className="grid-items">
              <div className="icon-center">
                <img src={Definition} alt="Definition" />
              </div>
              <div className="text">
                <p>Regulatory Compliance</p>
                <span>
                  Compliance with industry-specific regulations and standards
                  imposed by government agencies.
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-child">
            <div className="grid-items">
              <div className="icon-center">
                <img src={Definition} alt="Definition" />
              </div>
              <div className="text">
                <p>Ethical Compliance</p>
                <span>
                  Adherence to ethical principles and codes of conduct in
                  business operations.
                </span>
              </div>
            </div>
            <div className="grid-items">
              <div className="icon-center">
                <img src={Definition} alt="Definition" />
              </div>
              <div className="text">
                <p>Internal Compliance</p>
                <span>
                  Following an organization's internal policies and procedures.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
