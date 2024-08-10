import React from "react";
import Form from "react-bootstrap/Form";
import "./steps.css";
import Buttons from "../Buttons";

const Step2 = ({ formData, errors, handleChange, nextStep, prevStep }) => {
    const handleNext = e => {
        e.preventDefault();
        if (formData.address1 && formData.city && formData.state && formData.zip) {
          nextStep();
        } else {
          alert('Please fill in all fields');
        }
      };
  return (
    <div className="main">
      <h1>Address Information</h1>
      <Form className="form">
        <Form.Group className="mb-3" controlId="AddressLine1">
          <Form.Label>Address Line 1:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address Line1"
            value={formData.address1}
            onChange={(e) => handleChange("address1", e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="AddressLine2">
          <Form.Label>Address Line 2:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address Line2"
            value={formData.address2}
            onChange={(e) => handleChange("address2", e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="City">
          <Form.Label>City:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter City"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="State">
          <Form.Label>State:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter State"
            value={formData.state}
            onChange={(e) => handleChange("state", e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Zipcode">
          <Form.Label>Zip code:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Zip code"
            value={formData.zip}
            onChange={(e) => handleChange("zip", e.target.value)}
           />
        </Form.Group>
        <Buttons step={2} handleNext={handleNext} handlePrev={prevStep} />
      </Form>
    </div>
  );
};
export default Step2;
