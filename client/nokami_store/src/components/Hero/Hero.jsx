import React from "react";
import HeroImg from "../../Assets/Product_Leaves.jpg";
import "./Hero.scss";

export const Hero = () => {
  return (
      <div className="Hero-section">
          
      {/* Hero Left */}
      <div className="Hero-Left">
        <div className="inner_left_div">
          <div className="nested_left_div">
            <p className="nested_line_1"></p>
            <p className="nested_lead_1">HAIR CARE THAT TRULY CARES</p>
          </div>
          <h1 className="nested_heading">
            DISCOVER NATURE'S FINEST
            <br />
            <br />
            FOR YOUR HAIR
          </h1>
          <div className="nested_paragraph">
            <p className="nested_paragraph_1">
              {/* From Uiverse.io by barisdogansutcu */}
              <button>SHOP NOW</button>
            </p>
            <p className="nested_line_1"></p>
          </div>
        </div>
      </div>
      {/* Hero Right */}
      <div className="Hero-Right">
        <img src={HeroImg} alt="" id="HeroImg" />
      </div>
    </div>
  );
};