import React from "react";
import "./index.scss";
import logo from "../../assets/images/logo.png";
import logo1 from "../../assets/images/logo1.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div id="header">
      <div id="first-header">
        <div className="container">
          <div className="first-header">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="description">
              <div className="head">
                <h4>"Tarix həmişə hər şeyi öz yerinə qoyur"</h4>
                <p>Ümummilli lider Heydər Əliyev</p>
              </div>
              <div className="img">
                <img src={logo1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="navbar">
        <div className="container">
          <div className="navbar">
            <nav>
              <ul>
                <li>
                  <NavLink to={"/"}>Tarixi Şəxsiyyətlər</NavLink>
                </li>
                <li>
                  <NavLink to={"/books"}>Kitablar</NavLink>
                </li>
                <li>
                  <NavLink to={"/galery"}>Qalereya</NavLink>
                </li>
                <li>
                  <NavLink to={"/maps"}>Xəritələr</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
