    import React, { useState } from "react";
    import "./SupplierCollaborationDetails.scss";
    import SCAImg from "../../../assets/Image/sca-1.png";
    import SCA2Img from "../../../assets/Image/sca-2.png";
    import SCA3Img from "../../../assets/Image/sca-3.png";
    import HGSImg1 from "../../../assets/Image/hgs-1.png";
    import HGSImg2 from "../../../assets/Image/hgs-2.png";
    import PartnerImage from "../../../assets/Image/as-img-1.png";
    import PartnerImage2 from "../../../assets/Image/as-img-2.png";
    import PartnerImage3 from "../../../assets/Image/as-img-3.png";
    import PartnerImage4 from "../../../assets/Image/as-img-4.png";
    import APImg1 from "../../../assets/Image/api1.svg";
    import APImg2 from "../../../assets/Image/api2.svg";
    import APImg3 from "../../../assets/Image/api3.svg";
    import APImg4 from "../../../assets/Image/api4.svg";
    import FormBannerImg from "../../../assets/Image/form-banner.png";
    import Mailicon from "../../../assets/icons/mail-icon.svg";
    import CompanyIcon from "../../../assets/icons/company-icon.svg";
    import UserIcon from "../../../assets/icons/user-ison.svg";
    import PhoneIcon from "../../../assets/icons/phone-icon.svg";
    import PinIcon from "../../../assets/icons/location-icon2.svg";
    import { ApiPost } from "../../../helpers/API/ApiData";
    import { ToastContainer, toast } from "react-toastify";
    export default function SupplierCollaborationDetailss() {

      const [companyName, setCompanyName] = useState('');
      const [email, setEmail] = useState('');
      const [certificateNo, setCertificateNo] = useState('');
      const [products, setProducts] = useState('');

      const handleSubmit = () => {
        const body = {
          companyName: companyName,
          email: email,
          certificateNo: certificateNo,
          productDescription: products
        }
        ApiPost("info-page/create-seller-collaborate", body)
          .then((res) => {
            if(res?.data?.status === true){
              toast.success("Form submitted successfully");
              setCompanyName('');
              setEmail('');
              setCertificateNo('');
              setProducts('')
            }
          })
          .catch((err) => { });
      }

      return (
        <div className="supplier-collaboration-details-section">
          <ToastContainer/>
          <div className="container">
            <div className="supplier-collaboration-approach-details-alignment">
              <h4>Supplier Collaboration Approachs</h4>

              <div className="supplier-collaboration-approach-grid-alignment">
                <div className="supplier-collaboration-approach-grid-item">
                  <div className="approach-img">
                    <img src={SCAImg} alt="SCAImg" />
                  </div>
                  <div className="approach-details">
                    <h6>Start Up Company</h6>
                    <p>
                      Aziko provide witjout anycharge benefits for start up company for product shoot, video shoot, advertisement and a best team lead.
                    </p>
                    <div className="collareate-button">
                      <button>COLLABRATE WITH AAZIKO</button>
                    </div>
                  </div>
                </div>
                <div className="supplier-collaboration-approach-grid-item">
                  <div className="approach-img">
                    <img src={SCA2Img} alt="SCA2Img" />
                  </div>
                  <div className="approach-details">
                    <h6>Multinational Company</h6>
                    <p>Aziko provide low charge benefits for Multinatinal company for product shoot, video shoot, advertisement and a best team lead.</p>
                    <div className="collareate-button">
                      <button>COLLABRATE WITH AAZIKO</button>
                    </div>
                  </div>
                </div>
                <div className="supplier-collaboration-approach-grid-item">
                  <div className="approach-img">
                    <img src={SCA3Img} alt="SCA2Img" />
                  </div>
                  <div className="approach-details">
                    <h6>Chember of Commerce</h6>
                    <p>
                      If a team of more than 200 members of the Chamber of Commerce collaborates with Azico, then Azico will provide them with the best
                      team lead.
                    </p>
                    <div className="collareate-button">
                      <button>COLLABRATE WITH AAZIKO</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="supplier-bottom-details-alignment">
            <div className="supplier-aaziko-provide-section">
              <div className="container">
                <div className="supplier-aaziko-heading-alignment">
                  <h6>What Aaziko Provide.</h6>
                </div>

                <div className="supplier-aaziko-body-alignment">
                  <div className="supplier-grid-alignment">
                    <div className="supplier-grid-item-alignment">
                      <div className="supplier-details-box-alignment">
                        <img src={APImg1} alt="APImg1" />
                      </div>
                      <h6>Photoshoot</h6>
                    </div>
                    <div className="supplier-grid-item-alignment">
                      <div className="supplier-details-box-alignment">
                        <img src={APImg2} alt="APImg2" />
                      </div>
                      <h6>Advertisesshoot</h6>
                    </div>
                    <div className="supplier-grid-item-alignment">
                      <div className="supplier-details-box-alignment">
                        <img src={APImg3} alt="APImg3" />
                      </div>
                      <h6>Marketing Team</h6>
                    </div>
                    <div className="supplier-grid-item-alignment">
                      <div className="supplier-details-box-alignment">
                        <img src={APImg4} alt="APImg4" />
                      </div>
                      <h6>Expert Opration Team</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="supplier-aaziko-apply-details-alignment">
              <div className="container">
                <div className="supplier-aaziko-apply-heading">
                  <h4>Apply Now</h4>
                </div>
                <div className="supplier-aaziko-job-form-alignment">
                  <div className="supplier-aaziko-form-top-banner">
                    <img src={FormBannerImg} alt="FormBannerImg" />
                  </div>

                  <div className="supplier-aaziko-form-input-alignment">
                    <div className="supplier-aaziko-form-input-first-grid-alignment">
                      <div className="supplier-aaziko-form-input">
                        <div className="supplier-aaziko-form-icon-alignment">
                          <img src={CompanyIcon} alt="CompanyIcon" />
                        </div>
                        <input type="text" placeholder="Company Name" value={companyName} onChange={(e)=>setCompanyName(e.target.value)} />
                      </div>
                      <div className="supplier-aaziko-form-input">
                        <div className="supplier-aaziko-form-icon-alignment">
                          <img src={PhoneIcon} alt="PhoneIcon" />
                        </div>
                        <input type="text" placeholder="Email Adress" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                      </div>
                      <div className="supplier-aaziko-form-input">
                        <div className="supplier-aaziko-form-icon-alignment">
                          <img src={CompanyIcon} alt="CompanyIcon" />
                        </div>
                        <input type="text" placeholder="DPIIT Certificate Number" value={certificateNo} onChange={(e)=>setCertificateNo(e.target.value)}/>
                      </div>
                    </div>
                    <div className="supplier-product-textarea-section">
                      <textarea placeholder="What is your Unique Products " value={products} onChange={(e)=>setProducts(e.target.value)}></textarea>
                    </div>
                    <div className="supplier-aaziko-form-button-alignment">
                      <button onClick={handleSubmit}>SUBMIT</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="supplier-collaboration-associate-with-alignment">
            <h6>Associate With</h6>

            <div className="supplier-collaboration-associate-with-details">
              <div className="container">
                <div className="supplier-collaboration-associate-with-all-details">
                  <div className="supplier-collaboration-associate-with-grid-item ">
                    <img src={PartnerImage} />
                    <div className="top-angle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <line x1="1" y1="1.51562" x2="26" y2="1.51562" stroke="#F58220" stroke-width="2" />
                        <line x1="1.51562" y1="26" x2="1.51562" y2="1" stroke="#F58220" stroke-width="2" />
                      </svg>
                    </div>

                    <div className="bottom-angle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <line x1="25" y1="24.4844" x2="-8.74228e-08" y2="24.4844" stroke="#F58220" stroke-width="2" />
                        <line x1="24.4844" y1="4.37114e-08" x2="24.4844" y2="25" stroke="#F58220" stroke-width="2" />
                      </svg>
                    </div>
                  </div>

                  <div className="supplier-collaboration-associate-with-grid-item ">
                    <img src={PartnerImage2} />
                    <div className="top-angle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <line x1="1" y1="1.51562" x2="26" y2="1.51562" stroke="#F58220" stroke-width="2" />
                        <line x1="1.51562" y1="26" x2="1.51562" y2="1" stroke="#F58220" stroke-width="2" />
                      </svg>
                    </div>

                    <div className="bottom-angle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <line x1="25" y1="24.4844" x2="-8.74228e-08" y2="24.4844" stroke="#F58220" stroke-width="2" />
                        <line x1="24.4844" y1="4.37114e-08" x2="24.4844" y2="25" stroke="#F58220" stroke-width="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="supplier-collaboration-associate-with-grid-item ">
                    <img src={PartnerImage3} />
                    <div className="top-angle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <line x1="1" y1="1.51562" x2="26" y2="1.51562" stroke="#F58220" stroke-width="2" />
                        <line x1="1.51562" y1="26" x2="1.51562" y2="1" stroke="#F58220" stroke-width="2" />
                      </svg>
                    </div>

                    <div className="bottom-angle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <line x1="25" y1="24.4844" x2="-8.74228e-08" y2="24.4844" stroke="#F58220" stroke-width="2" />
                        <line x1="24.4844" y1="4.37114e-08" x2="24.4844" y2="25" stroke="#F58220" stroke-width="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="supplier-collaboration-associate-with-grid-item ">
                    <img src={PartnerImage4} />
                    <div className="top-angle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <line x1="1" y1="1.51562" x2="26" y2="1.51562" stroke="#F58220" stroke-width="2" />
                        <line x1="1.51562" y1="26" x2="1.51562" y2="1" stroke="#F58220" stroke-width="2" />
                      </svg>
                    </div>

                    <div className="bottom-angle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <line x1="25" y1="24.4844" x2="-8.74228e-08" y2="24.4844" stroke="#F58220" stroke-width="2" />
                        <line x1="24.4844" y1="4.37114e-08" x2="24.4844" y2="25" stroke="#F58220" stroke-width="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="supplier-collaboration-get-started-section">
            <div className="container">
              <div className="supplier-collaboration-get-started-details">
                <h6>How to get Started </h6>

                <div className="supplier-collaborate-get-details">
                  <div className="supplier-collaborate-child-details">
                    <div>
                      <img src={HGSImg1} alt="HGSImg2" />
                    </div>
                    <p>Update Products & Company</p>
                  </div>
                  <div className="supplier-collaborate-child-details">
                    <div>
                      <img src={HGSImg2} alt="HGSImg2" />
                    </div>
                    <p>Then Everythink Done By Aaziko</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      );
    }
