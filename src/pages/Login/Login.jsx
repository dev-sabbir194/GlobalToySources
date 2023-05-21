import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import app from "../../utils/firebase/firebase.init";
import "./Login.css";
import { Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Logged in successfully!");
        saveUserCredentials(user.email, "");
        window.location.replace("/home");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Logged in successfully!");
        saveUserCredentials(email, password);
        window.location.replace("/home");
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        if (error.code === "auth/user-not-found") {
          toast.error("Email not registered");
          window.location.replace("/register");
        } else {
          toast.error("Invalid email or password");
        }
      });
  };

  const saveUserCredentials = (email, password) => {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
  };

  const retrieveUserCredentials = () => {
    const email = localStorage.getItem("userEmail") || "";
    const password = localStorage.getItem("userPassword") || "";
    return { email, password };
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const { email: storedEmail, password: storedPassword } =
    retrieveUserCredentials();

  return (
    <div className="login">
      <ToastContainer />
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={4} className="login-box">
            <h2 className="login-title">Login</h2>
            <h1 className="text-center text-white mb-3">Login</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="input-field mb-3"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="input-field"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Form.Group>

              <Button
                className="mt-3 ps-5 pe-5 submit-button text-center"
                id="submit-button"
                type="submit"
                block
              >
                Login
              </Button>
            </Form>

            <div className="login-options">
              <p className="login-text">Or login with:</p>
              <Button
                className="google-button"
                onClick={handleSignInWithGoogle}
              >
                <img
                  className="google"
                  src="https://drive.google.com/uc?id=1LoLyVAwrJA1vwlG9U2yeNV2bru47JpSw"
                  alt=""
                />
                <span className="g-text"> Google Sign-in</span>
              </Button>
            </div>
            <div className="register-link">
              <p className="register-text">
                Don't have an account?{" "}
                <Link className="register-link" to="/register">
                  Registration
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
