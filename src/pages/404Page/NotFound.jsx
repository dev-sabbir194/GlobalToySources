import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <div className="text-center">
        <img
          src="https://drive.google.com/uc?id=1W4FDBOBQotK6Wmdqg7tE2EBSjOG7dhaT"
          alt=""
        />
      </div>
      <div className="text-center mt-4">
        <button className="btn mb-3 go-home">
          <Link to="/home" id="link-go">
            GO TO HOME
          </Link>
        </button>
      </div>
    </Container>
  );
};

export default NotFound;
