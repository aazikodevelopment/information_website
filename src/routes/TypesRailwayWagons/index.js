import React, { useEffect } from "react";
import "./TypesRailwayWagons.scss";
import RW1 from "../../assets/Image/rw-1.png";
import RW2 from "../../assets/Image/rw-2.png";
import RW3 from "../../assets/Image/rw-3.png";
import RW4 from "../../assets/Image/rw-4.png";
import RW5 from "../../assets/Image/rw-5.png";
import RW6 from "../../assets/Image/rw-6.png";
import RW7 from "../../assets/Image/rw-7.png";
import RW8 from "../../assets/Image/rw-8.png";
import RW9 from "../../assets/Image/rw-9.png";
import RW10 from "../../assets/Image/rw-10.png";
import RW11 from "../../assets/Image/rw-11.png";
import RW12 from "../../assets/Image/rw-12.png";
export default function TypesRailwayWagons() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="types-railway-wagons-section">
      <div className="container">
        <div className="types-railway-wagons-alignment">
          <div className="types-railway-wagons-heading">
            <h4>Types of railway wagons</h4>
          </div>

          <div className="types-railway-wagons-body">
            <div className="types-railway-wagons-body-alignment">
              <div className="types-railway-wagons-body-grid">
                <div className="types-railway-wagons-body-grid-item">
                  <div className="types-railway-wagons-body-box">
                    <h6>Four-axle covered wagon (with metal front wall)</h6>

                    <div className="types-raiway-wagon-img">
                      <img src={RW1} alt="RW1" />
                    </div>

                    <div className="types-raiway-wagon-list-name">
                      <ul>
                        <li>Loading capacity: 66 ton</li>
                        <li>Tare weight: 23 ton</li>
                        <li>Volume: 120 m3</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="types-railway-wagons-body-grid-item">
                  <div className="types-railway-wagons-body-box">
                    <h6>Four-axle covered wagon with broadened doorways</h6>

                    <div className="types-raiway-wagon-img">
                      <img src={RW2} alt="RW1" />
                    </div>

                    <div className="types-raiway-wagon-list-name">
                      <ul>
                        <li>Loading capacity: 68 ton</li>
                        <li>Tare weight: 24 ton</li>
                        <li>Volume: 120 m3</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="types-railway-wagons-body-grid-item">
                  <div className="types-railway-wagons-body-box">
                    <h6>Four-axle covered wagon</h6>

                    <div className="types-raiway-wagon-img">
                      <img src={RW3} alt="RW1" />
                    </div>

                    <div className="types-raiway-wagon-list-name">
                      <ul>
                        <li>Loading capacity: 68 ton</li>
                        <li>Tare weight: 22.28 ton</li>
                        <li>Volume: 120 m3</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="types-railway-wagons-body-grid-item">
                  <div className="types-railway-wagons-body-box">
                    <h6>Four-axle covered wagon</h6>

                    <div className="types-raiway-wagon-img">
                      <img src={RW4} alt="RW1" />
                    </div>

                    <div className="types-raiway-wagon-list-name">
                      <ul>
                        <li>Loading capacity: 50 ton</li>
                        <li>Tare weight: 35 ton</li>
                        <li>Volume: 120 m3</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="types-railway-wagons-body-grid-item">
                  <div className="types-railway-wagons-body-box">
                    <h6>Four-axle covered wagon with connecting gangway </h6>

                    <div className="types-raiway-wagon-img">
                      <img src={RW5} alt="RW1" />
                    </div>

                    <div className="types-raiway-wagon-list-name">
                      <ul>
                        <li>Loading capacity: 68 ton</li>
                        <li>Tare weight: 25 ton</li>
                        <li>Volume: 81 m3 (114 m3 - with roof’s volume)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="types-railway-wagons-body-grid-item">
                  <div className="types-railway-wagons-body-box">
                    <h6>Four-axle covered 2-storied livestock wagon</h6>

                    <div className="types-raiway-wagon-img">
                      <img src={RW6} alt="RW1" />
                    </div>

                    <div className="types-raiway-wagon-list-name">
                      <ul>
                        <li>Loading capacity: 22 ton</li>
                        <li>Tare weight: 25.4 ton</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="types-railway-wagons-body-grid-item">
                  <div className="types-railway-wagons-body-box">
                    <h6>Four-axle covered all-metal wagon for automobiles</h6>

                    <div className="types-raiway-wagon-img">
                      <img src={RW7} alt="RW1" />
                    </div>

                    <div className="types-raiway-wagon-list-name">
                      <ul>
                        <li>Loading capacity: 42 ton</li>
                        <li>Tare weight: 42 ton</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="types-railway-wagons-body-grid-item">
                  <div className="types-railway-wagons-body-box">
                    <h6>Four-axle hopper wagon for cement</h6>

                    <div className="types-raiway-wagon-img">
                      <img src={RW8} alt="RW1" />
                    </div>

                    <div className="types-raiway-wagon-list-name">
                      <ul>
                        <li>Loading capacity: 67 ton</li>
                        <li>Tare weight: 18.5 ton</li>
                        <li>Volume: 55 m3</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="types-railway-wagons-body-grid-item">
                  <div className="types-railway-wagons-body-box">
                    <h6>Four-axle covered hopper wagon for grain</h6>

                    <div className="types-raiway-wagon-img">
                      <img src={RW9} alt="RW1" />
                    </div>

                    <div className="types-raiway-wagon-list-name">
                      <ul>
                        <li>Loading capacity: 65 ton</li>
                        <li>Tare weight: 22 ton</li>
                        <li>Volume: 93 m3</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="types-railway-wagons-body-grid-item">
                  <div className="types-railway-wagons-body-box">
                    <h6>Four-axle covered hopper/wagon for mineral fertilizers</h6>

                    <div className="types-raiway-wagon-img">
                      <img src={RW10} alt="RW1" />
                    </div>

                    <div className="types-raiway-wagon-list-name">
                      <ul>
                        <li>Loading capacity: 72 ton</li>
                        <li>Tare weight: 28 ton</li>
                        <li>Volume: 146 m3</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="types-railway-wagons-body-grid-item">
                  <div className="types-railway-wagons-body-box">
                    <h6>Four-axle wagon for granular polymer</h6>

                    <div className="types-raiway-wagon-img">
                      <img src={RW11} alt="RW1" />
                    </div>

                    <div className="types-raiway-wagon-list-name">
                      <ul>
                        <li>Loading capacity: 60 ton</li>
                        <li>Tare weight: 24 ton</li>
                        <li>Volume: 130 m3</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="types-railway-wagons-body-grid-item">
                  <div className="types-railway-wagons-body-box">
                    <h6>Four-axle wagon for granular polymer</h6>

                    <div className="types-raiway-wagon-img">
                      <img src={RW12} alt="RW1" />
                    </div>

                    <div className="types-raiway-wagon-list-name">
                      <ul>
                        <li>Loading capacity: 66 ton</li>
                        <li>Tare weight: 23 ton</li>
                        <li>Volume: 120 m3</li>
                      </ul>
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
