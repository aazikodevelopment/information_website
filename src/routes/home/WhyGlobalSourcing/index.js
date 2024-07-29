import React from 'react'
import "./WhyGlobalSourcing.scss";
import InSurceImg from "../../../assets/Image/insurance.png"
import LogisticsImg from "../../../assets/Image/logistic.png"
import MeneyBackImg from "../../../assets/Image/Money-Back-Guarantee.png"
import TradeAgreementsImg from "../../../assets/Image/Trade-Agreements.png"
import InspectionImg from "../../../assets/Image/inspection.png"
export default function WhyGlobalSourcing() {
    return (
        <div className="why-global-all-section-content-alignment">
            <div className="container">

                <div className="why-global-title">
                    <h4>Way To Global Sourcing</h4>
                </div>

                <div className="why-global-all-content-details-alignment">
                    <div className="why-global-all-first-row-alignment">
                        <div className="why-global-first-row-img-alignment">
                            <img src={InSurceImg} alt="InSurceImg" />
                            <p>Insurance</p>
                        </div>

                        <div className="why-global-first-row-img-alignment">
                            <img src={LogisticsImg} alt="LogisticsImg" />
                            <p>logistic </p>
                        </div>
                    </div>
                    <div className="why-global-all-second-row-alignment">
                        <div className="why-global-all-content-second-img-flex-alignment">

                            <div className="why-global-second-row-img-alignment">
                                <img src={MeneyBackImg} alt="MeneyBackImg" />
                            </div>
                            <p>Money Back Guarantee</p>
                        </div>
                        <div className="why-global-all-content-second-img-flex-alignment right-text">
                            <p> Trade Agreements</p>
                            <div className="why-global-second-row-img-alignment">
                                <img src={TradeAgreementsImg} alt="TradeAgreementsImg" />
                            </div>
                        </div>
                    </div>
                    <div className="why-global-all-third-row-alignment">
                        <div className="why-global-third-row-img-alignment">
                            <p>inspection</p>
                            <img src={InspectionImg} alt="InspectionImg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
