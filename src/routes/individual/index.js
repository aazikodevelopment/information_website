import React, { useEffect } from 'react'
import "./individual.scss"
export default function Individual() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className="individual-section">
            <div className="individual-details-bg-alignment">
                <h4>INDIVIDUAL</h4>
            </div>

            <div className="individual-details-form-alignment">
                <div className="container">
                    <div className="individual-first-grid">
                        <div className="input-alignment">
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className="input-alignment">
                            <input type="text" placeholder='Contact Number' />
                        </div>
                    </div>
                    <div className="individual-second-grid">
                        <div className="input-alignment">
                            <input type="text" placeholder='Email' />
                        </div>
                        <div className="input-alignment">
                            <input type="text" placeholder='aadhar card' />
                        </div>
                        <div className="input-alignment">
                            <input type="text" placeholder='pan number' />
                        </div>
                    </div>
                    <div className="individual-address-alignment">
                        <textarea placeholder='Address'></textarea>
                    </div>

                    <div className="individual-submit-button">
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
