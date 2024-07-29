
import "./blog.scss";
import SliderImg from "../../assets/Image/homeImg.png";
import Recentpost from "../../assets/Image/recentpost.png";
import postImg from "../../assets/Image/postImg.png";
import postImg2 from "../../assets/Image/recentpost.png";
import React from "react";
import CalenderImg from "../../assets/Image/calenderImg.png";

import CommentImg from "../../assets/Image/commetImg.png";
import EyesImg from "../../assets/Image/eyesImg.png";
import Leftarrow from "../../assets/Image/leftarrow.png";
import Rightarrow from "../../assets/Image/rightarrow.png";
import { NavLink } from "react-router-dom";
import { ApiGet, ApiPost } from "../../helpers/API/ApiData";
import { useEffect, useState } from "react";
import ReactHtmlParser from "html-react-parser";
import moment from "moment";
import { useAtom } from "jotai";
// import { AwsLink, AwsLinkUserRole } from "../../Jotai/AwsLinkAtom";
import { AwsLink, AwsLinkUserRole } from "../../Jotai/AwsLinkAtom";

import { useHistory } from "react-router-dom"

let userID = JSON.parse(localStorage.getItem("userinfo"));

export default function Blog() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])
  const history = useHistory();
  const [blogData, setBlogData] = useState([]);
  const [viewBlogWiseData, setViewBlogWiseData] = useState([]);
  const [indexState, setIndexState] = useState(0);
  const [recentlyUsePost, setRecentlyUsePost] = useState([]);
  const [awsLink] = useAtom(AwsLink);
  const [awsLinkUserRole] = useAtom(AwsLinkUserRole);

  const AwsLinkImge = process.env.REACT_APP_AWSLINK + process.env.REACT_APP_PACKAGING_TYPE + '/';

  useEffect(() => {
    getBlogData();
    getAllCategory();
    recentPost();
  }, []);
  const getBlogData = () => {
    ApiGet(`template-master/find-blog`)
      .then((res) => {
        setBlogData(res?.data?.data?.template);
      })
      .catch(() => {
        console.log("errorr");
      });
  };

  const getAllCategory = () => {
    ApiGet(`common-master/view-blog-wise?letter=blog-category`)
      .then((res) => {
        setViewBlogWiseData(res?.data?.data[0]?.items);
      })
      .catch((error) => { });
  };

  const activeTabBlog = (key, item) => {
    setIndexState(key);
    ApiGet(`template-master/find?categoryId=${item?._id}`)
      .then((res) => {
        setBlogData(res?.data?.data?.template);
      })
      .catch((error) => { });
  };

  const recentPost = () => {
    ApiGet(`template-master/find-recent-blog`)
      .then((res) => {
        setRecentlyUsePost(res?.data?.data?.template);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <div>
      <div className="blog-main-section">
        <div className="slide-section">
          <div className="slide-img">
            <img src={SliderImg} />
          </div>
          <div className="slider-text">
            <h2>Welcome to our Blog</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis,
              malesuada eu orci, sed pharetra. Penatibus duis commodo vitae.
            </p>
          </div>
        </div>
        <div className="tab-section">
          <ul className="tab-main">
            <li className="active">
              {viewBlogWiseData?.map((item, key) => {
                return (
                  <li
                    className={`${indexState == key ? "active" : ""}`}
                    onClick={(e) => activeTabBlog(key, item)}
                  >
                    {item?.vItemName}
                  </li>
                );
              })}
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="post-section">
            <div className="grid-main">
              <div className="grid-item">
                <div className="resent-item">
                  <h2>Recent Post</h2>
                  {recentlyUsePost?.map((item) => {
                    return (
                      <>
                        <div className="post-item">
                          <div className="image">
                            {/* <img src={Recentpost} /> */}
                            <img
                              src={`${AwsLinkImge}${item?.mainImagePath}`}
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="image-text">
                            <h4>{item?.blogName}</h4>
                            <p style={{ marginTop: "5px" }}>
                              {item?.authorName}
                            </p>
                            <button
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                history.push(`/blogdetails/${item?._id}`);
                              }}
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                {/* <div className="resent-item">
                  <h2>News</h2>
                  {[0, 1, 2, 3]?.map(() => {
                    return (
                      <>
                        <div className="post-item">
                          <div className="image">
                            <img src={Recentpost} />
                          </div>
                          <div className="image-text">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Purusetc...
                            </p>
                            <button>Read More</button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div> */}
              </div>
              <div className="grid-item ">
                <div className="grid-section">
                  {blogData?.map((item) => {
                    return (
                      <>
                        <div className="post-main">
                          <div className="post-img">
                            <img
                              src={`${AwsLinkImge}${item?.mainImagePath}`}
                              onClick={() => {
                                history.push(`/blogdetails/${item?._id}`);
                              }}
                            />
                          </div>
                          <div className="img-caption">
                            <div className="icon-section">
                              <img src={CalenderImg} />
                              <span>
                                {moment(item?.createdAt).format("MMM D YYYY")}
                              </span>
                            </div>
                            <div className="icon-section">
                              <img src={CommentImg} />
                              <span>{item?.share}</span>
                            </div>
                            <div className="icon-section">
                              <img src={EyesImg} />
                              <span>{item?.view}</span>
                            </div>
                          </div>
                          <div className="img-content">
                            <h2>{item?.blogName}</h2>

                            <p>
                              {/* {ReactHtmlParser(item?.entryHtmlCode)} */}
                              {ReactHtmlParser(
                                item?.entryHtmlCode?.length > 300
                                  ? item?.entryHtmlCode?.substring(0, 300) +
                                  "..."
                                  : item?.entryHtmlCode
                              )}
                            </p>
                            <button
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                history.push(`/blogdetails/${item?._id}`);
                              }}
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>{" "}
                {/* <div className="pegination">
                  <div className="number arrow">
                    <img src={Leftarrow}/>
                  </div>
                  <div className="number active">
                      <span>1</span>
                  </div>
                   <div className="number">
                      <span>2</span>
                  </div>
                  <div className="number">
                      <span>3</span>
                  </div>
                  <div className="number">
                      <span>4</span>
                  </div>
                  <div className="number">
                      <span>5</span>
                  </div>
                  <div className="number arrow">
                    <img src={Rightarrow}/>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
