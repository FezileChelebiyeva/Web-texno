import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./index.scss";
const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [solider, setSolider] = useState({});

  const getDataByName = async () => {
    const response = await axios.get(
      `http://localhost:8080/personalities/${id}`
    );
    setSolider(response.data);
  };

  useEffect(() => {
    getDataByName();
  }, []);
  return (
    <div id="details-page">
      <Helmet>
        <title>{`${solider.name}`}</title>
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="./src/assets/images/favicon.png"
        />
      </Helmet>
      <div id="details-head">
        <div className="container">
          <div className="header">
            <div className="head">
              <h1>{solider.name}</h1>
              <div className="about">
                <p>{solider.longName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="solider-details">
        <div className="container">
          <div className="detail-about">
            <div className="solider-details">
              <div className="img">
                <img src={solider.image} alt="" />
              </div>
              <div className="about-solider">
                <div className="about">
                  <h3>{solider.name}</h3>
                </div>
                <div className="about">
                  <p>({solider.date})</p>
                </div>
                <div className="rank">
                  <p>{solider.rank}</p>
                  <img src={solider?.rankImg} alt="" />
                </div>

                <div className="about">
                  <span>Həyatı: </span>
                  <p>{solider.life}</p>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="about">
                <span>Döyüşlərdə iştirakı: </span>
                <p>{solider.fight}</p>
              </div>
              {solider.reward ? (
                <div className="about">
                  <span>Təltif və mükafatları: </span>
                  <ul>{solider.reward}</ul>
                </div>
              ) : (
                ""
              )}

              <div className="btn">
                <button onClick={() => navigate("/")}>Geri</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
