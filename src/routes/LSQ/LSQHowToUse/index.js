import React from "react";
import "./LSQHowToUse.scss";
import HTU1 from "../../../assets/icons/htu-icon1.svg";
import HTU2 from "../../../assets/icons/htu-icon2.svg";
import HTU3 from "../../../assets/icons/htu-icon3.svg";
export default function LSQHowToUse() {
  return (
    <div className="lsq-how-to-use-section">
      <div className="container">
        <div className="lsq-how-to-use-alignment">
          <a>How to use</a>
          <h4>How to use Aaziko.com LSQ to boost sales</h4>
          <p>
            Aaziko.com LSQ is quite easy to use. All you have to do is browse LSQ postings, select a high-quality LSQ, and submit an attractive quote.
          </p>

          <div className="lsq-how-to-use-option-alignment">
            <div className="lsq-how-to-user-option-grid">
              <div>
                <img src={HTU1} alt="HTU1" />
              </div>
              <div className="lsq-how-to-use-right-side-alignment">
                <h6>Browse LSQ postings</h6>
                <p>
                  Browse requests in the “LSQ Markets.” Search for specific keywords within your niche or filter results based on request category.
                </p>
              </div>
            </div>
            <div className="lsq-how-to-user-option-grid">
              <div>
                <img src={HTU2} alt="HTU2" />
              </div>
              <div className="lsq-how-to-use-right-side-alignment">
                <h6>Select a high-quality LSQ</h6>
                <p>Choose a quote that you are capable of fulfilling. Ensure that you are able to meet the requester’s requirements.</p>
              </div>
            </div>
            <div className="lsq-how-to-user-option-grid">
              <div>
                <img src={HTU3} alt="HTU3" />
              </div>
              <div className="lsq-how-to-use-right-side-alignment">
                <h6>Submit a quote</h6>
                <p>Answer the requests with a detailed quote that demonstrates your ability to fulfill the requester’s needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
