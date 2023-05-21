import React, { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./SingelToy.css";
const SingleToy = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);

  useEffect(() => {
    fetch(`https://assignment-11-server-side-weld.vercel.app/addedtoy/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setToy(data);
      })
      .catch((error) => {
        console.log("Error fetching toy:", error);
      });
  }, [id]);

  const handleBuyNow = () => {
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Thanks for Buying",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.replace("/home");
    });
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Container className="mt-5 py-3 mb-5">
        {toy ? (
          <Card className="card-map">
            <Card.Img
              className="img-fluid "
              id="pic-set"
              variant="top"
              src={toy.pictureUrl}
            />
            <Card.Body className=" text-edit">
              <Card.Title className="text-edit text-center">
                {toy.name}
              </Card.Title>
              <hr />
              <Card.Text>
                <h5 className=" h-edit">
                  Seller: <br />{" "}
                  <span className="text-e ">{toy.sellerName}</span>
                  <hr />
                </h5>
                <h5 className=" h-edit">
                  Category: <br />
                  <span className="text-e ">{toy.category}</span>
                  <hr />
                </h5>
                <h5 className=" h-edit">
                  Subcategory: <br />
                  <span className="text-e ">{toy.subcategory}</span>
                  <hr />
                </h5>
                <h5 className=" h-edit">
                  Price:
                  <br /> <span className="text-e ">{toy.price}</span>
                  <hr />
                </h5>

                <h5 className=" h-edit">
                  Ratting: <br />
                  <span className="text-e ">{toy.ratting}</span>
                  <hr />
                </h5>
                <h5 className=" h-edit">
                  Quantity: <br />{" "}
                  <span className="text-e ">{toy.quantity}</span>
                  <hr />
                </h5>
                <h5 className=" h-edit">
                  Description:
                  <br />
                  <span className="text-e ">{toy.description}</span>
                  <hr />
                </h5>
              </Card.Text>
              <div className="text-center ">
                <Button id="b-test" onClick={handleBuyNow}>
                  Buy Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        ) : (
          <p>Loading toy data...</p>
        )}
      </Container>
    </div>
  );
};

export default SingleToy;
