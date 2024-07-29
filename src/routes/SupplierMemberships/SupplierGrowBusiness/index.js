import React from 'react'
import "./SupplierGrowBusiness.scss";
import PCImg from "../../../assets/Image/pc-img.png";
export default function SupplierGrowBusiness() {
    return (
        <div className="supplier-grow-business-section">
            <div className="container">
                <div className="supplier-grow-business-alignment">
                    <h6>Grow Your Business with a suite of tools built  for you</h6>

                    <div className="supplier-grow-business-all-details">
                        <div className="supplier-grow-business-grid-details">
                            <div className="supplier-grow-businessItem">
                                <div className="supplier-grow-business-child-grid-alignment complete-step ">
                                    <div className="supplier-grow-line-flex-alignment">
                                        <div className="step-round-alignment">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                                <circle cx="18.5" cy="18.5" r="18.5" fill="#00AEEF" />
                                                <path d="M10.793 17.9795L14.8141 23.1276L25.4388 14.6484" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="step-line-alignment">

                                        </div>
                                    </div>
                                    <p>Custom storefront</p>
                                </div>
                                <div className="supplier-grow-business-child-grid-alignment">
                                    <div className="supplier-grow-line-flex-alignment">
                                        <div className="step-round-alignment">
                                            <span>2</span>
                                        </div>
                                        <div className="step-line-alignment">

                                        </div>
                                    </div>
                                    <p>Advertising
                                        tools</p>
                                </div>
                                <div className="supplier-grow-business-child-grid-alignment">
                                    <div className="supplier-grow-line-flex-alignment">
                                        <div className="step-round-alignment">
                                            <span>3</span>
                                        </div>
                                        <div className="step-line-alignment">

                                        </div>
                                    </div>
                                    <p>Data and
                                        Analytics</p>
                                </div>
                                <div className="supplier-grow-business-child-grid-alignment">
                                    <div className="supplier-grow-line-flex-alignment">
                                        <div className="step-round-alignment">
                                            <span>4</span>
                                        </div>
                                    </div>
                                    <p>Customers
                                        support</p>
                                </div>
                            </div>
                            <div className="supplier-grow-businessItem">
                                <div className="supplier-second-grid-alignment">
                                    <div className="supplier-second-left-part-alignment">
                                        <h6>Set Up a store that showcases your brand</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                                        <div className="supplier-learn-more-button-alignment">
                                            <button>Learn more</button>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={PCImg} alt="PCImg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
