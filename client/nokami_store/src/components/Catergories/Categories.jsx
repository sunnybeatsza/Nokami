import React from "react";
import Image1 from "../../Assets/Product_lemon.jpg";
import Image2 from "../../Assets/Product_Leaves.jpg";
import { Link } from "react-router-dom";

import "./Categories.scss";

export const Categories = () => {
  return (
    <>
    <div className="categories-hero">
      <h1>Blogs</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores tenetur perferendis, magni fuga illo! Consectetur dolores nostrum nulla molestiae nam similique est impedit eligendi excepturi cupiditate, sequi perspiciatis natus.</p>
  </div>
    <div className="categories">
    
      <div className="col">
        <div className="row">
          <img
            src="https://plus.unsplash.com/premium_photo-1715876268461-7d85ee7b1452?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Ingredients
            </Link>
          </button>
        </div>
        <div className="row">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1536924430914-91f9e2041b83?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Oils
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1603234924544-526ab57f77d9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <button>
            <Link to="/products/2" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1643857571131-84a60d2f1f36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <Link to="/products/3" className="link">
                <button>UPCOMING DROPS</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://plus.unsplash.com/premium_photo-1691801701768-48392f81a646?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <button>
                <Link to="/products/4" className="link">
                  Benefits
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1606416132922-22ab37c1231e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <button>
            <Link to="/products/5" className="link">
              Culture
            </Link>
          </button>
        </div>
      </div>
      </div>
      </>
  );
};
