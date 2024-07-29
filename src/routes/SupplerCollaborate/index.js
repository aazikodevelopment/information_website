import React, { useEffect } from 'react'
import "./SupplerCollaborate.scss";
import SCIMG from "../../assets/Image/sci1.png";
import SupplierCollaborationDetailss from './SupplierCollaborationDetails';
export default function SupplerCollaborate() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className="suppler-collaborate-section">
            <div className="container">
                <div className="suppler-collaborate-main-alignment">
                    <div className="suppler-collaborate-grid">
                        <div className="suppler-collaborate-grid-item ">
                            <h4>Suppler Collaborate with<p><span className="a-text">A</span><span className="a-2-text">a</span><span className="z-text">z</span><span className="i-text">i</span><span className="ko-text">k</span><span className="ko-text">o</span></p></h4>
                            <p>Welcome to the Collaborate with Aaziko page. We believe in the power of partnerships and collaborations to drive innovation and create mutual growth. At Aaziko, we are open to exploring collaboration opportunities with like-minded businesses and partners in the import-export industry and beyond.</p>
                        </div>

                        <div className="suppler-collaborate-grid-item">
                            <div className="suppler-collaborate-img">
                                <img src={SCIMG} alt="SCIMG" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SupplierCollaborationDetailss />
        </div>
    )
}
