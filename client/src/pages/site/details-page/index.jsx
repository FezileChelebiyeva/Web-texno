import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./index.scss";
const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({});

  const getDataByName = async () => {
    const response = await axios.get(
      `http://localhost:8080/personalities/${id}`
    );
    setDoctor(response.data);
  };

  useEffect(() => {
    getDataByName();
  }, []);
  return (
    <div id="details-page">
      <Helmet>
        <title>{`Doctris - ${doctor.firstName} ${doctor.lastName}`}</title>
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div id="details-head">
        <div className="container">
          <div className="header">
            <div className="head">
              <h1>About Doctor</h1>
              <div className="about">
                <p>
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment or a simple
                  consultation.
                </p>
              </div>
              <div className="links">
                <span>
                  <NavLink to={"/"}>DOCTRIS</NavLink>
                </span>
                <span>
                  <NavLink to={`/details-doctor/${id}`}>DOCTOR DETAILS</NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="doctor-details">
        <div className="container">
          <div className="doctor-details">
            <div className="img">
              <img src={doctor.image} alt="" />
            </div>
            <div className="about-doctor">
              <div className="about">
                <h3>{`${doctor.firstName} ${doctor.lastName}`}</h3>
              </div>
              <div className="star">
                <div className="star-icon">
                  {new Array(doctor.star).fill(
                    <i className="fa-sharp fa-solid fa-star"></i>
                  )}
                </div>
              </div>
              <div className="about">
                <span>Job: </span>
                <p>{doctor.doctorJob}</p>
              </div>
              <div className="about">
                <span>Location: </span>
                <p>{doctor.location}</p>
              </div>
              <div className="about">
                <span>Appointment Price: </span>
                <p>{doctor.money}.00 $</p>
              </div>
              <div className="about">
                <span>Working Hours: </span>
                <p>{doctor.hour}</p>
              </div>
              <div className="btn">
                <button onClick={() => navigate("/")}>Go Back Home</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
