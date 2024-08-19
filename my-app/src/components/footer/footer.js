import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <img src="/logo.svg" alt="" />
            <p className="but">
              But i must explain to you all this mistaken idea of dencouncing
              pleasure.
            </p>
          </div>
          <div className="footer__content">
            <p className="Quick">Quick Links</p>
            <ul className="footer__collection">
              <li className="footer__item">About Our Company</li>
              <li className="footer__item">Services WE provide</li>
              <li className="footer__item">Career & Opportunity</li>
              <li className="footer__item">Privacy & policy</li>
              <li className="footer__item">Contact US</li>
            </ul>
          </div>
          <div className="footer__content">
            <p className="Quick">Company</p>
            <ul className="footer__collection">
              <li className="footer__item">About Company</li>
              <li className="footer__item">Our Testimonials</li>
              <li className="footer__item">Latest News</li>
              <li className="footer__item">Our misson</li>
              <li className="footer__item">Get a free Quot</li>
            </ul>
          </div>
          <div className="footer__content">
            <p className="Quick">Quick Links</p>
            <ul className="footer__collection">
              <li className="footer__item">About Our Company</li>
              <li className="footer__item">Services WE provide</li>
              <li className="footer__item">Career & Opportunity</li>
              <li className="footer__item">Privacy & policy</li>
              <li className="footer__item">Contact US</li>
            </ul>
          </div>
          <div className="footer__content">
            <p className="Quick">Follow Us</p>
            <div className="footer__buttons">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
          </div>
        </div>
          <div className="footer__subtitle">
            <p className="Copyright">Copyright @ 2020 Brandoxide.all right reserved.</p>
          </div>
      </div>
    </div>
  );
}

export default Footer;