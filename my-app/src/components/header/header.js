import React from "react";
import "./header.css"


function Header() {
  return (
    <div className="Header">
      <div className="navbar">
        <div className="container">
          <div className="navbar__wrapper">
            <div className="navbar__logo">
              <img src="/logo.svg" alt="Tashqi rasm" />
            </div>
            <div className="navbar__content">
              <ul className="navbar__collection">
                <li className="navbar__title">HOME</li>
                <li className="navbar__title">PROJECT </li>
                <li className="navbar__title">SERVICES</li>
                <li className="navbar__title"> ABOUT </li>
                <li className="navbar__title">BLOG</li>
                <li className="navbar__title">SHOP</li>
                <li className="navbar__title">CONTACT</li>
              </ul>
              <button className="navbar__btn">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
