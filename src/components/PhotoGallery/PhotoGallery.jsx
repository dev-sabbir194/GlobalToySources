import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PhotoGallery.css";

const photos = [
  {
    id: 1,
    image:
      "https://www.toysrus.in/media/mageplaza/bannerslider/banner/image/g/t/gtl-1200x450.jpg",
    title: "Photo 1",
  },
  {
    id: 2,
    image:
      "https://www.toysrus.in/media/mageplaza/bannerslider/banner/image/g/t/gtl-1200x450.jpg",
    title: "Photo 2",
  },
  {
    id: 3,
    image:
      "https://www.toysrus.in/media/mageplaza/bannerslider/banner/image/g/t/gtl-1200x450.jpg",
    title: "Photo 3",
  },
  {
    id: 4,
    image:
      "https://www.toysrus.in/media/mageplaza/bannerslider/banner/image/g/t/gtl-1200x450.jpg",
    title: "Photo 4",
  },
  {
    id: 5,
    image:
      "https://www.toysrus.in/media/mageplaza/bannerslider/banner/image/g/t/gtl-1200x450.jpg",
    title: "Photo 4",
  },
  {
    id: 6,
    image:
      "https://www.toysrus.in/media/mageplaza/bannerslider/banner/image/g/t/gtl-1200x450.jpg",
    title: "Photo 4",
  },
];

const PhotoGallery = () => {
  return (
    <div className="photo-gallery">
      <Container>
        <h2 className="text-center" id="photo-gallary">
          Photo Gallery
        </h2>
        <Row className="justify-content-center">
          {photos.map((photo) => (
            <Col key={photo.id} md={4} className="mb-4">
              <div className="photo-card">
                <img src={photo.image} alt={photo.title} className="photo" />
                <div className="overlay">
                  <h3 className="title">{photo.title}</h3>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PhotoGallery;
