import React from "react";
import "./WhyLSQAaziko.scss";
import WhyImg from "../../../assets/Image/why-img.png";
import Icon1 from "../../../assets/icons/sl-icon.svg";
import Icon2 from "../../../assets/icons/innovative-icon.svg";
import Icon3 from "../../../assets/icons/snb-icon.svg";
export default function WhyLSQAaziko() {
  return (
    <div className="why-lsq-aaziko-section">
      <div className="container">
        <div className="why-lsq-aaziko-alignment">
          <a>WHY Aaziko.com LSQ</a>

          <div className="why-lsq-aaziko-all-details">
            <div className="why-lsq-aaziko-all-grid-alignment">
              <div className="why-lsq-left-side-alignment">
                <h6>Why do sellers need Aaziko.com LSQ?</h6>
                <p>
                  The LSQ market is valuable to sellers for a variety of reasons. Not only does it help sellers to make more sales in a shorter amount
                  of time, but it opens doors for other areas of business, as well.
                </p>

                <div className="why-lsq-notes-details-alignment">
                  <div className="why-lsq-other-details-grid">
                    <div>
                      <img src={Icon1} alt="Icon1" />
                    </div>
                    <div className="why-lsq-other-notes-alignment">
                      <h4>Streamlined lead generation</h4>
                      <p>The LSQ market streamlines lead generation since sellers have access to hundreds of warm leads with imminent demands.</p>
                    </div>
                  </div>
                  <div className="why-lsq-other-details-grid">
                    <div>
                      <img src={Icon2} alt="Icon2" />
                    </div>
                    <div className="why-lsq-other-notes-alignment">
                      <h4>Innovative</h4>
                      <p>AAZIKO.com provides for a sizable global B2B bidding market, making it the go-to solution for buyers.</p>
                    </div>
                  </div>
                  <div className="why-lsq-other-details-grid">
                    <div>
                      <img src={Icon3} alt="Icon3" />
                    </div>
                    <div className="why-lsq-other-notes-alignment">
                      <h4>Suitable for new brands</h4>
                      <p>
                        With AAZIKO.com LSQ, you don’t need to attract buyers with established branding. You must simply be capable of meeting buyers’
                        needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img src={WhyImg} alt="WhyImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
