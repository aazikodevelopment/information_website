import React from "react";
import Logo from "../../assets/logo/aaziko.png";
import "./logo.scss";
export default function AazikoLogo() {
  return (
    <div className="aaziko-logo">
      <img src={Logo} alt="Logo" />
    </div>
  );
}
