import React from "react";
import flag from "../../Assets/ZA.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Cart } from "../Cart/Cart";
import "./Navbar.scss";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src={flag} alt="" id="flag" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>ZAR</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to="/products/1" className="link">
              PRODUCTS
            </Link>
          </div>
        </div>

        <div className="center">
          <div className="item">
            <Link to="/" className="link">
              NOKAMI NATURALS
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <Link to="/" className="link">
              ABOUT
            </Link>
          </div>
          <div className="item">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </div>

          <div className="icons">
            <SearchIcon />
            <PersonIcon />
            <FavoriteIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <Link to="/checkout">
                <ShoppingBagIcon />
                <span>0</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};
