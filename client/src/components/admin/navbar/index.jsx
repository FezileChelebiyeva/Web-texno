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
              Dashboard
            </NavLink>
          </li>
          <li className="nav-menu">
            <Link onClick={() => setDoctor(!doctor)}>
              <div className="icon">
                <i className="fa-solid fa-user-doctor"></i>
              </div>
              Doctors
            </Link>
            {doctor && (
              <ul>
                <li className="menu-item">
                  <NavLink to={"/admin/doctors-list"}>
                    <i className="fa-solid fa-caret-right"></i> Doctors
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to={"/admin/add-doctor"}>
                    <i className="fa-solid fa-caret-right"></i> Add Doctor
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-menu">
            <Link onClick={() => setPatient(!patient)}>
              <div className="icon">
                <i className="fa-solid fa-hospital-user"></i>
              </div>
              Patients
            </Link>
            {patient && (
              <ul>
                <li className="menu-item">
                  <NavLink to={"/admin/patients-list"}>
                    <i className="fa-solid fa-caret-right"></i> Patients
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to={"/admin/add-patient"}>
                    <i className="fa-solid fa-caret-right"></i> Add Patient
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavbar;
