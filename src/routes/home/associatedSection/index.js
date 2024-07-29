import React from "react";
import "./associatedSection.scss";
import PartnerImage from "../../../assets/Image/123.svg";
import PartnerImage2 from "../../../assets/Image/eepc.svg";
import PartnerImage3 from "../../../assets/Image/echai.svg";
import PartnerImage4 from "../../../assets/Image/fieo.svg";
export default function AssociatedSection() {
  return (
    <div className="associated-section-all-contnet-alignment">
      <div className="container">
        <div className="page-title">
          <h4>We Are Associated With</h4>
        </div> 
        <div className="all-image-center-alignment">
          <div>
            <img src={PartnerImage} />
          </div>

          <div>
            <img src={PartnerImage2} />
          </div>
          <div>
            <img src={PartnerImage3} />
          </div>
          <div>
            <img src={PartnerImage4} />
          </div>
        </div>
      </div>
    </div>
  );
}
