import React from "react";
import "./LSQSearch.scss";
import SearchIcon from "../../../assets/icons/search-2-icon.svg";
export default function LSQSearch() {
  return (
    <div className="lsq-search-section">
      <div className="container">
        <div className="lsq-searct-box">
          <div className="lsq-search-left-side">
            <h6>Add industry and find your business opportunity</h6>
          </div>
          <div className="lsq-search-right-side">
            <div className="lsq-search-box-alignment">
              <input type="text" placeholder="Please select" />
            </div>

            <div className="lsq-search-other-box-alignment">
              <button>Search</button>
              {/* <div className="search-icon-alignment">
                <img src={SearchIcon} alt="SearchIcon" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
