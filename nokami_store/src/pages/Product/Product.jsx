import React from "react";
import "./Product.scss";
import { useState } from "react";
import Image1 from "../../Assets/Product_lemon.jpg";
import Image2 from "../../Assets/Product_Leaves.jpg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

export const Product = () => {
  const [selectedImg, setSelectedImg] = useState(Image1);

  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={Image1} alt="" onClick={(e) => setSelectedImg(Image1)} />
          <img src={Image2} alt="" onClick={(e) => setSelectedImg(Image2)} />
        </div>
        <div className="mainImg">
          <img src={selectedImg} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">R200.00</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          expedita inventore. Qui, quasi. Vel, harum nisi! Molestiae, dolor sunt
          mollitia ab fuga culpa maiores doloremque, praesentium rem totam modi
          eos.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};
