import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./orderDelivery.scss";
import { ApiGet, ApiPost } from "../../../helpers/API/ApiData";

export default function OrderDelivery(props) {
  const { selectedsubTicket, setQuestionsData, setSelectedCategoryOption } =
    props;
  // const [questionsData , setQuestionsData] = useState([])

  const handleGetQuestions = (e, data) => {
    ApiGet(`common-master/view-sorted-data-without-token?parentId=${data?._id}`)
      .then((res) => {
        setQuestionsData(res?.data?.data);
      })
      .catch((err) => {
        console.log("");
      });
  };

  return (
    <div className="orderTicketMain-section">
      <div className="orderDelivery-section">
        <div className="header-alignment">
          <h4>Order and Delivery</h4>
          {/* <NavLink to="/my-ticket">
                    <button>Create Ticket</button>
                    </NavLink> */}
        </div>
        <div className="orderDelivery-main-box">
          {selectedsubTicket?.items?.map((item) => {
            return (
              <div className="box-alignment">
                <p
                  onClick={(e) => {
                    handleGetQuestions(e, item);
                    setSelectedCategoryOption("IssueWithProcessing");
                  }}
                >
                  {item?.vItemName}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
