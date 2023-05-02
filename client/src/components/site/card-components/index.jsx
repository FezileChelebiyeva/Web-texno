import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/slice/personDataSlice";
import logo from "../../../assets/images/element.png";
import "./index.scss";
import { Link } from "react-router-dom";
const CardPersons = () => {
  const dispatch = useDispatch();
  const personalities = useSelector((state) => state.personalities);
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div id="cards-component">
      <div className="container">
        <div className="cards-component">
          <h2>Tarixi Şəxsiyyətlər</h2>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="cards">
            {console.log(personalities.data)}
            {personalities.data?.map((element) => {
              return (
                <div className="card">
                  <div className="image">
                    <Link to={`/details/${element._id}`}>
                      <img src={element.image} alt="image about person" />
                    </Link>
                  </div>
                  <div className="about">
                    <h3>{element.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPersons;
