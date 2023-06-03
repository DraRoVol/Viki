import React from "react";
import possibilityImage from "../../assets/moon.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gem__possibility section__padding" id="possibility">
      <div className="gem__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gem__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          Thepossibility are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque magnam
          velit sunt ea, odio ratione.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
