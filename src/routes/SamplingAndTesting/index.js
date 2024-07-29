import React, { useEffect } from 'react'
import "./SamplingandTesting.scss"
import sampling from "../../assets/Image/sampling.svg"
import random1 from "../../assets/Image/ss1.svg"
import random2 from "../../assets/Image/ss2.svg"
import rss1 from "../../assets/Image/rss1.svg"
import rss2 from "../../assets/Image/rss2.svg"
import rss3 from "../../assets/Image/rss3.svg"
import rss4 from "../../assets/Image/rss4.svg"
import rss5 from "../../assets/Image/rss5.svg"
import rss6 from "../../assets/Image/rss6.svg"
import rss7 from "../../assets/Image/rss7.svg"
import rss8 from "../../assets/Image/rss8.svg"
import rss9 from "../../assets/Image/rss9.svg"
import rss10 from "../../assets/Image/rss10.svg"

const SamplingAndTesting = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <div className="sampling-section container ">
            <div className="TowGrid">
                <div className="MessageGrid">
                    <h2>Sampling <br></br>And Testing</h2>
                    <div className="InfoMessageText">
                        Sampling and testing of goods or products is a critical part of quality control and assurance in various industries.
                    </div>
                </div>
                <div className="ImageGrid">
                    <img src={sampling} className="ImageGridRemote11" alt="" />
                </div>
            </div>
            <div className="sampling-alignment">
                <div className="ImageGrid">
                    <img src={random1} className="ImageGridRemote11" alt="" />
                    <h5>Sampling</h5>
                </div>
                <div className="container">
                    <div className="sampling-TowGrid">
                        <div>
                            <div className="sampling-img">
                                <img src={rss1} alt="WeightImage" />
                            </div>
                            <div className="sampling-message">
                                <h2>Random Sampling</h2>
                                <p> This is a common method where samples are chosen randomly from a larger lot or batch. Random sampling helps ensure that each item in the population has an equal chance of being selected.</p>
                            </div>
                        </div>
                        <div>
                            <div className="sampling-img">
                                <img src={rss2} alt="NotingImage" />
                            </div>
                            <div className="sampling-message">
                                <h2>Stratified Sampling</h2>
                                <p> In this method, the population is divided into subgroups or strata, and samples are taken from each stratum. This approach is useful when there are different quality levels within the population.</p>
                            </div>
                        </div>
                        <div>
                            <div className="sampling-img">
                                <img src={rss3} alt="NotingImage" />
                            </div>
                            <div className="sampling-message">
                                <h2>Systematic Sampling</h2>
                                <p>Samples are chosen at regular intervals from the population. It can be more efficient than random sampling in certain situations.</p>
                            </div>
                        </div>
                        <div>
                            <div className="sampling-img">
                                <img src={rss4} alt="NotingImage" />
                            </div>
                            <div className="sampling-message">
                                <h2>Convenience Sampling</h2>
                                <p>Samples are selected based on convenience, which may not always be representative of the entire population. This method is generally avoided in quality control.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sampling-alignment">
                <div className="ImageGrid">
                    <img src={random2} className="ImageGridRemote11" alt="" />
                    <h5>Testing</h5>
                </div>
                <div className="container">
                    <div className="sampling-TowGrid">
                        <div>
                            <div className="sampling-img">
                                <img src={rss5} alt="WeightImage" />
                            </div>
                            <div className="sampling-message">
                                <h2>Physical Testing</h2>
                                <p> This involves evaluating physical properties like dimensions, weight, color, and appearance. For example, in manufacturing, products may be tested for size and shape conformity.</p>
                            </div>
                        </div>
                        <div>
                            <div className="sampling-img">
                                <img src={rss6} alt="NotingImage" />
                            </div>
                            <div className="sampling-message">
                                <h2>Chemical Testing</h2>
                                <p>Chemical analysis is used to check the composition of products. This is crucial in industries like food, pharmaceuticals, and chemicals.</p>
                            </div>
                        </div>
                        <div>
                            <div className="sampling-img">
                                <img src={rss7} alt="NotingImage" />
                            </div>
                            <div className="sampling-message">
                                <h2>Mechanical Testing</h2>
                                <p>Products can be subjected to mechanical tests to assess their strength, durability, and performance under stress or load. This is common in industries like construction and automotive.</p>
                            </div>
                        </div>
                        <div>
                            <div className="sampling-img">
                                <img src={rss8} alt="NotingImage" />
                            </div>
                            <div className="sampling-message">
                                <h2>Non-Destructive Testing</h2>
                                <p>In cases where destroying the product for testing is not an option, NDT methods such as ultrasonic testing or X-ray inspection are used to examine the internal structure without damaging the item.</p>
                            </div>
                        </div>
                        <div>
                            <div className="sampling-img">
                                <img src={rss9} alt="NotingImage" />
                            </div>
                            <div className="sampling-message">
                                <h2>Functional Testing</h2>
                                <p>This involves testing whether the product performs its intended function. For example, in electronics, functional testing checks if a device works as expected.</p>
                            </div>
                        </div>
                        <div>
                            <div className="sampling-img">
                                <img src={rss10} alt="NotingImage" />
                            </div>
                            <div className="sampling-message">
                                <h2>Microbiological Testing</h2>
                                <p>In industries like food and pharmaceuticals, microbiological tests are conducted to ensure products are free from harmful microorganisms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SamplingAndTesting