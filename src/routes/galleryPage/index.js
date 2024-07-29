import React, { useState, useEffect } from "react";
import "./galleryPage.scss";
import GalleryImage1 from "../../assets/images/gallery.jpg";
import GalleryImage2 from "../../assets/images/gallery1.jpg";
import GalleryImage3 from "../../assets/images/gallery2.jpg";
import GalleryImage4 from "../../assets/images/gallery3.jpg";
import GalleryImage5 from "../../assets/images/gallery5.jpg";
import MoreIcon from "../../assets/icons/more-icon.svg";

import { ApiPost, ApiGet } from "../../helpers/API/ApiData";
import parse from "html-react-parser";
import SongsGallery from "./SongsGallery";
import MeetingGallery from "./MeetingGallery";
import VideoGalley from "./VideoGalley";

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const AWSLink = process.env.REACT_APP_AWSLINK + process.env.REACT_APP_PACKAGING_TYPE+'/';

  const [key, setKey] = useState("");
  const [gallerydata, setGallerydata] = useState([]);
  const [gallerySubdata, setGallerySubdata] = useState([]);
  const [subEvent, setSubEvent] = useState(false);
  const [galleryImages, setGalleryImages] = useState();
  const [popupMenu, setPopupMenu] = useState(false);
  const [GalleryTab, setGalleryTab] = useState(1);
  useEffect(() => {
    categoryParty();
  }, []);

  const categoryParty = () => {
    ApiGet(`gallery/view-gallery`)
      .then((res) => {
        setGallerydata(res?.data?.data);
        if (res?.data?.data[0]) {
          getDataByCateID(res?.data?.data[0]);
          setKey(res?.data?.data[0]);
        }
      })
      .catch((error) => {});
  };

  const getDataByCateID = (item) => {
    ApiGet(`gallery-events/view-events?galleryId=${item?._id}`)
      .then((res) => {
        setGallerySubdata(res?.data?.data);
      })
      .catch((error) => {});
  };

  const getSubEventImages = (item) => {
    ApiGet(`image-of-events/view-image-of-events?eventId=${item?._id}`)
      .then((res) => {
        setGalleryImages(res?.data?.data);
      })
      .catch((error) => {});
  };

  return (
    <>
      {/* <div className="gallery-page-contnet-banner">
        <div className="container">
          <h1>Gallery</h1>
        </div>
      </div>
      <div className="gallery-all-contnet-view-alignment">
        <div className="container">
          <div className="tab">
            {gallerydata?.map((item) => {
              return (
                <>
                  <span
                    onClick={(e) => {
                      setKey(item);
                      getDataByCateID(item);
                      setSubEvent(false);
                    }}
                    className={key === item ? "active" : null}
                  >
                    {item?.folderName}
                  </span>
                </>
              );
            })}
          </div>

          {key ? (
            subEvent === false ? (
              gallerySubdata?.length > 0 ? (
                <div className="grid" style={{ cursor: "pointer" }}>
                  {gallerySubdata?.map((itmes) => {
                    return (
                      <>
                        <div
                          className="grid-items"
                          onClick={(e) => {
                            setSubEvent(true);
                            getSubEventImages(itmes);
                          }}
                        >
                          <div className="image-style">
                            <img
                              src={AWSLink + `${itmes?.image}`}
                              alt="GalleryImage2"
                            />
                          </div>

                          <div className="cardDetails">
                            <div className="boxTitleAlignment">
                              <div>
                                <h2>{itmes?.eventName}</h2>
                              </div>
                              <div className="moreIcon">
                                <div onClick={() => setPopupMenu(!popupMenu)}>
                                  <img src={MoreIcon} alt="MoreIcon" />
                                </div>
                                <div
                                  className={
                                    popupMenu
                                      ? "popup popupShow"
                                      : "popup popupHidden"
                                  }
                                >
                                  <div className="popupDesign">
                                    <ul>
                                      <li>Edit</li>
                                      <li>Delete</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p>{itmes?.description}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              ) : (
                <p className="felxMyitem">Events not found</p>
              )
            ) : galleryImages?.length > 0 ? (
              <div className="grid" style={{ cursor: "pointer" }}>
                {galleryImages?.map((itmes) => {
                  return (
                    <>
                      <div
                        className="grid-items"
                        // onClick={(e) => {
                        //   setSubEvent(true);
                        //   getSubEventImages(itmes);
                        // }}
                      >
                        <div className="image-style">
                          {itmes?.image?.slice(0, 7) === "<iframe" ? (
                            parse(itmes?.image)
                          ) : (
                            <img
                              src={AWSLink + `${itmes?.image}`}
                              alt="GalleryImage2"
                            />
                          )}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : (
              <p className="felxMyitem">Images not found</p>
            )
          ) : null}
        </div>
      </div> */}

      <div className="gallery-page-details-alignment">
        <div className="gallery-top-heading-alignment">
          <h1>Gallery</h1>
        </div>

        <div className="gallery-tab-alignment">
          <ul>
            <li
              className={GalleryTab === 1 ? "active-tab" : ""}
              onClick={() => setGalleryTab(1)}
            >
              Songs
            </li>
            <li
              className={GalleryTab === 2 ? "active-tab" : ""}
              onClick={() => setGalleryTab(2)}
            >
              Video
            </li>
            <li
              className={GalleryTab === 3 ? "active-tab" : ""}
              onClick={() => setGalleryTab(3)}
            >
              Meeting
            </li>
          </ul>
        </div>

        <div className="gallery-all-page-details-alignment">
          {GalleryTab === 1 && <SongsGallery />}
          {GalleryTab === 2 && <VideoGalley />}
          {GalleryTab === 3 && <MeetingGallery />}
        </div>
      </div>
    </>
  );
}
