import React, { useEffect, useState } from "react";
import "./createTicket.scss";
import CreateTicketHeader from "./createTicketHeader/createTicketHeader";
import Issue from "./createTicketMain/issue";
import IssueRelatedSeller from "./createTicketMain/issueRelatedSeller";
import IssueRelatedSellerForm from "./createTicketMain/issueRelatedSellerForm";
import Notfound from "./createTicketMain/notfound";
import OrderDelivery from "./createTicketMain/orderDelivery";
import CreateTicketSIdebar from "./createTicketSIdebar/createTicketSIdebar";

export default function CreateTicket() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  const [selectedCategoryOption, setSelectedCategoryOption] =
    useState("Notfound");
  const [selectedsubTicket, SetselectedsubTicket] = useState([]);
  const [questionsselectData, SetQuestionsselectData] = useState([]);
  const [questionsData, setQuestionsData] = useState([]);
  const [creativesupport, setCreativesupport] = useState([]);

  const handleChangeCategoryOption = (key) => {
    setSelectedCategoryOption(key);
  };

  return (
    <div className="createTicket-section">
      <CreateTicketHeader />

      <div className="createTicket-grid">
        <div>
          <CreateTicketSIdebar
            handleChangeCategoryOption={handleChangeCategoryOption}
            selectedCategoryOption={selectedCategoryOption}
            SetselectedsubTicket={SetselectedsubTicket}
          />
        </div>
        <div>
          {selectedCategoryOption === "OrderDelivery" && (
            <OrderDelivery
              setSelectedCategoryOption={setSelectedCategoryOption}
              selectedsubTicket={selectedsubTicket}
              setQuestionsData={setQuestionsData}
            />
          )}
          {selectedCategoryOption === "IssueWithProcessing" && (
            <Issue
              SetQuestionsselectData={SetQuestionsselectData}
              setSelectedCategoryOption={setSelectedCategoryOption}
              selectedCategoryOption={selectedCategoryOption}
              questionsData={questionsData}
            />
          )}
          {selectedCategoryOption === "IssueWithOrder" && (
            <IssueRelatedSeller
              setSelectedCategoryOption={setSelectedCategoryOption}
              setCreativesupport={setCreativesupport}
              questionsselectData={questionsselectData}
            />
          )}
          {selectedCategoryOption === "IssueRelatedSellerForm" && (
            <IssueRelatedSellerForm creativesupport={creativesupport} />
          )}
          {selectedCategoryOption === "Notfound" && <Notfound />}
        </div>
      </div>
    </div>
  );
}
