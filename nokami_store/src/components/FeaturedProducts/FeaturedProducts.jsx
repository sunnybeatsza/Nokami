import React from "react";
import "./FeaturedProducts.scss";
import Image1 from "../../Assets/Product_lemon.jpg";
import Image2 from "../../Assets/Product_Leaves.jpg";
import { Card } from "../Card/Card";

export const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: Image2,
      img2: Image1,
      title: "Oil 1",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: Image2,
      img2: Image1,
      title: "Oil 2",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: Image2,
      img2: Image1,
      title: "Oil 3",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

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
