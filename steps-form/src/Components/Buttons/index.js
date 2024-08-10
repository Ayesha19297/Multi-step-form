import React from "react";

const Buttons = ({ step, handleNext, handlePrev, handleSubmit }) => {
  return (
    <div className="d-flex justify-content-between mt-3">
      {step === 1 && (
        <button className="btn btn-secondary" disabled>
          Back
        </button>
      )}
      {step > 1 && (
        <button className="btn btn-secondary" onClick={handlePrev}>
          Back
        </button>
      )}
      {step < 3 ? (
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      ) : (
        <button className="btn btn-success" onClick={handleSubmit}>
          Finish
        </button>
      )}
    </div>
  );
};

export default Buttons;
