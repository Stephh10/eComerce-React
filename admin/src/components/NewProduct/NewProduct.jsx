import React, { useState } from "react";
import "./NewProduct.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";

export default function NewProduct() {
  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const formData = Object.fromEntries(fd.entries());
    console.log(formData);
    setShow(true);
  }

  return (
    <div className="newProduct">
      <h2>Create Product</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Product Name</Form.Label>
            <Form.Control required type="text" name="name" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Category</Form.Label>
            <Form.Control required type="text" name="category" />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Subcategory</Form.Label>
            <Form.Control required type="text" name="subcategory" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Old Price</Form.Label>
            <Form.Control required type="number" name="old_price" />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>New Price</Form.Label>
            <Form.Control required type="number" name="new_price" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          {/* <Form.Group as={Col} md="4">
            <Form.Label>Image</Form.Label>
            <Form.Control required type="file" name="image" />
          </Form.Group> */}
        </Row>
        <Button type="submit">Confirm</Button>
      </Form>

      <Modal show={show} style={{ marginTop: "40px" }}>
        <Modal.Header closeButton>
          <Modal.Title>Product added</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={() => setShow(false)} variant="primary">
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
