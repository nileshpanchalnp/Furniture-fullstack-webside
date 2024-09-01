import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Store from "./components/Store";
import Sofa from "./components/Sofa";
import Bed from "./components/Bed";
import Chair from "./components/Chair";

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
      </Routes>
      {/* router */}
    </>
  );
}

export default App;
