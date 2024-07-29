import React from 'react'
import "./SupplierLatestBlog.scss";
import SupplierBlogImg from "../../../assets/Image/blog-demo-img.png";
export default function SupplierLatestBlog() {
    return (
        <div className="supplier-latest-blog-section">
            <div className="container">
                <div className="supplier-latest-blog-alignment">
                    <h6>Check out the latest articles from our blog</h6>

                    <div className="supplier-all-blog-details-alignment">
                        <div className="supplier-all-blog-grid">
                            {[0, 1, 2].map(() => {
                                return (

                                    <div className="supplier-all-blog-gridItem">
                                        <div className="supplier-blog-box-alignment">
                                            <div className="supplier-blog-img-alignment">
                                                <img src={SupplierBlogImg} alt="SupplierBlogImg" />
                                            </div>
                                            <div className="supplier-blog-details-description ">
                                                <p>How to ship perishable foo:
                                                    Essential steps and useful tips</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
