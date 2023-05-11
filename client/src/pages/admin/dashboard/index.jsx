import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../../components/admin/navbar";
import "./index.scss";
import AdminHeader from "../../../layouts/admin/header";
const DashBoard = () => {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(true);
  return (
    <div id="admin-page">
      <Helmet>
        <title>Admin Panel</title>
        {/* <link rel="icon" type="image/svg+xml" href={favicon} /> */}
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div className="dashboard">
        <AdminHeader navbar={navbar} setNavbar={setNavbar} />
        {navbar && <AdminNavbar />}
        <div className="body-admin">
          <h1> Admin panel</h1>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
