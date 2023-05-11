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
                  href="https://www.google.com/maps/place/Azerbaijan+Technical+University/@40.3701047,49.8128709,17z/data=!3m1!4b1!4m6!3m5!1s0x40307dc397d94dc3:0x617bc46b47244c00!8m2!3d40.3701006!4d49.8154458!16zL20vMGNsX3Jw?hl=en"
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
      <div className="footer-bottom">
        <div className="text">
          2023 © Millitary. Design with <i className="fa-solid fa-heart"></i> by
          Ch.Fazila
        </div>
      </div>
    </div>
  );
};

export default Footer;
