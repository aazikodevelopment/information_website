import React, { useEffect } from "react";
import Logo from "../../assets/logo/aaziko-light.svg";
import "./ComingSoon.scss";
export default function ComingSoon() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="coming-soon-section">
      <div className="comming-soon-box-alignment">
        <div className="coming-soon-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <h4>
          <span>Coming</span> Soon
        </h4>
      </div>
    </div>
  );
}
