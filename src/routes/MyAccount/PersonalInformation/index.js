import React, { useContext, useEffect, useState } from "react";
import "./PersonalInformation.scss";
import EditIcon from "../../../assets/icons/edit-pencil-icon.svg";
export default function PersonalInformation() {
  return (
    <div className="personainformation-form-alignment">
      <div className="personainformation-details-heading">
        <div className="informationheading-alignment">
          <p>Personal Information</p>
        </div>
        <div className="cancle-alignment">
          <img src={EditIcon} alt="EditIcon" />
          <span>
            Edit
          </span>
        </div>
      </div>

      <>
        <div className="personal-details-input-alignmant">
          <div className="input-alignment">
            <input
              type="text"
              placeholder="Patty"
              name="firstName"
            />
          </div>
          <div className="input-alignment">
            <input
              type="text"
              placeholder="O’Furniture"
              name="lastName"
            />
          </div>
        </div>

        <div className="gender-details-alignment">
          <div className="gender-heading-alignment">
            <h6>Your Gender</h6>
          </div>
          <div className="gender-option-alignment">
            <div className="gender-option-details">
              <input
                type="radio"
                value="male"
                name="gender"
                id="male"
              />
              <label for="male">Male</label>
            </div>
            <div className="gender-option-details">
              <input
                type="radio"
                value="female"
                name="gender"
                id="female"
              />
              <label for="female">Female</label>
            </div>
          </div>
        </div>
      </>

      <div className="emailAddress-alignment">
        <div className="emailAddress-details-alignment">
          <div className="emailAddressdetails-name">
            <p>Email Address</p>
          </div>
          <div className="cancle-alignment">
            <img src={EditIcon} alt="EditIcon" />
            <span>
              Edit
            </span>
          </div>

          <div
            className="cancle-alignment"
          >
            <span>Change Passwords</span>
          </div>
        </div>


        <div className="emailAddress-details-input-alignmant">
          <div className="input-alignment">
            <input
              type="text"
              name="emailId"
              placeholder="Aaziko@gmail.com"
            />
          </div>
        </div>
      </div>
      <div className="emailAddress-alignment">
        <div className="emailAddress-details-alignment">
          <div className="emailAddressdetails-name">
            <p>Phone Number</p>
          </div>
          <div className="cancle-alignment" >
            <img src={EditIcon} alt="EditIcon" />
            <span> Edit</span>
          </div>
        </div>


        <div className="emailAddress-details-input-alignmant">
          <div className="input-alignment">
            <input
              type="text"
              placeholder="+915896523658"
            />
          </div>
        </div>

      </div>

      <div className="faqS-alignment">
        <div className="faqs-heading">
          <h4>FAQs</h4>
        </div>

        <div className="faqs-details-alignment">
          <div className="faqs-question-alignment">
            <h6>
              What happens when I update my email address (or mobile number)?
            </h6>
            <span>
              Your login email id (or mobile number) changes, likewise. You'll
              receive all your account related communication on your updated
              email address (or mobile number).
            </span>
          </div>
          <div className="faqs-question-alignment">
            <h6>
              When will my Flipkart account be updated with the new email
              address (or mobile number)?
            </h6>
            <span>
              It happens as soon as you confirm the verification code sent to
              your email (or mobile) and save the changes.
            </span>
          </div>
          <div className="faqs-question-alignment">
            <h6>
              What happens to my existing Flipkart account when I update my
              email address (or mobile number)?
            </h6>
            <span>
              Updating your email address (or mobile number) doesn't invalidate
              your account. Your account remains fully functional. You'll
              continue seeing your Order history, saved information and personal
              details.
            </span>
          </div>
          <div className="faqs-question-alignment">
            <h6>
              Does my Seller account get affected when I update my email
              address?
            </h6>
            <span>
              Aaziko has a 'single sign-on' policy. Any changes will reflect in
              your Seller account also.
            </span>
          </div>
        </div>
      </div>


    </div>
  );
}
