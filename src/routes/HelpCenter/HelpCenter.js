import React, { useEffect } from "react";
import "./HelpCenter.scss";
import SearchIcon from "../../assets/icons/header-search-icon.svg";
import DropdownIcon from "../../assets/icons/drop-dorn-icon.svg";
export default function HelpCenter() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="help-center-section">
      <div className="help-center-alignment">
        <div className="container">
          <div className="help-details-alignment">
            <div className="help-center-heading-alignment">
              <h4>Help Center</h4>
            </div>
            <div className="help-center-search-alignment ">
              <img src={SearchIcon} alt="SearchIcon" />
              <input type="text" placeholder="Search Help" />
              <div className="help-center-button">
                <button>Search</button>
              </div>
            </div>

            <div className="help-center-all-details-alignment">
              <div className="help-center-all-details-box">
                <div className="help-center-all-details-grid">
                  <div className="help-center-all-details-sidebar">
                    <ul>
                      <li className="active-sidebar-link">General Questions</li>
                      <li>Tools</li>
                      <li>Pricing & Payments</li>
                      <li>Virtual Office</li>
                      <li>What should I know about SeaRates</li>
                    </ul>
                  </div>

                  <div className="help-center-left-side-alignment">
                    <div className="help-center-list-alignment">
                      <p>What is Aaziko and how does it work?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                    <div className="help-center-list-alignment">
                      <p>What are Aaziko IT tools?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                    <div className="help-center-list-alignment">
                      <p>Does Aaziko provide IT services along with custom software or web development?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                    <div className="help-center-list-alignment">
                      <p>Who is a carrier?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                    <div className="help-center-list-alignment">
                      <p>Who is a DFA member?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                    <div className="help-center-list-alignment">
                      <p>Who is a vendor?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                    <div className="help-center-list-alignment">
                      <p>How do I pay?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                    <div className="help-center-list-alignment">
                      <p>How can I make a booking using a mobile device?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                    <div className="help-center-list-alignment">
                      <p>How can I make a booking using a mobile device?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                    <div className="help-center-list-alignment">
                      <p>How to Locate a Container Terminal in a Specific Port?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                    <div className="help-center-list-alignment">
                      <p>How can I check shipping schedules on Aaziko?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                    <div className="help-center-list-alignment">
                      <p>How can I make a special shipping request?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                    <div className="help-center-list-alignment">
                      <p>How do I ship small parcels weighing up to 50 kg?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>{" "}
                    <div className="help-center-list-alignment">
                      <p>Do I make any commitment by requesting a quote?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                    <div className="help-center-list-alignment">
                      <p>When I make a request or booking, who am I working with?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                    <div className="help-center-list-alignment">
                      <p>Is it necessary for me to insure my load?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                    <div className="help-center-list-alignment">
                      <p>How do I change or delete a request that has already been submitted?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                    <div className="help-center-list-alignment">
                      <p>What should I do if there is no instant freight rate available?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                    <div className="help-center-list-alignment">
                      <p>What is included in the rate?</p>
                      <div className="help-center-down-alignment">
                        <img src={DropdownIcon} alt="DropdownIcon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
