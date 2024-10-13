import React from "react";
import Image1 from "../../Assets/Product_lemon.jpg";
import Image2 from "../../Assets/Product_Leaves.jpg";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";

export const Cart = () => {
  const data = [
    {
      id: 1,
      img: Image2,
      img2: Image1,
      title: "Oil 1",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: Image2,
      img2: Image1,
      title: "Oil 1",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. .",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>

            <div className="price"> 1 x R{item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>R350</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};
