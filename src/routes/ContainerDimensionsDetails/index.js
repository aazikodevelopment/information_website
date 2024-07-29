import React, { useEffect } from "react";
import "./ContainerDimensionsDetails.scss";
import DImage from "../../assets/Image/di1.png";
export default function ContainerDimensionsDetails() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="container-dimensions-details-section">
      <div className="container">
        <div className="container-dimensions-details-alignment">
          <div className="container-dimensions-details-heading-alignment">
            <h4>Parameters of sea containers</h4>
          </div>

          <div className="container-dimensions-details-body-alignment">
            <div className="container-dimensions-details-grid">
              <div className="container-dimensions-details-grid-item">
                <div className="type-heading">
                  <h5>20' STANDARD</h5>
                </div>
                <div className="container-dimensions-details-img">
                  <img src={DImage} alt="DImage" />
                </div>
              </div>
              <div className="container-dimensions-details-grid-item">
                <div className="container-dimensions-details-right-side-details">
                  <div className="container-dimensions-details-right-side-grid">
                    <div className="container-dimensions-details-right-side-grid-item">
                      <p>INSIDE LENGTH:</p>
                    </div>
                    <div className="container-dimensions-details-right-side-grid-item">
                      <p>5.895 m</p>
                    </div>
                  </div>

                  <div className="container-dimensions-details-right-side-grid">
                    <div className="container-dimensions-details-right-side-grid-item">
                      <p>INSIDE WIDTH:</p>
                    </div>
                    <div className="container-dimensions-details-right-side-grid-item">
                      <p>2.350 m</p>
                    </div>
                  </div>
                  <div className="container-dimensions-details-right-side-grid">
                    <div className="container-dimensions-details-right-side-grid-item">
                      <p>INSIDE HEIGHT:</p>
                    </div>
                    <div className="container-dimensions-details-right-side-grid-item">
                      <p>5.895 m</p>
                    </div>
                  </div>
                  <div className="container-dimensions-details-right-side-grid">
                    <div className="container-dimensions-details-right-side-grid-item">
                      <p>DOOR WIDTH:</p>
                    </div>
                    <div className="container-dimensions-details-right-side-grid-item">
                      <p>5.895 m</p>
                    </div>
                  </div>
                  <div className="container-dimensions-details-right-side-grid">
                    <div className="container-dimensions-details-right-side-grid-item">
                      <p>DOOR HEIGHT:</p>
                    </div>
                    <div className="container-dimensions-details-right-side-grid-item">
                      <p>5.895 m</p>
                    </div>
                  </div>
                  <div className="container-dimensions-details-right-side-grid">
                    <div className="container-dimensions-details-right-side-grid-item">
                      <p>CAPACITY:</p>
                    </div>
                    <div className="container-dimensions-details-right-side-grid-item">
                      <p>5.895 m</p>
                    </div>
                  </div>
                  <div className="container-dimensions-details-right-side-grid">
                    <div className="container-dimensions-details-right-side-grid-item">
                      <p>TARE WEIGHT:</p>
                    </div>
                    <div className="container-dimensions-details-right-side-grid-item">
                      <p>5.895 m</p>
                    </div>
                  </div>
                  <div className="container-dimensions-details-right-side-grid">
                    <div className="container-dimensions-details-right-side-grid-item">
                      <p>MAX CARGO WEIGHT:</p>
                    </div>
                    <div className="container-dimensions-details-right-side-grid-item">
                      <p>5.895 m</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-dimensions-details-description-alignment">
              <div className="description-heading">
                <h5>Description</h5>
              </div>

              <div className="description-all-details-alignment">
                <p>Standard containers are also known as general purpose containers</p>
                <p>
                  They are closed containers, i.e. they are closed on all sides. A distinction may be drawn between the following types of standard
                  container:
                </p>

                <ul>
                  <li>Standard containers with doors at one or both end(s</li>
                  <li>Standard containers with doors at one or both end(s) and doors over the entire length of one or both sides</li>
                  <li>Standard containers with doors at one or both end(s) and doors on one or both sides</li>
                </ul>

                <p>
                  In addition, the various types of standard container also differ in dimensions and weight, resulting in a wide range of standard
                  containers.
                </p>
                <p>
                  Standard containers are mainly used as 20' and 40' containers. Containers with smaller dimensions are very seldom used. Indeed, the
                  trend is towards even longer dimensions, e.g. 45'.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
