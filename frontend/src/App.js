import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Store from "./components/Store";

function App() {
  return (
    <>
      {/* router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* router */}
    </>
  );
}

export default App;
