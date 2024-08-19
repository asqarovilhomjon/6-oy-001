import React from "react";
import "./mextreo.css";

function Mextreo() {
  return (
    <div className="Mextreo">
      <div className="container">
        <div className="Mextreo__wrapper">
          <div className="Mextreo__right">
            <img className="Mextreo__img" src="/Mask Group (1).png" alt="" />
          </div>
          <div className="Mextreo__left">
            <p className="Mextreo__suptitle">ABOUT US</p>
            <p className="Mextreo__bigtitle">
              Interioris The Will of An Epoch Mextreo
            </p>
            <p className="Mextreo__smalltitle">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form injected
              humour, or randomised words which don't look even slightly
              believable.If you are going to use a passage of Lorem Ipsum, sure
              there isn't anything embarrassing hidden the middleof text. All
              the Lorem Ipsum generators on the Internettend to repeat
              predefined chunks as necessary,making this the first true
              generator on the Internet.
            </p>
            <button className="Mextreo__btn">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mextreo;
