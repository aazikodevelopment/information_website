import React, { useEffect } from "react";
import "./OnsiteInspections.scss";
import OnSiteIcon from "../../assets/icons/on-site-icon.png";
import OnImg1 from "../../assets/Image/Onsite1.png";
import OnImg2 from "../../assets/Image/Onsite1.png";
import OnImg3 from "../../assets/Image/Onsite1.png";
import OnImg4 from "../../assets/Image/Onsite1.png";
import OnImg5 from "../../assets/Image/Onsite1.png";
import OnImg6 from "../../assets/Image/Onsite1.png";
import OnImg7 from "../../assets/Image/Onsite1.png";
import OnsiteMainImg from "../../assets/Image/onsite-inspection-main-img.svg";
import SatisfiedIcon from "../../assets/Image/completedtask2.png";
import ProjectsIcon from "../../assets/Image/rate1.png";
import RegulationsIcon from "../../assets/Image/accreditation1.png";

export default function OnsiteInspections() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <div className="on-site-inspection-section">
      <div className="on-site-inspection-banner">
        <div className="container">
          <div className="on-site-inspection-banner-grid">
            <div className="on-site-banner-left-side-alignment">
              <div>Aaziko Inspections</div>
              <h4>Expert Onsite Inspection Services</h4>
            </div>
            <div className="on-site-icon-box">
              <img src={OnsiteMainImg} alt="OnsiteMainImg" />
            </div>
          </div>
        </div>
      </div>
      <div className="fullbg">
        <div className="container">
          <div>
            <h3>Welcome to Aaziko</h3>
            <div>Welcome to Aaziko's breathtaking Onsite Inspection Services designed for the global trade import-export industry.Our expert team ensures flawless execution and unwavering dedication to our clients.</div>
          </div>
          <div className="helpeingalign">
              <div>
                <div className="imageshadow">
                <img src={RegulationsIcon} alt="RegulationsIcon"/>
                </div>
                <div>Regulations Checked</div>
              </div>
              <div>
                <div className="imageshadow">               
                   <img src={SatisfiedIcon} alt="SatisfiedIcon"/>
              </div>
                <div>Satisfied Clients</div>
              </div>
              <div>
               <div className="imageshadow">
               <img src={ProjectsIcon} alt="ProjectsIcon"/>
               </div>
                <div>Projects Completed</div>
              </div>
          </div>
        </div>
      </div>
      <div className="on-site-inpection-all-details-alignment">
        <div className="container">
          <div className="on-site-inpection-child-details-alignment">
            <div className="on-site-inpection-grid-alignment">
              <div className="BoxDesing">
                <div className="on-site-img">
                  <img src={OnImg1} alt="OnImg1" />
                </div>
                <div className="on-site-right-text-alignment">
                  <h6>Regulatory Compliance:</h6>
                  <p>
                    Government agencies often conduct onsite inspections to ensure that businesses and organizations comply with local, state, and
                    federal regulations. These inspections may involve checking for adherence to safety codes, health standards, environmental laws, and
                    more.
                  </p>
                </div>
              </div>
              <div className="BoxDesing">
                <div className="on-site-img">
                  <img src={OnImg2} alt="OnImg1" />
                </div>
                <div className="on-site-right-text-alignment">
                  <h6>Quality Control:</h6>
                  <p>
                    In manufacturing and production industries, onsite inspections are essential to verify the quality of products or processes.
                    Inspectors may examine raw materials, production lines, and finished products to ensure they meet specified standards.
                  </p>
                </div>
              </div>
              <div className="BoxDesing">
                <div className="on-site-img">
                  <img src={OnImg3} alt="OnImg1" />
                </div>
                <div className="on-site-right-text-alignment">
                  <h6>Safety Checks:</h6>
                  <p>
                    Safety inspections are critical to identifying and mitigating potential hazards in workplaces, construction sites, and public areas.
                    Safety inspectors may examine equipment, infrastructure, and safety protocols to prevent accidents and ensure the well-being of
                    individuals.
                  </p>
                </div>
              </div>
              <div className="BoxDesing">
                <div className="on-site-img">
                  <img src={OnImg4} alt="OnImg1" />
                </div>
                <div className="on-site-right-text-alignment">
                  <h6>Environmental Assessments:</h6>
                  <p>
                    Environmental agencies often perform onsite inspections to assess the impact of industrial processes or construction projects on the
                    environment. This can include evaluating air and water quality, waste disposal methods, and compliance with environmental
                    regulations.
                  </p>
                </div>
              </div>
              <div className="BoxDesing">
                <div className="on-site-img">
                  <img src={OnImg5} alt="OnImg1" />
                </div>
                <div className="on-site-right-text-alignment">
                  <h6>Site Surveys:</h6>
                  <p>
                    Before starting construction projects or property development, site surveys are conducted to gather data on the terrain, soil
                    conditions, and other factors that can affect the project's feasibility and design.
                  </p>
                </div>
              </div>
              <div className="BoxDesing">
                <div className="on-site-img">
                  <img src={OnImg6} alt="OnImg1" />
                </div>
                <div className="on-site-right-text-alignment">
                  <h6>Audit and Compliance:</h6>
                  <p>
                    Safety inspections are critical to identifying and mitigating potential hazards in workplaces, construction sites,
                    and public areas. Safety inspectors may examine equipment,
                    infrastructure, and safety protocols to prevent accidents and ensure the well-being of individuals.
                  </p>
                </div>
              </div>
            </div>
            <div className="BoxDesingOneGrid">
              <div className="on-site-img">
                <img src={OnImg7} alt="OnImg1" />
              </div>
              <div className="on-site-right-text-alignment">
                <h6>Documentation and Reporting:</h6>
                <p>
                  After an onsite inspection, inspectors typically create detailed reports that outline their findings, recommendations, and any
                  necessary corrective actions. These reports are important for maintaining transparency and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
