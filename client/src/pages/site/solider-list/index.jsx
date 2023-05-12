import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/slice/personDataSlice";
import { Link } from "react-router-dom";
import "./index.scss";
import { Button, Input } from "antd";
import { Space, Spin } from "antd";

const SiteSolidersList = () => {
  const [sort, setSort] = useState(true);
  const dispatch = useDispatch();
  const personalities = useSelector((state) => state.personalities);
  useEffect(() => {
    dispatch(getData(""));
  }, []);

  const handleSortByName = () => {
    setSort(!sort);
    sort ? dispatch(getData(1)) : dispatch(getData(""));
  };

  return (
    <div id="solider-list-site">
      <div className="header-list"></div>
      <div className="container">
        <div className="solider-list-site">
          <div className="head">
            <h1>Milli Qəhrəmanlar</h1>
          </div>
          <div className="filter">
            <Input
              onChange={(e) => dispatch(getData(e.target.value))}
              placeholder="Axtarın..."
            />
            <div className="sort">
              <div>
                <Button type="primary" ghost onClick={() => handleSortByName()}>
                  Ada Görə Sıralama
                </Button>
              </div>
            </div>
          </div>
          {personalities.loading ? (
            <div className="spin">
              <Space size="middle">
                <Spin size="large" />
              </Space>
            </div>
          ) : (
            <div className="cards">
              {personalities.data?.map((element) => {
                return (
                  <div key={element._id} className="card">
                    <div className="image">
                      <Link to={`/details/${element._id}`}>
                        <img src={element.image} alt="image about person" />
                      </Link>
                    </div>
                    <div className="about">
                      <Link to={`/details/${element._id}`}>{element.name}</Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SiteSolidersList;
