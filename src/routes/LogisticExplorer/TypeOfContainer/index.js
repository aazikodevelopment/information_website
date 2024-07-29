import React from "react";
import "./TypeOfContainer.scss";
export default function TypeOfContainer() {
  return (
    <div className="type-of-container-section">
      <div className="type-of-container-box">
        <h6>Types of container</h6>

        <div className="type-of-container-details">
          <div className="type-of-container-details-option">
            <label class="type-of-container">
              <p> 20' Standard</p>
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="type-of-container-details-option">
            <label class="type-of-container">
              <p> 40' Standard </p>
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="type-of-container-details-option">
            <label class="type-of-container">
              <p> 40' High Cube </p>
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="type-of-container-details-option">
            <label class="type-of-container">
              <p> 20' Refrigerated </p>
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="type-of-container-details-option">
            <label class="type-of-container">
              <p> 40' Refrigerated </p>
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="type-of-container-details-option">
            <label class="type-of-container">
              <p> 45' High Cube </p>    
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
