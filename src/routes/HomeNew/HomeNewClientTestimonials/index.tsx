import React from "react";
import "./HomeNewClientTestimonials.scss";
import Slider from "react-slick";
import DemoProfileImg from "../../../assets/Image/demo-img.png";
import Profile1 from "../../../assets/Image/p1.png";
import Profile2 from "../../../assets/Image/p2.png";
import Profile3 from "../../../assets/Image/p3.png";
import Profile4 from "../../../assets/Image/p4.png";
import Profile5 from "../../../assets/Image/p5.png";
import Profiles1 from "../../../assets/Image/s1.svg";
import Profiles2 from "../../../assets/Image/s2.svg";
import Profiles3 from "../../../assets/Image/s3.svg";
import Profiles4 from "../../../assets/Image/s4.svg";
import Profiles5 from "../../../assets/Image/s5.svg";
import Profiles6 from "../../../assets/Image/s6.svg";
import Profiles7 from "../../../assets/Image/s7.svg";
import Profiles8 from "../../../assets/Image/s8.svg";
import Profiles9 from "../../../assets/Image/s9.svg";
import Profiles10 from "../../../assets/Image/s10.svg";
import Profiles11 from "../../../assets/Image/s11.svg";
import Profiles12 from "../../../assets/Image/s12.svg";
import Profiles01 from "../../../assets/Image/s01.svg";
import Profiles02 from "../../../assets/Image/s02.svg";
import Profiles03 from "../../../assets/Image/s03.svg";
import Profiles04 from "../../../assets/Image/s04.svg";
export default function HomeNewClientTestimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: false,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 260,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 240,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: false,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.6,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,

          slidesToScroll: 1,
          infinite: true,

          dots: false,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,

          dots: false,
        },
      },
      {
        breakpoint: 260,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 240,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="home-new-testimonials-section">
      <div className="home-new-testimonials-heading">
        <h2>Client Testimonials</h2>
      </div>

      <div className="home-new-testimonials-body-alignment">
        <Slider {...settings}>
          <div className="home-new-testimonials-padding">
            <div className="home-new-testimonials-box-alignment">
              <div className="home-new-testimonials-profile-img">
                <img src={Profiles1} alt="Profiles1" />
              </div>
              <div className="home-new-teminals-details-alignment">
                <p>
                  If you're importing from India, Aaziko is a no-brainer.
                  Reliable and efficient.
                </p>
              </div>
            </div>
          </div>
          <div className="home-new-testimonials-padding">
            <div className="home-new-testimonials-box-alignment">
              <div className="home-new-testimonials-profile-img">
                <img src={Profiles8} alt="Profiles8" />
              </div>
              <div className="home-new-teminals-details-alignment">
                <h6>Deepak Khanel</h6>
                <span>(Tea&coffee Board)</span>
                <p>
                  Aaziko's passion for trade was evident in our Kathmandu
                  meetup; they're a boon for our tea and coffee exports."
                </p>
              </div>
            </div>
          </div>
          <div className="home-new-testimonials-padding">
            <div className="home-new-testimonials-box-alignment">
              <div className="home-new-testimonials-profile-img">
                <img src={Profiles9} alt="Profiles9" />
              </div>
              <div className="home-new-teminals-details-alignment">
                <h6>NG Hang Seng</h6>
                <span>(KL Malaysia)</span>
                <p>
                  Aaziko is a very good platform, they make my sourcing easier,
                  thank you Aaziko.
                </p>
              </div>
            </div>
          </div>
          <div className="home-new-testimonials-padding">
            <div className="home-new-testimonials-box-alignment">
              <div className="home-new-testimonials-profile-img">
                <img src={Profiles10} alt="Profiles10" />
              </div>
              <div className="home-new-teminals-details-alignment">
                <h6>Nepal Handicraft Association</h6>
                <p>
                  Aaziko is a bridge to India's finest manufacturers. Our
                  Kathmandu meeting affirmed their commitment to global trade
                  and quality."
                </p>
              </div>
            </div>
          </div>
          <div className="home-new-testimonials-padding">
            <div className="home-new-testimonials-box-alignment">
              <div className="home-new-testimonials-profile-img">
                <img src={Profiles11} alt="Profiles11" />
              </div>
              <div className="home-new-teminals-details-alignment">
                <h6>Turkey's People</h6>
                <p>
                Just got my shipment from Aaziko. Smooth process and great products!
                </p>
              </div>
            </div>
          </div>
          <div className="home-new-testimonials-padding">
            <div className="home-new-testimonials-box-alignment">
              <div className="home-new-testimonials-profile-img">
                <img src={Profiles12} alt="Profiles12" />
              </div>
              <div className="home-new-teminals-details-alignment">
                <h6>Nepal Medical Accotions</h6>
                <p>
                Impressive meetup with Aaziko. They're revolutionizing imports for Nepal's medical sector!
                </p>
              </div>
            </div>
          </div>
          <div className="home-new-testimonials-padding">
            <div className="home-new-testimonials-box-alignment">
              <div className="home-new-testimonials-profile-img">
                <img src={Profiles1} alt="Profiles1" />
              </div>
              <div className="home-new-teminals-details-alignment">
                <p>
                  If you're importing from India, Aaziko is a no-brainer.
                  Reliable and efficient.
                </p>
              </div>
            </div>
          </div>
          <div className="home-new-testimonials-padding">
            <div className="home-new-testimonials-box-alignment">
              <div className="home-new-testimonials-profile-img">
                <img src={Profiles2} alt="Profiles2" />
              </div>
              <div className="home-new-teminals-details-alignment">
                <h6>Richardo Kono</h6>
                <span>(Director Webrazil Trade)</span>
                <p>
                  Aaziko = Trust & Transparency. My go-to for all Indian
                  imports.
                </p>
              </div>
            </div>
          </div>
          <div className="home-new-testimonials-padding">
            <div className="home-new-testimonials-box-alignment">
              <div className="home-new-testimonials-profile-img">
                <img src={Profiles3} alt="Profiles3" />
              </div>
              <div className="home-new-teminals-details-alignment">
                <h6>Germany Secretory</h6>
                <span>(Economy & Commerce Wings)</span>
                <p>
                  Good initiative to support Indian manufacturers in entering
                  the export market in a trustworthy manner.
                </p>
              </div>
            </div>
          </div>
          <div className="home-new-testimonials-padding">
            <div className="home-new-testimonials-box-alignment">
              <div className="home-new-testimonials-profile-img">
                <img src={Profiles4} alt="Profiles4" />
              </div>
              <div className="home-new-teminals-details-alignment">
                <h6>Paul Wilson</h6>
                <span>(UK)</span>
                <p>
                  Aaziko made importing from India a breeze. Highly recommend!
                </p>
              </div>
            </div>
          </div>
          <div className="home-new-testimonials-padding">
            <div className="home-new-testimonials-box-alignment">
              <div className="home-new-testimonials-profile-img">
                <img src={Profiles5} alt="Profiles5" />
              </div>
              <div className="home-new-teminals-details-alignment">
                <h6>Zuria Abdullah</h6>
                <span>Malaysia</span>
                <p>
                  "Aaziko is the real deal. Authentic products and reliable
                  delivery."
                </p>
              </div>
            </div>
          </div>
          <div className="home-new-testimonials-padding">
            <div className="home-new-testimonials-box-alignment">
              <div className="home-new-testimonials-profile-img">
                <img src={Profiles6} alt="Profiles6" />
              </div>
              <div className="home-new-teminals-details-alignment">
                <h6>Turkey’s People</h6>
                <p>
                  Been importing for years and Aaziko's by far the best. 5 stars
                </p>
              </div>
            </div>
          </div>
        </Slider>
        <div className="second-slider-new-terminal-alignment">
          <Slider {...settings2}>
            <div className="home-new-testimonials-padding">
              <div className="home-new-testimonials-box-alignment">
                <div className="home-new-testimonials-profile-img">
                  <img src={Profiles7} alt="Profiles7" />
                </div>
                <div className="home-new-teminals-details-alignment">
                  <p>
                    Love the quality of products from Aaziko. Makes
                    international trade easy."
                  </p>
                </div>
              </div>
            </div>
            <div className="home-new-testimonials-padding">
              <div className="home-new-testimonials-box-alignment">
                <div className="home-new-testimonials-profile-img">
                  <img src={Profiles01} alt="Profiles01" />
                </div>
                <div className="home-new-teminals-details-alignment">
                  <h6>Deepak Khanel</h6>
                  <span>(Tea&coffee Board)</span>
                  <p>
                    Aaziko is a very good platform, they make my sourcing
                    easier, thank you Aaziko.
                  </p>
                </div>
              </div>
            </div>
            <div className="home-new-testimonials-padding">
              <div className="home-new-testimonials-box-alignment">
                <div className="home-new-testimonials-profile-img">
                  <img src={Profiles02} alt="Profiles02" />
                </div>
                <div className="home-new-teminals-details-alignment">
                  <h6>NG Hang Seng</h6>
                  <span>(KL Malaysia)</span>
                  <p>
                  Aaziko is a very good platform, they make my sourcing easier, thank you Aaziko.
                  </p>
                </div>
              </div>
            </div>
            <div className="home-new-testimonials-padding">
              <div className="home-new-testimonials-box-alignment">
                <div className="home-new-testimonials-profile-img">
                  <img src={Profile5} alt="Profile5" />
                </div>
                <div className="home-new-teminals-details-alignment">
                  <h6>Nepal Handicraft Association</h6>
                  <p>
                    Aaziko is a bridge to India's finest manufacturers. Our
                    Kathmandu meeting affirmed their commitment to global trade
                    and quality."
                  </p>
                </div>
              </div>
            </div>
            <div className="home-new-testimonials-padding">
              <div className="home-new-testimonials-box-alignment">
                <div className="home-new-testimonials-profile-img">
                  <img src={Profiles03} alt="Profiles03" />
                </div>
                <div className="home-new-teminals-details-alignment">
                  <h6>Turkey's People</h6>
                  <p>
                  Just got my shipment from Aaziko. Smooth process and great products!
                  </p>
                </div>
              </div>
            </div>
            <div className="home-new-testimonials-padding">
              <div className="home-new-testimonials-box-alignment">
                <div className="home-new-testimonials-profile-img">
                  <img src={Profiles04} alt="Profiles04" />
                </div>
                <div className="home-new-teminals-details-alignment">
                  <h6>Nepal Medical Accotions</h6>
                  <p>
                  Impressive meetup with Aaziko. They're revolutionizing imports for Nepal's medical sector!
                  </p>
                </div>
              </div>
            </div>
            <div className="home-new-testimonials-padding">
              <div className="home-new-testimonials-box-alignment">
                <div className="home-new-testimonials-profile-img">
                  <img src={Profiles7} alt="Profiles7" />
                </div>
                <div className="home-new-teminals-details-alignment">
                  <p>
                    Love the quality of products from Aaziko. Makes
                    international trade easy."
                  </p>
                </div>
              </div>
            </div>
            <div className="home-new-testimonials-padding">
              <div className="home-new-testimonials-box-alignment">
                <div className="home-new-testimonials-profile-img">
                  <img src={Profiles01} alt="Profiles01" />
                </div>
                <div className="home-new-teminals-details-alignment">
                  <h6>Deepak Khanel</h6>
                  <span>(Tea&coffee Board)</span>
                  <p>
                    Aaziko is a very good platform, they make my sourcing
                    easier, thank you Aaziko.
                  </p>
                </div>
              </div>
            </div>
            <div className="home-new-testimonials-padding">
              <div className="home-new-testimonials-box-alignment">
                <div className="home-new-testimonials-profile-img">
                  <img src={Profiles02} alt="Profiles02" />
                </div>
                <div className="home-new-teminals-details-alignment">
                  <h6>NG Hang Seng</h6>
                  <span>(KL Malaysia)</span>
                  <p>
                  Aaziko is a very good platform, they make my sourcing easier, thank you Aaziko.
                  </p>
                </div>
              </div>
            </div>
            <div className="home-new-testimonials-padding">
              <div className="home-new-testimonials-box-alignment">
                <div className="home-new-testimonials-profile-img">
                  <img src={Profile5} alt="Profile5" />
                </div>
                <div className="home-new-teminals-details-alignment">
                  <h6>Nepal Handicraft Association</h6>
                  <p>
                    Aaziko is a bridge to India's finest manufacturers. Our
                    Kathmandu meeting affirmed their commitment to global trade
                    and quality."
                  </p>
                </div>
              </div>
            </div>
            <div className="home-new-testimonials-padding">
              <div className="home-new-testimonials-box-alignment">
                <div className="home-new-testimonials-profile-img">
                  <img src={Profiles03} alt="Profiles03" />
                </div>
                <div className="home-new-teminals-details-alignment">
                  <h6>Turkey's People</h6>
                  <p>
                  Just got my shipment from Aaziko. Smooth process and great products!
                  </p>
                </div>
              </div>
            </div>
            <div className="home-new-testimonials-padding">
              <div className="home-new-testimonials-box-alignment">
                <div className="home-new-testimonials-profile-img">
                  <img src={Profiles04} alt="Profiles04" />
                </div>
                <div className="home-new-teminals-details-alignment">
                  <h6>Nepal Medical Accotions</h6>
                  <p>
                  Impressive meetup with Aaziko. They're revolutionizing imports for Nepal's medical sector!
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
