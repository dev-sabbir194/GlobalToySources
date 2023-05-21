import React, { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import app from "../../utils/firebase/firebase.init";
import "./Registration.css";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        user.updateProfile({
          displayName: name,
          photoURL: photoURL,
        });
      }
    });

    return () => unsubscribe();
  }, [auth, name, photoURL]);

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      toast.error("Password should be at least 6 characters");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const usersData = JSON.parse(localStorage.getItem("usersData")) || [];

  
      const id = Date.now();

  
      const newUser = {
        id,
        name,
        photoURL,
        email,
        password,
      };

      usersData.push(newUser);

   
      localStorage.setItem("usersData", JSON.stringify(usersData));

     
      localStorage.removeItem("photoUrl");

 
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("photoUrl", photoURL);

      toast.success("Registration successful!");
      window.location.replace("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email already in use. Please use a different email.");
        toast.error("Email already in use. Please use a different email.");
      } else {
        setError(error.message);
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="login">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={4} className="login-box">
            <h2 className="login-title">Registration</h2>
            <Form onSubmit={handleRegistration}>
              {error && <div className="alert alert-danger">{error}</div>}
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className="input-field mb-3"
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="input-field mb-3"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="input-field mb-3"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhotoURL">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control
                  className="input-field mb-3"
                  type="url"
                  placeholder="Enter photo URL"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
              </Form.Group>
              <Button
                className="mt-2 submit-button "
                id="submit-button"
                type="submit"
                block
              >
                Register
              </Button>
            </Form>

            <p className="text-center mt-5">
              Already have an account? <Link to="/login">Login Now</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
