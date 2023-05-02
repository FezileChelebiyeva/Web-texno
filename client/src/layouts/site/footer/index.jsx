import React from "react";
import "./index.scss";
import logo from "../../../assets/images/logo.png";
import image from "../../../assets/images/azeflag.jpg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer">
            <div className="logo">
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <nav>
              <ul>
                <h4>Səhifələr</h4>
                <li>
                  <Link to={"/"}>Əsas səhifə</Link>
                </li>
                <li>
                  <Link to={"/"}>Milli qəhrəmanlar</Link>
                </li>
                <li>
                  <Link to={"/"}>Əlavə</Link>
                </li>
              </ul>
            </nav>
            <div className="contact">
              <h5>Contact us</h5>
              <div className="contact-items">
                <i className="fa-regular fa-envelope icon"></i>
                <a href="mailto:contact@example.com">contact@example.com</a>
              </div>
              <div className="contact-items">
                <i className="fa-solid fa-phone icon"></i>
                <a href="tel:+152 534-468-854">+152 534-468-854</a>
              </div>
              <div className="contact-items">
                <i className="fa-solid fa-location-dot icon"></i>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Caspian+International+Hospital/@40.343109,49.8082956,17z/data=!4m5!3m4!1s0x40307e8e13662509:0x9c53ea41ee87cca0!8m2!3d40.3433082!4d49.8102321?hl=en"
                >
                  View on Google map
                </a>
              </div>
              <div className="contact-icons">
                <div className="circle">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="circle">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="circle">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="circle">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
            </div>
            <div className="image">
              <img src={image} alt="" />
              <p className="text">
                Vətənə vurulan yaranı hər birimiz <br />
                ürəyimizin dərinliklərində hiss edirik!
              </p>
              <p className="author">Viktor Hüqo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </div>
  );
};

export default Footer;
