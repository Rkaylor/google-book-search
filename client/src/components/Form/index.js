import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import  InputGroup  from "react-bootstrap/InputGroup";
import { FormGroup } from "react-bootstrap";

function formGroup({ q, handleInputChange, handleFormSubmit }) {
  return (
    // YOUR CODE HERE
    <form>
    <InputGroup
    onChange={handleInputChange}
    name="title"
    placeholder="Title (required)"
  />
  <InputGroup
    onChange={handleInputChange}
    name="author"
    placeholder="Author (required)"
  />
  <Form.Control
    onChange={handleInputChange}
    name="synopsis"
    placeholder="Synopsis (Optional)"
  />
  <Button
    // disabled={!(formObject.author && formObject.title)}
    onClick={handleFormSubmit}
  >
    Submit Book
  </Button>
    </form>
  );
}

export default formGroup;
