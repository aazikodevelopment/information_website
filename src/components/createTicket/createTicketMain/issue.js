import React from "react";
import "./orderDelivery.scss";

export default function Issue(props) {
  const { questionsData ,selectedCategoryOption ,setSelectedCategoryOption ,SetQuestionsselectData} = props;

  return (
    <>
    {questionsData?.length > 0 ?
      questionsData?.map((data) => {
        return (
          <div className="orderTicketMain-section">
            <div className="orderDelivery-section">
              <div className="issue-section">
                <div className="heading-alignment">
                  <h4>{data?.category}</h4>
                </div>
            {data?.items?.map((itemQuestion) => {
                return(
                    <div className="issue-details-section">
                   
                  <div className="issue-details-alignment">
                    {/* <p className="active"> */}
                    <p onClick={(e)=> {
                        SetQuestionsselectData(itemQuestion)
                        setSelectedCategoryOption('IssueWithOrder')
                        }}>
                      {itemQuestion?.vItemName}
                    </p>
                  </div>
                </div>
                );
            })}
              </div>
            </div>
          </div>
        );
      })
      : 
      <div className="orderTicketMain-section">
      <div className="orderDelivery-section">
        <div className="issue-section">
          <div className="heading-alignment">
            <h4>Not Found</h4>
          </div>
        </div>
      </div>
    </div>
      }
    </>
  );
}
