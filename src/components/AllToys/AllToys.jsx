import React, { useState, useEffect } from "react";
import { Table, Form, Container, Col } from "react-bootstrap";
import { useLoaderData} from "react-router-dom";
import "./AllToys.css";

const AllToys = () => {
  const allToys = useLoaderData();
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(20);
  const isLoggedIn = true;

  useEffect(() => {
    
    const filteredToys = allToys.filter((toy) =>
      toy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
 
    const limitedToys = filteredToys.slice(0, limit);

    setToys(limitedToys);
  }, [allToys, searchTerm, limit]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value, 10));
  };

  const handleViewDetails = (id) => {
    if (isLoggedIn) {
      window.location.replace(`/singeltoy/${id}`);
    } else {
      window.location.replace("/login"); 
    }
  };

  return (
    <div id="toy-container">
      <Container>
        <h1 className="text-center mt-4 mb-5">All Toys</h1>

        <div className="d-flex justify-content-between">
          <div>
            <Col md={6}>
              <Form.Group controlId="searchTerm">
                <Form.Label>Search</Form.Label>
                <Form.Control
                  id="search-input"
                  type="text"
                  placeholder="Enter toy name"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </Form.Group>
            </Col>
          </div>
          <div>
            <Col md={6} className="text-start">
              <Form.Group controlId="limit">
                <Form.Label>Show</Form.Label>
                <Form.Select
                  className="select-size"
                  size="sm"
                  value={limit}
                  onChange={handleLimitChange}
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </Form.Select>
                <Form.Label>results</Form.Label>
              </Form.Group>
            </Col>
          </div>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr className="text-bg-primary">
              <th>Picture</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Price</th>
              <th>Ratting</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <tr key={toy._id}>
                <td>
                  <img className="p-size" src={toy.pictureUrl} alt="" />
                </td>
                <td>{toy.sellerName}</td>
                <td>{toy.name}</td>
                <td>{toy.category}</td>
                <td>{toy.subcategory}</td>
                <td>{toy.price}</td>
                <td>{toy.ratting}</td>
                <td>{toy.quantity}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleViewDetails(toy._id)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AllToys;
