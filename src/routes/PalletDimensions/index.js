import React, { useEffect } from "react";
import "./PalletDimensions.scss";
import PMImg from "../../assets/Image/pm-img.png";
import PlImage1 from "../../assets/Image/pli1.png";
import PlImage2 from "../../assets/Image/pli2.png";
import PlImage3 from "../../assets/Image/pli3.png";
import PlImage4 from "../../assets/Image/pli4.png";
import PlImage5 from "../../assets/Image/pli5.png";
import PlImage6 from "../../assets/Image/pli6.png";
import PlImage7 from "../../assets/Image/pli7.png";
import PlImage8 from "../../assets/Image/pli8.png";
export default function PalletDimensions() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="pallet-dimensions-section">
      <div className="container">
        <div className="pallet-dimensions-alignment">
          <div className="pallet-dimensions-heading-alignment">
            <h4>PACKAGING MATERIALS</h4>
          </div>
          <div className="pallet-dimensions-top-details-alignment">
            <div className="pallet-dimensions-top-flex-details">
              <div className="pallet-dimensions-img-alignment">
                <img src={PMImg} alt="PMImg" />
              </div>
              <p>
                A pallet is a flat, (usually wooden) structure that is used for handling transport, storing goods, or shipping freight. Find out more
                details about types of pallets, materials, and measurements below.
              </p>
            </div>
          </div>
          <div className="pallet-dimensions-body-alignment">
            <div className="pallet-dimensions-box-alignment">
              <div className="pallet-dimensions-box-heading-alignment">
                <ul>
                  <li className="list-active">ISO</li>
                  <li>Europe</li>
                  <li>North America</li>
                  <li>Australia</li>
                </ul>
              </div>

              <div className="pallet-dimensions-box-table-alignment table-responsive">
                <table cellPadding={0} cellSpacing={0}>
                  <thead>
                    <tr>
                      <th>
                        <h6>Dimensions</h6>
                        <p>W x L inch</p>
                      </th>
                      <th>
                        <h6>Dimensions</h6>
                        <p>W x L mm</p>
                      </th>
                      <th>
                        <h6>Unused floor space</h6>
                        <p>in40’ Container</p>
                      </th>

                      <th>
                        <h6>Region</h6>
                        <p>Most used in</p>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>40 in x 48 in</td>
                      <td>800 mm x 1200 mm</td>
                      <td>3.7 %</td>
                      <td>North America</td>
                    </tr>
                    <tr>
                      <td>39.37 in x 47,24 in</td>
                      <td>1000 mm x 1200 mm</td>
                      <td>6.7 %</td>
                      <td>Europe, Asiasimilar to 40” x 4”</td>
                    </tr>
                    <tr>
                      <td>45.9 in x 45.9 in</td>
                      <td>1165 mm x 1165 mm</td>
                      <td>8.1 %</td>
                      <td>Australia</td>
                    </tr>
                    <tr>
                      <td>42 in x 42 in</td>
                      <td>1067 mm x 1067 mm</td>
                      <td>11.5 %</td>
                      <td>North America,Europe, Asia</td>
                    </tr>
                    <tr>
                      <td>43.3 in x 43.3 in</td>
                      <td>1100 mm x 1100 mm</td>
                      <td>14 %</td>
                      <td>Asia</td>
                    </tr>
                    <tr>
                      <td>31.5 in x 47.24 in</td>
                      <td>800 mm x 1200 mm</td>
                      <td>15.2 %</td>
                      <td>Europe</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="pallet-dimensions-euro-alignment">
            <h6>Euro pallets 1200mm x 800mm</h6>

            <div className="pallet-dimensions-euro-details-alignment">
              <div className="pallets-dimensions-grid-alignment">
                <div className="pallets-dimensions-grid-item">
                  <div className="pallets-dimensions-child-heading">
                    <span>Container 40' standard</span>
                  </div>

                  <div className="planner-dimensions-box-alignment">
                    <div className="planner-dimention-box-details-alignment">
                      <div>
                        <img src={PlImage1} alt="PlImage1" />
                      </div>
                      <h6>25 pallets</h6>
                    </div>
                    <div className="planner-dimention-box-details-alignment">
                      <div>
                        <img src={PlImage5} alt="PlImage1" />
                      </div>
                      <h6>21 pallets</h6>
                    </div>
                  </div>
                </div>
                <div className="pallets-dimensions-grid-item">
                  <div className="pallets-dimensions-child-heading">
                    <span>Container 40' palletwide 2.5m</span>
                  </div>
                  <div className="planner-dimensions-box-alignment">
                    <div className="planner-dimention-box-details-alignment">
                      <div>
                        <img src={PlImage2} alt="PlImage1" />
                      </div>
                      <h6>25 pallets</h6>
                    </div>
                    <div className="planner-dimention-box-details-alignment">
                      <div>
                        <img src={PlImage6} alt="PlImage1" />
                      </div>
                      <h6>24 pallets</h6>
                    </div>
                  </div>
                </div>
                <div className="pallets-dimensions-grid-item">
                  <div className="pallets-dimensions-child-heading">
                    <span>Container 45' standard</span>
                  </div>
                  <div className="planner-dimensions-box-alignment">
                    <div className="planner-dimention-box-details-alignment">
                      <div>
                        <img src={PlImage3} alt="PlImage1" />
                      </div>
                      <h6>27 pallets</h6>
                    </div>
                    <div className="planner-dimention-box-details-alignment">
                      <div>
                        <img src={PlImage7} alt="PlImage1" />
                      </div>
                      <h6>24 pallets</h6>
                    </div>
                  </div>
                </div>
                <div className="pallets-dimensions-grid-item">
                  <div className="pallets-dimensions-child-heading">
                    <span>Container 45' palletwide 2.5m</span>
                  </div>
                  <div className="planner-dimensions-box-alignment">
                    <div className="planner-dimention-box-details-alignment">
                      <div>
                        <img src={PlImage4} alt="PlImage1" />
                      </div>
                      <h6>33 pallets</h6>
                    </div>
                    <div className="planner-dimention-box-details-alignment">
                      <div>
                        <img src={PlImage8} alt="PlImage1" />
                      </div>
                      <h6>26 pallets</h6>
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
