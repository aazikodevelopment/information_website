import React, { useEffect, useState } from "react";
import "./BlogDetail.scss";
import CalenderImg from "../../assets/Image/calender2.png";
import CommentImg from "../../assets/Image/commet2.png";
import EyesImg from "../../assets/Image/eyes2.png";
import ShareImg from "../../assets/Image/shareImg.png";

import { ApiGet, ApiPut } from "../../helpers/API/ApiData";
import { useParams } from "react-router-dom";
import moment from "moment";
import ReactHtmlParser from "html-react-parser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BlogDetail() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const { id } = useParams();
  const AwsLinkImge = process.env.REACT_APP_AWSLINK + process.env.REACT_APP_PACKAGING_TYPE+'/';

  const [blogDetails, setBlogDetails] = useState([]);
  const [blogDetailsData, setBlogDetailsData] = useState([]);
  const [blogDataRecent, setBlogDataRecent] = useState([]);
  const [errors, setErrors] = useState("");
  const [inputValue, setinputvalue] = useState({});
  const [commentchange, setCommentchange] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const commentChange = (e) => {
    setCommentchange(e.target.value);
  };
  const validateForm = () => {
    let formIsValid = true;
    let errors = "";
    if (!commentchange) {
      formIsValid = false;
      errors = "*Please enter commants!";
    }
    setErrors(errors);
    return formIsValid;
  };

  useEffect(() => {
    redirectBlogDetail();
    handleGetBlogData();
    // {window.location.pathname === 'blog' && window.location.reload()}
    getBlogDataRecent();
  }, []);

  const getBlogDataRecent = () => {
    ApiGet(`template-master/find-blog`)
      .then((res) => {
        setBlogDataRecent(res?.data?.data?.template);
      })
      .catch(() => {
        console.log("errorr");
      });
  };

  const redirectBlogDetail = () => {
    ApiGet(`template-master/find-blog?id=${id}`)
      .then((res) => {
        setBlogDetails(res?.data?.data?.template[0]);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const handleGetBlogData = async () => {
    await ApiGet(`template-master/find?id=${id}&userType=superAdmin`)
      .then((res) => {
        // setBlogData(res.data.data?.template);
        setBlogDetailsData(res?.data?.data?.template);
      })
      .catch((err) => {});
  };

  const commentReplySend = () => {
    if (validateForm()) {
      const data = {
        commentDetail: "commentchange",
        // commentBy: accessDataFromLocalStore?.userName,
        // email: accessDataFromLocalStore?.emailId,
        // referenceId: blogCommentIdx,
      };

      ApiPut(
        `template-master/view-share-comment?id=${blogDetailsData[0]?._id}`,
        data
      )
        .then((res) => {
          if (res?.data?.success) {
            // toast.success("replyed successfully");
            // setBlogCommentIdx("");
          }
        })
        .catch((err) => {
          // toast.error("err");
        });
    }
  };

  const onhandleChange = (e) => {
    const { name, value } = e.target;
    setinputvalue({ ...inputValue, [name]: value });
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    const data = {
      commentBy: inputValue?.commentBy,
      commentDetail: inputValue?.commentDetails,
      email: inputValue?.email,
    };
    // if (validateForm()) {

    await ApiPut(`template-master/view-share-comment?id=${id}`, data)
      .then((res) => {
        if (res?.status === 200) {
          toast.success("Successfully Send!!");
          setinputvalue({ email: "", commentBy: "", commentDetail: "" });
          handleGetBlogData();
        } else {
          toast.error("something went wrong, please try again!! ");
        }
      })
      .catch((err) => {
        // toast.error(err.message);
      });
    // }
  };

  return (
    <div>
      <ToastContainer />
      <div className="blogdetail-section">
        <div className="home-img">
          {/* <img src={HomeImg} /> */}
          <img
            src={`${AwsLinkImge}${blogDetails?.mainImagePath}`}
            width={100}
            style={{ height: "458px", objectFit: "cover" }}
          />
        </div>
        <div className="container">
          <div className="home-content">
            <div className="content-main">
              <div className="descrition">
                <h2>{blogDetails?.blogName}</h2>
                <div className="icon-section-main">
                  <div className="icon-section">
                    <img src={CalenderImg} alt="CalenderImg" />
                    <span>
                      {" "}
                      {moment(blogDetails?.createdAt).format("MMM D YYYY")}
                    </span>
                  </div>
                  <div className="icon-section">
                    <img src={CommentImg} alt="CommentImg" />
                    <span>1</span>
                  </div>
                  <div className="icon-section">
                    <img src={EyesImg} alt="EyesImg" />
                    <span>{blogDetails?.view}</span>
                  </div>
                  <div className="icon-section">
                    <img src={ShareImg} alt="ShareImg" />
                    <span>{blogDetails?.share}</span>
                  </div>
                </div>
              </div>
              <div className="profile-img">
                <div className="img-text">
                  <p>Author</p>
                  <h2 style={{ marginTop: "7px" }}>
                    {blogDetails?.authorName}
                  </h2>
                </div>
                <div>
                  {/* <img src={ProfileImg} /> */}
                  <img
                    src={`${AwsLinkImge}${blogDetails?.authorImagePath}`}
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "100px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="content-section">
              <div>
                {ReactHtmlParser(
                  blogDetails?.entryHtmlCode ? blogDetails?.entryHtmlCode : "-"
                )}
                {/* {blogDetails?.entryHtmlCode} */}
              </div>
            </div>
          </div>

          {/*  */}
          <div className="relatedpost-section">
            <h2>Related Post</h2>
            <div className="post-section-grid">
              {blogDataRecent &&
                blogDataRecent?.slice(0, 4)?.map((data) => {
                  return (
                    <>
                      <div className="grid-item">
                        <img
                          src={`${AwsLinkImge}${data?.mainImagePath}`}
                          alt="img"
                        />
                        {/* <img src={postImg} /> */}

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>
                            <b>{data?.blogName}</b>
                          </p>

                          <p style={{ fontSize: "11px" }}>
                            {moment(data?.createdAt).format("MMM D YYYY")}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
          {/* <div className="comment-section">
            <h2>
              {blogDetailsData[0]?.commentDetails?.length
                ? blogDetailsData[0]?.commentDetails?.length + "Comments"
                : "Comments not found"}{" "}
              
            </h2>

            {blogDetailsData[0]?.commentDetails?.map((comment, i) => {
              return (
                <>
                  <div className="chat-main-section">
                    <div className="chat-profile">
                      <img src={profilechat} />
                    </div>
                    <div className="chat-massege">
                      <div className="profile-name">
                        <div className="name-main">
                          <div>
                            <h3>{comment?.vCommentBy}</h3>
                            <div className="calender-img">
                              <img src={Calender1Img} />
                              <span>
                                {moment(comment?.createdAt).format("LL")}
                              </span>
                            </div>
                          </div>
                          <div className="reply-section">
                            <span>Reply</span>
                          </div>
                        </div>
                        <p>{comment?.vCommentDetails}</p>
                      </div>
                      <div className="send-messge">
                        <div className="send-input">
                          {" "}
                          <input
                            type="text"
                            id={comment?._id}
                            onChange={(e) => commentChange(e)}
                            placeholder="Type your Comment..."
                          />
                        </div>
                        <div onClick={() => commentReplySend()} className="send-button">
                          <button>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.15123 14.8845L15.5005 8.73368C16.1665 8.44587 16.1665 7.50845 15.5005 7.22064L1.15123 1.0698C0.608506 0.831329 0.00822304 1.23426 0.00822304 1.8181L0 5.60892C0 6.02007 0.304253 6.37366 0.715405 6.423L12.3346 7.97716L0.715405 9.52309C0.304253 9.58065 0 9.93425 0 10.3454L0.00822304 14.1362C0.00822304 14.7201 0.608506 15.123 1.15123 14.8845Z"
                                fill="white"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {comment?.iSubID?.map((subid, i) => {
                    return (
                    <div className="chat-main-section margin-alignment" key={i}>
                      <div className="chat-profile">
                        <img src={profilechat} />
                      </div>
                      <div className="chat-massege">
                        <div className="profile-name">
                          <div className="name-main">
                            <div>
                              <h3>{subid?.vCommentBy}</h3>
                              <div className="calender-img">
                                <img src={Calender1Img} />
                                <span>{moment(subid?.createdAt).format("LL")}</span>
                              </div>
                            </div>
                            <div className="reply-section">
                              <span>Reply</span>
                            </div>
                          </div>
                          <p>
                          {subid?.vCommentDetails}
                          </p>
                        </div>
                      </div>
                    </div>
                    );
                  })}
                </>
              );
            })}
          </div> */}

          <div className="leave-comment-section">
            <h2>Leave a comment</h2>
            <div className="messge-section">
              <div className="grid-main">
                <div className="grid-item">
                  <input
                    type="text"
                    name="commentBy"
                    onChange={(e) => {
                      onhandleChange(e);
                    }}
                    value={inputValue?.commentBy}
                    placeholder="Evlin Medderian"
                  />
                </div>
                <div className="grid-item">
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => {
                      onhandleChange(e);
                    }}
                    value={inputValue?.email}
                    placeholder="xyz@gmail.com"
                  />
                </div>
              </div>
              <div className="grid-section">
                <textarea
                  type="text"
                  name="commentDetails"
                  onChange={(e) => {
                    onhandleChange(e);
                  }}
                  // value={inputValue?.commentDetail}
                  placeholder="Your Comment"
                />
              </div>
            </div>
            <div className="leave-button">
              <button onClick={(e) => handleAddComment(e)}>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
