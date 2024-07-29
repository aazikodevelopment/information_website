import React, { useEffect } from "react";
import "./ImporterExporter.scss";
import OurFeatureImage from "../../assets/Image/our-feature.png";
import SearchImage from "../../assets/Image/search-img.png";
import ImporeExporterImg from "../../assets/Image/importer-img.png";
import SmartImg from "../../assets/Image/img-5.png";
import SorterImg from "../../assets/Image/soreter-img.png";
export default function ImporterExporter() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div className="importer-exporter-section">
      <div className="container">
        <div className="importer-exporter-banner-section">
          <div className="importer-exporter-grid">
            <div className="importer-exporter-grid-item">
              <div className="importer-banner-details-alignment">
                <h4>Simplify your trading business</h4>
                <p>
                  Launched in 2000, Aaziko.com is the leading platform for global wholesale trade. We serve millions of buyers and suppliers around
                  the world.
                </p>
              </div>
            </div>
            <div className="importer-exporter-grid-item">
              <img src={OurFeatureImage} alt="OurFeatureImage" />
            </div>
          </div>
        </div>

        <div className="importer-exporter-all-details-alignment">
          <div className="import-explorer-search-img">
            <img src={SearchImage} alr="SearchImage" />
          </div>

          <div className="import-explorer-all-body-details-alingnment">
            <div className="import-explorer-all-body-grid-alignment">
              <div className="import-explorer-all-body-grid-item">
                <div>
                  <img src={ImporeExporterImg} alt="ImporeExporterImg" />
                </div>
              </div>
              <div className="import-explorer-all-body-grid-item">
                <div className="import-explorer-right-side-alignment">
                  <h4>Benefits of working through Aaziko</h4>

                  <div className="import-explorer-list-alignment">
                    <ul>
                      <li>Instantly find the best sea, air and inland freight rates and delivery times</li>
                      <li>Real-time shipment tracking</li>
                      <li>24/7 support at all stages of delivery</li>
                      <li>Deferral of payments for at least two weeks</li>
                      <li>Enjoy full transparency of rates without hidden fees</li>
                      <li>Forwarder's liability insurance to keep your cargo safe</li>
                      <li>Control each shipment start to finish from your online dashboard</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="smart-delivery-section">
          <div className="smart-delivery-grid">
            <div className="smart-delivery-grid-item">
              <div className="smart-delivery-side-section">
                <h4>Smart delivery</h4>
                <p>
                  Whether it’s sourcing from your mobile phone or contacting suppliers in their local language, turn to Aaziko.com for all your global
                  business needs.
                </p>
              </div>
            </div>
            <div className="smart-delivery-grid-item">
              <img src={SmartImg} alt="SmartImg" />
            </div>
          </div>
        </div>
        <div className="power-full-web-tools-section">
          <div className="power-full-web-tools-grid">
            <div className="power-full-web-tools-grid-item">
              <img src={SorterImg} alt="SorterImg" />
            </div>
            <div className="power-full-web-tools-grid-item">
              <div className="power-full-web-tools-right-side-alignment">
                <h4>Powerful web-based tools</h4>
                <p>
                  Powerful tools such as Load Calculator, Container Tracking and Cargo Wizard are just some of the tools available to you for
                  simplifying every transaction you make. We provide free access to these tools throughout the shipping process.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sign-up-aaziko-section">
          <h6>
            Sign up and start your journey with <a>Aaziko</a>
          </h6>

          <div className="sign-up-button">
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
