import React from 'react'
import "./SupplierDataPerformance.scss";
export default function SupplierDataPerformance() {
    return (
        <div className="supplier-data-perfomance-section">
            <div className="container">
                <div className="supplier-data-perfomance-alignment">
                    <h6>Chack your category data performance on Aaziko.com </h6>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>

                    <div className="supplier-input-alignment">
                        <input type='text' placeholder='e.g consumer electronic' />
                    </div>

                    <div className="supplier-button-alignment">
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
