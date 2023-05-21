import React from "react";
import Header from "../Header/Header";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import ShopByCategorys from "../ShopByCategorys/ShopByCategorys";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <ShopByCategorys></ShopByCategorys>
      <PhotoGallery></PhotoGallery>

    </div>
  );
};

export default Home;
