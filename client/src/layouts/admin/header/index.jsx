import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
const AdminHeader = () => {
  const navigate = useNavigate();
  return (
    <div id="admin-header">
      <div className="header">
        <div className="header-body">
          <div className="settings">
            <div className="setting">
              <i className="fa-solid fa-gear"></i>
            </div>
          </div>
          <div className="btn">
            <button onClick={() => navigate("/")}>
              <i className="fa-solid fa-right-to-bracket"></i>
              GO TO SITE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
