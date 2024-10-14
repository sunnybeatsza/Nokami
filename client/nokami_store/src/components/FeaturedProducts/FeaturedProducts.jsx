import React from "react";
import { useState, useEffect } from "react";
import "./FeaturedProducts.scss";
import Image1 from "../../Assets/Product_lemon.jpg";
import Image2 from "../../Assets/Product_Leaves.jpg";
import { Card } from "../Card/Card";

export const FeaturedProducts = ({ type }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
      } catch (error) {
        console.log(error);
      }
    };
  });

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          voluptates temporibus cupiditate cum et architecto, in natus unde
          ipsum ad nihil sapiente ab, ut quisquam voluptate dignissimos possimus
          omnis veritatis!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
