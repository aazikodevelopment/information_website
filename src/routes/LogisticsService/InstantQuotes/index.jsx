import React from "react";
import "./InstantQuotes.scss";
export default function InstantQuotes() {
  return (
    <div>
      <div className="instant-quotes-all-contnet-alignment">
        <div className="container">
          <div className="text">
            <p>Get instant quotes for multiple shipping modes</p>
          </div>
          <div className="grid">
            <div className="grid-items">
              <p>Less than Container Load (LCL)</p>
              <span>
                LCL is a cost-efficient option for buyers who want to save money
                with ocean freight, but don’t have enough volume to fill an
                entire shipping container.
              </span>
            </div>
            <div className="grid-items">
              <p>Full Container Load (FCL)</p>
              <span>
                FCL orders completely fill a shipping container. This is the
                best option for high-volume orders.
              </span>
            </div>
            <div className="grid-items">
              <p>Air Freight</p>
              <span>
                A middle-ground solution between Air Express and Ocean. Designed
                for lighter freight shipments that are time sensitive but too
                expensive via standard express courier service.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
