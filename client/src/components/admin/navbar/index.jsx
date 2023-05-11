import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import "./index.scss";
const AdminNavbar = () => {
  return (
    <div className="admin-navbar">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <nav>
        <ul>
          <li className="nav-menu">
            <NavLink to={"/admin"}>
              <div className="icon">
                <i className="fa-solid fa-gauge"></i>
              </div>
              Admin Panel
            </NavLink>
          </li>
          <li className="nav-menu">
            <NavLink to={"/admin/solider-list"}>
              <div className="icon">
                <i className="fa-solid fa-person-military-rifle"></i>{" "}
              </div>
              Milli Qəhrəmanlar
            </NavLink>
          </li>
          <li className="nav-menu">
            <NavLink to={"/admin/add-solider"}>
              <div className="icon">
                <i className="fa-solid fa-user-plus"></i>{" "}
              </div>
              Əlavə edin
            </NavLink>
          </li>
          <li className="nav-menu">
            <NavLink to={"/admin/solider-list-aztu"}>
              <div className="icon">
                <i className="fa-solid fa-person-military-rifle"></i>{" "}
              </div>
              AzTu Milli Qəhrəmanlar
            </NavLink>
          </li>
          <li className="nav-menu">
            <NavLink to={"/admin/add-solider-aztu"}>
              <div className="icon">
                <i className="fa-solid fa-user-plus"></i>{" "}
              </div>
              Əlavə edin (AzTu)
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavbar;
``;
