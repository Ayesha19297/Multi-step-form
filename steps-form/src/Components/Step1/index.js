import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Step1 = () => {
  return (
    <>
      <h1>Personal details</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="string" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" placeholder="Enter phone number" />
        </Form.Group>

        <Button variant="secondary" type="submit" disabled>
          Back
        </Button>

        <Button variant="primary" type="submit">
          Next
        </Button>
      </Form>
    </>
  );
};

export default Step1;
