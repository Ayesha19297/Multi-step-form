import React, { useState, useEffect } from "react";
import "./form.css";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData")) || {};
    setFormData({ ...formData, ...savedData });
  }, []);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    const value = e.target.value;
    const updatedFormData = { ...formData, [input]: value };
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };

  const handleBlur = (input) => (e) => {
    const trimmedValue = e.target.value.trim(); // Trim on blur
    setFormData({ ...formData, [input]: trimmedValue });
  };

  const handleFinish = (e) => {
    e.preventDefault();
    alert("Form submitted successfully");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: "",
    });
    setStep(1);
    localStorage.removeItem("formData");
  };

  const renderStepsIndicator = () => {
    const steps = ["personal info", "Address info", "Confirmation"];
    return (
      <>
        <h3>Fill in the details given below</h3>
        <div className="steps-indicator">
          {steps.map((title, index) => (
            <div
              key={index}
              className={`step-item ${index + 1 === step ? "active" : ""}`}
            >
              <span className="step-number">{index + 1}</span>
              <span className="step-title">{title}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="multi-step-form">
      {renderStepsIndicator()}

      <div className="form-content">
        {step === 1 && (
          <Step1
            formData={formData}
            handleChange={handleChange}
            handleBlur={handleBlur}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <Step2
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 3 && (
          <Step3
            formData={formData}
            prevStep={prevStep}
            handleFinish={handleFinish}
          />
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
