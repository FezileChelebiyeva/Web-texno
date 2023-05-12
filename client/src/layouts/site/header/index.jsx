import React, { useState } from "react";
import "./index.scss";
import logo from "../../../assets/images/logo.png";
import logo1 from "../../../assets/images/logo1.png";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [navbar, setNavbar] = useState(true);
  window.addEventListener("scroll", () => {
    window.scrollY > 60 ? setNavbar(false) : setNavbar(true);
  });
  return (
    <div id="header">
      <div id="first-header">
        <div className="container">
          <div className="first-header">
            <div className="logo">
              <Link target="_blank" to={"https://www.aztu.edu.az/az"}>
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="description">
              <div className="head">
                <h4>
                  Vətənin, ölkəmizin müdafiəsi uğrunda şəhid olmuş insanların
                  adı daim qəlbimizdədir, onların xatirəsi bizim üçün əzizdir,
                  onlar bizim qəlbimizdən çıxmaz, unudulmaz!"
                </h4>
                <p>Ümummilli lider Heydər Əliyev</p>
              </div>
              <div className="img">
                <img src={logo1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={navbar ? "navbar" : "fixed-navbar"}>
        <div className="container">
          <div className="navbar">
            <nav>
              <ul>
                <li>
                  <NavLink to={"/"}>Əsas səhifə</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>Məlumat</NavLink>
                </li>
                <li>
                  <NavLink to={"/soliders"}>Mİlli Qəhrəmanlar</NavLink>
                </li>
                {/* <li>
                  <NavLink to={"/soliders-aztu"}>AzTU Mİlli Qəhrəmanları</NavLink>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
