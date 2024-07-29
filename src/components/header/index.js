import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AazikoLogo from "../logo";
import "./header.scss";
export default function Header() {
  const [mobileHeader, setMobileHeader] = useState(false);
  const [activeHover, setActiveHover] = useState(0);

  const RedirectToContact = () => {
    window.open('https://contact.aaziko.com/contact')
  }

  const RedirectToBlogs = () => {
    window.open('https://blogs.aaziko.com/')
  }

  const RedirectToTicket = () => {
    window.open('https://support.aaziko.com/create-ticket')
  }
  return (
    <>
      <header>
        <div className="container">
          <div className="header-alignment">
            <div className="logo">
              <NavLink to="/">
                <AazikoLogo />
              </NavLink>
            </div>
            <div className="menu">
              <ul>
                <NavLink to="/">
                  <li >Home</li>

                </NavLink>

                <li onMouseEnter={() => setActiveHover(1)} onMouseLeave={() => setActiveHover(0)}>How We Work

                  {activeHover == 1 &&
                    <div className="menu-content-bg-layer ">
                      <div className="menu-container-dropdown">
                        <div className="menu-container-content" onMouseLeave={() => setActiveHover(0)}>
                          <div className="container">
                            <div className="home-menu-content-alignment">
                              <div className="home-menu-grid-alignment">
                                <div className="home-menu-details-alignment">
                                  <h6>BUYER</h6>

                                  <div className="home-child-name-alignment">
                                    <NavLink to="/how-we-work-for-buyer-new">
                                      <p onClick={() => setActiveHover(0)}>How We Help</p>
                                    </NavLink>
                                    <NavLink to="/lsqs">
                                      <p onClick={() => setActiveHover(0)}>Lsq [Let Supplier Quote]</p>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="home-menu-details-alignment">
                                  <h6>SUPPLER</h6>

                                  <div className="home-child-name-alignment">
                                    <NavLink to="/how-we-work-for-seller-new">
                                      <p onClick={() => setActiveHover(0)}>How We Help</p>
                                    </NavLink>
                                    <a href="https://vendors.aaziko.com/lsq" target="_blank">
                                      <p onClick={() => setActiveHover(0)}>Lsq Market</p>
                                    </a>
                                    <NavLink to="/seller-collaborate">
                                      <p onClick={() => setActiveHover(0)}>Collabrate</p>
                                    </NavLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  }
                </li>

                <li onMouseEnter={() => setActiveHover(2)} onMouseLeave={() => setActiveHover(0)}>Transport

                  {activeHover == 2 &&
                    <div className="menu-content-bg-layer ">
                      <div className="menu-container-dropdown">
                        <div className="menu-container-content" onMouseLeave={() => setActiveHover(0)}>
                          <div className="container">
                            <div className="home-menu-content-alignment">

                              <div className="home-menu-grid-alignment">
                                <div className="home-menu-details-alignment">

                                  <div className="home-child-name-alignment">
                                    <NavLink to="/route-planner">
                                      <p onClick={() => setActiveHover(0)}>Route Planner</p>
                                    </NavLink>
                                    <NavLink to="/fcl-shipping">
                                      <p onClick={() => setActiveHover(0)}>Fcl Shipping</p>
                                    </NavLink>
                                    <NavLink to="/lcl-shipping">
                                      <p onClick={() => setActiveHover(0)}>LCL Shipping</p>
                                    </NavLink>
                                    <NavLink to="/bulkcargo-shipchartering">
                                      <p onClick={() => setActiveHover(0)}>Bult Cargo & Ship Chartering</p>
                                    </NavLink>
                                    <NavLink to="/dangerous-goods-transportation">
                                      <p onClick={() => setActiveHover(0)}>DANGEROUS GOODS TRANSPORTATION</p>
                                    </NavLink>
                                    <NavLink to="/warehousing">
                                      <p onClick={() => setActiveHover(0)}>WAREHOUSING</p>
                                    </NavLink>
                                  </div>
                                </div>

                                <div className="home-menu-details-alignment">

                                  <div className="home-child-name-alignment">
                                    <NavLink to="/reefer-cargo-delivery">
                                      <p onClick={() => setActiveHover(0)}>REEFER CARGO DELIVERY</p>
                                    </NavLink>
                                    <NavLink to="/survey-services">
                                      <p onClick={() => setActiveHover(0)}>SURVEY SERVICES</p>
                                    </NavLink>
                                    <NavLink to="/customs-clearance">
                                      <p onClick={() => setActiveHover(0)}>
                                        CUSTOMS CLEARANCE</p>
                                    </NavLink>
                                    <NavLink to="/project-cargo">
                                      <p onClick={() => setActiveHover(0)}>PROJECT CARGO</p>
                                    </NavLink>
                                    <NavLink to="/aaziko-load-calculator">
                                      <p onClick={() => setActiveHover(0)}>  LOAD CALCULATOR</p>
                                    </NavLink>
                                    <p onClick={() => setActiveHover(0)}>CONTAINER TRACKING</p>
                                  </div>
                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>}
                </li>

                <li onMouseEnter={() => setActiveHover(3)} onMouseLeave={() => setActiveHover(0)}>Customs
                  {activeHover == 3 &&
                    <div className="menu-content-bg-layer ">
                      <div className="menu-container-dropdown">
                        <div className="menu-container-content" onMouseLeave={() => setActiveHover(0)}>
                          <div className="container">
                            <div className="home-menu-content-alignment">

                              <div className="home-menu-grid-alignment">
                                <div className="home-menu-details-alignment">
                                  <div className="home-child-name-alignment">
                                    <p onClick={() => setActiveHover(0)} > Customs</p>
                                    <p onClick={() => setActiveHover(0)} >How We Make Customs Easy</p>
                                    <p onClick={() => setActiveHover(0)} >Search Customs Rulls</p>
                                    <p onClick={() => setActiveHover(0)} >Trade Agreement</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </li>
                <li onMouseEnter={() => setActiveHover(4)} onMouseLeave={() => setActiveHover(0)}>Inspection
                  {activeHover == 4 &&
                    <div className="menu-content-bg-layer ">
                      <div className="menu-container-dropdown">
                        <div className="menu-container-content" onMouseLeave={() => setActiveHover(0)}>
                          <div className="container">
                            <div className="home-menu-content-alignment">

                              <div className="home-menu-grid-alignment">
                                <div className="home-menu-details-alignment">
                                  <div className="home-child-name-alignment">
                                    <p onClick={() => setActiveHover(0)}>SGS</p>
                                    <p onClick={() => setActiveHover(0)}>Work with aaziko</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  }

                </li>
                {/* <li onMouseEnter={() => setActiveHover(5)} onMouseLeave={() => setActiveHover(0)}>Finance
                  {activeHover == 5 &&
                    <div className="menu-content-bg-layer ">
                      <div className="menu-container-dropdown">
                        <div className="menu-container-content" onMouseLeave={() => setActiveHover(0)}>
                          <div className="container">
                            <div className="home-menu-content-alignment">

                              <div className="home-menu-grid-alignment">
                                <div className="home-menu-details-alignment">
                                  <div className="home-child-name-alignment">
                                    <NavLink to="/finance">
                                      <p onClick={() => setActiveHover(0)}>Finance</p>
                                    </NavLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>}
                </li> */}
                <li onMouseEnter={() => setActiveHover(6)} onMouseLeave={() => setActiveHover(0)}>Activity
                  {activeHover == 6 &&
                    <div className="menu-content-bg-layer ">
                      <div className="menu-container-dropdown">
                        <div className="menu-container-content" onMouseLeave={() => setActiveHover(0)}>
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
                                    <p onClick={() => setActiveHover(0)}>Metting</p>
                                  </NavLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>}
                </li>
                <li onMouseEnter={() => setActiveHover(7)} onMouseLeave={() => setActiveHover(0)}>Crafted in India
                  {/* {activeHover == 7 &&
                    <div className="menu-content-bg-layer "><div className="menu-container-dropdown">
                      <div className="menu-container-content" onMouseLeave={() => setActiveHover(0)}>
                        <div className="container">
                          <div className="home-menu-content-alignment">
                            <div className="home-menu-grid-alignment">
                              <div className="home-menu-details-alignment">
                                <div className="home-child-name-alignment">
                                  <p onClick={() => setActiveHover(0)}> GI TAG</p>
                                  <p onClick={() => setActiveHover(0)}>INDIAN INDUSTRY</p>
                                  <p onClick={() => setActiveHover(0)}> AGREEMENT</p>
                                  <NavLink to="/customs">
                                    <p onClick={() => setActiveHover(0)}> Customs</p>
                                  </NavLink>
                                  <NavLink to="/supplier-payment">
                                    <p onClick={() => setActiveHover(0)}> Supplier Payment</p>
                                  </NavLink>

                                  <NavLink to="/buyer-collaborate">
                                    <p onClick={() => setActiveHover(0)}>Buyer Collaborate</p>
                                  </NavLink>

                                </div>
                              </div>
                              <div className="home-menu-details-alignment">
                                <div className="home-child-name-alignment">
                                  <NavLink to="/post-your-request">
                                    <p onClick={() => setActiveHover(0)}>Post Your Comment</p>
                                  </NavLink>
                                  <NavLink to="/individual">
                                    <p onClick={() => setActiveHover(0)}>Individual</p>
                                  </NavLink>
                                  <NavLink to="/inspection-partner-service">
                                    <p onClick={() => setActiveHover(0)}>Inspection Partner Service</p>
                                  </NavLink>
                                  <NavLink to="/company-details">
                                    <p onClick={() => setActiveHover(0)}>Company Details</p>
                                  </NavLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  } */}

                </li>
                <li>Aaziko</li>

                {/* <NavLink to="/how-we-work-for-seller">
                  <li>How We Work For Seller</li>
                </NavLink> */}
                {/* <NavLink to="/gallery-page">
                  <li>Gallery</li>
                </NavLink> */}
                {/* <NavLink to="/contact">
                  <li>Contact Us</li>
                </NavLink> */}
                {/* <NavLink to="/blog">
                  <li>Blogs</li>
                </NavLink> */}
                {/* <NavLink to="/create-ticket">
                  <li>Create Ticket</li>
                </NavLink> */}
              </ul>
            </div>
            <div
              className="mobile-menu"
              onClick={() => setMobileHeader(!mobileHeader)}
            >
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </header >
      <div className={mobileHeader ? "mobile-view-header-wrapper" : ""}></div>
      <div
        className={
          mobileHeader
            ? "mobile-view-header mobile-view-header-show"
            : "mobile-view-header mobile-view-header-hidden"
        }
      >
        <div className="mobile-header">
          <div>
            <NavLink to="/">
              <AazikoLogo />
            </NavLink>
          </div>
          <div onClick={() => setMobileHeader(false)}>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="mobile-body">
          <div className="menu">
            <ul>
              <li>Home</li>
              <NavLink to="/how-we-work-for-buyer-new">
                <li>How We Work For Buyer</li>
              </NavLink>
              <NavLink to="/how-we-work-for-seller-new">
                <li>How We Work For Seller</li>
              </NavLink>
              <NavLink to="/gallery-page">
                <li>Gallery</li>
              </NavLink>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
