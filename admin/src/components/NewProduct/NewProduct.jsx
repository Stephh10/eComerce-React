import React, { useState } from "react";
import "./NewProduct.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { app } from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function NewProduct({ setPage }) {
  const [show, setShow] = useState(false);
  const storage = getStorage(app);

  async function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const formData = Object.fromEntries(fd.entries());

    const storageRef = ref(storage, formData.name);
    const uploadTask = uploadBytesResumable(storageRef, formData.image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const productData = {
            ...formData,
            category: formData.category.toLowerCase(),
            subcategory: formData.subcategory.toLowerCase(),
            image: downloadURL,
          };

          const response = await fetch("http://localhost:3000/createproduct", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
          });

          if (!response.ok) {
            toast.error("Something went wrong");
          }

          const resData = await response.json();
          console.log(resData);
          setShow(true);
          e.target.reset();
        });
      }
    );
  }

  function handleSelectProducts() {
    setShow(false);
    setPage("products");
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
            <Form.Label>Subcategory</Form.Label>
            <Form.Control required type="text" name="subcategory" />
          </Form.Group>
        </Row>
        <Row className="mb-4">
          <Form.Group as={Col} md="4">
            <Form.Label>Old Price</Form.Label>
            <Form.Control required type="number" name="old_price" />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>New Price</Form.Label>
            <Form.Control required type="number" name="new_price" />
          </Form.Group>
        </Row>

        <Form.Select
          style={{ height: "45px" }}
          aria-label="Default select example"
          className="w-25 mt-3"
          name="category"
        >
          <option value="mens">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kid</option>
        </Form.Select>

        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Image</Form.Label>
            <Form.Control
              required
              type="file"
              name="image"
              style={{ fontSize: "1rem", width: "8rem" }}
            />
          </Form.Group>
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
          <Button onClick={handleSelectProducts} variant="success">
            All Products
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
