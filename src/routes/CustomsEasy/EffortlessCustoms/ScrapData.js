import React, { useState } from "react";
import "./EffortlessCustoms.scss";
import DropdownArrow from "../../../assets/icons/dropdwon-new.svg";
import Minus from "../../../assets/images/Minusimg.png";
import Plus from "../../../assets/images/plusimg.jpeg";
import Accordion from "react-bootstrap/Accordion";
import ReactMarkdown from "react-markdown";
import PhoneInput from "react-phone-number-input";
import { ApiPost } from "../../../helpers/API/ApiData";
import { ToastContainer, toast } from "react-toastify";
function ScrapData(props) {
  const {
    selectedData,
    customData,
    customData2,
    handleClickTap1,
    handleClickTap2,
    openCustomDatatap2,
    openCustomDatatap1,
    loader,
    loader2,
    activeButton,
  } = props;
  const [openAccordionIndex, setOpenAccordionIndex] = useState(-1);
  const [openAccordionIndex1, setOpenAccordionIndex1] = useState(-1);
  const [inputValue, setInputValue] = useState({});
  const [phoneInput, setphoneInput] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // const [openAccordionIndex2, setOpenAccordionIndex2] = useState(-1);

  // const toggleAccordion = (index) => {
  //   setOpenAccordionIndex((prevIndex) => (prevIndex === index ? -1 : index));
  // };
  // const toggleAccordion1 = (index) => {
  //   setOpenAccordionIndex1((prevIndex) => (prevIndex === index ? -1 : index));
  // };

  // const [accordionOpen, setAccordionOpen] = useState(false);
  // const toggleAccordion2 = (index) => {
  //   setOpenAccordionIndex2((prevIndex) => (prevIndex === index ? -1 : index));
  //   setAccordionOpen(!accordionOpen);
  // };

  const [openAccordionIndex2, setOpenAccordionIndex2] = useState(null); // State to keep track of open accordion index

  const toggleAccordion = (index) => {
    setOpenAccordionIndex2(openAccordionIndex2 === index ? null : index); // Toggle open/close state
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const Validation = () => {
    let error = {};
    let Formvalid = true;
    if (!inputValue?.vName || inputValue?.vName == "") {
      Formvalid = false;
      error["vName"] = "*please Enter Name*";
    }
    if (!inputValue?.vCompanyName || inputValue?.vCompanyName == "") {
      Formvalid = false;
      error["vCompanyName"] = "*please Enter CompanyName*";
    }
    if (!inputValue?.vEmail || inputValue?.vEmail == "") {
      Formvalid = false;
      error["vEmail"] = "*please Enter Email*";
    } else if (
      inputValue?.vEmail &&
      !inputValue?.vEmail.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      Formvalid = false;
      error["vEmail"] = "*Please enter vaild Email*";
    }
    if (!phoneInput || phoneInput == "") {
      Formvalid = false;
      error["vPhone"] = "*please Enter PhoneNo*";
    }
    setErrors(error);
    return Formvalid;
  };

  const handleSubmit = async () => {
    if (Validation()) {
      setLoading(true);
      const data = {
        vName: inputValue?.vName,
        vEmail: inputValue?.vEmail,
        vPhone: phoneInput,
        vCompanyName: inputValue?.vCompanyName,
      };
      await ApiPost("custom-easy-contact/create", data)
        .then((res) => {
          setphoneInput("");
          setInputValue({
            vEmail: "",
            vCompanyName: "",
            vName: "",
          });
          setLoading(false);
          toast.success("Form Submitted Successfully");
        })
        .catch((err) => {
          setLoading(false);
          toast.error("Something went wrong, please try again!!");
        });
    }
  };

  return (
    <>
      <ToastContainer />
      {customData?.length === 0 ? (
        ""
      ) : (
        <div className="custome-button-alignment">
          <button className={`custom1 ${activeButton === "custom1" ? "active" : ""}`} onClick={() => handleClickTap1()}>
            Custom 1.0
          </button>
          <button className={`custom2 ${activeButton === "custom2" ? "active" : ""}`} onClick={() => handleClickTap2()}>
            Custom 2.0
          </button>
        </div>
      )}
      {loader === true ? (
        <div className="loader">Loading...</div>
      ) : (
        openCustomDatatap1 === true && (
          <div className="results">
            <div className="summary-content">
              <div className="heading">Regulatory requirements</div>
              <div className="sub-heading">
                <span>
                  <em>For Product</em> &nbsp;
                  <strong>{selectedData?.hs_code}</strong> – {customData?.["Hs Code Description"]}
                </span>
              </div>
              <div className="sub-heading">
                <span>
                  Exported from&nbsp;
                  <strong>
                    India to&nbsp;
                    {selectedData?.destination_country}
                  </strong>
                </span>
              </div>
              <div className="sub-heading">
                <span>
                  Hs Revision&nbsp;
                  <strong>{customData?.Response?.[0]?.["HsRevision"]}</strong>
                </span>
              </div>
              <div className="sub-heading">
                <span>
                  NTM Classification:&nbsp;
                  <strong>{customData?.Response?.[0]?.["NtmClassification"]}</strong>
                </span>
              </div>
              <div className="sub-heading">
                <span>
                  NTM year: &nbsp;
                  <strong>{customData?.Response?.[0]?.["NtmYear"]}</strong>
                </span>
              </div>
              <div className="sub-heading">
                <span>
                  Source: &nbsp;
                  <strong>{customData?.Response?.[0]?.["DataSource"]}</strong>
                </span>
              </div>
            </div>
            {customData?.Response?.map((item, index) => {
              return (
                <>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey={index}>
                      <div key={index}>
                        <div className="ntm-summary-results">
                          <Accordion.Header>
                            <div className="tab-title w-full">
                              <span>{item?.MeasureSection}</span>
                              <span>
                                {item?.MeasureTotalCountLabel} : {item?.MeasureTotalCount}
                              </span>
                            </div>
                          </Accordion.Header>
                        </div>
                        <Accordion.Body>
                          <Accordion defaultActiveKey="1">
                            {item?.Measures?.map((data, dataIndex) => {
                              let AllMeasuresData = item?.AllMeasures?.filter((item) => item?.Code === data?.MeasureCode);
                              return (
                                <Accordion.Item eventKey={dataIndex}>
                                  <div className="panel-content">
                                    <Accordion.Header>
                                      <div className="tab-measurestitle">
                                        <span>
                                          {data?.MeasureCode} - {data?.MeasureTitle} : {data?.MeasureCount}
                                        </span>
                                        {/* <span>{data?.MeasureCount}<img src={DropdownArrow} alt="DropdownArrow" /></span> */}
                                      </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      {AllMeasuresData?.map((itemData, itemDataIndex) => (
                                        <>
                                          <Accordion defaultActiveKey="2" id="plus">
                                            <Accordion.Item eventKey={itemDataIndex}>
                                              <Accordion.Header>
                                                <div key={itemDataIndex} className="d-flex justify-content-between">
                                                  <span>{`${itemDataIndex + 1}. ${itemData?.Comment} : ${itemData?.LegislationSummary}`}</span>
                                                </div>
                                              </Accordion.Header>
                                              <Accordion.Body>
                                                <div
                                                  className={
                                                    openAccordionIndex2 === itemDataIndex
                                                      ? "panel open d-flex justify-content-between"
                                                      : "panel d-flex justify-content-between"
                                                  }
                                                >
                                                  {/* <div className="table-toggle-list .inner-table em d-flex justify-content-between"> */}
                                                  <div className="inner-table">
                                                    <div className="inner-table-data">
                                                      <i className="fa fa-balance-scale" />
                                                      <p className="inner-table-title">
                                                        <span className="inner-table-titleData">Legislation title :</span>
                                                        <span>{itemData?.LegislationTitle}</span>
                                                      </p>
                                                    </div>
                                                    <div className="inner-table-data">
                                                      <i className="fa fa-file-alt" />
                                                      <p className="inner-table-title">
                                                        <span className="inner-table-titleData">Legislation summary :</span>
                                                        <span> {itemData?.LegislationSummary}</span>
                                                      </p>
                                                    </div>
                                                    <div className="inner-table-data">
                                                      <i className="fa fa-university" />
                                                      <p className="inner-table-title">
                                                        <span className="inner-table-titleData">Implementation authority : </span>
                                                        <span> {itemData?.ImplementationAuthority}</span>
                                                      </p>
                                                    </div>
                                                    <div className="inner-table-data">
                                                      <i className="fa fa-hourglass-end" />
                                                      <p className="inner-table-title">
                                                        <span className="inner-table-titleData">Validity : </span>
                                                        <span>{itemData?.StartDate}</span>
                                                      </p>
                                                    </div>
                                                    <div className="inner-table-data">
                                                      <i className="fa fa-globe-africa" />
                                                      <p className="inner-table-title">
                                                        <span className="inner-table-titleData">Other countries affected : </span>
                                                        <span> {itemData?.AdditionalCommentCountry}</span>
                                                      </p>
                                                    </div>
                                                    {itemData?.TextLink === null || itemData?.TextLink?.includes("") ? (
                                                      ""
                                                    ) : (
                                                      <div className="inner-table-data">
                                                        <i className="fa fa-file-pdf" />
                                                        <p className="inner-table-title">
                                                          <a href={itemData?.TextLink} target="_blank">
                                                            Document
                                                          </a>
                                                        </p>
                                                      </div>
                                                    )}
                                                    {itemData?.WebLink === null ? (
                                                      ""
                                                    ) : (
                                                      <div className="inner-table-data">
                                                        <i className="fa fa-link" />
                                                        <p className="inner-table-title">
                                                          <a href={itemData?.WebLink} target="_blank">
                                                            Link
                                                          </a>
                                                        </p>
                                                      </div>
                                                    )}
                                                  </div>
                                                  {/* </div> */}
                                                </div>
                                              </Accordion.Body>
                                            </Accordion.Item>
                                          </Accordion>
                                        </>
                                      ))}
                                    </Accordion.Body>
                                  </div>
                                </Accordion.Item>
                              );
                            })}
                          </Accordion>
                        </Accordion.Body>
                      </div>
                    </Accordion.Item>
                  </Accordion>
                </>
              );
            })}
          </div>
        )
      )}
      {openCustomDatatap2 === true && (
        <>
          {" "}
          {loader2 === true ? (
            <div className="loader">Loading...</div>
          ) : (
            <div className="w-100 overflow-hidden ">
              <div className="custome-headingdata">
                <ReactMarkdown skipHtml>{customData2?.replace(/\n/g, '  \n')}</ReactMarkdown>
              </div>
              <div className="contact-with-the-expert">
                <h6>Contact with the Expert</h6>
                <div className="connect-with-section-form-alignment">
                  <div className="connect-with-section-form-input">
                    <input type="text" name="vName" placeholder="Name of the person" value={inputValue?.vName} onChange={(e) => handleOnChange(e)} />
                    <span className="spanvalidationError">{errors["vName"]}</span>
                  </div>

                  <div className="two-input-grid-alignment">
                    <div className="connect-with-section-form-input">
                      <input
                        type="text"
                        name="vCompanyName"
                        placeholder="Company name"
                        value={inputValue?.vCompanyName}
                        onChange={(e) => handleOnChange(e)}
                      />
                      <span style={{ color: "red", fontSize: "13px", marginRight: "50px" }}>{errors["vCompanyName"]}</span>
                    </div>
                    <div className="connect-with-section-form-input">
                      <input type="email" placeholder="Email" name="vEmail" value={inputValue?.vEmail} onChange={(e) => handleOnChange(e)} />
                      <span style={{ color: "red", fontSize: "13px", marginRight: "90px" }}>{errors["vEmail"]}</span>
                    </div>
                  </div>
                  <div className="two-input-grid-alignment">
                    <div className="connect-with-section-form-input">
                      <PhoneInput
                        placeholder="contact number"
                        value={phoneInput}
                        name="vPhone"
                        maxLength="15"
                        onChange={(e) => {
                          setphoneInput(e);
                        }}
                      />
                      <span style={{ color: "red", fontSize: "13px", marginRight: "20px" }}>{errors["vPhone"]}</span>
                    </div>
                  </div>
                </div>

                <div className="request-quote-button-alignment">
                  <button
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    {loading === true ? <>Loading...</> : <>Submit</>}
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
export default ScrapData;
