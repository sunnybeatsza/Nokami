import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </div>
        <h2>{item.title}</h2>
        <div className="card-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, illum nostrum odio quisquam.</div>
        <div className="prices">
          <h3>R{item.oldPrice}</h3>
          <h3>R{item.price}</h3>
        </div>
      </div>
    </Link>
  );
};
