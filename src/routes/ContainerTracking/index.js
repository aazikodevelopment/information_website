import React, { useEffect } from 'react'
import "./ContainerTracking.scss";
import RightLeftArrow from "../../assets/icons/right-left-arrow.svg";
import SearchIcon from "../../assets/icons/bg-blue-search-icon.svg";
import TopArrow from "../../assets/icons/top-arrow-icon.svg";
import BottomArrow from "../../assets/icons/bottom-arrow-icon.svg";
import SearchIconBox from "../../assets/icons/search-input-box.svg";
import VideoImg from "../../assets/Image/video-demo-img.png"
import OneTrakingSystem from './OneTrakingSystem';
import ServicesProvide from './ServicesProvide';
import APIContainerTracking from './APIContainerTracking';
import AISSystem from './AISSystem';
export default function ContainerTracking() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className="container-traking-section">
            <div className="container">
                <div className="container-traking-details-alignment">
                    <div className="container-traking-details-grid">
                        <div className="container-traking-details-gridItem">
                            <div className="container-traking-details-right-side-alignment">
                                <div className="container-traking-details-top-box-content">
                                    <div className="transportation-by-details-alignment">
                                        <label>Transportation by</label>

                                        <div className="transportation-area-details-alignment">
                                            <div className="transportation-area-box-alignment active-box">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="6" viewBox="0 0 26 6" fill="none">
                                                    <path d="M1 5C4.31067 5 6.79333 1 6.79333 1C6.79333 1 9.276 5 12.5867 5C15.896 5 19.2067 1 19.2067 1C19.2067 1 22.5173 5 25 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <p>SEA</p>
                                            </div>
                                            <div className="transportation-area-box-alignment">
                                                <div className="line-alignment">

                                                </div>
                                                <p>LAND</p>
                                            </div>
                                            <div className="transportation-area-box-alignment">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="6" viewBox="0 0 26 6" fill="none">
                                                    <path d="M25 1C21.6893 1 19.2067 5 19.2067 5C19.2067 5 16.724 1 13.4133 1C10.104 1 6.79333 5 6.79333 5C6.79333 5 3.48267 1 0.999999 1" stroke="#ED1C24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <p>Air</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="transportation-by-details-alignment">
                                        <label>ORIGIN OF SHIPMENT</label>

                                        <div className='organic-shipment-details-box-alignment'>
                                            <div className="organic-shipment-details">
                                                <p>A</p>
                                                <span>City, Port, Country</span>
                                            </div>
                                            <div className="organic-arrow-box-alignment">
                                                <img src={RightLeftArrow} alt="RightLeftArrow" />
                                            </div>
                                            <div className="organic-shipment-details">
                                                <p>B</p>
                                                <span>City, Port, Country</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="transportation-search-icon">
                                        <img src={SearchIcon} alt="SearchIcon" />
                                    </div>
                                </div>
                                <div className="container-average-speed-alignment">
                                    <div className="container-average-speed-flex-alignment">
                                        <div className="container-average-speed-input-alignment">
                                            <input type="text" placeholder="Average Speed" />
                                            <div className="container-top-bottom-arrow">
                                                <img src={TopArrow} alt="TopArrow" />
                                                <img src={BottomArrow} alt="BottomArrow" />
                                            </div>
                                        </div>
                                        <div className="container-average-second-box">
                                            <span>knots</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="container-average-search-alignment">
                                    <div>
                                        <img src={SearchIconBox} alt='SearchIconBox' />
                                    </div>
                                    <p>Select port (place) of origin and port (place) of destination, then time interval for your schedule and hit Search button.</p>
                                </div>
                            </div>
                        </div>

                        <div className="container-traking-details-gridItem">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6835053380096!2d72.8372217760578!3d21.204728181709907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fb2a64a922f%3A0xf5c5fbd871f68587!2sSurat%20station!5e0!3m2!1sen!2sin!4v1683178617641!5m2!1sen!2sin"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div className="container-other-traking-video-section">
                        <h5>Container Tracking</h5>

                        <div className="container-video-details-alignment">
                            <img src={VideoImg} alt="VideoImg" />
                        </div>


                        <h5 className="second-heading">Container Tracking</h5>
                        <div className="by-it-now-section-desing">
                            <p>Lets you securely manage, share and access your shipping documents from anywhere</p>

                            <div className="buy-it-now-button">
                                <button>Buy It</button>
                            </div>
                        </div>
                    </div>

                    <div className="container-traking-other-details-alignment">
                        <div className="container-traking-grid-alignment">
                            <div className="container-traking-child-details-alignment">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="40" viewBox="0 0 33 40" fill="none">
                                        <path d="M16.4 21.8C19.3823 21.8 21.8 19.3823 21.8 16.4C21.8 13.4177 19.3823 11 16.4 11C13.4177 11 11 13.4177 11 16.4C11 19.3823 13.4177 21.8 16.4 21.8Z" stroke="#00AEEF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.4 2C12.5809 2 8.91819 3.51714 6.21766 6.21766C3.51714 8.91819 2 12.5809 2 16.4C2 19.8056 2.7236 22.034 4.7 24.5L16.4 38L28.1 24.5C30.0764 22.034 30.8 19.8056 30.8 16.4C30.8 12.5809 29.2829 8.91819 26.5823 6.21766C23.8818 3.51714 20.2191 2 16.4 2V2Z" stroke="#00AEEF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h5>Tracking System</h5>
                                    <p>Our Container Tracking system allows you to determine the current position of containers on the world map</p>
                                </div>
                            </div>
                            <div className="container-traking-child-details-alignment">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="41" viewBox="0 0 35 41" fill="none">
                                        <path d="M32.0833 14.6429H20.4167V2.92857H2.91667V38.0714H32.0833V14.6429ZM30.8758 11.7143L23.3333 4.141V11.7143H30.8758ZM1.45833 0H23.3333L35 11.7143V39.5357C35 39.9241 34.8464 40.2965 34.5729 40.5711C34.2994 40.8457 33.9284 41 33.5417 41H1.45833C1.07156 41 0.700627 40.8457 0.427136 40.5711C0.153646 40.2965 0 39.9241 0 39.5357V1.46429C0 1.07593 0.153646 0.703486 0.427136 0.428879C0.700627 0.154272 1.07156 0 1.45833 0ZM8.75 20.5H26.25V23.4286H8.75V20.5ZM8.75 11.7143H16.0417V14.6429H8.75V11.7143ZM8.75 29.2857H26.25V32.2143H8.75V29.2857Z" fill="#00AEEF" />
                                    </svg>
                                    <h5>SHIPPING DOCUMENTS</h5>
                                    <p>Efficient solution for electronic distribution of shipping documents! Saving you time, money, and printing paper
                                    </p>
                                </div>
                            </div>
                            <div className="container-traking-child-details-alignment">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36" fill="none">
                                        <path d="M14 0C9.17525 0 5.25 4.0374 5.25 9V12.6H3.5C1.56975 12.6 0 14.2146 0 16.2V32.4C0 34.3854 1.56975 36 3.5 36H24.5C26.4303 36 28 34.3854 28 32.4V16.2C28 14.2146 26.4303 12.6 24.5 12.6H22.75V9C22.75 4.0374 18.8247 0 14 0ZM8.75 9C8.75 6.0228 11.1055 3.6 14 3.6C16.8945 3.6 19.25 6.0228 19.25 9V12.6H8.75V9ZM24.5035 32.4H15.75V28.2996C16.7913 27.675 17.5 26.5266 17.5 25.2C17.5 23.2146 15.9303 21.6 14 21.6C12.0697 21.6 10.5 23.2146 10.5 25.2C10.5 26.5248 11.2087 27.675 12.25 28.2996V32.4H3.5V16.2H24.5L24.5035 32.4Z" fill="#00AEEF" />
                                    </svg>
                                    <h5>CODES GENERATOR</h5>
                                    <p>Provide your clients with easy access to all their shipments by one generated code to see the whole process in one click
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <OneTrakingSystem />
                    <ServicesProvide />
                    <APIContainerTracking />
                    <AISSystem />
                </div>
            </div>
        </div>
    )
}
