import React from "react";
import AdminNavbar from "../Components/Admin/AdminNavbar";
import AdminSidebar from "../Components/Admin/AdminSidebar";
import AdminProduct from "../Components/Admin/AdminProduct";

function Admin() {
  return (
    <div>
      <AdminNavbar />
      <AdminSidebar />
      <AdminProduct />
    </div>
  );
}

export default Admin;
