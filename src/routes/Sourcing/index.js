import React, { useEffect } from "react";
import "./Sourcing.scss";
import Blogo from "../../assets/Image/b-aaziko-logo.png";
import GS1Img from "../../assets/Image/gs1.png";
import GS2Img from "../../assets/Image/gs2.png";
import GS3Img from "../../assets/Image/gs3.png";
import GS4Img from "../../assets/Image/gs4.png";
import GS5Img from "../../assets/Image/gs5.png";
export default function Sourcing() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="sourcing-section">
      <div className="sourcing-banner-alignment">
        <div className="container">
          <div className="sourcing-banner-details">
            <div className="sourcing-banner-heading-text">
              <h4>Global Sourcing with </h4>
              <img src={Blogo} alt="Blogo" />
            </div>
            <p>Buyer Just Share As There Requirements. And We Find Best Deal From Our 200 Thousand Manufacture</p>
          </div>
        </div>
      </div>

      <div className="sourcing-all-details-alignment">
        <div className="container">
          <div>
            <div className="sourcing-all-flex-alignment">
              <div className="sourcing-section-details-box">
                <img src={GS1Img} alt="GS1Img" />
              </div>

              <div className="sourcing-section-details-box-all-details">
                <p>After the buyer shares your requirements on Al, AI will look at Keyworld and show the results</p>
              </div>
            </div>
            <div className="sourcing-all-flex-alignment">
              <div className="sourcing-section-details-box-all-details secondBox">
                <p>
                  {" "}
                  According to your requirement, the status of the goods will be informed in the future environment of the country where the goods
                  will be available.
                </p>
              </div>
              <div className="sourcing-section-details-box">
                <img src={GS2Img} alt="GS2Img" />
              </div>
            </div>
            <div className="sourcing-all-flex-alignment">
              <div className="sourcing-section-details-box">
                <img src={GS3Img} alt="GS3Img" />
              </div>
              <div className="sourcing-section-details-box-all-details ">
                <p> We provide easily information any country's customs rules and customs related certification.</p>
              </div>
            </div>
            <div className="sourcing-all-flex-alignment">
              <div className="sourcing-section-details-box-all-details secondBox second-alignment">
                <p>
                  Accepted only 2 types payment :
                  <br />
                  1- 30% advance and other 70% after inspetion report.
                  <br />
                  2- We will trust the LC (letter of credit) issued by your bank.{" "}
                </p>

                <div className="sourcing-read-more">
                  <button>Read More</button>
                </div>
              </div>
              <div className="sourcing-section-details-box">
                <img src={GS4Img} alt="GS4Img" />
              </div>
            </div>
            <div className="sourcing-all-flex-alignment">
              <div className="sourcing-section-details-box">
                <img src={GS5Img} alt="GS5Img" />
              </div>
              <div className="sourcing-section-details-box-all-details">
                <p>
                  A list of suppliers will be created according to your goods requirement and the list of suppliers with the best price will be given.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
