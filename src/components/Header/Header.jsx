import React, { useState, useEffect } from "react";
import "./Header.css";
import { Carousel } from "react-bootstrap";
import Banner from "../Banner/Banner";

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="pt-5">
      <Carousel activeIndex={index} onSelect={setIndex}>
        <Carousel.Item>
          <img
            className="d-block w-100 img-responsive"
            src="https://www.toysrus.in/media/mageplaza/bannerslider/banner/image/b/a/banner-web.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-responsive"
            src="https://www.toysrus.in/media/mageplaza/bannerslider/banner/image/n/e/nerf-1200x450.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-responsive"
            src="https://www.toysrus.in/media/mageplaza/bannerslider/banner/image/1/2/1200x450-bts-hp-banner.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-responsive"
            src="https://www.toysrus.in/media/mageplaza/bannerslider/banner/image/g/t/gtl-1200x450.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-responsive"
            src="https://www.toysrus.in/media/mageplaza/bannerslider/banner/image/b/a/banner-web.jpg"
            alt="Fifth slide"
          />
        </Carousel.Item>
          </Carousel>
          
          <Banner></Banner>
      </div>
      
  );
};

export default Header;
