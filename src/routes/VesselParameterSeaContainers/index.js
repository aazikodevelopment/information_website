import React, { useEffect } from "react";
import "./VesselParameterSeaContainers.scss";
import ContainerImg from "../../assets/Image/img.png";
import PCIImg from "../../assets/Image/pci1.png";
export default function VesselParameterSeaContainers() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="vessel-parameter-sea-containers-section">
      <div className="container">
        <div className="vessel-parameter-sea-containers-alignment">
          <div className="vessel-paramenter-sea-container-heading">
            <h4>Parameters of sea containers</h4>
          </div>

          <div className="vessel-parameter-sea-container-body">
            <div className="vessel-parameter-sea-container-box">
              <div className="vessel-parameter-sea-top-details-alignment">
                <div className="vessel-parameter-sea-left-side-alignment">
                  <h6>General cargo</h6>

                  <div className="vessel-parameter-sea-img-alignment">
                    <img src={ContainerImg} alt="ContainerImg" />
                  </div>
                </div>
                <div className="vessel-paramenter-right-side-alignment">
                  <h5>Description</h5>
                  <p>
                    General cargo vessels (or Multi-purpose vessels) are the most common. Their versatility makes it possible to carry a variety of
                    cargo at the same time like bulk cargo, dangerous cargo, refrigerated cargo, and containers. The size of the general cargo vessels
                    is between 5,000 and 25,000-ton deadweight (DWT). Modern general cargo vessels have two decks and they are called "twindeckers".
                    General cargo vessels have the capacity to carry about 30-40 tons SWL.
                  </p>
                </div>
              </div>

              <div className="vessel-paramenter-sea-bottom-details-alignment">
                <div className="vessel-paramenter-sea-bottom-grid">
                  <div className="vessel-paramenter-sea-bottom-grid-item">
                    <div className="vessel-paramenter-sea-bottom-left-side">
                      <h5>Coaster</h5>
                      <div className="vessel-paramenter-sea-all-child-details">
                        <div className="vessel-paramenter-sea-other-details">
                          <h6>DWT</h6>
                          <p>500-15000 t</p>
                        </div>
                        <div className="vessel-paramenter-sea-other-details">
                          <h6>Draught, m</h6>
                          <p>10.2 m</p>
                        </div>
                        <div className="vessel-paramenter-sea-other-details">
                          <h6>LOA, m</h6>
                          <p>179.9 m</p>
                        </div>
                        <div className="vessel-paramenter-sea-other-details">
                          <h6>Beam, m</h6>
                          <p>28.4 m</p>
                        </div>
                        <div className="vessel-paramenter-sea-other-details">
                          <h6>Geared (Yes/No)</h6>
                          <p>Yes</p>
                        </div>
                        <div className="vessel-paramenter-sea-other-details">
                          <h6>Number of Holds</h6>
                          <p>5</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vessel-paramenter-sea-bottom-grid-item">
                    <div>
                      <img src={PCIImg} alt="PCIImg" />
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
