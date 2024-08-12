import React from "react";
import './buttons.css';

const Buttons = ({ step, handleNext, handlePrev, handleFinish }) => {
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
        <button className="btn btn-success" onClick={handleFinish}>
          Finish
        </button>
      )}
    </div>
  );
};

export default Buttons;
