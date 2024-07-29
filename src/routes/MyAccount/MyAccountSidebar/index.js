import React, { useContext, useEffect, useState } from "react";
import "./MyAccountSidebar.scss";
import ProfileImg from "../../../assets/Image/account-profile-img.svg";
import OrderBox from "../../../assets/icons/my-account-icon.svg";
import ProfileSetting from "../../../assets/icons/profile-icon.svg";
import Wallet from "../../../assets/icons/wallet_icon.svg";
import ChatIcon from "../../../assets/icons/chat-icon.svg";
import LogoutIcon from "../../../assets/icons/log-out-icon.svg";

export default function MyAccountSidebar() {
  return (
    <>
      <div className="last-day-order-sidebar-section">
        <div className="last-day-order-sidebar-alignment">
          <div
            className="person-name-section"
          >
            <div className="profile-details-alignment">
              <div className="person-profile-img">
                <img src={ProfileImg} alt="ProfileImg" />
              </div>
              <div className="person-profile-name">
                <h3>Patty O'Furniture</h3>
              </div>
            </div>
          </div>

          <div className="sidebar-details-alignment">
            <div className="my-order-section-alignment">
              <div className="my-order-details">
                <img src={OrderBox} alt="OrderBox" />
                <div className="heading-alignment">
                  <h4 className={"manage-orders"}>
                    My Orders
                  </h4>
                </div>
              </div>
              <div className="rightArrow-alignment">
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" viewBox="0 0 6 8" fill="none">
                  <path d="M0.967494 6.7026L3.54164 3.95427L0.967494 1.20594C0.708752 0.929687 0.708752 0.483437 0.967494 0.207187C1.22624 -0.0690625 1.6442 -0.0690624 1.90295 0.207187L4.94814 3.45844C5.20688 3.73469 5.20688 4.18094 4.94814 4.45719L1.90294 7.70843C1.6442 7.98468 1.22624 7.98468 0.967494 7.70843C0.715386 7.43218 0.708752 6.97885 0.967494 6.7026Z" fill="#606060" />
                </svg>
              </div>
            </div>
            <div className="accountSetting-alignment">
              <div className="img-alignment">
                <img src={ProfileSetting} alt="ProfileSetting" />
              </div>
              <div className="accountSetting-details-alignment">
                <div className="heading-alignment">
                  <h4>Account Setting</h4>
                </div>

                <div className="setting-option-alignment">
                  <p className={"profile-information active"} >
                    Profile Information
                  </p>
                  <p className={"manage-address"}>
                    Manage Addresses
                  </p>
                  <p>Events</p>
                  <p>Trade Show Event</p>
                </div>
              </div>
            </div>
            <div className="accountSetting-alignment">
              <div className="img-alignment">
                <img src={Wallet} alt="Wallet" />
              </div>
              <div className="accountSetting-details-alignment">
                <div className="heading-alignment">
                  <h4>Account Setting</h4>
                </div>
                <div className="setting-option-alignment">
                  <p>Saved Cards</p>
                  <p>Wallet</p>
                  <p>Referral</p>
                </div>
              </div>
            </div>
            <div className="my-order-section-alignment">
              <div className="my-order-details">
                <img src={ChatIcon} alt="ChatIcon" />
                <div className="heading-alignment">
                  <h4>My Chats</h4>
                </div>
              </div>
              <div className="rightArrow-alignment">
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" viewBox="0 0 6 8" fill="none">
                  <path d="M0.967494 6.7026L3.54164 3.95427L0.967494 1.20594C0.708752 0.929687 0.708752 0.483437 0.967494 0.207187C1.22624 -0.0690625 1.6442 -0.0690624 1.90295 0.207187L4.94814 3.45844C5.20688 3.73469 5.20688 4.18094 4.94814 4.45719L1.90294 7.70843C1.6442 7.98468 1.22624 7.98468 0.967494 7.70843C0.715386 7.43218 0.708752 6.97885 0.967494 6.7026Z" fill="#606060" />
                </svg>
              </div>
            </div>
            <div className="logout-details-section">
              <div className="logout-details-flex">
                <div className="icon-alignment">
                  <img src={LogoutIcon} alt="LogoutIcon" />
                </div>
                <div className="logout-details-alignment">
                  <span>Logout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
