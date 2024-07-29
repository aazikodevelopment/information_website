import React from "react";
import "./visionSection.scss";
import VideoFirst from "../../../assets/video/video.mp4";
export default function VisionSection() {
  return (
    <div className="vision-all-section-content-alignment">
      <div className="container">
        {/* <div className="page-title">
          <h2>Vision</h2>
          <h3>
            To Make World United By Making Global Trade Easiest, Fastest And
            Trustful.
          </h3>
          <p>
            This Will Allow Every individual Wanting To Source Goods From World
            In A Few Minutes And have Better Experience In Finding The Right
            Manufacturer, Logistics, Customs, Agreements, And Most Important
            With 100% Assurance Of Payment, Goods Quality And Quantity.
          </p>
        </div>
        <div className="all-grid-control">
          <div className="grid">
            <div className="grid-items">
              <div className="video-style">
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/eBMJQMJM4ao?start=18"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="grid-items">
              <h3>Largest Database of Sellers and Buyers</h3>
              <p>
                Gone are the days when you had to spend hours looking up contact
                details of Buyers and Sellers that meet the requirements. Our
                large database of quality sellers from India and Buyers from all
                over the world provides you with genuine contact details of
                suppliers and buyers. So, when the need arises, look anywhere
                else just log on to <a>Aaziko.com</a>
              </p>
            </div>
          </div>
          <div className="grid">
          <div className="grid-items">
              <div className="video-style">
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/Xg0jF5CpXDU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="grid-items">
              <h3>Logistics</h3>
              <p>
                Aaziko.com have the best logistics network in all mode of
                transport and provide door to door delivery of your goods at the
                best possible price. Our expert team will guide you regarding
                packaging to avoid chances of damage and to make your clearance
                smooth at custom. We work with standard freight company so your
                goods always in safe hand. You can also track live shipment
                status at our website.
              </p>
            </div>
           
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="video-style">
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/TXmSn7LC_2g"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="grid-items">
              <h3>Money Back Guarantee</h3>
              <p>
                Received your consignment but the goods are damaged or don’t
                match with the description? No worries! Our money-back guarantee
                protects you if you ever face such situations.
              </p>
            </div>
          </div>
          <div className="grid">
          <div className="grid-items">
              <div className="video-style">
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/K1_xwtglwVQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="grid-items">
              <h3>Inspection</h3>
              <p>
                We provide a full inspection report before dispatching. After
                completing manufacturing our team will visit manufacturers and
                inspect well properly and send you a full report and also
                provide a lab testing report if needed.
              </p>
            </div>
           
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="video-style">
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/qMVElmOsG8M"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="grid-items">
              <h3>Trade Agreements</h3>
              <p>
                Our expert team do all paperwork regarding customs and to make
                clearance smooth and seamless. And also suggest using the most
                appropriate trade agreement to save money on duties.
              </p>
            </div>
          </div>
        </div> */}

        <div className="vision-page-title">
          <h4>Vision</h4>
          <h5>To Make World United By Making Global Trade Easiest, Fastest And Trustful.</h5>

          <p>This Will Allow Every individual Wanting To Source Goods From World In A Few Minutes And have Better Experience In Finding
            The Right Manufacturer, Logistics, Customs, Agreements, And Most Important With 100% Assurance Of Payment, Goods Quality And Quantity.</p>
        </div>

        <div className="vision-all-grid-control">
          {[0, 1, 2, 3, 4].map(() => {
            return (

              <div className="vision-all-gridietem ">
                <div className="video-alignment">
                  <iframe
                    width="100%"
                    src="https://www.youtube.com/embed/eBMJQMJM4ao?start=18"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>

                <div className="vision-details-alignmenty">
                  <h3>Largest Database of Sellers and Buyers</h3>

                  <p>Gone are the days when you had to spend hours looking up contact details of Buyers and Sellers that meet the requirements. Our large database of quality sellers from India and Buyers from all over the world provides you with genuine contact details of suppliers and buyers. So, when the need arises, look anywhere else just log on to Aaziko.com</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
