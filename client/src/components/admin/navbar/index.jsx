import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/images/aztu_logo_az.png'
import "./index.scss";
const AdminNavbar = () => {
  const [doctor, setDoctor] = useState(false);
  const [patient, setPatient] = useState(false);
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
              Milli Qəhrəmanlar
            </NavLink>
          </li>
          <li className="nav-menu">
            <Link onClick={() => setDoctor(!doctor)}>
              <div className="icon">
                <i className="fa-solid fa-user-doctor"></i>
              </div>
              Doctors
            </Link>
          </li>
          <li className="nav-menu">
            <Link onClick={() => setPatient(!patient)}>
              <div className="icon">
                <i className="fa-solid fa-hospital-user"></i>
              </div>
              Patients
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavbar;``
