import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Step2 = () => {
  return (
    <>
      <h1>Address information</h1>
      <Form>
        <Form.Group className="mb-3" controlId="AddressLine1">
          <Form.Label>Address Line1</Form.Label>
          <Form.Control type="string" placeholder="Enter Address Line1" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="AddressLine2">
          <Form.Label>Address Line2</Form.Label>
          <Form.Control type="string" placeholder="Enter Address Line2" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="City">
          <Form.Label>City</Form.Label>
          <Form.Control type="string" placeholder="Enter city" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="State">
          <Form.Label>State</Form.Label>
          <Form.Control type="string" placeholder="Enter State" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Zipcode">
          <Form.Label>Zip code</Form.Label>
          <Form.Control type="string" placeholder="Enter Zip code" />
        </Form.Group>

        <Button variant="secondary" type="submit">
          Back
        </Button>

        <Button variant="primary" type="submit">
          Next
        </Button>
      </Form>
    </>
  );
};
export default Step2;
