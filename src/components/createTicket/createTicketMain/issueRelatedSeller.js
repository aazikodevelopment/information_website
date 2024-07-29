import React from 'react'
import "./orderDelivery.scss";
export default function IssueRelatedSeller(props) {
    const {questionsselectData ,setCreativesupport ,setSelectedCategoryOption} = props;

    return (
        <div className="orderTicketMain-section">
            <div className="orderDelivery-section">
                <div className="issue-related-section">
                    <div className="heading-alignment">
                        <h4>{questionsselectData?.vItemName}  </h4>
                    </div>
                    <div className="notes-alignment">
                        <p>Please contact seller support with complete description of your issue.</p>
                    </div>
                    <div className="button-alignment">
                        <button>Yes, My query is solved</button>
                        <button  onClick={(e) => {
                            setCreativesupport(questionsselectData)
                            setSelectedCategoryOption("IssueRelatedSellerForm")
                        }}>No, Create support ticket</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
