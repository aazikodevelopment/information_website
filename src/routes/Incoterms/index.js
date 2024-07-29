import React, { useEffect } from "react";
import "./Incoterms.scss";
import LgChart from "../../assets/Image/lg-chart.png";
export default function Incoterms() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <div className="incoterms-all-contnet-alignment">
        <div className="container">
          <div className="title">
            <h4>Incoterms</h4>
          </div>
          <div className="box">
            <div className="head">
              <span>EXW</span>
              <span>FCA</span>
              <span>CPT</span>
              <span>CIP</span>
              <span>FAS</span>
              <span>FOB</span>
              <span>CFR</span>
              <span>CIF</span>
              <span>DPU</span>
              <span>DAP</span>
              <span>DDP</span>
            </div>
            <div className="chart-image">
              <img src={LgChart} alt="LgChart" />
            </div>
            <div className="all-line-contnet">
              <span>Shipping:</span>
              <span>Insurance</span>
              <span>Duties</span>
            </div>
            <div className="rules-all-contnet-alignment">
              <div className="sub-title">
                <p>Rules for Sea and Inland Waterway Transport</p>
              </div>
              <div className="all-grid-alignment">
                <div className="grid">
                  <div className="grid-items">
                    <h6>FCA</h6>
                  </div>
                  <div className="grid-items">
                    <p>Free Carrier</p>
                    <span>
                      Supplier produced, packed and prepared the cargo to be
                      shipped. Goods are received by the buyer’s carrier, which
                      picks up the load from the seller’s place. You can call
                      FCA conditions “buyer’s pick-up."
                    </span>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-items">
                    <h6>CIP</h6>
                  </div>
                  <div className="grid-items">
                    <p>Carriage and Insurance Paid To</p>
                    <span>
                      Same as CPT but insurance is added for seller’s account on
                      a definite part of the route. The shipping section covered
                      by insurance, can be any.
                    </span>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-items">
                    <h6>DTP</h6>
                  </div>
                  <div className="grid-items">
                    <p>Delivered at Terminal Paid</p>
                    <span>
                      Supplier has organized land delivery, completed port
                      formalities, performed loading on ship’s board, paid
                      freight charges to the port (airport) of destination,
                      discharging, and paid import customs duties in
                      consideration of the cargo value, taking into account
                      transport costs.
                    </span>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-items">
                    <h6>CIP</h6>
                  </div>
                  <div className="grid-items">
                    <p>Carriage and Insurance Paid To</p>
                    <span>
                      Same as CPT but insurance is added for seller’s account on
                      a definite part of the route. The shipping section covered
                      by insurance, can be any.
                    </span>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-items">
                    <h6>DTP</h6>
                  </div>
                  <div className="grid-items">
                    <p> Delivered at Terminal Paid</p>
                    <span>
                      Supplier has organized land delivery, completed port
                      formalities, performed loading on ship’s board, paid
                      freight charges to the port (airport) of destination,
                      discharging, and paid import customs duties in
                      consideration of the cargo value, taking into account
                      transport costs.
                    </span>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-items">
                    <h6>CFR</h6>
                  </div>
                  <div className="grid-items">
                    <p> Cost and Freight</p>
                    <span>
                      Supplier has organized land delivery, completed port
                      formalities, performed loading on ship’s board and paid
                      freight charges to the port (airport) of destination.
                    </span>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-items">
                    <h6>CPT</h6>
                  </div>
                  <div className="grid-items">
                    <p> Carriage Paid To</p>
                    <span>
                      The seller arranges the delivery to the indicated place
                      and includes it in the goods price. As a rule, such a
                      place is a terminal where ocean carrier (shipping line)
                      can accept cargo for further transportation.
                    </span>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-items">
                    <h6>CIF</h6>
                  </div>
                  <div className="grid-items">
                    <p> Cost, Insurance and Freight</p>
                    <span>
                      The same as CFR, but insurance is added for seller’s
                      account on a definite part of the route. The shipping
                      section covered by insurance, can be any.
                    </span>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-items">
                    <h6>DAP</h6>
                  </div>
                  <div className="grid-items">
                    <p>Delivered at Place</p>
                    <span>
                      Supplier has organized land delivery, completed port
                      formalities, performed loading on ship’s board, paid
                      freight charges to the port (airport) of destination,
                      discharging, completed port formalities, and paid land
                      transport to the address of the consignee for subsequent
                      customs procedures.
                    </span>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-items">
                    <h6>FOB</h6>
                  </div>
                  <div className="grid-items">
                    <p>Free On Board</p>
                    <span>
                      Supplier has organized land delivery, completed port
                      formalities and performed loading on ship’s board.
                    </span>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-items">
                    <h6>СNI</h6>
                  </div>
                  <div className="grid-items">
                    <p>Cost and Insurance</p>
                    <span>
                      Same as the FCA, but insurance is added for seller’s
                      account on a definite part of the route. The shipping
                      section covered by insurance, can be any.
                    </span>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-items">
                    <h6>DPU</h6>
                  </div>
                  <div className="grid-items">
                    <p>Delivered Named Plac Unloaded</p>
                    <span>
                      Same as the FCA, but insurance is added for seller’s
                      account on a definite part of the route. The shipping
                      section covered by insurance, can be any.
                    </span>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-items">
                    <h6>DPP</h6>
                  </div>
                  <div className="grid-items">
                    <p>Delivered at Place Paid</p>
                    <span>
                      Supplier has organized land delivery, completed port
                      formalities, performed loading on ship’s board, paid
                      freight charges to the port (airport) of destination,
                      discharging, completed port formalities, paid land
                      transport to the address of the consignee, along with
                      import customs duties in consideration of the cargo value,
                      taking into account transport costs Incote
                    </span>
                  </div>
                </div>
                {/* askaksaos */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
