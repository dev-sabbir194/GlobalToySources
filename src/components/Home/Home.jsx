import React from "react";
import Header from "../Header/Header";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import ShopByCategorys from "../ShopByCategorys/ShopByCategorys";
import FeatureCollection from "../FeatureCollection/FeatureCollection";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <ShopByCategorys></ShopByCategorys>
      <PhotoGallery></PhotoGallery>
      <FeatureCollection></FeatureCollection>
    </div>
  );
};

export default Home;
