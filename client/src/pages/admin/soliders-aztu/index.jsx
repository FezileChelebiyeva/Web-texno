import React, { useState } from 'react'
import AdminHeader from '../../../layouts/admin/header'
import AdminNavbar from '../../../components/admin/navbar'

const SolidersListAzTu = () => {
  const [navbar, setNavbar] = useState(true);
  return (
    <div>
      <AdminHeader navbar={navbar} setNavbar={setNavbar} />
      {navbar && <AdminNavbar />}
      SolidersListAzTu</div>
  )
}

export default SolidersListAzTu