import React from "react";
import { Route, Routes } from "react-router-dom";
import ChairAdmin from "../admin/chair_admin/ChairAdmin";

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/chairadmin" element={<ChairAdmin />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
