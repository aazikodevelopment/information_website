import React, { useState } from "react";
import "./howWeWorkContent.scss";
import { ApiPost } from "../../../helpers/API/ApiData";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HowWeWorkContent() {
  const [phoneInput, setphoneInput] = useState("");
  const [showProductInquiry, setProductInquiry] = useState(false);
  const [showHowWork, setHowWork] = useState(false);
  const [inputValue, setInputValue] = useState({});
  const [errors, setErrors] = useState("");
  const [selectedphoto, setSelectedPhoto] = useState([]);
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  function onlyNumberKey(evt) {
    const ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
      evt.preventDefault();
    }
  }
  const handleMultipleImagesUpload = async (e) => {
    const filesData = e.target.files;
    const data = new FormData();
    for (const i in filesData) {
      const element = filesData[i];
      data.append("image", element);
    }
    await ApiPost("awsImages/image-upload-buyer", data)
      .then((res) => {
        if (res?.status) {
          const dataImage = selectedphoto.concat(res?.data?.imageUrl);
          setSelectedPhoto([...dataImage]);
        }
      })
      .catch((err) => {
        // toast.error(err?.response?.data?.message);
      });
  };
  const validationform = () => {
    let formIsValid = true;
    const errors = {};
    if (inputValue && !inputValue?.Product) {
      formIsValid = false;
      errors["Product"] = "Product required";
    }
    if (inputValue && !inputValue?.description) {
      formIsValid = false;
      errors["description"] = "Description required";
    }
    if (inputValue && !inputValue?.unit) {
      formIsValid = false;
      errors["unit"] = "Unit required";
    }

    if (
      !inputValue?.email?.trim() ||
      inputValue?.email === "" ||
      regexEmail?.test(inputValue?.email) === false
    ) {
      formIsValid = false;
      errors["email"] = "Email required";
    }

    if (selectedphoto?.length === 0) {
      formIsValid = false;
      errors["images"] = "Select Image";
    }
    if (phoneInput === "") {
      formIsValid = false;
      errors["phoneInput"] = "Phone required";
    }

    setErrors(errors);
    return formIsValid;
  };
  const handleAfterSubmitForm = (e) => {
    if (validationform()) {
      const PhotoDatas = selectedphoto?.map((ImageURL, Index) => {
        return {
          vPhotoFilePath: ImageURL,
          iShortOrder: Index,
          bActive: true,
        };
      });

      const data = {
        Product: inputValue?.Product,
        ProductDescription: inputValue?.description,
        QuantityAndUnit: inputValue?.unit,
        ProductPhotos: PhotoDatas?.[0]?.vPhotoFilePath,
        Email: inputValue?.email,
        Phone: inputValue?.phone,
      };
      ApiPost("guest-product-inquiry/create", data)
        .then((res) => {
          setProductInquiry(false);

          setSelectedPhoto([]);
          setphoneInput("");
          setInputValue({});
          toast.success("Form Submitted Successfully");
        })
        .catch((err) => {
          toast.error("Something went wrong, please try again!!");
        });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="container">
        <div className="all-grid-content-alignment">
          <div className="grid">
            <div className="grid-items">
              <p>Share Your Requirements</p>
              <span>
                Buyer Just Share As There Requirements. And We Find Best Deal
                From Our 200 Thousand Manufacture 
              </span>
            </div>
            <div className="grid-items">
              <div className="video-text-style">
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/3yXsOzhlh9M"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="video-text-style">
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/X_PORrCbpZY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="grid-items">
              <p>Verification</p>
              <span>
                We assure global buyers that their purchase is legitimate and in
                safe hands all the time.
              </span>
            </div>
          </div>
          <div className="grid">
            <div className="grid-items">
              <p>Manufacturing</p>
              <span>
                After finalizing products by buyers, buyers need to fill the
                detailed order form. And the seller will give confirmation, and
                then the seller will start manufacturing. And buyers will get a
                daily update through photos and videos.
              </span>
            </div>
            <div className="grid-items">
              <div className="video-text-style">
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/-as7QTYkgt4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="video-text-style">
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/K1_xwtglwVQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="grid-items">
              <p>Inspections</p>
              <span>
                Once manufacturing is complete, our expert team will go and
                check goods and do lab testing if require and send the full
                inspection report to buyers.
              </span>
            </div>
          </div>
          <div className="grid">
            <div className="grid-items">
              <p>Delivery</p>
              <span>
                We have robust logistics network so you can get your goods at
                the best possible price and we work on all incoterms.
              </span>
            </div>
            <div className="grid-items">
              <div className="video-text-style">
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/Xg0jF5CpXDU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="video-text-style">
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/qMVElmOsG8M"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="grid-items">
              <p>Customs</p>
              <span>
                We do all necessary paperwork to make customs clearance smooth
                and seamless. We do our best to utilize government trade
                agreements to save your money on duties.
              </span>
            </div>
          </div>
          <div className="grid">
            <div className="grid-items">
              <p>Payment</p>
              <span>
                Your payment is held by Aaziko.com until goods will deliver to
                the buyers’ warehouse.
              </span>
            </div>
            <div className="grid-items">
              <div className="video-text-style">
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/7w8dKn-YQ3c"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="video-text-style">
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/ZLgCpARMWyU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="grid-items">
              <p>Refund Policy</p>
              <span>
                if anything goes wrong and did not fulfil your requirement then
                we are fully responsible to repay in full
              </span>
            </div>
          </div>
          <div className="fill-button">
            <button onClick={() => setProductInquiry(true)}>
              Place Your Inquiry
            </button>
          </div>
        </div>
      </div>

      {showProductInquiry && (
        <div className="product-inquiry-modal">   
          <div className="modal-wrapper">
            <div className="product-inquiry-modal-box">
              <div className="product-inquiry-details">
                <div className="product-heading">
                  <h2>How We Work For Buyer</h2>
                </div>
                <div
                  className="close-alignment"
                  onClick={(e) => {
                    setProductInquiry(false);
                    setphoneInput("");
                    setInputValue({});
                    setSelectedPhoto([]);
                    setErrors("");
                  }}
                > 
                  <svg viewBox="0 0 1792 1792"> 
                    <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"></path>
                  </svg>
                </div>
                <div className="product-details-form-section">
                  {/* Product */}
                  <div className="input">
                    <input
                      type="text"
                      name="Product"
                      placeholder="Product *"
                      onChange={(e) => handleOnChange(e)}
                    />
                    <span
                      style={{ color: "red", top: "5px", fontSize: "12px" }}
                    >
                      {errors["Product"]}
                    </span>
                  </div>
                  {/* description */}
                  <div className="input">
                    <textarea
                      type="text"
                      name="description"
                      placeholder="Product Description"
                      onChange={(e) => handleOnChange(e)}
                    ></textarea>
                    <span
                      style={{ color: "red", top: "5px", fontSize: "12px" }}
                    >
                      {errors["description"]}
                    </span>
                  </div>
                  {/* unit */}
                  <div className="input">
                    <input
                      type="text"
                      placeholder="Quantity And Unit *"
                      name="unit"
                      onChange={(e) => handleOnChange(e)}
                    />
                    <span
                      style={{ color: "red", top: "5px", fontSize: "12px" }}
                    >
                      {errors["unit"]}
                    </span>
                  </div>

                  {/* images */}
                  <div className="product-img-section">
                    <p>Product Photos</p>
                    <div className="photo-upload-img-section">
                      <input
                        type="file"
                        name="images"
                        onChange={(e) => handleMultipleImagesUpload(e)}
                        multiple
                      />
                    </div>
                    <span
                      style={{ color: "red", top: "5px", fontSize: "12px" }}
                    >
                      {errors["images"]}
                    </span>
                    {/* {selectedphoto && selectedphoto?.length > 0 ? (
                      <div>
                        <p style={{ color: "rgb(96 96 96 / 51%)" }}>
                          {selectedphoto?.length} Photo selected.
                        </p>
                      </div>
                    ) : (
                      <p style={{ color: "rgb(96 96 96 / 51%)" }}>
                        Select photo
                      </p>
                    )} */}
                  </div>
                  <div className="input">
                    <input
                      type="text"
                      placeholder="Email Address *"
                      name="email"
                      onChange={(e) => handleOnChange(e)}
                    />
                    <span
                      style={{ color: "red", top: "5px", fontSize: "12px" }}
                    >
                      {errors["email"]}
                    </span>
                  </div>
                  {/* phoneInput */}
                  <div className="email-number-alignment">
                    <PhoneInput
                      placeholder="Enter Phone Number"
                      value={phoneInput}
                      name="phoneNo"
                      maxLength="15"
                      onChange={(e) => {
                        setphoneInput(e);
                      }}
                    />
                  </div>
                  <span style={{ color: "red", top: "5px", fontSize: "12px" }}>
                    {errors["phoneInput"]}
                  </span>
                </div>
                <div className="submit-button-section">
                  <button onClick={(e) => handleAfterSubmitForm(e)}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
