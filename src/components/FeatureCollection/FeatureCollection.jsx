import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./FeatureCollection.css";

const FeatureCollection = () => {
  const features = [
    {
      title: "Feature 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://example.com/feature1.jpg",
    },
    {
      title: "Feature 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://example.com/feature2.jpg",
    },
    {
      title: "Feature 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "https://example.com/feature3.jpg",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Feature Collection</h2>
      <Row>
        {features.map((feature, index) => (
          <Col key={index} md={4} sm={6} className="mb-4">
            <Card className="animated-block">
              <div className="animated-block-inner">
                <Card.Img variant="top" src={feature.image} />
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeatureCollection;
