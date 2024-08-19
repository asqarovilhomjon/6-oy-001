import React from "react";
import "./testimonial.css";

function Testimonial() {
  return (
    <div className="testominial">
      <div className="container">
        <div className="testominial__wrapper">
          <div className="testominial__suptitle">
            <p className="TESTIMONIALS">TESTIMONIALS</p>
            <p className="Client">Client says about us</p>
          </div>
          <div className="testominial__block">
            <div className="sevvice__card">
              <div className="sevvice__text">
                <p className="sevvice__degisn">
                  Louis Saville{" "}
                  <span className="google">/CEO at Google inc</span>
                </p>
                <p className="sevvice__lorem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="sevvice__card">
              <div className="sevvice__text">
                <p className="sevvice__degisn">
                  Rekha Varadwaz{" "}
                  <span className="google"> /Manager at Nike inc</span>
                </p>
                <p className="sevvice__lorem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
