import React from "react";
import "./hero.css";
function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        <div className="hewro__wrapper">
          <div className="hero__left">
            <p className="hiro__suptitle">MODERN INTERIOR</p>
            <p className="hero__bigtitle">Create Your Interior Design.</p>
            <p className="hero__smalltitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <button className="hero__btn">CONTACT</button>
          </div>
          <div className="hero__right">
            <img className="hero__img" src="/Mask Group.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
