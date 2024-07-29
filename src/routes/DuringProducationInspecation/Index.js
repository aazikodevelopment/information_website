import React from "react";
import ProducationImage8 from  "../../assets/Image/Producation8.png";
import Producation7 from  "../../assets/Image/Producation7.png";
import Producation6 from  "../../assets/Image/Producation6.png";
import Producation5 from  "../../assets/Image/Producation5.png";
import Producation4 from  "../../assets/Image/Producation4.png";
import Producation3 from  "../../assets/Image/Producation3.png";
import Producation2 from  "../../assets/Image/Producation2.png";
import Producation1 from "../../assets/Image/Producation1.png";

import "./DuringProducationInspecation.scss";

export default function DuringProducationInspecation() {
    return (
        <div>
            <div className="container">
                <div className="TowGrid">
                    <div className="MessageGrid">
                        <h2>During Production Inspection </h2>
                    </div>
                    <div className="ImageGrid">
                        <img src={ProducationImage8} className="ProducationImage8" alt="" />
                    </div>
                </div>
                <div className="ThreeGrid">
                    <div className="GridBox">
                        <div className="ImageBoxShadow">
                            <img src={Producation7} alt="Producation7" className="AllImageManage" />
                        </div>
                        <div className="Message_Content">
                            <h3>Timing</h3>
                            <div>This can include inspections after the initial setup, during the middle of production, or at other critical points in the process.</div>
                        </div>
                    </div>
                    <div className="GridBox">
                        <div className="ImageBoxShadow">
                            <img src={Producation6} alt="Producation6" className="AllImageManage" />
                        </div>
                        <div className="Message_Content">
                            <h3>Purpose</h3>
                            <div>The primary purpose of DPI is to identify and rectify any production issues early in the manufacturing process.</div>
                        </div>
                    </div>
                    <div className="GridBox">
                        <div className="ImageBoxShadow">
                            <img src={Producation5} alt="Producation5" className="AllImageManage" />
                        </div>
                        <div className="Message_Content">
                            <h3>Scope</h3>
                            <div>DPI involves a detailed inspection of a sample of products from the production batch. </div>
                        </div>
                    </div>
                    <div className="GridBox">
                        <div className="ImageBoxShadow">
                            <img src={Producation4} alt="Producation4" className="AllImageManage" />
                        </div>
                        <div className="Message_Content">
                            <h3>Defect Identification</h3>
                            <div>During DPI, inspectors look for defects, inconsistencies, or deviations from quality standards.</div>
                        </div>
                    </div>
                    <div className="GridBox">
                        <div className="ImageBoxShadow">
                            <img src={Producation3} alt="Producation3" className="AllImageManage" />
                        </div>
                        <div className="Message_Content">
                            <h3>Reporting</h3>
                            <div>The primary purpose of DPI is to identify and rectify any production issues early in the manufacturing process.</div>
                        </div>
                    </div>
                    <div className="GridBox">
                        <div className="ImageBoxShadow">
                            <img src={Producation2} alt="Producation2" className="AllImageManage" />
                        </div>
                        <div className="Message_Content">
                            <h3>Documentation</h3>
                            <div>DPI involves a detailed inspection of a sample of products from the production batch. </div>
                        </div>
                    </div>
                </div>
                <div className="OneGrid">
                    <span className="GridBoxFull">
                        <div className="ImageBoxShadow">
                            <img src={Producation1} alt="Producation1" className="AllImageManage" />
                        </div>
                        <div className="Message_Content">
                            <h3>Documentation</h3>
                            <div>DPI can be cost-effective in the long run by reducing the likelihood of producing a large number <br /> of defective products that would need to be scrapped or reworked.</div>
                        </div>
                    </span>
                </div>
            </div>
            <div className="GetStart_Box">
                <div className="container">
                    <div className="BoxContentCard">
                        <h2>Get started </h2>
                        <div>
                            Embark on an exciting journey of ultimate financial clarity and exceptional compliance with Aaziko.
                            Let's turn your business vision into reality!
                        </div>
                        <div className="Contact_Align">
                            <button>contact us </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}