import React, { useMemo, useState } from "react";
import "./ChatBot.scss";
import axios from "axios";
import { AI_URL } from "../config/API/api.config";
import ReactMarkdown from "react-markdown";

const aazikoLOGO = "./colourbg.png";

export default function ChatBot() {
  let userID = {};
  let countryData = {};

  if (typeof window !== "undefined") {
    userID = JSON.parse(localStorage.getItem("userinfo"));
    countryData = JSON.parse(localStorage.getItem("countryData"));
  }

  const videoUrl = "call.aaziko.com/";
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState({});
  const [loader, setLoader] = useState(false);
  const [history, setHistory] = useState([
    {
      answer: "Hello, i am Mr.AazikoAI...",
    },
    {
      answer:
        " I'm here to help answer your questions and engage in conversation on a wide range of topics. Is there something specific you would like to know or discuss?",
    },
  ]);
  const [contactModel, setContactModel] = useState(false);
  const [inputvalue, setInputvalue] = useState({});
  const [instantMeeting, setInstantMeeting] = useState(false);
  const [key, setKey] = useState("");
  const [meetingLink, setMeetingLink] = useState();
  const [hostToken, setHostToken] = useState();

  const onhandleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    // setErrors({ ...errors, [name]: "" });
  };

  //   useEffect(() => {
  //     handleCreateSession();
  //   }, []);

  const handleSendChat = (e) => {
    setLoader(true);
    e.preventDefault();
    const payload = {
      question: inputValue?.question,
    };

    const data = {
      question: inputValue.question,
    };

    setHistory((prevState) => [...prevState, data]);
    setInputValue({
      question: "",
    });

    axios
      .post(`${AI_URL}/chat/chat`, payload)
      .then((response) => {
        const data = {
          answer: response?.data?.data,
        };

        setHistory((prevState) => [...prevState, data]);
        setInputValue({
          question: "",
        });
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
      });
  };
  const handleOnChnage = (e) => {
    const { name, value } = e.target;
    setInputvalue({ ...inputvalue, [name]: value });
  };

  // const ModleChildren = useMemo(() => {
  const ModleChildren = () => {
    return (
      <>
        <div className="close-button-alignment">
          <button onClick={() => setContactModel(false)}>X</button>
        </div>
        <div className="modaldetails-alignment">
          <div className="details-modal-alignment">
            <div className="other-details-alignment">
              <h4> Meeting: </h4>

              <div className="child-details-grid-alignment">
                <div>
                  <div className="checkbox-input-alignment" onClick={() => setInstantMeeting(!instantMeeting)}>
                    <input type="radio" id="Instant_Meeting" name="Meeting" value="Instant_Meeting" onChange={(e) => handleOnChnage(e)} />

                    <label for="Instant_Meeting">Instant Meeting</label>
                  </div>
                  {/* {instantMeeting && ( */}

                  <div className="time-details-alignment">
                    <p>10:00 to 11:00 P.M.</p>
                    <p>10:00 to 11:00 P.M.</p>
                    <p>10:00 to 11:00 P.M.</p>
                    <p>10:00 to 11:00 P.M.</p>
                    <p>10:00 to 11:00 P.M.</p>
                  </div>
                  {/* )} */}
                </div>

                <div>
                  <div className="checkbox-input-alignment">
                    <input type="radio" id="Schedule_Meeting" name="Meeting" value="Schedule_Meeting" onChange={(e) => handleOnChnage(e)} />
                    <label for="Schedule_time">Schedule time</label>
                  </div>
                  <div>
                    <div className="date-time-input-alignment">
                      <input
                        type="datetime-local"
                        placeholder="Date"
                        id="Meeting_time"
                        name="Meeting_time"
                        onChange={(e) => handleOnChnage(e)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 
            <div className="contact-button-alignment">
              <button onClick={() => setContactModel(false)}>Cancel</button>
              <button onClick={() => handleSubmitCustomerSupplier()}>
                Submit
              </button>
            </div> */}
          </div>
        </div>
      </>
    );
  };

  //   const handleCreateSession = async () => {
  //     const token = await getToken();
  //     const meetingId = await createMeeting({ token });

  //     setHostToken(token);
  //     setMeetingLink(meetingId);
  //   };

  //   const handleSubmitCustomerSupplier = async (e) => {
  //     e.preventDefault();
  //     const token = await getToken();
  //     const meetingId = await createMeeting({ token });

  //     const venderDetail = {
  //       buyerId: userID?.id,
  //       email: userID?.emailId,
  //       number: userID?.phoneNo,
  //     };

  //     const venderData = {
  //       buyer: venderDetail,
  //       country: countryData?.name,
  //       instantMeeting: inputvalue?.Meeting === "Instant_Meeting" ? true : false,
  //       scheduleTime: moment(inputvalue?.Meeting_time).utc().format(),
  //       MeetingType: inputvalue?.call === "Audio_Call" ? "audio" : "video",
  //       meetingLink: `${process.env.REACT_APP_AAZIKO_MEETING_LINK}?meetingId=${meetingId}&token=${token}&joinScreenEnabled=true&canDrawOnWhiteboard=true&canToggleWhiteboard=true`,
  //     };

  //     await ApiPost(`contact-supplier/create`, venderData)
  //       .then((res) => {
  //         toast.success("success");
  //         setContactModel(false);
  //       })
  //       .catch((error) => {});
  //   };

  //   const handleJoinHostSession = () => {
  //     window.open(
  //       `//${videoUrl}/?meetingId=${meetingLink}&token=${hostToken}&joinScreenEnabled=true&canDrawOnWhiteboard=true&canToggleWhiteboard=true`
  //     );
  //   };

  //   const sendEmailHostSession = (data) => {
  //     const emailObject = {
  //       email: userID?.emailId,
  //       link: `//${videoUrl}/?meetingId=${meetingLink}&token=${hostToken}&joinScreenEnabled=true&canDrawOnWhiteboard=true&canToggleWhiteboard=true`,
  //     };

  //     ApiPost("meeting/mail", emailObject)
  //       .then((res) => {
  //         console.log("MainSent", res);
  //       })
  //       .catch((err) => {
  //         console.log("MainSentError", err);
  //       });
  //   };

  return (
    <>
      <div className="new-chat-icon" onClick={() => setModalOpen(!modalOpen)}>
        {/* <i class="fa-brands fa-rocketchat"></i> */}
        <img src={aazikoLOGO} />
      </div>
      <div className={modalOpen ? "chat-new-modal open-chat" : "chat-new-modal"}>
        <div className="chat-design-all-content-alignment">
          <section class="msger">
            <header class="msger-header">
              <div class="msger-header-title">Mr.AazikoAI </div>
            </header>

            <main class="msger-chat">
              {!contactModel ? (
                <>
                  {history?.map((data, i) => {
                    return (
                      <>
                        {data?.question && data?.question?.length > 0 && (
                          <div class="msg right-msg">
                            <div class="msg-bubble">
                              <div class="msg-text">{data?.question}</div>
                            </div>
                          </div>
                        )}
                        {data?.answer && data?.answer?.length > 0 && (
                          <div class="msg left-msg">
                            <div class="msg-bubble">
                              <div class="msg-text">
                                {" "}
                                <ReactMarkdown>{data?.answer}</ReactMarkdown>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })}
                  {loader && (
                    <div class="lds-ellipsis">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  )}
                </>
              ) : (
                ModleChildren()
              )}
            </main>

            <form class="msger-inputarea">
              <div className="new-icon-relative-div">
                <input
                  type="text"
                  class="msger-input"
                  placeholder="Enter your message..."
                  id="question"
                  name="question"
                  value={inputValue?.question}
                  onChange={(e) => {
                    onhandleChange(e);
                  }}
                />
                {/* <div
                  className="first-icon"
                  onClick={() => {
                    setContactModel(!contactModel);
                    setKey("audio");
                  }}
                >
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div
                  className="sec-icon"
                  onClick={() => {
                    setContactModel(!contactModel);
                    setKey("video");
                  }}
                >
                  <i class="fa-solid fa-video"></i>
                </div> */}

                {/* <div
                  className="first-icon"
                  onClick={() => {
                    handleJoinHostSession();
                    sendEmailHostSession();
                  }}
                >
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div
                  className="sec-icon"
                  onClick={() => {
                    handleJoinHostSession();
                    sendEmailHostSession();
                  }}
                > */}
                {/* <i class="fa-solid fa-video"></i>
                </div> */}
              </div>
              <button
                class="msger-send-btn"
                onClick={(e) =>
                  // contactModel
                  //   ? handleSubmitCustomerSupplier(e)
                  // :
                  handleSendChat(e)
                }
              >
                Send
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
