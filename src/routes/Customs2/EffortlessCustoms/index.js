import React, { useEffect, useMemo, useRef, useState } from "react";
import "./EffortlessCustoms.scss";
import AazikoLogo from "../../../assets/logo/aaziko-logo-2.svg";
import DropdownArrow from "../../../assets/icons/dropdwon-new.svg";
import axios from "axios";
import { AI_URL } from "../../../config/API/api.config";
import { toast } from "react-toastify";
import ScrapData from "./ScrapData";
import CommonDropdown from "../../../components/Common/CommonDropdown/CommonDropdown";
import ReactMarkdown from "react-markdown";
import CommonDropdownNew from "../../../components/Common/CommonDropdown/CommonDropdownNew";
export default function EffortlessCustoms() {
  const [allCountryData, setAllCountryData] = useState([]);
  const [hsCodeData, setHscodeData] = useState([]);
  const [selectedData, setSelectedData] = useState({});
  const [customData, setCustomData] = useState([]);
  const [customData2, setCustomData2] = useState("");
  const [openCustomDatatap1, setOpenCustomDatatap1] = useState(false);
  const [openCustomDatatap2, setOpenCustomDatatap2] = useState(true);
  const [loader, setLoader] = useState(false);
  const [loader2, setLoader2] = useState(false);
  const [activeButton, setActiveButton] = useState("custom1");
  const [errors, setErrors] = useState({});
  const [dropdownStates, setDropdownStates] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
  });
  const dropdownRefs = {
    dropdown1: useRef(null),
    dropdown2: useRef(null),
    dropdown3: useRef(null),
    dropdown4: useRef(null),
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.keys(dropdownRefs).forEach((dropdown) => {
        if (dropdownRefs[dropdown].current && !dropdownRefs[dropdown].current.contains(event.target)) {
          setDropdownStates((prevState) => ({
            ...prevState,
            [dropdown]: false,
          }));
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRefs]);

  useEffect(() => {
    getAllCountryData();
  }, []);

  useEffect(() => {
    if (Object.keys(selectedData).length !== 0) {
      getAllHScode(null);
    }
  }, [selectedData?.destination_country]);

  const toggleDropdown = (dropdownId) => {
    setDropdownStates((prevState) => {
      const updatedDropdownStates = {};
      Object.keys(prevState).forEach((dropdown) => {
        if (dropdown === dropdownId) {
          updatedDropdownStates[dropdown] = !prevState[dropdown];
        } else {
          updatedDropdownStates[dropdown] = false;
        }
      });
      return updatedDropdownStates;
    });
  };
  const getAllCountryData = () => {
    axios
      .post(`${AI_URL}/website-scraper/country`)
      .then((response) => {
        let temp = [];
        temp = response.data.data?.Countries?.map((item) => {
          return {
            label: item,
            value: item,
          };
        });
        setAllCountryData(temp);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };
  const getAllHScode = (hs_code) => {
    let body = {
      destination_country: selectedData?.destination_country,
      export_country: "India",
      hs_code: hs_code || "",
    };
    axios
      .post(`${AI_URL}/website-scraper/get-all-hs-code?page=1&limit=20`, body)
      .then((response) => {
        let temp = [];
        temp = response?.data?.data?.["Hs Code Details"]?.map((item) => {
          return {
            label: item?.["Hs Code"] + "-" + item?.["Hs Code Description"],
            value: item?.["Hs Code"],
          };
        });
        setHscodeData(temp);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };

  const RequirementData = [
    { value: "Importing Country", label: "Importing Country" },
    { value: "Exporting Country", label: "Exporting Country" },
  ];

  const handleSearch = () => {
    setLoader(true);
    const body = {
      destination_country: selectedData?.destination_country,
      export_country: "India",
      hs_code: selectedData?.hs_code,
    };
    if (body.destination_country && body.hs_code) {
      axios
        .post(`${AI_URL}/website-scraper/get-my-all`, body)
        .then((res) => {
          setLoader(false);
          setCustomData(res?.data?.data?.Response?.[0]);
          if (openCustomDatatap2 === true) {
            setOpenCustomDatatap2(true);
          } else {
            setOpenCustomDatatap1(true);
          }
        })
        .catch((error) => {
          setLoader(false);
          toast.error(error?.response?.data?.message);
        });
    }
  };

  const customeEsayData = () => {
    setLoader2(true);
    const body = {
      destination_country: selectedData?.destination_country,
      export_country: "India",
      hs_code: selectedData?.hs_code,
    };
    if (body.destination_country && body.hs_code) {
      axios
        .post(`${AI_URL}/ai-writing/aaziko-custom-ai-generation`, body)
        .then((res) => {
          setCustomData2(res?.data?.data?.Response);
          console.log(res);
          setLoader2(false);
        })
        .catch((error) => {
          setLoader2(false);
          toast.error(error?.response?.data?.message);
        });
    }
  };

  const validation = () => {
    let formIsValid = true;
    let errors = {};
    if (!selectedData?.destination_country) {
      formIsValid = false;
      errors["DestinationCountry"] = "This field is required";
    }
    if (selectedData?.destination_country) {
      if (!selectedData?.hs_code) {
        formIsValid = false;
        errors["hs_code"] = "This field is required";
      }
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleClickTap1 = () => {
    setOpenCustomDatatap1(true);
    setOpenCustomDatatap2(false);
    setActiveButton("custom1");
  };

  const handleClickTap2 = () => {
    if (!customData2) {
      customeEsayData();
    }
    setOpenCustomDatatap2(true);
    setOpenCustomDatatap1(false);
    setActiveButton("custom2");
  };
 
  return (
    <div>
      <div className="effortess-customs-section">
        <div className="effortess-customs-header">
          <h4>Effortless Customs with</h4>
          <div>
            <img src={AazikoLogo} alt="AazikoLogo" />
          </div>
        </div>
        <div className="effortess-customs-body-alignment">
          <div className="effortess-customs-body-box">
            <div className="all-details-all-flex-aligment">
              <CommonDropdown
                label="Requirement of"
                selectedValue={selectedData?.Requirment ?? "Select"}
                options={RequirementData}
                onOptionSelect={(value) =>
                  setSelectedData({
                    ...selectedData,
                    ["Requirment"]: value,
                  })
                }
              />

              <div>
                <CommonDropdown
                  label="Destination Country"
                  selectedValue={selectedData?.destination_country ?? "Select country"}
                  options={allCountryData}
                  onOptionSelect={(value) => {
                    setSelectedData({
                      ...selectedData,
                      ["destination_country"]: value,
                    });
                    setErrors("");
                  }}
                />
                <span className="validationError">{errors?.DestinationCountry}</span>
              </div>

              <CommonDropdown label="Exporting Country" selectedValue={selectedData?.exportring_country ?? "India"} options={allCountryData} onOptionSelect={(value) => {
                setSelectedData({
                  ...selectedData,
                  ["exportring_country"]: value,
                });
                setErrors("");
              }} />

              <div>
                <CommonDropdownNew
                  label="Product"
                  selectedValue={selectedData?.hs_code ?? "Search product by HS6 code or name"}
                  options={hsCodeData}
                  onOptionSelect={(value) => {
                    setSelectedData({
                      ...selectedData,
                      ["hs_code"]: value,
                    });
                    setErrors("");
                  }}
                  disabled={selectedData?.destination_country ? false : true}
                  getAllHScode={getAllHScode}
                />
                <span className="validationError">{errors?.hs_code}</span>
              </div>

              <div className="search-button-alignment">
                <button
                  onClick={() => {
                    if (validation()) {
                      if (openCustomDatatap2 === true) {
                        customeEsayData();
                      } else {
                        handleSearch();
                      }
                    }
                  }}
                >
                  Search
                </button>
              </div>
            </div>
            {selectedData?.hs_code && (
              <div className="selectedDataSection">
                <div className="selectedDataContainer">
                  <h4 className="selectedDataTitle">Selected Product Details</h4>
                  <div className="selectedDataItem">
                    <label>HS Code:</label>
                    <p>{selectedData.hs_code}</p>
                  </div>
                  <div className="selectedDataItem">
                    <label>Description:</label>
                    <p>{hsCodeData.find(option => option.value === selectedData.hs_code)?.label}</p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
        <ScrapData
          customData={customData}
          customData2={customData2}
          loader={loader}
          loader2={loader2}
          selectedData={selectedData}
          openCustomDatatap2={openCustomDatatap2}
          openCustomDatatap1={openCustomDatatap1}
          handleClickTap1={handleClickTap1}
          handleClickTap2={handleClickTap2}
          activeButton={activeButton}
        />
      </div>
    </div>
  );
}
