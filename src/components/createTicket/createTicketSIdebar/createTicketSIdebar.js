import React, { useState, useEffect } from "react";
import "./createTicketSIdebar.scss";
import DownArrow from "../../../assets/icons/downArrow.svg";
import { ApiGet, ApiPost } from "../../../helpers/API/ApiData";

export default function CreateTicketSIdebar(props) {
  const {
    selectedCategoryOption,
    handleChangeCategoryOption,
    SetselectedsubTicket,
  } = props;
  const [showChildSidebar, setChildSidebar] = useState(false);
  const [ticketSidebarData, SetTicketSidebarData] = useState([]);
  const [subCategorydata, setSubCategorydata] = useState([]);
  const [keyValue, setKeyValue] = useState("");

  useEffect(() => {
    handleGetTicketSidebar();
  }, []);

  const handleGetTicketSidebar = (e) => {
    ApiGet(
      `common-master/view-sorted-data-by-category-no-token?category=ticket_category`
    )
      .then((res) => {
        SetTicketSidebarData(res?.data?.data[0]?.items);
      })
      .catch((err) => {
        console.log("");
      });
  };

  const handleGetSubcategoryTicket = (e, data) => {
    ApiGet(`common-master/view-sorted-data-without-token?parentId=${data?._id}`)
      .then((res) => {
        setSubCategorydata(res?.data?.data);
        if (res?.data?.data?.length >= 1) {
          handleChangeCategoryOption("OrderDelivery");
          SetselectedsubTicket(res?.data?.data[0]);
        } else {
          handleChangeCategoryOption("Notfound");
        }
      })
      .catch((err) => {
        console.log("");
      });
  };

  return (
    <div className="createTicketSidebar-section">
      <div className="createTicketSidebar-alignment">
        {ticketSidebarData?.map((categorys, index) => {
          return (
            <div className="list-name-alignment">
              <div
                className="list-name"
                onClick={(e) => {
                  setChildSidebar(!showChildSidebar);
                  setKeyValue(categorys?.vItemName);
                  handleGetSubcategoryTicket(e, categorys);
                }}
              >
                <div className="heading-alignment">
                  <h4>{categorys?.vItemName}</h4>
                </div>
                <div className="arrow-alignment">
                  <img src={DownArrow} alt="DownArrow" />
                </div>
              </div>
              {/* {showChildSidebar && ( */}
              {/* {keyValue === categorys?.vItemName && showChildSidebar && (
                <>
                  {subCategorydata?.length > 0 ?
                    subCategorydata?.map((subData) => {
                        SetselectedsubTicket(subData)
                      return (
                        <>
                          {subData?.items?.map((item) => {
                            return (
                              <div className="child-sidebar-details">
                                 <p
                                  className={
                                    selectedCategoryOption ===
                                    item?.vItemName && "active"
                                  }
                                  onClick={() =>{
                                    handleChangeCategoryOption("OrderDelivery")
                                    }
                                  }
                                >
                                  {item?.vItemName}
                                </p>
                               
                              </div>
                            );
                          })}
                        </>
                      );
                    }) 
                : 
                // onClick={(e) =>
                    handleChangeCategoryOption("Notfound")
                //   }
                }
                </>
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
