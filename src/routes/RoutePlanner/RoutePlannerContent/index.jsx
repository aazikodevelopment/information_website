import React from "react";
import "./RoutePlannerContent.scss";
import ChartIcon from "../../../assets/icons/chart-icon.svg";
import DashboardIcon from "../../../assets/icons/dashboard.svg";
import VideoImage from "../../../assets/imges/video-image.png";
export default function RoutePlannerContent() {
  return (
    <div>
      <div className="route-planner-contnet-all-alignment">
        <div className="container">
          <div className="grid">
            <div className="grid-items">
              <div className="icon">
                <div className="chart-icons">
                  <img src={ChartIcon} alt="ChartIcon" />
                </div>
                <p>What’s a Route Planner?</p>
                <span>
                  It is an international transport route planning system.{" "}
                  {`It’s`}
                  built for plotting routes on the map and specifying necessary
                  transit details and dates. Route Planner gives visual feedback
                  for your logistics process.
                </span>
              </div>
            </div>
            <div className="grid-items">
              <div className="icon">
                <div className="chart-icons">
                  <img src={DashboardIcon} alt="DashboardIcon" />
                </div>
                <p>Who is it for?</p>
                <span>
                  The tool is developed for carriers, agents, freight forwarders
                  and shipbrokers. It helps you plot shipments and provide your
                  customers with automatic service updates.{`)`}
                </span>
              </div>
            </div>
            <div className="grid-items">
              <div className="icon">
                <div className="chart-icons">
                  <img src={DashboardIcon} alt="DashboardIcon" />
                </div>
                <p>How to use it?</p>
                <span>
                  SeaRates users can use the Route Planner from our website
                  without limit. We also offer installing it on other websites
                  and have plans for providing routes and customer feedback
                  intended for commercial use.
                </span>
              </div>
            </div>
          </div>
          <div className="text-grid">
            <div className="text-grid-items">
              <h6>Easily plan your logistics</h6>
              <p>
                Meet Route Planner. It will help you with scheduling and
                tracking shipments and transport directly from your page. To
                organize your shipment simply input the number of your
                container, add loading and discharge points and specify your
                prefered route. The results will be displayed on the map. Plan
                transportation efficiently!
              </p>
              <ul>
                <li>Shipment information displayed on the world map.</li>
                <li>Providing more advanced information to your clients.</li>
                <li>No more using competitors sites to track the container.</li>
                <li>High level of costumer service.</li>
                <li>Access from any computer and mobile device.</li>
              </ul>
            </div>
            <div className="text-grid-items">
              <h6>Track your vital data</h6>
              <p>
                Route Planner users integrate Container Tracking to determine
                location of the container, set ports of transshipment on the map
                and update transit times. You can also combine it with Logistics
                Explorer in order to create custom routes with your own pricing!
              </p>
              <ul>
                <li>
                  Automatically update the position of your container on the
                  map.
                </li>
                <li>Unique booking numeration.</li>
                <li>
                  Impress your clients by providing them with complete
                  information.
                </li>
              </ul>
            </div>
          </div>
          <div className="ready-content">
            <h6>Ready to use Route Planner?</h6>
            <div className="btn-center">
              <button>Contact Sales</button>
            </div>
            <div className="video-image">
              <img src={VideoImage} alt="VideoImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
