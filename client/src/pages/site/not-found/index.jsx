import React from "react";
import { Button, Result } from "antd";
const NotFound = () => {
  return (
    <div id="error-page">
      <div className="container">
        <div className="error-page">
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary">Back Home</Button>}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
