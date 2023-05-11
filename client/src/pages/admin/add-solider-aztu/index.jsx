import React, { useState } from "react";
import AdminNavbar from "../../../components/admin/navbar";
import AdminHeader from "../../../layouts/admin/header";

const AddSoliderAzTu = () => {
  const [navbar, setNavbar] = useState(true);
  return (
    <div>
      <AdminHeader navbar={navbar} setNavbar={setNavbar} />
      {navbar && <AdminNavbar />}
      AddSoliderAzTu
    </div>
  );
};

export default AddSoliderAzTu;
