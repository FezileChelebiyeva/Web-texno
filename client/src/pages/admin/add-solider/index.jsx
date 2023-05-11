import React, { useEffect, useState } from "react";
import AdminNavbar from "../../../components/admin/navbar";
import AdminHeader from "../../../layouts/admin/header";
import { useDispatch, useSelector } from "react-redux";
import { getData, postData } from "../../../redux/slice/personDataSlice";
import { useFormik } from "formik";
import axios from "axios";
import { solidersSchema } from "./schema";
import "./index.scss";
const AddSolider = () => {
  const [navbar, setNavbar] = useState(true);
  const dispatch = useDispatch();
  const [postImage, setPostImage] = useState("");
  useEffect(() => {
    dispatch(getData(""));
  }, []);
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        name: "",
        life: "",
        image: "",
        fight: "",
        longName: "",
        date: "",
        rankImg: "",
        rank: "",
        reward: "",
      },
      validationSchema: solidersSchema,
      onSubmit: async (values) => {
        console.log(values);
        postImage ? (values.image = postImage) : "";
        dispatch(postData(values)).then(() => dispatch(getData()));
        resetForm()
      },
    });

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage(base64);
  };
  return (
    <div id="add-solider-page">
      <AdminHeader navbar={navbar} setNavbar={setNavbar} />
      {navbar && <AdminNavbar />}
      <div id="add-solider">
        <div className="container">
          <div className="add-solider">
            <form onSubmit={handleSubmit}>
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
                  <div className="input-image">
                    <p>
                      <label htmlFor="image" className="m-2">
                        Şəkil
                      </label>
                    </p>
                    <input
                      id="image"
                      name="image"
                      type="file"
                      placeholder="Şəkil"
                      onChange={(e) => {
                        handleFileUpload(e);
                      }}
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
                  Add Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSolider;
