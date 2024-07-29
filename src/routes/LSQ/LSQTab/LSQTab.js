import React from "react";
import "./LSQTab.scss";
export default function LSQTab() {
  return (
    <div className="lsq-tab-section">
      <div className="container">
        <div className="lsq-tab-alignment">
          {/* <div className="lsq-tab-box-alignment">
            <p>Business opportunites</p>
          </div> */}
          <div className="lsq-tab-box-alignment">
            <p>About Aaziko.com LSQ</p>
          </div>
          <div className="lsq-tab-box-alignment">
            <p>Why Aaziko.com LSQ</p>
          </div>
          <div className="lsq-tab-box-alignment">
            <p>How it works</p>
          </div>
          <div className="lsq-tab-box-alignment">
            <p>How to use</p>
          </div>
        </div>
      </div>
    </div>
  );
}
