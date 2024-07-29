import React from "react";
import "./SongsGallery.scss";
import NotifyIcon from "../../../assets/icons/notify-icon.svg";
import OurTraindingSong from "./OurTraindingSong";
import Slider from "react-slick";
export default function SongsGallery() {
  const settings = {
    dots: false,
    infinite: true,
    arrow: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="song-gallery-content-alignment">
      <div className="container">
        <div className="song-galley-main-content">
          <div className="">
          <Slider {...settings}>
          <div className="song-gallery-banner-alignment">
          <iframe
              src="https://www.youtube.com/embed/SM6Sqy4SJFI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="song-gallery-banner-alignment">
          <iframe
              src="https://www.youtube.com/embed/SM6Sqy4SJFI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="song-gallery-banner-alignment">
          <iframe
              src="https://www.youtube.com/embed/SM6Sqy4SJFI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Slider>
           
          </div>
          <div className="song-gallery-banner-details-alignment">
            <h4>
              Elevate the Trade || <br />
              Aaziko's Echoes in USA's Business Sky
            </h4>

            <div className="notify-details-alignment">
              <button>Notify Me</button>
              <div className="notify-icon">
                <img src={NotifyIcon} alt="NotifyIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurTraindingSong />
    </div>
  );
}
