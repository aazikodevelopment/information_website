import React from "react";
import "./KeyBenefits.scss";
import KeywordImage from "../../../assets/imges/Keyword.png";
import CategoryImage from "../../../assets/imges/category.png";
import ThreeLinechart from "../../../assets/icons/three-line.svg";
import CartIcon from "../../../assets/icons/cart1.svg";
import SynonymsIcon from "../../../assets/icons/Synonyms.svg";
import RegionsIcon from "../../../assets/icons/regions.svg";
import ShopIcon from "../../../assets/icons/shop-icons.svg";
export default function KeyBenefits() {
  return (
    <div>
      <div className="new-key-benefits-all-content-alignment-for-page">
        <div className="container">
          <div className="grid">
            <div className="grid-items">
              <div className="image-style">
                <img src={KeywordImage} alt="KeywordImage" />
              </div>
            </div>
            <div className="grid-items">
              <div className="text">
                <p>Key Benefits of Keywords Trends</p>
                <span>
                  Aaziko.com RFQ is a marketplace that allows sellers to take
                  the initiative to connect with buyers. Prospective buyers post
                  descriptions of products they need, and sellers respond with a
                  quote for the request.
                </span>
              </div>
              <div className="all-icon-text-contnet-alignment">
                <div className="icon-grid">
                  <div className="icon-grid-items">
                    <img src={ThreeLinechart} alt="ThreeLinechart" />
                  </div>
                  <div className="icon-grid-items">
                    <span>Recent trends</span>
                    <p>
                      See which keywords have been trending over the past seven
                      or thirty days.
                    </p>
                  </div>
                </div>
                <div className="icon-grid">
                  <div className="icon-grid-items">
                    <img src={CartIcon} alt="CartIcon" />
                  </div>
                  <div className="icon-grid-items">
                    <span>keywords searched by buyers</span>
                    <p>
                      keywords searched by buyers before and after searching
                      target keywords
                    </p>
                  </div>
                </div>
                <div className="icon-grid">
                  <div className="icon-grid-items">
                    <img src={SynonymsIcon} alt="SynonymsIcon" />
                  </div>
                  <div className="icon-grid-items">
                    <span>Synonyms</span>
                    <p>
                      Synonyms of target keywords to capture more search results
                    </p>
                  </div>
                </div>
                <div className="icon-grid">
                  <div className="icon-grid-items">
                    <img src={RegionsIcon} alt="RegionsIcon" />
                  </div>
                  <div className="icon-grid-items">
                    <span>Top countries/regions</span>
                    <p>Top countries/regions of potential buyers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sec-grid">
            <div className="sec-grid-items">
                <h6>Keyword trends by category</h6>
                <div className="all-icon-grid">
                    <div className="icon-grid">
                        <div className="icon-grid-items">
                            <img src={ShopIcon} alt="ShopIcon"/>
                        </div>
                        <div className="icon-grid-items">
                            <span>
                                Search keywords directly for a 
                                quick insight into buyer behavior
                            </span>
                        </div>
                    </div>
                    <div className="icon-grid">
                        <div className="icon-grid-items">
                            <img src={ShopIcon} alt="ShopIcon"/>
                        </div>
                        <div className="icon-grid-items">
                            <span>
                                Refine search results by selecting up to two first-tier categories for
                                deeper insight and further optimization of KWA
                            </span>
                        </div>
                    </div>
                    <div className="icon-grid">
                        <div className="icon-grid-items">
                            <img src={ShopIcon} alt="ShopIcon"/>
                        </div>
                        <div className="icon-grid-items">
                            <span>
                                Refine search results further by selecting a time range(last seven or 30 days), 
                                the desired terminal(PC or app) and country/region.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec-grid-items">
                <div className="image-style">
                    <img src={CategoryImage} alt="CategoryImage"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
