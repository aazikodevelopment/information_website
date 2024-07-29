import React from "react";
import Slider from "react-slick";
import "./HomeNewAssociatedWith.scss";
import AsImg1 from "../../../assets/Image/as-img-1.png";
import AsImg2 from "../../../assets/Image/as-img-2.png";
import AsImg3 from "../../../assets/Image/as-img-3.png";
import AsImg4 from "../../../assets/Image/as-img-4.png";
import NextArrow from "../../../assets/icons/slider-next-arrow.svg";
import PrevArrow from "../../../assets/icons/slider-prev-arrow.svg";
import AssociatedBottomImg from "../../../assets/Image/associated-bottom-img.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={NextArrow} alt="NextArrow" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={PrevArrow} alt="PrevArrow " />
    </div>
  );
}
export default function HomeNewAssociatedWith() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 2000,
    autoplay: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="home-new-associatedWith-section">
      <div className="home-new-associatedWith-heading">
        <h2>We Are Associated With</h2>
      </div>

      <div className="home-new-associatedWith-body-alignment">
        <div className="container">
          <div className="home-new-associatedWith-grid">
            <Slider {...settings}>
              <div className="home-new-associatedWith-padding">
                <div className="home-new-associatedWith-grid-item">
                  <img src={AsImg1} alt="AsImg1" />
                </div>
              </div>
              <div className="home-new-associatedWith-padding">
                <div className="home-new-associatedWith-grid-item">
                  <img src={AsImg2} alt="AsImg1" />
                </div>
              </div>
              <div className="home-new-associatedWith-padding">
                <div className="home-new-associatedWith-grid-item">
                  <img src={AsImg3} alt="AsImg2" />
                </div>
              </div>
              <div className="home-new-associatedWith-padding">
                <div className="home-new-associatedWith-grid-item">
                  <img src={AsImg4} alt="AsImg1" />
                </div>
              </div>
              <div className="home-new-associatedWith-padding">
                <div className="home-new-associatedWith-grid-item">
                  <img src={AsImg1} alt="AsImg1" />
                </div>
              </div>
              <div className="home-new-associatedWith-padding">
                <div className="home-new-associatedWith-grid-item">
                  <img src={AsImg2} alt="AsImg1" />
                </div>
              </div>
              <div className="home-new-associatedWith-padding">
                <div className="home-new-associatedWith-grid-item">
                  <img src={AsImg3} alt="AsImg2" />
                </div>
              </div>
              <div className="home-new-associatedWith-padding">
                <div className="home-new-associatedWith-grid-item">
                  <img src={AsImg4} alt="AsImg1" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="associated-bottom-img-alignment">
          <img src={AssociatedBottomImg} alt="AssociatedBottomImg" />
        </div>
      </div>
    </div>
  );
}
