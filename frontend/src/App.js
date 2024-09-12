import AdminRoutes from "./admin/AdminRoutes";
import Dashbord from "./admin/Dashbord";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Store from "./components/Store";
import Sofa from "./components/Sofa";
import Bed from "./components/Bed";
import Chair from "./components/Chair";
import CheckOut from "./components/CheckOut";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      {/* router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sofa" element={<Sofa />} />
        <Route path="/bed" element={<Bed />} />
        <Route path="/chair" element={<Chair />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/admin" element={<Dashbord />} />
      </Routes>
      {/* router */}
      <AdminRoutes />
    </>
  );
}

export default App;
