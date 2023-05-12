import React from "react";
import { Button, Result } from "antd";
import "./index.scss";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div id="error-page">
      <div className="container">
        <div className="error-page">
          <Result
            status="404"
            title="404"
            subTitle="Bağışlayın, ziyarət etdiyiniz səhifə mövcud deyil."
            extra={
              <Button type="primary" onClick={() => navigate("/")}>
                Əsas Səhifə
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
