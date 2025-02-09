import React, { useRef } from "react";

const Input = ({ labelName, isMandatory, inputType, placeholder, config, getter, setter, error, errorMessage }) => {
  const dateInputRef = useRef(null);

  return (
    <div className="input-component-section">
      <div className="input-section">
        <label className="input-label">
          {labelName}
          {isMandatory && <span className="label-mandatory"> *</span>}
        </label>
        {["text", "email", "number"].includes(inputType) && (
          <div className="input-field">
            <input type={inputType} value={getter} placeholder={placeholder} onChange={(e) => setter(e.target.value)} />
            {error && <span className="error-message">{errorMessage}</span>}
          </div>
        )}
        {inputType === "select" && (
          <div className="input-field-select">
            <select className="select" value={getter} placeholder={placeholder} onChange={(e) => setter(e.target.value)}>
              {config?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {error && <span className="error-message">{errorMessage}</span>}
          </div>
        )}
        {inputType === "date" && (
          <div className="date-input-container input-field" style={{ position: "relative" }}>
            <input type="text" value={getter} placeholder={placeholder} className="date" readOnly onClick={() => dateInputRef.current.showPicker()} />
            <input type="date" ref={dateInputRef} style={{ position: "absolute", opacity: 0, left: "0%", width: "80%", top: "10%", pointerEvents: "none" }} onChange={(e) => setter(e.target.value)} />
            {error && <span className="error-message">{errorMessage}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
