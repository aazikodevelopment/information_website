import React, { useEffect } from 'react'
import "./Customs.scss";
import Image1 from "../../assets/Image/cargo-delivery-vehicle.png";
import KeyDocumentation from './KeyDocumentation';
import CustomsDetails from './CustomsDetails';
export default function Customs() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className="customs-section">
            <div className="container">
                <div className="customs-main-alignment">
                    <div className="custom-left-side-alignment">
                        <h4>Customs Procedures</h4>
                        <p>"Discover essential customs procedures and regulations for successful import and export activities. Our comprehensive guide covers everything from documentation and duties to compliance, ensuring your global trade transactions are hassle-free. </p>
                    </div>

                    <div className="custom-right-side-alignment">
                        <img src={Image1} alt="Image1" />
                    </div>
                </div>
                <KeyDocumentation />
                <CustomsDetails />
            </div>
        </div>
    )
}
