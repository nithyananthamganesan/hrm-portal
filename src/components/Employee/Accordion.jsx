import React, { useState } from "react";
import Input from "../Common/Input";

const Accordion = ({ details }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [error,setError] = useState("");

  return (
    <div className="details-of-employee">
      <div className="emp-accordion-header">
        <div className="section-title">{details.title}</div>
        <div className="accordion-icon" onClick={() => setIsOpen(!isOpen)}>
          <span>{isOpen ? "-" : "+"}</span>
        </div>
      </div>
      {isOpen && (
        <div className="employee-details">
          {details.employeeDetails.map((item, index) =>
            item.labelName === "divider" ? (
              <div key={index} className="divider"></div>
            ) : (
              <Input
                key={index}
                labelName={item?.labelName}
                inputType={item?.inputType}
                placeholder={item?.placeholder}
                isMandatory={item?.isMandatory}
                getter={item?.getter}
                setter={item?.setter}
                config={item?.config || []}
                errorMessage={item?.errorMessage}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;
