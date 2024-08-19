import React from "react";
import "./sevvice.css";

function Sevvice() {
  return (
    <div className="sevvice">
      <div className="container">
        <div className="sevvice__wrapper">
          <div className="sevvice__suptitle">
            <p className="sevvice__pubtitle">WHAT WE DO</p>
            <p className="sevvice__bigtitle">Our Service</p>
          </div>
          <div className="sevvice__block">
            <div className="sevvice__card">
              <div className="sevvice__img">
                <img className="sevvice__img" src="/sr.png" alt="" />
              </div>
              <div className="sevvice__text">
                <p className="sevvice__degisn">Interior Design</p>
                <p className="sevvice__lorem">
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="sevvice__card">
              <div className="sevvice__img">
                <img className="sevvice__img" src="/sr.png" alt="" />
              </div>
              <div className="sevvice__text">
                <p className="sevvice__degisn">Interior Design</p>
                <p className="sevvice__lorem">
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="sevvice__card">
              <div className="sevvice__img">
                <img className="sevvice__img" src="/sr.png" alt="" />
              </div>
              <div className="sevvice__text">
                <p className="sevvice__degisn">Interior Design</p>
                <p className="sevvice__lorem">
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sevvice;
