import React from 'react'
import "./SupplierSuccessStory.scss";
import SuccessDemoImg from "../../../assets/Image/sdi1.png";
import DemoImg from "../../../assets/Image/demo-img.png";
import ContryImg from "../../../assets/Image/contry-img.png";
import Slider from "react-slick";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="next-arrow-alignment"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19.5" transform="matrix(-1 0 0 1 40 0)" fill="white" stroke="#00AEEF" />
                <path d="M16.3228 24.8624L21.2043 20.0169L16.3588 15.1354C15.8717 14.6447 15.8746 13.855 16.3653 13.368C16.8559 12.8809 17.6456 12.8839 18.1327 13.3745L23.8649 19.1492C24.3519 19.6399 24.349 20.4296 23.8583 20.9167L18.0836 26.6488C17.593 27.1359 16.8033 27.133 16.3162 26.6423C15.8417 26.1517 15.8321 25.3494 16.3228 24.8624Z" fill="#00AEEF" />
            </svg> </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="prev-arrow-alignment"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19.5" fill="white" stroke="#00AEEF" />
                <path d="M23.6772 24.8624L18.7957 20.0169L23.6412 15.1354C24.1283 14.6447 24.1254 13.855 23.6347 13.368C23.1441 12.8809 22.3544 12.8839 21.8673 13.3745L16.1351 19.1492C15.6481 19.6399 15.651 20.4296 16.1417 20.9167L21.9164 26.6488C22.407 27.1359 23.1967 27.133 23.6838 26.6423C24.1583 26.1517 24.1679 25.3494 23.6772 24.8624Z" fill="#00AEEF" />
            </svg>
        </div>
    );
}
export default function SupplierSuccessStory() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="supplier-success-story-section">
            <div className="container">
                <div className="supplier-success-story-alignment">
                    <h6>Success stories from Aaziko.com Sellers</h6>

                    <div className="supplier-success-story-details-alignment">
                        <Slider {...settings}>
                            {[0, 1, 2, 3, 4, 5, 6, 7].map(() => {
                                return (

                                    <div>
                                        <div className="supplier-success-story-personal-details-grid">
                                            <div className="supplier-success-story-personal-details-left-side">
                                                <div className="rate-alignment-flex">
                                                    <div className="supplier-angle-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="38" viewBox="0 0 13 38" fill="none">
                                                            <path d="M0 38V0H13V17.0612L0 38Z" fill="#00AEEF" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="38" viewBox="0 0 13 38" fill="none">
                                                            <path d="M0 38V0H13V17.0612L0 38Z" fill="#00AEEF" />
                                                        </svg>
                                                    </div>

                                                    <div className="supplier-range-alignment">
                                                        <h6>1/4</h6>
                                                    </div>
                                                </div>
                                                <div className="supplier-notes-alignment">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                                </div>

                                                <div className="supplier-read-more-alignment">
                                                    <a>Read more</a>
                                                </div>

                                                <div className="supplier-story-profile-details-alignment">
                                                    <div className="supplier-story-profile-img">
                                                        <img src={DemoImg} alt="DemoImg" />
                                                    </div>
                                                    <div>
                                                        <h6>John Duo</h6>
                                                        <p>Founder</p>
                                                    </div>
                                                </div>

                                                <div className="supplier-story-city-area-alignment">
                                                    <div className="city-details-alignment">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.763 0.0748824C14.8354 0.119677 14.8952 0.182228 14.9367 0.256606C14.9782 0.330983 15 0.414722 15 0.499882V15.4999C15 15.6325 14.9473 15.7597 14.8536 15.8534C14.7598 15.9472 14.6326 15.9999 14.5 15.9999H11.5C11.3674 15.9999 11.2402 15.9472 11.1464 15.8534C11.0527 15.7597 11 15.6325 11 15.4999V13.9999H10V15.4999C10 15.6325 9.94732 15.7597 9.85355 15.8534C9.75979 15.9472 9.63261 15.9999 9.5 15.9999H0.5C0.367392 15.9999 0.240215 15.9472 0.146447 15.8534C0.0526784 15.7597 0 15.6325 0 15.4999V9.99988C7.96467e-05 9.89499 0.0331481 9.79277 0.0945249 9.7077C0.155902 9.62264 0.242478 9.55903 0.342 9.52588L6 7.63988V4.49988C6 4.4071 6.02582 4.31616 6.07456 4.23721C6.12331 4.15827 6.19305 4.09445 6.276 4.05288L14.276 0.0528824C14.3523 0.0146883 14.4371 -0.00334141 14.5224 0.00050948C14.6076 0.00436037 14.6904 0.0299637 14.763 0.0748824ZM6 8.69388L1 10.3599V14.9999H6V8.69388ZM7 14.9999H9V13.4999C9 13.3673 9.05268 13.2401 9.14645 13.1463C9.24021 13.0526 9.36739 12.9999 9.5 12.9999H11.5C11.6326 12.9999 11.7598 13.0526 11.8536 13.1463C11.9473 13.2401 12 13.3673 12 13.4999V14.9999H14V1.30888L7 4.80888V14.9999Z" fill="#606060" />
                                                                <path d="M2 11H3V12H2V11ZM4 11H5V12H4V11ZM2 13H3V14H2V13ZM4 13H5V14H4V13ZM8 9H9V10H8V9ZM10 9H11V10H10V9ZM8 11H9V12H8V11ZM10 11H11V12H10V11ZM12 9H13V10H12V9ZM12 11H13V12H12V11ZM8 7H9V8H8V7ZM10 7H11V8H10V7ZM12 7H13V8H12V7ZM8 5H9V6H8V5ZM10 5H11V6H10V5ZM12 5H13V6H12V5ZM12 3H13V4H12V3Z" fill="#606060" />
                                                            </svg>
                                                        </div>
                                                        <p>MGS Accessories</p>
                                                    </div>

                                                    <div className="city-details-alignment">
                                                        <div>
                                                            <img src={ContryImg} alt="ContryImg" />
                                                        </div>
                                                        <p>United states</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="supplier-success-story-personal-details-right-side">
                                                <img src={SuccessDemoImg} alt="SuccessDemoImg" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>

                    <div className="supplier-success-more-button-alignment">
                        <button>More Stories</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
