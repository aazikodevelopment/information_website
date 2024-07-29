import React, { useState, useEffect } from "react";
import "./contactUs.scss";
import ContactBg from "../../assets/images/contactview.png";
import India from "../../assets/icons/indiaFleg.svg";
import Location from "../../assets/icons/locationIcon.svg";
import InboxMessage from "../../assets/icons/inboxMessage.svg";
import PhoneIcon from "../../assets/icons/phoneicon.svg";
import VideoIcon from "../../assets/icons/videoicon.svg";
import AudioIcon from "../../assets/icons/audioCallicon.svg";
import MessageIcon from "../../assets/icons/messageIcon-white.svg";
import EmailIcon from "../../assets/icons/emailIcon.svg";
import Other from "../../assets/icons/messageIcon.svg";
import Whatsapp from "../../assets/icons/whatsappIcon.svg";
import Telegram from "../../assets/icons/telegramIcon.svg";
import WeChat from "../../assets/icons/wechatIcon.svg";
import Messanger from "../../assets/icons/messngerIcon.svg";
import DatePicker from "../../assets/icons/datePickerIcon.svg";
import DownArrow from "../../assets/icons/blackDropdown.svg";
import DropDown from "../../assets/icons/dropdown2.svg";
import { NavLink } from "react-router-dom";
import { ApiGet, ApiPost } from "../../helpers/API/ApiData";
import { toast, ToastContainer } from "react-toastify";
import moment from "moment";
import PhoneInput from "react-phone-number-input";

import { getToken, createMeeting } from "../Videosdk/api";
// import OutsideClickHandler from "react-outside-click-handler";
// import TimezoneSelect from "react-timezone-select";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [contactdetails, SetContactdetails] = useState([]);
  const [showMoreOptionModal, setMoreOptionModal] = useState(false);
  const [indexState, setIndexState] = useState();
  const [countryWiseContact, setCountryWiseContact] = useState([]);
  const [meetingLink, setMeetingLink] = useState();
  const [hostToken, setHostToken] = useState();
  const [showScheduleCall, setScheduleCall] = useState(false);
  const [showSelectTime, setSelectTime] = useState(false);
  const [showSelectLanguage, setSelectLanguage] = useState(false);
  const [showSendInquiryForm, setSendInquiryForm] = useState(false);
  const [inputValue, setInputValue] = useState({});
  const [inputValueInquiery, setInputValueInquiery] = useState({});
  const [errors, setErrors] = useState("");
  const [errors1, setErrors1] = useState("");
  const [isChecked, setIsChecked] = useState([]);
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [countryName, setCountryName] = useState();
  const [phoneInput, setphoneInput] = useState("");
  const checkList = ["Hindi", "Spanish", "Chinese", "Gujarati", "English"];
  let res = selectedTimezone?.label?.match(/\(([^)]+)\)/)[1];

  // const videoUrl = "aazikocall.buildx.live";
  const videoUrl = "call.aaziko.com/";

  const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const minDate = new Date();
  const TodaysDate = moment(minDate).format("YYYY-MM-DD");
  useEffect(() => {
    handleGetContact();
  }, []);
  useEffect(() => {
    activeTabBlog();
    setCountryName("All Country");
  }, [countryWiseContact]);
  const handleGetContact = (e) => {
    ApiGet(`contact-us/view-contact`)
      .then((res) => {
        setCountryWiseContact(res?.data?.data);
      })
      .catch((err) => {});
  };
  const bindInput = (value) => {
    var regex = new RegExp("^[^0-9]*$");
    var key = String.fromCharCode(!value.charCode ? value.which : value.charCode);
    if (regex.test(key)) {
      value.preventDefault();
      return false;
    }
  };
  const activeTabBlog = (key, item) => {
    if (item?.vCountry) {
      setCountryName(item?.vCountry);
      ApiGet(`contact-us/view-contact?letter=${item?.vCountry}`)
        .then((res) => {
          setIndexState(key);
          SetContactdetails(res?.data?.data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      setCountryName("All Country");
      ApiGet(`contact-us/view-contact`)
        .then((res) => {
          setIndexState();
          SetContactdetails(res?.data?.data);
          // setCountryWiseContact(res?.data?.data)
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  // useEffect(() => {
  //   handleCreateSession();
  // }, []);

  const handleCreateSession = async () => {
    const token = await getToken();
    const meetingId = await createMeeting({ token });
    setHostToken(token);
    setMeetingLink(meetingId);
    sendEmailHostSession(token, meetingId);
  };

  const handleJoinWhatsapp = () => {
    window.open(`https://wa.me/+919904400699?text=Hello`);
  };

  const handleJoinHostSession = async () => {
    const token = await getToken();
    const meetingId = await createMeeting({ token });
    sendEmailHostSession(token, meetingId);

    setHostToken(token);
    setMeetingLink(meetingId);

    window.open(`//${videoUrl}/?meetingId=${meetingId}&token=${token}&joinScreenEnabled=true&canDrawOnWhiteboard=true&canToggleWhiteboard=true`);
  };

  const sendEmailHostSession = (token, meetingId) => {
    const emailObject = {
      email: "contact@aaziko.com",
      link: `https://${videoUrl}/?meetingId=${meetingId}&token=${token}&joinScreenEnabled=true&canDrawOnWhiteboard=true&canToggleWhiteboard=true`,
    };

    ApiPost("meeting/mail", emailObject)
      .then((res) => {})
      .catch((err) => {});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValueInquiery({ ...inputValueInquiery, [name]: value });
    setErrors1({ ...errors1, [name]: "" });
  };

  const handleLanguageChange = (event, index) => {
    var updatedList = [...isChecked];

    if (event?.target?.checked) {
      updatedList = [...isChecked, event?.target?.value];
    } else {
      updatedList?.splice(isChecked?.indexOf(event?.target?.value), 1);
    }
    setIsChecked(updatedList);
  };

  const validationform = () => {
    let formIsValid = true;
    const errors = {};
    // if (inputValue && !inputValue?.Date && inputValue?.Date < minDate) {
    if (inputValue && !inputValue?.Date) {
      formIsValid = false;
      errors["Date"] = "Date required";
    }

    if (selectedTimezone && !selectedTimezone?.label) {
      formIsValid = false;
      errors["selectedTimezone"] = "Timezone required";
    }

    if (inputValue && !inputValue?.Times) {
      formIsValid = false;
      errors["Times"] = "Time required";
    }

    if (isChecked.length === 0) {
      formIsValid = false;
      errors["language"] = "Language required";
    }

    if (!inputValue?.email?.trim() || inputValue?.email === "" || regexEmail?.test(inputValue?.email) === false) {
      formIsValid = false;
      errors["email"] = "Email required";
    }
    if (!phoneInput) {
      formIsValid = false;
      errors["phoneNo"] = "*Please enter phone number";
    }

    setErrors(errors);
    return formIsValid;
  };
  const validationformForInquiery = () => {
    let formIsValid = true;
    const errors1 = {};
    if (inputValueInquiery && !inputValueInquiery?.fname) {
      formIsValid = false;
      errors1["fname"] = "*required field";
    }
    if (inputValueInquiery && !inputValueInquiery?.lname) {
      formIsValid = false;
      errors1["lname"] = "*required field";
    }
    if (inputValueInquiery && !inputValueInquiery?.contact) {
      formIsValid = false;
      errors1["contact"] = "*required field";
    }
    if (inputValueInquiery && !inputValueInquiery?.department) {
      formIsValid = false;
      errors1["department"] = "*required field";
    }
    if (inputValueInquiery && !inputValueInquiery?.message) {
      formIsValid = false;
      errors1["message"] = "*required field";
    }

    if (inputValueInquiery?.email === "" || regexEmail?.test(inputValueInquiery?.email) === false) {
      formIsValid = false;
      errors1["email"] = "*required field";
    }

    setErrors1(errors1);
    return formIsValid;
  };

  const clicksubmit = () => {
    if (validationform()) {
      const body = {
        vDate: inputValue?.Date,
        vTime: inputValue?.Times,
        vLanguage: isChecked,
        vTimeZone: selectedTimezone?.label?.match(/\(([^)]+)\)/)[1],
        vEmails: ["contact@aaziko.com", inputValue?.email],
        vLink: `https://${videoUrl}/?meetingId=${meetingLink}&token=${hostToken}&joinScreenEnabled=true&canDrawOnWhiteboard=true&canToggleWhiteboard=true`,
      };

      ApiPost("schedule-call/create", body)
        .then((res) => {
          toast.success("Submit successfully");
          setScheduleCall(false);
          setInputValue({});
          setIsChecked([]);
          setSelectedTimezone({});
          setErrors("");
          setphoneInput("");
        })
        .catch((err) => {
          toast.error("something went wrong please try again");
        });
    }
  };
  const clickTosubmitData = (e) => {
    if (validationformForInquiery()) {
      const body = {
        vFirstName: inputValueInquiery?.fname,
        vLastName: inputValueInquiery?.lname,
        vEmail: inputValueInquiery?.email,
        vContactNumber: inputValueInquiery?.contact,
        vDepartment: inputValueInquiery?.department,
        vMessage: inputValueInquiery?.message,
      };

      ApiPost("contact-enquiry/create", body)
        .then((res) => {
          toast.success("Submit successfully");
          setSendInquiryForm(false);
          setInputValueInquiery({});
        })
        .catch((err) => {
          toast.error("something went wrong please try again");
        });
    }
  };

  return (
    <div className="contactus-section">
      <ToastContainer />
      <div className="contactus-alignment">
        <div className="contact-dashboard-alignment">
          <div className="dashboard-text-alignment">
            <div className="heading-alignment">
              <h4>How can we help?</h4>
            </div>
            <div className="helping-message">
              <p>Send us a message!</p>
            </div>
          </div>
        </div>
        <div className="country-tab-section">
          <div className="container">
            <ul>
              {/* <li className="active">All</li> */}
              <li>
                {countryWiseContact?.map((item, key) => {
                  return (
                    <li className={`${indexState == key ? "active" : ""}`} onClick={(e) => activeTabBlog(key, item)}>
                      {item?.vCountry}
                    </li>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="send-inquiry-allCountries-alignment">
            <span onClick={() => setSendInquiryForm(true)}>Send Inquiry</span>
            <span onClick={() => activeTabBlog(0, "")}>All Countries</span>
          </div>
        </div>
        <div className="contactUs-main-view-section">
          <div className="container">
            <div className="contactUs-view-img-alignment">
              <div className="contact-img-alignment">
                <img src={ContactBg} alt="ContactBg" />
              </div>
              <div className="fleg-name-section">
                <h4>{countryName}</h4>

                {/* <img src={India} alt="India" /> */}
              </div>
            </div>
            <div className="contact-adress-number-alignment">
              <div className="contact-flex-alignment">
                <div>
                  <img src={Location} alt="Location" />
                </div>
                <div className="contact-name-alignment">
                  <span>405, Avalon Business Hub, Aamba Talavadi, Katargam, Surat, Gujarat 395004</span>
                </div>
              </div>
              <div className="contact-flex-alignment">
                <div>
                  <img src={InboxMessage} alt="InboxMessage" />
                </div>
                <div className="contact-name-alignment">
                  <span>contact@aaziko.com</span>
                </div>
              </div>
              <div className="contact-flex-alignment">
                <div>
                  <img src={PhoneIcon} alt="PhoneIcon" />
                </div>
                <div className="contact-name-alignment">
                  <span>Andre vda Costa: +91 9825135034</span>
                </div>
              </div>
            </div>
            <div className="button-message-section">
              <div className="button-alignment">
                <button
                  onClick={(e) => {
                    handleJoinHostSession(e);
                    // sendEmailHostSession();
                  }}
                >
                  <img src={VideoIcon} alt="VideoIcon" />
                  Video Call
                </button>
                <button
                  onClick={(e) => {
                    handleJoinHostSession(e);
                    // sendEmailHostSession();
                  }}
                >
                  <img src={AudioIcon} alt="AudioIcon" />
                  Audio Call
                </button>
                <button onClick={(e) => handleJoinWhatsapp(e)}>
                  <img src={MessageIcon} alt="MessageIcon" />
                  WhatsApp
                </button>
                <button onClick={() => setScheduleCall(true)}>
                  <img src={EmailIcon} alt="EmailIcon" />
                  Schedule Call
                </button>
              </div>
              <div className="message-alignment">
                <button onClick={() => setMoreOptionModal(!showMoreOptionModal)}>
                  <img src={Other} alt="Other" />
                  Other
                </button>

                <>
                  {showMoreOptionModal && (
                    <div className="more-option">
                      <div className="more-option-flex">
                        <img src={Whatsapp} alt="Whatsapp" />
                        <p>Whatsapp</p>
                      </div>
                      <div className="more-option-flex">
                        <img src={Telegram} alt="Telegram" />
                        <p>Telegram</p>
                      </div>
                      <div className="more-option-flex">
                        <img src={WeChat} alt="WeChat" />
                        <p>We chat</p>
                      </div>
                      <div className="more-option-flex">
                        <img src={Messanger} alt="Messanger" />
                        <p>Messenger</p>
                      </div>
                    </div>
                  )}
                </>
              </div>
            </div>
            <div className="department-section">
              {/* <NavLink to="/create-ticket"> */}
              {contactdetails?.map((item, i) => {
                return (
                  <div className="department-alignment">
                    <div className="department-details-section">
                      <div className="heading-alignment">
                        <h6>{item?.vAddress}</h6>
                      </div>
                      <div className="department-contact-number-section">
                        <div className="details-alignment">
                          <img src={InboxMessage} alt="InboxMessage" />
                          <span>{item?.vEmail}</span>
                        </div>
                        {item?.vPhone && (
                          <div className="details-alignment">
                            <img src={PhoneIcon} alt="PhoneIcon" />
                            <div>
                              <span>Phone:</span> <span>{item?.vPhone}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* <div className="department-details-section">
                                        <div className="heading-alignment">
                                            <h6>Name of Department</h6>
                                        </div>
                                        <div className="department-contact-number-section">
                                            <div className="details-alignment">
                                                <img src={InboxMessage} alt="InboxMessage" />
                                                <span>{item?.vEmail} okkk</span>
                                            </div>
                                            <div className="details-alignment">
                                                <img src={PhoneIcon} alt="PhoneIcon" />
                                                <span>Andre vda Costa: +91 6598745632</span>
                                            </div>
                                        </div>
                                    </div> */}
                  </div>
                );
              })}
              {/* </NavLink> */}
            </div>
          </div>
        </div>
      </div>

      {showScheduleCall && (
        <div className="scheduleCall-modal">
          <div className="modal-wrapper">
            <div className="scheduleCall-modal-box">
              <div className="modal-header">
                <h4>Schedule Call</h4>
              </div>
              <div className="modal-body">
                <div className="details-grid">
                  <div className="input">
                    <label>Select Date:</label>
                  </div>
                  <div className="input-details-tags">
                    <div className="input-alignment">
                      <div className="input-relative">
                        <input
                          placeholder="20 Mar 2022, Sunday "
                          type="date"
                          name="Date"
                          // max="9999-12-31"
                          min={TodaysDate}
                          onChange={(e) => handleInputChange(e)}
                        />
                        <span style={{ color: "red", top: "5px", fontSize: "12px" }}>{errors["Date"]}</span>
                        <div className="icon-alignment">{/* <img src={DatePicker} alt="DatePicker" /> */}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="details-grid">
                  <div className="input">
                    <label>Select Time:</label>
                  </div>
                  <div className="input-details-tags">
                    <div className="input-alignment">
                      <div className="input-relative_demo">
                        {/* <div className="dropdown-flex"> */}
                        <input type="time" name="Times" onChange={(e) => handleInputChange(e)} />

                        {/* <div
                            className="dropdown-box"
                            onClick={() => setSelectTime(!showSelectTime)}
                          >
                            <img src={DownArrow} alt="DownArrow" />
                          </div> */}
                        {/* </div> */}
                        <span style={{ color: "red", top: "5px", fontSize: "12px" }}>{errors["Times"]}</span>
                      </div>
                    </div>

                    <div style={{ width: "270px" }}>
                      {/* <TimezoneSelect
                        value={selectedTimezone}
                        onChange={setSelectedTimezone}
                      /> */}

                      <span style={{ color: "red", top: "5px", fontSize: "12px" }}>{errors["selectedTimezone"]}</span>
                    </div>
                  </div>
                </div>

                <div className="details-grid">
                  <div className="input">
                    <label>Language:</label>
                  </div>

                  <div className="input-details-tags">
                    <div className="input-alignment">
                      <div className="dropdown-input">
                        <div className="dropdown-flex">
                          <input
                            type="text"
                            value={isChecked?.map((item, i) => item)}
                            name="language"
                            placeholder="--plese select--"
                            onClick={() => setSelectLanguage(true)}
                          />

                          <div className="dropdown-box" onClick={() => setSelectLanguage(!showSelectLanguage)}>
                            <img src={DownArrow} alt="DownArrow" />
                          </div>
                        </div>
                        <span style={{ color: "red", top: "5px", fontSize: "12px" }}>{errors["language"]}</span>
                        {showSelectLanguage && (
                          <div className="dropdown-alignment">
                            {checkList?.map((item, i) => {
                              return (
                                <div className="dropdown-details-alignment">
                                  <input type="checkbox" value={item} onChange={handleLanguageChange} checked={isChecked?.includes(item)} key={i} />

                                  <p>{item}</p>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="details-grid">
                  <div className="input">
                    <label>Email Id:</label>
                  </div>
                  <div className="input-details-tags">
                    <div className="input-alignment">
                      <div className="input-relative">
                        <input placeholder="Enter EmailId" type="email" name="email" onChange={(e) => handleInputChange(e)} />
                        <span style={{ color: "red", top: "5px", fontSize: "12px" }}>{errors["email"]}</span>
                        <div className="icon-alignment">{/* <img src={DatePicker} alt="DatePicker" /> */}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="details-grid">
                  <div className="input">
                    <label>Mobile No:</label>
                  </div>
                  <div className="input-details-tags">
                    <div className="input-alignment">
                      <div className="input-relative">
                        <PhoneInput
                          placeholder="Enter Phone Number"
                          value={phoneInput}
                          name="phoneNo"
                          maxLength="15"
                          onChange={(e) => {
                            setphoneInput(e);
                          }}
                        />
                        <span style={{ color: "red", top: "5px", fontSize: "12px" }}>{errors["phoneNo"]}</span>
                        <div className="icon-alignment">{/* <img src={DatePicker} alt="DatePicker" /> */}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="button-alignment">
                  <button onClick={(e) => clicksubmit(e)}>Submit</button>
                  <button
                    className="cancle-button"
                    onClick={() => {
                      setScheduleCall(false);
                      setInputValue({});
                      setIsChecked([]);
                      setSelectedTimezone({});
                      setErrors("");
                      setphoneInput("");
                    }}
                  >
                    Cancle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSendInquiryForm && (
        <div className="send-inquiry-form-modal">
          <div className="modal-wrapper">
            <div className="modal-body">
              <div className="inquiry-form-alignment">
                <div className="inquiry-form">
                  <div className="grid">
                    <div className="form-control">
                      <label>First Name: </label>
                      <div className="input-alignment">
                        <input type="text" name="fname" onChange={(e) => handleOnChange(e)} />
                        <span style={{ color: "red", top: "5px", fontSize: "12px" }}>{errors1["fname"]}</span>
                      </div>
                    </div>

                    <div className="form-control">
                      <label>Last Name:</label>
                      <div className="input-alignment">
                        <input type="text" name="lname" onChange={(e) => handleOnChange(e)} />
                        <span style={{ color: "red", top: "5px", fontSize: "12px" }}>{errors1["lname"]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="form-control">
                    <label>Department:</label>
                    <div className="input-alignment">
                      <input type="text" name="department" onChange={(e) => handleOnChange(e)} />
                      {/* <div className="dropdown-alignment">
                        <img src={DropDown} alt="DropDown" />
                      </div> */}
                      <span style={{ color: "red", top: "5px", fontSize: "12px" }}>{errors1["department"]}</span>
                    </div>
                  </div>
                  <div className="form-control">
                    <label>Email:</label>
                    <div className="input-alignment">
                      <input type="email" name="email" onChange={(e) => handleOnChange(e)} />
                      <span style={{ color: "red", top: "5px", fontSize: "12px" }}>{errors1["email"]}</span>
                    </div>
                  </div>
                  <div className="form-control">
                    <label>Contact No.:</label>
                    <div className="input-alignment">
                      <input type="number" name="contact" onChange={(e) => handleOnChange(e)} />
                      <span style={{ color: "red", top: "5px", fontSize: "12px" }}>{errors1["contact"]}</span>
                    </div>
                  </div>

                  <div className="form-control">
                    <label>Message:</label>
                    <div className="input-alignment">
                      <textarea type="text" name="message" onChange={(e) => handleOnChange(e)}>
                        {" "}
                      </textarea>
                      <span style={{ color: "red", top: "5px", fontSize: "12px" }}>{errors1["message"]}</span>
                    </div>
                  </div>
                </div>

                <div className="button-alignment">
                  <button onClick={(e) => clickTosubmitData(e)}>Send Message</button>
                  <button
                    onClick={(e) => {
                      setSendInquiryForm(false);
                      setInputValueInquiery({});
                    }}
                    className="cancle-button"
                  >
                    Cancle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
