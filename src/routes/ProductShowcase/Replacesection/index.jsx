import React, { useState } from "react";
import EachIcon from "../../../assets/icons/each.svg";
import PlusIcon from "../../../assets/icons/gray-plus.svg";
import "./Replacesection.scss";
import DragIcon from "../../../assets/icons/drag.svg";
import RemoveIcon from "../../../assets/icons/Remove.svg";
import DragImage from "../../../assets/imges/drag-image.png";
import TipsImage from "../../../assets/imges/tips.png";
export default function Replacesection() {
    const [toogle, setToogle] = useState(false);
    const [toogle1, setToogle1] = useState(false);

  return (
    <div>
      <div className="replace-section-all-content-alignment">
        <div className="container">
          <div className="section-title">
            <h4>How to replace or remove Product Showcases</h4>
            <p>
              Managing your Product Showcases is quick and easy, and it can also
              be done in your “My Aaziko” dashboard. It only takes a couple of
              clicks to replace or remove your current showcases to make room
              for new ones.
            </p>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="icon-grid">
                <div className="icon-grid-items">
                  <img src={DragIcon} alt="DragIcon" />
                </div>
                <div className="icon-grid-items">
                  <span>Drag and drop to replace</span>
                  <p>
                    Swapping out your products is as easy as dragging and
                    dropping the items into the windows under the “Product
                    Showcase” tab.
                  </p>
                </div>
              </div>
              <div className="icon-grid">
                <div className="icon-grid-items">
                  <img src={RemoveIcon} alt="RemoveIcon" />
                </div>
                <div className="icon-grid-items">
                  <span>Remove with one click</span>
                  <p>
                    Each product in the panel in the Product Showcase manager
                    has a “Remove” button. Simply click the button to remove it.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="image-style">
                <img src={DragImage} alt="DragImage" />
              </div>
            </div>
          </div>
          <div className="sub-grid">
            <div className="sub-grid-items">
              <div className="image-style">
                <img src={TipsImage} alt="TipsImage" />
              </div>
            </div>
            <div className="sub-grid-items">
              <div className="first-text">
                <h2>Tips for showcasing products</h2>
                <p>
                  Product Showcase is a valuable tool. Sellers can maximize the
                  impact of this tool by applying a few useful practices related
                  to strategy and optimization. Each practice is different, but
                  they all tie into creating more attractive listings.
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
      </div>
    </div>
  );
}
