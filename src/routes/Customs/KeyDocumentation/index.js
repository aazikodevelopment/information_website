import React from 'react'
import "./KeyDocumentation.scss";
import KD1 from "../../../assets/Image/kdi1.png"
import KD2 from "../../../assets/Image/kdi2.png"
import KD3 from "../../../assets/Image/kdi3.png"
import KD4 from "../../../assets/Image/kdi4.png"
import KD5 from "../../../assets/Image/kdi5.png"
export default function KeyDocumentation() {
    return (
        <div className="key-documentation-section">
            <div className="key-documentation-heading">
                <h4>Key Documentation</h4>
            </div>
            <div className="key-deocument-details-alignment">
                <div className="key-deocument-details-flex">
                    <div className="key-document-flex-details">
                        <div className="key-document-box-alignment">
                            <img src={KD1} alt="KD1" />
                        </div>
                        <p>Bill of Lading</p>
                    </div>
                    <div className="key-document-flex-details">
                        <div className="key-document-box-alignment">
                            <img src={KD2} alt="KD1" />
                        </div>
                        <p>Commercial
                            Invoice</p>
                    </div>
                    <div className="key-document-flex-details">
                        <div className="key-document-box-alignment">
                            <img src={KD3} alt="KD1" />
                        </div>
                        <p>Packing List</p>
                    </div>
                    <div className="key-document-flex-details">
                        <div className="key-document-box-alignment">
                            <img src={KD4} alt="KD1" />
                        </div>
                        <p>Certificare of
                            Origin</p>
                    </div>
                    <div className="key-document-flex-details">
                        <div className="key-document-box-alignment">
                            <img src={KD5} alt="KD1" />
                        </div>
                        <p>Importer/Exporter
                            Record</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
