import React, { useState, useEffect } from "react";
import "./orderDelivery.scss";
import Watch from "../../../assets/images/watchImg.png";
import Close from "../../../assets/icons/closeIcon.svg";
import {
  ApiDelete,
  ApiPost,
  ApiPostStaticToken,
  ApiGet,
} from "../../../helpers/API/ApiData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function IssueRelatedSellerForm(props) {
  const history = useHistory();
  const { creativesupport } = props;
  const [inputValue, setinputvalue] = useState();
  const [image, setImage] = useState([]);

  const onhandleChange = (e) => {
    const { name, value } = e.target;
    setinputvalue({ ...inputValue, [name]: value });
    // setErrors({ ...errors, [name]: "" })
  };

  const handleOrderMultipleImageUpload = async (e) => {
    const filesData = e.target.files;
    const data = new FormData();
    for (const i in filesData) {
      const element = filesData[i];
      data.append("image", element);
    }
    await ApiPost("awsImages/image-upload-buyer", data)
      .then((res) => {
        if (res?.status) {
          const dataImage = image.concat(res?.data?.imageUrl);
          setImage([...dataImage]);
        }
      })
      .catch((err) => {
        toast.error(err.response?.data?.message);
      });
  };

  const removeImages = (id) => {
    const body = {
      keys: [id],
    };
    ApiDelete("awsImages/delete-image-buyer", body)
      .then((res) => {
        if (res.data.success === true) {
          toast.success("Image delete successfully");
          setImage(image.filter((data) => data !== id));
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const sendRequestData = async (e) => {
    // let formData = new FormData()
    // formData.append("documentName", documentData?.documentName);
    const formData = {
      email: inputValue?.email,
      discription: inputValue?.description,
      phone: inputValue?.phone,
      attachment: image,
      subCategory: "626badd924b65b4a30048d59",
    };

    await ApiPostStaticToken(`ticket/create`, formData)
      .then((res) => {
        toast.success("Ticket created Successfully!");
        const timer = setTimeout(() => {
          history.push("/");
        }, 1000);

        return () => clearTimeout(timer);
      })
      .catch((err) => {
        toast.error("Something Went Wrong!!");
        console.log("err", err);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="orderTicketMain-section">
        <div className="orderDelivery-section">
          <div className="issue-related-form-section">
            <div className="heading-alignment">
              <h4>{creativesupport?.vItemName}</h4>
            </div>
            <div className="notes-alignment">
              <p>Please Fill the below details to create ticket</p>
            </div>
            <div className="issue-form-section">
              <div className="form-grid">
                <div className="label-alignment">
                  <label>
                    <span>*</span> Primary email:
                  </label>
                </div>
                <div className="input-alignment">
                  <input
                    type="text"
                    placeholder="Vender@gmail.com"
                    name="email"
                    onChange={(e) => {
                      onhandleChange(e);
                    }}
                  />
                </div>
              </div>
              <div className="form-grid">
                <div className="label-alignment">
                  <label>
                    <span>*</span> Subject:
                  </label>
                </div>
                <div className="input-alignment">
                  <input
                    type="text"
                    name="subject"
                    placeholder="I have a issue related to seller tiering."
                    onChange={(e) => {
                      onhandleChange(e);
                    }}
                    value={creativesupport?.vItemName}
                  />
                </div>
              </div>
              <div className="form-grid">
                <div className="label-alignment">
                  <label>
                    <span>*</span> Description:
                  </label>
                </div>
                <div className="input-alignment">
                  <textarea
                    name="description"
                    onChange={(e) => {
                      onhandleChange(e);
                    }}
                    placeholder="Please provide yourissue with relevant details and provide as much information as possible."
                  ></textarea>
                </div>
              </div>
              <div className="form-grid">
                <div className="label-alignment">
                  <label>Attachment:</label>
                </div>
                <div className="attechment-img-section">
                  <div className="upload-img-box">
                    <span>doc, Docx, Xls, pDF, PNG, JPG</span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      name="orderimage"
                      onChange={(e) => handleOrderMultipleImageUpload(e)}
                    />
                  </div>

                  {/* <div className="seleted-product-alignment">
                      {image?.map((imgurl, i) => {
                        return (
                          <div key={i} className="seleted-product-img">
                            <img src={imgurl} alt="DummyWatch" />
                            <div className="close-alignment">
                              <img
                                src={Close}
                                alt="Close"
                                onClick={() => removeImages(imgurl)}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div> */}

                  {image?.map((imgurl, i) => {
                    return (
                      <div key={i} className="uploaded-img-alignment">
                        <img src={imgurl} alt="Watch" />

                        <div className="close-icon-alignment">
                          <img
                            src={Close}
                            alt="Close"
                            onClick={() => removeImages(imgurl)}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="form-grid">
                <div className="label-alignment">
                  <label>
                    <span>*</span> Phone Number:
                  </label>
                </div>
                <div className="input-alignment">
                  <input
                    type="text"
                    name="phone"
                    onChange={(e) => {
                      onhandleChange(e);
                    }}
                    placeholder="+91 5896523658"
                  />
                </div>
              </div>
            </div>

            <div className="button-alignment">
              <button onClick={(e) => sendRequestData(e)}>Send Request</button>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
