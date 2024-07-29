import React from "react";
import "./OrderManagement.scss";
import LockIcon from "../../../assets/icons/lock.svg";
import PaymentsIcon from "../../../assets/icons/Payments.svg";
import LogisticsIcon from "../../../assets/icons/Logistics.svg";
export default function OrderManagement() {
  return (
    <div>
      <div className="order-management">
        <div className="container">
          <div className="text">
            <span>Order Management</span>
            <h4>Manage every step in one place</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              integer semper morbi ut auctor in dolor.
            </p>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="icon">
                <img src={LockIcon} alt="LockIcon" />
              </div>
              <div className="alignment">
                <span>Protection</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas integer semper morbi ut auctor in dolor.
                </p>
              </div>
            </div>
            <div className="grid-items">
              <div className="icon">
                <img src={PaymentsIcon} alt="PaymentsIcon" />
              </div>
              <div className="alignment">
                <span>Payments</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas integer semper morbi ut auctor in dolor.
                </p>
              </div>
            </div>
            <div className="grid-items">
              <div className="icon">
                <img src={LogisticsIcon} alt="LogisticsIcon" />
              </div>
              <div className="alignment">
                <span>Logistics</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas integer semper morbi ut auctor in dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
