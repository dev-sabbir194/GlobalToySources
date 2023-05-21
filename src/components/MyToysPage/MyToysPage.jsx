import React, { useState } from "react";
import "./MyToysPage.css";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysPage = () => {
  const toys = useLoaderData();

  const handleDelete = (toyId) => {
    console.log("Deleting toy with ID:", toyId);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the delete operation
        Swal.fire("Deleted!", "Your Toy has been deleted.", "success");

        fetch(
          `https://assignment-11-server-side-weld.vercel.app/addedtoy/${toyId}`,
          {
            method: "DELETE",
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("Deleted successfully:", data);
            window.location.reload();
          })
          .catch((error) => {
            console.log("Delete error:", error);
          });
      }
    });
  };

  const handleUpdateClick = (toyId) => {
    console.log("Updating toy with ID:", toyId);
    window.location.replace(`/updatetoy/${toyId}`);
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Table #03</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4 className="text-center mb-4">My Toys</h4>
            <div className="table-wrap">
              <table className="table">
                <thead className="thead-primary">
                  <tr>
                    <th>Picture</th>
                    <th>Seller Name</th>
                    <th>Toy Name</th>
                    <th>Category</th>
                    <th>Subcategory</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>ratting</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {toys.map((toy) => (
                    <tr key={toy._id}>
                      <td>
                        <img
                          className="show img-fluid"
                          src={toy.pictureUrl}
                          alt=""
                        />
                      </td>
                      <td>{toy.sellerName}</td>
                      <td>{toy.name}</td>
                      <td>{toy.category}</td>
                      <td>{toy.subcategory}</td>
                      <td>{toy.price}</td>
                      <td>{toy.description}</td>
                      <td>{toy.ratting}</td>
                      <td>{toy.quantity}</td>
                      <td>
                        <img
                          onClick={() => handleUpdateClick(toy._id)}
                          className="up-delet"
                          src="https://drive.google.com/uc?id=1EE2-Fc-dnW5PUnhW6WiOgrn1eujtC8tQ"
                          alt=""
                        />{" "}
                        <img
                          onClick={() => handleDelete(toy._id)}
                          className="up-delet"
                          src="https://drive.google.com/uc?id=13oA-PoACPp_oD-8n3LUeZ_fHIIVX2Kj1"
                          alt=""
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToysPage;
