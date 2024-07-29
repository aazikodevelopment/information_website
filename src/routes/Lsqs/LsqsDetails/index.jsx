import React, { useState } from "react";
import "./LsqsDetails.scss";
import LsqBanner from "../../../assets/imges/lsq.png";
import SellerImage from "../../../assets/imges/seller.png";
import BootsImage from "../../../assets/imges/boots.png";
import EachIcon from "../../../assets/icons/each.svg";
import PlusIcon from "../../../assets/icons/gray-plus.svg";
import InnovativeIcon from "../../../assets/icons/Innovative.svg";
export default function LsqsDetails() {
  const [toogle, setToogle] = useState(false);
  const [toogle1, setToogle1] = useState(false);

  return (
    <div>
      <div className="lsqs-all-details-contnet-alignment">
        <div className="tab-center-alignment">
          <div className="tab-design">
            <a href="#about-aaziko">
            <span>About Aaziko.com LSQ</span>
            </a>
            <a href="#why-aaziko">
            <span>Why Aaziko.com LSQ</span>
            </a>
            <a href="#howitworkaaziko">
            <span>How It works</span>
            </a>
            <a href="#howtouseaaziko">
            <span>How to Use</span>
            </a>
            <a href="#Practices">
            <span>Practices</span>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="grid" id="about-aaziko">
            <div className="grid-items">
              <div className="image-style">
                <img src={LsqBanner} alt="LsqBanner" />
              </div>
            </div>
            <div className="grid-items">
              <div className="all-contnet-text">
                <div className="text">
                  <span>About Aaziko.com LSQ</span>
                  <h2>What is Aaziko.com LSQ</h2>
                  <p>
                    Aaziko.com LSQ is a marketplace that allows sellers to take
                    the initiative to connect with buyers. Prospective buyers
                    post descriptions of products they need, and sellers respond
                    with a quote for the request.
                  </p>
                </div>
                <div className="all-accordion">
                  <div className="main-accordion">
                    <div className="header">
                      <div className="left-content">
                        <img src={EachIcon} alt="EachIcon" />
                        <span>20,000 new requests each day</span>
                      </div>
                      <div
                        className="right-content"
                        onClick={() => setToogle(!toogle)}>
                        <img
                          className={toogle ? "img-rotate" : "animation-time"}
                          src={PlusIcon}
                          alt="PlusIcon"
                        />
                      </div>
                    </div>
                    <div className={toogle ? "body show" : "body hide"}>
                      <span>
                        Each day, over 20,000 new requests are posted on the LSQ
                        market. Each request presents a unique business
                        opportunity.
                      </span>
                    </div>
                  </div>
                  <div className="main-accordion">
                    <div className="header">
                      <div className="left-content">
                        <img src={EachIcon} alt="EachIcon" />
                        <span>Inquiries from 5,000+ industries</span>
                      </div>
                      <div className="right-content">
                        <img src={PlusIcon} alt="PlusIcon" />
                      </div>
                    </div>
                  </div>
                  <div className="main-accordion">
                    <div className="header">
                      <div className="left-content">
                        <img src={EachIcon} alt="EachIcon" />
                        <span>Trade between 200+ countries</span>
                      </div>
                      <div className="right-content">
                        <img src={PlusIcon} alt="PlusIcon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sec-grid" id="why-aaziko">
            <div className="sec-grid-items">
              <div className="all-contnet-text">
                <div className="text">
                  <span>Why Aaziko.com LSQ</span>
                  <h2>Why do sellers need Aaziko.com LSQ</h2>
                  <p className="first-width">
                    The RFQ market is valuable to sellers for a variety of
                    reasons. Not only does it help sellers to make more sales in
                    a shorter amount of time, but it opens doors for other areas
                    of business, as well.
                  </p>
                </div>
                <div className="all-icon-text-content-alignment">
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={InnovativeIcon} alt="InnovativeIcon" />
                    </div>
                    <div className="icon-grid-items">
                      <p>Streamlined lead generation</p>
                      <span>
                        The LSQ market streamlines lead generation since sellers
                        have access to hundreds of warm leads with imminent
                        demands.
                      </span>
                    </div>
                  </div>
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={InnovativeIcon} alt="InnovativeIcon" />
                    </div>
                    <div className="icon-grid-items">
                      <p>Innovative</p>
                      <span>
                        Aaziko.com provides for a sizable global B2B bidding
                        market, making it the go-to solution for buyers.
                      </span>
                    </div>
                  </div>
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={InnovativeIcon} alt="InnovativeIcon" />
                    </div>
                    <div className="icon-grid-items">
                      <p>Suitable for new brands</p>
                      <span>
                        With Aaziko.com LSQ, you don’t need to attract buyers
                        with established branding. You must simply be capable of
                        meeting buyers’ needs.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sec-grid-items">
              <div className="image-style">
                <img src={SellerImage} alt="SellerImage" />
              </div>
            </div>
          </div>
          <div className="grid" id="howitworkaaziko">
            <div className="grid-items">
              <div className="image-style">
                <img src={BootsImage} alt="BootsImage" />
              </div>
            </div>
            <div className="grid-items">
              <div className="all-contnet-text">
                <div className="text">
                  <span>How it works</span>
                  <h2>How Aaziko.com LSQ boosts your business</h2>
                  <p>
                    The Aaziko.com LSQ market helps B2B sellers take their
                    businesses to the next level by providing high-quality
                    leads, forging valuable professional relationships, and
                    facilitating sales. This unique marketplace creates a
                    springboard with significant growth in your business.
                  </p>
                </div>
                <div className="all-accordion">
                  <div className="main-accordion">
                    <div className="header">
                      <div className="left-content">
                        <img src={EachIcon} alt="EachIcon" />
                        <span>Shortens the sales process</span>
                      </div>
                      <div
                        className="right-content"
                        onClick={() => setToogle1(!toogle1)}>
                        <img
                          className={toogle1 ? "img-rotate" : "animation-time"}
                          src={PlusIcon}
                          alt="PlusIcon"
                        />
                      </div>
                    </div>
                    <div className={toogle1 ? "body show" : "body hide"}>
                      <span>
                        On average, it takes 3 days for buyers and sellers to
                        finalize deals that are initiated in the LSQ market.
                      </span>
                    </div>
                  </div>
                  <div className="main-accordion">
                    <div className="header">
                      <div className="left-content">
                        <img src={EachIcon} alt="EachIcon" />
                        <span>Creates long-term business relationships</span>
                      </div>
                      <div className="right-content">
                        <img src={PlusIcon} alt="PlusIcon" />
                      </div>
                    </div>
                  </div>
                  <div className="main-accordion">
                    <div className="header">
                      <div className="left-content">
                        <img src={EachIcon} alt="EachIcon" />
                        <span>Provides valuable information</span>
                      </div>
                      <div className="right-content">
                        <img src={PlusIcon} alt="PlusIcon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sec-grid" id="howtouseaaziko">
            <div className="sec-grid-items">
              <div className="all-contnet-text">
                <div className="text">
                  <span>How to use</span>
                  <h2>How to use Aaziko.com LSQ to boost sales</h2>
                  <p className="first-width">
                    Aaziko.com LSQ is quite easy to use. All you have to do is
                    browse LSQ postings, select a high-quality LSQ, and submit
                    an attractive quote.
                  </p>
                </div>
                <div className="all-icon-text-content-alignment">
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={InnovativeIcon} alt="InnovativeIcon" />
                    </div>
                    <div className="icon-grid-items">
                      <p>Browse LSQ postings</p>
                      <span>
                        Browse requests in the “LSQ Markets.” Search for
                        specific keywords within your niche or filter results
                        based on request category.
                      </span>
                    </div>
                  </div>
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={InnovativeIcon} alt="InnovativeIcon" />
                    </div>
                    <div className="icon-grid-items">
                      <p>Select a high-quality LSQ</p>
                      <span>
                        Choose a quote that you are capable of fulfilling.
                        Ensure that you are able to meet the requester’s
                        requirements.
                      </span>
                    </div>
                  </div>
                  <div className="icon-grid">
                    <div className="icon-grid-items">
                      <img src={InnovativeIcon} alt="InnovativeIcon" />
                    </div>
                    <div className="icon-grid-items">
                      <p>Submit a quote</p>
                      <span>
                        Answer the requests with a detailed quote that
                        demonstrates your ability to fulfill the requester’s
                        needs.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sec-grid-items">
              <div className="image-style">
                <img src={SellerImage} alt="SellerImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
