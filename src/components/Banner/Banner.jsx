import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css"; // Import custom CSS file for styling

const Banner = () => {
  const [currentDeal, setCurrentDeal] = useState(0);
  const deals = [
    {
      name: "Limited Time Offer",
      offerName: "Black Friday",
      offerCode: "USE CODE:#fl50%",
      offerSystem: "FREE SHIPPING",
      image:
        "https://www.toysrus.in/media/mageplaza/bannerslider/banner/image/1/2/1200x450-bts-hp-banner.jpg",
    },
    {
      name: "Special Discount",
      offerName: "Summer Sale",
      offerCode: "USE CODE:#summer20",
      offerSystem: "Fast Delivery",
      image:
        "https://www.toysrus.in/media/mageplaza/bannerslider/banner/image/1/2/1200x450-bts-hp-banner.jpg",
    },
    // Add more deal objects as needed
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDeal((prevDeal) => (prevDeal + 1) % deals.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [deals.length]);

  const currentDealData = deals[currentDeal];

  return (
    <div className="banner">
      <Container>
        <h1 className="text-center mb-5" id="header-text">Best Deals</h1>
        <div className="mt-5">
          <div className="deals pt-2 pb-2 ps-5 pe-5">
            <Row className="mt-5 mb-5">
              <Col
                md={6}
                className={`left-side animated ${
                  currentDeal === 0 ? "slideInLeft" : "slideInRight"
                }`}
              >
                <div
                  className="text-wrapper pb-3 pt-3 ps-2 pe-2"
                  id="offer-sec"
                >
                  <h1 id="offer">{currentDealData.name}</h1>
                  <h3 id="offer-name">{currentDealData.offerName}</h3>
                  <h4 id="offer-code">{currentDealData.offerCode}</h4>
                  <h4 id="offer-system">{currentDealData.offerSystem}</h4>
                  <button id="buy-offer">Buy Now</button>
                </div>
              </Col>
              <Col
                md={6}
                className={`right-side animated ${
                  currentDeal === 0 ? "slideInRight" : "slideInLeft"
                }`}
              >
                <img
                  src={currentDealData.image}
                  alt="Header Image"
                  className="header-image h-100"
                />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
