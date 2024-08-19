import React from "react";
import "./forget.css";

function Forget() {
  return (
    <div className="fotget">
      <div className="container">
        <div className="fotget__wrapper">
          <div className="forget__suptitle">
            <p className="SIGN">DON’T FORGET TO SIGN UP</p>
            <p className="Find">
              Find out early about all upcoming promotions and new product
              releases with our newsletter.
            </p>
          </div>
          <div className="forget__input">
            <form className="form" action="">
              <input className="forget__inp" required placeholder="Enter your email address....." type="text" />
              <button className="forget__btn">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
