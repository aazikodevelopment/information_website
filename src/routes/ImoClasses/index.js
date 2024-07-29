import React, { useEffect } from "react";
import "./ImoClasses.scss";
import Vectore from "../../assets/icons/Vectoorange-vec.png";
export default function ImoClasses() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <div className="imo-classes-all-content-alignment">
        <div className="container">
          <div className="title">
            <h1>IMO Classes</h1>
            <p>
              The Carriage of dangerous goods and marine pollutants in sea-going
              ships is respectively regulated in the International Convention
              for the Safety of the Life at Sea ( SOLAS) and the International
              Convention for the Prevention of pollution from Ships (MARPOL).
            </p>
            <p>
              Relevant parts of both SOLAS and MARPOL have been worked out in
              great detail and are included in the International Maritime
              Dangerous Goods (IMDG) Code, thus making this Code the legal
              instrument for maritime transport of dangerous goods and marine
              pollutants. As of 1st January 2004, the IMDG Code will become a
              mandatory requirement.
            </p>
          </div>
          <div className="box">
            <div className="grid">
              <div className="grid-items">
                <div className="text-grid">
                  <div className="text-grid-items">
                    <p>Class 1.</p>
                  </div>
                  <div className="text-grid-items">
                    <p> Explosives</p>
                  </div>
                </div>
                <div className="text-grid">
                  <div className="text-grid-items">
                    <p>Class 2.</p>
                  </div>
                  <div className="text-grid-items">
                    <p> Gases</p>
                  </div>
                </div>
                <div className="text-grid">
                  <div className="text-grid-items">
                    <p>Class 3.</p>
                  </div>
                  <div className="text-grid-items">
                    <p> Flammable Liquids</p>
                  </div>
                </div>
                <div className="text-grid">
                  <div className="text-grid-items">
                    <p>Class 4.</p>
                  </div>
                  <div className="text-grid-items">
                    <p>Flammable Solids or Substances</p>
                  </div>
                </div>
                <div className="text-grid">
                  <div className="text-grid-items">
                    <p>Class 5.</p>
                  </div>
                  <div className="text-grid-items">
                    <p>
                      Oxidizing substances by yielding oxygen increase the risk
                      and intensity of fire
                    </p>
                  </div>
                </div>
                <div className="text-grid">
                  <div className="text-grid-items">
                    <p>Class 6.</p>
                  </div>
                  <div className="text-grid-items">
                    <p>Toxic substances</p>
                  </div>
                </div>
                <div className="text-grid">
                  <div className="text-grid-items">
                    <p>Class 7.</p>
                  </div>
                  <div className="text-grid-items">
                    <p>Radioactive Substances</p>
                  </div>
                </div>
                <div className="text-grid">
                  <div className="text-grid-items">
                    <p>Class 8.</p>
                  </div>
                  <div className="text-grid-items">
                    <p>Corrosive substances</p>
                  </div>
                </div>
                <div className="text-grid">
                  <div className="text-grid-items">
                    <p>Class 9.</p>
                  </div>
                  <div className="text-grid-items">
                    <p>Miscellaneous dangerous substances and articles</p>
                  </div>
                </div>
              </div>
              <div className="grid-items">
                <div className="repeat-content">
                  <img src={Vectore} alt="Vectore" />
                  <p>Class 1: Explosives.</p>
                  <span>
                    Consists of explosives that have a mass explosion hazard. A
                    mass explosion is one which affects almost the entire load
                    instantaneously.
                  </span>
                </div>
                <div className="repeat-content">
                  <img src={Vectore} alt="Vectore" />
                  <p>Subclass 1.2: Explosives</p>
                  <span>
                    Consists of explosives that have a projection hazard but not
                    a mass explosion hazard.
                  </span>
                </div>
                <div className="repeat-content">
                  <img src={Vectore} alt="Vectore" />
                  <p>Subclass 1.3: Explosives</p>
                  <span>
                    Consists of explosives that have a projection hazard but not
                    a mass explosion hazard.
                  </span>
                </div>
                <div className="repeat-content">
                  <img src={Vectore} alt="Vectore" />
                  <p>Subclass 1.4: Explosives</p>
                  <span>
                    Consists of explosives that present a minor explosion
                    hazard. The explosive effects are largely confined to the
                    package and no projection of fragments of appreciable size
                    or range is to be expected. An external fire must not cause
                    virtually instantaneous explosion of almost the entire
                    contents of the package.
                  </span>
                </div>
                <div className="repeat-content">
                  <img src={Vectore} alt="Vectore" />
                  <p>Subclass 1.5: Explosives</p>
                  <span>
                    Consists of very insensitive explosives. This division is
                    comprised of substances which have a mass explosion hazard
                    but are so insensitive that there is very little probability
                    of initiation or of transition from burning to detonation
                    under normal conditions of transport
                  </span>
                </div>
                <div className="repeat-content">
                  <img src={Vectore} alt="Vectore" />
                  <p>Subclass 1.6: Explosives</p>
                  <span>
                    Consists of extremely insensitive articles which do not have
                    a mass explosive hazard. This division is comprised of
                    articles which contain only extremely insensitive detonating
                    substances and which demonstrate a negligible probability of
                    accidental initiation or propagation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
