import React from "react";
import "./OnlineFreightMarketplace.scss";
import ExploreIcon from "../../../assets/icons/explore-icon-1.svg";
export default function OnlineFreightMarketplace() {
  return (
    <div className="online-freight-marketplace-section">
      <div className="online-freight-marketplace-box">
        <div>
          <img src={ExploreIcon} alt="ExploreIcon" />
        </div>
        <h6>Online Freight Marketplace</h6>
        <p>To see the best market rates, please input place of loading, place of discharge, select the transport mode and click "Search"</p>
      </div>
    </div>
  );
}
