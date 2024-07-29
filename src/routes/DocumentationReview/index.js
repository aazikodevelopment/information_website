import React, { useEffect } from 'react'
import "./DocumentationReview.scss";
import sampling from "../../assets/Image/sampling.svg"
import dr1 from "../../assets/Image/dr1.svg"
import dr2 from "../../assets/Image/dr2.svg"
import doc1 from "../../assets/Image/doc1.svg"
import doc2 from "../../assets/Image/doc2.svg"
import doc3 from "../../assets/Image/doc3.svg"
import doc4 from "../../assets/Image/doc4.svg"
import doc5 from "../../assets/Image/doc5.svg"
import doc6 from "../../assets/Image/doc6.svg"
import doc7 from "../../assets/Image/doc7.svg"
import doc8 from "../../assets/Image/doc8.svg"
import doc9 from "../../assets/Image/doc9.svg"


const DocumentationReview = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <div className="document-review container ">
            <div className="TowGrid">
                <div className="MessageGrid">
                    <h2>Documentation Review</h2>
                    <div className="InfoMessageText">
                        Documentation review is a critical component of the inspection process in various fields, including manufacturing, construction, healthcare, and regulatory compliance.
                    </div>
                </div>
                <div className="ImageGrids">
                    <div className="ImageGridRemote1" >
                        <img src={dr1} alt="Image 1" />
                    </div>
                    <div className="ImageGridRemote2" >
                        <img src={dr2} alt="Image 2" />
                    </div>
                </div>

            </div>
            <div className='paddingTopBottom'>

                <div className="row topPadding">
                    <div className="ImageAlign">
                        <div className="imgBox">
                            <img src={doc1} className="img-fluid" />
                        </div>
                    </div>
                    <div className="contentAlign">
                        <div className="contentBox">
                            <h4>Objective Identification</h4>
                            <div className="contents">
                                Establishing clear and measurable quality standards or criteria that a product or service must meet. These standards are often based on industry best practices or customer expectations.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row topPaddings">
                    <div className="ImageAlign">
                        <div className="imgBox">
                            <img src={doc2} className="img-fluid" />
                        </div>
                    </div>
                    <div className="contentAlign">
                        <div className="contentBox">
                            <h4>Document Selection</h4>
                            <div className="contents">
                                Determine which documents are relevant to the inspection. These documents may include product specifications, design drawings, quality control procedures, safety manuals, compliance records, and more.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row topPadding">
                    <div>
                        <div className="imgBox">
                            <img src={doc3} className="img-fluid" />
                        </div>
                    </div>
                    <div className='contentAlign'>
                        <div className="contentBox">
                            <h4>Quality Control</h4>
                            <div className="contents">
                                Conducting inspections, tests, and checks at various stages of product development or service delivery to identify and rectify defects or deviations from quality standards. Statistical techniques like Six Sigma can be used in this phase.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row topPaddings ">
                    <div className="ImageAlign">
                        <div className="imgBox">
                            <img src={doc4} className="img-fluid" />
                        </div>
                    </div>
                    <div className="contentAlign">
                        <div className="contentBox">
                            <h4>Document Selection</h4>
                            <div className="contents">
                                Determine which documents are relevant to the inspection. These documents may include product specifications, design drawings, quality control procedures, safety manuals, compliance records, and more.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row topPadding ">
                    <div className="ImageAlign">
                        <div className="imgBox">
                            <img src={doc5} className="img-fluid" />
                        </div>
                    </div>
                    <div className="contentAlign">
                        <div className="contentBox">
                            <h4>Review Team</h4>
                            <div className="contents">
                                Assemble a team of qualified individuals who have expertise in the subject matter and the ability to assess whether the documentation meets the required standards.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row topPaddings ">
                    <div className="ImageAlign">
                        <div className="imgBox">
                            <img src={doc6} className="img-fluid" />
                        </div>
                    </div>
                    <div className="contentAlign">
                        <div className="contentBox">
                            <h4>Review Process</h4>
                            <div className="contents">
                                The review process is a critical component of various activities, including academic research, publishing, quality control in businesses, and many other fields.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row topPadding ">
                    <div className="ImageAlign">
                        <div className="imgBox">
                            <img src={doc7} className="img-fluid" />
                        </div>
                    </div>
                    <div className="contentAlign">
                        <div className="contentBox">
                            <h4>Documentation Report</h4>
                            <div className="contents">
                                Compile a comprehensive report summarizing the findings of the documentation review. This report should highlight any non-conformities, discrepancies, or areas that require corrective action.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row topPaddings ">
                    <div className="ImageAlign">
                        <div className="imgBox">
                            <img src={doc8} className="img-fluid" />
                        </div>
                    </div>
                    <div className="contentAlign">
                        <div className="contentBox">
                            <h4>Feedback and Corrective Action</h4>
                            <div className="contents">
                                Share the findings and recommendations with relevant stakeholders, and work on implementing corrective actions to address any identified issues or deficiencies.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row topPadding ">
                    <div className="ImageAlign">
                        <div className="imgBox">
                            <img src={doc9} className="img-fluid" />
                        </div>
                    </div>
                    <div className="contentAlign">
                        <div className="contentBox">
                            <h4>Documentation Retention</h4>
                            <div className="contents">
                                Maintain a record of the documentation review process, including the report, for future reference and audit purposes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocumentationReview