import React, { useEffect } from "react";
import "./ProductTesting.scss";
import ShipImage from "../../assets/imges/Image2.png";
import SettingImage from "../../assets/imges/Image1.png";
import MobileWatching from "../../assets/imges/Image4.png";
import MachinePackage from "../../assets/imges/Image5.png";
import laptopworking from "../../assets/imges/Image6.png";
import Quilitytestingmachine from "../../assets/imges/Image7.png";
import ProductImagetest from "../../assets/imges/Image8.png";
import machineworking from "../../assets/imges/Image9.png";

export default function ProductTesting() {
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
                            <h4>Aaziko  Product Testing Services:</h4>
                        </div>
                        <div className="on-site-img">
                            <img src={ShipImage} alt="shipimage" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="on-site-inpection-all-details-alignment">
                <h1 className="Product-Title">Types of Product Testing</h1>
                <div className="container">
                    <div className="on-site-inpection-child-details-alignment">
                        <div className="on-site-inpection-grid-alignment-one">
                            <div className="on-site-img">
                                <img src={SettingImage} alt="SettingImage" />
                            </div>
                            <div className="on-site-right-text-alignment">
                                <h6>Functionality Testing</h6>
                                <p> Evaluating whether the product performs its intended functions correctly.</p>
                            </div>
                        </div>
                        <div className="on-site-inpection-grid-alignment-tow">
                            <div className="on-site-right-text-alignment">
                                <h6>Safety Testing</h6>
                                <p>Assessing the product's safety features to ensure it doesn't pose risks to users.</p>
                            </div>
                            <div className="on-site-img">
                                <img src={MobileWatching} alt="MobileWatching" />
                            </div>
                        </div>
                        <div className="on-site-inpection-grid-alignment-one">
                            <div className="on-site-img">
                                <img src={MachinePackage} alt="SettingImage" />
                            </div>
                            <div className="on-site-right-text-alignment">
                                <h6>Durability Testing</h6>
                                <p>Determining the product's lifespan and resistance to wear and tear.</p>
                            </div>
                        </div>
                        <div className="on-site-inpection-grid-alignment-tow">
                            <div className="on-site-right-text-alignment">
                                <h6>Performance Testing</h6>
                                <p>Measuring the product's performance under different conditions.</p>
                            </div>
                            <div className="on-site-img">
                                <img src={laptopworking} alt="laptopworking" />
                            </div>
                        </div>


                        <div className="on-site-inpection-grid-alignment-one">
                        <div className="on-site-img">
                                <img src={MachinePackage} alt="MachinePackage" />
                            </div>
                            <div className="on-site-right-text-alignment">
                                <h6>Environmental Testing</h6>
                                <p>Evaluating how the product reacts to environmental factors such as temperature, humidity, or pressure.</p>
                            </div>
                        </div>
                        <div className="on-site-inpection-grid-alignment-tow">
                            <div className="on-site-right-text-alignment">
                                <h6>Quality Testing</h6>
                                <p>Ensuring that the product meets quality standards and specifications.</p>
                            </div>
                            <div className="on-site-img">
                                <img src={Quilitytestingmachine} alt="Quilitytestingmachine" />
                            </div>
                        </div>
                        <div className="on-site-inpection-grid-alignment-one">
                        <div className="on-site-img">
                                <img src={ProductImagetest} alt="ProductImagetest" />
                            </div>
                            <div className="on-site-right-text-alignment">
                                <h6>Testing Standards</h6>
                                <p>Products often need to comply with industry-specific standards or regulations. Testing is performed in accordance with these standards.</p>
                            </div>
                        </div>
                        <div className="on-site-inpection-grid-alignment-tow">
                            <div className="on-site-right-text-alignment">
                                <h6>Testing Equipment</h6>
                                <p>Specialized equipment and instruments are used to conduct tests, depending on the type of product and the specific tests required.</p>
                            </div>
                            <div className="on-site-img">
                                <img src={machineworking} alt="machineworking" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
