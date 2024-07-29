import React from "react";
import "./RoutePlannerMap.scss";
import RouteIcon from '../../../assets/icons/route.svg';
export default function RoutePlannerMap() {
  return (
    <div>
      <div className="route-planner-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709476661!2d72.73989540440776!3d21.159340298484807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1682925258720!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="white-box">
            <div className="icon-center">
                <img src={RouteIcon}alt="RouteIcon"/>
            </div>
            <h6>Route Planner</h6>
            <div className="btn-center">
                <button>Sign in to continue...</button>
            </div>
        </div>
      </div>
    </div>
  );
}
