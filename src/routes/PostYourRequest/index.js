import React, { useEffect } from 'react'
import "./PostYourRequest.scss";
import Slider from "react-slick";
import WhatIsLSQ from './WhatIsLSQ';
import LSQForm from './LSQForm';
export default function PostYourRequest() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <div className="post-your-request-section">
            <div className="container">
                <div className="post-your-request-heading">
                    <h4>POST YOUR  REQUEST</h4>
                </div>
                <div className="post-your-request-banner-details">
                    <div className="post-your-request-grid">
                        <div className="post-your-request-grid-item">
                            <div className="post-your-video-box">

                            </div>
                        </div>
                        <div className="post-your-request-grid-item">
                            <Slider {...settings}>
                                {[0, 1, 2].map(() => {
                                    return (

                                        <div className="post-your-left-box">
                                            <div className="post-your-top-details">
                                                <div className="post-your-profile-img">

                                                </div>
                                                <div className="post-your-profile-details">
                                                    <h6>Buyer from the U.S.</h6>
                                                    <h6>Hardware computer and phone accessories
                                                        business</h6>
                                                </div>
                                            </div>
                                            <div className="post-your-description">
                                                <p>”With RFQ, I connected with almost 100 factories in an instant. Vendors on Alibaba.com reply quickly and you are able to access their detailed background information.”</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>

                <WhatIsLSQ />
                <LSQForm />
            </div>
        </div>
    )
}
