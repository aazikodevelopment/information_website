import React from "react";
import "./Linerterms.scss";
import LinerTermsImg from "../../assets/Image/lti1.png";
export default function Linerterms() {
  return (
    <div className="liner-terms-section">
      <div className="container">
        <div className="liner-terms-alignment">
          <div className="liner-terms-heading">
            <h4>Liner terms</h4>
          </div>

          <div className="liner-terms-body-alignment">
            <div className="liner-terms-box-alignment">
              <div className="liner-terms-img-alignment">
                <img src={LinerTermsImg} alt="LinerTermsImg" />
              </div>

              <div className="liner-terms-all-details-alignment">
                <h6>The next main abbreviations are adopted in the commercial practice for line transportations between ports.</h6>

                <div className="liner-terms-all-details-grid">
                  <div className="liner-terms-all-details-grid-item">
                    <div className="liner-terms-child-details-alignment">
                      <h5>Door-to-Door</h5>
                      <p>
                        Carrier organizes delivery from shipper’s warehouse to the consignee warehouse. All fees including land delivery both ends,
                        transhipments, surcharges, ocean or air freight, terminal handling charges (THCs) are inside.
                      </p>
                    </div>
                    <div className="liner-terms-child-details-alignment">
                      <h5>Door-CY</h5>
                      <p>
                        Door/container yard. Carrier organizes delivery from shipper’s warehouse to container yard at destination. All fees up to
                        destination container yard including origin land delivery, transhipments, surcharges, ocean or air freight, terminal handling
                        charges (THCs) and destination terminal forwarding are inside.
                      </p>
                    </div>
                    <div className="liner-terms-child-details-alignment">
                      <h5>FIOS</h5>
                      <p>Free in/out and stowed. Loading/discharging THCs are not included. Only main freight including surcharges.</p>
                    </div>
                    <div className="liner-terms-child-details-alignment">
                      <h5>LIFO</h5>
                      <p>Liner in/free out. Main freight with loading OTHC included, discharging DTHC not included.</p>
                    </div>
                    <div className="liner-terms-child-details-alignment">
                      <h5>FILO</h5>
                      <p>Free in/liner out. Main freight without loading OTHC and with discharging DTHC included.</p>
                    </div>
                    <div className="liner-terms-child-details-alignment">
                      <h5>FICY</h5>
                      <p>
                        Free in/container yard. Main freight without loading OTHC and discharging DTHC plus destination terminal forwarding fees
                        included.
                      </p>
                    </div>
                    <div className="liner-terms-child-details-alignment">
                      <h5>CYLO</h5>
                      <p>Container yard/liner out. Main freight with origin terminal forwarding fees, loading OTHC and discharging DTHC included.</p>
                    </div>
                    <div className="liner-terms-child-details-alignment">
                      <h5>CY-Door</h5>
                      <p>
                        Container yard/door. Carrier organizes delivery from container yard at origin to the consignee’s warehouse. All fees from the
                        origin container yard including origin terminal forwarding, terminal handling charges (THCs), ocean or air freight,
                        surcharges, transhipments, destination land delivery are inside.
                      </p>
                    </div>
                    <div className="liner-terms-child-details-alignment">
                      <h5>FI-Door</h5>
                      <p>
                        Free in/door. Carrier organizes delivery from origin terminal to the consignee’s warehouse. All fees including ocean or air
                        freight, surcharges, transhipments, DTHC, destination land delivery are inside.. Loading OTHC is not included.
                      </p>
                    </div>
                  </div>
                  <div className="liner-terms-all-details-grid-item">
                    <div className="liner-terms-child-details-alignment">
                      <h5>Door-LO</h5>
                      <p>
                        Door/Liner out. Carrier organizes delivery from shipper’s warehouse to destination terminal. All fees up to destination
                        terminal including origin land delivery, transhipments, surcharges, ocean or air freight and terminal handling charges (THCs)
                        are inside.
                      </p>
                    </div>
                    <div className="liner-terms-child-details-alignment">
                      <h5>Door-FO</h5>
                      <p>
                        Door/free out. Carrier organizes delivery from shipper’s warehouse to destination terminal. All fees up to destination
                        terminal including origin land delivery, transhipments, surcharges, ocean or air freight are inside. DTHC is not included.
                      </p>
                    </div>
                    <div className="liner-terms-child-details-alignment">
                      <h5>FIFO</h5>
                      <p>Free in/out. Loading/discharging THCs are not included. Only main freight including surcharges.</p>
                    </div>
                    <div className="liner-terms-child-details-alignment">
                      <h5>LILO</h5>
                      <p>Liner in/out. Main freight with loading/discharging THCs included.</p>
                    </div>
                    <div className="liner-terms-child-details-alignment">
                      <h5>LICY</h5>
                      <p>
                        Liner in/container yard. Main freight with loading OTHC and discharging DTHC plus destination terminal forwarding fees
                        included.
                      </p>
                    </div>
                    <div className="liner-terms-child-details-alignment">
                      <h5>CYCY</h5>
                      <p>
                        Container yard/container yard. Main freight with loading/discharging THCs plus origin and destination terminal forwarding fees
                        included.
                      </p>
                    </div>

                    <div className="liner-terms-child-details-alignment">
                      <h5>CYFO</h5>
                      <p>
                        Container yard/free out. Main freight with origin terminal forwarding fees and loading OTHC included. Discharging DTHC is not
                        included.
                      </p>
                    </div>
                    <div className="liner-terms-child-details-alignment">
                      <h5>LI-Door</h5>
                      <p>
                        Liner in/door. Carrier organizes delivery from origin terminal to the consignee’s warehouse. All fees including origin
                        terminal handling charges (THCs), ocean or air freight, surcharges, transhipments, destination land delivery are inside.
                      </p>
                    </div>
                  </div>
                </div>

                <h6 className="second-heading">The different surcharges to rate.</h6>
                <div className="liner-terms-all-details-grid">
                  <div className="liner-terms-all-details-grid-item">
                    <div className="liner-terms-child-details-alignment">
                      <h5>CAF</h5>
                      <p>(Currency Adjustment Factor) is a fee applied to the shipping costs to compensate for exchange rate fluctuations;</p>
                    </div>
                    <div className="liner-terms-child-details-alignment">
                      <h5>BAF</h5>
                      <p>(Currency Adjustment Factor) is a fee applied to the shipping costs to compensate for exchange rate fluctuations;</p>
                    </div>
                    <div className="liner-terms-child-details-alignment">
                      <h5>Documentation Fee</h5>
                      <p>Is a duty for executing documents, etc.</p>
                    </div>
                  </div>
                  <div className="liner-terms-all-details-grid-item">
                    <div className="liner-terms-child-details-alignment">
                      <h5>Wharfage</h5>
                      <p>
                        Is the port fee for using a wharf to unload cargo from a vessel. Wharfage is normally included in the freight cost or the THC,
                        unless otherwise stated.
                      </p>
                    </div>
                    <div className="liner-terms-child-details-alignment">
                      <h5>CUC</h5>
                      <p>(Chassis Using Charge) is a duty for using chassis;</p>
                    </div>
                  </div>
                </div>

                <div className="notes-details-alignment">
                  <h6>Note</h6>
                  <p>
                    As a rule if line provides door-to-door container delivering it hardly ever stuff or unstuff container.
                    <br /> This question is resolved by consigner's efforts or with help of forwarder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
