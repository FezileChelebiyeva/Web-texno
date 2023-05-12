import React, { useEffect, useState } from "react";
import AdminHeader from "../../../layouts/admin/header";
import AdminNavbar from "../../../components/admin/navbar";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteData,
  getData,
  updateData,
} from "../../../redux/slice/personDataSlice";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { solidersSchema } from "../add-solider/schema";
import { Space, Spin } from "antd";

const SolidersList = () => {
  const [navbar, setNavbar] = useState(true);
  const [editData, setEditData] = useState(false);
  const dispatch = useDispatch();
  const personalities = useSelector((state) => state.personalities);
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        doctorJob: "",
        location: "",
        phone: "",
        money: "",
        hour: "",
        star: "",
        image: "",
      },
      validationSchema: solidersSchema,
      onSubmit: (values) => {
        // postImage ? (values.image = postImage) : "";
        dispatch(updateData(values)).then(() => dispatch(getData("")));
      },
    });
  // for image
  // const convertToBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };
  // const handleFileUpload = async (e) => {
  //   const file = e.target.files[0];
  //   const base64 = await convertToBase64(file);
  //   setPostImage(base64);
  // };
  const handleEdit = async (id) => {
    setEditData(true);
    personalities.data?.map((element) => {
      if (element._id === id) {
        values.id = element._id;
        values.name = element.name;
        values.longName = element.longName;
        values.fight = element.fight;
        values.date = element.date;
        values.rankImg = element.rankImg;
        values.rank = element.rank;
        values.reward = element.reward;
        values.life = element.life;
        values.image = element.image;
      }
    });
  };
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div id="soliders-page">
      <AdminHeader navbar={navbar} setNavbar={setNavbar} />
      {navbar && <AdminNavbar />}
      <div id="soliders">
        <div className="container">
          <div className="soliders">
            {personalities.loading ? (
              <div className="spin">
                <Space size="middle">
                  <Spin size="large" />
                </Space>
              </div>
            ) : (
              personalities.data?.map((element) => {
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
                    <div className="btns">
                      <button
                        onClick={() =>
                          dispatch(deleteData(element._id)).then(() =>
                            dispatch(getData())
                          )
                        }
                        className="deleteBtn"
                      >
                        Sil
                      </button>
                      <button
                        onClick={() => handleEdit(element._id)}
                        className="editBtn"
                      >
                        Redaktə
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      {editData && (
        <div id="update-doctor">
          <form onSubmit={handleSubmit}>
            <div onClick={() => setEditData(false)} className="close">
              x
            </div>
            <div className="form">
              <div className="left">
                <div className="input-control">
                  <p>
                    <label htmlFor="name" className="m-2">
                      Ad, Soyad
                    </label>
                  </p>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={values.name}
                    placeholder="Ad Soyad"
                  />
                  {errors.name && touched.name && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.name}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="life" className="m-2">
                      Həyatı
                    </label>
                  </p>
                  <textarea
                    id="life"
                    name="life"
                    type="text"
                    onChange={handleChange}
                    value={values.life}
                    placeholder="Həyatı"
                  />
                  {errors.life && touched.life && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.life}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="image" className="m-2">
                      Şəkil
                    </label>
                  </p>
                  <input
                    id="image"
                    name="image"
                    type="text"
                    placeholder="Şəkil"
                    onChange={handleChange}
                    value={values.image}
                  />
                  {errors.image && touched.image && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.image}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="rank" className="m-2">
                      Rütbəsi
                    </label>
                  </p>
                  <input
                    id="rank"
                    name="rank"
                    type="text"
                    onChange={handleChange}
                    value={values.rank}
                    placeholder="Rütbəsi"
                  />
                  {errors.rank && touched.rank && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.rank}
                    </div>
                  )}
                </div>
              </div>

              <div className="right">
                <div className="input-control">
                  <p>
                    <label htmlFor="longName" className="m-2">
                      Haqqında
                    </label>
                  </p>
                  <input
                    id="longName"
                    name="longName"
                    type="text"
                    onChange={handleChange}
                    value={values.longName}
                    placeholder="Haqqında"
                  />
                  {errors.longName && touched.longName && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.longName}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="fight" className="m-2">
                      Döyüşləri
                    </label>
                  </p>
                  <textarea
                    id="fight"
                    name="fight"
                    type="text"
                    onChange={handleChange}
                    value={values.fight}
                    placeholder="Döyüşləri"
                  />
                  {errors.fight && touched.fight && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.fight}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="date" className="m-2">
                      Tarix
                    </label>
                  </p>
                  <input
                    id="date"
                    name="date"
                    type="text"
                    onChange={handleChange}
                    value={values.date}
                    placeholder="Tarix"
                  />
                  {errors.date && touched.date && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.date}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="rankImg" className="m-2">
                      Rütbə Şəkili
                    </label>
                  </p>
                  <input
                    id="rankImg"
                    name="rankImg"
                    type="text"
                    onChange={handleChange}
                    value={values.rankImg}
                    placeholder="Rütbə Şəkili"
                  />
                  {errors.rankImg && touched.rankImg && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.rankImg}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="input-control">
              <p>
                <label htmlFor="reward" className="m-2">
                  Mükafatlar
                </label>
              </p>
              <input
                id="reward"
                name="reward"
                type="text"
                onChange={handleChange}
                value={values.reward}
                placeholder="Mükafatlar"
              />
              {errors.reward && touched.reward && (
                <div
                  style={{
                    color: "red",
                    fontSize: "12px",
                    margin: "5px 0 5px 3px",
                  }}
                >
                  {errors.reward}
                </div>
              )}
            </div>

            <div className="btn">
              <button type="submit" className="btn btn-success mt-2">
                Redaktə
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SolidersList;
