import React from "react";
import "./TruckTypesParameter.scss";
import TruckImg from "../../assets/Image/psci1.svg";
export default function TruckTypesParameter() {
  return (
    <div className="truck-types-parameter-section">
      <div className="container">
        <div className="truck-types-parameter-alignment">
          <div className="truck-types-parameter-heading">
            <h4>Parameters of sea containers</h4>
          </div>
          <div className="truck-types-parameter-body-alignment">
            <div className="truck-types-parameter-box-alignment">
              <div className="truck-types-parameter-grid-alignment">
                <div className="truck-types-parameter-grid-item-alignment">
                  <h6>Tilt truck</h6>
                  <div className="truck-types-parameter-img">
                    <img src={TruckImg} alt="TruckImg" />
                  </div>
                </div>

                <div className="truck-types-parameter-grid-item-alignment">
                  <div className="truck-types-parameter-right-side-alignment">
                    <div className="child-left-side-alignment">
                      <p>Dimensions</p>
                      <p>may vary</p>
                      <p>Payload</p>
                      <p>15-24 mt</p>
                      <p>Pallets</p>
                      <p>20-33</p>
                    </div>

                    <div className="child-right-side-alignment">
                      <h6>Description</h6>
                      <p>
                        One of the most common trailers and semi-trailer types. The main benefits of "tilts" are their lightweight, variety, capacity,
                        and ease of use. The frame may be disassembled if necessary, and rear, side, and top-loading are all options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
