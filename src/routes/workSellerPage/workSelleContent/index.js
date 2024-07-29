import React, { useState } from "react";
import "./workSelleContent.scss";

import { ApiPost } from "../../../helpers/API/ApiData";
import "react-phone-number-input/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function WorkSelleContent() {
  const [phoneInput, setphoneInput] = useState("");
  const [showProductInquiry, setProductInquiry] = useState(false);
  const [errors, setErrors] = useState("");
  const [inputValue, setInputValue] = useState({});
  const [selectedphoto, setSelectedPhoto] = useState([]);

  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

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

  return (
    <div className="container">
      <ToastContainer />
      <a
          href={`https://vendors.aaziko.com/`}
          target="_black"
        >
          <div className="fill-button">
            <button>Become Verified Seller</button>
          </div>
        </a>
      <div className="work-seller-all-content-alignment">
        <div className="grid">
          <div className="grid-items">
            <p>
              We Make Sure That Every Manufacture Now Can Sale Their Product
              World Wide. That 2 With 100% Advance Money.
            </p>
          </div>
          <div className="grid-items">
            <div className="video-text-style">
              <iframe
                width="100%"
                src="https://www.youtube.com/embed/2pFBZDUo1pk"
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
                src="https://www.youtube.com/embed/xBvULpUkEYI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="grid-items">
            <p>
              Manufacture Share Their Product And Company Details To Us. And
              Start Getting Bulk Orders From Around The World.
            </p>
          </div>
        </div>
        <div className="grid">
          <div className="grid-items">
            <p>
              We Tack Care Of Every Thing Like Talking With Buyer, All The
              Paperwork, Payments, Logistics, Customs Etc,
            </p>
          </div>
          <div className="grid-items">
            <div className="video-text-style">
              <iframe
                width="100%"
                src="https://www.youtube.com/embed/mGylO_Zvaak"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-text-style-all-content-alignment">
        <div className="text-style">
          <p>Get Bulk Order’s From Around The World</p>
          <span>
            Manufacturer Just Need To Share There Product Detiles And We Find
            Buyers For There Product. That Too With
          </span>
        </div>
        <div className="text-style">
          <p>Logistics</p>
          <span>
            We Pick Goods From Manufactere Wearhoce So They Don’t Need To Bother
            Connecting And Getting Quote from Fright Forwaders.
          </span>
        </div>
        <div className="text-style">
          <p>Customs And Paperwork</p>
          <span>
            Our Expert Team do all necessary paperwork to make customs clearance
            smooth and seamless.
          </span>
        </div>
        <div className="text-style">
          <p>100% Payment Assurance</p>
          <span>
            Manufacture Get The Payment Without Cutting Any Bank Charge Or
            Currency Exchange Fee From Bank.
          </span>
          <ul>
            <li>Get a risk free international trade</li>
            <li>
              We make export easy transparent and trustworthy for everyone.
            </li>
            <li>Get support in market research from our expert team.</li>
            <li>We protect you and your money</li>
          </ul>
        </div>{" "}
        
      </div>
    </div>
  );
}
