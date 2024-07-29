import React from "react";
import "./PressRoom.scss";
import PressImg from "../../assets/Image/press-banner-img.png";
import SuccessImg from "../../assets/Image/success-img.png";
import NewsImg from "../../assets/Image/news-img-1.png";
import News2Img from "../../assets/Image/news-img-2.png";
import News3Img from "../../assets/Image/news-img-3.png";
import News4Img from "../../assets/Image/news-img-4.png";
import News5Img from "../../assets/Image/news-img-5.png";
import News6Img from "../../assets/Image/news-img-6.png";
import News7Img from "../../assets/Image/news-img-7.png";
import News8Img from "../../assets/Image/news-img-8.png";
import News9Img from "../../assets/Image/news-img-9.png";
import News10Img from "../../assets/Image/news-img-10.png";
export default function PressRoom() {
  return (
    <div className="press-room-section">
      <div className="press-room-banner-alignment">
        <div className="container">
          <div className="press-room-all-banner-details">
            <div className="press-room-left-side-alignment">
              <h4>Aaziko Press Room</h4>
              <p>
                Welcome to Aaziko.com We provide you with a variety of content including high resolution photography of executives, site locations and
                business activities as well as a range of videos and additional resources about Aaziko expertise.
              </p>
            </div>
            <div className="press-room-right-side-alignment">
              <img src={PressImg} alt="PressImg" />
            </div>
          </div>
        </div>
      </div>

      <div className="press-room-success-heart-alignment">
        <div className="container">
          <div className="press-room-success-heart-flex-alignment">
            <div>
              <img src={SuccessImg} alt="SuccessImg" />
            </div>

            <div className="press-room-success-heart-details">
              <h6>the success heart of Aaziko. </h6>
              <p>
                As leaders in our industry, we hold ourselves to the highest standard of professional behavior. The defines the main principles of
                professional integrity for the Aaziko and is an expression of the values that are shared throughout our businesses and our affiliates.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="press-room-latest-news-alignment">
        <div className="container">
          <div className="press-room-latest-news-flex-alignment">
            <div className="press-room-box-alignment">
              <img src={NewsImg} alt="NewsImg" />
            </div>
            <div className="press-room-box-alignment">
              <img src={News2Img} alt="News2Img" />

              <div className="press-room-bottom-details">
                <h6>Aziko joined the mega industrial exhibition</h6>

                <div className="date-location-alignment">
                  <p>Date - 27 Jan 2023</p>
                  <p>Location - Vadodara,Gujarat ,india</p>
                </div>
              </div>
            </div>
          </div>

          <div className="press-room-latest-news-flex-alignment">
            <div className="press-room-box-alignment">
              <img src={News3Img} alt="NewsImg" />
            </div>
            <div className="press-room-box-alignment">
              <img src={News4Img} alt="News2Img" />
            </div>
          </div>
          <div className="press-room-latest-news-flex-alignment">
            <div className="press-room-box-alignment">
              <img src={News5Img} alt="NewsImg" />

              <div className="press-other-details-alignment">
                <h6>Times Of India</h6>
                <p>Date: 30 Jun , 2023</p>
                <span>Location - Vadodara,Gujarat ,india</span>
              </div>
            </div>
            <div className="press-room-box-alignment">
              <img src={News6Img} alt="News2Img" />
            </div>
          </div>
          <div className="press-room-latest-news-flex-alignment">
            <div className="press-room-box-alignment">
              <img src={News7Img} alt="NewsImg" />
            </div>
            <div className="press-room-box-alignment">
              <img src={News8Img} alt="News2Img" />
            </div>
          </div>
          <div className="press-room-latest-news-flex-alignment">
            <div className="press-room-box-alignment">
              <img src={News9Img} alt="NewsImg" />
            </div>
            <div className="press-room-box-alignment">
              <img src={News10Img} alt="News2Img" />

              <div className="press-other-details-alignment ">
                <p>Special Meetup Entrepreneur</p>
                <p>Switzerland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
