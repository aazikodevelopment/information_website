import React from "react";
import "./TypesInsuranceCover.scss";

export default function TypesInsuranceCover() {
  return (
    <div className="types-insurance-cover-main">
      <div className="container">
        <div className="types-insurance-cover-alignment">
          <div className="types-insurance-cover-heading">
            <h4>Types of Insurance Cover</h4>
          </div>

          <div className="types-insurance-cover-body-alignment">
            <div className="types-insurance-cover-grid">
              <div className="types-insurance-cover-grid-item">
                <div className="types-top-box-alignment "></div>
                <div className="types-insurance-cover-box">
                  <h6>Import</h6>
                  <p>
                    Any Kind of import formanywhere in india to anywhere in the world is covered .This policy mostly covers transit modes of Air and
                    Sea
                  </p>
                </div>
              </div>
              <div className="types-insurance-cover-grid-item">
                <div className="types-top-box-alignment "></div>
                <div className="types-insurance-cover-box">
                  <h6>Export</h6>
                  <p>
                    Any Kind of import formanywhere in india to anywhere in the world is covered .This policy mostly covers transit modes of Air and
                    Sea
                  </p>
                </div>
              </div>
              <div className="types-insurance-cover-grid-item">
                <div className="types-top-box-alignment "></div>
                <div className="types-insurance-cover-box">
                  <h6>Inland Marine</h6>
                  <p>Any Kind of transportation of goods mostly by road and rail from anywhere to anywhere in india is covered.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
