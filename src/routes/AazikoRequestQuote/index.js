import React, { useEffect } from 'react'
import "./AazikoRequestQuote.scss";
import InspectionCard from "../../assets/Image/Hazardous.png";
import Hazardous from "../../assets/Image/Hazardous.png";
import Perishable from "../../assets/Image/Perishable.png";
import Oversized from "../../assets/Image/Oversized.png";
import liquid from "../../assets/Image/liquid.png";
import Home from "../../assets/icons/Home.png";
export default function AazikoRequestQuote() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className="aaziko-request-quote-section">
            <div className="container">
                <div className="inspectionServiceAlignment">
                    <div className="headingAlignment">
                        <div className="nameCardAlignment">
                            <h1>Request a quote</h1>
                            <img src={InspectionCard} alt="InspectionCard" />
                        </div>
                        <div className="internationalAlignment">
                            <span>International (SI)</span>
                            {/* <img src={dropdownArrow} alt="dropdownArrow" /> */}
                        </div>
                    </div>
                    <div className="requestNoteAlignment">
                        <span>And get the best rates from the leading logistics providers.</span>
                    </div>
                    <div className="signinDetailsNoteAlignment">
                        <span>If you have an account, log in to have everything in one place.</span>
                        <div className="signInAlignment">
                            <span>Sign in</span>
                            {/* <img src={RightArrowBlue} alt="RightArrowBlue" /> */}
                        </div>
                    </div>
                    <div className="formAlignment">
                        <div className="cargodetailsAlignment">
                            <div className="headingAlignment">
                                <h1>Cargo details</h1>
                            </div>

                            <div className="cargodetailsFormAlignment">
                                <div className="formLabelAlignment">
                                    <div className="productLabel">
                                        <span>Product<span className="required">*</span></span>
                                    </div>
                                    <div className="hsCodeLabel">
                                        <span>HS Code</span>
                                    </div>
                                </div>
                                <div className="inputAlignment">
                                    <input type="text" placeholder='Enter commodity type or HS code' />
                                    <div className="serchImgAlignment">
                                        {/* <img src={Search} alt="Search" /> */}
                                    </div>
                                </div>
                            </div>

                            <div className="cargoDetailsBoxAlignment">
                                <div className="boxAlignment active">
                                    <img src={Hazardous} alt="Hazardous" />

                                    <span>Hazardous cargo</span>
                                </div>
                                <div className="boxAlignment">
                                    <img src={Perishable} alt="Perishable" />
                                    <span>Perishable cargo</span>
                                </div>
                                <div className="boxAlignment">
                                    <img src={Oversized} alt="Oversized" className="oversizedImg" />
                                    <span>Oversized cargo</span>
                                </div>
                                <div className="boxAlignment">
                                    <img src={liquid} alt="liquid" className="liquidImg" />
                                    <span>liquid cargo</span>
                                </div>
                            </div>
                        </div>
                        <div className="imoClassUNnumberAlignment">
                            <div className="labelInputAlignment">
                                <label>IMO Class<span>*</span></label>
                                <div className="inputAlignmentDetails">
                                    <input type="text" placeholder="IMO Class" />
                                    <div className="imgAlignment">
                                        {/* <img src={DownArrow} alt="DownArrow" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="labelInputAlignment">
                                <label className="unLabel">UN Number<span>*</span></label>
                                <div className="inputAlignmentDetails">
                                    <input type="text" placeholder="0" />
                                    <div className="imgAlignment">
                                        {/* <img src={DownArrow} alt="DownArrow" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="deliveryFormAlignment">
                            <div className="hedingAlignment">
                                <h1>Delivery</h1>
                            </div>
                            <div className="deliveryOptionAlignment">
                                <div className="differentOptionAlignment">
                                    <div className="optionBoxAlignment active">
                                        {/* <img src={Sea} alt="Sea" /> */}
                                        <span>SEA</span>
                                    </div>
                                    <div className="optionBoxAlignment">
                                        {/* <img src={Land} alt="Land" className="land" /> */}
                                        <span>LAND</span>
                                    </div>
                                    <div className="optionBoxAlignment">
                                        {/* <img src={Air} alt="Air" className="air" /> */}
                                        <span>AIR</span>
                                    </div>
                                </div>
                                <div className="differentOptionAlignment">
                                    <div className="optionBoxAlignment">
                                        {/* <img src={Auto} alt="Auto" className="auto" /> */}
                                        <span>AUTO</span>
                                    </div>
                                </div>
                            </div>

                            <div className="deliveryDetailsAlignment">
                                <div className="detailsFlex">
                                    <div className="labelInputAlignment">
                                        <label>TRANSPORTATION BY <span>*</span></label>
                                        <div className="deliveryDetailsFlex">
                                            <div className="inputAlignment">
                                                {/* <img src={Train} alt="Train" /> */}
                                                <input type="text" placeholder="Full container load FCL" />
                                            </div>
                                            <div className="dropDownAlignment">
                                                {/* <img src={DownArrow} alt="DownArrow" /> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="detailsFlex">
                                    <div className="labelInputAlignment">
                                        <label>CONTAINER TYPE <span>*</span></label>
                                        <div className="deliveryDetailsFlex">
                                            <div className="inputAlignment">
                                                {/* <img src={Train} alt="Train" /> */}
                                                <input type="text" placeholder="Container Type" />
                                            </div>
                                            <div className="dropDownAlignment">
                                                {/* <img src={DownArrow} alt="DownArrow" /> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="labelInputAlignment">
                                        <label>QUANTITY OF CONTAINERS <span>*</span></label>
                                        <div className="deliveryDetailsFlex">
                                            <div className="inputAlignment">
                                                {/* <img src={Train} alt="Train" /> */}
                                                <input type="text" placeholder="0" />
                                            </div>
                                            {/* <div className="dropDownAlignment">
                                            <img src={DownArrow} alt="DownArrow" />
                                        </div> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="detailsFlex">
                                    <div className="labelInputAlignment">
                                        <label>From <span>*</span></label>
                                        <div className="deliveryDetailsFlex">
                                            <div className="inputAlignment">
                                                {/* <img src={Train} alt="Train" /> */}
                                                <input type="text" placeholder="City, Port" />
                                            </div>
                                            <div className="dropDownAlignment">
                                                {/* <img src={DownArrow} alt="DownArrow" /> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="labelInputAlignment">
                                        <label>To <span>*</span></label>
                                        <div className="deliveryDetailsFlex">
                                            <div className="inputAlignment">
                                                {/* <img src={Train} alt="Train" /> */}
                                                <input type="text" placeholder="City, Port" />
                                            </div>
                                            {/* <div className="dropDownAlignment">
                                            <img src={DownArrow} alt="DownArrow" />
                                        </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="detailsFlex">
                                    <div className="labelInputAlignment">
                                        <label>Ready to load <span>*</span></label>
                                        <div className="deliveryDetailsFlex">
                                            <div className="inputAlignment">
                                                {/* <img src={Select} alt="Select" /> */}
                                                <input type="text" placeholder="Select" />
                                            </div>
                                            {/* <div className="dropDownAlignment">
                                            <img src={DownArrow} alt="DownArrow" />
                                        </div> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="detailsFlex teatAreaGrid">
                                    <div className="labelInputAlignment ">
                                        <label>Additional Information</label>
                                        <div className="deliveryDetailsFlex">
                                            <div className="inputAlignment textarea-alignment">
                                                <textarea placeholder="Write a message...">

                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="associatedservicesAlignment">
                            <div className="headingAlignment">
                                <h1>Associated services</h1>
                            </div>
                            <div className="associatedservicesDetails">
                                <div className="associatedservicesBackground">
                                    <div className="checkboxaAlignment">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="servicesDetailsFlex">
                                        <img src={Home} alt="Home" />
                                        <span>Insurance</span>
                                    </div>
                                </div>
                                <div className="associatedservicesBackground">
                                    <div className="checkboxaAlignment">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="servicesDetailsFlex">
                                        <img src={Home} alt="Home" />
                                        <span>Inspection Services</span>
                                    </div>
                                </div>
                                <div className="associatedservicesBackground">
                                    <div className="checkboxaAlignment">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="servicesDetailsFlex">
                                        <img src={Home} alt="Home" />
                                        <span>Certification</span>
                                    </div>
                                </div>
                                <div className="associatedservicesBackground">
                                    <div className="checkboxaAlignment">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="servicesDetailsFlex">
                                        <img src={Home} alt="Home" />
                                        <span>Customs Clearance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cargoesFinanceAlignment">
                        <div className="headingAlignmet">
                            <h1>CARGOES Finance</h1>
                        </div>
                        <div className="cargoesFinanceNotesAlignment">
                            <div className="checkboxAlignment">
                                <input type="checkbox" />

                            </div>
                            <div className="checkDetailsAlignment">
                                <span>I am interested in accessing Trade, Logistics or Invetory Finance</span>
                                <span className="notesDetails">CARGOES Finance provides access to finance for exporters, importers and logistics companies across the globe for receivables and payables</span>
                            </div>
                        </div>
                    </div>
                    <div className="formAlignment">
                        <div className="cargodetailsAlignment contactDetails">
                            <div className="headingAlignment">
                                <h1>Cargo details</h1>
                            </div>
                            <div className="deliveryFormAlignment">
                                <div className="deliveryDetailsAlignment">
                                    <div className="detailsFlex">
                                        <div className="labelInputAlignment">
                                            <label>First Name</label>
                                            <div className="deliveryDetailsFlex">
                                                <div className="inputAlignment">
                                                    <input type="text" placeholder="Jane" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="labelInputAlignment">
                                            <label>Last Name</label>
                                            <div className="deliveryDetailsFlex">
                                                <div className="inputAlignment">
                                                    <input type="text" placeholder="Appleseed" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="detailsFlex">
                                        <div className="labelInputAlignment">
                                            <label>Phone</label>
                                            <div className="deliveryDetailsFlex">
                                                <div className="inputAlignment">
                                                    <input type="text" placeholder="00000 0000" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="labelInputAlignment">
                                            <label>E-mail</label>
                                            <div className="deliveryDetailsFlex">
                                                <div className="inputAlignment">
                                                    <input type="text" placeholder="City, Port" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="buttonAlignment">
                                    <button>
                                        Send
                                    </button>
                                    <span>By clicking Send, you agree with our <span className="linkAlignment">Terms & conditions.</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
