import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./AddToy.css";
import Swal from "sweetalert2";

const AddToy = () => {
  const categories = [
    {
      name: "Educational and Learning",
      subcategories: [
        "science kits ",
        "math learning toys",
        "engineering kits3",
      ],
    },
    {
      name: "Action figure toys",
      subcategories: ["marvel ", " avengers", "star wars"],
    },
    {
      name: "Animal toys",
      subcategories: ["teddy bear", " horse", " dinosaur"],
    },
    {
      name: "Disney dolls",
      subcategories: [
        "Disney princes ",
        "frozen dolls",
        "animation characters",
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [sellerName, setSellerName] = useState("");

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (e) => {
    const subcategory = e.target.value;
    setSelectedSubcategory(subcategory);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const pictureUrl = form.pictureUrl.value;
    const price = form.price.value;
    const description = form.description.value;
    const ratting = form.ratting.value;
    const quantity = form.quantity.value;

    const newToy = {
      pictureUrl,
      name,
      sellerName,
      category: selectedCategory,
      subcategory: selectedSubcategory,
      price,
      description,
      ratting,
      quantity,
    };

    // send data to the server
    fetch("https://assignment-11-server-side-weld.vercel.app/addedtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });

    // Clear form fields
    form.reset();
    setSelectedCategory("");
    setSelectedSubcategory("");
    setSellerName("");
  };

  const subcategories = selectedCategory
    ? categories.find((category) => category.name === selectedCategory)
        ?.subcategories
    : [];

  return (
    <div className="add-toy-bg">
      <Container>
        <h1 className="text-center mt-4 mb-5">Add A Toy</h1>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="sellerName">
                <Form.Label>Seller Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter seller name"
                  value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter toy name"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="pictureUrl">
                <Form.Label>Picture URL of the Toy</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter picture URL"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="ratting">
                <Form.Label>Product Ratting</Form.Label>
                <Form.Select required>
                  <option value="">Select product ratting</option>
                  <option value="No Ratting">No Ratting</option>
                  <option value="1 star">1 star</option>
                  <option value="2 star">2 star</option>
                  <option value="3 star">3 star</option>
                  <option value="4 star">4 star</option>
                  <option value="5 star">5 star</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="subcategory">
                <Form.Label>Subcategory</Form.Label>
                <Form.Select
                  value={selectedSubcategory}
                  onChange={handleSubcategoryChange}
                  disabled={!selectedCategory}
                  required
                >
                  <option value="">Select a subcategory</option>
                  {subcategories.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter toy price"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Available Quantity"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="description">
            <Form.Label>Detail Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter toy description"
              rows={3}
              required
            />
          </Form.Group>

          <Row className="justify-content-center text-center mt-5">
            <Col md={6}>
              <Button
                className="glow-on-hover"
                variant="primary"
                type="submit"
                block
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default AddToy;
