import React from "react";
import "./Footer.scss";
import paymentImg from "../../Assets/payment.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Essentials</span>
          <span>Oils</span>
          <span>Creams</span>
          <span>Skin Care</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Cookies</span>
          <span>Skin Care</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            adipisci unde quis doloribus. Optio fugiat fuga distinctio facilis
            neque cupiditate ex nihil ad, ipsa, dolor rem? Dolore natus ipsum
            nemo.
          </span>
        </div>
        <div className="item">
          <h1>Contacts</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            adipisci unde quis doloribus. Optio fugiat fuga distinctio facilis
            neque cupiditate ex nihil ad, ipsa, dolor rem? Dolore natus ipsum
            nemo.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Nokami</span>
          <span className="copyright">
            © Copyright 2024. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src={paymentImg} alt="" />
        </div>
      </div>
    </div>
  );
};
