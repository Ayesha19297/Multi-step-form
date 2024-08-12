import React from "react";
import './steps.css';
import Buttons from "../Buttons";

const Step1 = ({ formData, errors, handleChange, nextStep }) => {
    const handleNext = e => {
        e.preventDefault();
        if (validateForm()) {
          nextStep();
        } else {
          alert('Please fill all the fields');
        }
      };
      const validateForm = () => {
        return (
          formData.name.trim() !== '' &&
          /^\S+@\S+\.\S+$/.test(formData.email) &&
          /^\d{10}$/.test(formData.phone)
        );
      };
  return (
    <div className="main">
        <h2>Step 1: Personal Information</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          value={formData.name}
          onChange={handleChange('name')}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange('email')}
        />
        {!/^\S+@\S+\.\S+$/.test(formData.email) && formData.email && (
          <small className="text-danger">Please enter a valid email address.</small>
        )}
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input
          type="text"
          className="form-control"
          value={formData.phone}
          onChange={handleChange('phone')}
        />
        {!/^\d{10}$/.test(formData.phone) && formData.phone && (
          <small className="text-danger">Phone number must be 10 digits.</small>
        )}
      </div>
        <Buttons step={1} handleNext={handleNext} />
    </div>
  );
};

export default Step1;