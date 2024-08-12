import Buttons from "../Buttons";
import "./steps.css";
import React from "react";

const Step3 = ({formData, prevStep , handleFinish}) => {
//   const handleFinish = (e) => {
//     e.preventDefault();
//     setTimeout(() => {
//       alert("Form submitted successfully");
//       localStorage.removeItem("formData");
//     }, 1000);
//   };

  return (
    <div>
      <h2>Confirm the details:</h2>
      <hr />
      <div className="display">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Address Line 1:</strong> {formData.address1}</p>
        <p><strong>Address Line 2:</strong> {formData.address2}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>State:</strong> {formData.state}</p>
        <p><strong>Zip Code:</strong> {formData.zipcode}</p>
      </div>
      <div>
        <Buttons step={3} handlePrev={prevStep} handleFinish={handleFinish} />
      </div>
    </div>
  );
};

export default Step3;
