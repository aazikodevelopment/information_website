import React from "react";
import "./HSCode.scss";
export default function HSCode() {
  return (
    <div className="hs-code-section">
      <div className="container">
        <div className="hs-code-alignment">
          <div className="hs-code-heading">
            <h4>HS (Harmonized System)& HTS (Harmonized Tariff System)</h4>
          </div>
          <div className="hs-code-search-alignment">
            <div className="hs-code-search-box-alignment">
              <input
                type="text"
                placeholder="Select Product name or HS ,HTS Code"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="37"
                viewBox="0 0 38 37"
                fill="none"
              >
                <rect
                  x="0.703125"
                  width="36.3509"
                  height="36.3509"
                  rx="8"
                  fill="#00AEEF"
                />
                <path
                  d="M23.9465 21.7594C23.607 21.4343 23.2767 21.0999 22.9557 20.7565C22.6861 20.4826 22.5238 20.2833 22.5238 20.2833L20.4946 19.3144C21.307 18.3931 21.7554 17.2071 21.7556 15.9788C21.7556 13.1824 19.4799 10.9062 16.6825 10.9062C13.885 10.9062 11.6094 13.1824 11.6094 15.9788C11.6094 18.7753 13.885 21.0514 16.6825 21.0514C17.9602 21.0514 19.1248 20.5731 20.0184 19.7912L20.9874 21.8203C20.9874 21.8203 21.1867 21.9826 21.4606 22.2522C21.7411 22.5152 22.11 22.871 22.4637 23.2428L23.4478 24.2515L23.8856 24.7196L25.4227 23.1826L24.9546 22.7449C24.6799 22.4753 24.3132 22.1174 23.9465 21.7594ZM16.6825 19.6021C14.6844 19.6021 13.0588 17.9767 13.0588 15.9788C13.0588 13.981 14.6844 12.3556 16.6825 12.3556C18.6806 12.3556 20.3061 13.981 20.3061 15.9788C20.3061 17.9767 18.6806 19.6021 16.6825 19.6021Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
