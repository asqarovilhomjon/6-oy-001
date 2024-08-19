import React from "react";
import "./years.css";

function Years() {
  return (
    <div className="Years">
      <div className="container">
        <div className="Years__wrapper">
          <div className="Years__left">
            <p className="Years__supimg">
              <img className="years__img" src="/Mask Group (2).png" alt="" />
            </p>
            <p className="Years__bigtitle">
              Years Of Successful Working The Market
            </p>
            <button className="Years__btn">READ MORE</button>
          </div>
          <div className="Years__right">
            <img className="Years__img" src="/Mask Group.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Years;
