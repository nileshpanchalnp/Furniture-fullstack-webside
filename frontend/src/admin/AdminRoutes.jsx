import React from "react";
import { Route, Routes } from "react-router-dom";
import ChairAdmin from "../admin/chair_admin/ChairAdmin";
import SofaAdmin from "./sofa_admin/Sofa_admin";
import BedAdmin from "./bed_admin/Bed_admin";
import LoginUser from "./login_user/LoginUser";

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/chairadmin" element={<ChairAdmin />} />
        <Route path="/sofaadmin" element={<SofaAdmin/>}/>
        <Route path="/bedadmin" element={<BedAdmin/>}/>
        <Route path="/loginUserInfo" element={<LoginUser/>}/>
      </Routes>
    </div>
  );
};

export default AdminRoutes;
