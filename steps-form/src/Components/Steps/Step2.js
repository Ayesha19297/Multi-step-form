import React from "react";
import "./steps.css";
import Buttons from "../Buttons";

const Step2 = ({ formData, errors, handleChange, nextStep, prevStep }) => {
  const handleNext = (e) => {
    e.preventDefault();
    if (formData.address1 && formData.city && formData.state && formData.zip) {
      nextStep();
    } else {
      alert("Please fill all fields");
    }
  };
  return (
    <div className="main">
      <form>
        <h2>Step 2: Address Information</h2>
        <div className="form-group">
          <label>Address Line 1</label>
          <input
            type="text"
            className="form-control"
            value={formData.address1}
            onChange={handleChange("address1")}
          />
        </div>
        <div className="form-group">
          <label>Address Line 2</label>
          <input
            type="text"
            className="form-control"
            value={formData.address2}
            onChange={handleChange("address2")}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            value={formData.city}
            onChange={handleChange("city")}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            className="form-control"
            value={formData.state}
            onChange={handleChange("state")}
          />
        </div>
        <div className="form-group">
          <label>Zip Code</label>
          <input
            type="text"
            className="form-control"
            value={formData.zipcode}
            onChange={handleChange("zip")}
          />
        </div>
        <Buttons step={2} handleNext={handleNext} handlePrev={prevStep} />
      </form>
    </div>
  );
};
export default Step2;
