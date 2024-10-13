import React from "react";
import { Card } from "../Card/Card";
import Image1 from "../../Assets/Product_lemon.jpg";
import Image2 from "../../Assets/Product_Leaves.jpg";
import "./List.scss";

export const List = () => {
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

    {
      id: 4,
      img: Image2,
      img2: Image1,
      title: "Oil 2",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 5,
      img: Image2,
      img2: Image1,
      title: "Oil 3",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },

    {
      id: 6,
      img: Image2,
      img2: Image1,
      title: "Oil 2",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};
