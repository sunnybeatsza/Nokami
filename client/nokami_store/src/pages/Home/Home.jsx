import React from "react";
import "./Home.scss";
import { Slider } from "../../components/Slider/Slider";
import { FeaturedProducts } from "../../components/FeaturedProducts/FeaturedProducts";
import { Categories } from "../../components/Catergories/Categories";
import { Contact } from "../../components/Contact/Contact";


export const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
};
