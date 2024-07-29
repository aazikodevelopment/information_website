import React from 'react'
import "./createTicketHeader.scss";
import Search from "../../../assets/icons/searchIcon.svg";
export default function CreateTicketHeader() {
    return (
        <div className="createTicketHeader-section">
            <div className="createTicketHeader-alignment">
                <div className="heading-alignment">
                    <h1>Create Ticket</h1>
                </div>
                <div className="input-alignment">
                    <input type="text" placeholder="Search your queries"/>
                    <button><img src={Search} alt="Search"/> Search</button>
                </div>
            </div>
        </div>
    )
}
