import React from "react";
import { Navbar, Nav, Container, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const userIsLoggedIn = localStorage.getItem("userEmail") !== null;
  const userPhotoUrl = localStorage.getItem("photoUrl");

  const handleLogout = () => {

    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("photoUrl");

    window.location.replace("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#" className="t-color">
          <Image
            src="https://drive.google.com/uc?id=1OQvgCtQFFSQV2En4mfY5rTPBT9metidy"
            alt="Logo"
            height="50"
          />
          Global Toy Sources
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home" className="t-color">
                Home
              </Nav.Link>
              <Nav.Link href="/alltoys" className="t-color">
                All Toys
              </Nav.Link>
              {userIsLoggedIn && (
                <Nav.Link href="/mytoy" className="t-color">
                  My Toys
                </Nav.Link>
              )}
              {userIsLoggedIn && (
                <Nav.Link href="/addtoy" className="t-color">
                  Add A Toy
                </Nav.Link>
              )}
              <Nav.Link href="/blogpage" className="t-color">
                Blog
              </Nav.Link>
            </Nav>
            <Nav>
              {userIsLoggedIn ? (
                <>
                  {userPhotoUrl && (
                    <Image
                      src={userPhotoUrl}
                      alt="User"
                      roundedCircle
                      height="30"
                    />
                  )}
                  <Button
                    variant="outline-light"
                    className="ml-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button variant="outline-light" className="ml-2">
                  <Link to="/login">Login</Link>
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
