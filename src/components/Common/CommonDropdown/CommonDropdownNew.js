// ... (your imports remain the same)
import React, { useEffect, useRef, useState } from "react";
import DropdownArrow from "../../../assets/icons/dropdwon-new.svg";
import "../../../routes/CustomsEasy/EffortlessCustoms/EffortlessCustomsNew.scss";
import ReactMarkdown from "react-markdown";
import useDebounce from "../../hooks";

function CommonDropdownNew({
  label,
  selectedValue,
  options,
  onOptionSelect,
  disabled,
  getAllHScode,
}) {
  const [isOpen, setIsOpen] = useState(false); // Dropdown Open close
  const [searchQuery, setSearchQuery] = useState(""); // Country & HSCode Search
  const [selectedOption, setSelectedOption] = useState({ value: null, label: null }); // Selected option
  const dropdownRef = useRef(null);
  const debounced = useDebounce(searchQuery, '700')
  useEffect(() => {
    if (label === "Product" && searchQuery !== "") {
      console.log("called")
      getAllHScode(searchQuery);
    }
  }, [debounced])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Determine whether to filter options based on the label
  const handleSearchChange = (event) => {
    event.stopPropagation();
    setSearchQuery(event.target.value);
  };

  // Opetions Data
  const filteredOptions = searchQuery
    ? options?.filter(
      (option) =>
        option?.label &&
        searchQuery &&
        option?.label?.toLowerCase().includes(searchQuery?.toLowerCase())
    )
    : options;

  const isNoDataFound =
    label === "Product" && searchQuery && filteredOptions?.length === 0;

  // Selected Oppention
  const handleOptionSelect = (option) => {
    setSelectedOption({ value: option.value, label: option.label });
    onOptionSelect(option.value)
    setIsOpen(false);
    setSearchQuery("");
  };



  return (
    <>
      <div>
        <div className="effortess-customs-input-alignments">
          <label>{label}</label>
          <div className="effortess-customs-inout-dropdown" ref={dropdownRef}>
            <div
              className={`effortess-customs-input-box ${isOpen ? "active" : ""
                }`}
              onClick={() => !disabled && setIsOpen(!isOpen)}
            >
              <span className={`custom-span ${disabled ? "disabled" : ""}`}>
                {disabled ? selectedValue : (selectedOption.label?.length > 60 ? `${selectedOption.label?.slice(0, 60)?.trim()}...` : selectedOption?.label)}
              </span>
              <div className="dropdown-icon">
                <img src={DropdownArrow} alt="DropdownArrow" />
              </div>
              <div
                className={`effortess-customs-dropdown-box-alignment ${isOpen
                    ? "open-effortess-dropdown"
                    : "close-effortess-dropdown"
                  }`}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onClick={(e) => e.stopPropagation()}
                  className="search-input"
                />
                {isNoDataFound ? (
                  <div className="effortess-dropdoewn-name no-data-found">
                    <p>No data found</p>
                  </div>
                ) : filteredOptions?.length > 0 ? (
                  filteredOptions?.map((option, index) => (
                    <div className="effortess-dropdoewn-name" key={index}>
                      <p onClick={() => handleOptionSelect(option)}>
                        <ReactMarkdown>{option?.label}</ReactMarkdown>
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="effortess-dropdoewn-name no-data-found">
                    <p>No data found</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommonDropdownNew;
