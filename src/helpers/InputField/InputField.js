import React from "react";

const InputField = ({ value, label, name, placeholder, type, onChange }) => {
  return (
    <div className="form-group row">
      <label className="col-xl-3 col-lg-3 col-form-label">{label}</label>
      <div className="col-lg-9 col-xl-6">
        <div>
          <input
            type={type}
            value={value}
            name={name}
            className={`form-control form-control-lg form-control-solid `}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default InputField;
