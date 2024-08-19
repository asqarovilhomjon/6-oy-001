import React from "react";
import "./letest.css";

function Letest() {
  return (
    <div className="Letest">
      <div className="container">
        <div className="Letest__wrapper">
          <div className="Letest__suptitle">
            <p className="TESTIMONIALS">LETEST NEWS</p>
            <p className="Client">From Our Blog</p>
          </div>
          <div className="Letest__block">
          <div className="Letest__card">
              <div className="Letest__img">
                <img className="Letest__img" src="/Mask Group (4).png" alt="" />
              </div>
              <div className="Letest__text">
                <p className="sevvice__degisn">2020 Interior Design Trends</p>
                <p className="Letest__lorem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="Letest__btn">CONTINUE READING....</button>
              </div>
            </div>
            <div className="Letest__card">
              <div className="Letest__img">
                <img className="Letest__img" src="/Mask Group (4).png" alt="" />
              </div>
              <div className="Letest__text">
                <p className="sevvice__degisn">2020 Interior Design Trends</p>
                <p className="Letest__lorem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="Letest__btn">CONTINUE READING....</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Letest;
