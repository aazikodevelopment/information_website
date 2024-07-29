import React from "react";
import "./TruckTypes.scss";
import Tyi1Img from "../../assets/Image/tyi1.png";
import Tyi2Img from "../../assets/Image/tyi2.png";
import Tyi3Img from "../../assets/Image/tyi3.png";
import Tyi4Img from "../../assets/Image/tyi4.png";
import Tyi5Img from "../../assets/Image/tyi5.png";
import Tyi6Img from "../../assets/Image/tyi6.png";
import Tyi7Img from "../../assets/Image/tyi7.png";
import Tyi8Img from "../../assets/Image/tyi8.png";
import Tyi9Img from "../../assets/Image/tyi9.png";
import Tyi10Img from "../../assets/Image/tyi10.png";
import Tyi11Img from "../../assets/Image/tyi11.png";
import Tyi12Img from "../../assets/Image/tyi12.png";
export default function TruckTypes() {
  return (
    <div className="truck-types-section">
      <div className="container">
        <div className="truck-types-alignment">
          <div className="truck-types-header">
            <h6>Truck types</h6>
          </div>
          <div className="truck-type-body-alignment">
            <div className="truck-type-body-grid-alignment">
              <div className="truck-type-body-grid-item">
                <div className="truck-type-body-box">
                  <h6>Tilt truck</h6>
                  <div className="turck-type-img">
                    <img src={Tyi1Img} alt="Tyi1Img" />
                  </div>
                  <div className="truck-type-learn-more">
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="truck-type-body-grid-item">
                <div className="truck-type-body-box">
                  <h6>Tautliner (Curtainsider)</h6>
                  <div className="turck-type-img">
                    <img src={Tyi2Img} alt="Tyi1Img" />
                  </div>
                  <div className="truck-type-learn-more">
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="truck-type-body-grid-item">
                <div className="truck-type-body-box">
                  <h6>Conestoga</h6>
                  <div className="turck-type-img">
                    <img src={Tyi3Img} alt="Tyi1Img" />
                  </div>
                  <div className="truck-type-learn-more">
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="truck-type-body-grid-item">
                <div className="truck-type-body-box">
                  <h6>Refrigerator Van</h6>
                  <div className="turck-type-img">
                    <img src={Tyi4Img} alt="Tyi1Img" />
                  </div>
                  <div className="truck-type-learn-more">
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="truck-type-body-grid-item">
                <div className="truck-type-body-box">
                  <h6>Refrigerator truck</h6>
                  <div className="turck-type-img">
                    <img src={Tyi5Img} alt="Tyi1Img" />
                  </div>
                  <div className="truck-type-learn-more">
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="truck-type-body-grid-item">
                <div className="truck-type-body-box">
                  <h6>Isotherm Van</h6>
                  <div className="turck-type-img">
                    <img src={Tyi6Img} alt="Tyi1Img" />
                  </div>
                  <div className="truck-type-learn-more">
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="truck-type-body-grid-item">
                <div className="truck-type-body-box">
                  <h6>Isotherm Van</h6>
                  <div className="turck-type-img">
                    <img src={Tyi7Img} alt="Tyi1Img" />
                  </div>
                  <div className="truck-type-learn-more">
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="truck-type-body-grid-item">
                <div className="truck-type-body-box">
                  <h6>Drop-side platform</h6>
                  <div className="turck-type-img">
                    <img src={Tyi8Img} alt="Tyi1Img" />
                  </div>
                  <div className="truck-type-learn-more">
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="truck-type-body-grid-item">
                <div className="truck-type-body-box">
                  <h6>Open platform</h6>
                  <div className="turck-type-img">
                    <img src={Tyi9Img} alt="Tyi1Img" />
                  </div>
                  <div className="truck-type-learn-more">
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="truck-type-body-grid-item">
                <div className="truck-type-body-box">
                  <h6>Huckepack trailer</h6>
                  <div className="turck-type-img">
                    <img src={Tyi10Img} alt="Tyi1Img" />
                  </div>
                  <div className="truck-type-learn-more">
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="truck-type-body-grid-item">
                <div className="truck-type-body-box">
                  <h6>Mega-trailer</h6>
                  <div className="turck-type-img">
                    <img src={Tyi11Img} alt="Tyi1Img" />
                  </div>
                  <div className="truck-type-learn-more">
                    <a>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="truck-type-body-grid-item">
                <div className="truck-type-body-box">
                  <h6>Jumbo</h6>
                  <div className="turck-type-img">
                    <img src={Tyi12Img} alt="Tyi1Img" />
                  </div>
                  <div className="truck-type-learn-more">
                    <a>LEARN MORE</a>
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
