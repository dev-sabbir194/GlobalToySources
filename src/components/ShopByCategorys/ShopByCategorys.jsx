import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./ShopByCategorys.css";
import { Link } from "react-router-dom";

const ShopByCategorys = () => {
  const categories = [
    {
      name: "Educational and Learning",
      subcategories: ["science kits", "math learning toys", "engineering kits"],
      image: [
        "https://drive.google.com/uc?id=1Iozsnxp6Wx4e9QTK9dWklApPAjmaWphN",
        "https://drive.google.com/uc?id=1gHrkE6tX7snAAYbO_l0J0ouUY0YeuTQo",
        "https://drive.google.com/uc?id=1Ub8hKL_zcw9DAX8xtocu2oBsYvv5gWUy",
      ],
    },
    {
      name: "Action figure toys",
      subcategories: ["marvel", "avengers", "star wars"],
      image: [
        "https://drive.google.com/uc?id=1inlHHVAV19I8H4yFwSf2oHzGuAUgmfTn",
        "https://drive.google.com/uc?id=1hOf-K9Pr4n_WsH7WnIlqdVr9ILqo2oJG",
        "https://drive.google.com/uc?id=1DHi5DKXyuMcYliVgAX8ztD-uOizbND2E",
      ],
    },
    {
      name: "Animal toys",
      subcategories: ["teddy bear", "horse", "dinosaur"],
      image: [
        "https://drive.google.com/uc?id=1ukm-zdJRHDIjtNkWeC6CAXA3HGUeZlz_",
        "https://drive.google.com/uc?id=1Orn1CjksmeVTks7xyUnrrbUXp7qpThbT",
        "https://drive.google.com/uc?id=1ZhyxxDwESsruXuJj0YrlDM84nOdi4UAz",
      ],
    },
    {
      name: "Disney dolls",
      subcategories: ["Disney princes", "frozen dolls", "animation characters"],
      image: [
        "https://drive.google.com/uc?id=1jtA5jZ4b9DtlJ2kgK-5DbSQtte4dX-fM",
        "https://drive.google.com/uc?id=1QQ3cTTKCKb_4qD97xxtclYmPrJNHpe_o",
        "https://drive.google.com/uc?id=1JtniVeMEJrqua8YnrGyuXzYwSWgK-zcY",
      ],
    },
   
  ];

  const [selectedCategory, setSelectedCategory] = useState(
    categories[0].name // Initialize with the name of the first category
  );

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className="shop-by-category " id="for-Bg">
      <Container>
        <h2 className="section-title text-center">Shop by Category</h2>
        <Row>
          <Col>
            <div className="category-header text-center" id="button-set">
              {categories.map((category, index) => (
                <Button
                  id="category-button"
                  key={index}
                  className={`category-button ${
                    selectedCategory === category.name ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
        {selectedCategory && (
          <div>
            <h3 className="subcategory-title">{selectedCategory}</h3>
            <Row>
              {categories
                .find((category) => category.name === selectedCategory)
                .subcategories.map((subcategory, index) => (
                  <Col md={4} key={index}>
                    <Card className="subcategory-card">
                      <Card.Body>
                        <Card.Title>{subcategory}</Card.Title>
                        <img
                          className="img-fluid"
                          id="img-size"
                          src={
                            categories.find(
                              (category) => category.name === selectedCategory
                            ).image[index]
                          }
                          alt=""
                        />
                        <div className="text-center">
                          <button
                            className="btn mb-3 go-home
                        "
                          >
                            <Link to="/alltoys" id="link-go">
                              Shop
                            </Link>
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ShopByCategorys;
