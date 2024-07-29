import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import "./NewHome.scss";
import Logo from "../../assets/logo/aaziko-light.svg";
import HumberIcon from "../../assets/icons/humber.svg";
import GifBackground from "../../assets/icons/gif-background.gif";
import NewFooter from "./NewFooter";
import GlobalSourcing from "./GlobalSourcing";
import AssociaxtedWith from "./AssociatedWith/index";
import { Fade } from "react-reveal";
import Vision from "./Vision";
import { NavLink } from "react-router-dom";
import EarthImg from "../../assets/Image/earth-bg-img.png";
import Videofile from "../../assets/video/web-planet.mp4";
import Loader from "../../components/loader";
export default function NewHome() {
  const [menu, setMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileChildMenu, setMobileChildMenu] = useState(false);
  const [mobileTransportMenu, setMobileTransportMenu] = useState(false);
  const [mobileCustomMenu, setMobileCustomMenu] = useState(false);
  const [mobileInspectionMenu, setMobileInspectionMenu] = useState(false);
  const [mobileActivityMenu, setMobileActivityMenu] = useState(false);
  const [mobileCraftedMenu, setMobileCraftedMenu] = useState(false);
  const [mobileAazikoMenu, setMobileAazikoMenu] = useState(false);
  const [activeHover, setActiveHover] = useState(0);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    APiCall();
  }, [isAdmin]);

  const APiCall = () => {
    const queryParams = window.location.href.split('?')[1];
    if (!queryParams) return;

    const params = queryParams.split('&');

    const tokenParam = params.find(param => param.includes('token='));

    if (tokenParam) {
      const tokenValue = tokenParam.split('=')[1];
      const token = tokenValue.replace(/%22/g, "")
      const options = {
        headers: { 'x-auth-token': `${token}` }
      };

      fetch('https://api.dev.aaziko.com/sayaexim/v1/type/authenticate-admin', options)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          if (data.success === true) {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  };
  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  console.log("videoEndedvideoEnded", videoEnded);
  return (
    <div>
      <Loader />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0" }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        {/* video-after-close */}
        <div className={`main-video ${videoEnded ? "video-after-close" : ""}`}>
          <video
            src={Videofile}
            className={`${videoEnded ? "video-hide-close" : ""}`}
            autoPlay={true}
            muted
            ref={videoRef}
            onEnded={handleVideoEnd}
          ></video>

          <div className="min-heihgt-home-page">
            <div className="container">
              <div className="header-alignment">
                <div className="logo">
                  <NavLink to="/">
                    <img src={Logo} alt="Logo" />
                  </NavLink>
                </div>
                <div className="menu" onClick={() => setMenu(!menu)}>
                  <img src={HumberIcon} alt="HumberIcon" />
                </div>
                <div
                  className="mobile-view-menu"
                  onClick={() => setMobileMenu(true)}
                >
                  <img src={HumberIcon} alt="HumberIcon" />
                </div>
                {/* {mobileMenu && ( */}
                <div
                  className={
                    mobileMenu
                      ? "mobile-view-sidebar-alignment show-sidebar"
                      : "mobile-view-sidebar-alignment hidden-sidebar"
                  }
                >
                  <div className="mobile-view-header-alignment">
                    <div className="mobile-view-logo-alignment">
                      <img src={Logo} alt="Logo" />
                    </div>
                    <div
                      className="mobile-view-close-icon"
                      onClick={() => setMobileMenu(false)}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                  </div>

                  <div className="mobile-view-sidebar-details-alignment">
                    <ul>
                      <li>
                        <div className="mobile-view-menu-name-alignment">
                          Home
                        </div>
                      </li>
                      <li>
                        <div className="mobile-view-menu-name-alignment">
                          How We Works
                          <div
                            className="mobile-view-icon-alignment"
                            onClick={() => setMobileChildMenu(!mobileChildMenu)}
                          >
                            <i className="fa-solid fa-chevron-right"></i>
                          </div>
                        </div>
                        <div
                          className={
                            mobileChildMenu
                              ? "mobile-menu-child-option-alignment show-option"
                              : "mobile-menu-child-option-alignment hidden-option "
                          }
                        >
                          <div className="mobile-menu-option-details-alignment">
                            <h6>Buyer</h6>
                            <div className="mobile-view-home-child-name-alignment">
                              <NavLink to="/how-we-work-for-buyer-new">
                                <p>How We Help</p>
                              </NavLink>
                              <NavLink to="/lsqs">
                                <p>Lsq [Let Supplier Quote]</p>
                              </NavLink>
                            </div>
                          </div>

                          <div className="mobile-menu-option-details-alignment">
                            <h6>SUPPLER</h6>
                            <div className="mobile-view-home-child-name-alignment">
                              <NavLink to="/how-we-work-for-seller-new">
                                <p>How We Help</p>
                              </NavLink>
                              <a
                                href="https://vendors.aaziko.com/lsq"
                                target="_blank"
                              >
                                <p>Lsq Market</p>
                              </a>
                              <NavLink to="/seller-collaborate">
                                <p>Collabrate</p>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="mobile-view-menu-name-alignment">
                          Transport
                          <div
                            className="mobile-view-icon-alignment"
                            onClick={() =>
                              setMobileTransportMenu(!mobileTransportMenu)
                            }
                          >
                            <i className="fa-solid fa-chevron-right"></i>
                          </div>
                        </div>

                        <div
                          className={
                            mobileTransportMenu
                              ? "mobile-menu-child-option-alignment show-option"
                              : "mobile-menu-child-option-alignment hidden-option "
                          }
                        >
                          <div className="mobile-menu-option-details-alignment">
                            <h6>Tools</h6>
                            <div className="mobile-view-home-child-name-alignment">
                              <NavLink to="/logistic-explorer">
                                <p onClick={() => setActiveHover(0)}>
                                  logistics explorer
                                </p>
                              </NavLink>
                              {/* <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  Ship schedules
                                </p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  logistics map
                                </p>
                              </NavLink> */}
                              <NavLink to="/container-tracking">
                                <p onClick={() => setActiveHover(0)}>
                                  container tracking
                                </p>
                              </NavLink>
                              <NavLink to="/aaziko-load-calculator">
                                <p onClick={() => setActiveHover(0)}>
                                  load calculator
                                </p>
                              </NavLink>
                              {/* <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  distance & time
                                </p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  smart documents
                                </p>
                              </NavLink> */}
                            </div>
                          </div>

                          <div className="mobile-menu-option-details-alignment">
                            <h6>Services</h6>
                            <div className="mobile-view-home-child-name-alignment">
                              <NavLink to="/aaziko-request-quote">
                                <p onClick={() => setActiveHover(0)}>
                                  REQUEST A QUOTE
                                </p>
                              </NavLink>
                              <NavLink to="/logistics-service">
                                <p onClick={() => setActiveHover(0)}>
                                  LOGISTICS SERVICES
                                </p>
                              </NavLink>

                              <hr />
                              <div>
                                <NavLink to="/route-planner">
                                  <p onClick={() => setActiveHover(0)}>
                                    ROUTE PLANNER
                                  </p>
                                </NavLink>
                                <NavLink to="/fcl-shipping">
                                  <p onClick={() => setActiveHover(0)}>
                                    FCL SHIPPING
                                  </p>
                                </NavLink>
                                <NavLink to="/lcl-shipping">
                                  <p onClick={() => setActiveHover(0)}>
                                    LCL SHIPPING
                                  </p>
                                </NavLink>
                                <NavLink to="/bulkcargo-shipchartering">
                                  <p onClick={() => setActiveHover(0)}>
                                    BULK CARGO & SHIP CHARTERING{" "}
                                  </p>
                                </NavLink>
                                <NavLink to="/dangerous-goods-transportation">
                                  <p onClick={() => setActiveHover(0)}>
                                    DANGEROUS GOODS TRANSPORTATION
                                  </p>
                                </NavLink>
                                <NavLink to="/warehousing">
                                  <p onClick={() => setActiveHover(0)}>
                                    WAREHOUSING
                                  </p>
                                </NavLink>
                              </div>
                              <div>
                                <NavLink to="/reefer-cargo-delivery">
                                  <p onClick={() => setActiveHover(0)}>
                                    REEFER CARGO DELIVERY{" "}
                                  </p>
                                </NavLink>
                                <NavLink to="/survey-services">
                                  <p onClick={() => setActiveHover(0)}>
                                    SURVEY SERVICES
                                  </p>
                                </NavLink>
                                <NavLink to="/customs-clearance">
                                  <p onClick={() => setActiveHover(0)}>
                                    CUSTOMS CLEARANCE
                                  </p>
                                </NavLink>
                                <NavLink to="/project-cargo">
                                  <p onClick={() => setActiveHover(0)}>
                                    PROJECT CARGO
                                  </p>
                                </NavLink>
                                <NavLink to="/all-shipping-leads">
                                  <p onClick={() => setActiveHover(0)}>
                                    ALL SHIPPING LEADS
                                  </p>
                                </NavLink>
                                <NavLink to="/aaziko-load-calculator">
                                  <p onClick={() => setActiveHover(0)}>
                                    LOAD CALCULATOR
                                  </p>
                                </NavLink>
                                <NavLink to="/container-tracking">
                                  <p onClick={() => setActiveHover(0)}>
                                    CONTAINER TRACKING
                                  </p>
                                </NavLink>
                              </div>
                            </div>
                          </div>
                          <div className="mobile-menu-option-details-alignment">
                            <h6>references</h6>
                            <div className="mobile-view-home-child-name-alignment">
                              <NavLink to="/route-planner">
                                <p onClick={() => setActiveHover(0)}>
                                  WORLD SEA PORTS
                                </p>
                              </NavLink>
                              <NavLink to="/fcl-shipping">
                                <p onClick={() => setActiveHover(0)}>
                                  FIND PORTS BY SHIPPING LINE
                                </p>
                              </NavLink>
                              <NavLink to="/lcl-shipping">
                                <p onClick={() => setActiveHover(0)}>
                                  SEA LINES EXPLORER{" "}
                                </p>
                              </NavLink>
                              <NavLink to="/bulkcargo-shipchartering">
                                <p onClick={() => setActiveHover(0)}>
                                  UNIT CONVERTER
                                </p>
                              </NavLink>
                              <NavLink to="/dangerous-goods-transportation">
                                <p onClick={() => setActiveHover(0)}>
                                  DEMURRAGE & STORAGE
                                </p>
                              </NavLink>
                              <NavLink to="/shipping-lines">
                                <p onClick={() => setActiveHover(0)}>
                                  SHIPPING LINES DIRECTORY
                                </p>
                              </NavLink>
                            </div>
                          </div>
                          <div className="mobile-menu-option-details-alignment">
                            <h6>Company</h6>
                            <div className="mobile-view-home-child-name-alignment">
                              <NavLink to="/company-contact-us">
                                <p onClick={() => setActiveHover(0)}>
                                  CONTACT US
                                </p>
                              </NavLink>
                              <NavLink to="/survey-services">
                                <p onClick={() => setActiveHover(0)}>
                                  CARRIERS / FORWARDERS
                                </p>
                              </NavLink>
                              <NavLink to="/customs-clearance">
                                <p onClick={() => setActiveHover(0)}>
                                  IMPORTERS / EXPORTERS
                                </p>
                              </NavLink>
                              <NavLink to="/about-us">
                                <p onClick={() => setActiveHover(0)}>
                                  ABOUT US
                                </p>
                              </NavLink>
                              <NavLink to="/aaziko-load-calculator">
                                <p onClick={() => setActiveHover(0)}> HELP</p>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="mobile-view-menu-name-alignment">
                          Customs
                          <div
                            className="mobile-view-icon-alignment"
                            onClick={() =>
                              setMobileCustomMenu(!mobileCustomMenu)
                            }
                          >
                            <i className="fa-solid fa-chevron-right"></i>
                          </div>
                        </div>

                        <div
                          className={
                            mobileCustomMenu
                              ? "mobile-menu-child-option-alignment show-option"
                              : "mobile-menu-child-option-alignment hidden-option "
                          }
                        >
                          <div className="mobile-menu-option-details-alignment">
                            <div className="mobile-view-home-child-name-alignment">
                              <NavLink to="/customs">
                                <p onClick={() => setActiveHover(0)}> Customs</p>
                              </NavLink>
                              {
                                isAdmin === true ? (

                                  <>
                                    <NavLink to="/customs-easy">
                                      <p onClick={() => setActiveHover(0)}>HOW WE MAKE CUSTOMS EASY</p>
                                    </NavLink>
                                    <NavLink to="/customs-2">
                                      <p onClick={() => setActiveHover(0)}>Customs 2.0</p>
                                    </NavLink>
                                  </>

                                ) : null
                              }
                              {/* <NavLink to="/customs-easy">
                                <p onClick={() => setActiveHover(0)}>HOW WE MAKE CUSTOMS EASY</p>
                              </NavLink>
                              <NavLink to="/customs-2">
                                <p onClick={() => setActiveHover(0)}>Customs 2.0</p>
                              </NavLink> */}
                              <NavLink to="/trade-agreement">
                                <p onClick={() => setActiveHover(0)}> TRADE AGREEMENT </p>
                              </NavLink>
                              {/* <NavLink to="/customs">
                                <p onClick={() => setActiveHover(0)}>
                                  {" "}
                                  Customs
                                </p>
                              </NavLink> */}
                              {/* <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  HOW WE MAKE CUSTOMS EASY
                                </p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  {" "}
                                  TRADE AGREEMENT{" "}
                                </p>
                              </NavLink> */}
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="mobile-view-menu-name-alignment">
                          Inspection
                          <div
                            className="mobile-view-icon-alignment"
                            onClick={() =>
                              setMobileInspectionMenu(!mobileInspectionMenu)
                            }
                          >
                            <i className="fa-solid fa-chevron-right"></i>
                          </div>
                        </div>

                        <div
                          className={
                            mobileInspectionMenu
                              ? "mobile-menu-child-option-alignment show-option"
                              : "mobile-menu-child-option-alignment hidden-option "
                          }
                        >
                          <div className="mobile-menu-option-details-alignment">
                            <h6>PRODUCT QUALITY</h6>
                            <div className="mobile-view-home-child-name-alignment">
                              <NavLink to="/onsite-inspections">
                                <p onClick={() => setActiveHover(0)}>
                                  ONSITE INSPECTIONS
                                </p>
                              </NavLink>
                              <NavLink to="/remote-inspection">
                                <p onClick={() => setActiveHover(0)}>
                                  REMOTE INSPECTIONS{" "}
                                </p>
                              </NavLink>
                              {/* <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  PRODUCTS TESTING
                                </p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  QUALITY ASSURANCE
                                </p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  REMOTE SAMPLE APPROVAL
                                </p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  PRE-CUSTOMS CLEARANCE INSPECTIONS{" "}
                                </p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  SAMPLE REVIEW SERVICE
                                </p>
                              </NavLink> */}
                            </div>
                          </div>

                          <div className="mobile-menu-option-details-alignment">
                            <div className="mobile-view-home-child-name-alignment">
                              {/* <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  PPI (PRE-PRODUCTION INSPECTION)
                                </p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  DPI (DURING PRODUCTION INSPECTION)
                                </p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  CLI (CONTAINER LOADING INSPECTION)
                                </p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  FRI (FINAL RANDOM INSPECTION)
                                </p>
                              </NavLink> */}
                            </div>
                          </div>

                          <div className="mobile-menu-option-details-alignment">
                            <div className="mobile-view-home-child-name-alignment">
                              {/* <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  Sampling and Testing
                                </p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  Documentation Review
                                </p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  Special Inspections
                                </p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  Auditing and Compliance
                                </p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  Certification and Approval
                                </p>
                              </NavLink> */}
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="mobile-view-menu-name-alignment">
                          Finance
                        </div>
                      </li>
                      <li>
                        <div className="mobile-view-menu-name-alignment">
                          Activity
                          <div
                            className="mobile-view-icon-alignment"
                            onClick={() =>
                              setMobileActivityMenu(!mobileActivityMenu)
                            }
                          >
                            <i className="fa-solid fa-chevron-right"></i>
                          </div>
                        </div>

                        <div
                          className={
                            mobileActivityMenu
                              ? "mobile-menu-child-option-alignment show-option"
                              : "mobile-menu-child-option-alignment hidden-option "
                          }
                        >
                          <div className="mobile-menu-option-details-alignment">
                            <div className="mobile-view-home-child-name-alignment">
                              <NavLink to="/gallery-page">
                                <p onClick={() => setActiveHover(0)}>Music</p>
                              </NavLink>
                              <NavLink to="/gallery-page">
                                <p onClick={() => setActiveHover(0)}>Video</p>
                              </NavLink>
                              <NavLink to="/gallery-page">
                                <p onClick={() => setActiveHover(0)}>Metting</p>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="mobile-view-menu-name-alignment">
                          Crafted in India
                          <div
                            className="mobile-view-icon-alignment"
                            onClick={() =>
                              setMobileCraftedMenu(!mobileCraftedMenu)
                            }
                          >
                            <i className="fa-solid fa-chevron-right"></i>
                          </div>
                        </div>

                        <div
                          className={
                            mobileCraftedMenu
                              ? "mobile-menu-child-option-alignment show-option"
                              : "mobile-menu-child-option-alignment hidden-option "
                          }
                        >
                          <div className="mobile-menu-option-details-alignment">
                            <div className="mobile-view-home-child-name-alignment">
                              {/* <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}> GI TAG</p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  INDIAN INDUSTRY
                                </p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  {" "}
                                  AGREEMENT
                                </p>
                              </NavLink> */}
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="mobile-view-menu-name-alignment">
                          Aaziko
                          <div
                            className="mobile-view-icon-alignment"
                            onClick={() =>
                              setMobileAazikoMenu(!mobileAazikoMenu)
                            }
                          >
                            <i className="fa-solid fa-chevron-right"></i>
                          </div>
                        </div>

                        <div
                          className={
                            mobileAazikoMenu
                              ? "mobile-menu-child-option-alignment show-option"
                              : "mobile-menu-child-option-alignment hidden-option "
                          }
                        >
                          <div className="mobile-menu-option-details-alignment">
                            <NavLink to="/work-with-aaziko">
                              <h6>Work With Aaziko</h6>
                            </NavLink>
                          </div>
                          <div className="mobile-menu-option-details-alignment">
                            <h6>About Aaziko</h6>
                            <div className="mobile-view-home-child-name-alignment">
                              <NavLink to="/our-feature">
                                <p onClick={() => setActiveHover(0)}>
                                  Our Future
                                </p>
                              </NavLink>
                              <NavLink to="/oprations-counsil">
                                <p onClick={() => setActiveHover(0)}>
                                  Oprations counsil
                                </p>
                              </NavLink>
                              <NavLink to="/integrity">
                                <p onClick={() => setActiveHover(0)}>
                                  Integrity
                                </p>
                              </NavLink>
                            </div>
                          </div>
                          <div className="mobile-menu-option-details-alignment">
                            <h6>Press Room</h6>
                            <div className="mobile-view-home-child-name-alignment">
                              <NavLink to="/press-room">
                                <p onClick={() => setActiveHover(0)}>
                                  Press release
                                </p>
                              </NavLink>
                            </div>
                          </div>
                          <div className="mobile-menu-option-details-alignment">
                            <h6>Press Room</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* )} */}
                <div
                  className={
                    menu
                      ? activeHover === 0
                        ? "menu-show menu-show-design"
                        : "menu-show menu-show-design meni-data-show-align"
                      : "menu-show menu-hide"
                  }
                >
                  <NavLink to="/">Home</NavLink>
                  <a onClick={() => setActiveHover(1)}>How We Works</a>
                  <a onClick={() => setActiveHover(2)}>Transport</a>
                  <a onClick={() => setActiveHover(8)}>Customs</a>
                  <a onClick={() => setActiveHover(3)}>Inspection</a>
                  {/* <NavLink to="/coming-soons">Finance</NavLink> */}

                  <a onClick={() => setActiveHover(5)}>Activity</a>
                  <a onClick={() => setActiveHover(6)}>Crafted in India</a>
                  <a onClick={() => setActiveHover(7)}>Aaziko</a>
                </div>
              </div>
              {activeHover == 1 && (
                <div className="black-menu-content-bg-layer ">
                  <div className="menu-container-dropdown">
                    <div
                      className="menu-container-content"
                      onMouseLeave={() => setActiveHover(0)}
                    >
                      <div className="container">
                        <div className="home-menu-content-alignment">
                          <div className="home-menu-grid-alignment">
                            <div className="home-menu-details-alignment">
                              <h6>BUYER</h6>

                              <div className="home-child-name-alignment">
                                <NavLink to="/how-we-work-for-buyer-new">
                                  <p onClick={() => setActiveHover(0)}>
                                    How We Help
                                  </p>
                                </NavLink>
                                <NavLink to="/lsqs">
                                  <p onClick={() => setActiveHover(0)}>
                                    Lsq [Let Supplier Quote]
                                  </p>
                                </NavLink>
                              </div>
                            </div>
                            <div className="home-menu-details-alignment">
                              <h6>SUPPLER</h6>

                              <div className="home-child-name-alignment">
                                <NavLink to="/how-we-work-for-seller-new">
                                  <p onClick={() => setActiveHover(0)}>
                                    How We Help
                                  </p>
                                </NavLink>
                                <a
                                  href="https://vendors.aaziko.com/lsq"
                                  target="_blank"
                                >
                                  <p onClick={() => setActiveHover(0)}>
                                    Lsq Market
                                  </p>
                                </a>
                                <NavLink to="/seller-collaborate">
                                  <p onClick={() => setActiveHover(0)}>
                                    Collabrate
                                  </p>
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeHover == 2 && (
                <div className="black-menu-content-bg-layer ">
                  <div className="menu-container-dropdown">
                    <div
                      className="menu-container-content"
                      onMouseLeave={() => setActiveHover(0)}
                    >
                      {/* <div className="container"> */}
                      <div className="home-menu-content-alignment transpot-content">
                        <div className="home-menu-grid-alignment transpot-grid">
                          <div className="home-menu-details-alignment transpot-details">
                            <div className="home-child-name-alignment">
                              <h6>Tools</h6>
                              <NavLink to="/logistic-explorer">
                                <p onClick={() => setActiveHover(0)}>
                                  logistics explorer
                                </p>
                              </NavLink>
                              {/* <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  Ship schedules
                                </p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  logistics map
                                </p>
                              </NavLink> */}
                              <NavLink to="/container-tracking">
                                <p onClick={() => setActiveHover(0)}>
                                  container tracking
                                </p>
                              </NavLink>
                              <NavLink to="/aaziko-load-calculator">
                                <p onClick={() => setActiveHover(0)}>
                                  load calculator
                                </p>
                              </NavLink>
                              {/* <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  distance & time
                                </p>
                              </NavLink>
                              <NavLink to="/coming-soons">
                                <p onClick={() => setActiveHover(0)}>
                                  smart documents
                                </p>
                              </NavLink> */}
                            </div>
                          </div>
                          <div className="home-menu-details-alignment transpot-details">
                            <div className="home-child-name-alignment transpot-details">
                              <h6>Services</h6>
                              <NavLink to="/aaziko-request-quote">
                                <p onClick={() => setActiveHover(0)}>
                                  REQUEST A QUOTE
                                </p>
                              </NavLink>
                              <NavLink to="/logistics-service">
                                <p onClick={() => setActiveHover(0)}>
                                  LOGISTICS SERVICES
                                </p>
                              </NavLink>
                              <hr />
                              <div className="child-grid-alignment">
                                <div>
                                  <NavLink to="/route-planner">
                                    <p onClick={() => setActiveHover(0)}>
                                      ROUTE PLANNER
                                    </p>
                                  </NavLink>
                                  <NavLink to="/fcl-shipping">
                                    <p onClick={() => setActiveHover(0)}>
                                      FCL SHIPPING
                                    </p>
                                  </NavLink>
                                  <NavLink to="/lcl-shipping">
                                    <p onClick={() => setActiveHover(0)}>
                                      LCL SHIPPING
                                    </p>
                                  </NavLink>
                                  <NavLink to="/bulkcargo-shipchartering">
                                    <p onClick={() => setActiveHover(0)}>
                                      BULK CARGO & SHIP CHARTERING{" "}
                                    </p>
                                  </NavLink>
                                  <NavLink to="/dangerous-goods-transportation">
                                    <p onClick={() => setActiveHover(0)}>
                                      DANGEROUS GOODS TRANSPORTATION
                                    </p>
                                  </NavLink>
                                  <NavLink to="/warehousing">
                                    <p onClick={() => setActiveHover(0)}>
                                      WAREHOUSING
                                    </p>
                                  </NavLink>
                                </div>
                                <div>
                                  <NavLink to="/reefer-cargo-delivery">
                                    <p onClick={() => setActiveHover(0)}>
                                      REEFER CARGO DELIVERY{" "}
                                    </p>
                                  </NavLink>
                                  <NavLink to="/survey-services">
                                    <p onClick={() => setActiveHover(0)}>
                                      SURVEY SERVICES
                                    </p>
                                  </NavLink>
                                  <NavLink to="/customs-clearance">
                                    <p onClick={() => setActiveHover(0)}>
                                      CUSTOMS CLEARANCE
                                    </p>
                                  </NavLink>
                                  <NavLink to="/project-cargo">
                                    <p onClick={() => setActiveHover(0)}>
                                      PROJECT CARGO
                                    </p>
                                  </NavLink>
                                  <NavLink to="/all-shipping-leads">
                                    <p onClick={() => setActiveHover(0)}>
                                      ALL SHIPPING LEADS
                                    </p>
                                  </NavLink>
                                  <NavLink to="/aaziko-load-calculator">
                                    <p onClick={() => setActiveHover(0)}>
                                      LOAD CALCULATOR
                                    </p>
                                  </NavLink>
                                  <NavLink to="/container-tracking">
                                    <p onClick={() => setActiveHover(0)}>
                                      CONTAINER TRACKING
                                    </p>
                                  </NavLink>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="home-menu-details-alignment transpot-details">
                            <div className="home-child-name-alignment">
                              <h6>references</h6>
                              <NavLink to="/route-planner">
                                <p onClick={() => setActiveHover(0)}>
                                  WORLD SEA PORTS
                                </p>
                              </NavLink>
                              <NavLink to="/fcl-shipping">
                                <p onClick={() => setActiveHover(0)}>
                                  FIND PORTS BY SHIPPING LINE
                                </p>
                              </NavLink>
                              <NavLink to="/lcl-shipping">
                                <p onClick={() => setActiveHover(0)}>
                                  SEA LINES EXPLORER{" "}
                                </p>
                              </NavLink>
                              <NavLink to="/bulkcargo-shipchartering">
                                <p onClick={() => setActiveHover(0)}>
                                  UNIT CONVERTER
                                </p>
                              </NavLink>
                              <NavLink to="/dangerous-goods-transportation">
                                <p onClick={() => setActiveHover(0)}>
                                  DEMURRAGE & STORAGE
                                </p>
                              </NavLink>
                              <NavLink to="/shipping-lines">
                                <p onClick={() => setActiveHover(0)}>
                                  SHIPPING LINES DIRECTORY
                                </p>
                              </NavLink>
                            </div>
                          </div>

                          <div className="home-menu-details-alignment transpot-details">
                            <div className="home-child-name-alignment">
                              <h6>Company</h6>
                              <NavLink to="/company-contact-us">
                                <p onClick={() => setActiveHover(0)}>
                                  CONTACT US
                                </p>
                              </NavLink>
                              <NavLink to="/survey-services">
                                <p onClick={() => setActiveHover(0)}>
                                  CARRIERS / FORWARDERS
                                </p>
                              </NavLink>
                              <NavLink to="/customs-clearance">
                                <p onClick={() => setActiveHover(0)}>
                                  IMPORTERS / EXPORTERS
                                </p>
                              </NavLink>
                              <NavLink to="/about-us">
                                <p onClick={() => setActiveHover(0)}>
                                  ABOUT US
                                </p>
                              </NavLink>
                              <NavLink to="/aaziko-load-calculator">
                                <p onClick={() => setActiveHover(0)}> HELP</p>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              )}

              {activeHover == 3 && (
                <div className="black-menu-content-bg-layer ">
                  <div className="menu-container-dropdown">
                    <div
                      className="menu-container-content"
                      onMouseLeave={() => setActiveHover(0)}
                    >
                      <div className="container">
                        <div className="home-menu-content-alignment">
                          <div className="home-menu-grid-alignment inspection-grid">
                            <div className="home-menu-details-alignment">
                              <div className="home-child-name-alignment">
                                <h6>PRODUCT QUALITY</h6>
                                <NavLink to="/onsite-inspections">
                                  <p onClick={() => setActiveHover(0)}>
                                    ONSITE INSPECTIONS
                                  </p>
                                </NavLink>
                                <NavLink to="/remote-inspection">
                                  <p onClick={() => setActiveHover(0)}>
                                    REMOTE INSPECTIONS{" "}
                                  </p>
                                </NavLink>
                                {/* <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    PRODUCTS TESTING
                                  </p>
                                </NavLink>
                                <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    QUALITY ASSURANCE
                                  </p>
                                </NavLink>
                                <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    REMOTE SAMPLE APPROVAL
                                  </p>
                                </NavLink>
                                <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    PRE-CUSTOMS CLEARANCE INSPECTIONS{" "}
                                  </p>
                                </NavLink>
                                <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    SAMPLE REVIEW SERVICE
                                  </p>
                                </NavLink> */}
                              </div>
                            </div>
                            <div className="home-menu-details-alignment">
                              <div className="home-child-name-alignment">
                                {/* <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    PPI (PRE-PRODUCTION INSPECTION)
                                  </p>
                                </NavLink>
                                <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    DPI (DURING PRODUCTION INSPECTION)
                                  </p>
                                </NavLink>
                                <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    CLI (CONTAINER LOADING INSPECTION)
                                  </p>
                                </NavLink>
                                <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    FRI (FINAL RANDOM INSPECTION)
                                  </p>
                                </NavLink> */}
                              </div>
                            </div>
                            <div className="home-menu-details-alignment">
                              <div className="home-child-name-alignment">
                                {/* <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    Sampling and Testing
                                  </p>
                                </NavLink>
                                <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    Documentation Review
                                  </p>
                                </NavLink>
                                <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    Special Inspections
                                  </p>
                                </NavLink>
                                <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    Auditing and Compliance
                                  </p>
                                </NavLink>
                                <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    Certification and Approval
                                  </p>
                                </NavLink> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeHover == 4 && (
                <div className="black-menu-content-bg-layer ">
                  <div className="menu-container-dropdown">
                    <div
                      className="menu-container-content"
                      onMouseLeave={() => setActiveHover(0)}
                    >
                      <div className="container">
                        <div className="home-menu-content-alignment">
                          <div className="home-menu-grid-alignment">
                            <div className="home-menu-details-alignment">
                              <div className="home-child-name-alignment">
                                {/* <p onClick={() => setActiveHover(0)}>SGS</p>
                              <p onClick={() => setActiveHover(0)}>Work with aaziko</p> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeHover == 5 && (
                <div className="black-menu-content-bg-layer ">
                  <div className="menu-container-dropdown">
                    <div
                      className="menu-container-content"
                      onMouseLeave={() => setActiveHover(0)}
                    >
                      <div className="container">
                        <div className="home-menu-content-alignment">
                          <div className="home-menu-grid-alignment">
                            <div className="home-menu-details-alignment">
                              <div className="home-child-name-alignment">
                                <NavLink to="/gallery-page">
                                  <p onClick={() => setActiveHover(0)}>Music</p>
                                </NavLink>
                                <NavLink to="/gallery-page">
                                  <p onClick={() => setActiveHover(0)}>Video</p>
                                </NavLink>
                                <NavLink to="/gallery-page">
                                  <p onClick={() => setActiveHover(0)}>
                                    Metting
                                  </p>
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* {activeHover == 6 && (
                <div className="black-menu-content-bg-layer ">
                  <div className="menu-container-dropdown">
                    <div
                      className="menu-container-content"
                      onMouseLeave={() => setActiveHover(0)}
                    >
                      <div className="container">
                        <div className="home-menu-content-alignment">
                          <div className="home-menu-grid-alignment">
                            <div className="home-menu-details-alignment">
                              <div className="home-child-name-alignment">
                                <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    {" "}
                                    GI TAG
                                  </p>
                                </NavLink>
                                <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    INDIAN INDUSTRY
                                  </p>
                                </NavLink>
                                <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    {" "}
                                    AGREEMENT
                                  </p>
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )} */}

              {activeHover == 7 && (
                <div className="black-menu-content-bg-layer ">
                  <div className="menu-container-dropdown">
                    <div
                      className="menu-container-content"
                      onMouseLeave={() => setActiveHover(0)}
                    >
                      <div className="container">
                        <div className="home-menu-content-alignment">
                          <div className="home-menu-grid-alignment four-grid">
                            <div className="home-menu-details-alignment">
                              <div className="home-child-name-alignment">
                                <NavLink to="/work-with-aaziko">
                                  <h6>Work With Aaziko</h6>
                                </NavLink>
                              </div>
                            </div>
                            <div className="home-menu-details-alignment">
                              <div className="home-child-name-alignment">
                                <h6>About Aaziko</h6>
                                <NavLink to="/our-feature">
                                  <p onClick={() => setActiveHover(0)}>
                                    Our Future
                                  </p>
                                </NavLink>
                                <NavLink to="/oprations-counsil">
                                  <p onClick={() => setActiveHover(0)}>
                                    Oprations counsil
                                  </p>
                                </NavLink>
                                <NavLink to="/integrity">
                                  <p onClick={() => setActiveHover(0)}>
                                    Integrity
                                  </p>
                                </NavLink>
                              </div>
                            </div>
                            <div className="home-menu-details-alignment">
                              <div className="home-child-name-alignment">
                                <h6>Press Room</h6>
                                <NavLink to="/press-room">
                                  <p onClick={() => setActiveHover(0)}>
                                    Press release
                                  </p>
                                </NavLink>
                              </div>
                            </div>
                            <div className="home-menu-details-alignment">
                              <div className="home-child-name-alignment">
                                <h6>Press Room</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeHover == 8 && (
                <div className="black-menu-content-bg-layer ">
                  <div className="menu-container-dropdown">
                    <div
                      className="menu-container-content"
                      onMouseLeave={() => setActiveHover(0)}
                    >
                      <div className="container">
                        <div className="home-menu-content-alignment">
                          <div className="home-menu-grid-alignment">
                            <div className="home-menu-details-alignment">
                              <div className="home-child-name-alignment">
                                <NavLink to="/customs">
                                  <p onClick={() => setActiveHover(0)}> Customs</p>
                                </NavLink>
                                {
                                  isAdmin === true ? (

                                    <>
                                      <NavLink to="/customs-easy">
                                        <p onClick={() => setActiveHover(0)}>HOW WE MAKE CUSTOMS EASY</p>
                                      </NavLink>
                                      <NavLink to="/customs-2">
                                        <p onClick={() => setActiveHover(0)}>Customs 2.0</p>
                                      </NavLink>
                                    </>

                                  ) : null
                                }
                                {/* <NavLink to="/customs-easy">
                                  <p onClick={() => setActiveHover(0)}>HOW WE MAKE CUSTOMS EASY</p>
                                </NavLink>
                                <NavLink to="/customs-2">
                                  <p onClick={() => setActiveHover(0)}>Customs 2.0</p>
                                </NavLink> */}
                                <NavLink to="/trade-agreement">
                                  <p onClick={() => setActiveHover(0)}> TRADE AGREEMENT </p>
                                </NavLink>
                                {/* <NavLink to="/customs">
                                  <p onClick={() => setActiveHover(0)}>
                                    {" "}
                                    Customs
                                  </p>
                                </NavLink> */}
                                {/* <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    HOW WE MAKE CUSTOMS EASY
                                  </p>
                                </NavLink>
                                <NavLink to="/coming-soons">
                                  <p onClick={() => setActiveHover(0)}>
                                    {" "}
                                    TRADE AGREEMENT{" "}
                                  </p>
                                </NavLink> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="hero-section-all-contnet-alignment">
              <div className="container">
                <div className="grid">
                  <div className="grid-items">
                    <div className="text">
                      <Fade bottom delay={4000}>
                        <span>WHAT WOULD YOU LIKE TO BUY?</span>
                      </Fade>
                      <Fade bottom delay={4000}>
                        <h2>
                          Make <a>Planet</a> Your Market
                        </h2>
                      </Fade>
                      <Fade bottom delay={4000}>
                        <div className="two-button-alignment">
                          <button>Product Inquiry</button>
                          <button>How We Work</button>
                        </div>
                      </Fade>
                    </div>
                  </div>
                  {/* style={ { display:'block'}} */}
                  <div
                    className={`grid-items ${videoEnded ? "gif-open" : "gif-close"
                      }`}
                  >
                    <img src={GifBackground} alt="GifBackground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="new-home-background-black-color">
          <div className="dot-background">
            <Vision />
          </div>
          <AssociaxtedWith />
          <GlobalSourcing />
          <NewFooter />
        </div>
      </motion.div>
    </div>
  );
}
